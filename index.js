/**
 * Copyright 2020 Paul Reeve <preeve@pdjr.eu>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const Log = require("./lib/signalk-liblog/Log.js");
const Schema = require("./lib/signalk-libschema/Schema.js");
const Delta = require("./lib/signalk-libdelta/Delta.js");

const PLUGIN_SCHEMA_FILE = __dirname + "/schema.json";
const PLUGIN_UISCHEMA_FILE = __dirname + "/uischema.json";

module.exports = function (app) {
  var plugin = {};
  var unsubscribes = [];

  plugin.id = 'meta';
  plugin.name = 'Meta data injector';
  plugin.description = 'Inject meta data into Signal K';

  const log = new Log(plugin.id, { ncallback: app.setPluginStatus, ecallback: app.setPluginError });

  plugin.schema = function() {
    var schema = Schema.createSchema(PLUGIN_SCHEMA_FILE);
    return(schema.getSchema());
  };

  plugin.uiSchema = function() {
    var schema = Schema.createSchema(PLUGIN_UISCHEMA_FILE);
    return(schema.getSchema());
  }

  plugin.start = function(options) {
    // Sort the metadata by key length and alphabetically to best
    // support future processing.
    options.metadata = options.metadata.sort((a,b) => (a.key === undefined)?+1:((b.key === undefined)?-1:(a.key > b.key)));

    // Initialise a delta update object.
    var delta = new Delta(app, plugin.id);

    // Issue a notification to indicate the plugin is working.
    delta.addValue(options.statuskey, { "message": "working", "state": "normal", "method": [] }).commit().clear();

    // Collate and prepare meta data from the config file.
    options.metadata.forEach(meta => {
      var key = meta.key;
      if ((key) && (!key.endsWith("."))) {
        var metaValue = getMetaForPath(key, options.metadata);
        delta.addMeta(key, metaValue);
      }
    });
    log.N("injecting local meta data for %d keys", delta.count());
    delta.commit().clear();

    if (options.includepaths) {
      options.includepaths.forEach(key => {
        var stream = app.streambundle.getSelfStream(key);
        unsubscribes.push(stream.onValue(metadata => {
          if (metadata) {
            var delta = new Delta(app, plugin.id);
            metadata.forEach(meta => {
              var key = meta.key;
              if ((key) && (!key.endsWith("."))) {
                var metaValue = getMetaForPath(key, metadata);
                delta.addMeta(key, metaValue);
              }
            });
            log.N("injecting %d meta values from %s", delta.count(), key);
            delta.commit().clear();
          }
        }));
      });
    }

    // Issue a notification to indicate that the plugin has finished.
    delta.addValue(options.statuskey, { "message": "complete", "state": "normal", "method": [] }).commit().clear();
  }

  plugin.stop = function() {
	unsubscribes.forEach(f => f());
    var unsubscribes = [];
  }

  function getMetaForPath(path, metadata) {
    return(metadata.reduce((a,m) => { if (path.startsWith(m.key)) Object.keys(m).filter(k => (k != "key")).forEach(k => a[k] = m[k]); return(a); }, {}));
  }

  return(plugin);
}
