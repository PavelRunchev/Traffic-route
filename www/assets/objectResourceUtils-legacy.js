System.register(["./devEnvironmentUtils-legacy.js","./index-legacy.js","./mat3f64-legacy.js","./mat4f64-legacy.js","./BufferView-legacy.js","./vec3-legacy.js","./DefaultMaterial_COLOR_GAMMA-legacy.js","./resourceUtils-legacy.js","./NestedMap-legacy.js","./Indices-legacy.js","./requestImageUtils-legacy.js","./orientedBoundingBox-legacy.js","./basicInterfaces-legacy.js","./triangle-legacy.js","./Util-legacy.js","./VertexAttribute-legacy.js","./enums-legacy.js","./Texture-legacy.js","./InterleavedLayout-legacy.js","./OrderIndependentTransparency-legacy.js","./BindType-legacy.js","./sphere-legacy.js","./doublePrecisionUtils-legacy.js","./symbolColorUtils-legacy.js","./RenderState-legacy.js"],(function(e,t){"use strict";var r,o,i,a,n,s,l,c,d,u,h,m,f,p,v,g,x,_,T,b,y,E,S,A,C,w,M,O,R,I,L,N,P,D,F,B,G,z,V,H,U,j,W,k,$,q,Y,X,J,Z,K,Q,ee,te,re,oe,ie,ae,ne,se,le,ce,de,ue,he,me,fe,pe,ve,ge,xe,_e,Te,be,ye,Ee,Se,Ae,Ce,we,Me,Oe,Re,Ie,Le,Ne,Pe,De,Fe,Be,Ge,ze,Ve,He,Ue,je,We,ke,$e,qe,Ye,Xe,Je,Ze,Ke,Qe,et,tt,rt,ot,it,at,nt,st,lt,ct,dt,ut,ht,mt,ft,pt,vt,gt,xt,_t,Tt,bt,yt,Et,St,At,Ct,wt,Mt,Ot,Rt,It,Lt,Nt,Pt,Dt,Ft,Bt,Gt,zt,Vt,Ht,Ut,jt,Wt,kt,$t,qt,Yt,Xt,Jt,Zt,Kt,Qt,er;return{setters:[e=>{r=e.a},e=>{o=e.cc,i=e.s,a=e.g$,n=e.gL,s=e._,l=e.h8,c=e.gK,d=e.w,u=e.c7,h=e.dy,m=e.jN,f=e.e$,p=e.kp,v=e.at,g=e.m$,x=e.gr,_=e.gu,T=e.g6,b=e.j_,y=e.cb,E=e.iZ,S=e.eT,A=e.cV,C=e.cU,w=e.n0,M=e.ct,O=e.d$,R=e.gJ,I=e.hG,L=e.ej,N=e.l4,P=e.bg,D=e.n1,F=e.n2,B=e.cq,G=e.cs,z=e.a8,V=e.n3,H=e.cu,U=e.gW,j=e.gX,W=e.gV,k=e.n4,$=e.n5,q=e.bo,Y=e.cS,X=e.km,J=e.x,Z=e.hK,K=e.cf,Q=e.gT,ee=e.h1,te=e.y,re=e.z,oe=e.bm,ie=e.n6,ae=e.h2,ne=e.g5,se=e.eW,le=e.C,ce=e.fr,de=e.S,ue=e.hP,he=e.cR,me=e.cp,fe=e.eU,pe=e.ai,ve=e.n7,ge=e.n8,xe=e.eO,_e=e.n9,Te=e.hD,be=e.X,ye=e.bx,Ee=e.hf,Se=e.na,Ae=e.ia,Ce=e.hR,we=e.l5,Me=e.h7},e=>{Oe=e.e,Re=e.o,Ie=e.t},e=>{Le=e.o,Ne=e.r,Pe=e.e},e=>{De=e.x,Fe=e.c,Be=e.y,Ge=e.u,ze=e.q,Ve=e.i,He=e.L,Ue=e.O,je=e.E},e=>{We=e.r,ke=e.n,$e=e.u},e=>{qe=e.l,Ye=e.n,Xe=e.i,Je=e.o,Ze=e.j,Ke=e.k,Qe=e.u,et=e.t,tt=e.m},e=>{rt=e.r},e=>{ot=e.t},e=>{it=e.t,at=e.l},e=>{nt=e.t},e=>{st=e.O,lt=e.L,ct=e.t},e=>{dt=e.u,ut=e.t,ht=e.a,mt=e.i,ft=e.N,pt=e.s,vt=e.e,gt=e.n},e=>{xt=e.e,_t=e.d,Tt=e.o},e=>{bt=e.s},e=>{yt=e.e},e=>{Et=e.c,St=e.G,At=e.L,Ct=e.D,wt=e.E,Mt=e.O,Ot=e.I,Rt=e.t,It=e._},e=>{Lt=e.m,Nt=e.a,Pt=e.e,Dt=e.c},e=>{Ft=e.H},e=>{Bt=e.o,Gt=e.n,zt=e.S,Vt=e._,Ht=e.a,Ut=e.c,jt=e.A,Wt=e.h,kt=e.l,$t=e.b,qt=e.d,Yt=e.e},e=>{Xt=e.a},e=>{Jt=e.w,Zt=e.Z},e=>{Kt=e.o,Qt=e.r},e=>{er=e.n},null],execute:function(){function tr(e,t=!1){return e<=o?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function rr(e,t,r){if(e instanceof ImageData)return rr(or(e),t,r);const o=document.createElement("canvas");return o.width=t,o.height=r,o.getContext("2d").drawImage(e,0,0,o.width,o.height),o}function or(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(null==r)throw new i("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}e({H:wn,I:Pn,d:Wa,f:ja,u:La});const ir=[1,1,.5],ar=[0,.6,.2],nr=[0,1,.2],sr=.001;let lr;var cr;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(cr||(cr={}));let dr=null,ur=null;async function hr(){return null==ur&&(ur=function(){if(null==lr){const e=e=>l(`esri/libs/basisu/${e}`);lr=s((()=>t.import("./basis_transcoder-legacy.js")),void 0,t.meta.url).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return lr}(),dr=await ur),ur}function mr(e,t,r,o,i){const a=Nt(t?Et.COMPRESSED_RGBA8_ETC2_EAC:Et.COMPRESSED_RGB8_ETC2),n=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*o*a*n)}function fr(e){return e.getNumImages()>=1&&!e.isUASTC()}function pr(e){return e.getFaces()>=1&&e.isETC1S()}function vr(e,t,r,o,i,a,n,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[d,u]=l?o?[cr.ETC2_RGBA,Et.COMPRESSED_RGBA8_ETC2_EAC]:[cr.ETC1_RGB,Et.COMPRESSED_RGB8_ETC2]:c?o?[cr.BC3_RGBA,Et.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[cr.BC1_RGB,Et.COMPRESSED_RGB_S3TC_DXT1_EXT]:[cr.RGBA32,St.RGBA],h=t.hasMipmap?r:Math.min(1,r),m=[];for(let f=0;f<h;f++)m.push(new Uint8Array(n(f,d))),s(f,d,m[f]);return t.internalFormat=u,t.hasMipmap=m.length>1,t.samplingMode=t.hasMipmap?At.LINEAR_MIPMAP_LINEAR:At.LINEAR,t.width=i,t.height=a,new Lt(e,t,{type:"compressed",levels:m})}let gr=class{constructor(){this.id=c()}};const xr=()=>d.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),_r=542327876,Tr=131072,br=4;function yr(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}const Er=yr("DXT1"),Sr=yr("DXT3"),Ar=yr("DXT5"),Cr=31,wr=0,Mr=1,Or=2,Rr=3,Ir=4,Lr=7,Nr=20,Pr=21;function Dr(e,t,r){const o=function(e,t){const r=new Int32Array(e,0,Cr);if(r[wr]!==_r)return xr().error("Invalid magic number in DDS header"),null;if(!(r[Nr]&br))return xr().error("Unsupported format, must contain a FourCC code"),null;const o=r[Pr];let i,a;switch(o){case Er:i=8,a=Et.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Sr:i=16,a=Et.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ar:i=16,a=Et.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return xr().error("Unsupported FourCC code:",function(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}(o)),null}let n=1,s=r[Ir],l=r[Rr];!(3&s)&&!(3&l)||(xr().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,d=l;let u,h;r[Or]&Tr&&!1!==t&&(n=Math.max(1,r[Lr]));let m=r[Mr]+4;const f=[];for(let p=0;p<n;++p)h=(s+3>>2)*(l+3>>2)*i,u=new Uint8Array(e,m,h),f.push(u),m+=h,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:a,width:c,height:d}}(r,t.hasMipmap??!1);if(null==o)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:n,height:s}=o;return t.samplingMode=i.levels.length>1?At.LINEAR_MIPMAP_LINEAR:At.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=n,t.height=s,new Lt(e,t,i)}let Fr=class extends gr{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=xt.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new u,this._parameters={...zr,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(h(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){m(e.src)||h(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Pt;return t.wrapMode=this._parameters.wrap??Ct.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?At.LINEAR_MIPMAP_LINEAR:At.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||function(e,t){if(null==e)return 0;if(f(e)||p(e))return t.encoding===dt.KTX2_ENCODING?function(e,t){if(null==dr)return e.byteLength;const r=new dr.KTX2File(new Uint8Array(e)),o=pr(r)?mr(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):t.encoding===dt.BASIS_ENCODING?function(e,t){if(null==dr)return e.byteLength;const r=new dr.BasisFile(new Uint8Array(e)),o=fr(r)?mr(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),o}(e,!!t.mipmap):e.byteLength;const{width:r,height:o}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Br(e):t;return(t.mipmap?4/3:1)*r*o*(t.components||4)||0}(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new Lt(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(f(t)||p(t))&&this._parameters.encoding===dt.DDS_ENCODING?this._loadFromDDSData(e,t):(f(t)||p(t))&&this._parameters.encoding===dt.KTX2_ENCODING?this._loadFromKTX2(e,t):(f(t)||p(t))&&this._parameters.encoding===dt.BASIS_ENCODING?this._loadFromBasis(e,t):p(t)?this._loadFromPixelData(e,t):f(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<Gr.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=Dr(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>async function(e,t,r){null==dr&&(dr=await hr());const o=new dr.KTX2File(new Uint8Array(r));if(!pr(o))return null;o.startTranscoding();const i=vr(e,t,o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),((e,t)=>o.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>o.transcodeImage(r,e,0,0,t,0,-1,-1)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>async function(e,t,r){null==dr&&(dr=await hr());const o=new dr.BasisFile(new Uint8Array(r));if(!fr(o))return null;o.startTranscoding();const i=vr(e,t,o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),((e,t)=>o.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>o.transcodeImage(r,0,e,t,0,0)));return o.close(),o.delete(),i}(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){bt(this._parameters.width>0&&this._parameters.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this._parameters.components?St.LUMINANCE:3===this._parameters.components?St.RGB:St.RGBA,r.width=this._parameters.width??0,r.height=this._parameters.height??0,this._glTexture=new Lt(e,r,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async r=>{const o=await nt(t,{signal:r});return v(r),this._loadFromImage(e,o)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async r=>{const o=await g(t,t.src,!1,r);return v(r),this._loadFromImage(e,o)}))}_loadFromVideoElement(e,t){return t.readyState>=Gr.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((r=>new Promise(((o,a)=>{const n=()=>{t.removeEventListener("loadeddata",s),t.removeEventListener("error",l),b(c)},s=()=>{t.readyState>=Gr.HAVE_CURRENT_DATA&&(n(),o(this._loadFromImage(e,t)))},l=e=>{n(),a(e||new i("Failed to load video"))};t.addEventListener("loadeddata",s),t.addEventListener("error",l);const c=x(r,(()=>l(_())))}))))}_loadFromImage(e,t){let r=t;if(!(r instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;r=this._parameters.downsampleUncompressed?function(e,t){let r=e.width*e.height;if(r<4096)return e instanceof ImageData?or(e):e;let o=e.width,i=e.height;do{o=Math.ceil(o/2),i=Math.ceil(i/2),r=o*i}while(r>1048576||null!=t&&(o>t||i>t));return rr(e,o,i)}(r,t):function(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const o=t/r;return rr(e,Math.round(e.width*o),Math.round(e.height*o))}(r,t)}const o=Br(r);this._parameters.width=o.width,this._parameters.height=o.height;const i=this._createDescriptor(e);return i.pixelFormat=3===this._parameters.components?St.RGB:St.RGBA,i.width=o.width,i.height=o.height,this._glTexture=new Lt(e,i,r),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const o=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(o,o),r}unload(){if(this._glTexture=T(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}};function Br(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var Gr;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Gr||(Gr={}));const zr={wrap:{s:Ct.REPEAT,t:Ct.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};function Vr(e){if(e.length<o)return Array.from(e);if(y(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return E(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}const Hr=M(),Ur=M(),jr=M(),Wr=M();let kr=class{constructor(e){this.channel=e,this.id=c()}},$r=class e extends gr{constructor(e,t,r=null,o=xt.Mesh,i=null,a=-1){super(),this.material=e,this.mapPositions=r,this.type=o,this.objectAndLayerIdColor=i,this.edgeIndicesLength=a,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[n,s]of t)this._attributes.set(n,{...s,indices:it(s.indices)}),n===yt.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(n).indices.length:this.edgeIndicesLength)}instantiate(t={}){const r=new e(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,t)=>{e.exclusive=!1,r._attributes.set(t,e)})),r._boundingInfo=this._boundingInfo,r.transformation=t.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:Vr(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const r=this._attributes.get(e);r&&this._attributes.set(e,{...r,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===xt.Mesh?this._computeAttachmentOriginTriangles(e):this.type===xt.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&O(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:i}=e;S(t,0,0,0),S(Wr,0,0,0);let a=0,n=0;for(let s=0;s<i.length-2;s+=3){const e=i[s]*r,l=i[s+1]*r,c=i[s+2]*r;S(Hr,o[e],o[e+1],o[e+2]),S(Ur,o[l],o[l+1],o[l+2]),S(jr,o[c],o[c+1],o[c+2]);const d=_t(Hr,Ur,jr);d?(A(Hr,Hr,Ur),A(Hr,Hr,jr),C(Hr,Hr,1/3*d),A(t,t,Hr),a+=d):(A(Wr,Wr,Hr),A(Wr,Wr,Ur),A(Wr,Wr,jr),n+=3)}return!(0===n&&0===a||(0!==a?(C(t,t,1/a),0):0===n||(C(t,Wr,1/n),0)))}(this.attributes.get(yt.POSITION),e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(yt.POSITION);return function(e,t,r){if(!e)return!1;S(r,0,0,0),S(Wr,0,0,0);let o=0,i=0;const{size:a,data:n,indices:s}=e,l=s.length-1,c=l+(t?2:0);for(let d=0;d<c;d+=2){const e=d<l?d+1:0,t=s[d<l?d:l]*a,c=s[e]*a;Hr[0]=n[t],Hr[1]=n[t+1],Hr[2]=n[t+2],Ur[0]=n[c],Ur[1]=n[c+1],Ur[2]=n[c+2],C(Hr,A(Hr,Hr,Ur),.5);const u=w(Hr,Ur);u>0?(A(r,r,C(Hr,Hr,u)),o+=u):0===o&&(A(Wr,Wr,Hr),i++)}return 0!==o?(C(r,r,1/o),!0):0!==i&&(C(r,Wr,1/i),!0)}(t,function(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){return function(e,t){if(!e)return!1;const{size:r,data:o,indices:i}=e;S(t,0,0,0);let a=-1,n=0;for(let s=0;s<i.length;s++){const e=i[s]*r;a!==e&&(t[0]+=o[e],t[1]+=o[e+1],t[2]+=o[e+2],n++),a=e}return n>1&&C(t,t,1/n),n>0}(this.attributes.get(yt.POSITION),e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(yt.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===xt.Mesh?3:1;bt(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const r=at(e.indices.length/t);return new Tt(r,t,e)}get transformation(){return this._transformation??Le}set transformation(e){this._transformation=e&&e!==Le?Ne(e):null}addHighlight(){const e=new kr(ut.Highlight);return this.highlights=function(e,t){return null==e&&(e=[]),e.push(t),e}(this.highlights,e),e}removeHighlight(e){this.highlights=function(e,t){if(null==e)return null;const r=e.filter((e=>e!==t));return 0===r.length?null:r}(this.highlights,e)}};var qr,Yr,Xr,Jr;function Zr(e){return e===qr.Shadow||e===qr.ShadowHighlight||e===qr.ShadowExcludeHighlight}function Kr(e){return function(e){return function(e){return function(e){return e===qr.Color||e===qr.Alpha}(e)||function(e){return e===qr.Highlight||e===qr.ObjectAndLayerIdColor}(e)}(e)||e===qr.LinearDepth}(e)||e===qr.Normal}function Qr(e,t){switch(t.normalType){case Yr.Compressed:e.attributes.add(yt.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(Bt`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case Yr.Attribute:e.attributes.add(yt.NORMAL,"vec3"),e.vertex.code.add(Bt`vec3 normalModel() {
return normal;
}`);break;case Yr.ScreenDerivative:e.fragment.code.add(Bt`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:R(t.normalType);case Yr.COUNT:case Yr.Ground:}}function eo(e,t){const r=e.fragment;switch(r.code.add(Bt`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case Xr.None:r.code.add(Bt`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case Xr.View:r.code.add(Bt`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case Xr.WindingOrder:r.code.add(Bt`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:R(t.doubleSidedMode);case Xr.COUNT:}}function to(e,t){switch(t.textureCoordinateType){case Jr.Default:return e.attributes.add(yt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Bt`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case Jr.Compressed:return e.attributes.add(yt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Bt`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case Jr.Atlas:return e.attributes.add(yt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(yt.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(Bt`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:R(t.textureCoordinateType);case Jr.None:return void e.vertex.code.add(Bt`void forwardTextureCoordinates() {}`);case Jr.COUNT:return}}function ro(e){e.fragment.code.add(Bt`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function oo(e,t){switch(e.include(to,t),t.textureCoordinateType){case Jr.Default:case Jr.Compressed:return void e.fragment.code.add(Bt`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case Jr.Atlas:return e.include(ro),void e.fragment.code.add(Bt`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:R(t.textureCoordinateType);case Jr.None:case Jr.COUNT:return}}!function(e){e[e.Color=0]="Color",e[e.LinearDepth=1]="LinearDepth",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.Highlight=7]="Highlight",e[e.Alpha=8]="Alpha",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.CompositeColor=10]="CompositeColor",e[e.COUNT=11]="COUNT"}(qr||(qr={})),function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(Yr||(Yr={})),function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(Xr||(Xr={})),function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(Jr||(Jr={}));let io=class{constructor(e,t,r,o,i=null){if(this.name=e,this.type=t,this.arraySize=i,this.bind={[Xt.Pass]:null,[Xt.Draw]:null},o)switch(r){case Xt.Pass:this.bind[Xt.Pass]=o;break;case Xt.Draw:this.bind[Xt.Draw]=o}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}},ao=class extends io{constructor(e,t){super(e,"vec3",Xt.Draw,((r,o,i,a)=>r.setUniform3fv(e,t(o,i,a))))}},no=class extends io{constructor(e,t){super(e,"vec3",Xt.Pass,((r,o,i)=>r.setUniform3fv(e,t(o,i))))}},so=class extends io{constructor(e,t){super(e,"sampler2D",Xt.Draw,((r,o,i)=>r.bindTexture(e,t(o,i))))}},lo=class extends io{constructor(e,t){super(e,"sampler2D",Xt.Pass,((r,o,i)=>r.bindTexture(e,t(o,i))))}},co=class{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return ht.LOADED}},uo=class extends co{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=I(this._texture),this._textureNormal=I(this._textureNormal),this._textureEmissive=I(this._textureEmissive),this._textureOcclusion=I(this._textureOcclusion),this._textureMetallicRoughness=I(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?ht.LOADED:ht.LOADING}get textureBindParameters(){return new ho(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=I(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const r=this._textureRepository.acquire(e);if(L(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return I(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}},ho=class extends Gt{constructor(e=null,t=null,r=null,o=null,i=null,a,n){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=o,this.textureMetallicRoughness=i,this.scale=a,this.normalTextureTransformMatrix=n}};var mo;function fo(e,t){const r=e.fragment,o=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===mo.Normal&&o&&e.include(oo,t),t.pbrMode!==mo.Schematic)if(t.pbrMode!==mo.Disabled){if(t.pbrMode===mo.Normal){r.code.add(Bt`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(e===Xt.Pass?new lo("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new so("texMetallicRoughness",(e=>e.textureMetallicRoughness))),r.code.add(Bt`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(e===Xt.Pass?new lo("texEmission",(e=>e.textureEmissive)):new so("texEmission",(e=>e.textureEmissive))),r.code.add(Bt`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(e===Xt.Pass?new lo("texOcclusion",(e=>e.textureOcclusion)):new so("texOcclusion",(e=>e.textureOcclusion))),r.code.add(Bt`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(Bt`float getBakedOcclusion() { return 1.0; }`),e===Xt.Pass?r.uniforms.add(new no("emissionFactor",(e=>e.emissiveFactor)),new no("mrrFactors",(e=>e.mrrFactors))):r.uniforms.add(new ao("emissionFactor",(e=>e.emissiveFactor)),new ao("mrrFactors",(e=>e.mrrFactors))),r.code.add(Bt`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?Bt`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?Bt`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?Bt`applyEmission(${t.hasEmissiveTextureTransform?Bt`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?Bt`applyOcclusion(${t.hasOcclusionTextureTransform?Bt`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(Bt`float getBakedOcclusion() { return 1.0; }`);else r.code.add(Bt`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(mo||(mo={}));const po=new Map([[yt.POSITION,0],[yt.NORMAL,1],[yt.NORMALCOMPRESSED,1],[yt.UV0,2],[yt.COLOR,3],[yt.COLORFEATUREATTRIBUTE,3],[yt.SIZE,4],[yt.TANGENT,4],[yt.CENTEROFFSETANDDISTANCE,5],[yt.SYMBOLCOLOR,5],[yt.FEATUREATTRIBUTE,6],[yt.INSTANCEFEATUREATTRIBUTE,6],[yt.INSTANCECOLOR,7],[yt.OBJECTANDLAYERIDCOLOR,7],[yt.INSTANCEOBJECTANDLAYERIDCOLOR,7],[yt.INSTANCEMODEL,8],[yt.INSTANCEMODELNORMAL,12],[yt.INSTANCEMODELORIGINHI,11],[yt.INSTANCEMODELORIGINLO,15]]);function vo(e,t,r){const o=r.parameters;return xo.scale=Math.min(o.divisor/(t-o.offset),1),xo.factor=function(e){return Math.abs(e*e*e)}(e),xo}function go(e,t,r,o){return function(e,t){return N(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}(e,vo(t,r,o))}const xo={scale:0,factor:0,minScaleFactor:0},_o=P();function To(e,t,r,o,i,a){if(e.visible)if(e.boundingInfo){bt(e.type===xt.Mesh);const n=t.tolerance;yo(e.boundingInfo,r,o,n,i,a)}else{const t=e.attributes.get(yt.POSITION),n=t.indices;So(r,o,0,n.length/3,n,t,void 0,i,a)}}const bo=M();function yo(e,t,r,o,i,a){if(null==e)return;const n=function(e,t,r){return S(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}(t,r,bo);if(D(_o,e.bbMin),F(_o,e.bbMax),null!=i&&i.applyToAabb(_o),function(e,t,r,o){return function(e,t,r,o,i){const a=(e[0]-o-t[0])*r[0],n=(e[3]+o-t[0])*r[0];let s=Math.min(a,n),l=Math.max(a,n);const c=(e[1]-o-t[1])*r[1],d=(e[4]+o-t[1])*r[1];if(l=Math.min(l,Math.max(c,d)),l<0)return!1;if(s=Math.max(s,Math.min(c,d)),s>l)return!1;const u=(e[2]-o-t[2])*r[2],h=(e[5]+o-t[2])*r[2];return l=Math.min(l,Math.max(u,h)),!(l<0)&&(s=Math.max(s,Math.min(u,h)),!(s>l)&&s<i)}(e,t,r,o,1/0)}(_o,t,n,o)){const{primitiveIndices:n,position:s}=e,l=n?n.length:s.indices.length/3;if(l>Io){const n=e.getChildren();if(void 0!==n){for(const e of n)yo(e,t,r,o,i,a);return}}So(t,r,0,l,s.indices,s,n,i,a)}}const Eo=M();function So(e,t,r,o,i,a,n,s,l){if(n)return function(e,t,r,o,i,a,n,s,l){const{data:c,stride:d}=a,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let g=r;g<o;++g){const e=n[g];let t=3*e,r=d*i[t++],o=c[r++],a=c[r++],x=c[r];r=d*i[t++];let _=c[r++],T=c[r++],b=c[r];r=d*i[t];let y=c[r++],E=c[r++],S=c[r];null!=s&&([o,a,x]=s.applyToVertex(o,a,x,g),[_,T,b]=s.applyToVertex(_,T,b,g),[y,E,S]=s.applyToVertex(y,E,S,g));const A=_-o,C=T-a,w=b-x,M=y-o,O=E-a,R=S-x,I=p*R-O*v,L=v*M-R*f,N=f*O-M*p,P=A*I+C*L+w*N;if(Math.abs(P)<=Number.EPSILON)continue;const D=u-o,F=h-a,B=m-x,G=D*I+F*L+B*N;if(P>0){if(G<0||G>P)continue}else if(G>0||G<P)continue;const z=F*w-C*B,V=B*A-w*D,H=D*C-A*F,U=f*z+p*V+v*H;if(P>0){if(U<0||G+U>P)continue}else if(U>0||G+U<P)continue;const j=(M*z+O*V+R*H)/P;j>=0&&l(j,wo(A,C,w,M,O,R,Eo),e,!1)}}(e,t,r,o,i,a,n,s,l);const{data:c,stride:d}=a,u=e[0],h=e[1],m=e[2],f=t[0]-u,p=t[1]-h,v=t[2]-m;for(let g=r,x=3*r;g<o;++g){let e=d*i[x++],t=c[e++],r=c[e++],o=c[e];e=d*i[x++];let a=c[e++],n=c[e++],_=c[e];e=d*i[x++];let T=c[e++],b=c[e++],y=c[e];null!=s&&([t,r,o]=s.applyToVertex(t,r,o,g),[a,n,_]=s.applyToVertex(a,n,_,g),[T,b,y]=s.applyToVertex(T,b,y,g));const E=a-t,S=n-r,A=_-o,C=T-t,w=b-r,M=y-o,O=p*M-w*v,R=v*C-M*f,I=f*w-C*p,L=E*O+S*R+A*I;if(Math.abs(L)<=Number.EPSILON)continue;const N=u-t,P=h-r,D=m-o,F=N*O+P*R+D*I;if(L>0){if(F<0||F>L)continue}else if(F>0||F<L)continue;const B=P*A-S*D,G=D*E-A*N,z=N*S-E*P,V=f*B+p*G+v*z;if(L>0){if(V<0||F+V>L)continue}else if(V>0||F+V<L)continue;const H=(C*B+w*G+M*z)/L;H>=0&&l(H,wo(E,S,A,C,w,M,Eo),g,!1)}}const Ao=M(),Co=M();function wo(e,t,r,o,i,a,n){return S(Ao,e,t,r),S(Co,o,i,a),B(n,Ao,Co),G(n,n),n}function Mo(e,t){const r=t?Mo(t):{};for(const o in e){let t=e[o];t?.forEach&&(t=Oo(t)),null==t&&o in r||(r[o]=t)}return r}function Oo(e){const t=[];return e.forEach((e=>t.push(e))),t}const Ro={multiply:1,ignore:2,replace:3,tint:4},Io=1e3;let Lo=class extends gr{constructor(e,t){super(),this.type=xt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=po,this._pp0=H(0,0,1),this._pp1=H(0,0,0),this._parameters=Mo(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(function(e,t){let r=!1;for(const o in t){const i=t[o];void 0!==i&&(Array.isArray(i)?null===e[o]?(e[o]=i.slice(),r=!0):V(e[o],i)&&(r=!0):e[o]!==i&&(r=!0,e[o]=i))}return r})(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===mt.ON)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,r,o,i,a){return this._pp0[0]=this._pp1[0]=o[0],this._pp0[1]=this._pp1[1]=o[1],this.intersect(e,t,r,this._pp0,this._pp1,i)}};var No,Po;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(No||(No={})),function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"}(Po||(Po={}));const Do=new class{constructor(e=0){this.offset=e,this.sphere=Jt(),this.tmpVertex=M()}applyToVertex(e,t,r){const o=this.objectTransform.transform,i=S(Fo,e,t,r),a=O(i,i,o),n=this.offset/U(a);j(a,a,a,n);const s=this.objectTransform.inverse;return O(this.tmpVertex,a,s),this.tmpVertex}applyToMinMax(e,t){const r=this.offset/U(e);j(e,e,e,r);const o=this.offset/U(t);j(t,t,t,o)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=U(Zt(e)),r=this.offset/t;return j(Zt(this.sphere),Zt(e),Zt(e),r),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}};new class{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=M(),this._tmpMbs=Jt(),this._tmpObb=new st,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=U(e)}applyToVertex(e,t,r){const o=S(Fo,e,t,r),i=S(Bo,e,t,r+this.componentLocalOriginLength),a=this._totalOffset/U(i);return j(this._tmpVertex,o,i,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,r=e[0],o=e[1],i=e[2]+t,a=e[3],n=e[4],s=e[5]+t,l=Math.abs(r),c=Math.abs(o),d=Math.abs(i),u=Math.abs(a),h=Math.abs(n),m=Math.abs(s),f=.5*(1+Math.sign(r*a))*Math.min(l,u),p=.5*(1+Math.sign(o*n))*Math.min(c,h),v=.5*(1+Math.sign(i*s))*Math.min(d,m),g=Math.max(l,u),x=Math.max(c,h),_=Math.max(d,m),T=Math.sqrt(f*f+p*p+v*v),b=Math.sign(l+r),y=Math.sign(c+o),E=Math.sign(d+i),S=Math.sign(u+a),A=Math.sign(h+n),C=Math.sign(m+s),w=this._totalOffset;if(T<w)return e[0]-=(1-b)*w,e[1]-=(1-y)*w,e[2]-=(1-E)*w,e[3]+=S*w,e[4]+=A*w,e[5]+=C*w,e;const M=w/Math.sqrt(g*g+x*x+_*_),O=w/T,R=O-M,I=-R;return e[0]+=r*(b*I+O),e[1]+=o*(y*I+O),e[2]+=i*(E*I+O),e[3]+=a*(S*R+M),e[4]+=n*(A*R+M),e[5]+=s*(C*R+M),e}applyToMbs(e){const t=U(Zt(e)),r=this._totalOffset/t;return j(Zt(this._tmpMbs),Zt(e),Zt(e),r),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return lt(e,this._totalOffset,this._totalOffset,W.Global,this._tmpObb),this._tmpObb}};const Fo=M(),Bo=M();function Go(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,s=i.length;r*=n;for(let l=0;l<s;++l){const e=2*i[l];a[r]=o[e],a[r+1]=o[e+1],r+=n}}function zo(e,t,r,o){const{data:i,indices:a}=e,n=t.typedBuffer,s=t.typedBufferStride,l=a.length;if(r*=s,null==o||1===o)for(let c=0;c<l;++c){const e=3*a[c];n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],r+=s}else for(let c=0;c<l;++c){const e=3*a[c];for(let t=0;t<o;++t)n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],r+=s}}function Vo(e,t,r,o=1){const{data:i,indices:a}=e,n=t.typedBuffer,s=t.typedBufferStride,l=a.length;if(r*=s,1===o)for(let c=0;c<l;++c){const e=4*a[c];n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],n[r+3]=i[e+3],r+=s}else for(let c=0;c<l;++c){const e=4*a[c];for(let t=0;t<o;++t)n[r]=i[e],n[r+1]=i[e+1],n[r+2]=i[e+2],n[r+3]=i[e+3],r+=s}}function Ho(e,t,r,o,i=1){const a=t.typedBuffer,n=t.typedBufferStride;if(o*=n,1===i)for(let s=0;s<r;++s)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n;else for(let s=0;s<r;++s)for(let t=0;t<i;++t)a[o]=e[0],a[o+1]=e[1],a[o+2]=e[2],a[o+3]=e[3],o+=n}function Uo(e,t,r,o,i,a){switch(e){case yt.POSITION:{bt(3===t.size);const o=i.getField(e,Ve);bt(!!o,`No buffer view for ${e}`),o&&function(e,t,r,o,i=1){if(!t)return void zo(e,r,o,i);const{data:a,indices:n}=e,s=r.typedBuffer,l=r.typedBufferStride,c=n.length,d=t[0],u=t[1],h=t[2],m=t[4],f=t[5],p=t[6],v=t[8],g=t[9],x=t[10],_=t[12],T=t[13],b=t[14];o*=l;let y=0,E=0,S=0;const A=k(t)?e=>{y=a[e]+_,E=a[e+1]+T,S=a[e+2]+b}:e=>{const t=a[e],r=a[e+1],o=a[e+2];y=d*t+m*r+v*o+_,E=u*t+f*r+g*o+T,S=h*t+p*r+x*o+b};if(1===i)for(let C=0;C<c;++C)A(3*n[C]),s[o]=y,s[o+1]=E,s[o+2]=S,o+=l;else for(let C=0;C<c;++C){A(3*n[C]);for(let e=0;e<i;++e)s[o]=y,s[o+1]=E,s[o+2]=S,o+=l}}(t,r,o,a);break}case yt.NORMAL:{bt(3===t.size);const r=i.getField(e,Ve);bt(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o,i=1){if(!t)return void zo(e,r,o,i);const{data:a,indices:n}=e,s=t,l=r.typedBuffer,c=r.typedBufferStride,d=n.length,u=s[0],h=s[1],m=s[2],f=s[4],p=s[5],v=s[6],g=s[8],x=s[9],_=s[10],T=!$(s),b=1e-6,y=1-b;o*=c;let E=0,S=0,A=0;const C=k(s)?e=>{E=a[e],S=a[e+1],A=a[e+2]}:e=>{const t=a[e],r=a[e+1],o=a[e+2];E=u*t+f*r+g*o,S=h*t+p*r+x*o,A=m*t+v*r+_*o};if(1===i)if(T)for(let w=0;w<d;++w){C(3*n[w]);const e=E*E+S*S+A*A;if(e<y&&e>b){const t=1/Math.sqrt(e);l[o]=E*t,l[o+1]=S*t,l[o+2]=A*t}else l[o]=E,l[o+1]=S,l[o+2]=A;o+=c}else for(let w=0;w<d;++w)C(3*n[w]),l[o]=E,l[o+1]=S,l[o+2]=A,o+=c;else for(let w=0;w<d;++w){if(C(3*n[w]),T){const e=E*E+S*S+A*A;if(e<y&&e>b){const t=1/Math.sqrt(e);E*=t,S*=t,A*=t}}for(let e=0;e<i;++e)l[o]=E,l[o+1]=S,l[o+2]=A,o+=c}}(t,o,r,a);break}case yt.NORMALCOMPRESSED:{bt(2===t.size);const r=i.getField(e,ze);bt(!!r,`No buffer view for ${e}`),r&&Go(t,r,a);break}case yt.UV0:{bt(2===t.size);const r=i.getField(e,Ge);bt(!!r,`No buffer view for ${e}`),r&&Go(t,r,a);break}case yt.COLOR:case yt.SYMBOLCOLOR:{const r=i.getField(e,De);bt(!!r,`No buffer view for ${e}`),bt(3===t.size||4===t.size),!r||3!==t.size&&4!==t.size||function(e,t,r,o,i=1){const{data:a,indices:n}=e,s=r.typedBuffer,l=r.typedBufferStride,c=n.length;if(o*=l,t!==a.length||4!==t)if(1!==i)if(4!==t)for(let d=0;d<c;++d){const e=3*n[d];for(let t=0;t<i;++t)s[o]=a[e],s[o+1]=a[e+1],s[o+2]=a[e+2],s[o+3]=255,o+=l}else for(let d=0;d<c;++d){const e=4*n[d];for(let t=0;t<i;++t)s[o]=a[e],s[o+1]=a[e+1],s[o+2]=a[e+2],s[o+3]=a[e+3],o+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*n[e];s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=a[t+3],o+=l}return}for(let e=0;e<c;++e){const t=3*n[e];s[o]=a[t],s[o+1]=a[t+1],s[o+2]=a[t+2],s[o+3]=255,o+=l}}else{s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2],s[o+3]=a[3];const e=new Uint32Array(r.typedBuffer.buffer,r.start),t=l/4,n=e[o/=4];o+=t;const d=c*i;for(let r=1;r<d;++r)e[o]=n,o+=t}}(t,t.size,r,a);break}case yt.COLORFEATUREATTRIBUTE:{const r=i.getField(e,Be);bt(!!r,`No buffer view for ${e}`),bt(1===t.size),r&&1===t.size&&function(e,t,r){const{data:o,indices:i}=e,a=t.typedBuffer,n=t.typedBufferStride,s=i.length,l=o[0];r*=n;for(let c=0;c<s;++c)a[r]=l,r+=n}(t,r,a);break}case yt.TANGENT:{bt(4===t.size);const r=i.getField(e,Fe);bt(!!r,`No buffer view for ${e}`),r&&function(e,t,r,o,i=1){if(!t)return void Vo(e,r,o,i);const{data:a,indices:n}=e,s=t,l=r.typedBuffer,c=r.typedBufferStride,d=n.length,u=s[0],h=s[1],m=s[2],f=s[4],p=s[5],v=s[6],g=s[8],x=s[9],_=s[10],T=!$(s),b=1e-6,y=1-b;if(o*=c,1===i)for(let E=0;E<d;++E){const e=4*n[E],t=a[e],r=a[e+1],i=a[e+2],s=a[e+3];let d=u*t+f*r+g*i,S=h*t+p*r+x*i,A=m*t+v*r+_*i;if(T){const e=d*d+S*S+A*A;if(e<y&&e>b){const t=1/Math.sqrt(e);d*=t,S*=t,A*=t}}l[o]=d,l[o+1]=S,l[o+2]=A,l[o+3]=s,o+=c}else for(let E=0;E<d;++E){const e=4*n[E],t=a[e],r=a[e+1],s=a[e+2],d=a[e+3];let S=u*t+f*r+g*s,A=h*t+p*r+x*s,C=m*t+v*r+_*s;if(T){const e=S*S+A*A+C*C;if(e<y&&e>b){const t=1/Math.sqrt(e);S*=t,A*=t,C*=t}}for(let a=0;a<i;++a)l[o]=S,l[o+1]=A,l[o+2]=C,l[o+3]=d,o+=c}}(t,o,r,a);break}case yt.PROFILERIGHT:case yt.PROFILEUP:case yt.PROFILEVERTEXANDNORMAL:case yt.FEATUREVALUE:{bt(4===t.size);const r=i.getField(e,Fe);bt(!!r,`No buffer view for ${e}`),r&&Vo(t,r,a)}}}let jo=class{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(yt.POSITION).indices.length}write(e,t,r,o,i){!function(e,t,r,o,i,a){for(const n of t.fields.keys()){const t=e.attributes.get(n),s=t?.indices;if(t&&s)Uo(n,t,r,o,i,a);else if(n===yt.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(yt.POSITION)?.indices;if(t){const r=t.length,o=i.getField(n,De);Ho(e.objectAndLayerIdColor,o,r,a)}}}}(r,this.vertexBufferLayout,e,t,o,i)}};function Wo(e){e.attributes.add(yt.POSITION,"vec3"),e.vertex.code.add(Bt`vec3 positionModel() { return position; }`)}function ko({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Bt`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(Bt`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}let $o=class extends io{constructor(e,t){super(e,"mat3",Xt.Draw,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}},qo=class extends io{constructor(e,t){super(e,"mat3",Xt.Pass,((r,o,i)=>r.setUniformMatrix3fv(e,t(o,i))))}},Yo=class extends io{constructor(e,t){super(e,"mat4",Xt.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}};function Xo(e,t){e.include(Wo);const r=e.vertex;r.include(ko,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new no("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new no("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new qo("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new Yo("transformProjFromView",(e=>e.transformProjFromView)),new $o("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new ao("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new ao("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),r.code.add(Bt`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(Bt`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?Bt`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:Bt`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new no("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(Bt`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(Bt`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Jo extends Gt{constructor(){super(...arguments),this.transformWorldFromViewTH=M(),this.transformWorldFromViewTL=M(),this.transformViewFromCameraRelativeRS=Oe(),this.transformProjFromView=Pe()}}function Zo(e,t){switch(t.normalType){case Yr.Attribute:case Yr.Compressed:e.include(Qr,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new $o("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new qo("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(Bt`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case Yr.Ground:e.include(Xo,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Bt`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?Bt`normalize(vPositionWorldCameraRelative);`:Bt`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case Yr.ScreenDerivative:e.vertex.code.add(Bt`void forwardNormal() {}`);break;default:R(t.normalType);case Yr.COUNT:}}let Ko=class extends Jo{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Oe()}},Qo=class{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},ei=class{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=T(this._program),this._pipeline=this._configuration=null}reload(e){T(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return wt.TRIANGLES}getPipeline(e,t,r){return this._pipeline}initializeConfiguration(e,t){}},ti=class{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new q({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=Dt()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};Mt.LESS,Mt.ALWAYS;const ri={mask:255},oi={function:{func:Mt.ALWAYS,ref:ft.OutlineVisualElementMask,mask:ft.OutlineVisualElementMask},operation:{fail:Ot.KEEP,zFail:Ot.KEEP,zPass:Ot.ZERO}},ii={function:{func:Mt.ALWAYS,ref:ft.OutlineVisualElementMask,mask:ft.OutlineVisualElementMask},operation:{fail:Ot.KEEP,zFail:Ot.KEEP,zPass:Ot.REPLACE}};Mt.EQUAL,ft.OutlineVisualElementMask,ft.OutlineVisualElementMask,Ot.KEEP,Ot.KEEP,Ot.KEEP,Mt.NOTEQUAL,ft.OutlineVisualElementMask,ft.OutlineVisualElementMask,Ot.KEEP,Ot.KEEP,Ot.KEEP;let ai=class extends io{constructor(e,t){super(e,"vec2",Xt.Pass,((r,o,i)=>r.setUniform2fv(e,t(o,i))))}};function ni(e){e.varyings.add("linearDepth","float")}function si(e){e.vertex.uniforms.add(new ai("nearFar",((e,t)=>t.camera.nearFar)))}function li(e){e.vertex.code.add(Bt`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function ci(e,t){const{vertex:r}=e;switch(t.output){case qr.Color:if(t.receiveShadows)return ni(e),void r.code.add(Bt`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case qr.LinearDepth:case qr.Shadow:case qr.ShadowHighlight:case qr.ShadowExcludeHighlight:return e.include(Xo,t),ni(e),si(e),li(e),void r.code.add(Bt`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(Bt`void forwardLinearDepth() {}`)}function di(e){e.vertex.code.add(Bt`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function ui(e,t){!function(e,t,...r){if(!t.hasSlicePlane){const r=Bt`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const o=Bt`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=Bt`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.hasSliceHighlight?Bt`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:Bt`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(o),e.fragment.code.add(o),e.fragment.code.add(a)}(e,t,new ao("slicePlaneOrigin",((e,r)=>function(e,t,r){if(null==r.slicePlane)return n;const o=hi(e,t,r),i=mi(o,r.slicePlane),a=fi(e,o,r);return null!=a?O(gi,i,a):i}(t,e,r))),new ao("slicePlaneBasis1",((e,r)=>pi(t,e,r,r.slicePlane?.basis1))),new ao("slicePlaneBasis2",((e,r)=>pi(t,e,r,r.slicePlane?.basis2))))}function hi(e,t,r){return e.instancedDoublePrecision?S(vi,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function mi(e,t){return null!=e?Y(gi,t.origin,e):t.origin}function fi(e,t,r){return e.hasSliceTranslatedView?null!=t?X(_i,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function pi(e,t,r,o){if(null==o||null==r.slicePlane)return n;const i=hi(e,t,r),a=mi(i,r.slicePlane),s=fi(e,i,r);return null!=s?(A(xi,o,a),O(gi,a,s),O(xi,xi,s),Y(xi,xi,gi)):o}const vi=M(),gi=M(),xi=M(),_i=Pe();function Ti(e){li(e),e.vertex.code.add(Bt`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(Bt`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}let bi=class extends io{constructor(e,t){super(e,"float",Xt.Pass,((r,o,i)=>r.setUniform1f(e,t(o,i))))}},yi=class extends io{constructor(e,t){super(e,"mat4",Xt.Draw,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))))}};function Ei(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",n):e.uniforms.add(new ao("cameraPosition",((e,t)=>S(Ci,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function Si(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new Yo("proj",((e,t)=>t.camera.projectionMatrix)),new yi("view",((e,t)=>X(Ai,t.camera.viewMatrix,e.origin))),new ao("localOrigin",(e=>e.origin)));const r=e=>S(Ci,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new Yo("proj",((e,t)=>t.camera.projectionMatrix)),new Yo("view",((e,t)=>X(Ai,t.camera.viewMatrix,r(t)))),new no("localOrigin",((e,t)=>r(t))))}const Ai=Pe(),Ci=M();let wi=class extends Gt{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}};function Mi(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const o=t._parameterNames.length-1,i=e.count||2,a=Math.ceil(Math.log2(i)),n=t._parameterBits??[0];let s=0;for(;n[s]+a>16;)s++,s>=n.length&&n.push(0);t._parameterBits=n;const l=n[s],c=(1<<a)-1<<l;n[s]+=a,Object.defineProperty(t,r,{get(){return this[o]},set(e){if(this[o]!==e&&(this[o]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+r+" must be boolean or number, got "+typeof e)}})}}}let Oi=class extends wi{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}};J([Mi()],Oi.prototype,"instancedDoublePrecision",void 0),J([Mi()],Oi.prototype,"hasModelTransformation",void 0);const Ri=Oe();function Ii(e,t){const r=t.hasModelTransformation,o=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new Yo("model",(e=>e.modelTransformation??Le))),e.vertex.uniforms.add(new qo("normalLocalOriginFromModel",(e=>(Z(Ri,e.modelTransformation??Le),Ri))))),t.instanced&&o&&(e.attributes.add(yt.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(yt.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(yt.INSTANCEMODEL,"mat3"),e.attributes.add(yt.INSTANCEMODELNORMAL,"mat3"));const i=e.vertex;o&&(i.include(ko,t),i.uniforms.add(new ao("viewOriginHi",((e,t)=>Kt(S(Li,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),Li))),new ao("viewOriginLo",((e,t)=>Qt(S(Li,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),Li))))),i.code.add(Bt`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?Bt`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(Bt`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===qr.Normal&&(function(e){e.uniforms.add(new Yo("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}(i),i.code.add(Bt`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(Bt`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const Li=M();function Ni(e){e.vertex.code.add(Bt`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Bt.int(er.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Bt.int(er.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Bt.int(er.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Bt.int(er.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}let Pi=class extends io{constructor(e,t){super(e,"int",Xt.Pass,((r,o,i)=>r.setUniform1i(e,t(o,i))))}};function Di(e,t){t.hasSymbolColors?(e.include(Ni),e.attributes.add(yt.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(Bt`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Pi("colorMixMode",(e=>Ro[e.colorMixMode]))),e.vertex.code.add(Bt`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Fi(e,t){t.hasVertexColors?(e.attributes.add(yt.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Bt`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(Bt`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(Bt`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Bi(e){e.vertex.code.add(Bt`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(Bt`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(Bt`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(Bt`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(Bt`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(Bt`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Gi(e){e.uniforms.add(new no("screenSizePerspectiveAlignment",(e=>function(e){return S(zi,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}const zi=M();let Vi=class extends io{constructor(e,t){super(e,"vec4",Xt.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))))}};function Hi(e,t){const r=e.vertex;t.hasVerticalOffset?(function(e){e.uniforms.add(new Vi("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:o,screenLength:i}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),n=t.camera.pixelRatio||1;return K(Ui,i*n,a,r,o)})))}(r),t.hasScreenSizePerspective&&(e.include(Bi),Gi(r),Ei(e.vertex,t)),r.code.add(Bt`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?Bt`vec3 worldNormal = normalize(worldPos + localOrigin);`:Bt`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?Bt`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Bt`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(Bt`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Ui=Q();function ji(e,t){const r=t.output===qr.ObjectAndLayerIdColor,o=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),o?e.attributes.add(yt.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(yt.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(Bt`
     void forwardObjectAndLayerIdColor() {
      ${r?o?Bt`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:Bt`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:Bt``} }`),e.fragment.code.add(Bt`
      void outputObjectAndLayerIdColor() {
        ${r?Bt`fragColor = objectAndLayerIdColorVarying;`:Bt``} }`)}function Wi(e){e.code.add(Bt`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function ki(e){e.code.add(Bt`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function $i(e,t){switch(t.output){case qr.Shadow:case qr.ShadowHighlight:case qr.ShadowExcludeHighlight:e.fragment.include(Wi),e.fragment.code.add(Bt`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case qr.LinearDepth:e.fragment.include(ki),e.fragment.code.add(Bt`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const qi=ee(1,1,0,1),Yi=ee(1,0,1,1);function Xi(e){e.fragment.uniforms.add(new lo("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",qi).add("unoccludedHighlightFlag","vec4",Yi),e.fragment.code.add(Bt`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}let Ji=class extends io{constructor(e,t,r){super(e,"vec4",Xt.Pass,((r,o,i)=>r.setUniform4fv(e,t(o,i))),r)}},Zi=class extends io{constructor(e,t,r){super(e,"float",Xt.Pass,((r,o,i)=>r.setUniform1fv(e,t(o,i))),r)}},Ki=class extends oe{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};var Qi,ea;J([te()],Ki.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),J([te()],Ki.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),J([te()],Ki.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),J([te()],Ki.prototype,"DECONFLICTOR_SHOW_GRID",void 0),J([te()],Ki.prototype,"LABELS_SHOW_BORDER",void 0),J([te()],Ki.prototype,"TEXT_SHOW_BASELINE",void 0),J([te()],Ki.prototype,"TEXT_SHOW_BORDER",void 0),J([te()],Ki.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),J([te()],Ki.prototype,"OVERLAY_SHOW_CENTER",void 0),J([te()],Ki.prototype,"SHOW_POI",void 0),J([te()],Ki.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),J([te()],Ki.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),J([te()],Ki.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),J([te()],Ki.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),J([te()],Ki.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),J([te()],Ki.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),J([te()],Ki.prototype,"I3S_TREE_SHOW_TILES",void 0),J([te()],Ki.prototype,"I3S_SHOW_MODIFICATIONS",void 0),J([te()],Ki.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),J([te()],Ki.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),J([te()],Ki.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),J([te()],Ki.prototype,"LINE_WIREFRAMES",void 0),Ki=J([re("esri.views.3d.support.DebugFlags")],Ki),new Ki,function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(Qi||(Qi={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(ea||(ea={}));const ta=8;function ra(e,t){const{vertex:r,attributes:o}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&o.add(yt.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new no("vvSizeMinSize",(e=>e.vvSize.minSize))),r.uniforms.add(new no("vvSizeMaxSize",(e=>e.vvSize.maxSize))),r.uniforms.add(new no("vvSizeOffset",(e=>e.vvSize.offset))),r.uniforms.add(new no("vvSizeFactor",(e=>e.vvSize.factor))),r.uniforms.add(new qo("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new no("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(Bt`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(Bt`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?Bt`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(Bt`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",ta),r.uniforms.add(new Zi("vvColorValues",(e=>e.vvColor.values),ta),new Ji("vvColorColors",(e=>e.vvColor.colors),ta)),r.code.add(Bt`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?Bt`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(Bt`vec4 vvColor() { return vec4(1.0); }`)}function oa(e){e.fragment.code.add(Bt`
    #define discardOrAdjustAlpha(color) { if (color.a < ${Bt.float(sr)}) { discard; } }
  `)}function ia(e,t){!function(e,t,r){const o=e.fragment;switch(t.alphaDiscardMode!==pt.Mask&&t.alphaDiscardMode!==pt.MaskBlend||o.uniforms.add(r),t.alphaDiscardMode){case pt.Blend:return e.include(oa);case pt.Opaque:o.code.add(Bt`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case pt.Mask:o.code.add(Bt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case pt.MaskBlend:e.fragment.code.add(Bt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}(e,t,new bi("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function aa(e,t){const{vertex:r,fragment:o}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==pt.Opaque;switch(t.output){case qr.LinearDepth:case qr.Shadow:case qr.ShadowHighlight:case qr.ShadowExcludeHighlight:case qr.ObjectAndLayerIdColor:Si(r,t),e.include(Ti,t),e.include(to,t),e.include(ra,t),e.include($i,t),e.include(ui,t),e.include(ji,t),si(e),e.varyings.add("depth","float"),i&&o.uniforms.add(new lo("tex",(e=>e.texture))),r.code.add(Bt`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(ia,t),o.code.add(Bt`
          void main(void) {
            discardBySlice(vpos);
            ${i?Bt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Bt`colorUV`:Bt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===qr.ObjectAndLayerIdColor?Bt`outputObjectAndLayerIdColor();`:Bt`outputDepth(depth);`}
          }
        `);break;case qr.Normal:{Si(r,t),e.include(Ti,t),e.include(Qr,t),e.include(Zo,t),e.include(to,t),e.include(ra,t),i&&o.uniforms.add(new lo("tex",(e=>e.texture))),t.normalType===Yr.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const a=t.normalType===Yr.Attribute||t.normalType===Yr.Compressed;r.code.add(Bt`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${a?Bt`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:Bt`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(ui,t),e.include(ia,t),o.code.add(Bt`
          void main() {
            discardBySlice(vpos);
            ${i?Bt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Bt`colorUV`:Bt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===Yr.ScreenDerivative?Bt`vec3 normal = screenDerivativeNormal(vPositionView);`:Bt`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case qr.Highlight:Si(r,t),e.include(Ti,t),e.include(to,t),e.include(ra,t),i&&o.uniforms.add(new lo("tex",(e=>e.texture))),r.code.add(Bt`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(ui,t),e.include(ia,t),e.include(Xi,t),o.code.add(Bt`
          void main() {
            discardBySlice(vpos);
            ${i?Bt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Bt`colorUV`:Bt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function na(e,t){const r=e.fragment;t.hasVertexTangents?(e.attributes.add(yt.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===Xr.WindingOrder?r.code.add(Bt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(Bt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(Bt`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==Jr.None&&(e.include(oo,t),r.uniforms.add(t.pbrTextureBindType===Xt.Pass?new lo("normalTexture",(e=>e.textureNormal)):new so("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(r.uniforms.add(new ai("scale",(e=>e.scale??ie))),r.uniforms.add(new qo("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??Re)))),r.code.add(Bt`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&r.code.add(Bt`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(Bt`return tangentSpace * rawNormal;
}`))}var sa,la;!function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(sa||(sa={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(la||(la={}));const ca=5e5,da={required:[]};qr.LinearDepth,qr.CompositeColor,qr.Highlight;const ua={required:[qr.Depth,qr.Normal]};let ha=class extends oe{consumes(){return da}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}},ma=class extends ha{};function fa(e,t=!0){e.attributes.add(yt.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(Bt`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?Bt`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function pa(e){e.include(ki),e.code.add(Bt`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function va(e){e.code.add(Bt`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}let ga=class extends io{constructor(e,t){super(e,"vec2",Xt.Draw,((r,o,i,a)=>r.setUniform2fv(e,t(o,i,a))))}};const xa=()=>d.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let _a=class{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){xa().error("Shader module included multiple times with different configuration.");const t=new Set;for(const o of Object.keys(r))r[o]!==e[o]&&t.add(o);for(const o of Object.keys(e))r[o]!==e[o]&&t.add(o);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}},Ta=class extends _a{constructor(){super(...arguments),this.vertex=new Ea,this.fragment=new Ea,this.attributes=new Sa,this.varyings=new Aa,this.extensions=new Ca,this.constants=new Ma,this.outputs=new wa}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),o=this.varyings.generateSource(e),i="vertex"===e?this.vertex:this.fragment,a=i.uniforms.generateSource(),n=i.code.generateSource(),s="vertex"===e?Ra:Oa,l=this.constants.generateSource().concat(i.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${a.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${c.join("\n")}\n\n${n.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[Xt.Pass];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[Xt.Pass];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i)=>{for(let a=0;a<o;++a)r[a](e,t,i)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const r=e.bind[Xt.Draw];r&&t.set(e.name,r)})),this.fragment.uniforms.entries.forEach((e=>{const r=e.bind[Xt.Draw];r&&t.set(e.name,r)}));const r=Array.from(t.values()),o=r.length;return(t,i,a)=>{for(let n=0;n<o;++n)r[n](e,t,i,a)}}},ba=class{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else xa().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}},ya=class{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}},Ea=class extends _a{constructor(){super(...arguments),this.uniforms=new ba,this.code=new ya,this.constants=new Ma}get builder(){return this}},Sa=class{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}},Aa=class{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&bt(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((r,o)=>t.push("vertex"===e?`out ${r} ${o};`:`in ${r} ${o};`))),t}},Ca=class e{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(t){const r="vertex"===t?e.ALLOWLIST_VERTEX:e.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>r.includes(e))).map((e=>`#extension ${e} : enable`))}};Ca.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Ca.ALLOWLIST_VERTEX=[];let wa=class e{constructor(){this._entries=new Map}add(e,t,r=0){const o=this._entries.get(r);o?bt(o.name===e&&o.type===t,`Fragment shader output location ${r} occupied`):this._entries.set(r,{name:e,type:t})}generateSource(t){if("vertex"===t)return[];0===this._entries.size&&this._entries.set(0,{name:e.DEFAULT_NAME,type:e.DEFAULT_TYPE});const r=new Array;return this._entries.forEach(((e,t)=>r.push(`layout(location = ${t}) out ${e.type} ${e.name};`))),r}};wa.DEFAULT_TYPE="vec4",wa.DEFAULT_NAME="fragColor";class Ma{constructor(){this._entries=new Set}add(e,t,r){let o="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":o=Ma._numberToFloatStr(r);break;case"int":o=Ma._numberToIntStr(r);break;case"bool":o=r.toString();break;case"vec2":o=`vec2(${Ma._numberToFloatStr(r[0])},                            ${Ma._numberToFloatStr(r[1])})`;break;case"vec3":o=`vec3(${Ma._numberToFloatStr(r[0])},                            ${Ma._numberToFloatStr(r[1])},                            ${Ma._numberToFloatStr(r[2])})`;break;case"vec4":o=`vec4(${Ma._numberToFloatStr(r[0])},                            ${Ma._numberToFloatStr(r[1])},                            ${Ma._numberToFloatStr(r[2])},                            ${Ma._numberToFloatStr(r[3])})`;break;case"ivec2":o=`ivec2(${Ma._numberToIntStr(r[0])},                             ${Ma._numberToIntStr(r[1])})`;break;case"ivec3":o=`ivec3(${Ma._numberToIntStr(r[0])},                             ${Ma._numberToIntStr(r[1])},                             ${Ma._numberToIntStr(r[2])})`;break;case"ivec4":o=`ivec4(${Ma._numberToIntStr(r[0])},                             ${Ma._numberToIntStr(r[1])},                             ${Ma._numberToIntStr(r[2])},                             ${Ma._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":o=`${t}(${Array.prototype.map.call(r,(e=>Ma._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${o};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const Oa="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Ra="precision highp float;\nprecision highp sampler2D;",Ia=4;function La(){const e=new Ta,t=e.fragment;e.include(fa);const r=(Ia+1)/2,o=1/(2*r*r);return t.include(va),t.uniforms.add(new lo("depthMap",(e=>e.depthTexture)),new so("tex",(e=>e.colorTexture)),new ga("blurSize",(e=>e.blurSize)),new bi("projScale",((e,t)=>{const r=ae(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new ai("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(Bt`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${Bt.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(Bt`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${Bt.int(Ia)}; r <= ${Bt.int(Ia)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const Na=Object.freeze(Object.defineProperty({__proto__:null,build:La},Symbol.toStringTag,{value:"Module"}));let Pa=class e extends ei{initializeProgram(t){return new ti(t.rctx,e.shader.get().build(),po)}initializePipeline(){return zt({colorWrite:Vt})}};Pa.shader=new Qo(Na,(()=>s((()=>t.import("./SSAOBlur.glsl-legacy.js")),void 0,t.meta.url)));let Da=class extends Gt{constructor(){super(...arguments),this.projScale=1}},Fa=class extends Da{constructor(){super(...arguments),this.intensity=1}},Ba=class extends Gt{},Ga=class extends Ba{constructor(){super(...arguments),this.blurSize=ne()}};function za(e){e.fragment.uniforms.add(new Vi("projInfo",((e,t)=>function(e){const t=e.projectionMatrix;return 0===t[11]?K(Va,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):K(Va,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}(t.camera)))),e.fragment.uniforms.add(new ai("zScale",((e,t)=>function(e){return 0===e.projectionMatrix[11]?se(Ha,0,1):se(Ha,1,0)}(t.camera)))),e.fragment.code.add(Bt`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}const Va=Q(),Ha=ne(),Ua=16;function ja(){const e=new Ta,t=e.fragment;return e.include(fa),e.include(za),t.include(va),t.uniforms.add(new bi("radius",((e,t)=>Wa(t.camera)))),t.code.add(Bt`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(Bt`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new ai("nearFar",((e,t)=>t.camera.nearFar)),new lo("normalMap",(e=>e.normalTexture)),new lo("depthMap",(e=>e.depthTexture)),new bi("projScale",(e=>e.projScale)),new lo("rnm",(e=>e.noiseTexture)),new ai("rnmScale",((e,t)=>se(ka,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new bi("intensity",(e=>e.intensity)),new ai("screenSize",((e,t)=>se(ka,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(Bt`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${Bt.int(Ua)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${Bt.int(Ua)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function Wa(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const ka=ne(),$a=Object.freeze(Object.defineProperty({__proto__:null,build:ja,getRadius:Wa},Symbol.toStringTag,{value:"Module"}));let qa=class e extends ei{initializeProgram(t){return new ti(t.rctx,e.shader.get().build(),po)}initializePipeline(){return zt({colorWrite:Vt})}};var Ya;qa.shader=new Qo($a,(()=>s((()=>t.import("./SSAO.glsl-legacy.js")),void 0,t.meta.url))),function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(Ya||(Ya={}));const Xa=2;let Ja=class extends ma{constructor(e){super(e),this._context=null,this._passParameters=new Fa,this._drawParameters=new Ga,this.produces=new Map([[Po.SSAO,()=>this._produces()]])}_getCameraElevation(){return this._context?.renderContext.bindParameters.camera.relativeElevation??1/0}_produces(){return null!=this._enableTime&&null!=this._context&&this._getCameraElevation()<ca}consumes(){return this._produces()?ua:da}initializeRenderContext(e){this._context=e,this.addHandles([le((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(Ya.SSAO)),(e=>e?this._enable():this._disable()),ce)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=T(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),(e=>e.charCodeAt(0))),t=new Pt;t.wrapMode=Ct.CLAMP_TO_EDGE,t.pixelFormat=St.RGB,t.wrapMode=Ct.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Lt(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(qa)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(Pa)),this._enableTime=de(0),this._context?.requestRender()}renderNode(e,t,r){const o=e.bindParameters,i=r?.get("normals"),a=i?.getTexture(),n=i?.getTexture(Rt);if(null==this._enableTime||null==this._context||!a||!n)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const s=e.rctx,l=o.camera,c=this.view.qualitySettings.fadeDuration,d=l.relativeElevation,u=z((ca-d)/2e5,0,1),h=c>0?Math.min(c,e.time-this._enableTime)/c:1,m=h*u;this._passParameters.normalTexture=a,this._passParameters.depthTexture=n,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Za/Wa(l)**6*m;const f=l.fullViewport[2],p=l.fullViewport[3],v=Math.round(f/Xa),g=Math.round(p/Xa),x=this._context.fbos,_=x.acquire(f,p,"ssao input",sa.RG);s.unbindTexture(_.fbo.colorTexture),s.bindFramebuffer(_.fbo),s.setViewport(0,0,f,p),s.bindTechnique(this._ssaoTechnique,o,this._passParameters,this._drawParameters),s.screen.draw();const T=x.acquire(v,g,"ssao blur",sa.RED);s.unbindTexture(T.fbo.colorTexture),s.bindFramebuffer(T.fbo),this._drawParameters.colorTexture=_.getTexture(),se(this._drawParameters.blurSize,0,Xa/p),s.bindTechnique(this._blurTechnique,o,this._passParameters,this._drawParameters),s.setViewport(0,0,v,g),s.screen.draw(),_.release();const b=x.acquire(v,g,"ssao",sa.RED);return s.unbindTexture(b.fbo.colorTexture),s.bindFramebuffer(b.fbo),s.setViewport(0,0,f,p),s.setClearColor(1,1,1,0),s.clear(It.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=T.getTexture(),se(this._drawParameters.blurSize,Xa/f,0),s.bindTechnique(this._blurTechnique,o,this._passParameters,this._drawParameters),s.setViewport(0,0,v,g),s.screen.draw(),s.setViewport4fv(l.fullViewport),T.release(),h<1&&this._context.requestRender(),b}};J([te({constructOnly:!0})],Ja.prototype,"view",void 0),J([te()],Ja.prototype,"_context",void 0),Ja=J([re("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Ja);const Za=.5;function Ka(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add(new lo("ssaoTex",((e,t)=>t.ssao?.getTexture()))),r.constants.add("blurSizePixelsInverse","float",1/Xa),r.code.add(Bt`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):r.code.add(Bt`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Qa(e,t){const r=e.fragment,o=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===o?(r.uniforms.add(new no("lightingAmbientSH0",((e,t)=>S(en,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(Bt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===o?(r.uniforms.add(new Vi("lightingAmbientSH_R",((e,t)=>K(tn,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new Vi("lightingAmbientSH_G",((e,t)=>K(tn,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new Vi("lightingAmbientSH_B",((e,t)=>K(tn,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),r.code.add(Bt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===o&&(r.uniforms.add(new no("lightingAmbientSH0",((e,t)=>S(en,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new Vi("lightingAmbientSH_R1",((e,t)=>K(tn,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new Vi("lightingAmbientSH_G1",((e,t)=>K(tn,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new Vi("lightingAmbientSH_B1",((e,t)=>K(tn,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new Vi("lightingAmbientSH_R2",((e,t)=>K(tn,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new Vi("lightingAmbientSH_G2",((e,t)=>K(tn,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new Vi("lightingAmbientSH_B2",((e,t)=>K(tn,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),r.code.add(Bt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==mo.Normal&&t.pbrMode!==mo.Schematic||r.code.add(Bt`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const en=M(),tn=Q();function rn(e){e.uniforms.add(new no("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function on(e){e.uniforms.add(new no("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function an(e){rn(e.fragment),on(e.fragment),e.fragment.code.add(Bt`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function nn(e){const t=e.fragment.code;t.add(Bt`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(Bt`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(Bt`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function sn(e){e.vertex.code.add(Bt`const float PI = 3.141592653589793;`),e.fragment.code.add(Bt`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function ln(e,t){const r=e.fragment.code;e.include(sn),t.pbrMode!==mo.Normal&&t.pbrMode!==mo.Schematic&&t.pbrMode!==mo.Simplified&&t.pbrMode!==mo.TerrainWithWater||(r.add(Bt`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(Bt`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==mo.Normal&&t.pbrMode!==mo.Schematic||(e.include(nn),r.add(Bt`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(Bt`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(Bt`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(Bt`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}let cn=class extends io{constructor(e,t){super(e,"bool",Xt.Pass,((r,o,i)=>r.setUniform1b(e,t(o,i))))}};const dn=.4;function un(e){e.constants.add("ambientBoostFactor","float",dn)}function hn(e){e.uniforms.add(new bi("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function mn(e,t){const r=e.fragment;switch(e.include(Ka,t),t.pbrMode!==mo.Disabled&&e.include(ln,t),e.include(Qa,t),e.include(sn),r.code.add(Bt`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===mo.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),un(r),hn(r),rn(r),r.code.add(Bt`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?Bt`normalize(vPosWorld)`:Bt`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),on(r),r.code.add(Bt`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case mo.Disabled:case mo.WaterOnIntegratedMesh:case mo.Water:e.include(an),r.code.add(Bt`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case mo.Normal:case mo.Schematic:r.code.add(Bt`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(Bt`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new cn("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(Bt`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add(new bi("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new bi("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),r.code.add(Bt`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(Bt`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==mo.Schematic||t.hasColorTexture?Bt`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:Bt`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case mo.Simplified:case mo.TerrainWithWater:e.include(an),r.code.add(Bt`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:R(t.pbrMode);case mo.COUNT:}}function fn(e,t){if(!t.multipassEnabled)return;e.fragment.include(pa),e.fragment.uniforms.add(new lo("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.getTexture())),new ai("nearFar",((e,t)=>t.camera.nearFar)));const r=t.occlusionPass;e.fragment.code.add(Bt`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${r?Bt`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:Bt`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class pn extends io{constructor(e,t,r){super(e,"mat4",Xt.Draw,((r,o,i,a)=>r.setUniformMatrix4fv(e,t(o,i,a))),r)}}let vn=class extends io{constructor(e,t,r){super(e,"mat4",Xt.Pass,((r,o,i)=>r.setUniformMatrix4fv(e,t(o,i))),r)}};function gn(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new vn("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),_n(e))}function xn(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new pn("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),_n(e))}function _n(e){const t=e.fragment;t.include(Wi),t.uniforms.add(new lo("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new Pi("numCascades",((e,t)=>t.shadowMap.numCascades)),new Vi("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(Bt`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function Tn(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new qo("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??Re))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(Bt`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Bt`void forwardColorUV(){}`)}function bn(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==Jr.None?(e.vertex.uniforms.add(new qo("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??Re))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(Bt`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Bt`void forwardNormalUV(){}`)}function yn(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==Jr.None?(e.vertex.uniforms.add(new qo("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??Re))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(Bt`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Bt`void forwardEmissiveUV(){}`)}function En(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==Jr.None?(e.vertex.uniforms.add(new qo("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??Re))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(Bt`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Bt`void forwardOcclusionUV(){}`)}function Sn(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==Jr.None?(e.vertex.uniforms.add(new qo("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??Re))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(Bt`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Bt`void forwardMetallicRoughnessUV(){}`)}function An(e){e.code.add(Bt`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function Cn(e){e.include(An),e.code.add(Bt`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Bt.int(er.Multiply)}) {
        return allMixed;
      }
      if (mode == ${Bt.int(er.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Bt.int(er.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Bt.int(er.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Bt.int(er.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function wn(e){const t=new Ta,{vertex:r,fragment:o,varyings:i}=t;if(Si(r,e),t.include(Wo),i.add("vpos","vec3"),t.include(ra,e),t.include(Ii,e),t.include(Hi,e),t.include(Tn,e),e.output===qr.Color||e.output===qr.Alpha){t.include(bn,e),t.include(yn,e),t.include(En,e),t.include(Sn,e),Ei(r,e),t.include(Qr,e),t.include(Ti,e);const o=e.normalType===Yr.Attribute||e.normalType===Yr.Compressed;o&&e.offsetBackfaces&&t.include(di),t.include(na,e),t.include(Zo,e),e.instancedColor&&t.attributes.add(yt.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),t.include(to,e),t.include(ci,e),t.include(Di,e),t.include(Fi,e),r.uniforms.add(new Vi("externalColor",(e=>e.externalColor))),i.add("vcolorExt","vec4"),e.multipassEnabled&&i.add("depth","float"),r.code.add(Bt`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Bt.float(sr)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${o?Bt`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${o&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case qr.Alpha:t.include(ui,e),t.include(ia,e),t.include(fn,e),o.uniforms.add(new bi("opacity",(e=>e.opacity)),new bi("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&o.uniforms.add(new lo("tex",(e=>e.texture))),o.include(Cn),o.code.add(Bt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?Bt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Bt`colorUV`:Bt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Bt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?Bt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Bt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case qr.Color:t.include(ui,e),t.include(mn,e),t.include(Ka,e),t.include(ia,e),t.include(e.instancedDoublePrecision?gn:xn,e),t.include(fn,e),Ei(o,e),o.uniforms.add(r.uniforms.get("localOrigin"),new no("ambient",(e=>e.ambient)),new no("diffuse",(e=>e.diffuse)),new bi("opacity",(e=>e.opacity)),new bi("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&o.uniforms.add(new lo("tex",(e=>e.texture))),t.include(fo,e),t.include(ln,e),o.include(Cn),t.include(eo,e),un(o),hn(o),on(o),o.code.add(Bt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?Bt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Bt`colorUV`:Bt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Bt`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===Yr.ScreenDerivative?Bt`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:Bt`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===mo.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?Bt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Bt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?Bt`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?Bt`normalUV`:"vuv0"});`:Bt`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?Bt`normalize(posWorld);`:Bt`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?Bt`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===mo.Normal||e.pbrMode===mo.Schematic?Bt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?Bt`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Bt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Ht.Color?Bt`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(aa,e),t}const Mn=Object.freeze(Object.defineProperty({__proto__:null,build:wn},Symbol.toStringTag,{value:"Module"}));let On=class extends Ko{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ue(ir),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=vt.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=H(0,0,0),this.instancedDoublePrecision=!1,this.normalType=Yr.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=H(.2,.2,.2),this.diffuse=H(.8,.8,.8),this.externalColor=ee(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=M(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=gt.Less,this.textureAlphaMode=pt.Blend,this.textureAlphaCutoff=.1,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=No.Occlude,this.isDecoration=!1}},Rn=class e extends ei{initializeConfiguration(e,t){t.spherical=e.viewingMode===W.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?Jr.Default:Jr.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(t){return this._initializeProgram(t,e.shader)}_initializeProgram(e,t){return new ti(e.rctx,t.get().build(this.configuration),po)}_convertDepthTestFunction(e){return e===gt.Lequal?Mt.LEQUAL:Mt.LESS}_makePipeline(e,t){const r=this.configuration,o=e===Ht.NONE,i=e===Ht.FrontFace;return zt({blending:r.output!==qr.Color&&r.output!==qr.Alpha||!r.transparent?null:o?Ut:jt(e),culling:In(r)?Wt(r.cullFace):null,depthTest:{func:kt(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:(o||i)&&r.writeDepth?$t:null,colorWrite:Vt,stencilWrite:r.hasOccludees?ri:null,stencilTest:r.hasOccludees?t?ii:oi:null,polygonOffset:o||i?null:qt(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function In(e){return e.cullFace!==vt.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}Rn.shader=new Qo(Mn,(()=>s((()=>t.import("./DefaultMaterial.glsl-legacy.js")),void 0,t.meta.url)));let Ln=class extends Oi{};J([Mi({constValue:!0})],Ln.prototype,"hasSliceHighlight",void 0),J([Mi({constValue:!1})],Ln.prototype,"hasSliceInVertexProgram",void 0),J([Mi({constValue:Xt.Pass})],Ln.prototype,"pbrTextureBindType",void 0);class Nn extends Ln{constructor(){super(...arguments),this.output=qr.Color,this.alphaDiscardMode=pt.Opaque,this.doubleSidedMode=Xr.None,this.pbrMode=mo.Disabled,this.cullFace=vt.None,this.transparencyPassType=Ht.NONE,this.normalType=Yr.Attribute,this.textureCoordinateType=Jr.None,this.customDepthTest=gt.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}function Pn(e){const t=new Ta,{vertex:r,fragment:o,varyings:i}=t;return Si(r,e),t.include(Wo),i.add("vpos","vec3"),t.include(ra,e),t.include(Ii,e),t.include(Hi,e),e.output!==qr.Color&&e.output!==qr.Alpha||(Ei(t.vertex,e),t.include(Qr,e),t.include(Ti,e),e.offsetBackfaces&&t.include(di),e.instancedColor&&t.attributes.add(yt.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),e.multipassEnabled&&i.add("depth","float"),t.include(to,e),t.include(ci,e),t.include(Di,e),t.include(Fi,e),r.uniforms.add(new Vi("externalColor",(e=>e.externalColor))),i.add("vcolorExt","vec4"),r.code.add(Bt`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Bt.float(sr)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?Bt`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===qr.Alpha&&(t.include(ui,e),t.include(ia,e),t.include(fn,e),o.uniforms.add(new bi("opacity",(e=>e.opacity)),new bi("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&o.uniforms.add(new lo("tex",(e=>e.texture))),o.include(Cn),o.code.add(Bt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?Bt`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?Bt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Bt`colorUV`:Bt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Bt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?Bt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Bt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===qr.Color&&(t.include(ui,e),t.include(mn,e),t.include(Ka,e),t.include(ia,e),t.include(e.instancedDoublePrecision?gn:xn,e),t.include(fn,e),Ei(t.fragment,e),rn(o),un(o),hn(o),o.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new no("ambient",(e=>e.ambient)),new no("diffuse",(e=>e.diffuse)),new bi("opacity",(e=>e.opacity)),new bi("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&o.uniforms.add(new lo("tex",(e=>e.texture))),t.include(fo,e),t.include(ln,e),o.include(Cn),on(o),o.code.add(Bt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?Bt`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?Bt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Bt`colorUV`:Bt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Bt`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===mo.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?Bt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Bt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?Bt`albedo = mix(albedo, vec3(1), 0.9);`:Bt``}
        ${Bt`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===mo.Normal||e.pbrMode===mo.Schematic?e.spherical?Bt`vec3 normalGround = normalize(vpos + localOrigin);`:Bt`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Bt``}
        ${e.pbrMode===mo.Normal||e.pbrMode===mo.Schematic?Bt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?Bt`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Bt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Ht.Color?Bt`fragColor = premultiplyAlpha(fragColor);`:Bt``}
      }
    `)),t.include(aa,e),t}J([Mi({count:qr.COUNT})],Nn.prototype,"output",void 0),J([Mi({count:pt.COUNT})],Nn.prototype,"alphaDiscardMode",void 0),J([Mi({count:Xr.COUNT})],Nn.prototype,"doubleSidedMode",void 0),J([Mi({count:mo.COUNT})],Nn.prototype,"pbrMode",void 0),J([Mi({count:vt.COUNT})],Nn.prototype,"cullFace",void 0),J([Mi({count:Ht.COUNT})],Nn.prototype,"transparencyPassType",void 0),J([Mi({count:Yr.COUNT})],Nn.prototype,"normalType",void 0),J([Mi({count:Jr.COUNT})],Nn.prototype,"textureCoordinateType",void 0),J([Mi({count:gt.COUNT})],Nn.prototype,"customDepthTest",void 0),J([Mi()],Nn.prototype,"spherical",void 0),J([Mi()],Nn.prototype,"hasVertexColors",void 0),J([Mi()],Nn.prototype,"hasSymbolColors",void 0),J([Mi()],Nn.prototype,"hasVerticalOffset",void 0),J([Mi()],Nn.prototype,"hasSlicePlane",void 0),J([Mi()],Nn.prototype,"hasSliceHighlight",void 0),J([Mi()],Nn.prototype,"hasColorTexture",void 0),J([Mi()],Nn.prototype,"hasMetallicRoughnessTexture",void 0),J([Mi()],Nn.prototype,"hasEmissionTexture",void 0),J([Mi()],Nn.prototype,"hasOcclusionTexture",void 0),J([Mi()],Nn.prototype,"hasNormalTexture",void 0),J([Mi()],Nn.prototype,"hasScreenSizePerspective",void 0),J([Mi()],Nn.prototype,"hasVertexTangents",void 0),J([Mi()],Nn.prototype,"hasOccludees",void 0),J([Mi()],Nn.prototype,"multipassEnabled",void 0),J([Mi()],Nn.prototype,"hasModelTransformation",void 0),J([Mi()],Nn.prototype,"offsetBackfaces",void 0),J([Mi()],Nn.prototype,"vvSize",void 0),J([Mi()],Nn.prototype,"vvColor",void 0),J([Mi()],Nn.prototype,"receiveShadows",void 0),J([Mi()],Nn.prototype,"receiveAmbientOcclusion",void 0),J([Mi()],Nn.prototype,"textureAlphaPremultiplied",void 0),J([Mi()],Nn.prototype,"instanced",void 0),J([Mi()],Nn.prototype,"instancedColor",void 0),J([Mi()],Nn.prototype,"objectAndLayerIdColorInstanced",void 0),J([Mi()],Nn.prototype,"instancedDoublePrecision",void 0),J([Mi()],Nn.prototype,"doublePrecisionRequiresObfuscation",void 0),J([Mi()],Nn.prototype,"writeDepth",void 0),J([Mi()],Nn.prototype,"transparent",void 0),J([Mi()],Nn.prototype,"enableOffset",void 0),J([Mi()],Nn.prototype,"cullAboveGround",void 0),J([Mi()],Nn.prototype,"snowCover",void 0),J([Mi()],Nn.prototype,"hasColorTextureTransform",void 0),J([Mi()],Nn.prototype,"hasEmissionTextureTransform",void 0),J([Mi()],Nn.prototype,"hasNormalTextureTransform",void 0),J([Mi()],Nn.prototype,"hasOcclusionTextureTransform",void 0),J([Mi()],Nn.prototype,"hasMetallicRoughnessTextureTransform",void 0),J([Mi({constValue:!1})],Nn.prototype,"occlusionPass",void 0),J([Mi({constValue:!0})],Nn.prototype,"hasVvInstancing",void 0),J([Mi({constValue:!1})],Nn.prototype,"useCustomDTRExponentForWater",void 0),J([Mi({constValue:!1})],Nn.prototype,"supportsTextureAtlas",void 0),J([Mi({constValue:!0})],Nn.prototype,"useFillLights",void 0);const Dn=Object.freeze(Object.defineProperty({__proto__:null,build:Pn},Symbol.toStringTag,{value:"Module"}));let Fn=class e extends Rn{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=Yr.Attribute,t.doubleSidedMode=Xr.WindingOrder,t.hasVertexTangents=!1}initializeProgram(t){return this._initializeProgram(t,e.shader)}};Fn.shader=new Qo(Dn,(()=>s((()=>t.import("./RealisticTree.glsl-legacy.js")),void 0,t.meta.url)));let Bn=class extends Lo{constructor(e){super(e,zn),this.supportsEdges=!0,this.produces=new Map([[Po.OPAQUE_MATERIAL,e=>(Kr(e)||Zr(e))&&!this.parameters.transparent],[Po.TRANSPARENT_MATERIAL,e=>(Kr(e)||Zr(e))&&this.parameters.transparent&&this.parameters.writeDepth],[Po.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(Kr(e)||Zr(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new Nn,this._vertexBufferLayout=function(e){const t=Ft().vec3f(yt.POSITION);return e.normalType===Yr.Compressed?t.vec2i16(yt.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(yt.NORMAL),e.hasVertexTangents&&t.vec4f(yt.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(yt.UV0),e.hasVertexColors&&t.vec4u8(yt.COLOR),e.hasSymbolColors&&t.vec4u8(yt.SYMBOLCOLOR),pe("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(yt.OBJECTANDLAYERIDCOLOR),t}(this.parameters)}isVisibleForOutput(e){return e!==qr.Shadow&&e!==qr.ShadowExcludeHighlight&&e!==qr.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:r,hasSymbolColors:o,vvColor:i}=e,a="replace"===e.colorMixMode,n=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||i||o;return r&&l?a||n:r?a?s:n:l?a||n:a?s:n}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?vt.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==qr.Color&&e!==qr.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=Xr.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?Xr.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?Xr.WindingOrder:Xr.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?mo.Schematic:mo.Normal:mo.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Yt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,o,i,a){if(null!=this.parameters.verticalOffset){const e=r.camera;S(kn,t[12],t[13],t[14]);let a=null;switch(r.viewingMode){case W.Global:a=G(jn,kn);break;case W.Local:a=he(jn,Un)}let n=0;const s=Y($n,kn,e.eye),l=U(s),c=C(s,s,1/l);let d=null;this.parameters.screenSizePerspective&&(d=me(a,c)),n+=function(e,t,r,o,i){let a=(r.screenLength||0)*e.pixelRatio;null!=i&&(a=go(a,o,t,i));const n=a*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return z(n*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}(e,l,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective),C(a,a,n),fe(Wn,a,r.transform.inverseRotation),o=Y(Vn,o,Wn),i=Y(Hn,i,Wn)}To(e,r,o,i,function(e){return null!=e?(Do.offset=e,Do):null}(r.verticalOffset),a)}createGLMaterial(e){return new Gn(e)}createBufferWriter(){return new jo(this._vertexBufferLayout)}},Gn=class extends uo{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==qr.Color&&this._output!==qr.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return S(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Fn:Rn,e)}};const zn=new class extends On{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}},Vn=M(),Hn=M(),Un=H(0,0,1),jn=M(),Wn=M(),kn=M(),$n=M();function qn(e){if(null==e)return null;const t=null!=e.offset?e.offset:ve,r=null!=e.rotation?e.rotation:0,o=null!=e.scale?e.scale:ge,i=Ie(1,0,0,0,1,0,t[0],t[1],1),a=Ie(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),n=Ie(o[0],0,0,0,o[1],0,0,0,1),s=Oe();return xe(s,a,n),xe(s,i,s),s}class Yn{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class Xn{constructor(e,t,r){this.name=e,this.lodThreshold=t,this.pivotOffset=r,this.stageResources=new Yn,this.numberOfVertices=0}}const Jn=()=>d.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Zn(e,t){const r=await async function(e,t){const r=t?.streamDataRequester;if(r)return async function(e,t,r){const o=await Te(t.request(e,"json",r));if(!0===o.ok)return o.value;ye(o.error),Kn(o.error.details.url)}(e,r,t);const o=await Te(be(e,t));if(!0===o.ok)return o.value.data;ye(o.error),Kn(o.error)}(e,t),o=await async function(e,t){const r=new Array;for(const a in e){const o=e[a],i=o.images[0].data;if(!i){Jn().warn("Externally referenced texture data is not yet supported");continue}const n=o.encoding+";base64,"+i,s="/textureDefinitions/"+a,l="rgba"===o.channels?o.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:Ct.REPEAT,t:Ct.REPEAT},preMultiplyAlpha:ts(l)!==pt.Opaque},d=null!=t&&t.disableTextures?Promise.resolve(null):nt(n,t);r.push(d.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const o=await Promise.all(r),i={};for(const a of o)i[a.refId]=a;return i}(r.textureDefinitions??{},t);let i=0;for(const a in o)if(o.hasOwnProperty(a)){const e=o[a];i+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:o,size:i+_e(r)}}function Kn(e){throw new i("",`Request for object resource failed: ${e}`)}function Qn(e){const t=e.params,r=t.topology;let o=!0;switch(t.vertexAttributes||(Jn().warn("Geometry must specify vertex attributes"),o=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Jn().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),o=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Jn().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),o=!1)):(Jn().warn(`Indexed geometry does not specify face indices for '${r}' attribute`),o=!1)}}else Jn().warn("Indexed geometries must specify faces"),o=!1;break}default:Jn().warn(`Unsupported topology '${r}'`),o=!1}e.params.material||(Jn().warn("Geometry requires material"),o=!1);const i=e.params.vertexAttributes;for(const a in i)i[a].values||(Jn().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function es(e){const t=Se();return e.forEach((e=>{const r=e.boundingInfo;null!=r&&(Ae(t,r.bbMin),Ae(t,r.bbMax))})),t}function ts(e){switch(e){case"mask":return pt.Mask;case"maskAndTransparency":return pt.MaskBlend;case"none":return pt.Opaque;default:return pt.Blend}}function rs(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const os=new Ee(1,2,"wosr");function is(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function as(e,t,r,o){const i=e.model,s=new Array,l=new Map,c=new Map,d=i.lods.length,u=Se();return i.lods.forEach(((e,h)=>{const m=!0===o.skipHighLods&&(d>1&&0===h||d>3&&1===h)||!1===o.skipHighLods&&null!=o.singleLodIndex&&h!==o.singleLodIndex;if(m&&0!==h)return;const f=new Xn(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const o=m?new Bn({}):function(e,t,r,o,i,s,l){const c=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),d=e.materials.get(t.material),u=null!=t.attributes.texCoord0,h=null!=t.attributes.normal;if(null==d)return null;const m=function(e){switch(e){case"BLEND":return pt.Blend;case"MASK":return pt.Mask;case"OPAQUE":case null:case void 0:return pt.Opaque}}(d.alphaMode);if(!s.has(c)){if(u){const t=(t,r=!1)=>{if(null!=t&&!l.has(t)){const o=e.textures.get(t);if(null!=o){const e=o.data;l.set(t,new Fr(rt(e)?e.data:e,{...o.parameters,preMultiplyAlpha:!rt(e)&&r,encoding:rt(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(d.textureColor,m!==pt.Opaque),t(d.textureNormal),t(d.textureOcclusion),t(d.textureEmissive),t(d.textureMetallicRoughness)}const r=d.color[0]**(1/Xe),f=d.color[1]**(1/Xe),p=d.color[2]**(1/Xe),v=d.emissiveFactor[0]**(1/Xe),g=d.emissiveFactor[1]**(1/Xe),x=d.emissiveFactor[2]**(1/Xe),_=null!=d.textureColor&&u?l.get(d.textureColor):null,T=function({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:r,roughnessFactor:o,emissiveTexture:i,emissiveFactor:s,occlusionTexture:l}){return null==e&&null==t&&null==i&&(null==s||a(s,n))&&null==l&&(null==o||1===o)&&(null==r||1===r)}({normalTexture:d.textureNormal,metallicRoughnessTexture:d.textureMetallicRoughness,metallicFactor:d.metallicFactor,roughnessFactor:d.roughnessFactor,emissiveTexture:d.textureEmissive,emissiveFactor:d.emissiveFactor,occlusionTexture:d.textureOcclusion}),b=null!=d.normalTextureTransform?.scale?d.normalTextureTransform?.scale:ie;s.set(c,new Bn({...o,transparent:m===pt.Blend,customDepthTest:gt.Lequal,textureAlphaMode:m,textureAlphaCutoff:d.alphaCutoff,diffuse:[r,f,p],ambient:[r,f,p],opacity:d.opacity,doubleSided:d.doubleSided,doubleSidedType:"winding-order",cullFace:d.doubleSided?vt.None:vt.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:h?Yr.Attribute:Yr.ScreenDerivative,castShadows:!0,receiveShadows:d.receiveShadows,receiveAmbientOcclusion:d.receiveAmbientOcclustion,textureId:null!=_?_.id:void 0,colorMixMode:d.colorMixMode,normalTextureId:null!=d.textureNormal&&u?l.get(d.textureNormal).id:void 0,textureAlphaPremultiplied:null!=_&&!!_.parameters.preMultiplyAlpha,occlusionTextureId:null!=d.textureOcclusion&&u?l.get(d.textureOcclusion).id:void 0,emissiveTextureId:null!=d.textureEmissive&&u?l.get(d.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=d.textureMetallicRoughness&&u?l.get(d.textureMetallicRoughness).id:void 0,emissiveFactor:[v,g,x],mrrFactors:T?[...ar]:[d.metallicFactor,d.roughnessFactor,o.mrrFactors[2]],isSchematic:T,colorTextureTransformMatrix:qn(d.colorTextureTransform),normalTextureTransformMatrix:qn(d.normalTextureTransform),scale:[b[0],b[1]],occlusionTextureTransformMatrix:qn(d.occlusionTextureTransform),emissiveTextureTransformMatrix:qn(d.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:qn(d.metallicRoughnessTextureTransform),...i}))}const f=s.get(c);if(r.stageResources.materials.push(f),u){const e=e=>{null!=e&&r.stageResources.textures.push(l.get(e))};e(d.textureColor),e(d.textureNormal),e(d.textureOcclusion),e(d.textureEmissive),e(d.textureMetallicRoughness)}return f}(i,e,f,t,r,l,c),{geometry:s,vertexCount:d}=function(e,t){const r=e.attributes.position.count,o=Je(e.indices||r,e.primitiveType),i=tr(3*r),{typedBuffer:a,typedBufferStride:n}=e.attributes.position;We(i,a,e.transform,3,n);const s=[[yt.POSITION,new ct(i,o,3,!0)]];if(null!=e.attributes.normal){const t=tr(3*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.normal;Z(ns,e.transform),ke(t,i,ns,3,a),s.push([yt.NORMAL,new ct(t,o,3,!0)])}if(null!=e.attributes.tangent){const t=tr(4*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.tangent;Z(ns,e.transform),Ze(t,i,ns,4,a),s.push([yt.TANGENT,new ct(t,o,4,!0)])}if(null!=e.attributes.texCoord0){const t=tr(2*r),{typedBuffer:i,typedBufferStride:a}=e.attributes.texCoord0;Ke(t,i,2,a),s.push([yt.UV0,new ct(t,o,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*r);4===e.attributes.color.elementCount?e.attributes.color instanceof Fe?Qe(t,e.attributes.color,255):e.attributes.color instanceof De?et(t,e.attributes.color):e.attributes.color instanceof He&&Qe(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof Ve?$e(t,e.attributes.color,255,4):e.attributes.color instanceof Ue?tt(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof je&&$e(t,e.attributes.color,1/256,4)),s.push([yt.COLOR,new ct(t,o,4,!0)])}return{geometry:new $r(t,s),vertexCount:r}}(e,null!=o?o:new Bn({})),p=s.boundingInfo;null!=p&&0===h&&(Ae(u,p.bbMin),Ae(u,p.bbMax)),null!=o&&(f.stageResources.geometries.push(s),f.numberOfVertices+=d)})),m||s.push(f)})),{engineResources:s,referenceBoundingBox:u}}const ns=Oe(),ss=Object.freeze(Object.defineProperty({__proto__:null,fetch:async function(e,t){const o=is(r(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):Zn(o.url,t)),{engineResources:r,referenceBoundingBox:i}=function(e,t){const r=new Array,o=new Array,i=new Array,a=new ot,n=e.resource,s=Ee.parse(n.version||"1.0","wosr");os.validate(s);const l=n.model.name,c=n.model.geometries,d=n.materialDefinitions??{},u=e.textures;let h=0;const m=new Map;for(let f=0;f<c.length;f++){const e=c[f];if(!Qn(e))continue;const n=rs(e),s=e.params.vertexAttributes,l=[],p=t=>{if("PerAttributeArray"===e.params.topology)return null;const r=e.params.faces;for(const e in r)if(e===t)return r[e].values;return null},v=s[yt.POSITION],g=v.values.length/v.valuesPerElement;for(const t in s){const e=s[t],r=e.values,o=p(t)??at(g);l.push([t,new ct(r,o,e.valuesPerElement,!0)])}const x=n.texture,_=u&&u[x];if(_&&!m.has(x)){const{image:e,parameters:t}=_,r=new Fr(e,t);o.push(r),m.set(x,r)}const T=m.get(x),b=T?T.id:void 0,y=n.material;let E=a.get(y,x);if(null==E){const e=d[y.substring(y.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=_&&_.alphaChannelUsage,o=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,i=_?ts(_.alphaChannelUsage):void 0,n={ambient:ue(e.diffuse),diffuse:ue(e.diffuse),opacity:1-(e.transparency||0),transparent:o,textureAlphaMode:i,textureAlphaCutoff:.33,textureId:b,initTextureTransparent:!0,doubleSided:!0,cullFace:vt.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:_?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(n,t.materialParameters),E=new Bn(n),a.set(y,x,E)}i.push(E);const S=new $r(E,l);h+=l.find((e=>e[0]===yt.POSITION))?.[1]?.indices.length??0,r.push(S)}return{engineResources:[{name:l,stageResources:{textures:o,materials:i,geometries:r},pivotOffset:n.model.pivotOffset,numberOfVertices:h,lodThreshold:null}],referenceBoundingBox:es(r)}}(e,t);return{lods:r,referenceBoundingBox:i,isEsriSymbolResource:!1,isWosr:!0}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):qe(new Ye(t.streamDataRequester),o.url,t,t.usePBR)),a=i.model.meta?.ESRI_proxyEllipsoid,n=i.meta.isEsriSymbolResource&&null!=a&&"EsriRealisticTreesStyle"===i.meta.ESRI_webstyle;n&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,function(e,t){for(let r=0;r<e.model.lods.length;++r){const o=e.model.lods[r];for(const i of o.parts){const o=i.attributes.normal;if(null==o)return;const a=i.attributes.position,n=a.count,s=M(),l=M(),c=M(),d=new Uint8Array(4*n),u=new Float64Array(3*n),h=Ce(Pe(),i.transform);let m=0,f=0;for(let p=0;p<n;p++){a.getVec(p,l),o.getVec(p,s),O(l,l,i.transform),Y(c,l,t.center),we(c,c,t.radius);const n=c[2],v=U(c),g=Math.min(.45+.55*v*v,1);we(c,c,t.radius),null!==h&&O(c,c,h),G(c,c),r+1!==e.model.lods.length&&e.model.lods.length>1&&Me(c,c,s,n>-1?.2:Math.min(-4*n-3.8,1)),u[m]=c[0],u[m+1]=c[1],u[m+2]=c[2],m+=3,d[f]=255*g,d[f+1]=255*g,d[f+2]=255*g,d[f+3]=255,f+=4}i.attributes.normal=new Ve(u),i.attributes.color=new De(d)}}}(i,a));const s=!!t.usePBR,l=i.meta.isEsriSymbolResource?{usePBR:s,isSchematic:!1,treeRendering:n,mrrFactors:[...nr]}:{usePBR:s,isSchematic:!1,treeRendering:!1,mrrFactors:[...ir]},c={...t.materialParameters,treeRendering:n},{engineResources:d,referenceBoundingBox:u}=as(i,l,c,t.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:d,referenceBoundingBox:u,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}},gltfToEngineResources:as,parseUrl:is},Symbol.toStringTag,{value:"Module"}));e("o",ss)}}}));
