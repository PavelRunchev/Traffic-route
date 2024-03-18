System.register(["./index-legacy.js","./External-legacy.js","./uploadAssetErrors-legacy.js","./infoFor3D-legacy.js"],(function(e,s){"use strict";var t,o,r,n,a,i,c,l,u,p,m,d,f,h,g,w,y,P,T,b,A,j,F,M,E,S,v,N,x,I,_,D;return{setters:[e=>{t=e.ai,o=e.e7,r=e.n,n=e.hH,a=e.S,i=e.hI,c=e.bG,l=e.X,u=e.at,p=e.dZ,m=e.aF,d=e.eE,f=e.bx,h=e.ew,g=e.w},e=>{w=e.h,y=e.N,P=e.i,T=e.o,b=e.A},e=>{A=e.r,j=e.n,F=e.a,M=e.d,E=e.c,S=e.l,v=e.t,N=e.u,x=e.p},e=>{I=e.s,_=e.u,D=e.i}],execute:function(){e("uploadAssets",(async function(e,s,t){const o=e.length;if(!o)return t?.onProgress?.(1),[];const r=k(o,t?.onProgress,"uploadAssets");return Promise.all(e.map(((e,o)=>async function(e,{layer:s,ongoingUploads:t},o){const r=t.get(e);if(r)return r;if(!function(e){return!!e.infoFor3D&&!!e.url}(s))throw new A;if(function(e,s){const{parsedUrl:t}=s;return null!=t&&e.metadata.externalSources.some((e=>w(e,t)))}(e,s))return o?.onProgress?.(1),e;const n=Z(e,s,o);t.set(e,n);try{await n}finally{t.delete(e)}return e}(e,s,{...t,onProgress:r.makeOnProgress(o)}))))}));const s={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function k(e,s=(e=>{}),t){return new U(e,s,t)}let U=class{constructor(e,s=(e=>{}),t){if(this.onProgress=s,this.taskName=t,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof e){this._weights={};for(let s=0;s<e;s++){const t=s,o=1/e;this._weights[t]=o,this._progressMap.set(t,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,t]of this._progressMap.entries())e+=t*this._weights[s];if(1===e&&t("enable-feature:esri-3dofl-upload-timings")){const e=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${e} sec`);for(const[s,t]of this._timingsMap){const o=Math.round(t.end-t.start)/1e3,r=Math.round(o/e*100);console.log(this.taskName??"Task",{stepKey:s,stepTime:o,relativeTime:r})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),t("enable-feature:esri-3dofl-upload-timings")){const t=performance.now();this._startTime??=t;const r=o(this._timingsMap,e,(()=>({start:t,end:0})));1===s&&(r.end=t)}this.emitProgress()}simulate(e,s){return B((s=>this.setProgress(e,s)),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function B(e=(e=>{}),s=z){const t=performance.now();e(0);const o=setInterval((()=>{const o=performance.now()-t,r=1-Math.exp(-o/s);e(r)}),$);return r((()=>{clearInterval(o),e(1)}))}function O(e,s=R){return n(i(e*L/s))}function C(e,s=q){return n(i(e*L/s))}const R=10,q=10,L=8e-6,$=a(50),z=a(1e3),H=1e6,G=20*H,J=2e9,K=3;async function W({data:e,name:s,description:t},o,r){let n=null;try{const a=c(o,"uploads"),i=c(a,"info"),{data:m}=await l(i,{query:{f:"json"},responseType:"json"});u(r);const d=p(o),f=m.maxUploadFileSize*H,h=d?J:f,g=d?Math.min(G,f):G;if(e.size>h)throw new Error("Data too large");const w=c(a,"register"),{data:y}=await l(w,{query:{f:"json",itemName:X(s),description:t},responseType:"json",method:"post"});if(u(r),!y.success)throw new Error("Registration failed");const{itemID:P}=y.item;n=c(a,P);const T=c(n,"uploadPart"),b=Math.ceil(e.size/g),A=new Array;for(let s=0;s<b;++s)A.push(e.slice(s*g,Math.min((s+1)*g,e.size)));const j=A.slice().reverse(),F=new Array,M=k(b,r?.onProgress,"uploadItem"),E=async()=>{for(;0!==j.length;){const e=A.length-j.length,s=j.pop(),t=new FormData,o=M.simulate(e,O(s.size));try{t.append("f","json"),t.append("file",s),t.append("partId",`${e}`);const{data:o}=await l(T,{timeout:0,body:t,responseType:"json",method:"post"});if(u(r),!o.success)throw new Error("Part upload failed")}finally{o.remove()}}};for(let e=0;e<K&&0!==j.length;++e)F.push(E());await Promise.all(F);const S=c(n,"commit"),{data:v}=await l(S,{query:{f:"json",parts:A.map(((e,s)=>s)).join(",")},responseType:"json",method:"post"});if(u(r),!v.success)throw new Error("Commit failed");return v.item}catch(a){if(null!=n){const e=c(n,"delete");await l(e,{query:{f:"json"},responseType:"json",method:"post"})}throw a}}function X(e){return e.replaceAll("/","_").replaceAll("\\","_")}async function Z(e,s,t){const{metadata:o}=e,{displaySource:r}=o,n=ee(r?.source,s),a=!!n,i=o.externalSources.length>0,c=a?async function(e,s,t){return{source:await te(e,s,t),original:!0}}(n,s,t):i?Q(e,s,t):V(e,s,t),l=await c;return u(t),e.addExternalSources([l]),e}async function Q(e,t,o){const r=ue(t),{externalSources:n}=e.metadata,a=function(e,s){for(const t of e){const e=ee(t.source,s);if(e)return e}return null}(n,t);if(!a)throw new j;const i=k(s.uploadConvertibleSource,o?.onProgress,"uploadConvertibleSource"),c=await te(a,t,{onProgress:i.makeOnProgress("uploadEditSource")});e.addExternalSources([{source:c,original:!0}]);const l=a.reduce(((e,{asset:s})=>s instanceof File?e+s.size:e),0),u=i.simulate("serviceAssetsToGlb",C(l));try{return{source:await ie(c,t,r)}}finally{u.remove()}}async function V(e,t,o){const r=k(s.uploadLocalMesh,o?.onProgress,"uploadLocalMesh"),n=Y(e,t,{...o,onProgress:r.makeOnProgress("meshToAssetBlob")});return{source:await oe([n],t,{...o,onProgress:r.makeOnProgress("uploadAssetBlobs")}),extent:e.extent.clone(),original:!0}}async function Y(e,s,t){const o=ue(s),r=await e.load(t),n=await r.toBinaryGLTF({ignoreLocalTransform:!0});u(t);const a=await n.buffer();return u(t),{blob:new Blob([a.data],{type:a.type}),assetName:`${m()}.glb`,assetType:o}}function ee(e,s){if(!e)return null;const{infoFor3D:{supportedFormats:t,editFormats:o}}=s,r=b(e),n=new Array;let a=!1;for(let i=0;i<r.length;++i){const e=se(r[i],t);if(!e)return null;o.includes(e.assetType)&&(a=!0),n.push(e)}return a?n:null}function se(e,s){const t=y(e,s);return t?{asset:e,assetType:t}:null}async function te(e,s,t){return oe(e.map((e=>re(e,t))),s,t)}async function oe(e,t,o){const r=k(s.uploadAssetBlobs,o?.onProgress,"uploadAssetBlobs"),n=await function(e,s,t){const o=k(e.length,t?.onProgress,"prepareAssetItems");return Promise.all(e.map((async(e,r)=>{const n=async function(e,s,t){const{blob:o,assetType:r,assetName:n}=e;let a=null;try{const e=await W({data:o,name:n},s.url,t);u(t),a={assetType:r,assetUploadId:e.itemID}}catch(K){f(K),g.getLogger("esri.layers.graphics.sources.support.uploadAssets").warnOnce(`Service ${s.url} does not support the REST Uploads API.`)}if(!a){const e=await h(o);if(u(t),!e.isBase64)throw new N;a={assetType:r,assetData:e.data}}if(!a)throw new x;return{item:a,assetName:n}}(await e,s,{...t,onProgress:o.makeOnProgress(r)});return u(t),n})))}(e,t,{...o,onProgress:r.makeOnProgress("prepareAssetItems")});u(o);const a=n.map((({item:e})=>e)),{uploadResults:i}=await ne(a,t,{...o,onProgress:r.makeOnProgress("uploadAssetItems")});return u(o),e.map(((e,s)=>ae(n[s],i[s],t)))}async function re(e,s){const{asset:t,assetType:o}=e;if(t instanceof File)return{blob:t,assetName:t.name,assetType:o};const r=await t.toBlob(s);return u(s),{blob:r,assetName:t.assetName,assetType:o}}async function ne(e,s,t){const o=B(t?.onProgress);try{const o=await l(c(s.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(e)},method:"post",responseType:"json"});if(u(t),o.data.uploadResults.length!==e.length)throw new F(e.length,o.data.uploadResults.length);return o.data}finally{o.remove()}}function ae(e,s,t){const{success:o}=s;if(!o){const{error:t}=s;throw new M(e.assetName,t)}const{assetHash:r}=s,{assetName:n,item:{assetType:a}}=e,{infoFor3D:{supportedFormats:i}}=t,c=I(a,i);if(!c)throw new E(a);return new P(n,c,[new T(`${t.parsedUrl.path}/assets/${r}`,r)])}async function ie(e,s,t){const o=e.map((({assetName:e,parts:s})=>({assetName:e,assetHash:s[0].partHash}))),r=s.capabilities?.operations.supportsAsyncConvert3D,n={f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:t,async:r},a=c(s.parsedUrl.path,"convert3D");let i;try{i=(await(r?le:ce)(a,{query:n,responseType:"json",timeout:0})).data}catch(K){throw new S}const{supportedFormats:l}=s.infoFor3D;return i.assets.map((e=>{const s=_(e.contentType,l);if(!s)throw new E(s);return new P(e.assetName,e.contentType,[new T(e.assetURL,e.assetHash)])}))}function ce(e,s){return l(e,s)}async function le(e,s){const t=(await l(e,s)).data.statusUrl;for(;;){const e=(await l(t,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return l(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(e.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await d(pe)}}function ue(e){const{infoFor3D:s}=e,t=_("model/gltf-binary",s.supportedFormats)??D("glb",s.supportedFormats);if(!t)throw new v;return t}const pe=a(1e3)}}}));