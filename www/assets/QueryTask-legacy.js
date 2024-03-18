System.register(["./index-legacy.js","./infoFor3D-legacy.js","./executeForIds-legacy.js","./query-legacy.js","./executeQueryJSON-legacy.js","./executeQueryPBF-legacy.js"],(function(e,t){"use strict";var r,o,a,i,s,n,u,c,l,d,y,p,m,h,f,x,g,F,S,b,D;return{setters:[e=>{r=e.ay,o=e.az,a=e.aQ,i=e.x,s=e.y,n=e.eF,u=e.z,c=e.bm,l=e.ao,d=e.ai,y=e.E,p=e.eG,m=e._,h=e.s},e=>{f=e.u,x=e.i},e=>{g=e.n,F=e.s},e=>{S=e.x},e=>{b=e.a},e=>{D=e.n}],execute:function(){let j=class extends c{constructor(e){super(e),this.dynamicDataSource=null,this.fieldsIndex=null,this.gdbVersion=null,this.infoFor3D=null,this.pbfSupported=!1,this.queryAttachmentsSupported=!1,this.sourceSpatialReference=null,this.url=null}get parsedUrl(){return l(this.url)}async execute(e,t){const r=await this.executeJSON(e,t);return this.featureSetFromJSON(e,r,t)}async executeJSON(e,t){const r=this._normalizeQuery(e),o=null!=e.outStatistics?.[0],a=d("featurelayer-pbf-statistics"),i=!o||a;let s;if(this.pbfSupported&&i)try{s=await D(this.url,r,t)}catch(b){if("query:parsing-pbf"!==b.name)throw b;this.pbfSupported=!1}return this.pbfSupported&&i||(s=await b(this.url,r,t)),this._normalizeFields(s.fields),s}async featureSetFromJSON(e,r,o){if(!this._queryIs3DObjectFormat(e)||null==this.infoFor3D||!r.features)return y.fromJSON(r);const{meshFeatureSetFromJSON:a}=await p(m((()=>t.import("./meshFeatureSet-legacy.js")),void 0,t.meta.url),o);return a(e,this.infoFor3D,r)}executeForCount(e,t){return g(this.url,this._normalizeQuery(e),t)}executeForExtent(e,t){return async function(e,t,i){const s=r(e),n=await S(s,o.from(t),{...i}),u=n.data.extent;return!u||isNaN(u.xmin)||isNaN(u.ymin)||isNaN(u.xmax)||isNaN(u.ymax)?{count:n.data.count,extent:null}:{count:n.data.count,extent:a.fromJSON(u)}}(this.url,this._normalizeQuery(e),t)}executeForIds(e,t){return F(this.url,this._normalizeQuery(e),t)}async executeRelationshipQuery(e,r){const[{default:o},{executeRelationshipQuery:a}]=await p(Promise.all([m((()=>t.import("./index-legacy.js").then((e=>e.ne))),void 0,t.meta.url),m((()=>t.import("./executeRelationshipQuery-legacy.js")),void 0,t.meta.url)]),r);return e=o.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),a(this.url,e,r)}async executeRelationshipQueryForCount(e,r){const[{default:o},{executeRelationshipQueryForCount:a}]=await p(Promise.all([m((()=>t.import("./index-legacy.js").then((e=>e.ne))),void 0,t.meta.url),m((()=>t.import("./executeRelationshipQuery-legacy.js")),void 0,t.meta.url)]),r);return e=o.from(e),(this.gdbVersion||this.dynamicDataSource)&&((e=e.clone()).gdbVersion=e.gdbVersion||this.gdbVersion,e.dynamicDataSource=e.dynamicDataSource||this.dynamicDataSource),a(this.url,e,r)}async executeAttachmentQuery(e,o){const{executeAttachmentQuery:a,fetchAttachments:i,processAttachmentQueryResult:s}=await p(m((()=>t.import("./queryAttachments-legacy.js")),void 0,t.meta.url),o),n=r(this.url);return s(n,await(this.queryAttachmentsSupported?a(n,e,o):i(n,e,o)))}async executeTopFeaturesQuery(e,r){const{executeTopFeaturesQuery:o}=await p(m((()=>t.import("./executeTopFeaturesQuery-legacy.js")),void 0,t.meta.url),r);return o(this.parsedUrl,e,this.sourceSpatialReference,r)}async executeForTopIds(e,r){const{executeForTopIds:o}=await p(m((()=>t.import("./executeForTopIds-legacy.js")),void 0,t.meta.url),r);return o(this.parsedUrl,e,r)}async executeForTopExtents(e,r){const{executeForTopExtents:o}=await p(m((()=>t.import("./executeForTopExtents-legacy.js")),void 0,t.meta.url),r);return o(this.parsedUrl,e,r)}async executeForTopCount(e,r){const{executeForTopCount:o}=await p(m((()=>t.import("./executeForTopCount-legacy.js")),void 0,t.meta.url),r);return o(this.parsedUrl,e,r)}_normalizeQuery(e){let t=o.from(e);t.sourceSpatialReference=t.sourceSpatialReference||this.sourceSpatialReference,(this.gdbVersion||this.dynamicDataSource)&&(t=t===e?t.clone():t,t.gdbVersion=e.gdbVersion||this.gdbVersion,t.dynamicDataSource=e.dynamicDataSource?n.from(e.dynamicDataSource):this.dynamicDataSource);const{infoFor3D:r}=this;if(null!=r&&this._queryIs3DObjectFormat(e)){t=t===e?t.clone():t,t.formatOf3DObjects=null;const{supportedFormats:o,queryFormats:a}=r,i=f("model/gltf-binary",o)??x("glb",o),s=f("model/gltf+json",o)??x("gltf",o);for(const e of a){if(e===i){t.formatOf3DObjects=e;break}e!==s||t.formatOf3DObjects||(t.formatOf3DObjects=e)}if(!t.formatOf3DObjects)throw new h("query:unsupported-3d-query-formats","Could not find any supported 3D object query format. Only supported formats are 3D_glb and 3D_gltf");if(null==t.outFields||!t.outFields.includes("*")){t=t===e?t.clone():t,null==t.outFields&&(t.outFields=[]);const{originX:o,originY:a,originZ:i,translationX:s,translationY:n,translationZ:u,scaleX:c,scaleY:l,scaleZ:d,rotationX:y,rotationY:p,rotationZ:m,rotationDeg:h}=r.transformFieldRoles;t.outFields.push(o,a,i,s,n,u,c,l,d,y,p,m,h)}}return t}_normalizeFields(e){if(null!=this.fieldsIndex&&null!=e)for(const t of e){const e=this.fieldsIndex.get(t.name);e&&Object.assign(t,e.toJSON())}}_queryIs3DObjectFormat(e){return null!=this.infoFor3D&&!0===e.returnGeometry&&"xyFootprint"!==e.multipatchOption&&!e.outStatistics}};i([s({type:n})],j.prototype,"dynamicDataSource",void 0),i([s()],j.prototype,"fieldsIndex",void 0),i([s()],j.prototype,"gdbVersion",void 0),i([s()],j.prototype,"infoFor3D",void 0),i([s({readOnly:!0})],j.prototype,"parsedUrl",null),i([s()],j.prototype,"pbfSupported",void 0),i([s()],j.prototype,"queryAttachmentsSupported",void 0),i([s()],j.prototype,"sourceSpatialReference",void 0),i([s({type:String})],j.prototype,"url",void 0),j=i([u("esri.tasks.QueryTask")],j),e("x",j)}}}));
