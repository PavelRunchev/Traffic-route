System.register(["./vec3-legacy.js","./index-legacy.js","./mat4f64-legacy.js","./enums-legacy.js","./quat-legacy.js","./quatf64-legacy.js","./BufferView-legacy.js","./resourceUtils-legacy.js","./Indices-legacy.js"],(function(e,t){"use strict";var r,o,n,s,a,i,u,l,f,c,d,p,h,m,y,w,T,g,b,_,x,S,A,O,R,E,N,v,M,I,C,B,L,F,U,D,j,P,G,V,k,H,z,q,$,Y,K,J,X,Q,W,Z,ee,te;return{setters:[e=>{r=e.b},e=>{o=e.cb,n=e.kh,s=e.ki,a=e.kj,i=e.jN,u=e.at,l=e.kk,f=e.X,c=e.hD,d=e.bx,p=e.s,h=e.gJ,m=e.kl,y=e.U,w=e.e7,T=e.h$,g=e.km,b=e.kn,_=e.hZ,x=e.cN,S=e.hf,A=e.ko,O=e.w,R=e.kp},e=>{E=e.e,N=e.r},e=>{v=e.D,M=e.L,I=e.C,C=e.E},e=>{B=e.v},e=>{L=e.e},e=>{F=e.B,U=e.g,D=e.d,j=e.i,P=e.c,G=e.u,V=e.x,k=e.L,H=e.O,z=e.E,q=e.F,$=e.w,Y=e.q,K=e.A,J=e.V},e=>{X=e.n,Q=e.t,W=e.o,Z=e.r},e=>{ee=e.l,te=e.i}],execute:function(){function t(e,t,r){re(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function re(e,t,o,n=4,s=n){if(e.length/n!=t.length/s)return void r().error("source and destination buffers need to have the same number of elements");const a=e.length/n,i=o[0],u=o[1],l=o[2],f=o[3],c=o[4],d=o[5],p=o[6],h=o[7],m=o[8];let y=0,w=0;for(let r=0;r<a;r++){const r=t[y],o=t[y+1],a=t[y+2],T=t[y+3];e[w]=i*r+f*o+p*a,e[w+1]=u*r+c*o+h*a,e[w+2]=l*r+d*o+m*a,e[w+3]=T,y+=s,w+=n}}function oe(e,t){const r=Math.min(e.count,t.count),o=e.typedBuffer,n=e.typedBufferStride,s=t.typedBuffer,a=t.typedBufferStride;for(let i=0;i<r;i++){const e=i*n,t=i*a,r=s[t],u=s[t+1],l=s[t+2],f=r*r+u*u+l*l;if(f>0){const t=1/Math.sqrt(f);o[e]=t*r,o[e+1]=t*u,o[e+2]=t*l}}}function ne(e,t,r){se(e.typedBuffer,t,r,e.typedBufferStride)}function se(e,t,r,o=4){const n=Math.min(e.length/o,t.count),s=t.typedBuffer,a=t.typedBufferStride;let i=0,u=0;for(let l=0;l<n;l++)e[u]=r*s[i],e[u+1]=r*s[i+1],e[u+2]=r*s[i+2],e[u+3]=r*s[i+3],i+=a,u+=o}function ae(e,t){ie(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function ie(e,t,r=2,i=r){const u=t.length/2;let l=0,f=0;if(o(t)||n(t)){for(let o=0;o<u;++o)e[l]=t[f],e[l+1]=t[f+1],l+=r,f+=i;return}const c=s(t);if(a(t))for(let o=0;o<u;++o)e[l]=Math.max(t[f]/c,-1),e[l+1]=Math.max(t[f+1]/c,-1),l+=r,f+=i;else for(let o=0;o<u;++o)e[l]=t[f]/c,e[l+1]=t[f+1]/c,l+=r,f+=i}function ue(e,t,r,o){const n=e.typedBuffer,s=e.typedBufferStride,a=o?.count??e.count;let i=(o?.dstIndex??0)*s;for(let u=0;u<a;++u)n[i]=t,n[i+1]=r,i+=s}function le(e,t){fe(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function fe(e,t,r=3,o=r){const n=t.length/o;let s=0,a=0;for(let i=0;i<n;++i)e[s]=t[a],e[s+1]=t[a+1],e[s+2]=t[a+2],s+=r,a+=o}function ce(e,t,r,o,n){const s=e.typedBuffer,a=e.typedBufferStride,i=n?.count??e.count;let u=(n?.dstIndex??0)*a;for(let l=0;l<i;++l)s[u]=t,s[u+1]=r,s[u+2]=o,u+=a}function de(e,t){pe(e.typedBuffer,t,e.typedBufferStride)}function pe(e,t,r=4){const o=t.typedBuffer,n=t.typedBufferStride,s=t.count;let a=0,i=0;for(let u=0;u<s;++u)e[a]=o[i],e[a+1]=o[i+1],e[a+2]=o[i+2],e[a+3]=o[i+3],a+=r,i+=n}function he(e,t,r,o,n,s){const a=e.typedBuffer,i=e.typedBufferStride,u=s?.count??e.count;let l=(s?.dstIndex??0)*i;for(let f=0;f<u;++f)a[l]=t,a[l+1]=r,a[l+2]=o,a[l+3]=n,l+=i}e({a:oe,b:he,c:ae,d:ue,e:ne,f:ce,g:de,h:le,j:re,k:ie,l:async function(e,t,r={},o=!0){const n=await Ne.load(e,t,r),s="gltf_"+Ue++,a={lods:[],materials:new Map,textures:new Map,meta:De(n)},i=!(!n.json.asset.extras||"symbolResource"!==n.json.asset.extras.ESRI_type),u=n.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,l=new Map;await je(n,(async(e,t,i,u)=>{const f=l.get(i)??0;l.set(i,f+1);const c=void 0!==e.mode?e.mode:C.TRIANGLES,d=c===C.TRIANGLES||c===C.TRIANGLE_STRIP||c===C.TRIANGLE_FAN?c:null;if(null==d)return void O.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+C[c]+"). Skipping primitive.");if(!n.hasPositions(e))return void O.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const p=n.getPositionData(e,r),h=n.getMaterial(e,r,o),m=n.hasNormals(e)?n.getNormalData(e,r):null,y=n.hasTangents(e)?n.getTangentData(e,r):null,w=n.hasTextureCoordinates(e)?n.getTextureCoordinates(e,r):null,T=n.hasVertexColors(e)?n.getVertexColors(e,r):null,g=n.getIndexData(e,r),b={name:u,transform:N(t),attributes:{position:await p,normal:m?await m:null,texCoord0:w?await w:null,color:T?await T:null,tangent:y?await y:null},indices:await g,primitiveType:d,material:Ge(a,await h,s)};let _=null;null!=a.meta?.ESRI_lod&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(_=a.meta.ESRI_lod.thresholds[i]),a.lods[i]=a.lods[i]||{parts:[],name:u,lodThreshold:_},a.lods[i].parts[f]=b}));for(const c of a.lods)c.parts=c.parts.filter((e=>!!e));const f=await n.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:n.uri,ESRI_webstyle:u},customMeta:{},size:f}},m:fe,o:function(e,t){switch(t){case C.TRIANGLES:return function(e){return"number"==typeof e?ee(e):R(e)?new Uint16Array(e):e}(e);case C.TRIANGLE_STRIP:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return[];const r=t-2,o=te(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;t+=1)t%2==0?(o[e++]=t,o[e++]=t+1,o[e++]=t+2):(o[e++]=t+1,o[e++]=t,o[e++]=t+2)}else{let t=0;for(let n=0;n<r;n+=1)n%2==0?(o[t++]=e[n],o[t++]=e[n+1],o[t++]=e[n+2]):(o[t++]=e[n+1],o[t++]=e[n],o[t++]=e[n+2])}return o}(e);case C.TRIANGLE_FAN:return function(e){const t="number"==typeof e?e:e.length;if(t<3)return new Uint16Array(0);const r=t-2,o=r<=65536?new Uint16Array(3*r):new Uint32Array(3*r);if("number"==typeof e){let e=0;for(let t=0;t<r;++t)o[e++]=0,o[e++]=t+1,o[e++]=t+2;return o}const n=e[0];let s=e[1],a=0;for(let i=0;i<r;++i){const t=e[i+2];o[a++]=n,o[a++]=s,o[a++]=t,s=t}return o}(e)}},r:t,t:pe,u:se}),Object.freeze(Object.defineProperty({__proto__:null,normalize:oe,scale:se,scaleView:ne,transformMat3:re,transformMat3View:t,transformMat4:function(e,t,o){if(e.count!==t.count)return void r().error("source and destination buffers need to have the same number of elements");const n=e.count,s=o[0],a=o[1],i=o[2],u=o[3],l=o[4],f=o[5],c=o[6],d=o[7],p=o[8],h=o[9],m=o[10],y=o[11],w=o[12],T=o[13],g=o[14],b=o[15],_=e.typedBuffer,x=e.typedBufferStride,S=t.typedBuffer,A=t.typedBufferStride;for(let r=0;r<n;r++){const e=r*x,t=r*A,o=S[t],n=S[t+1],O=S[t+2],R=S[t+3];_[e]=s*o+l*n+p*O+w*R,_[e+1]=a*o+f*n+h*O+T*R,_[e+2]=i*o+c*n+m*O+g*R,_[e+3]=u*o+d*n+y*O+b*R}}},Symbol.toStringTag,{value:"Module"})),Object.freeze(Object.defineProperty({__proto__:null,fill:ue,normalizeIntegerBuffer:ie,normalizeIntegerBufferView:ae},Symbol.toStringTag,{value:"Module"})),Object.freeze(Object.defineProperty({__proto__:null,copy:fe,copyView:le,fill:ce},Symbol.toStringTag,{value:"Module"})),Object.freeze(Object.defineProperty({__proto__:null,copy:pe,copyView:de,fill:he},Symbol.toStringTag,{value:"Module"})),e("n",class{constructor(e){this._streamDataRequester=e}async loadJSON(e,t){return this._load("json",e,t)}async loadBinary(e,t){return i(e)?(u(t),l(e)):this._load("binary",e,t)}async loadImage(e,t){return this._load("image",e,t)}async _load(e,t,r){if(null==this._streamDataRequester)return(await f(t,{responseType:me[e]})).data;const o=await c(this._streamDataRequester.request(t,e,r));if(!0===o.ok)return o.value;throw d(o.error),new p("",`Request for resource failed: ${o.error}`)}});const me={image:"image",binary:"array-buffer",json:"json","image+type":void 0};function ye(e,t){const r=e.count;t||(t=new e.TypedArrayConstructor(r));for(let o=0;o<r;o++)t[o]=e.get(o);return t}Object.freeze(Object.defineProperty({__proto__:null,makeDense:ye},Symbol.toStringTag,{value:"Module"}));let we=class{constructor(e){this._data=e,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const e=this._offset4;return this._offset4+=1,this._dataUint32[e]}readUint8Array(e){const t=4*this._offset4;return this._offset4+=e/4,new Uint8Array(this._data,t,e)}remainingBytes(){return this._data.byteLength-4*this._offset4}};var Te,ge;!function(e){e.SCALAR="SCALAR",e.VEC2="VEC2",e.VEC3="VEC3",e.VEC4="VEC4",e.MAT2="MAT2",e.MAT3="MAT3",e.MAT4="MAT4"}(Te||(Te={})),function(e){e[e.ARRAY_BUFFER=34962]="ARRAY_BUFFER",e[e.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(ge||(ge={}));const be={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},_e={pbrMetallicRoughness:be,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},xe={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},Se=(e={})=>{const t={...be,...e.pbrMetallicRoughness},r=function(e){switch(e.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:h(e.ESRI_externalColorMixMode),e.ESRI_externalColorMixMode="tint"}return e}({...xe,...e.extras});return{..._e,...e,pbrMetallicRoughness:t,extras:r}},Ae={magFilter:M.LINEAR,minFilter:M.LINEAR_MIPMAP_LINEAR,wrapS:v.REPEAT,wrapT:v.REPEAT},Oe=1179937895,Re=1313821514,Ee=5130562;class Ne{constructor(e,t,r,o){if(this._context=e,this.uri=t,this.json=r,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=function(e){let t,r;return e.replace(/^(.*\/)?([^/]*)$/,((e,o,n)=>(t=o||"",r=n||"",""))),{dirPart:t,filePart:r}}(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new p("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new p("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new p("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(e,t,r){if(i(t)){const r=y(t);if(r&&"model/gltf-binary"!==r.mediaType)try{const o=JSON.parse(r.isBase64?atob(r.data):r.data);return new Ne(e,t,o)}catch{}const o=l(t);if(Ne._isGLBData(o))return this._fromGLBData(e,t,o)}if(Le.test(t)||"gltf"===r?.expectedType){const o=await e.loadJSON(t,r);return new Ne(e,t,o)}const o=await e.loadBinary(t,r);if(Ne._isGLBData(o))return this._fromGLBData(e,t,o);if(Fe.test(t)||"glb"===r?.expectedType)throw new p("gltf-loader-invalid-glb","This is not a valid glb file.");const n=await e.loadJSON(t,r);return new Ne(e,t,n)}static _isGLBData(e){if(null==e)return!1;const t=new we(e);return t.remainingBytes()>=4&&t.readUint32()===Oe}static async _fromGLBData(e,t,r){const o=await Ne._parseGLBData(r);return new Ne(e,t,o.json,o.binaryData)}static async _parseGLBData(e){const t=new we(e);if(t.remainingBytes()<12)throw new p("gltf-loader-error","glb binary data is insufficiently large.");const r=t.readUint32(),o=t.readUint32(),n=t.readUint32();if(r!==Oe)throw new p("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(e.byteLength<n)throw new p("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==o)throw new p("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let s,a,i=0;for(;t.remainingBytes()>=8;){const e=t.readUint32(),r=t.readUint32();if(0===i){if(r!==Re)throw new p("gltf-loader-error","First glb chunk must be JSON.");if(e<0)throw new p("gltf-loader-error","No JSON data found.");s=await X(t.readUint8Array(e))}else if(1===i){if(r!==Ee)throw new p("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");a=t.readUint8Array(e)}else O.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");i+=1}if(!s)throw new p("gltf-loader-error","No glb JSON chunk detected.");return{json:s,binaryData:a}}async getBuffer(e,t){const r=this.json.buffers[e];if(null==r.uri){if(null==this._glbBuffer)throw new p("gltf-loader-error","glb buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(e,t);if(o.byteLength!==r.byteLength)throw new p("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(e,t){const r=this._bufferLoaders.get(e);if(r)return r;const o=this.json.buffers[e].uri,n=this._context.loadBinary(this._resolveUri(o),t).then((e=>new Uint8Array(e)));return this._bufferLoaders.set(e,n),n}async getAccessor(e,t){if(!this.json.accessors)throw new p("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[e];if(null==r?.bufferView)throw new p("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[Te.MAT2,Te.MAT3,Te.MAT4])throw new p("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],n=await this.getBuffer(o.buffer,t),s=Ce[r.type],a=Be[r.componentType],i=s*a,u=o.byteStride||i;return{raw:n.buffer,byteStride:u,byteOffset:n.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:u===i,componentCount:s,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(e,t){if(null==e.indices)return;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case I.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case I.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case I.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case I.UNSIGNED_BYTE:return ye(this._wrapAccessor(D,r));case I.UNSIGNED_SHORT:return ye(this._wrapAccessor(U,r));case I.UNSIGNED_INT:return ye(this._wrapAccessor(F,r))}}async getPositionData(e,t){if(null==e.attributes.POSITION)throw new p("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(e.attributes.POSITION,t);if(r.componentType!==I.FLOAT)throw new p("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+I[r.componentType]);if(3!==r.componentCount)throw new p("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(j,r)}async getNormalData(e,t){if(null==e.attributes.NORMAL)throw new p("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(e.attributes.NORMAL,t);if(r.componentType!==I.FLOAT)throw new p("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+I[r.componentType]);if(3!==r.componentCount)throw new p("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return this._wrapAccessor(j,r)}async getTangentData(e,t){if(null==e.attributes.TANGENT)throw new p("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(e.attributes.TANGENT,t);if(r.componentType!==I.FLOAT)throw new p("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+I[r.componentType]);if(4!==r.componentCount)throw new p("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return new P(r.raw,r.byteOffset,r.byteStride,r.byteOffset+r.byteStride*r.entryCount)}async getTextureCoordinates(e,t){if(null==e.attributes.TEXCOORD_0)throw new p("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(e.attributes.TEXCOORD_0,t);if(2!==r.componentCount)throw new p("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===I.FLOAT)return this._wrapAccessor(G,r);if(!r.normalized)throw new p("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return function(e){switch(e.componentType){case I.BYTE:return new J(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case I.UNSIGNED_BYTE:return new K(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case I.SHORT:return new Y(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case I.UNSIGNED_SHORT:return new $(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case I.UNSIGNED_INT:return new q(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case I.FLOAT:return new G(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount)}}(r)}async getVertexColors(e,t){if(null==e.attributes.COLOR_0)throw new p("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(e.attributes.COLOR_0,t);if(4!==r.componentCount&&3!==r.componentCount)throw new p("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===I.FLOAT)return this._wrapAccessor(P,r);if(r.componentType===I.UNSIGNED_BYTE)return this._wrapAccessor(V,r);if(r.componentType===I.UNSIGNED_SHORT)return this._wrapAccessor(k,r)}else if(3===r.componentCount){if(r.componentType===I.FLOAT)return this._wrapAccessor(j,r);if(r.componentType===I.UNSIGNED_BYTE)return this._wrapAccessor(H,r);if(r.componentType===I.UNSIGNED_SHORT)return this._wrapAccessor(z,r)}throw new p("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+I[r.componentType])}hasPositions(e){return void 0!==e.attributes.POSITION}hasNormals(e){return void 0!==e.attributes.NORMAL}hasVertexColors(e){return void 0!==e.attributes.COLOR_0}hasTextureCoordinates(e){return void 0!==e.attributes.TEXCOORD_0}hasTangents(e){return void 0!==e.attributes.TANGENT}async getMaterial(e,t,r){let o=e.material?this._materialCache.get(e.material):void 0;if(!o){const n=null!=e.material?Se(this.json.materials[e.material]):Se(),s=n.pbrMetallicRoughness,a=this.hasVertexColors(e),i=this.getTexture(s.baseColorTexture,t),u=this.getTexture(n.normalTexture,t),l=r?this.getTexture(n.occlusionTexture,t):void 0,f=r?this.getTexture(n.emissiveTexture,t):void 0,c=r?this.getTexture(s.metallicRoughnessTexture,t):void 0,d=null!=e.material?e.material:-1;o={alphaMode:n.alphaMode,alphaCutoff:n.alphaCutoff,color:s.baseColorFactor,doubleSided:!!n.doubleSided,colorTexture:await i,normalTexture:await u,name:n.name,id:d,occlusionTexture:await l,emissiveTexture:await f,emissiveFactor:n.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await c,hasVertexColors:a,ESRI_externalColorMixMode:n.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:n.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:n.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:n.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:n.extras.ESRI_receiveAmbientOcclusion,receiveShadows:n.extras.ESRI_receiveShadows}}return o}async getTexture(e,t){if(!e)return;if(0!==(e.texCoord||0))throw new p("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=e.index,o=this.json.textures[r],n=(e=>({...Ae,...e}))(null!=o.sampler?this.json.samplers[o.sampler]:{}),s=this._getTextureSourceId(o),a=this.json.images[s],i=await this._loadTextureImageData(r,o,t);return w(this._textureCache,r,(()=>{const e=e=>33071===e||33648===e||10497===e,t=e=>{throw new p("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${e}`)};return{data:i,wrapS:e(n.wrapS)?n.wrapS:t(n.wrapS),wrapT:e(n.wrapT)?n.wrapT:t(n.wrapT),minFilter:n.minFilter,name:a.name,id:r}}))}getNodeTransform(e){if(void 0===e)return ve;let t=this._nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this._getNodeParent(e)),o=this.json.nodes[e];o.matrix?t=T(E(),r,o.matrix):o.translation||o.rotation||o.scale?(t=N(r),o.translation&&g(t,t,o.translation),o.rotation&&(Ie[3]=B(Ie,o.rotation),b(t,t,Ie[3],Ie)),o.scale&&_(t,t,o.scale)):t=N(r),this._nodeTransformCache.set(e,t)}return t}_wrapAccessor(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)}_resolveUri(e){return x(e,this._baseUri)}_getNodeParent(e){return this._nodeParentMap.get(e)}_checkVersionSupported(){const e=S.parse(this.json.asset.version,"glTF");Me.validate(e)}_checkRequiredExtensionsSupported(){const e=this.json;if(e.extensionsRequired&&!e.extensionsRequired.every((e=>this._supportedExtensions.includes(e))))throw new p("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))}_computeNodeParents(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this._nodeParentMap.set(e,t)}))}))}async _loadTextureImageData(e,t,r){const o=this._textureLoaders.get(e);if(o)return o;const n=this._createTextureLoader(t,r);return this._textureLoaders.set(e,n),n}_getTextureSourceId(e){if(void 0!==e.extensions&&null!==e.extensions.KHR_texture_basisu)return e.extensions.KHR_texture_basisu.source;if(null!==e.source)return e.source;throw new p("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}async _createTextureLoader(e,t){const r=this._getTextureSourceId(e),o=this.json.images[r];if(o.uri){if(o.uri.endsWith(".ktx2")){const e=await this._context.loadBinary(this._resolveUri(o.uri),t);return new Q(new Uint8Array(e))}return this._context.loadImage(this._resolveUri(o.uri),t)}if(null==o.bufferView)throw new p("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==o.mimeType)throw new p("gltf-loader-unsupported-feature","Image mimeType must be defined.");const n=this.json.bufferViews[o.bufferView],s=await this.getBuffer(n.buffer,t);if(null!=n.byteStride)throw new p("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const a=s.byteOffset+(n.byteOffset||0);return W(new Uint8Array(s.buffer,a,n.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const e=await A(Array.from(this._bufferLoaders.values())),t=await A(Array.from(this._textureLoaders.values()));return e.reduce(((e,t)=>e+(t?.byteLength??0)),0)+t.reduce(((e,t)=>e+(t?Z(t)?t.data.byteLength:t.width*t.height*4:0)),0)}}const ve=m(E(),Math.PI/2),Me=new S(2,0,"glTF"),Ie=L(),Ce={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Be={[I.BYTE]:1,[I.UNSIGNED_BYTE]:1,[I.SHORT]:2,[I.UNSIGNED_SHORT]:2,[I.FLOAT]:4,[I.INT]:4,[I.UNSIGNED_INT]:4},Le=/\.gltf$/i,Fe=/\.glb$/i;let Ue=0;function De(e){const t=e.json;let r=null;return t.nodes.forEach((e=>{const t=e.extras;null!=t&&(t.ESRI_proxyEllipsoid||t.ESRI_lod)&&(r=t)})),r}async function je(e,t){const r=e.json,o=r.scenes[r.scene||0].nodes,n=o.length>1,s=[];for(const i of o){const e=r.nodes[i];s.push(a(i,0)),Pe(e)&&!n&&e.extensions.MSFT_lod.ids.forEach(((e,t)=>a(e,t+1)))}async function a(o,n){const i=r.nodes[o],u=e.getNodeTransform(o);if(null!=i.weights&&O.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=i.mesh){const e=r.meshes[i.mesh];for(const r of e.primitives)s.push(t(r,u,n,e.name))}for(const e of i.children||[])s.push(a(e,n))}await Promise.all(s)}function Pe(e){return e.extensions?.MSFT_lod&&Array.isArray(e.extensions.MSFT_lod.ids)}function Ge(e,t,r){const o=t=>{const o=`${r}_tex_${t&&t.id}${t?.name?"_"+t.name:""}`;if(t&&!e.textures.has(o)){const r=function(e,t={}){return{data:e,parameters:{wrap:{s:v.REPEAT,t:v.REPEAT,...t.wrap},noUnpackFlip:!0,mipmap:!1,...t}}}(t.data,{wrap:{s:t.wrapS,t:t.wrapT},mipmap:Ve.has(t.minFilter),noUnpackFlip:!0});e.textures.set(o,r)}return o},n=`${r}_mat_${t.id}_${t.name}`;if(!e.materials.has(n)){const r=function(e={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...e}}({color:[t.color[0],t.color[1],t.color[2]],opacity:t.color[3],alphaMode:t.alphaMode,alphaCutoff:t.alphaCutoff,doubleSided:t.doubleSided,colorMixMode:t.ESRI_externalColorMixMode,textureColor:t.colorTexture?o(t.colorTexture):void 0,textureNormal:t.normalTexture?o(t.normalTexture):void 0,textureOcclusion:t.occlusionTexture?o(t.occlusionTexture):void 0,textureEmissive:t.emissiveTexture?o(t.emissiveTexture):void 0,textureMetallicRoughness:t.metallicRoughnessTexture?o(t.metallicRoughnessTexture):void 0,emissiveFactor:[t.emissiveFactor[0],t.emissiveFactor[1],t.emissiveFactor[2]],colorTextureTransform:t.colorTextureTransform,normalTextureTransform:t.normalTextureTransform,occlusionTextureTransform:t.occlusionTextureTransform,emissiveTextureTransform:t.emissiveTextureTransform,metallicRoughnessTextureTransform:t.metallicRoughnessTextureTransform,metallicFactor:t.metallicFactor,roughnessFactor:t.roughnessFactor,receiveShadows:t.receiveShadows,receiveAmbientOcclustion:t.receiveAmbientOcclusion});e.materials.set(n,r)}return n}const Ve=new Set([M.LINEAR_MIPMAP_LINEAR,M.LINEAR_MIPMAP_NEAREST]);e("i",2.1)}}}));
