System.register(["./index-legacy.js"],(function(e,t){"use strict";var r,i,n,s,o,a,l,u,d,p,y,c,h,f,b,g,m,v,w,F,S,I,O,j,E,T,L,x,A,C,_,P,G,V,q,$,D,R,N,k,M,Q,U,H,J,z,B,K,Z,W,X,Y,ee,te,re,ie,ne,se,oe,ae,le,ue,de,pe,ye,ce,he,fe,be,ge,me,ve,we,Fe,Se,Ie,Oe,je,Ee;return{setters:[e=>{r=e.fG,i=e.dg,n=e.db,s=e.dc,o=e.ax,a=e.dV,l=e.w,u=e.f9,d=e.J,p=e.s,y=e.fa,c=e.fH,h=e.D,f=e.az,b=e.x,g=e.y,m=e.dN,v=e.fI,w=e.fb,F=e.fc,S=e.fd,I=e.di,O=e.fF,j=e.fE,E=e.ff,T=e.F,L=e.bD,x=e.fj,A=e.z,C=e.fJ,_=e.fK,P=e.fL,G=e.fk,V=e.fM,q=e.fN,$=e.fO,D=e.ex,R=e.fP,N=e.fQ,k=e.bs,M=e.dD,Q=e.bt,U=e.dd,H=e.dE,J=e.de,z=e.df,B=e.dG,K=e.dF,Z=e.V,W=e.A,X=e.C,Y=e.en,ee=e.bx,te=e.ey,re=e.fR,ie=e.ao,ne=e.bG,se=e.fS,oe=e.fT,ae=e.fU,le=e.fV,ue=e.eG,de=e._,pe=e.fW,ye=e.fX,ce=e.dK,he=e.fY,fe=e.fZ,be=e.f_,ge=e.f$,me=e.g0,ve=e.g1,we=e.fp,Fe=e.dL,Se=e.f4,Ie=e.g2,Oe=e.dh,je=e.f2,Ee=e.bw}],execute:function(){const Te={key:"type",base:C,errorContext:"renderer",typeMap:{simple:d,"unique-value":_,"class-breaks":P}},Le=G(),xe=r({types:Te});let Ae=0;function Ce(e){const t=e.json.write;return"object"==typeof t?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function _e(e){switch(e){case"point":case"multipoint":return $.clone();case"polyline":return q.clone();case"polygon":case"multipatch":return V.clone();default:return null}}function Pe(e,t){return null==e?null:t.subtypes?.find((t=>t.code===e))}function Ge(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const i={},n=Pe(e,t);if(null!=n){const{defaultValues:e}=n;for(const t in e)i[t]=e[t]}return i[t.subtypeField]=e,new x({name:"New Feature",drawingTool:r,prototype:{attributes:i}})}const Ve="esri.layers.support.SubtypeSublayer";let qe=class extends(i(n(s(D)))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${Ae++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){return this.parent?.capabilities}get effectiveCapabilities(){return this.parent?.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){return this.parent?.elevationInfo}writeFieldOverrides(e,t,r){const{fields:i,parent:n}=this;let s;if(i){s=[];let e=0;i.forEach((({name:t,alias:r,editable:i,visible:o})=>{if(!o)return;const a=n?.fields?.find((e=>e.name===t));if(!a)return;const l={name:t};let u=!1;r!==a.alias&&(l.alias=r,u=!0),i!==a.editable&&(l.editable=i,u=!0),s.push(l),u&&e++})),0===e&&s.length===i.length&&(s=null)}else s=o(e);s?.length&&a(r,s,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,i=e?.fields;if(!e||!i?.length)return null;const{subtypes:n,subtypeField:s}=e,o=n?.find((e=>e.code===r)),a=o?.defaultValues,l=o?.domains,u=[];for(const d of i){const e=d.clone(),{name:i}=e,n=t?.find((e=>e.name===i));if(e.visible=!t||!!n,n){const{alias:t,editable:r}=n;t&&(e.alias=t),!1===r&&(e.editable=!1)}const o=a?.[i]??null;e.defaultValue=i===s?r:o;const p=l?.[i]??null;e.domain=i===s?null:p?"inherited"===p.type?e.domain:p.clone():null,u.push(e)}return u}get floorInfo(){return this.parent?.floorInfo}get geometryType(){return this.parent?.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){return this.parent||l.getLogger(Ve).error(De("objectIdField")),this.parent?.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){u(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&"mesh"!==e.geometryType?function(e){return new d({symbol:_e(e)})}(e.geometryType):null}readRendererFromService(e,t,r){if("Table"===t.type)return null;const i=t.drawingInfo?.renderer,n=xe(i,t,r);let s;const{subtypeCode:o}=this;if(null!=o&&function(e,t){return!(!t||"unique-value"!==e?.type||"string"!=typeof e.field||e.field.toLowerCase()!==t.toLowerCase()||e.field2||e.field3||e.valueExpression)}(n,t.subtypeField)){const e=n.uniqueValueInfos?.find((({value:e})=>(e="number"==typeof e?String(e):e)===String(o)));e&&(s=new d({symbol:e.symbol}))}else"simple"!==n?.type||n.visualVariables?.length||(s=n);return s}readRenderer(e,t,r){const i=t?.layerDefinition?.drawingInfo?.renderer;if(!i)return;const n=i.visualVariables?.some((e=>"rotationInfo"!==e.type));return n?void 0:xe(i,t,r)||void 0}get spatialReference(){return this.parent?.spatialReference}get subtypeField(){return this.parent?.subtypeField}readTemplatesFromService(e,t){return[Ge(this.subtypeCode,t)]}readTitleFromService(e,t){const r=Pe(this.subtypeCode,t);return null!=r?r.name:null}get url(){return this.parent?.url}get userHasUpdateItemPrivileges(){return!!this.parent?.userHasUpdateItemPrivileges}async addAttachment(e,t){const{parent:r}=this;if(!r)throw De("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new p("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:i}=this;if(!i)throw De("updateAttachment");if(e.getAttribute(i.subtypeField)!==this.subtypeCode)throw new p("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return i.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw De("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new p("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw De("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:i,title:n}=this;if(r){const{displayField:e,editFieldsInfo:s,objectIdField:o}=r;t={displayField:e,editFieldsInfo:s,fields:i,objectIdField:o,title:n}}return y(t,e)}createQuery(){if(!this.parent)throw De("createQuery");const e=c(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=h(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw De("queryAttachments");const i=e.clone();return i.where=$e(i.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw De("queryFeatures");const i=f.from(e)??r.createQuery();return null!=e&&(i.where=$e(i.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(i,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"capabilities",null),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"effectiveCapabilities",null),b([g({json:{write:{ignoreOrigin:!0}}})],qe.prototype,"charts",void 0),b([g({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],qe.prototype,"editingEnabled",void 0),b([g({type:Boolean,readOnly:!0})],qe.prototype,"effectiveEditingEnabled",null),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"elevationInfo",null),b([g({json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],qe.prototype,"fieldOverrides",void 0),b([m("fieldOverrides")],qe.prototype,"writeFieldOverrides",null),b([g({...Le.fields,readOnly:!0,json:{read:!1}})],qe.prototype,"fields",null),b([g(Le.fieldsIndex)],qe.prototype,"fieldsIndex",void 0),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"floorInfo",null),b([g({type:v,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],qe.prototype,"formTemplate",void 0),b([g({type:String,clonable:!1,readOnly:!0,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],qe.prototype,"id",void 0),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"geometryType",null),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"type",void 0),b([g(Ce(o(w)))],qe.prototype,"labelsVisible",void 0),b([g({type:[F],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:S},write:{ignoreOrigin:!0}}})],qe.prototype,"labelingInfo",void 0),b([g({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],qe.prototype,"layerType",void 0),b([g(Ce(o(I)))],qe.prototype,"legendEnabled",void 0),b([g({type:["show","hide"]})],qe.prototype,"listMode",void 0),b([g((()=>{const e=o(O);return e.json.origins.service.read=!1,Ce(e)})())],qe.prototype,"minScale",void 0),b([g((()=>{const e=o(j);return e.json.origins.service.read=!1,Ce(e)})())],qe.prototype,"maxScale",void 0),b([g({readOnly:!0})],qe.prototype,"effectiveScaleRange",null),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"objectIdField",null),b([g({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],qe.prototype,"opacity",void 0),b([g({clonable:!1})],qe.prototype,"parent",void 0),b([g(Ce(o(E)))],qe.prototype,"popupEnabled",void 0),b([g({type:T,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],qe.prototype,"popupTemplate",void 0),b([g({readOnly:!0})],qe.prototype,"defaultPopupTemplate",null),b([g({types:Te,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],qe.prototype,"renderer",null),b([L("service","renderer",["drawingInfo.renderer","subtypeField","type"])],qe.prototype,"readRendererFromService",null),b([L("renderer",["layerDefinition.drawingInfo.renderer"])],qe.prototype,"readRenderer",null),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"spatialReference",null),b([g({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],qe.prototype,"subtypeCode",void 0),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"subtypeField",null),b([g({type:[x],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],qe.prototype,"templates",void 0),b([L("service","templates",["geometryType","subtypeField","subtypes","type"])],qe.prototype,"readTemplatesFromService",null),b([g({type:String,json:{write:{ignoreOrigin:!0}}})],qe.prototype,"title",void 0),b([L("service","title",["subtypes"])],qe.prototype,"readTitleFromService",null),b([g({readOnly:!0,json:{read:!1}})],qe.prototype,"url",null),b([g({readOnly:!0})],qe.prototype,"userHasUpdateItemPrivileges",null),b([g({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],qe.prototype,"visible",void 0),qe=b([A(Ve)],qe);const $e=(e,t,r)=>{const i=new RegExp(`${t}\\s*=\\s*\\d+`),n=`${t}=${r}`,s=e??"";return i.test(s)?s.replace(i,n):h(n,s)},De=e=>new p(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),Re=qe,Ne="SubtypeGroupLayer";function ke(e,t){return new p("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const Me=G();let Qe=class extends(R(N(k(M(Q(U(H(J(z(i(B(K(n(Ee)))))))))))))){constructor(...e){super(...e),this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.sublayers=new(Z.ofType(Re)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this._debouncedSaveOperations=W((async(e,r,i)=>{const{save:n,saveAs:s}=await de((()=>t.import("./featureLayerUtils-legacy.js")),void 0,t.meta.url);switch(e){case we.SAVE:return n(this,r);case we.SAVE_AS:return s(this,i,r)}})),this.addHandles(X((()=>this.sublayers),((e,t)=>this._handleSublayersChange(e,t)),Y))}destroy(){this.source?.destroy()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(ee).then((async()=>{if(!this.url)throw new p("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(null==this.layerId)throw new p("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))})).then((()=>te(this,"load",e)));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&null!=this.capabilities&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return re(this)}get parsedUrl(){const e=ie(this.url);return null!=e&&null!=this.layerId&&(e.path=ne(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?se(this.url,t):t}async addAttachment(e,t){return oe(this,e,t,Ne)}async updateAttachment(e,t,r){return ae(this,e,t,r,Ne)}async applyEdits(e,t){return le(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:r}=await ue(de((()=>t.import("./FeatureLayerSource-legacy.js")),void 0,t.meta.url),e);return new r({layer:this}).load({signal:e})}createQuery(){const e=c(this),t=this.sublayers.map((e=>e.subtypeCode));return e.where=h(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return pe(this,e,t,Ne)}async fetchRecomputedExtents(e){return ye(this,e,Ne)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this.findSublayerForSubtypeCode(r)}findSublayerForSubtypeCode(e){return this._sublayerLookup.get(e)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}loadAll(){return ce(this,(e=>{e(this.sublayers)}))}async queryAttachments(e,t){return he(this,e,t,Ne)}async queryFeatures(e,t){const r=await this.load(),i=f.from(e)??r.createQuery(),n=i.outFields??[];n.includes(this.subtypeField)||(n.push(this.subtypeField),i.outFields=n);const s=await r.source.queryFeatures(i,t);if(s?.features)for(const o of s.features)o.layer=o.sourceLayer=this.findSublayerForFeature(o);return s}async queryObjectIds(e,t){return fe(this,e,t,Ne)}async queryFeatureCount(e,t){return be(this,e,t,Ne)}async queryExtent(e,t){return ge(this,e,t,Ne)}async queryRelatedFeatures(e,t){return me(this,e,t,Ne)}async queryRelatedFeaturesCount(e,t){return ve(this,e,t,Ne)}async save(e){return this._debouncedSaveOperations(we.SAVE,e)}async saveAs(e,t){return this._debouncedSaveOperations(we.SAVE_AS,t,e)}write(e,t){const{origin:r,layerContainerType:i,messages:n}=t;if(this.isTable){if("web-scene"===r||"web-map"===r&&"tables"!==i)return n?.push(ke(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&"web-map"===r&&"tables"===i)return n?.push(ke(this,"using a non-table source cannot be written to tables in web maps")),null;return this.sublayers?.length?super.write(e,t):(n?.push(new p("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&Fe(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new p("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!this.subtypes?.length)throw new p("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),Se(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Ie(this)}_verifyFields(){const e=this.parsedUrl?.path??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||-1!==e.search(/\/FeatureServer\//i)||this.fields?.some((e=>"geometry"===e.type))||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach((e=>{e.parent=null})),this.removeHandles("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach((e=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,this._sublayerLookup.set(e.subtypeCode,e)})),e.on("after-remove",(({item:e})=>{e.parent=null,this._sublayerLookup.delete(e.subtypeCode)}))],"sublayers-owner"))}};b([g({readOnly:!0})],Qe.prototype,"createQueryVersion",null),b([g({readOnly:!0})],Qe.prototype,"editingEnabled",null),b([g({readOnly:!0})],Qe.prototype,"effectiveEditingEnabled",null),b([g({...Me.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],Qe.prototype,"fields",void 0),b([g(Me.fieldsIndex)],Qe.prototype,"fieldsIndex",void 0),b([g(Oe)],Qe.prototype,"id",void 0),b([g({type:["show","hide","hide-children"],json:{origins:{"portal-item":{read:!1,write:!1}}}})],Qe.prototype,"listMode",void 0),b([g({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"],json:{origins:{"portal-item":{name:"layerType",write:{enabled:!0,ignoreOrigin:!0}}}}})],Qe.prototype,"operationalLayerType",void 0),b([g(Me.outFields)],Qe.prototype,"outFields",void 0),b([g({readOnly:!0})],Qe.prototype,"parsedUrl",null),b([g({clonable:!1})],Qe.prototype,"source",null),b([g({type:Z.ofType(Re),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const i=e.map((({code:e})=>{const i=new Re({subtypeCode:e});return i.read(t,r),i}));return new(Z.ofType(Re))(i)}}}},name:"layers",write:{ignoreOrigin:!0}}})],Qe.prototype,"sublayers",void 0),b([g({type:je})],Qe.prototype,"timeInfo",void 0),b([g({json:{origins:{"portal-item":{write:{enabled:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],Qe.prototype,"title",void 0),b([L("service","title",["name"])],Qe.prototype,"readTitleFromService",null),b([g({json:{read:!1}})],Qe.prototype,"type",void 0),Qe=b([A("esri.layers.SubtypeGroupLayer")],Qe),e("default",Qe)}}}));
