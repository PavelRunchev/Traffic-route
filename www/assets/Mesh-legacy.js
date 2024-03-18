System.register(["./index-legacy.js","./georeference-legacy.js","./imageUtils-legacy2.js","./MeshLocalVertexSpace-legacy.js","./meshVertexSpaceUtils-legacy.js","./earcut-legacy.js","./DoubleArray-legacy.js","./Indices-legacy.js","./deduplicate-legacy.js","./plane-legacy.js","./triangle-legacy.js","./mat4f64-legacy.js","./basicInterfaces-legacy.js","./VertexAttribute-legacy.js","./External-legacy.js","./mat3f64-legacy.js","./quat-legacy.js","./quatf64-legacy.js","./computeTranslationToOriginAndRotation-legacy.js"],(function(e,t){"use strict";var r,n,o,i,s,a,l,c,u,p,h,f,g,m,d,y,x,w,v,b,T,A,S,j,R,M,F,I,L,_,C,D,k,N,E,O,P,U,$,W,z,V,H,B,Y,G,Z,X,q,Q,K,J,ee,te,re,ne,oe,ie,se,ae,le,ce,ue,pe,he,fe,ge,me,de,ye,xe,we,ve,be,Te,Ae,Se,je,Re,Me,Fe,Ie,Le,_e,Ce,De,ke,Ne,Ee,Oe,Pe,Ue,$e,We,ze,Ve,He,Be,Ye,Ge,Ze,Xe,qe,Qe,Ke,Je,et,tt,rt,nt;return{setters:[e=>{r=e.b6,n=e.e0,o=e.kV,i=e.ct,s=e.gI,a=e.h4,l=e.b5,c=e.gf,u=e.eT,p=e.kW,h=e.x,f=e.y,g=e.f5,m=e.dN,d=e.bD,y=e.z,x=e.bX,w=e.dt,v=e.bY,b=e.db,T=e.$,A=e.d_,S=e.w,j=e.ax,R=e.s,M=e.kX,F=e.bg,I=e.kY,L=e.aQ,_=e.cS,C=e.cV,D=e.eG,k=e._,N=e.at,E=e.ar,O=e.bM,P=e.kZ,U=e.ko,$=e.gt,W=e.gu,z=e.i4,V=e.V,H=e.R,B=e.eU,Y=e.cs,G=e.hR,Z=e.d$,X=e.k_,q=e.gn,Q=e.gL,K=e.h$,J=e.k$,ee=e.hZ,te=e.l0,re=e.l1,ne=e.hT,oe=e.h3,ie=e.cU,se=e.ex,ae=e.io,le=e.C,ce=e.cu,ue=e.aN,pe=e.l2,he=e.ei},e=>{fe=e.G,ge=e.c,me=e.Q,de=e.I,ye=e.V,xe=e._,we=e.b,ve=e.d,be=e.A,Te=e.y,Ae=e.k,Se=e.a,je=e.j,Re=e.h,Me=e.E,Fe=e.e,Ie=e.f,Le=e.w},e=>{_e=e.c},e=>{Ce=e.i,De=e.a},e=>{ke=e.g,Ne=e.p,Ee=e.u,Oe=e.h,Pe=e.l},e=>{Ue=e.i},e=>{$e=e.a,We=e.e,ze=e.t},e=>{Ve=e.t},e=>{He=e.e},e=>{Be=e.E,Ye=e.F,Ge=e.X},null,e=>{Ze=e.e},null,null,e=>{Xe=e.u,qe=e.y,Qe=e.h},e=>{Ke=e.e},e=>{Je=e.b},e=>{et=e.e,tt=e.o},e=>{rt=e.a,nt=e.R}],execute:function(){function ot(e,t,i,s){if(r(e.spatialReference,i)){it[0]=e.x,it[1]=e.y;const r=e.z;return it[2]=r??s??0,n(it,e.spatialReference,0,t,i,0,1)}const a=o(e,i);return!!a&&(t[0]=a?.x,t[1]=a?.y,t[2]=a?.z??s??0,!0)}const it=i();function st(e,t,r){const n=function(e,t,r,n){const o=(e=>!Array.isArray(e[0]))(t)?(e,r)=>t[3*e+r]:(e,r)=>t[e][r],i=n?l(n)/c(n):1;return Ge(e,((e,t)=>u(e,o(t,0)*i,o(t,1)*i,o(t,2))),r)}(at,e,t,r)?Ye(at):[0,0,1];return Math.abs(n[2])>Math.cos(s(80))?a.Z:Math.abs(n[1])>Math.abs(n[0])?a.Y:a.X}const at=Be();function lt(e){const t=function(e,t,r,n){const o=e.length,i=new Array(o),s=new Array(o),a=new Array(o);let l=0,c=0,u=0,p=0;for(let g=0;g<o;++g)p+=e[g].length;const h=ze(3*p);let f=0;for(let g=o-1;g>=0;g--){const p=e[g],m=r===pt.CCW_IS_HOLE&&ut(p,t,n);if(m&&1!==o)i[l++]=p;else{let e=p.length;for(let t=0;t<l;++t)e+=i[t].length;const r={index:f,pathLengths:new Array(l+1),count:e,holeIndices:new Array(l)};r.pathLengths[0]=p.length,p.length>0&&(a[u++]={index:f,count:p.length}),f=m?ct(p,p.length-1,-1,h,f,p.length,t):ct(p,0,1,h,f,p.length,t);for(let n=0;n<l;++n){const e=i[n];r.holeIndices[n]=f,r.pathLengths[n+1]=e.length,e.length>0&&(a[u++]={index:f,count:e.length}),f=ct(e,0,1,h,f,e.length,t)}l=0,r.count>0&&(s[c++]=r)}}for(let g=0;g<l;++g){const e=i[g];e.length>0&&(a[u++]={index:f,count:e.length}),f=ct(e,0,1,h,f,e.length,t)}return s.length=c,a.length=u,{position:h,polygons:s,outlines:a}}(e.rings,e.hasZ,pt.CCW_IS_HOLE,e.spatialReference),r=new Array;let n=0,o=0;for(const a of t.polygons){const e=a.count,i=a.index,s=$e(t.position,3*i,3*e),l=a.holeIndices.map((e=>e-i)),c=Ve(Ue(s,l,3));r.push({position:s,faces:c}),n+=s.length,o+=c.length}const i=function(e,t,r){if(1===e.length)return e[0];const n=ze(t),o=new Array(r);let i=0,s=0,a=0;for(const l of e){for(let e=0;e<l.position.length;e++)n[i++]=l.position[e];for(const e of l.faces)o[s++]=e+a;a=i/3}return{position:n,faces:Ve(o)}}(r,n,o),s=Array.isArray(i.position)?He(i.position,3,{originalIndices:i.faces}):He(i.position.buffer,6,{originalIndices:i.faces});return i.position=We(new Float64Array(s.buffer)),i.faces=s.indices,i}function ct(e,t,r,n,o,i,s){o*=3;for(let a=0;a<i;++a){const i=e[t];n[o++]=i[0],n[o++]=i[1],n[o++]=s?i[2]:0,t+=r}return o/3}function ut(e,t,r){if(t){const t=st(e,e.length-1,r);if(t===a.X)return!p(e,a.Y,a.Z);if(t===a.Y)return!p(e,a.X,a.Z)}return!p(e,a.X,a.Y)}var pt,ht;!function(e){e[e.NONE=0]="NONE",e[e.CCW_IS_HOLE=1]="CCW_IS_HOLE"}(pt||(pt={}));const ft=new WeakMap;let gt=0,mt=ht=class extends x{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,r,n){if(e instanceof HTMLImageElement){const o={type:"image-element",src:w(e.src,n),crossOrigin:e.crossOrigin};t[r]=o}else if(e instanceof HTMLCanvasElement){const n=e.getContext("2d").getImageData(0,0,e.width,e.height),o={type:"canvas-element",imageData:this._encodeImageData(n)};t[r]=o}else if(e instanceof HTMLVideoElement){const o={type:"video-element",src:w(e.src,n),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[r]=o}else if(e instanceof ImageData){const n={type:"image-data",imageData:this._encodeImageData(e)};t[r]=n}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=this._decodeImageData(e.imageData),r=document.createElement("canvas");return r.width=t.width,r.height=t.height,r.getContext("2d").putImageData(t,0,0),r}case"image-data":return this._decodeImageData(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const e=this.data,t=this.url;if(e instanceof HTMLCanvasElement)return this._imageDataContainsTransparent(e.getContext("2d").getImageData(0,0,e.width,e.height));if(e instanceof ImageData)return this._imageDataContainsTransparent(e);if(t){const e=t.substr(t.length-4,4).toLowerCase(),r=t.substr(0,15).toLocaleLowerCase();if(".png"===e||"data:image/png;"===r)return!0}return!1}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){const e="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",t=(t="")=>`d:${t},t:${this.transparent},w:${e}`;return null!=this.url?t(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?t(this.data.src):(ft.has(this.data)||ft.set(this.data,++gt),t(ft.get(this.data))):t()}get memoryUsage(){let e=0;if(e+=null!=this.url?this.url.length:0,null!=this.data){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new ht(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const r=this.clone();return e.set(this,r),r}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}_encodeImageData(e){let t="";for(let r=0;r<e.data.length;r++)t+=String.fromCharCode(e.data[r]);return{data:btoa(t),width:e.width,height:e.height}}_decodeImageData(e){const t=atob(e.data),r=new Uint8ClampedArray(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return _e(r,e.width,e.height)}_imageDataContainsTransparent(e){for(let t=3;t<e.data.length;t+=4)if(255!==e.data[t])return!0;return!1}static from(e){return"string"==typeof e?new ht({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new ht({data:e}):v(ht,e)}};h([f({type:String,json:{write:g}})],mt.prototype,"url",null),h([f({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),f()],mt.prototype,"data",null),h([m("data")],mt.prototype,"writeData",null),h([d("data")],mt.prototype,"readData",null),h([f({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],mt.prototype,"transparent",null),h([f({json:{write:!0}})],mt.prototype,"wrap",void 0),h([f({readOnly:!0})],mt.prototype,"contentHash",null),mt=ht=h([y("esri.geometry.support.MeshTexture")],mt);const dt=e("m",mt);let yt=class extends(b(x)){constructor(e){super(e),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};h([f({type:[Number],nonNullable:!0,json:{write:!0}})],yt.prototype,"offset",void 0),h([f({type:Number,nonNullable:!0,json:{write:!0}})],yt.prototype,"rotation",void 0),h([f({type:[Number],nonNullable:!0,json:{write:!0}})],yt.prototype,"scale",void 0),yt=h([y("esri.geometry.support.MeshTextureTransform")],yt);const xt=e("c",yt);var wt;let vt=wt=class extends x{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=null!=e?e.get(this):null;if(r)return r;const n=new wt(this.clonePropertiesWithDeduplication(t));return null!=e&&e.set(this,n),n}clonePropertiesWithDeduplication(e){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=null!=this.color?16:0,null!=this.colorTexture&&(e+=this.colorTexture.memoryUsage),e+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(e+=this.normalTexture.memoryUsage),e+=null!=this.normalTextureTransform?20:0,e}};h([f({type:T,json:{write:!0}})],vt.prototype,"color",void 0),h([f({type:dt,json:{write:!0}})],vt.prototype,"colorTexture",void 0),h([f({type:xt,json:{write:!0}})],vt.prototype,"colorTextureTransform",void 0),h([f({type:dt,json:{write:!0}})],vt.prototype,"normalTexture",void 0),h([f({type:xt,json:{write:!0}})],vt.prototype,"normalTextureTransform",void 0),h([f({nonNullable:!0,json:{write:!0}})],vt.prototype,"alphaMode",void 0),h([f({nonNullable:!0,json:{write:!0}})],vt.prototype,"alphaCutoff",void 0),h([f({nonNullable:!0,json:{write:!0}})],vt.prototype,"doubleSided",void 0),vt=wt=h([y("esri.geometry.support.MeshMaterial")],vt);const bt=vt;var Tt;let At=Tt=class extends bt{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=null!=e?e.get(this):null;if(r)return r;const n=new Tt(this.clonePropertiesWithDeduplication(t));return null!=e&&e.set(this,n),n}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};h([f({type:T,json:{write:!0}})],At.prototype,"emissiveColor",void 0),h([f({type:dt,json:{write:!0}})],At.prototype,"emissiveTexture",void 0),h([f({type:xt,json:{write:!0}})],At.prototype,"emissiveTextureTransform",void 0),h([f({type:dt,json:{write:!0}})],At.prototype,"occlusionTexture",void 0),h([f({type:xt,json:{write:!0}})],At.prototype,"occlusionTextureTransform",void 0),h([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],At.prototype,"metallic",void 0),h([f({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],At.prototype,"roughness",void 0),h([f({type:dt,json:{write:!0}})],At.prototype,"metallicRoughnessTexture",void 0),h([f({type:xt,json:{write:!0}})],At.prototype,"metallicRoughnessTextureTransform",void 0),At=Tt=h([y("esri.geometry.support.MeshMaterialMetallicRoughness")],At);const St=e("a",At);var jt;let Rt=e("l",jt=class extends x{constructor(e){super(e),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(e){return Ft(e,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},S.getLogger(this))}castPosition(e){return e&&e instanceof Float32Array&&S.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array"),Ft(e,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},S.getLogger(this))}castUv(e){return Ft(e,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},S.getLogger(this))}castNormal(e){return Ft(e,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},S.getLogger(this))}castTangent(e){return Ft(e,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},S.getLogger(this))}clone(){const e={position:j(this.position),uv:j(this.uv),normal:j(this.normal),tangent:j(this.tangent),color:j(this.color)};return new jt(e)}clonePositional(){const e={position:j(this.position),normal:j(this.normal),tangent:j(this.tangent),uv:this.uv,color:this.color};return new jt(e)}get memoryUsage(){let e=0;return e+=this.position.byteLength,null!=this.uv&&(e+=this.uv.byteLength),null!=this.normal&&(e+=this.normal.byteLength),null!=this.tangent&&(e+=this.tangent.byteLength),null!=this.color&&(e+=this.color.byteLength),e}});function Mt(e,t,r,n){const{loggerTag:o,stride:i}=t;return e.length%i!=0?(n.error(o,`Invalid array length, expected a multiple of ${i}`),new r([])):e}function Ft(e,t,r,n,o){if(!e)return e;if(e instanceof t)return Mt(e,n,t,o);for(const i of r)if(e instanceof i)return Mt(new t(e),n,t,o);if(Array.isArray(e))return Mt(new t(e),n,t,o);{const n=r.map((e=>`'${e.name}'`));return o.error(`Failed to set property, expected one of ${n}, but got ${e.constructor.name}`),new t([])}}function It(e,t,r){t[r]=function(e){const t=new Array(e.length);for(let r=0;r<e.length;r++)t[r]=e[r];return t}(e)}var Lt;h([f({json:{write:It}})],Rt.prototype,"color",void 0),h([A("color")],Rt.prototype,"castColor",null),h([f({nonNullable:!0,json:{write:It}})],Rt.prototype,"position",void 0),h([A("position")],Rt.prototype,"castPosition",null),h([f({json:{write:It}})],Rt.prototype,"uv",void 0),h([A("uv")],Rt.prototype,"castUv",null),h([f({json:{write:It}})],Rt.prototype,"normal",void 0),h([A("normal")],Rt.prototype,"castNormal",null),h([f({json:{write:It}})],Rt.prototype,"tangent",void 0),h([A("tangent")],Rt.prototype,"castTangent",null),e("l",Rt=jt=h([y("esri.geometry.support.MeshVertexAttributes")],Rt));let _t=Lt=class extends x{static from(e){return v(Lt,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return Ft(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},S.getLogger(this))}castMaterial(e){return v(e&&"object"==typeof e&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?St:bt,e)}clone(){return new Lt({faces:j(this.faces),shading:this.shading,material:j(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const r={faces:j(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new Lt(r)}get memoryUsage(){let e=0;return null!=this.faces&&(e+=this.faces.byteLength),null!=this.material&&(e+=this.material.memoryUsage),e}};h([f({json:{write:!0}})],_t.prototype,"faces",void 0),h([A("faces")],_t.prototype,"castFaces",null),h([f({type:bt,json:{write:!0}})],_t.prototype,"material",void 0),h([A("material")],_t.prototype,"castMaterial",null),h([f()],_t.prototype,"name",void 0),h([f({type:String,json:{write:!0}})],_t.prototype,"shading",void 0),h([f({type:Boolean})],_t.prototype,"trustSourceNormals",void 0),_t=Lt=h([y("esri.geometry.support.MeshComponent")],_t);const Ct=e("h",_t),Dt="Expected location to be a Point instance";let kt=class extends R{constructor(){super("invalid-input:location",Dt)}},Nt=null;function Et(e){if(0===e.length)return M;const t=F([Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY,-Number.POSITIVE_INFINITY]);return I(t,e),t}function Ot(e,t){const[r,n,o,i,s,a]=Et(e);return new L({xmin:r,ymin:n,zmin:o,xmax:i,ymax:s,zmax:a,spatialReference:t})}const Pt="esri.geometry.support.meshUtils.centerAt";function Ut(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:n}=e,o=r?.origin??e.anchor,s=r?.geographic,a=ge(Pt,n,o.spatialReference,s);ke(n)?function(e,t,r){const{vertexSpace:n}=e;if(!ke(n))return;const o=Wt,s=$t;if(!ot(t,s,e.spatialReference))return void S.getLogger(Pt).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`);if(!ot(r,o,e.spatialReference)){const t=e.origin;o[0]=t.x,o[1]=t.y,o[2]=t.z,S.getLogger(Pt).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}const a=_(zt,s,o);n.origin=C(i(),n.origin,a)}(e,t,o):a?function(e,t,r){const n=me(e.vertexAttributes,r),{position:o,normal:i,tangent:s}=de(n,t,!1);e.vertexAttributes.position=o,e.vertexAttributes.normal=i,e.vertexAttributes.tangent=s,e.vertexAttributesChanged()}(e,t,o):function(e,t,r){const n=Wt,o=$t;if(ot(t,o,e.spatialReference)){if(!ot(r,n,e.spatialReference)){const t=e.origin;n[0]=t.x,n[1]=t.y,n[2]=t.z,S.getLogger(Pt).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}(function(e,t,r){if(e)for(let n=0;n<e.length;n+=3)for(let o=0;o<3;o++)e[n+o]+=t[o]-r[o]})(e.vertexAttributes.position,o,n),e.vertexAttributesChanged()}else S.getLogger(Pt).error(`Failed to project centerAt location (wkid:${t.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}(e,t,o)}const $t=i(),Wt=i(),zt=i();async function Vt(e,r,n){const{source:o}=r,{loadGLTFMesh:i}=await D(k((()=>t.import("./loadGLTFMesh-legacy.js")),void 0,t.meta.url),n),s=await async function(e,t){if(Array.isArray(e)){if(!e.length)throw new R("mesh-load-external:missing-assets","There must be at least one file to load");return e[0]instanceof File?function(e){return qt(e.map((e=>({name:e.name,mimeType:e.type,source:Bt(e)}))))}(e):async function(e,t){const r=await U(e.map((async e=>{const r=await async function(e,t){const{parts:r,assetMimeType:n,assetName:o}=e;if(1===r.length)return new Qt(r[0].partUrl);const i=await e.toBlob(t);return N(t),Qt.fromBlob(i,Kt(o,n))}(e);return N(t),{name:e.assetName,mimeType:e.assetMimeType,source:r}})));if($(t))throw r.forEach((e=>e.source.dispose())),W();return qt(r)}(e,t)}return Bt(e)}(o,n);N(n);const a=i(new E({x:0,y:0,z:0,spatialReference:e.spatialReference}),s.url,{resolveFile:Ht(s),signal:n?.signal,expectedType:s.type});a.then((()=>s.dispose()),(()=>s.dispose()));const{vertexAttributes:l,components:c}=await a;e.vertexAttributes=l,e.components=c}function Ht(e){const t=O(e.url);return r=>{const n=P(r,t,t),o=n?n.replace(/^ *\.\//,""):null;return(o?e.files.get(o):null)??r}}function Bt(e){return Qt.fromBlob(e,Kt(e.name,e.type))}const Yt=/^model\/gltf\+json$/,Gt=/^model\/gltf-binary$/,Zt=/\.gltf$/i,Xt=/\.glb$/i;function qt(e){const t=new Map;let r,n=null;for(const{name:o,mimeType:i,source:s}of e)null===n&&(Yt.test(i)||Zt.test(o)?(n=s.url,r="gltf"):(Gt.test(i)||Xt.test(o))&&(n=s.url,r="glb")),t.set(o,s.url),s.files.forEach(((e,r)=>t.set(r,e)));if(null==n)throw new R("mesh-load-external:missing-files","Missing files to load external mesh source");return new Qt(n,(()=>e.forEach((({source:e})=>e.dispose()))),t,r)}class Qt{constructor(e,t=(()=>{}),r=new Map,n){this.url=e,this.dispose=t,this.files=r,this.type=n}static fromBlob(e,t){const r=URL.createObjectURL(e);return new Qt(r,(()=>URL.revokeObjectURL(r)),void 0,t)}}function Kt(e,t){return Yt.test(t)||Zt.test(e)?"gltf":Gt.test(t)||Zt.test(e)?"glb":void 0}let Jt=class extends z{constructor(){super(),this.externalSources=new V,this._explicitDisplaySource=null,this.addHandles(H((()=>this.externalSources),"after-remove",(({item:e})=>{e===this._explicitDisplaySource&&(this._explicitDisplaySource=null)}),{sync:!0,onListenerRemove:()=>this._explicitDisplaySource=null}))}get displaySource(){return this._explicitDisplaySource??this._implicitDisplaySource}set displaySource(e){if(null!=e&&!Xe(e))throw new Error("Cannot use this source for display: it is not in a supported format.");this._explicitDisplaySource=e,e&&this.externalSources.every((t=>!qe(t,e)))&&this.externalSources.add(e)}clearSources(){this.externalSources.removeAll()}getExternalSourcesOnService(e){return this.externalSources.items.filter((t=>Qe(t,e)))}get _implicitDisplaySource(){return this.externalSources.find(Xe)}};h([f()],Jt.prototype,"externalSources",void 0),h([f()],Jt.prototype,"displaySource",null),h([f()],Jt.prototype,"_implicitDisplaySource",null),h([f()],Jt.prototype,"_explicitDisplaySource",void 0),Jt=h([y("esri.geometry.support.meshUtils.Metadata")],Jt);const er={position:[-.5,-.5,0,.5,-.5,0,.5,.5,0,-.5,.5,0],normal:[0,0,1,0,0,1,0,0,1,0,0,1],uv:[0,1,1,1,1,0,0,0],faces:[0,1,2,0,2,3],facingAxisOrderSwap:{east:[3,1,2],west:[-3,-1,2],north:[-1,3,2],south:[1,-3,2],up:[1,2,3],down:[1,-2,-3]}};function tr(e,t,r){e.isPlane||function(e){for(let t=0;t<e.position.length;t+=3)e.position[t+2]+=.5}(e),function(e,t){if(null!=t){ir[0]=t[0],ir[4]=t[1],ir[8]=t[2];for(let t=0;t<e.position.length;t+=3){for(let r=0;r<3;r++)or[r]=e.position[t+r];B(or,or,ir);for(let r=0;r<3;r++)e.position[t+r]=or[r]}if(t[0]!==t[1]||t[1]!==t[2]){ir[0]=1/t[0],ir[4]=1/t[1],ir[8]=1/t[2];for(let t=0;t<e.normal.length;t+=3){for(let r=0;r<3;r++)or[r]=e.normal[t+r];B(or,or,ir),Y(or,or);for(let r=0;r<3;r++)e.normal[t+r]=or[r]}}}}(e,function(e,t,r){const n=xe(t,r);if(null==e&&1===n)return null;if(null==e)return[n,n,n];if("number"==typeof e){const t=e*n;return[t,t,t]}return[null!=e.width?e.width*n:n,null!=e.depth?e.depth*n:n,null!=e.height?e.height*n:n]}(r?.size,r?.unit,t.spatialReference));const{vertexAttributes:n,vertexSpace:o,transform:i}=ye(e,t,{vertexSpace:r?.vertexSpace,geographic:r?.geographic});return{vertexAttributes:new Rt({...n,uv:e.uv}),vertexSpace:o,transform:i,components:[new Ct({faces:e.faces,material:r?.material||null})],spatialReference:t.spatialReference}}const rr={faceDescriptions:[{axis:[0,-1,0],uvOrigin:[0,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[1,0,0],uvOrigin:[.25,.625],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,1,0],uvOrigin:[.5,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[-1,0,0],uvOrigin:[.75,.625],corners:[[1,-1],[-1,-1],[-1,1],[1,1]]},{axis:[0,0,1],uvOrigin:[0,.375],corners:[[-1,-1],[1,-1],[1,1],[-1,1]]},{axis:[0,0,-1],uvOrigin:[0,.875],corners:[[-1,1],[1,1],[1,-1],[-1,-1]]}],uvScales:[[0,0],[1,0],[1,1],[0,1]],faceVertexOffsets:[0,1,2,0,2,3]},nr={south:0,east:1,north:2,west:3,up:4,down:5},or=i(),ir=Ke();function sr(e,t,{vertexSpace:r,spatialReference:n}){if("georeferenced"===r.type){const o=e;if(!ot(t,o,n))return!1;const{origin:i}=r;return _(e,o,i),!0}const o=rt(n),i=e;if(!ot(t,i,o))return!1;const{origin:s}=r,a=ar;if(!nt(n,s,a,o))return!1;const l=G(ar,a);return null!=l&&(Z(e,i,l),!0)}const ar=Ze(),lr="esri.geometry.support.meshUtils.rotate";function cr(e,t,r){if(!e.vertexAttributes?.position||0===t[3])return;const{spatialReference:n,vertexSpace:o}=e,s=r?.origin??e.anchor,a=r?.geographic,l=ge(lr,o,n,a);Ne(e)?function(e,t,r){e.transform??=new ve;const{vertexSpace:n,transform:o,spatialReference:s}=e,[a,l,c]=n.origin,p=new E({x:a,y:l,z:c,spatialReference:s}),h=pr;if(p.equals(r))u(h,0,0,0);else if(!sr(h,r,e))return void S.getLogger(lr).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${n.type} vertex space. Projection may be possible after calling projection.load().`);Je(yr,Te(t),be(t));const f=X(hr,yr,Q,q,h),{localMatrix:g}=o,m=K(hr,f,g);o.scale=J(i(),m),ee(m,m,te(pr,o.scale)),o.rotation=Ae(m),o.translation=re(i(),m)}(e,t,s):l?function(e,t,r){const n=e.spatialReference,o=rt(n),i=dr;ot(r,i,o)||ot(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;nt(o,i,gr,o),ne(mr,gr);const h=fr;B(Te(fr),Te(t),mr),h[3]=t[3],Se(s,n,c),null!=a&&null!=u&&je(a,s,c,n,u),null!=l&&null!=p&&Re(l,s,c,n,p),ur(c,h,3,i),Me(c,s,n),null!=a&&null!=u&&(ur(u,h,3),Fe(u,s,c,n,a)),null!=l&&null!=p&&(ur(p,h,4),Ie(p,s,c,n,l)),e.vertexAttributesChanged()}(e,t,s):function(e,t,r){const n=dr;if(!ot(r,n,e.spatialReference)){const t=e.origin;n[0]=t.x,n[1]=t.y,n[2]=t.z,S.getLogger(lr).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}ur(e.vertexAttributes.position,t,3,n),ur(e.vertexAttributes.normal,t,3),ur(e.vertexAttributes.tangent,t,4),e.vertexAttributesChanged()}(e,t,s)}function ur(e,t,r,n=Q){if(null!=e){oe(gr,be(t),Te(t));for(let t=0;t<e.length;t+=r){for(let r=0;r<3;r++)pr[r]=e[t+r]-n[r];Z(pr,pr,gr);for(let r=0;r<3;r++)e[t+r]=pr[r]+n[r]}}}const pr=i(),hr=Ze(),fr=we(),gr=Ze(),mr=Ke(),dr=i(),yr=et(),xr="esri.geometry.support.meshUtils.scale";function wr(e,t,r){if(!e.vertexAttributes?.position)return;const{vertexSpace:n,spatialReference:o}=e,s=r?.origin??e.anchor,a=r?.geographic,l=ge(xr,n,o,a);Ne(e)?function(e,t,r){e.transform??=new ve;const{vertexSpace:n,transform:o,spatialReference:s}=e,[a,l,c]=n.origin,p=new E({x:a,y:l,z:c,spatialReference:s}),h=br;if(p.equals(r))u(h,0,0,0);else if(!sr(h,r,e))return void S.getLogger(xr).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh (wkid:${s.wkid}) ${n.type} vertex space. Projection may be possible after calling projection.load().`);const f=u(Tr,t,t,t),g=X(Ar,tt,Q,f,h),{localMatrix:m}=o,d=K(Ar,g,m);o.scale=J(i(),d),ee(d,d,te(br,o.scale)),o.rotation=Ae(d),o.translation=re(i(),d)}(e,t,s):l?function(e,t,r){const n=e.spatialReference,o=rt(n),i=Sr;ot(r,i,o)||ot(e.origin,i,o);const s=e.vertexAttributes.position,a=e.vertexAttributes.normal,l=e.vertexAttributes.tangent,c=new Float64Array(s.length),u=null!=a?new Float32Array(a.length):null,p=null!=l?new Float32Array(l.length):null;Se(s,n,c),null!=a&&null!=u&&je(a,s,c,n,u),null!=l&&null!=p&&Re(l,s,c,n,p),vr(c,t,i),Me(c,s,n),null!=a&&null!=u&&Fe(u,s,c,n,a),null!=l&&null!=p&&Ie(p,s,c,n,l),e.vertexAttributesChanged()}(e,t,s):function(e,t,r){const n=Sr;if(!ot(r,n,e.spatialReference)){const t=e.origin;n[0]=t.x,n[1]=t.y,n[2]=t.z,S.getLogger(xr).error(`Failed to project specified origin (wkid:${r.spatialReference.wkid}) to mesh spatial reference (wkid:${e.spatialReference.wkid}). Projection may be possible after calling projection.load().`)}vr(e.vertexAttributes.position,t,n),e.vertexAttributesChanged()}(e,t,s)}function vr(e,t,r=Q){if(e)for(let n=0;n<e.length;n+=3){for(let t=0;t<3;t++)br[t]=e[n+t]-r[t];ie(br,br,t);for(let t=0;t<3;t++)e[n+t]=br[t]+r[t]}}const br=i(),Tr=i(),Ar=Ze(),Sr=i();var jr;const Rr="esri.geometry.Mesh";function Mr(){return S.getLogger(Rr)}const Fr={base:null,key:"type",defaultKeyValue:"georeferenced",typeMap:{georeferenced:Ce,local:De}};let Ir=jr=class extends(se.LoadableMixin(ae(he))){constructor(e){super(e),this.components=null,this.vertexSpace=new Ce,this.transform=null,this.metadata=new Jt,this.hasZ=!0,this.hasM=!1,this.vertexAttributes=new Rt,this.type="mesh"}initialize(){(0===this.metadata.externalSources.length||this.vertexAttributes.position.length)&&(this.loadStatus="loaded"),this.when((()=>{this.addHandles(le((()=>({vertexAttributes:this.vertexAttributes,components:this.components?.map((e=>e.clone()))})),(()=>this._clearSources()),{once:!0,sync:!0}))}))}get hasExtent(){return this.loaded?this.vertexAttributes.position.length>0&&(!this.components||this.components.length>0):null!=this.metadata.displaySource?.extent}get _transformedExtent(){const{components:e,spatialReference:t,vertexAttributes:r,vertexSpace:n}=this,o=r.position;if(0===o.length||e&&0===e.length)return new L({xmin:0,ymin:0,zmin:0,xmax:0,ymax:0,zmax:0,spatialReference:t});if(ke(n)){const{_untransformedBounds:e,transform:r}=this;return function([e,t,r,n,o,i],s,a,l){Nt??=new Float64Array(24);const c=Nt;return c[0]=e,c[1]=t,c[2]=r,c[3]=e,c[4]=o,c[5]=r,c[6]=n,c[7]=o,c[8]=r,c[9]=n,c[10]=t,c[11]=r,c[12]=e,c[13]=t,c[14]=i,c[15]=e,c[16]=o,c[17]=i,c[18]=n,c[19]=o,c[20]=i,c[21]=n,c[22]=t,c[23]=i,fe({positions:c,transform:s,vertexSpace:a,inSpatialReference:l,outSpatialReference:l,outPositions:c}),Ot(c,l)}(e,r,n,t)}return Ot(o,t)}get _untransformedBounds(){return Et(this.vertexAttributes.position)}get anchor(){const e=Ee(this.vertexSpace,this.spatialReference);if(null!=e)return e;const{center:t,zmin:r}=this._transformedExtent;return new E({x:t.x,y:t.y,z:r,spatialReference:this.spatialReference})}get origin(){const e=Ee(this.vertexSpace,this.spatialReference);return null!=e?e:this._transformedExtent.center}get extent(){return this.loaded||null==this.metadata?.displaySource?.extent?this._transformedExtent:this.metadata.displaySource.extent.clone()}addComponent(e){this._checkIfLoaded("addComponent()")&&(this.components||(this.components=[]),this.components.push(Ct.from(e)),this.notifyChange("components"))}removeComponent(e){if(this._checkIfLoaded("removeComponent()")){if(this.components){const t=this.components.indexOf(e);if(-1!==t)return this.components.splice(t,1),void this.notifyChange("components")}Mr().error("removeComponent()","Provided component is not part of the list of components")}}rotate(e,t,r,n){return Le(e,t,r,Lr),cr(this,Lr,n),this}offset(e,t,r){if(!this._checkIfLoaded("offset()"))return this;const{vertexSpace:n,vertexAttributes:o}=this,i=o?.position;if(!i)return this;if(ke(n)){const[o,i,s]=n.origin;n.origin=ce(o+e,i+t,s+r)}else{for(let n=0;n<i.length;n+=3)i[n]+=e,i[n+1]+=t,i[n+2]+=r;this.vertexAttributesChanged()}return this}scale(e,t){return this._checkIfLoaded("scale()")?(wr(this,e,t),this):this}centerAt(e,t){return this._checkIfLoaded("centerAt()")?(Ut(this,e,t),this):this}load(e){const{metadata:{displaySource:t}}=this;return t&&this.addResolvingPromise(Vt(this,t,e)),Promise.resolve(this)}addExternalSources(e){this.metadata.externalSources.addMany(e)}updateDisplaySource(e){this.metadata.displaySource=e}clone(){return this.cloneWithVertexSpace(this.vertexSpace.clone())}cloneWithVertexSpace(e){let t=null;if(this.components){const e=new Map,r=new Map;t=this.components.map((t=>t.cloneWithDeduplication(e,r)))}const r={components:t,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes.clone(),vertexSpace:e,transform:this.transform?.clone()??null,metadata:this.metadata.clone()};return new jr(r)}cloneShallow(){return new jr({components:this.components,spatialReference:this.spatialReference,vertexAttributes:this.vertexAttributes,vertexSpace:this.vertexSpace.clone(),transform:this.transform,metadata:this.metadata})}vertexAttributesChanged(){this.notifyChange("vertexAttributes")}async toBinaryGLTF(e){const r=k((()=>t.import("./gltfexport-legacy.js")),void 0,t.meta.url),n=this.load(),o=await Promise.all([r,n]),{toBinaryGLTF:i}=o[0];return i(this,e)}get memoryUsage(){let e=0;if(e+=this.vertexAttributes.memoryUsage,null!=this.components)for(const t of this.components)e+=t.memoryUsage;return e}_clearSources(){this.metadata.clearSources()}_checkIfLoaded(e){return!!this.loaded||(Mr().error(e,"Mesh must be loaded before applying operations"),!1)}static createBox(e,t){if(!(e instanceof E))return Mr().error(".createBox()",Dt),null;const r=new jr(tr(function(){const{faceDescriptions:e,faceVertexOffsets:t,uvScales:r}=rr,n=4*e.length,o=new Float64Array(3*n),i=new Float32Array(3*n),s=new Float32Array(2*n),a=new Uint32Array(2*e.length*3);let l=0,c=0,u=0,p=0;for(let h=0;h<e.length;h++){const n=e[h],f=l/3;for(const e of t)a[p++]=f+e;const g=n.corners;for(let e=0;e<4;e++){const t=g[e];let a=0;s[u++]=.25*r[e][0]+n.uvOrigin[0],s[u++]=n.uvOrigin[1]-.25*r[e][1];for(let e=0;e<3;e++)0!==n.axis[e]?(o[l++]=.5*n.axis[e],i[c++]=n.axis[e]):(o[l++]=.5*t[a++],i[c++]=0)}}return{position:o,normal:i,uv:s,faces:a}}(),e,t));return t?.imageFace&&"all"!==t.imageFace?function(e,t){const r=e.components[0],n=r.faces,o=nr[t],i=6*o,s=new Array(6),a=new Array(n.length-6);let l=0,c=0;for(let u=0;u<n.length;u++)u>=i&&u<i+6?s[l++]=n[u]:a[c++]=n[u];if(null!=e.vertexAttributes.uv){const t=new Float32Array(e.vertexAttributes.uv),r=4*o*2,n=[0,1,1,1,1,0,0,0];for(let e=0;e<n.length;e++)t[r+e]=n[e];e.vertexAttributes.uv=t}return e.components=[new Ct({faces:s,material:r.material}),new Ct({faces:a})],e}(r,t.imageFace):r}static createSphere(e,t){return e instanceof E?new jr(tr(function(e=0){const t=Math.round(8*2**e),r=2*t,n=(t-1)*(r+1)+2*r,o=new Float64Array(3*n),i=new Float32Array(3*n),s=new Float32Array(2*n),a=new Uint32Array((t-1)*r*2*3);let l=0,c=0,u=0,p=0;for(let h=0;h<=t;h++){const e=h/t*Math.PI+.5*Math.PI,n=Math.cos(e),f=Math.sin(e);or[2]=f;const g=0===h||h===t,m=g?r-1:r;for(let d=0;d<=m;d++){const e=d/m*2*Math.PI;or[0]=-Math.sin(e)*n,or[1]=Math.cos(e)*n;for(let t=0;t<3;t++)o[l]=.5*or[t],i[l]=or[t],++l;s[c++]=(d+(g?.5:0))/r,s[c++]=h/t,0!==h&&d!==r&&(h!==t&&(a[u++]=p,a[u++]=p+1,a[u++]=p-r),1!==h&&(a[u++]=p,a[u++]=p-r,a[u++]=p-r-1)),p++}}return{position:o,normal:i,uv:s,faces:a}}(t?.densificationFactor||0),e,t)):(Mr().error(".createSphere()",Dt),null)}static createCylinder(e,t){return e instanceof E?new jr(tr(function(e=0){const t=Math.round(16*2**e),r=4*(t+1)+2*t,n=new Float64Array(3*r),o=new Float32Array(3*r),i=new Float32Array(2*r),s=new Uint32Array(4*t*3);let a=0,l=0,c=0,u=0,p=0;for(let h=0;h<=5;h++){const e=0===h||5===h,r=h<=1||h>=4,f=2===h||4===h,g=e?t-1:t;for(let m=0;m<=g;m++){const d=m/g*2*Math.PI,y=e?0:.5;or[0]=y*Math.sin(d),or[1]=y*-Math.cos(d),or[2]=h<=2?.5:-.5;for(let e=0;e<3;e++)n[a++]=or[e],o[l++]=r?2===e?h<=1?1:-1:0:2===e?0:or[e]/y;i[c++]=(m+(e?.5:0))/t,i[c++]=h<=1?1*h/3:h<=3?1*(h-2)/3+1/3:1*(h-4)/3+2/3,f||0===h||m===t||(5!==h&&(s[u++]=p,s[u++]=p+1,s[u++]=p-t),1!==h&&(s[u++]=p,s[u++]=p-t,s[u++]=p-t-1)),p++}}return{position:n,normal:o,uv:i,faces:s}}(t?.densificationFactor||0),e,t)):(Mr().error(".createCylinder()",Dt),null)}static createPlane(e,t){if(!(e instanceof E))return Mr().error(".createPlane()",Dt),null;const r=t?.facing??"up",n=function(e,t){const r="number"==typeof t?t:null!=t?t.width:1,n="number"==typeof t?t:null!=t?t.height:1;switch(e){case"up":case"down":return{width:r,depth:n};case"north":case"south":return{width:r,height:n};case"east":case"west":return{depth:r,height:n}}}(r,t?.size);return new jr(tr(function(e){const t=er.facingAxisOrderSwap[e],r=er.position,n=er.normal,o=new Float64Array(r.length),i=new Float32Array(n.length);let s=0;for(let a=0;a<4;a++){const e=s;for(let a=0;a<3;a++){const l=t[a],c=Math.abs(l)-1,u=l>=0?1:-1;o[s]=r[e+c]*u,i[s]=n[e+c]*u,s++}}return{position:o,normal:i,uv:new Float32Array(er.uv),faces:new Uint32Array(er.faces),isPlane:!0}}(r),e,{...t,size:n}))}static createFromPolygon(e,t){if(!(e instanceof ue))return Mr().error(".createFromPolygon()","Expected polygon to be a Polygon instance"),null;const r=lt(e);return new jr({vertexAttributes:new Rt({position:r.position}),components:[new Ct({faces:r.faces,shading:"flat",material:t?.material??null})],spatialReference:e.spatialReference,vertexSpace:new Ce})}static async createFromGLTF(e,r,n){if(!(e instanceof E)){const e=new kt;throw Mr().error(".createfromGLTF()",e.message),e}const{loadGLTFMesh:o}=await D(k((()=>t.import("./loadGLTFMesh-legacy.js")),void 0,t.meta.url),n);return new jr(await o(e,r,n))}static async createFromFiles(e,t,r){if(pe(Mr(),"`Mesh.createFromFiles` is deprecated in favor of 'SceneLayer.convertMesh'",{replacement:"SceneLayer.convertMesh",version:"4.29"}),!(e instanceof E)){const e=new kt;throw(e=>{Mr().error(".createFromFiles()",e.message)})(e),e}if(!r?.layer)throw new R("invalid:no-layer","SceneLayer required for file to mesh conversion.");return r.layer.convertMesh(t,{location:e,...r})}static createWithExternalSource(e,t,r){const n=r?.extent??null,{x:o,y:i,z:s,spatialReference:a}=e,l=r?.transform?.clone()??new ve,c=ce(o,i,s??0),u=Oe(r?.vertexSpace??Pe(a),c),p={source:t,extent:n},h=new Jt;return h.externalSources.push(p),new jr({metadata:h,transform:l,vertexSpace:u,spatialReference:a})}static createIncomplete(e,t){const{x:r,y:n,z:o,spatialReference:i}=e,s=t?.transform?.clone()??new ve,a=ce(r,n,o??0),l=Oe(t?.vertexSpace??Pe(i),a),c=new jr({transform:s,vertexSpace:l,spatialReference:i});return c.addResolvingPromise(Promise.reject(new R("mesh-incomplete","Mesh resources are not complete"))),c}};h([f({type:[Ct],json:{write:!0}})],Ir.prototype,"components",void 0),h([f({nonNullable:!0,types:Fr,constructOnly:!0,json:{write:!0}})],Ir.prototype,"vertexSpace",void 0),h([f({type:ve,json:{write:!0}})],Ir.prototype,"transform",void 0),h([f({constructOnly:!0})],Ir.prototype,"metadata",void 0),h([f()],Ir.prototype,"hasExtent",null),h([f()],Ir.prototype,"_transformedExtent",null),h([f()],Ir.prototype,"_untransformedBounds",null),h([f()],Ir.prototype,"anchor",null),h([f()],Ir.prototype,"origin",null),h([f({readOnly:!0,json:{read:!1}})],Ir.prototype,"extent",null),h([f({readOnly:!0,json:{read:!1,write:!0,default:!0}})],Ir.prototype,"hasZ",void 0),h([f({readOnly:!0,json:{read:!1,write:!0,default:!1}})],Ir.prototype,"hasM",void 0),h([f({type:Rt,nonNullable:!0,json:{write:!0}})],Ir.prototype,"vertexAttributes",void 0),Ir=jr=h([y(Rr)],Ir);const Lr=we();e("$",Ir)}}}));