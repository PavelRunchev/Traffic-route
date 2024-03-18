System.register(["./index-legacy.js","./ogcFeatureUtils-legacy.js","./featureConversionUtils-legacy.js","./OptimizedGeometry-legacy.js","./OptimizedFeatureSet-legacy.js","./geojson-legacy.js","./date-legacy.js","./clientSideDefaults-legacy.js","./QueryEngineCapabilities-legacy.js","./sourceUtils-legacy.js"],(function(e,t){"use strict";var r,o,s,i,n,p,a,l,u,d,c,y,f,h,g,m,v,S,C,b,w,x,R,F,I,j,O,D,T,P,E,_,q,G,Q,A,M,z,B,L,N,U,H,J,Z,k,V,W,K,$;return{setters:[e=>{r=e.x,o=e.y,s=e.z,i=e.ex,n=e.E,p=e.bc,a=e.fv,l=e.s,u=e.dF,d=e.dG,c=e.f7,y=e.f8,f=e.bs,h=e.f6,g=e.dD,m=e.bt,v=e.de,S=e.df,C=e.dd,b=e.dg,w=e.f9,x=e.fa,R=e.az,F=e.f4,I=e.e5,j=e.d2,O=e.aQ,D=e.d3,T=e.fc,P=e.fd,E=e.fb,_=e.di,q=e.ff,G=e.F,Q=e.fg,A=e.fh,M=e.fi,z=e.fw,B=e.dj,L=e.fk,N=e.bw},e=>{U=e.R,H=e.x,J=e.C,Z=e.P,k=e.O,V=e.N,W=e.q,K=e.v,$=e.k},null,null,null,null,null,null,null,null],execute:function(){let t=class extends i{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:o},layer:{apiKey:s,customParameters:i,effectiveMaxRecordCount:n}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:n,queryParameters:{apiKey:s,customParameters:i},spatialReference:r,supportedCrs:o}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then((e=>n.fromJSON(e)))}queryFeaturesJSON(e,t={}){const r=this.getSource();return this.load(t).then((()=>U(r,e,t)))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}_conformsToType(e,t){const r=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>r.test(e)))??!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1,supportsAsyncConvert3D:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByAnonymous:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}_getMaxRecordCount(e){const t=e?.components?.parameters;return t?.limit?.schema?.maximum??t?.limitFeatures?.schema?.maximum}_getStorageSpatialReference(e){const t=e.storageCrs??H,r=J(t);return null==r?p.WGS84:new p({wkid:r})}_getSupportedSpatialReferences(e,t){const r="#/crs",o=e.crs??[H],s=o.includes(r)?o.filter((e=>e!==r)).concat(t.crs??[]):o,i=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return s.filter((e=>!i.test(e)))}async _loadOGCServices(e,t){const r=null!=t?t.signal:null,{apiKey:o,collectionId:s,customParameters:i,fields:n,geometryType:p,hasZ:u,objectIdField:d,timeInfo:c,url:y}=e,f={fields:n?.map((e=>e.toJSON())),geometryType:a.toJSON(p),hasZ:u??!1,objectIdField:d,timeInfo:c?.toJSON()},h={apiKey:o,customParameters:i,signal:r},g=await Z(y,h),[m,v]=await Promise.all([k(g,h),V(g,h)]);if(!this._conformsToType(m,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new l("ogc-feature-layer:no-geojson-support","Server does not support geojson");const S=v.collections.find((({id:e})=>e===s));if(!S)throw new l("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const C=this._conformsToType(m,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await W(g,h):null,b=await K(S,f,h),w=this._getMaxRecordCount(C),x=this._getCapabilities(b.hasZ,w),R=this._getStorageSpatialReference(S).toJSON(),F=this._getSupportedSpatialReferences(S,v),I=new RegExp(`^${$}`,"i"),j={};for(const a of F){const e=J(a);null!=e&&(j[e]||(j[e]=a.replace(I,"")))}this.featureDefinition={capabilities:x,collection:S,layerDefinition:b,spatialReference:R,supportedCrs:j}}};r([o()],t.prototype,"featureDefinition",void 0),r([o({constructOnly:!0})],t.prototype,"layer",void 0),r([o()],t.prototype,"type",void 0),t=r([s("esri.layers.graphics.sources.OGCFeatureSource")],t);const X=L();let Y=class extends(u(d(c(y(f(h(g(m(v(S(C(b(N))))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new t({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){return this.maxRecordCount??this.capabilities?.query.maxRecordCount??5e3}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){w(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return x(this,e)}createQuery(){return new R}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let r,o=!1;const s=t?.feature?.attributes,i=this.typeIdField&&s?.[this.typeIdField];return null!=i&&this.types&&(o=this.types.some((t=>t.id==i&&(r=t.domains?.[e],"inherited"===r?.type&&(r=this._getLayerDomain(e)),!0)))),o||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(R.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),w(this.renderer,this.fieldsIndex),F(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};r([o({readOnly:!0,json:{origins:{service:{read:!0}}}})],Y.prototype,"capabilities",void 0),r([o({type:String,json:{write:!0}})],Y.prototype,"collectionId",void 0),r([o({type:String})],Y.prototype,"copyright",void 0),r([o({readOnly:!0})],Y.prototype,"defaultPopupTemplate",null),r([o({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],Y.prototype,"description",void 0),r([o({type:String})],Y.prototype,"displayField",void 0),r([o({type:Number})],Y.prototype,"effectiveMaxRecordCount",null),r([o(I)],Y.prototype,"elevationInfo",void 0),r([o({type:[j],json:{origins:{service:{name:"layerDefinition.fields"}}}})],Y.prototype,"fields",void 0),r([o(X.fieldsIndex)],Y.prototype,"fieldsIndex",void 0),r([o({readOnly:!0,type:O,json:{origins:{service:{name:"layerDefinition.extent"}}}})],Y.prototype,"fullExtent",void 0),r([o({type:D.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:D.read}}}}})],Y.prototype,"geometryType",void 0),r([o({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],Y.prototype,"hasZ",void 0),r([o({type:Boolean,readOnly:!0})],Y.prototype,"isTable",null),r([o({type:[T],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:P},write:!0}}}})],Y.prototype,"labelingInfo",void 0),r([o(E)],Y.prototype,"labelsVisible",void 0),r([o(_)],Y.prototype,"legendEnabled",void 0),r([o({type:Number})],Y.prototype,"maxRecordCount",void 0),r([o({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],Y.prototype,"objectIdField",void 0),r([o({type:["OGCFeatureLayer"]})],Y.prototype,"operationalLayerType",void 0),r([o(q)],Y.prototype,"popupEnabled",void 0),r([o({type:G,json:{name:"popupInfo",write:!0}})],Y.prototype,"popupTemplate",void 0),r([o({types:Q,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:A,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],Y.prototype,"renderer",null),r([o(M)],Y.prototype,"screenSizePerspectiveEnabled",void 0),r([o({readOnly:!0})],Y.prototype,"source",void 0),r([o({readOnly:!0,type:p,json:{origins:{service:{read:!0}}}})],Y.prototype,"spatialReference",void 0),r([o({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],Y.prototype,"title",void 0),r([o({readOnly:!0,json:{read:!1}})],Y.prototype,"type",void 0),r([o({type:String,readOnly:!0})],Y.prototype,"typeIdField",void 0),r([o({type:[z]})],Y.prototype,"types",void 0),r([o(B)],Y.prototype,"url",void 0),Y=r([s("esri.layers.OGCFeatureLayer")],Y),e("default",Y)}}}));
