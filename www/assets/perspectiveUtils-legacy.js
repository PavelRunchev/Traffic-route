System.register(["./index-legacy.js","./normalizeUtilsSync-legacy.js","./mat3f64-legacy.js"],(function(e,t){"use strict";var o,n,r,s,l,u,i,c,d,a,p,m,y,f,g,z,x;return{setters:[e=>{o=e.x,n=e.y,r=e.z,s=e.bm,l=e.eS,u=e.dS,i=e.aN,c=e.eT,d=e.eU,a=e.eV,p=e.eW,m=e.eO,y=e.eX,f=e.eY,g=e.ct},e=>{z=e.p},e=>{x=e.e}],execute:function(){e({j:function(e,t,o){return b(j,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),b(C,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),m(e,y(j,j),C),0!==e[8]&&(e[0]/=e[8],e[1]/=e[8],e[2]/=e[8],e[3]/=e[8],e[4]/=e[8],e[5]/=e[8],e[6]/=e[8],e[7]/=e[8],e[8]/=e[8]),e},p:function(e,t,o){return c(h,t[0],t[1],1),d(h,h,a(S,o)),0===h[2]?p(e,h[0],h[1]):p(e,h[0]/h[2],h[1]/h[2])}});let t=e("m",class extends s{constructor(e){super(e)}get bounds(){const e=this.coords;return null==e?.extent?null:l(e.extent)}get coords(){const e=this.element.georeference?.coords;return u(e,this.spatialReference).geometry}get normalizedCoords(){return i.fromJSON(z(this.coords))}get normalizedBounds(){const e=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=e?l(e):null}});o([n()],t.prototype,"spatialReference",void 0),o([n()],t.prototype,"element",void 0),o([n()],t.prototype,"bounds",null),o([n()],t.prototype,"coords",null),o([n()],t.prototype,"normalizedCoords",null),o([n()],t.prototype,"normalizedBounds",null),e("m",t=o([r("esri.layers.support.MediaElementView")],t));const h=g(),S=x(),j=x(),C=x();function b(e,t,o,n,r,s,l,u,i){f(e,t,n,s,o,r,l,1,1,1),c(h,u,i,1),y(S,e);const[p,g,z]=d(h,h,a(S,S));return f(S,p,0,0,0,g,0,0,0,z),m(e,S,e)}}}}));