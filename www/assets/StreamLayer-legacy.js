System.register(["./index-legacy.js"],(function(e,t){"use strict";var i,r,s,o,n,a,l,d,p,c,u,y,h,m,f,g,v,b,w,S,I,x,j,R,T,F,P,E,O,A,D,k,_,C,U,N,L,V,G,z,J,M,$,W,q,Q,X,B,H,K,Y,Z,ee;return{setters:[e=>{i=e.x,r=e.y,s=e.z,o=e.bX,n=e.f7,a=e.f8,l=e.bs,d=e.dD,p=e.bt,c=e.dd,u=e.dE,y=e.de,h=e.df,m=e.dg,f=e.dG,g=e.db,v=e.bc,b=e.A,w=e.s,S=e.bx,I=e.f9,x=e.fC,j=e.w,R=e.fD,T=e._,F=e.d3,P=e.es,E=e.fa,O=e.az,A=e.fp,D=e.X,k=e.d2,_=e.f4,C=e.bB,U=e.bu,N=e.aQ,L=e.fb,V=e.fc,G=e.fd,z=e.di,J=e.dO,M=e.fE,$=e.fF,W=e.ff,q=e.F,Q=e.fg,X=e.fh,B=e.bD,H=e.ax,K=e.fi,Y=e.dj,Z=e.fk,ee=e.bw}],execute:function(){var te;let ie=te=class extends o{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new te({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};i([r({type:Number,json:{write:!0}})],ie.prototype,"age",void 0),i([r({type:Number,json:{write:!0}})],ie.prototype,"ageReceived",void 0),i([r({type:Number,json:{write:!0}})],ie.prototype,"displayCount",void 0),i([r({type:Number,json:{write:!0}})],ie.prototype,"maxObservations",void 0),ie=te=i([s("esri.layers.support.PurgeOptions")],ie);const re=ie,se=Z();function oe(e,t){return new w("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}let ne=class extends(n(a(l(d(p(c(u(y(h(m(f(g(ee))))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.outFields=["*"],this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new re,this.refreshInterval=0,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=v.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.useViewTime=!0,this.webSocketUrl=null,this._debouncedSaveOperations=b((async(e,i,r)=>{const{save:s,saveAs:o}=await T((()=>t.import("./streamLayerUtils-legacy.js")),void 0,t.meta.url);switch(e){case A.SAVE:return s(this,i);case A.SAVE_AS:return o(this,r,i)}}))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new w("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(S).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){t=t.layerDefinition||t;const r=t.drawingInfo?.renderer;if(r){const e=x(r,t,i)||void 0;return e||j.getLogger(this).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}return R(t,i)}async connect(e){const[{createConnection:i}]=await Promise.all([T((()=>t.import("./createConnection-legacy.js")),void 0,t.meta.url),this.load()]),r=this.geometryType?F.toJSON(this.geometryType):null,{customParameters:s=null,definitionExpression:o=null,geometryDefinition:n=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:l=20,spatialReference:d=this.spatialReference}=e||this.createConnectionParameters(),p=i(this.parsedUrl,this.spatialReference,d,r,o,n,a,l,s??void 0),c=P([this.on("send-message-to-socket",(e=>p.sendMessageToSocket(e))),this.on("send-message-to-client",(e=>p.sendMessageToClient(e)))]);return p.once("destroy",c.remove),p}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return E(this,e)}createQuery(){const e=new O;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}async save(e){return this._debouncedSaveOperations(A.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(A.SAVE_AS,t,e)}write(e,t){const i=t?.messages;return this.webSocketUrl?(i?.push(oe(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,t):(i?.push(oe(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:t}=await D(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}}else{if(!this.timeInfo?.trackIdField)throw new w("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const e=this.fields.find((e=>"oid"===e.type))?.name;if(!e)throw new w("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=e}if(!this.fields)throw new w("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some((e=>e.name===this.objectIdField))||this.fields.push(new k({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new w("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:this.portalItem?.portal,url:this.parsedUrl}),I(this.renderer,this.fieldsIndex),_(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),C(this,{origin:"service"})}};i([r({type:String})],ne.prototype,"copyright",void 0),i([r({readOnly:!0})],ne.prototype,"defaultPopupTemplate",null),i([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ne.prototype,"definitionExpression",void 0),i([r({type:String})],ne.prototype,"displayField",void 0),i([r({type:U})],ne.prototype,"elevationInfo",void 0),i([r({json:{origins:{"web-map":{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],ne.prototype,"featureReduction",null),i([r(se.fields)],ne.prototype,"fields",void 0),i([r(se.fieldsIndex)],ne.prototype,"fieldsIndex",void 0),i([r({type:N,json:{name:"layerDefinition.definitionGeometry",write:!0}})],ne.prototype,"geometryDefinition",void 0),i([r({type:F.apiValues,json:{read:{reader:F.read}}})],ne.prototype,"geometryType",void 0),i([r(L)],ne.prototype,"labelsVisible",void 0),i([r({type:[V],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:G},write:!0}})],ne.prototype,"labelingInfo",void 0),i([r(z)],ne.prototype,"legendEnabled",void 0),i([r({type:["show","hide"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],ne.prototype,"listMode",void 0),i([r({type:J})],ne.prototype,"maxReconnectionAttempts",void 0),i([r({type:J})],ne.prototype,"maxReconnectionInterval",void 0),i([r(M)],ne.prototype,"maxScale",void 0),i([r($)],ne.prototype,"minScale",void 0),i([r({type:String})],ne.prototype,"objectIdField",void 0),i([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],ne.prototype,"operationalLayerType",void 0),i([r({readOnly:!0})],ne.prototype,"outFields",void 0),i([r(W)],ne.prototype,"popupEnabled",void 0),i([r({type:q,json:{name:"popupInfo",write:!0}})],ne.prototype,"popupTemplate",void 0),i([r({type:re})],ne.prototype,"purgeOptions",void 0),i([r({json:{read:!1,write:!1}})],ne.prototype,"refreshInterval",void 0),i([r({types:Q,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:X,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],ne.prototype,"renderer",null),i([B("service","renderer",["drawingInfo.renderer","defaultSymbol"]),B("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],ne.prototype,"readRenderer",null),i([r((()=>{const e=H(K);return e.json.origins["portal-item"]={read:!1,write:!1},e})())],ne.prototype,"screenSizePerspectiveEnabled",void 0),i([r()],ne.prototype,"sourceJSON",void 0),i([r({type:v,json:{origins:{service:{read:{source:"spatialReference"}}}}})],ne.prototype,"spatialReference",void 0),i([r({json:{read:!1}})],ne.prototype,"type",void 0),i([r(Y)],ne.prototype,"url",void 0),i([r({type:Number})],ne.prototype,"updateInterval",void 0),i([r({json:{read:!1,write:!1}})],ne.prototype,"useViewTime",void 0),i([r({type:String})],ne.prototype,"webSocketUrl",void 0),ne=i([s("esri.layers.StreamLayer")],ne),e("default",ne)}}}));
