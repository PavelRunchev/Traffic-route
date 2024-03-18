System.register(["./index-legacy.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.w}],execute:function(){e({a:c,e:n,f:o,i:l,n:u,o:i,r:f,s:s,u:d});const t=e("b",(()=>r.getLogger("esri.views.3d.support.buffer.math")));function n(e,t,r){f(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function f(e,t,r,n=3,f=n){if(e.length/n!==Math.ceil(t.length/f))return e;const o=e.length/n,u=r[0],i=r[1],d=r[2],l=r[4],c=r[5],s=r[6],a=r[8],p=r[9],y=r[10],h=r[12],B=r[13],g=r[14];let m=0,S=0;for(let M=0;M<o;M++){const r=t[m],o=t[m+1],M=t[m+2];e[S]=u*r+l*o+a*M+h,e[S+1]=i*r+c*o+p*M+B,e[S+2]=d*r+s*o+y*M+g,m+=f,S+=n}return e}function o(e,t,r){u(e.typedBuffer,t.typedBuffer,r,e.typedBufferStride,t.typedBufferStride)}function u(e,r,n,f=3,o=f){if(e.length/f!==Math.ceil(r.length/o))return void t().error("source and destination buffers need to have the same number of elements");const u=e.length/f,i=n[0],d=n[1],l=n[2],c=n[3],s=n[4],a=n[5],p=n[6],y=n[7],h=n[8];let B=0,g=0;for(let t=0;t<u;t++){const t=r[B],n=r[B+1],u=r[B+2];e[g]=i*t+c*n+p*u,e[g+1]=d*t+s*n+y*u,e[g+2]=l*t+a*n+h*u,B+=o,g+=f}}function i(e,t,r){d(e.typedBuffer,t,r,e.typedBufferStride)}function d(e,t,r,n=3){const f=Math.min(e.length/n,t.count),o=t.typedBuffer,u=t.typedBufferStride;let i=0,d=0;for(let l=0;l<f;l++)e[d]=r*o[i],e[d+1]=r*o[i+1],e[d+2]=r*o[i+2],i+=u,d+=n}function l(e,t,r,n=3,f=n){const o=e.length/n;if(o!==Math.ceil(t.length/f))return e;let u=0,i=0;for(let d=0;d<o;d++)e[i]=t[u]+r[0],e[i+1]=t[u+1]+r[1],e[i+2]=t[u+2]+r[2],u+=f,i+=n;return e}function c(e,t){s(e.typedBuffer,t.typedBuffer,e.typedBufferStride,t.typedBufferStride)}function s(e,t,r=3,n=r){const f=Math.min(e.length/r,t.length/n);let o=0,u=0;for(let i=0;i<f;i++){const f=t[o],i=t[o+1],d=t[o+2],l=f*f+i*i+d*d;if(l>0){const t=1/Math.sqrt(l);e[u]=t*f,e[u+1]=t*i,e[u+2]=t*d}o+=n,u+=r}}Object.freeze(Object.defineProperty({__proto__:null,normalize:s,normalizeView:c,scale:d,scaleView:i,shiftRight:function(e,t,r){const n=Math.min(e.count,t.count),f=e.typedBuffer,o=e.typedBufferStride,u=t.typedBuffer,i=t.typedBufferStride;let d=0,l=0;for(let c=0;c<n;c++)f[l]=u[d]>>r,f[l+1]=u[d+1]>>r,f[l+2]=u[d+2]>>r,d+=i,l+=o},transformMat3:u,transformMat3View:o,transformMat4:f,transformMat4View:n,translate:l},Symbol.toStringTag,{value:"Module"}))}}}));