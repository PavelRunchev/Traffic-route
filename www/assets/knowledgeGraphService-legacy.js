System.register(["./index-legacy.js","./GraphQueryStreaming-legacy.js"],(function(e,t){"use strict";var r,n,o,i,a,s,l,p,d,u,c,y,h,f,g,_,m,w,E,T,v,I;return{setters:[e=>{r=e.x,n=e.y,o=e.z,i=e.bm,a=e.bX,s=e.bc,l=e.ai,p=e._,d=e.h8,u=e.s,c=e.ei,y=e.aP,h=e.ar,f=e.aO,g=e.aN,_=e.w,m=e.X,w=e.be},e=>{E=e.m,T=e.p,v=e.t,I=e.c}],execute:function(){e({G:je,T:Fe});let G=class extends i{constructor(e){super(e),this.resultRows=[]}};r([n()],G.prototype,"resultRows",void 0),G=r([o("esri.rest.knowledgeGraph.GraphQueryResult")],G);const R=G;let b=class extends i{constructor(e){super(e),this.resultRowsStream=new ReadableStream}};r([n()],b.prototype,"resultRowsStream",void 0),b=r([o("esri.rest.knowledgeGraph.GraphQueryResult")],b);const S=b;let M=class extends a{constructor(e){super(e),this.name=null,this.unique=null,this.ascending=null,this.description=null,this.fieldNames=null}};r([n({type:String,json:{write:!0}})],M.prototype,"name",void 0),r([n({type:Boolean,json:{write:!0}})],M.prototype,"unique",void 0),r([n({type:Boolean,json:{write:!0}})],M.prototype,"ascending",void 0),r([n({type:String,json:{write:!0}})],M.prototype,"description",void 0),r([n({type:[String],json:{write:!0}})],M.prototype,"fieldNames",void 0),M=r([o("esri.rest.knowledgeGraph.FieldIndex")],M);const x=M;let O=class extends a{constructor(e){super(e),this.name=null,this.alias=null,this.fieldType=null,this.geometryType=null,this.hasM=null,this.hasZ=null,this.nullable=null,this.editable=null,this.required=null,this.defaultVisibility=null,this.systemMaintained=null,this.role=null,this.defaultValue=null}};r([n({type:String,json:{write:!0}})],O.prototype,"name",void 0),r([n({type:String,json:{write:!0}})],O.prototype,"alias",void 0),r([n({type:String,json:{write:!0}})],O.prototype,"fieldType",void 0),r([n({type:String,json:{write:!0}})],O.prototype,"geometryType",void 0),r([n({type:Boolean,json:{write:!0}})],O.prototype,"hasM",void 0),r([n({type:Boolean,json:{write:!0}})],O.prototype,"hasZ",void 0),r([n({type:Boolean,json:{write:!0}})],O.prototype,"nullable",void 0),r([n({type:Boolean,json:{write:!0}})],O.prototype,"editable",void 0),r([n({type:Boolean,json:{write:!0}})],O.prototype,"required",void 0),r([n({type:Boolean,json:{write:!0}})],O.prototype,"defaultVisibility",void 0),r([n({type:Boolean,json:{write:!0}})],O.prototype,"systemMaintained",void 0),r([n()],O.prototype,"role",void 0),r([n({type:Object,json:{type:String,write:{writer:(e,t)=>{t.defaultValue=null!=e?e.toString():null}}}})],O.prototype,"defaultValue",void 0),O=r([o("esri.rest.knowledgeGraph.GraphProperty")],O);const P=O;let k=class extends a{constructor(e){super(e),this.name=null,this.alias=null,this.role=null,this.strict=null,this.properties=null,this.fieldIndexes=null}};r([n({type:String,json:{write:!0}})],k.prototype,"name",void 0),r([n({type:String,json:{write:!0}})],k.prototype,"alias",void 0),r([n({type:String,json:{write:!0}})],k.prototype,"role",void 0),r([n({type:Boolean,json:{write:!0}})],k.prototype,"strict",void 0),r([n({type:[P],json:{write:!0}})],k.prototype,"properties",void 0),r([n({type:[x],json:{write:!0}})],k.prototype,"fieldIndexes",void 0),k=r([o("esri.rest.knowledgeGraph.GraphObjectType")],k);const j=k;let F=class extends j{constructor(e){super(e)}};F=r([o("esri.rest.knowledgeGraph.EntityType")],F);const D=e("t",F);let N=class extends j{constructor(e){super(e),this.endPoints=[]}};r([n()],N.prototype,"endPoints",void 0),N=r([o("esri.rest.knowledgeGraph.RelationshipType")],N);const z=e("p",N);let A=class extends a{constructor(e){super(e),this.timestamp=null,this.spatialReference=null,this.strict=null,this.objectIdField=null,this.globalIdField=null,this.arcgisManaged=null,this.identifierInfo=null,this.searchIndexes=null,this.entityTypes=null,this.relationshipTypes=null}};r([n({type:Date,json:{type:Number,write:{writer:(e,t)=>{t.timestamp=e?.getTime()}}}})],A.prototype,"timestamp",void 0),r([n({type:s,json:{write:!0}})],A.prototype,"spatialReference",void 0),r([n({type:Boolean,json:{write:!0}})],A.prototype,"strict",void 0),r([n({type:String,json:{write:!0}})],A.prototype,"objectIdField",void 0),r([n({type:String,json:{write:!0}})],A.prototype,"globalIdField",void 0),r([n()],A.prototype,"arcgisManaged",void 0),r([n()],A.prototype,"identifierInfo",void 0),r([n()],A.prototype,"searchIndexes",void 0),r([n({type:[D],json:{write:!0}})],A.prototype,"entityTypes",void 0),r([n({type:[z],json:{write:!0}})],A.prototype,"relationshipTypes",void 0),A=r([o("esri.rest.knowledgeGraph.DataModel")],A);const L=A;let C=class extends a{constructor(e){super(e),this.capabilities=[],this.supportsSearch=!1,this.supportedQueryFormats=[],this.allowGeometryUpdates=!1,this.searchMaxRecordCount=null,this.serviceCapabilities=null,this.maxRecordCount=null,this.description="",this.copyrightText="",this.units="",this.spatialReference=null,this.currentVersion=null,this.dateFieldsTimeReference=null,this.serviceItemId="",this.supportsDocuments=!1,this.dataEditingNotSupported=!1,this.schemaEditingNotSupported=!1}};r([n({type:[String],json:{write:!0}})],C.prototype,"capabilities",void 0),r([n({type:Boolean,json:{write:!0}})],C.prototype,"supportsSearch",void 0),r([n({type:[String],json:{write:!0}})],C.prototype,"supportedQueryFormats",void 0),r([n({type:Boolean,json:{write:!0}})],C.prototype,"allowGeometryUpdates",void 0),r([n({type:Number,json:{write:!0}})],C.prototype,"searchMaxRecordCount",void 0),r([n({type:Object,json:{write:!0}})],C.prototype,"serviceCapabilities",void 0),r([n({type:Number,json:{write:!0}})],C.prototype,"maxRecordCount",void 0),r([n({type:String,json:{write:!0}})],C.prototype,"description",void 0),r([n({type:String,json:{write:!0}})],C.prototype,"copyrightText",void 0),r([n({type:String,json:{write:!0}})],C.prototype,"units",void 0),r([n({type:Object,json:{write:!0}})],C.prototype,"spatialReference",void 0),r([n({type:Number,json:{write:!0}})],C.prototype,"currentVersion",void 0),r([n({type:Object,json:{write:!0}})],C.prototype,"dateFieldsTimeReference",void 0),r([n({type:String,json:{write:!0}})],C.prototype,"serviceItemId",void 0),r([n({type:Boolean,json:{write:!0}})],C.prototype,"supportsDocuments",void 0),r([n({type:Boolean,json:{write:!0}})],C.prototype,"dataEditingNotSupported",void 0),r([n({type:Boolean,json:{write:!0}})],C.prototype,"schemaEditingNotSupported",void 0),C=r([o("esri.rest.knowledgeGraph.ServiceDefinition")],C);const U=C;let q=class extends a{constructor(e){super(e),this.dataModel=null,this.serviceDefinition=null}};r([n({type:String,json:{write:!0}})],q.prototype,"url",void 0),r([n({type:L,json:{write:!0}})],q.prototype,"dataModel",void 0),r([n({type:U,json:{write:!0}})],q.prototype,"serviceDefinition",void 0),q=r([o("esri.rest.knowledgeGraph.KnowledgeGraph")],q);const Y=q,Q="esri/rest/knowledgeGraph/wasmInterface/";let B;async function V(){if(B)return B;const e=l("wasm-simd");return B=async function(e){if(e){const{default:e}=await p((()=>t.import("./arcgis-knowledge-client-core-simd-legacy.js")),void 0,t.meta.url).then((e=>e.a));return e({locateFile:e=>d(Q+e)})}const{default:r}=await p((()=>t.import("./arcgis-knowledge-client-core-legacy.js")),void 0,t.meta.url).then((e=>e.a));return r({locateFile:e=>d(Q+e)})}(e),B}function W(e,t){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value(Z(e,t))})),r}function H(e,t){const r=new t.ObjectValue;r.deleteLater();for(const[n,o]of Object.entries(e))r.set_key_value(n,Z(o,t));return r}function K(e,t){if(e instanceof y)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=r.geometry_type=t.esriGeometryType.esriGeometryMultipoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];o[0]=e.points.length;let i=0;return e.points.forEach((e=>{e.forEach((e=>{n[i]=e,i++}))})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);if(e instanceof h)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.geometry_type=t.esriGeometryType.esriGeometryPoint,r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];o[0]=1,n[0]=e.x,n[1]=e.y;let i=2;return e.hasZ&&(n[i]=e.z,i++),e.hasM&&(n[i]=e.m,i++),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);if(e instanceof f||e instanceof g)return function(e,t){const r=new t.GeometryValue;r.deleteLater(),r.has_z=e.hasZ,r.has_m=e.hasM;const n=[],o=[];let i=[];e instanceof f?(r.geometry_type=t.esriGeometryType.esriGeometryPolyline,i=e.paths):e instanceof g&&(r.geometry_type=t.esriGeometryType.esriGeometryPolygon,i=e.rings);let a=0,s=0;return i.forEach((e=>{let t=0;e.forEach((e=>{t++,e.forEach((e=>{n[s]=e,s++}))})),o[a]=t,a++})),r.coords=new Float64Array(n),r.lengths=new Uint32Array(o),r}(e,t);throw new u("knowledge-graph:unsupported-geometry","Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge",{geometry:e})}function Z(e,t){if(null==e)return"";if("object"!=typeof e)return e;if(e instanceof Date)return e;if(e instanceof c)return K(e,t);if(Array.isArray(e)){const r=new t.ArrayValue;return r.deleteLater(),e.forEach((e=>{r.add_value(Z(e,t))})),r}return H(e,t)}function $(e,t){if(!e.typeName)throw new u("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits");if(e instanceof E){const r=new t.EntityValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))r.set_key_value(n,J(o,t));return e.id&&r.set_id(e.id),r}if(e instanceof T){const r=new t.RelationshipValue;r.deleteLater(),r.type_name=e.typeName;for(const[n,o]of Object.entries(e.properties))r.set_key_value(n,J(o,t));return e.id&&r.set_id(e.id),e.originId&&e.destinationId&&r.set_related_entity_ids(e.originId,e.destinationId),r}throw new u("knowledge-graph:applyEdits-encoding-failure","Could not determine the type of a named graph object passed to the encoder")}function J(e,t){return null==e?"":"object"!=typeof e||e instanceof Date?e:e instanceof c?K(e,t):""}let X=class extends i{constructor(e){super(e),this.name=null,this.supportedCategory=null,this.analyzers=[],this.searchProperties=new Map}};r([n()],X.prototype,"name",void 0),r([n()],X.prototype,"supportedCategory",void 0),r([n()],X.prototype,"analyzers",void 0),r([n()],X.prototype,"searchProperties",void 0),X=r([o("esri.rest.knowledgeGraph.SearchIndex")],X);const ee=X;var te,re,ne,oe,ie,ae,se,le,pe,de;function ue(e){return e.deleteLater(),new D(ye(e))}function ce(e){return e.deleteLater(),new x({name:e.name,unique:e.unique,ascending:e.ascending,description:e.description,fieldNames:_e(e.fields)})}function ye(e){return{name:e.name,alias:e.alias,role:te[e.role.value]?te[e.role.value]:null,strict:e.strict,properties:me(e.properties),fieldIndexes:we(e.field_indexes)}}function he(e){return e.deleteLater(),new P({alias:e.alias,name:e.name,fieldType:re[e.field_type.value]?re[e.field_type.value]:null,geometryType:ne[e.geometry_type.value]?ne[e.geometry_type.value]:null,hasM:e.has_m,hasZ:e.has_z,nullable:e.nullable,editable:e.editable,required:e.required,defaultVisibility:e.default_visibility,systemMaintained:e.system_maintained,role:ae[e.role.value],defaultValue:e.default_value})}function fe(e){e.deleteLater();const t=ye(e),r=[];for(let n=0;n<e.end_points.size();n++){const t=e.end_points.get(n);r.push({originEntityType:t.origin_entity_type,destinationEntityType:t.dest_entity_type})}return e.end_points.delete(),new z(Object.assign({endPoints:r},t))}function ge(e){const t=[];for(let r=0;r<e.size();r++)t.push(ue(e.get(r)));return e.delete(),t}function _e(e){const t=[];for(let r=0;r<e.size();r++)t.push(e.get(r));return e.delete(),t}function me(e){const t=[];for(let r=0;r<e.size();r++)t.push(he(e.get(r)));return e.delete(),t}function we(e){const t=[];for(let r=0;r<e.size();r++)t.push(ce(e.get(r)));return e.delete(),t}function Ee(e){const t=[];for(let r=0;r<e.size();r++)t.push(fe(e.get(r)));return e.delete(),t}function Te(e){const t=[];for(let r=0;r<e.size();r++){const r=new ee,n=e.get(0);r.name=n.name,r.supportedCategory=ie[n.supported_category.value];const o=n.analyzers.size();for(let e=0;e<o;e++)r.analyzers.push({name:n.analyzers.get(e).name});n.analyzers.delete();for(let e=0;e<n.search_properties.keys().size();e++){const t=n.search_properties.keys().get(e),o=n.search_properties.get(t),i=[];for(let e=0;e<o.property_names.size();e++)i.push(o.property_names.get(e));r.searchProperties.set(t,{propertyNames:i})}t.push(r)}return e.delete(),t}function ve(e,t){const r={spatialReference:t},n=Ie(e,r),o=e.lengths,i=e.coords;let a="";if(e.geometry_type.value===le.ESRI_GEOMETRY_POLYGON)a="rings";else{if(e.geometry_type.value!==le.ESRI_GEOMETRY_POLYLINE)throw new u("KnowledgeGraph:illegal-geometry-type","Illegal Geometry type for multipath conversion");a="paths"}r[a]=[];let s=0;return o.forEach((e=>{const t=[];for(let r=0;r<e;r++){const e=[];for(let t=0;t<n;t++)e[t]=i[s],s++;t.push(e)}r[a].push(t)})),r}function Ie(e,t){let r=2;return e.has_z?(t.hasZ=e.has_z,r++):t.hasZ=!1,e.has_m?(t.hasM=e.has_m,r++):t.hasM=!1,r}!function(e){e[e.Regular=0]="Regular",e[e.Provenance=1]="Provenance",e[e.Document=2]="Document"}(te||(te={})),function(e){e[e.esriFieldTypeSmallInteger=0]="esriFieldTypeSmallInteger",e[e.esriFieldTypeInteger=1]="esriFieldTypeInteger",e[e.esriFieldTypeSingle=2]="esriFieldTypeSingle",e[e.esriFieldTypeDouble=3]="esriFieldTypeDouble",e[e.esriFieldTypeString=4]="esriFieldTypeString",e[e.esriFieldTypeDate=5]="esriFieldTypeDate",e[e.esriFieldTypeOID=6]="esriFieldTypeOID",e[e.esriFieldTypeGeometry=7]="esriFieldTypeGeometry",e[e.esriFieldTypeBlob=8]="esriFieldTypeBlob",e[e.esriFieldTypeRaster=9]="esriFieldTypeRaster",e[e.esriFieldTypeGUID=10]="esriFieldTypeGUID",e[e.esriFieldTypeGlobalID=11]="esriFieldTypeGlobalID",e[e.esriFieldTypeXML=12]="esriFieldTypeXML",e[e.esriFieldTypeBigInteger=13]="esriFieldTypeBigInteger",e[e.esriFieldTypeDateOnly=14]="esriFieldTypeDateOnly",e[e.esriFieldTypeTimeOnly=15]="esriFieldTypeTimeOnly",e[e.esriFieldTypeTimestampOffset=16]="esriFieldTypeTimestampOffset"}(re||(re={})),function(e){e[e.esriGeometryNull=0]="esriGeometryNull",e[e.esriGeometryPoint=1]="esriGeometryPoint",e[e.esriGeometryMultipoint=2]="esriGeometryMultipoint",e[e.esriGeometryPolyline=3]="esriGeometryPolyline",e[e.esriGeometryPolygon=4]="esriGeometryPolygon",e[e.esriGeometryEnvelope=5]="esriGeometryEnvelope",e[e.esriGeometryAny=6]="esriGeometryAny",e[e.esriGeometryMultiPatch=7]="esriGeometryMultiPatch"}(ne||(ne={})),function(e){e[e.esriMethodHintUNSPECIFIED=0]="esriMethodHintUNSPECIFIED",e[e.esriUUIDESRI=1]="esriUUIDESRI",e[e.esriUUIDRFC4122=2]="esriUUIDRFC4122"}(oe||(oe={})),function(e){e[e.esriTypeUNSPECIFIED=0]="esriTypeUNSPECIFIED",e[e.esriTypeEntity=1]="esriTypeEntity",e[e.esriTypeRelationship=2]="esriTypeRelationship",e[e.esriTypeBoth=4]="esriTypeBoth"}(ie||(ie={})),function(e){e[e.esriGraphPropertyUNSPECIFIED=0]="esriGraphPropertyUNSPECIFIED",e[e.esriGraphPropertyRegular=1]="esriGraphPropertyRegular",e[e.esriGraphPropertyDocumentName=2]="esriGraphPropertyDocumentName",e[e.esriGraphPropertyDocumentTitle=3]="esriGraphPropertyDocumentTitle",e[e.esriGraphPropertyDocumentUrl=4]="esriGraphPropertyDocumentUrl",e[e.esriGraphPropertyDocumentText=5]="esriGraphPropertyDocumentText",e[e.esriGraphPropertyDocumentKeywords=6]="esriGraphPropertyDocumentKeywords",e[e.esriGraphPropertyDocumentContentType=7]="esriGraphPropertyDocumentContentType",e[e.esriGraphPropertyDocumentMetadata=8]="esriGraphPropertyDocumentMetadata",e[e.esriGraphPropertyDocumentFileExtension=9]="esriGraphPropertyDocumentFileExtension"}(ae||(ae={})),function(e){e[e.esriIdentifierInfoTypeUNSPECIFIED=0]="esriIdentifierInfoTypeUNSPECIFIED",e[e.esriIdentifierInfoTypeDatabaseNative=1]="esriIdentifierInfoTypeDatabaseNative",e[e.esriIdentifierInfoTypeUniformProperty=2]="esriIdentifierInfoTypeUniformProperty"}(se||(se={})),function(e){e[e.ESRI_GEOMETRY_NULL=0]="ESRI_GEOMETRY_NULL",e[e.ESRI_GEOMETRY_POINT=1]="ESRI_GEOMETRY_POINT",e[e.ESRI_GEOMETRY_MULTIPOINT=2]="ESRI_GEOMETRY_MULTIPOINT",e[e.ESRI_GEOMETRY_POLYLINE=3]="ESRI_GEOMETRY_POLYLINE",e[e.ESRI_GEOMETRY_POLYGON=4]="ESRI_GEOMETRY_POLYGON",e[e.ESRI_GEOMETRY_ENVELOPE=5]="ESRI_GEOMETRY_ENVELOPE",e[e.ESRI_GEOMETRY_ANY=6]="ESRI_GEOMETRY_ANY",e[e.ESRI_GEOMETRY_MULTI_PATCH=7]="ESRI_GEOMETRY_MULTI_PATCH"}(le||(le={})),function(e){e[e.OBJECT=0]="OBJECT",e[e.ENTITY=1]="ENTITY",e[e.RELATIONSHIP=2]="RELATIONSHIP",e[e.PATH=3]="PATH",e[e.ARRAY=4]="ARRAY"}(pe||(pe={})),function(e){e[e.view=0]="view",e[e.edit=1]="edit"}(de||(de={}));const Ge=()=>_.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"),Re={decodedWasmObjToQueryResponseObj:(e,t,r)=>{if(null==e)return null;if("object"!=typeof e)return e;if("getDate"in e)return e;if("geometry_type"in e)switch(e.geometry_type.value){case null:return null;case le.ESRI_GEOMETRY_POINT:return function(e,t){const r={spatialReference:t};let n=2;Ie(e,r);const o=e.coords;return r.x=o[0],r.y=o[1],e.has_z&&(r.z=o[n],n++),e.has_m&&(r.m=o[n]),new h(r)}(e,r);case le.ESRI_GEOMETRY_MULTIPOINT:return function(e,t){const r={spatialReference:t},n=Ie(e,r),o=e.lengths,i=e.coords,a=o[0];r.points=[];let s=0;for(let l=0;l<a;l++){const e=[];for(let t=0;t<n;t++)e[t]=i[s],s++;r.points.push(e)}return new y(r)}(e,r);case le.ESRI_GEOMETRY_POLYLINE:return function(e,t){return new f(ve(e,t))}(e,r);case le.ESRI_GEOMETRY_POLYGON:return function(e,t){return new g(ve(e,t))}(e,r);case le.ESRI_GEOMETRY_ENVELOPE:case le.ESRI_GEOMETRY_MULTI_PATCH:return Ge().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"),null;case le.ESRI_GEOMETRY_NULL:case le.ESRI_GEOMETRY_ANY:default:return Ge().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"),null}else{if(!("object_value_type"in e))return Ge().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"),null;switch(e.object_value_type.value){case pe.OBJECT:return function(e,t,r){return new v(Me(e,t,r))}(e,t,r);case pe.ENTITY:return Se(e,t,r);case pe.RELATIONSHIP:return xe(e,t,r);case pe.PATH:return function(e,t,r){const n=e.entity_count(),o=e.relationship_count(),i=[];for(let a=0;a<n;a++)i.push(Se(e.get_entity_at(a),t,r)),a<o&&i.push(xe(e.get_relationship_at(a),t,r));return new I({path:i})}(e,t,r);case pe.ARRAY:return function(e,t,r){const n=[],o=e.count();for(let i=0;i<o;i++){const o=e.get_value_at(i);n.push(be(o,t,r))}return n}(e,t,r);default:return Ge().warnOnce("Unknown graph object type detected!  Result interpreted as null"),null}}}};function be(e,t,r){return Re.decodedWasmObjToQueryResponseObj(e,t,r)}function Se(e,t,r){const n=e.type_name,o=Me(e,t,r),i=e.get_id();return new E(Object.assign({typeName:n,id:i},o))}function Me(e,t,r){const n={},o=e.key_count();for(let i=0;i<o;i++)n[e.get_key_at(i)]=be(e.get_value_at(i),t,r);return{properties:n}}function xe(e,t,r){const n=e.type_name,o=Me(e,t,r);return new T(Object.assign({typeName:n,id:e.get_id(),originId:e.get_origin_entity_id(),destinationId:e.get_destination_entity_id()},o))}let Oe=class extends i{constructor(e){super(e),this.hasError=null,this.error=null,this.editResults=[]}};r([n()],Oe.prototype,"hasError",void 0),r([n()],Oe.prototype,"error",void 0),r([n()],Oe.prototype,"editResults",void 0),Oe=r([o("esri.rest.knowledgeGraph.GraphApplyEdits")],Oe);const Pe=Oe,ke={fetchKnowledgeGraph:async e=>{const t=new Y({url:e}),r=[];return r.push(De(t)),r.push(Ne(t)),await Promise.all(r),t},refreshDataModel:async e=>{e.dataModel=await Be(e)},refreshServiceDefinition:async e=>{const t=(await m(e.url,{query:{f:"json"}})).data;return t.capabilities=t?.capabilities?.split(","),t.supportedQueryFormats=t?.supportedQueryFormats?.split(","),e.serviceDefinition=new U(t),e.serviceDefinition},executeQueryStreaming:async(e,t,r)=>{const n=`${e.url}/graph/query`;await Ae(e);const o=await Ue(n,r);o.data.body=await async function(e,t){const r=await V(),n=new r.GraphQueryRequestEncoder;if(n.deleteLater(),e.outputSpatialReference?n.output_spatial_reference={wkid:e.outputSpatialReference.wkid,latestWkid:e.outputSpatialReference.latestWkid,vcsWkid:e.outputSpatialReference.vcsWkid,latestVcsWkid:e.outputSpatialReference.latestVcsWkid,wkt:e.outputSpatialReference.wkt??""}:n.output_spatial_reference=r.SpatialReferenceUtil.WGS84(),n.open_cypher_query=e.openCypherQuery,e.bindParameters)for(const[o,a]of Object.entries(e.bindParameters))Ce(o,a,n,r);if(e.bindGeometryQuantizationParameters)!function(e,t){t.input_quantization_parameters={xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}(e.bindGeometryQuantizationParameters,n);else{if(t.dataModel||await De(t),4326!==t.dataModel?.spatialReference?.wkid)throw new u("knowledge-graph:SR-quantization-mismatch","If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");n.input_quantization_parameters=r.InputQuantizationUtil.WGS84_lossless()}e.outputQuantizationParameters&&function(e,t,r){if(!e.extent)throw new u("knowledge-graph:illegal-output-quantization","The Output quantization provided to the encoder had an illegal value as part of its extent",e.extent);if(!e.quantizeMode)throw new u("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal mode setting",e.quantizeMode);if(!e.tolerance)throw new u("knowledge-graph:illegal-output-quantization","The Output quantization contained an illegal tolerance setting",e.quantizeMode);t.output_quantization_parameters={extent:{xmax:e.extent.xmax,ymax:e.extent.ymax,xmin:e.extent.xmin,ymin:e.extent.ymin},quantize_mode:r.esriQuantizeMode[e.quantizeMode],tolerance:e.tolerance}}(e.outputQuantizationParameters,n,r);try{n.encode()}catch(o){throw new u("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{error:o})}const i=n.get_encoding_result();if(0!==i.error.error_code)throw new u("knowledge-graph:query-encoding-failed","Attempting to encode the query failed",{errorCode:i.error.error_code,errorMessage:i.error.error_message});return structuredClone(i.get_byte_buffer())}(t,e);const i=await ze(o.data.url,o.data);if(e.dataModel)return new S({resultRowsStream:await Qe(i,e.dataModel,t.outputSpatialReference??void 0)});throw new u("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},executeApplyEdits:async(e,t,r)=>{if(e.serviceDefinition?.dataEditingNotSupported)throw new u("knowledge-graph:data-editing-not-supported","The Knowledge Graph Service definition indicated that data editing is not supported");const n=`${e.url}/graph/applyEdits`;await Ae(e);const o=await Ue(n,r);return o.data.body=await async function(e,t){if(t.dataModel||await De(t),!t.dataModel)throw new u("knowledge-graph:data-model-undefined","Encoding could not proceed because a data model was not provided and it could not be determined from the service");const r=await V(),n=!!e.options?.cascadeDelete,o=new r.GraphApplyEditsEncoder(r.SpatialReferenceUtil.WGS84(),e.options?.inputQuantizationParameters?function(e){return{xy_resolution:e.xyResolution,x_false_origin:e.xFalseOrigin,y_false_origin:e.yFalseOrigin,z_resolution:e.zResolution,z_false_origin:e.zFalseOrigin,m_resolution:e.mResolution,m_false_origin:e.mFalseOrigin}}(e.options?.inputQuantizationParameters):r.InputQuantizationUtil.WGS84_lossless());o.deleteLater(),o.cascade_delete=n;try{let t;e.entityAdds?.forEach((e=>{t=o.add_entity($(e,r)),Le(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipAdds?.forEach((e=>{if(!e.originId||!e.destinationId)throw new u("knowledge-graph:relationship-origin-destination-missing","When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");t=o.add_relationship($(e,r)),Le(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityUpdates?.forEach((e=>{if(!e.id)throw new u("knowledge-graph:entity-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_entity($(e,r)),Le(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - an entity failed to be added to the encoder")})),e.relationshipUpdates?.forEach((e=>{if(!e.id)throw new u("knowledge-graph:relationship-id-missing","When updating an entity or relationship, you must specify the id on the class level property");t=o.update_relationship($(e,r)),Le(t,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits - a relationship failed to be added to the encoder")})),e.entityDeletes?.forEach((e=>{if(!e.typeName)throw new u("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!0);t.deleteLater(),e.ids?.forEach((e=>{t.delete_by_id(e)}))})),e.relationshipDeletes?.forEach((e=>{if(!e.typeName)throw new u("knowledge-graph:no-type-name","You must indicate the entity/relationship named object type to apply edits - delete");const t=o.make_delete_helper(e.typeName,!1);e.ids?.forEach((e=>{t.delete_by_id(e)}))})),o.encode()}catch(Re){throw new u("knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed",{error:Re})}const i=o.get_encoding_result();return Le(i.error,"knowledge-graph:applyEdits-encoding-failed","Attempting to encode the applyEdits failed"),structuredClone(i.get_byte_buffer())}(t,e),qe(await ze(o.data.url,o.data))},executeQuery:async(e,t,r)=>{const n=`${e.url}/graph/query`,o=await m(n,{responseType:"array-buffer",query:{f:"pbf",openCypherQuery:t.openCypherQuery,...r?.query},signal:r?.signal,timeout:r?.timeout}),i=o.getHeader?.("content-type"),a=o.data;if(i?.includes("application/x-protobuf")){const t=new((await V()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel)return new R({resultRows:Ye(t,a,e.dataModel)});throw new u("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new u("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:i,data:o.data})},executeSearch:async(e,t,r)=>{const n=t.typeCategoryFilter,o=`${e.url}/graph/search`,i=await m(o,{responseType:"array-buffer",query:{f:"pbf",searchQuery:`"${t.searchQuery}"`,typeCategoryFilter:n,...r?.query},signal:r?.signal,timeout:r?.timeout}),a=i.getHeader?.("content-type"),s=i.data;if(a?.includes("application/x-protobuf")){const t=new((await V()).GraphQueryDecoder);if(t.deleteLater(),e.dataModel)return new R({resultRows:Ye(t,s,e.dataModel)});throw new u("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")}throw new u("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:a,data:i.data})},executeSearchStreaming:async(e,t,r)=>{const n=`${e.url}/graph/search`;await Ae(e);const o=await Ue(n,r);o.data.body=await async function(e){const t=await V(),r=new t.GraphSearchRequestEncoder;if(r.deleteLater(),r.search_query=e.searchQuery,r.type_category_filter=t.esriNamedTypeCategory[e.typeCategoryFilter],!0===e.returnSearchContext&&(r.return_search_context=e.returnSearchContext),null!=e.start&&e.start>0&&(r.start_index=e.start),null!=e.num&&(r.max_num_results=e.num),null!=e.idsFilter&&Array.isArray(e.idsFilter)&&e.idsFilter.length>0)try{r.set_ids_filter(W(e.idsFilter,t))}catch(ie){throw new u("knowledge-graph:ids-format-error","Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string",{error:ie})}e.namedTypesFilter?.forEach((e=>{r.add_named_type_filter(e)}));try{r.encode()}catch(ie){throw new u("knowledge-graph:search-encoding-failed","Attempting to encode the search failed",{error:ie})}const n=r.get_encoding_result();if(0!==n.error.error_code)throw new u("knowledge-graph:search-encoding-failed","Attempting to get encoding result from the query failed",{errorCode:n.error.error_code,errorMessage:n.error.error_message});return structuredClone(n.get_byte_buffer())}(t);const i=await ze(o.data.url,o.data);if(e.dataModel)return new S({resultRowsStream:await Qe(i,e.dataModel)});throw new u("knowledge-graph:undefined-data-model","The KnowledgeGraph supplied did not have a data model")},_fetchWrapper:async(e,t)=>fetch(e,t)};async function je(e,t,r){return ke.executeQueryStreaming(e,t,r)}async function Fe(e){return ke.fetchKnowledgeGraph(e)}async function De(e){return ke.refreshDataModel(e)}async function Ne(e){return ke.refreshServiceDefinition(e)}async function ze(e,t){return ke._fetchWrapper(e,t)}async function Ae(e){const t=w?.findCredential(e.url);t||(e.dataModel?await Be(e):await De(e))}function Le(e,t,r){if(0!==e.error_code)throw new u(t,r,{errorCode:e.error_code,errorMessage:e.error_message})}function Ce(e,t,r,n){null==t?r.set_param_key_value(e,""):"object"!=typeof t||t instanceof Date?r.set_param_key_value(e,t):t instanceof c?r.set_param_key_value(e,K(t,n)):t instanceof Array?r.set_param_key_value(e,W(t,n)):r.set_param_key_value(e,H(t,n))}async function Ue(e,t){return m(e,{responseType:"native-request-init",method:"post",query:{f:"pbf",...t?.query},body:"x",headers:{"Content-Type":"application/octet-stream"},signal:t?.signal,timeout:t?.timeout})}async function qe(e){const t=e.headers.get("content-type");if(t?.includes("application/x-protobuf")){const t=await e.arrayBuffer(),r=new((await V()).GraphApplyEditsDecoder);return r.deleteLater(),r.decode(new Uint8Array(t)),function(e){const t=new Pe;t.hasError=e.has_error(),t.hasError&&(t.error={errorCode:e.error.error_code,errorMessage:e.error.error_message});const r=e.get_edit_results_count();for(let n=0;n<r;n++){const r=e.get_edit_results_at(n),o=e.get_edit_results_type_name_at(n),i=[],a=[],s=[],l=r.get_add_results_count(),p=r.get_update_results_count(),d=r.get_delete_results_count();for(let e=0;e<l;e++){const t=r.get_add_result_at(e);i.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<p;e++){const t=r.get_update_result_at(e);a.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}for(let e=0;e<d;e++){const t=r.get_delete_result_at(e);s.push({id:t.id,error:{errorCode:t.error.error_code,errorMessage:t.error.error_message}})}t.editResults.push({typeName:o,adds:i,updates:a,deletes:s})}return t}(r)}throw new u("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:t,data:e.text()})}function Ye(e,t,r,n=new s({wkid:s.WGS84.wkid})){e.push_buffer(new Uint8Array(t));const o=[];let i=0;for(;e.next_row();){i||(i=e.get_header_keys().size());const t=new Array(i);for(let o=0;o<i;o++){const i=e.get_value(o);t[o]=be(i,r,n)}o.push(t)}if(e.has_error())throw new u("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:e.error.error_code,errorMessage:e.error.error_message});return o}async function Qe(e,t,r){const n=e.headers.get("content-type");if(e.headers.get("content-length")&&_.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."),n?.includes("application/x-protobuf")){const n=e.body?.getReader(),o=new((await V()).GraphQueryDecoder);return o.deleteLater(),new ReadableStream({async start(e){try{return function i(){return n?.read().then((({done:a,value:s})=>{if(a){let t;if(o.has_error()&&(t=new u("knowledge-graph:stream-decoding-error","One or more result rows were not successfully decoded",{errorCode:o.error.error_code,errorMessage:o.error.error_message})),n.releaseLock(),t)throw e.error(t),t;return void e.close()}const l=Ye(o,s,t,r);return l.length>0&&e.enqueue(l),i()}))}()}catch(Re){n?.releaseLock(),e.error(new u("knowledge-graph:stream-decoding-error","The server returned a valid response, but there was an error decoding the response stream",{error:Re})),e.close()}}})}throw new u("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:e.text()})}async function Be(e){const t=`${e.url}/dataModel/queryDataModel`,r=await m(t,{responseType:"array-buffer",query:{f:"pbf"}}),n=r.getHeader?.("content-type"),o=r.data;if(n?.includes("application/x-protobuf")){const e=(await V()).decode_data_model_from_protocol_buffer(new Uint8Array(o));if(!e)throw new u("knowledge-graph:data-model-decode-failure","The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");return function(e){return e.deleteLater(),new L({timestamp:e.timestamp,spatialReference:new s(e.spatial_reference),strict:e.strict,objectIdField:e.objectid_property,globalIdField:e.globalid_property,arcgisManaged:e.arcgis_managed,identifierInfo:{identifierMappingInfo:{identifierInfoType:se[e.identifier_info?.identifier_mapping_info?.identifier_info_type?.value],databaseNativeIdentifier:e.identifier_info?.identifier_mapping_info?.database_native_identifier,uniformPropertyIdentifier:{identifierPropertyName:e.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name}},identifierGenerationInfo:{uuidMethodHint:oe[e.identifier_info?.identifier_generation_info?.uuid_method_hint?.value]}},searchIndexes:Te(e.search_indexes),entityTypes:ge(e.entity_types),relationshipTypes:Ee(e.relationship_types)})}(e)}throw new u("knowledge-graph:unexpected-server-response","server returned an unexpected response",{responseType:n,data:r.data})}const Ve=Object.freeze(Object.defineProperty({__proto__:null,_fetchWrapper:ze,executeApplyEdits:async function(e,t,r){return ke.executeApplyEdits(e,t,r)},executeQuery:async function(e,t,r){return ke.executeQuery(e,t,r)},executeQueryStreaming:je,executeSearch:async function(e,t,r){return ke.executeSearch(e,t,r)},executeSearchStreaming:async function(e,t,r){return ke.executeSearchStreaming(e,t,r)},fetchKnowledgeGraph:Fe,kgRestServices:ke,refreshDataModel:De,refreshServiceDefinition:Ne},Symbol.toStringTag,{value:"Module"}));e("k",Ve)}}}));