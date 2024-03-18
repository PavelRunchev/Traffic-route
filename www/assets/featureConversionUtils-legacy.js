System.register(["./index-legacy.js","./OptimizedGeometry-legacy.js","./OptimizedFeatureSet-legacy.js"],(function(e,t){"use strict";var n,o,r,s,u,l,c,i,f,a,d,h,g;return{setters:[e=>{n=e.a0,o=e.a1,r=e.a2,s=e.a3,u=e.s,l=e.w,c=e.a4,i=e.a5,f=e.a6,a=e.a7},e=>{d=e.e,h=e.t},e=>{g=e.e}],execute:function(){function t(e,t){return e?t?4:3:t?3:2}e({$:$,H:Y,I:function(e,n,o,r,s,u){if(ne(e),e.lengths.push(...n.lengths),o===s&&r===u)for(let t=0;t<n.coords.length;t++)e.coords.push(n.coords[t]);else{const l=t(o,r),c=M(o,r,s,u),i=n.coords;for(let t=0;t<i.length;t+=l)c(e.coords,i,e.coords.length,t,i[t],i[t+1])}return e},K:A,N:function(e,t){const{coords:n,lengths:o}=e;let r=0,s=0;for(let u=0;u<o.length;u++){const e=o[u];s+=te(n,r,e,t),r+=e}return Math.abs(s)},O:S,Q:C,U:U,a:J,b:G,c:function(e,t){const n=new g,{hasM:o,hasZ:r,features:s,objectIdFieldName:l,spatialReference:c,geometryType:i,exceededTransferLimit:f,transform:a,fields:d}=e;return d&&(n.fields=d),n.geometryType=i??null,n.objectIdFieldName=l??t??null,n.spatialReference=c??null,n.objectIdFieldName?(s&&Q(n.features,s,i,r,o,n.objectIdFieldName),f&&(n.exceededTransferLimit=f),o&&(n.hasM=o),r&&(n.hasZ=r),a&&(n.transform=a),n):(m().error(new u("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),n)},e:Q,f:function(e,t){const{geometryType:n,features:o,hasM:r,hasZ:s}=t;if(!e)return t;for(let u=0;u<o.length;u++){const t=o[u],l=t.weakClone();l.geometry=new d,J(l.geometry,t.geometry,r,s,n,e),t.centroid&&(l.centroid=new d,J(l.centroid,t.centroid,r,s,"esriGeometryPoint",e)),o[u]=l}return t.transform=e,t},g:function(e,n,o,r){if(!n?.coords?.length)return null;const s=t(o,r);let u=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY,d=Number.NEGATIVE_INFINITY;if(n&&n.coords){const e=n.coords;for(let t=0;t<e.length;t+=s){const n=e[t],o=e[t+1];u=Math.min(u,n),a=Math.max(a,n),l=Math.min(l,o),d=Math.max(d,o)}}return c(e)?i(e,u,l,a,d):f(u,l,a,d,e),e},h:function(e,n,o,r,s,u,l=o,c=r){if(ne(e),!n?.coords.length)return null;const i=y[s],{coords:f,lengths:a}=n,d=t(o,r),h=t(o&&l,r&&c),g=M(o,r,l,c);if(!a.length)return g(e.coords,f,0,0,f[0],f[1]),ne(e,d,0),e;let m=0;const p=u*u;for(const t of a){if(t<i){m+=t*d;continue}const n=e.coords.length/h,o=m,r=m+(t-1)*d;g(e.coords,f,e.coords.length,o,f[o],f[o+1]),X(e.coords,f,d,p,g,o,r),g(e.coords,f,e.coords.length,r,f[r],f[r+1]);const s=e.coords.length/h-n;s>=i?e.lengths.push(s):oe(e.coords,n*h),m+=t*d}return e.coords.length?e:null},i:function(e){const{transform:t,features:n,hasM:o,hasZ:r}=e;if(!t)return e;for(const s of n)null!=s.geometry&&ee(s.geometry,s.geometry,o,r,t),null!=s.centroid&&ee(s.centroid,s.centroid,o,r,t);return e.transform=null,e},l:function(e){const{objectIdFieldName:t,spatialReference:n,transform:o,fields:r,hasM:s,hasZ:u,features:l,geometryType:c,exceededTransferLimit:i,uniqueIdField:f,queryGeometry:a,queryGeometryType:d}=e,h={features:D([],l,c,u,s),fields:r,geometryType:c,objectIdFieldName:t,spatialReference:n,uniqueIdField:f,queryGeometry:B(a,d,!1,!1)};return o&&(h.transform=o),i&&(h.exceededTransferLimit=i),s&&(h.hasM=s),u&&(h.hasZ=u),h},n:function(e,t,n,o){K[0]=e,D(H,K,t,n,o);const r=H[0];return oe(H),oe(K),r},o:function(e,l,c){if(null==e)return null;const i=new d;return"hasZ"in e&&null==l&&(l=e.hasZ),"hasM"in e&&null==c&&(c=e.hasM),n(e)?E(null!=l?l:null!=e.z,null!=c?c:null!=e.m)(i,e):o(e)?A(i,e,l,c):r(e)?V(i,e,t(l,c)):s(e)?O(i,e,t(l,c)):void m().error("convertFromGeometry:unknown-geometry",new u(`Unable to parse unknown geometry type '${e}'`))},p:ee,r:B,t:function(e,t,n,o,r){H[0]=e;const[s]=Q(K,H,t,n,o,r);return oe(H),oe(K),s},w:N,x:function(e,t,n){return e?t?n?k(e):x(e):n?v(e):F(e):null}});const m=()=>l.getLogger("esri.layers.graphics.featureConversionUtils"),y={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},p=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s},w=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2]},b=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+3]},I=(e,t,n,o,r,s)=>{e[n]=r,e[n+1]=s,e[n+2]=t[o+2],e[n+3]=t[o+3]};function M(e,t,n,o){if(e){if(n)return t&&o?I:w;if(t&&o)return b}else if(t&&o)return w;return p}function G({scale:e,translate:t},n){return Math.round((n-t[0])/e[0])}function N({scale:e,translate:t},n){return Math.round((t[1]-n)/e[1])}function T({scale:e,translate:t},n,o){return n*e[o]+t[o]}function F(e){const t=e.coords;return{x:t[0],y:t[1]}}function P(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e}function x(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2]}}function Z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e}function v(e){const t=e.coords;return{x:t[0],y:t[1],m:t[2]}}function j(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.m,e}function k(e){const t=e.coords;return{x:t[0],y:t[1],z:t[2],m:t[3]}}function z(e,t){return e.coords[0]=t.x,e.coords[1]=t.y,e.coords[2]=t.z,e.coords[3]=t.m,e}function E(e,t){return e&&t?z:e?Z:t?j:P}function L(e,t,n,o,r){const s=E(n,o);for(const{geometry:u,attributes:l}of t){const t=null!=u?s(new d,u):null;e.push(new h(t,l,null,r?l[r]:void 0))}return e}function S(e,t,n=E(null!=t.z,null!=t.m)){return n(e,t)}function U(e,n,o){if(null==e)return null;const r=t(n,o),s=[];for(let t=0;t<e.coords.length;t+=r){const n=[];for(let o=0;o<r;o++)n.push(e.coords[t+o]);s.push(n)}return n?o?{points:s,hasZ:n,hasM:o}:{points:s,hasZ:n}:o?{points:s,hasM:o}:{points:s}}function q(e,n,o,r,s){const u=t(o,r);for(const{geometry:t,attributes:l}of n){const n=null!=t?O(new d,t,u):null;e.push(new h(n,l,null,s?l[s]:void 0))}return e}function O(e,n,o=t(n.hasZ,n.hasM)){e.lengths[0]=n.points.length;const r=e.coords;let s=0;for(const t of n.points)for(let e=0;e<o;e++)r[s++]=t[e];return e}function $(e,n,o){if(!e)return null;const r=t(n,o),{coords:s,lengths:u}=e,l=[];let c=0;for(const t of u){const e=[];for(let n=0;n<t;n++){const t=[];for(let e=0;e<r;e++)t.push(s[c++]);e.push(t)}l.push(e)}return n?o?{paths:l,hasZ:n,hasM:o}:{paths:l,hasZ:n}:o?{paths:l,hasM:o}:{paths:l}}function R(e,n,o,r,s){const u=t(o,r);for(const{geometry:t,attributes:l,centroid:c}of n){const n=null!=t?V(new d,t,u):null,o=null!=c?S(new d,c):null;e.push(new h(n,l,o,s?l[s]:void 0))}return e}function V(e,n,o=t(n.hasZ,n.hasM)){const{lengths:r,coords:s}=e;let u=0;for(const t of n.paths){for(const e of t)for(let t=0;t<o;t++)s[u++]=e[t];r.push(t.length)}return e}function Y(e,n,o){if(!e)return null;const r=t(n,o),{coords:s,lengths:u}=e,l=[];let c=0;for(const t of u){const e=[];for(let n=0;n<t;n++){const t=[];for(let e=0;e<r;e++)t.push(s[c++]);e.push(t)}l.push(e)}return n?o?{rings:l,hasZ:n,hasM:o}:{rings:l,hasZ:n}:o?{rings:l,hasM:o}:{rings:l}}function _(e,t,n,o,r){for(const{geometry:s,centroid:u,attributes:l}of t){const t=null!=s?A(new d,s,n,o):null,c=r?l[r]:void 0;null!=u?e.push(new h(t,l,P(new d,u),c)):e.push(new h(t,l,null,c))}return e}function A(e,t,n=t.hasZ,o=t.hasM){return C(e,t.rings,n,o)}function C(e,n,o,r){const s=t(o,r),{lengths:u,coords:l}=e;let c=0;ne(e);for(const t of n){for(const e of t)for(let t=0;t<s;t++)l[c++]=e[t];u.push(t.length)}return e}const H=[],K=[];function Q(e,t,n,o,r,s){if(oe(e),!n){for(const n of t){const t=s?n.attributes[s]:void 0;e.push(new h(null,n.attributes,null,t))}return e}switch(n){case"esriGeometryPoint":return L(e,t,o,r,s);case"esriGeometryMultipoint":return q(e,t,o,r,s);case"esriGeometryPolyline":return R(e,t,o,r,s);case"esriGeometryPolygon":return _(e,t,o,r,s);default:m().error("convertToFeatureSet:unknown-geometry",new u(`Unable to parse unknown geometry type '${n}'`)),oe(e)}return e}function B(e,t,n,o){const r=e&&("coords"in e?e:e.geometry);if(null==r)return null;switch(t){case"esriGeometryPoint":{let e=F;return n&&o?e=k:n?e=x:o&&(e=v),e(r)}case"esriGeometryMultipoint":return U(r,n,o);case"esriGeometryPolyline":return $(r,n,o);case"esriGeometryPolygon":return Y(r,n,o);default:return m().error("convertToGeometry:unknown-geometry",new u(`Unable to parse unknown geometry type '${t}'`)),null}}function D(e,t,n,o,r){if(oe(e),null==n)return function(e,t){for(const n of t)e.push({attributes:n.attributes});return e}(e,t);switch(n){case"esriGeometryPoint":return function(e,t,n,o){let r=F;n&&o?r=k:n?r=x:o&&(r=v);for(const s of t){const{geometry:t,attributes:n}=s,o=null!=t?r(t):null;e.push({attributes:n,geometry:o})}return e}(e,t,o,r);case"esriGeometryMultipoint":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?U(r,n,o):null});return e}(e,t,o,r);case"esriGeometryPolyline":return function(e,t,n,o){for(const{geometry:r,attributes:s}of t)e.push({attributes:s,geometry:null!=r?$(r,n,o):null});return e}(e,t,o,r);case"esriGeometryPolygon":return function(e,t,n,o){for(const{geometry:r,attributes:s,centroid:u}of t){const t=null!=r?Y(r,n,o):null;if(null!=u){const n=F(u);e.push({attributes:s,centroid:n,geometry:t})}else e.push({attributes:s,geometry:t})}return e}(e,t,o,r);default:m().error("convertToFeatureSet:unknown-geometry",new u(`Unable to parse unknown geometry type '${n}'`))}return e}function J(e,n,o,r,s,u,l=o,c=r){if(ne(e),!n?.coords.length)return null;const i=y[s],{coords:f,lengths:a}=n,d=t(o,r),h=t(o&&l,r&&c),g=M(o,r,l,c);if(!a.length)return g(e.coords,f,0,0,G(u,f[0]),N(u,f[1])),ne(e,d,0),e;let m,p,w,b,I=0,T=0,F=T;for(const t of a){if(t<i)continue;let n=0;T=F,w=m=G(u,f[I]),b=p=N(u,f[I+1]),g(e.coords,f,T,I,w,b),n++,I+=d,T+=h;for(let o=1;o<t;o++,I+=d)w=G(u,f[I]),b=N(u,f[I+1]),w===m&&b===p||(g(e.coords,f,T,I,w-m,b-p),T+=h,n++,m=w,p=b);n>=i&&(e.lengths.push(n),F=T)}return oe(e.coords,F),e.coords.length?e:null}function W(e,t,n,o){const r=e[t],s=e[t+1],u=e[n],l=e[n+1],c=e[o],i=e[o+1];let f=u,a=l,d=c-f,h=i-a;if(0!==d||0!==h){const e=((r-f)*d+(s-a)*h)/(d*d+h*h);e>1?(f=c,a=i):e>0&&(f+=d*e,a+=h*e)}return d=r-f,h=s-a,d*d+h*h}function X(e,t,n,o,r,s,u){let l,c=o,i=0;for(let f=s+n;f<u;f+=n)l=W(t,f,s,u),l>c&&(i=f,c=l);c>o&&(i-s>n&&X(e,t,n,o,r,s,i),r(e,t,e.length,i,t[i],t[i+1]),u-i>n&&X(e,t,n,o,r,i,u))}function ee(e,n,o,r,s){const{coords:u,lengths:l}=n,c=t(o,r);if(!u.length)return e!==n&&ne(e),e;a(s);const{originPosition:i,scale:f,translate:d}=s,h=re;h.originPosition=i;const g=h.scale;g[0]=f[0]??1,g[1]=-(f[1]??1),g[2]=f[2]??1,g[3]=f[3]??1;const m=h.translate;if(m[0]=d[0]??0,m[1]=d[1]??0,m[2]=d[2]??0,m[3]=d[3]??0,!l.length){for(let t=0;t<c;++t)e.coords[t]=T(h,u[t],t);return e!==n&&ne(e,c,0),e}let y=0;for(let t=0;t<l.length;t++){const n=l[t];e.lengths[t]=n;for(let t=0;t<c;++t)e.coords[y+t]=T(h,u[y+t],t);let o=e.coords[y],r=e.coords[y+1];y+=c;for(let t=1;t<n;t++,y+=c){o+=u[y]*g[0],r+=u[y+1]*g[1],e.coords[y]=o,e.coords[y+1]=r;for(let t=2;t<c;++t)e.coords[y+t]=T(h,u[y+t],t)}}return e!==n&&ne(e,u.length,l.length),e}function te(e,t,n,o){let r=0,s=e[o*t],u=e[o*(t+1)];for(let l=1;l<n;l++){const n=s+e[o*(t+l)],c=u+e[o*(t+l)+1],i=(n-s)*(c+u);s=n,u=c,r+=i}return.5*r}function ne(e,t=0,n=0){oe(e.lengths,n),oe(e.coords,t)}function oe(e,t=0){e.length!==t&&(e.length=t)}const re={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]}}}}));