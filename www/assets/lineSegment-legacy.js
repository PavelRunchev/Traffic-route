System.register(["./index-legacy.js","./ObjectStack-legacy.js","./plane-legacy.js"],(function(c,t){"use strict";var e,n,r,i,o,u,g,s,a,v,f;return{setters:[c=>{e=c.cQ,n=c.ct,r=c.cR,i=c.cS,o=c.cp,u=c.cT,g=c.cU,s=c.a8,a=c.cV},c=>{v=c.s},c=>{f=c.c}],execute:function(){function t(c){return c?{origin:e(c.origin),vector:e(c.vector)}:{origin:n(),vector:n()}}c({b:function(c,e,n=t()){return r(n.origin,c),i(n.vector,e,c),n},j:function(c,t,e){return function(c,t,e,n,r){const{vector:v,origin:j}=c,l=i(f.get(),t,j),y=o(v,l)/u(v);return g(r,v,s(y,e,n)),a(r,r,c.origin)}(c,t,0,1,e)},v:t}),new v((()=>t()))}}}));