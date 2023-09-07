"use strict";(self.webpackChunkpdjr_skplugin_metadata=self.webpackChunkpdjr_skplugin_metadata||[]).push([[368],{538:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var s=a(624),l=a.n(s),n=a(264);class r extends l().Component{constructor(e){super(e),this.state={label_style:{lineHeight:"36px"},type:e.type,name:e.name,label:e.label,text:e.text,value:e.value,setter:e.setter}}render(){return l().createElement(n.cw,{row:!0},l().createElement(n.JX,{md:"6"},l().createElement(n.__,{style:this.state.label_style,htmlFor:this.state.name},this.state.label)),l().createElement(n.JX,{md:"6"},"checkbox"==this.state.type?l().createElement(n.II,{type:"checkbox",name:this.state.name,onChange:e=>this.setValue(e.target.checked),value:this.state.value}):"","text"==this.state.type?l().createElement(n.II,{type:"text",name:this.state.name,onChange:e=>this.setValue(e.target.value),value:this.state.value}):"",l().createElement(n.R9,{color:"muted"},this.state.text)))}setValue(e){this.setState({value:e}),this.setter(e)}}const i=r;class o extends l().Component{constructor(e){super(e),this.resource_type_ref=l().createRef(),this.state={resource_type:e.configuration.resourceType,start_delay:e.configuration.startDelay,exclude_paths:e.configuration.excludePaths.join(", "),persist:e.configuration.persist,save:e.save},this.onChangeResourceType=this.onChangeResourceType.bind(this),this.onChangeStartDelay=this.onChangeStartDelay.bind(this),this.onChangeExcludePaths=this.onChangeExcludePaths.bind(this),this.onChangePersist=this.onChangePersist.bind(this)}render(){return l().createElement(n.l0,{className:"square rounded border",style:{padding:"5px"}},l().createElement(n.cw,{row:!0,style:{height:"60px"}},l().createElement(n.JX,null,l().createElement(i,{type:"text",name:"resource_type",label:"Metadata resource type",value:this.state.resource_type,text:"",setter:this.onChangeResourceType}))),l().createElement(n.cw,{row:!0,style:{height:"300px"}},l().createElement(n.JX,null,l().createElement(i,{type:"text",name:"start_delay",label:"Start delay",value:this.state.start_delay,text:"",setter:e=>this.onChangeStartDelay(e)}),l().createElement(i,{type:"text",name:"exclude_paths",label:"Exclude paths beginning with",value:this.state.exclude_paths,text:"",setter:e=>this.onChangeExcludePaths(e)}),l().createElement(i,{type:"checkbox",fieldName:"persist",label:"Persist dynamic changes",value:this.state.persist,text:"",setter:e=>this.onChangePersist(e)}))),l().createElement(n.cw,{row:!0},l().createElement(n.JX,null,l().createElement(n.Si,{style:{justifyContent:"space-between"}},l().createElement(n.Si,null,l().createElement(n.zx,{size:"sm",color:"primary",onClick:e=>{e.preventDefault(),this.onSubmit()}},l().createElement("i",{className:"fa fa-save"})," Save ")," ",l().createElement(n.zx,{size:"sm",color:"primary",onClick:e=>{e.preventDefault(),this.onCancel()}},l().createElement("i",{className:"fa fa-ban"})," Cancel ")),l().createElement(n.Si,null,l().createElement(n.zx,{size:"sm",color:"danger",onClick:e=>{e.preventDefault(),this.onCompose()}},l().createElement("i",{className:"fa fa-save"})," Compose ")," ",l().createElement(n.zx,{size:"sm",color:"danger",onClick:e=>{e.preventDefault(),this.onSnapshot()}},l().createElement("i",{className:"fa fa-save"})," Snapshot "))))))}onChangeResourceType(e){this.setState({resource_type:e})}onChangeStartDelay(e){this.setState({start_delay:e})}onChangeExcludePaths(e){this.setState({exclude_paths:e})}onChangePersist(e){this.setState({persist:e})}onSubmit=()=>{console.log(JSON.stringify(this.state)),this.state.save({resourceType:this.state.resource_type,startDelay:this.state.start_delay,excludePaths:this.state.exclude_paths.split(/,/).map((e=>e.trim())).sort(),persist:this.state.persist})};onCancel=()=>{this.setState({resource_type:this.state.defaults.resourceType,start_delay:this.state.defaults.startDelay,exclude_paths:this.state.defaults.excludePaths.join(", "),persist:this.state.defaults.persist})};onCompose=()=>{confirm("Compose will rebuild metadata from configuration files. New metadata entities may be created and existing metadata entities may be updated. Proceed?")&&fetch("/plugins/metadata/compose",{credentials:"include",method:"PUT"}).then((e=>{200!==e.status&&alert("Compose request failed ("+e.status+")")}))};onSnapshot=()=>{confirm("Snaphot will capture live Signal K metadata into the current metadata resource. New metadata entities may be created and existing metadata entities may be updated. Proceed?")&&fetch("/plugins/metadata/snapshot",{credentials:"include",method:"PUT"}).then((e=>{200!==e.status&&alert("Snapshot request failed ("+e.status+")")}))}}const c=o;var h=a(239);class d extends l().Component{constructor(e){super(e),this.state={urls:e.urls?e.urls:{metadata:"/plugins/metadata/keys",config:"/plugins/metadata/keys",paths:"/plugins/metadata/paths"},scope:e.defaultScope?e.defaultScope:"metadata",metadata_key:null,metadata_value:null,button_save_disabled:!0,button_saveas_disabled:!0,button_delete_disabled:!0}}render(){return l().createElement(n.l0,{className:"square rounded border",style:{padding:"5px"}},l().createElement(n.cw,null,l().createElement(n.cw,{row:!0,style:{height:"60px"}},l().createElement(n.JX,null,l().createElement(h.ZP,{name:"metadata_key",controlShouldRenderValue:!0,loadOptions:this.loadPathOptions,defaultOptions:!0,key:JSON.stringify(this.state.scope),value:this.state.metadata_key,onChange:e=>this.changeMetadataKey(e.value)}),l().createElement("div",{class:"scope-buttons"},l().createElement("label",null,l().createElement("input",{type:"radio",name:"selectScope",value:"metadata",checked:"metadata"===this.state.scope,onChange:e=>this.changeScope(e.target.value)})," metadata "),"    ",l().createElement("label",null,l().createElement("input",{type:"radio",name:"selectScope",value:"config",checked:"config"===this.state.scope,onChange:e=>this.changeScope(e.target.value)})," config "),"    ",l().createElement("label",null,l().createElement("input",{type:"radio",name:"selectScope",value:"paths",checked:"paths"===this.state.scope,onChange:e=>this.changeScope(e.target.value)})," paths "),"    "))),l().createElement(n.cw,{row:!0,style:{height:"300px"}},l().createElement(n.JX,null,l().createElement("textarea",{name:"metadata",rows:"12",wrap:"off",style:{width:"100%"},value:this.state.metadata_value,onChange:e=>changeMetadata(e.value)}))),l().createElement(n.cw,{row:!0},l().createElement(n.JX,null,l().createElement(n.Si,{style:{justifyContent:"space-between"}},l().createElement(n.Si,null,l().createElement(n.zx,{name:"save",size:"sm",color:"primary",disabled:this.state.button_save_disabled,onClick:e=>{e.preventDefault(),onSave()}},l().createElement("i",{className:"fa fa-save"})," Save ")," ",l().createElement(n.zx,{name:"saveAs",size:"sm",color:"primary",disabled:this.state.button_saveas_disabled,onClick:e=>{e.preventDefault(),onSaveAs()}},l().createElement("i",{className:"fa fa-save"})," Save As ")," "),l().createElement(n.Si,null,l().createElement(n.zx,{name:"delete",size:"sm",color:"danger",disabled:this.state.button_delete_disabled,onClick:e=>{e.preventDefault(),onDelete()}},l().createElement("i",{className:"fa fa-ban"})," Delete ")))))))}changeScope=e=>{this.setState({scope:e,metadata_key:null,metadata_value:null})};changeMetadataKey=e=>{this.setState({metadata_key:e,button_save_disabled:!0,button_saveas_disabled:!0,button_delete_disabled:!0}),null!=e&&(console.log(this.state.urls[this.state.scope]+"/"+e),fetch(this.state.urls[this.state.scope]+"/"+e,{credentials:"include"}).then((t=>{t.json().then((e=>{delete e.value.timestamp,delete e.value.$source,this.changeMetadataValue(JSON.stringify(e.value,null,2))})).catch((t=>{alert("The metadata value for '"+e+"' is not valid JSON")}))})).catch((t=>{alert("The metadata value for '"+e+"' could not be retrieved")})))};changeMetadataValue=e=>{this.setState({metadata_value:e||"",button_save_disabled:null===e||"paths"===selectScope,button_saveas_disabled:null===e,button_delete_disabled:null===e||"paths"===selectScope})};loadPathOptions=(e,t)=>{console.log("loadPathOptions()..."),this.setState({metadata_key:null}),console.log(this.state.urls[this.state.scope]),fetch(this.state.urls[this.state.scope],{credentials:"include"}).then((e=>{e.json().then((e=>{switch(this.state.scope){case"metadata":t(e.keys.filter((e=>!e.startsWith("."))).map((e=>({value:e,label:e}))));break;case"config":t(e.keys.filter((e=>e.startsWith("."))).map((e=>({value:e,label:e}))));break;case"paths":t(e.keys.map((e=>({value:e,label:e}))))}}))}))};onSave=()=>{try{var[e,t]=validateMetdata(this.state.metadata_key?this.state.metadata_key.value:null,this.state.metadata_value);fetch("/plugins/metadata/keys/"+e,{credentials:"include",method:"PUT",headers:{"Content-type":"application/json"},body:t}).then((e=>{if(200!=e.status)throw new Error("Server rejected save request (Error "+e.status+")")}))}catch(e){alert(e.message)}};onSaveAs=()=>{try{if(e=prompt("Enter name of new metadata key")){var[e,t]=validateMetadata(e,this.state.metadata_value);fetch("/plugins/metadata/keys/"+e,{credentials:"include",method:"PUT",headers:{"Content-type":"application/json"},body:t}).then((e=>{if(200!=e.status)throw new Error("Server rejected save request (Error "+e.status+")")}))}}catch(e){alert(e.message)}};onDelete=()=>{try{var e=this.state.metadata_key?this.state.metadata_key.value:null;if(null===e)throw new Error("invalid key value");confirm("Really delete metadata for "+e)&&fetch("/plugins/metadata/keys/"+e,{credentials:"include",method:"PUT",headers:{"Content-type":"application/json"},body:null}).then((e=>{if(200!=e.status)throw new Error("Server rejected delete request (Error "+e.status+")");var t=selectScope;this.setState({scope:null}),this.setState({scope:t,metadata_value:null})}))}catch(e){alert(e.message)}};validateMetdata=(e,t)=>{var a,s;if(console.log("validating %s %s",e,t),null!==e){if((a=e.trim()).length>0){if(t){s=t.trim();try{s=JSON.parse(s)}catch(e){throw new Error("matadata value is not valid JSON")}if("object"==typeof s)return[a,JSON.stringify(s)];throw new Error("metadata value is not a JSON object")}throw new Error("metadata value is null")}throw new Error("key is blank")}throw new Error("key is null")}}const u=d,m=e=>l().createElement(n.Zb,null,l().createElement(n.Ol,null,"Metadata Configuration"),l().createElement(n.eW,null,l().createElement("div",null,l().createElement("div",{style:{float:"left",width:"49%"}},l().createElement(c,{configuration:e.configuration,save:t=>e.save(t)})),l().createElement("div",{style:{float:"right",width:"49%"}},l().createElement(u,null)))))}}]);