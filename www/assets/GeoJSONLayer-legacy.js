System.register(["./index-legacy.js","./clientSideDefaults-legacy.js","./QueryEngineCapabilities-legacy.js"],(function(e,t){"use strict";var r,i,o,s,n,a,l,u,d,p,c,h,y,f,m,g,v,b,O,F,S,x,E,I,j,w,_,N,J,R,q,P,T,k,D,G,Q,z,Z,C,$,L,V,A,U,W,B,M,H,K,X;return{setters:[e=>{r=e.x,i=e.y,o=e.z,s=e.ex,n=e.A,a=e.E,l=e.aQ,u=e.s,d=e.aN,p=e.ed,c=e.ai,h=e.d3,y=e.w,f=e.f6,m=e.dG,g=e.f7,v=e.f8,b=e.bs,O=e.dD,F=e.bt,S=e.dd,x=e.de,E=e.df,I=e.dg,j=e.bc,w=e.bx,_=e.f9,N=e.f4,J=e.ao,R=e._,q=e.fa,P=e.az,T=e.dM,k=e.e5,D=e.d2,G=e.dh,Q=e.fb,z=e.fc,Z=e.fd,C=e.di,$=e.fe,L=e.ff,V=e.F,A=e.fg,U=e.fh,W=e.fi,B=e.fj,M=e.dj,H=e.fk,K=e.bw},e=>{X=e.l},null],execute:function(){let Y=class extends s{constructor(){super(...arguments),this.type="geojson",this.refresh=n((async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}}))}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}applyEdits(e){return this.load().then((()=>this._applyEdits(e)))}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>a.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:l.fromJSON(e.extent)})))}querySnapping(e,t={}){return this.load(t).then((()=>this._connection.invoke("querySnapping",e,t)))}_applyEdits(e){if(!this._connection)throw new u("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],i=[],o=[];if(e.addFeatures)for(const s of e.addFeatures)r.push(this._serializeFeature(s));if(e.deleteFeatures)for(const s of e.deleteFeatures)"objectId"in s&&null!=s.objectId?i.push(s.objectId):"attributes"in s&&null!=s.attributes[t]&&i.push(s.attributes[t]);if(e.updateFeatures)for(const s of e.updateFeatures)o.push(this._serializeFeature(s));return this._connection.invoke("applyEdits",{adds:r,updates:o,deletes:i}).then((({extent:e,timeExtent:t,featureEditResults:r})=>(this.sourceJSON.extent=e,t&&(this.sourceJSON.timeInfo.timeExtent=[t.start,t.end]),this._createEditsResult(r))))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new u("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return null==t?null:"mesh"===t.type||"extent"===t.type?d.fromExtent(t.extent):t}async _startWorker(e){this._connection=await p("GeoJSONSourceWorker",{strategy:c("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:r,hasZ:i,geometryType:o,objectIdField:s,url:n,timeInfo:a,customParameters:l}=this.layer,u="defaults"===this.layer.originOf("spatialReference"),d={url:n,customParameters:l,fields:t&&t.map((e=>e.toJSON())),geometryType:h.toJSON(o),hasZ:i,objectIdField:s,timeInfo:a?a.toJSON():null,spatialReference:u?null:r&&r.toJSON()},f=await this._connection.invoke("load",d,{signal:e});for(const p of f.warnings)y.getLogger(this.layer).warn("#load()",`$${p.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:p});f.featureErrors.length&&y.getLogger(this.layer).warn("#load()",`Encountered ${f.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:f.featureErrors}),this.sourceJSON=f.layerDefinition,this.capabilities=X(this.sourceJSON.hasZ,!0)}};r([i()],Y.prototype,"capabilities",void 0),r([i()],Y.prototype,"type",void 0),r([i({constructOnly:!0})],Y.prototype,"layer",void 0),r([i()],Y.prototype,"sourceJSON",void 0),Y=r([o("esri.layers.graphics.sources.GeoJSONSource")],Y);const ee=H();let te=class extends(f(m(g(v(b(O(F(S(x(E(I(K)))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new Y({layer:this}),this.spatialReference=j.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){this.source?.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(w).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),_(this.renderer,this.fieldsIndex),N(this.timeInfo,this.fieldsIndex)}));return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}get parsedUrl(){return this.url?J(this.url):null}set renderer(e){_(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=J(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,r){const{applyEdits:i}=await R((()=>t.import("./editingSupport-legacy.js")),void 0,t.meta.url);await this.load();const o=await i(this,this.source,e,r);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),o}on(e,t){return super.on(e,t)}createPopupTemplate(e){return q(this,e)}createQuery(){const e=new P,t=this.capabilities?.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:i}=this;return e.timeExtent=null!=r&&null!=i?i.offset(-r.value,r.unit):i||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(P.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(P.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(P.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(P.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return null!=t&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i({readOnly:!0,json:{read:!1,write:!1}})],te.prototype,"capabilities",null),r([i({type:String})],te.prototype,"copyright",void 0),r([i({readOnly:!0})],te.prototype,"createQueryVersion",null),r([i(T("dateFieldsTimeReference"))],te.prototype,"dateFieldsTimeZone",void 0),r([i({readOnly:!0})],te.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],te.prototype,"definitionExpression",void 0),r([i({type:String})],te.prototype,"displayField",void 0),r([i({type:Boolean})],te.prototype,"editingEnabled",void 0),r([i(k)],te.prototype,"elevationInfo",void 0),r([i({type:[D],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],te.prototype,"fields",void 0),r([i(ee.fieldsIndex)],te.prototype,"fieldsIndex",void 0),r([i({type:l,json:{name:"extent"}})],te.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:h.read}}})],te.prototype,"geometryType",void 0),r([i({type:Boolean})],te.prototype,"hasZ",void 0),r([i(G)],te.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],te.prototype,"isTable",null),r([i(Q)],te.prototype,"labelsVisible",void 0),r([i({type:[z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Z},write:!0}})],te.prototype,"labelingInfo",void 0),r([i(C)],te.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],te.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],te.prototype,"objectIdField",void 0),r([i($)],te.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],te.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],te.prototype,"parsedUrl",null),r([i(L)],te.prototype,"popupEnabled",void 0),r([i({type:V,json:{name:"popupInfo",write:!0}})],te.prototype,"popupTemplate",void 0),r([i({types:A,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:U}}}})],te.prototype,"renderer",null),r([i(W)],te.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],te.prototype,"source",void 0),r([i({type:j})],te.prototype,"spatialReference",void 0),r([i({type:[B]})],te.prototype,"templates",void 0),r([i()],te.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],te.prototype,"type",void 0),r([i(M)],te.prototype,"url",null),te=r([o("esri.layers.GeoJSONLayer")],te),e("default",te)}}}));
