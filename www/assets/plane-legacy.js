System.register(["./index-legacy.js","./mat3f64-legacy.js","./mat4f64-legacy.js","./quatf64-legacy.js"],(function(t,e){"use strict";var r,s,c,i,n,a,f,h,u,I,_;return{setters:[t=>{r=t.cW,s=t.g5,c=t.ct,i=t.gT,n=t.g$,a=t.cS,f=t.cs,h=t.cp},t=>{u=t.e},t=>{I=t.e},t=>{_=t.e}],execute:function(){t({E:m,F:function(t){return t},X:function t(e,r,s,c=0,i=Math.floor(s*(1/3)),u=Math.floor(s*(2/3))){if(s<3)return!1;r(l,c);let I=i,_=!1;for(;I<s-1&&!_;)r(E,I),I++,_=!n(l,E);if(!_)return!1;for(I=Math.max(I,u),_=!1;I<s&&!_;)r(F,I),I++,a(P,l,E),f(P,P),a(T,E,F),f(T,T),_=!n(l,F)&&!n(E,F)&&Math.abs(h(P,T))<g;return _?(function(t,e,r,s=m()){const c=r[0]-e[0],i=r[1]-e[1],n=r[2]-e[2],a=t[0]-e[0],f=t[1]-e[1],h=t[2]-e[2],u=i*h-n*f,I=n*a-c*h,_=c*f-i*a,o=u*u+I*I+_*_,N=Math.abs(o-1)>1e-5&&o>1e-12?1/Math.sqrt(o):1;s[0]=u*N,s[1]=I*N,s[2]=_*N,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2])}(l,E,F,e),!0):(0!==c||1!==i||2!==u)&&t(e,r,s,0,1,2)}});class e{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&r((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new e(s)}static createVec3f64(){return new e(c)}static createVec4f64(){return new e(i)}static createMat3f64(){return new e(u)}static createMat4f64(){return new e(I)}static createQuatf64(){return new e(_)}get test(){return{length:this._items.length}}}e.createVec2f64();const o=e.createVec3f64();e.createVec4f64(),e.createMat3f64();const N=e.createMat4f64(),M=e.createQuatf64();function m(t=w){return[t[0],t[1],t[2],t[3]]}t({c:o,f:N,o:M});const g=.99619469809,l=c(),E=c(),F=c(),P=c(),T=c(),w=[0,0,1,0];var A;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(A||(A={})),A.INFINITE_MIN,A.INFINITE_MAX,A.INFINITE_MAX}}}));
