System.register(["./index-legacy.js","./Mesh-legacy.js","./uploadAssetErrors-legacy.js","./SceneService-legacy.js","./capabilities-legacy.js","./associatedFeatureServiceUtils-legacy.js","./I3SLayerDefinitions-legacy.js","./infoFor3D-legacy.js","./lazyLayerLoader-legacy.js","./persistable-legacy.js","./elevationInfoUtils-legacy.js","./I3SUtil-legacy.js","./popupUtils-legacy.js","./georeference-legacy.js","./mat3f64-legacy.js","./mat4f64-legacy.js","./computeTranslationToOriginAndRotation-legacy.js","./DoubleArray-legacy.js","./quat-legacy.js","./quatf64-legacy.js","./meshVertexSpaceUtils-legacy.js","./MeshLocalVertexSpace-legacy.js","./vec3-legacy.js","./BufferView-legacy.js","./imageUtils-legacy2.js","./earcut-legacy.js","./Indices-legacy.js","./deduplicate-legacy.js","./plane-legacy.js","./triangle-legacy.js","./Util-legacy.js","./ObjectStack-legacy.js","./lineSegment-legacy.js","./basicInterfaces-legacy.js","./VertexAttribute-legacy.js","./External-legacy.js","./originUtils-legacy.js","./multiOriginJSONSupportUtils-legacy.js","./jsonContext-legacy.js","./resourceUtils-legacy3.js","./resourceUtils-legacy2.js","./saveAPIKeyUtils-legacy.js","./saveUtils-legacy.js","./resourceExtension-legacy.js","./sphere-legacy.js","./I3SBinaryReader-legacy.js","./symbolColorUtils-legacy.js","./orientedBoundingBox-legacy.js"],(function(e,t){"use strict";var r,s,i,a,o,n,l,d,p,c,y,u,h,f,g,m,v,w,b,I,L,j,S,F,O,_,E,A,x,P,R,T,D,U,q,N,C,G,Q,V,k,M,$,J,z,K,B,H,W,Z,X,Y,ee,te,re,se,ie,ae,oe,ne,le,de,pe,ce,ye,ue,he,fe,ge,me,ve,we,be,Ie,Le,je,Se,Fe,Oe,_e,Ee,Ae,xe;return{setters:[e=>{r=e.x,s=e.y,i=e.z,a=e.bX,o=e.da,n=e.V,l=e.aN,d=e.b6,p=e.cX,c=e.he,y=e.bD,u=e.R,h=e.en,f=e.bL,g=e.X,m=e.ax,v=e._,w=e.fQ,b=e.dE,I=e.de,L=e.df,j=e.bt,S=e.dg,F=e.dG,O=e.dF,_=e.db,E=e.cx,A=e.fR,x=e.f9,P=e.ic,R=e.w,T=e.bx,D=e.bB,U=e.az,q=e.s,N=e.id,C=e.M,G=e.fa,Q=e.bG,V=e.dZ,k=e.ie,M=e.ar,$=e.fq,J=e.b1,z=e.o,K=e.fs,B=e.ig,H=e.ih,W=e.hm,Z=e.e5,X=e.fb,Y=e.fc,ee=e.fd,te=e.di,re=e.ii,se=e.fh,ie=e.ff,ae=e.F,oe=e.fi,ne=e.fk,le=e.bw},e=>{de=e.$},e=>{pe=e.i,ce=e.m},e=>{ye=e.L,ue=e.P},e=>{he=e.m,fe=e.s},e=>{ge=e.s},e=>{me=e.s,ve=e.l,we=e.u,be=e.m},e=>{Ie=e.r,Le=e.t},e=>{je=e.a},e=>{Se=e.j},e=>{Fe=e.I,Oe=e.y,_e=e.Z},e=>{Ee=e.$},e=>{Ae=e.n,xe=e.p},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){let Pe=class extends a{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};var Re;r([s({type:String,json:{read:!0,write:!0}})],Pe.prototype,"name",void 0),r([s({type:String,json:{read:!0,write:!0}})],Pe.prototype,"field",void 0),r([s({type:[Number],json:{read:!0,write:!0}})],Pe.prototype,"currentRangeExtent",void 0),r([s({type:[Number],json:{read:!0,write:!0}})],Pe.prototype,"fullRangeExtent",void 0),r([s({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Pe.prototype,"type",void 0),Pe=r([i("esri.layers.support.RangeInfo")],Pe);let Te=Re=class extends(o(n.ofType(l))){constructor(e){super(e)}clone(){return new Re(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((r=>{if(!t.equals(r.spatialReference)){if(!d(r.spatialReference,t))return e?.messages&&e.messages.push(new p("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new l;c(r,s,t),r=s}const s=r.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages&&e.messages.push(new p("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const r=new Re;return e.forEach((e=>r.add(l.fromJSON(e,t)))),r}};Te=Re=r([i("esri.layers.support.PolygonCollection")],Te);const De=Te;var Ue;let qe=Ue=class extends a{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new De,this._geometriesSource=null}initialize(){this.addHandles(u((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),h))}readGeometries(e,t,r){Array.isArray(e)?this.geometries=De.fromJSON(e,r):this._geometriesSource={url:f(e,r),context:r}}async loadGeometries(e,t){if(null==this._geometriesSource)return;const{url:r,context:s}=this._geometriesSource,i=await g(r,{responseType:"json",signal:t?.signal}),a=e.toJSON(),o=i.data.map((e=>({...e,spatialReference:a})));this.geometries=De.fromJSON(o,s),this._geometriesSource=null}clone(){const e=new Ue({geometries:m(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};r([s({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],qe.prototype,"spatialRelationship",void 0),r([s({type:De,nonNullable:!0,json:{write:!0}}),Se({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],qe.prototype,"geometries",void 0),r([y(["web-scene","portal-item"],"geometries")],qe.prototype,"readGeometries",null),qe=Ue=r([i("esri.layers.support.SceneFilter")],qe);const Ne=qe;async function Ce(e){const t=[];for(const r of e)r.name.toLowerCase().endsWith(".zip")?t.push(Ge(r)):t.push(Promise.resolve(r));return(await Promise.all(t)).flat()}async function Ge(e){const{BlobReader:r,ZipReader:s,BlobWriter:i}=await v((()=>t.import("./zipjs-wrapper-legacy.js")),void 0,t.meta.url),a=[],o=new s(new r(e));return(await o.getEntries()).forEach((e=>{if(e.directory||/^__MACOS/i.test(e.filename))return;const t=new i,r=e.getData?.(t).then((t=>new File([t],e.filename)));r&&a.push(r)})),Promise.all(a)}const Qe=new Set(["3DObject","Point"]),Ve=ne();let ke=class extends(he(w(ye(b(I(L(j(S(F(O(_(le)))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new n,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const r=this.getFeatureType(t?.feature)?.domains?.[e];return r&&"inherited"!==r.type?r:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get fieldsIndex(){return new E(this.fields)}readNodePages(e,t,r){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:me.fromJSON(e,r)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&A(this.associatedLayer)}get geometryType(){return $e[this.profile]||"mesh"}set renderer(e){x(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=null!=e?e:fe;const{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsRollbackOnFailure:i,supportsUploadWithItemId:a,supportsGeometryUpdate:o,supportsReturnServiceEditsInSourceSpatialReference:n},data:{supportsZ:l,supportsM:d,isVersioned:p,supportsAttachment:c},operations:{supportsEditing:y,supportsAdd:u,supportsUpdate:h,supportsDelete:f,supportsQuery:g,supportsQueryAttachments:m,supportsAsyncConvert3D:v}}=e,w=e.operations.supportsChangeTracking,b=!!this.associatedLayer?.infoFor3D&&P();return{query:t,queryRelated:r,editing:{supportsGlobalId:s,supportsReturnServiceEditsInSourceSpatialReference:n,supportsRollbackOnFailure:i,supportsGeometryUpdate:b&&o,supportsUploadWithItemId:a},data:{supportsAttachment:c,supportsZ:l,supportsM:d,isVersioned:p},operations:{supportsQuery:g,supportsQueryAttachments:m,supportsEditing:y&&w,supportsAdd:b&&u&&w,supportsDelete:b&&f&&w,supportsUpdate:h&&w,supportsAsyncConvert3D:v}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const r=t.store.profile;return null!=r&&Me[r]?Me[r]:(R.getLogger(this).error("Unknown or missing profile",{profile:r,layer:this}),"mesh-pyramids")}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(T),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await D(this,{origin:"service"},t),x(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(Ce){R.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:Ce}),this.filter=null}}createQuery(){const e=new U;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new q("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new q("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const r=N(this.fieldsIndex,await Ae(this,xe(this)));return Ee(this.parsedUrl.path,this.attributeStorageInfo??[],e,t,r,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const r=await this.queryCachedAttributes(e,[t]);if(!r||0===r.length)throw new q("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new C;return s.attributes=r[0],s.layer=this,s.sourceLayer=this,s}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((r=>r.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(R.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return G(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new q("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(Ce){throw new q("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:Ce})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new q("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const r=this.fieldsIndex.get(e);if(!r)throw new q("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const s of this.statisticsInfo)if(s.name===r.name){const e=Q(this.parsedUrl.path,s.href);return g(e,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new q("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(ue.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(ue.SAVE,e)}async applyEdits(e,r){const{applyEdits:s}=await v((()=>t.import("./editingSupport-legacy.js")),void 0,t.meta.url);let i=r;await this.load();const a=this.associatedLayer;if(!a)throw new q(`${this.type}-layer:not-editable`,"Service is not editable");await a.load();const{globalIdField:o}=a,n=!!a.infoFor3D,l=i?.globalIdUsed??!0;if(n&&null==o)throw new q(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(n&&!l)throw new q(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return V(a.url)&&n&&null!=e.deleteFeatures&&null!=o&&(i={...i,globalIdToObjectId:await k(a,e.deleteFeatures,o)}),s(this,a.source,e,i)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new q(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){const r=e=>{throw R.getLogger(this).error(".convertMesh()",e.message),e};await this.load(),this.infoFor3D||r(new q("invalid:layer","SceneLayer has no capability for mesh conversion"));const s=await this.extractAndFilterFiles(e),i=s.reduce(((e,t)=>Ie(this.infoFor3D,t)?e+1:e),0);0===i&&r(new pe),i>1&&r(new ce);const a=this.spatialReference,o=t?.location??new M({x:0,y:0,z:0,spatialReference:a}),n=o.spatialReference.isGeographic?"local":"georeferenced",l=de.createWithExternalSource(o,s,{vertexSpace:n}),[d]=await this.uploadAssets([l],t);return d}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;return t?(await Ce(e)).filter((e=>Le(t,e))):e}validateLayer(e){if(e.layerType&&!Qe.has(e.layerType))throw new q("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new q("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new q("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});!function(e,t){let r=!1,s=!1;if(null==e)r=!0,s=!0;else{const i=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":r=!0,s=i;break;case"vertex-reference-frame":r=!0,s=!i;break;default:r=!1}}if(!r)throw new q("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!s)throw new q("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new q("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),r=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),s={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||r,supportsLayerQuery:r};this._fieldUsageInfo[e.name]=s}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const r=this.getField(t.name);r?(!r.domain&&t.domain&&(r.domain=t.domain.clone()),r.editable=t.editable,r.nullable=t.nullable,r.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=$(this);for(let r=0;r<e.length;r++){const s=e[r],i=this.originIdOf(s),a=this.associatedLayer.originIdOf(s);i<a&&(a===J.SERVICE||a===J.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],a)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.editingInfo?.lastEditDate,t=this.associatedLayer?.serverGens,r=this.associatedLayer?.getAtOrigin("fullExtent","service");P()&&null!=this.associatedLayer?.infoFor3D&&r&&V(this.associatedLayer?.url)&&e&&this.serviceUpdateTimeStamp?.lastUpdate!==e.getTime()&&(this.serviceUpdateTimeStamp||t?.minServerGen!==t?.serverGen)&&$(this).setAtOrigin("fullExtent",r.clone(),J.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:r,portalItem:s}=await ge(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),i=await je.FeatureLayer();this.associatedLayer=new i({url:t,customParameters:this.customParameters,layerId:r,portalItem:s}),await this.associatedLayer.load()}catch(Ge){z(Ge)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await K((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?R.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):R.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&Fe(R.getLogger(this),Oe("Mesh scene layers","relative-to-scene",e)),Fe(R.getLogger(this),_e("Scene layers",e))}};r([s({types:{key:"type",base:B,typeMap:{selection:H}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ke.prototype,"featureReduction",void 0),r([s({type:[Pe],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ke.prototype,"rangeInfos",void 0),r([s({json:{read:!1}})],ke.prototype,"associatedLayer",void 0),r([s({type:["show","hide"]})],ke.prototype,"listMode",void 0),r([s({type:["ArcGISSceneServiceLayer"]})],ke.prototype,"operationalLayerType",void 0),r([s({json:{read:!1},readOnly:!0})],ke.prototype,"type",void 0),r([s({...Ve.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ke.prototype,"fields",void 0),r([s()],ke.prototype,"types",null),r([s()],ke.prototype,"typeIdField",null),r([s()],ke.prototype,"templates",null),r([s()],ke.prototype,"formTemplate",null),r([s({readOnly:!0,clonable:!1})],ke.prototype,"fieldsIndex",null),r([s({type:W,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],ke.prototype,"floorInfo",void 0),r([s(Ve.outFields)],ke.prototype,"outFields",void 0),r([s({type:me,readOnly:!0,json:{read:!1}})],ke.prototype,"nodePages",void 0),r([y("service","nodePages",["nodePages","pointNodePages"])],ke.prototype,"readNodePages",null),r([s({type:[ve],readOnly:!0})],ke.prototype,"materialDefinitions",void 0),r([s({type:[we],readOnly:!0})],ke.prototype,"textureSetDefinitions",void 0),r([s({type:[be],readOnly:!0})],ke.prototype,"geometryDefinitions",void 0),r([s({readOnly:!0})],ke.prototype,"serviceUpdateTimeStamp",void 0),r([s({readOnly:!0})],ke.prototype,"attributeStorageInfo",void 0),r([s({readOnly:!0})],ke.prototype,"statisticsInfo",void 0),r([s({type:n.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],ke.prototype,"excludeObjectIds",void 0),r([s({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],ke.prototype,"definitionExpression",void 0),r([s({type:Ne,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],ke.prototype,"filter",void 0),r([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ke.prototype,"path",void 0),r([s(Z)],ke.prototype,"elevationInfo",null),r([s({readOnly:!0,json:{read:!1}})],ke.prototype,"effectiveCapabilities",null),r([s({readOnly:!0})],ke.prototype,"effectiveEditingEnabled",null),r([s({type:String})],ke.prototype,"geometryType",null),r([s(X)],ke.prototype,"labelsVisible",void 0),r([s({type:[Y],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:ee},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ee},write:!0}})],ke.prototype,"labelingInfo",void 0),r([s(te)],ke.prototype,"legendEnabled",void 0),r([s({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const r=t.layerDefinition?.drawingInfo?.transparency;return void 0!==r?re(r):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],ke.prototype,"opacity",void 0),r([s({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ke.prototype,"priority",void 0),r([s({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],ke.prototype,"semantic",void 0),r([s({types:se,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ke.prototype,"renderer",null),r([s({json:{read:!1}})],ke.prototype,"cachedDrawingInfo",void 0),r([y("service","cachedDrawingInfo")],ke.prototype,"readCachedDrawingInfo",null),r([s({readOnly:!0,json:{read:!1}})],ke.prototype,"capabilities",null),r([s({type:Boolean,json:{read:!1}})],ke.prototype,"editingEnabled",null),r([s({readOnly:!0,json:{write:!1,read:!1}})],ke.prototype,"infoFor3D",null),r([s({readOnly:!0,json:{write:!1,read:!1}})],ke.prototype,"relationships",null),r([s(ie)],ke.prototype,"popupEnabled",void 0),r([s({type:ae,json:{name:"popupInfo",write:!0}})],ke.prototype,"popupTemplate",void 0),r([s({readOnly:!0,json:{read:!1}})],ke.prototype,"defaultPopupTemplate",null),r([s({type:String,json:{read:!1}})],ke.prototype,"objectIdField",void 0),r([y("service","objectIdField",["objectIdField","fields"])],ke.prototype,"readObjectIdField",null),r([s({type:String,json:{read:!1}})],ke.prototype,"globalIdField",void 0),r([y("service","globalIdField",["globalIdField","fields"])],ke.prototype,"readGlobalIdField",null),r([s({readOnly:!0,type:String,json:{read:!1}})],ke.prototype,"displayField",null),r([s({type:String,json:{read:!1}})],ke.prototype,"profile",void 0),r([y("service","profile",["store.profile"])],ke.prototype,"readProfile",null),r([s({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ke.prototype,"normalReferenceFrame",void 0),r([s(oe)],ke.prototype,"screenSizePerspectiveEnabled",void 0),r([s({json:{read:!1,origins:{service:{read:!0}}}})],ke.prototype,"serviceItemId",void 0),ke=r([i("esri.layers.SceneLayer")],ke);const Me={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},$e={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};e("default",ke)}}}));
