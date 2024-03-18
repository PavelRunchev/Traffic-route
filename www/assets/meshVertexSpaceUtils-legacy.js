System.register(["./index-legacy.js","./MeshLocalVertexSpace-legacy.js","./vec3-legacy.js"],(function(e,r){"use strict";var n,i,t,o,c,a;return{setters:[e=>{n=e.ar,i=e.as,t=e.w},e=>{o=e.i,c=e.a},e=>{a=e.i}],execute:function(){function r(){return t.getLogger("esri.geometry.Mesh")}function g(e){return null!=e.origin}e({a:function(e){const{vertexSpace:r}=e;if(null!=r.origin)return e.clone();const{anchor:n}=e,i=n.clone(),t=new o({origin:[i.x,i.y,i.z]}),c=e.cloneWithVertexSpace(t),{position:g}=c.vertexAttributes;return c.vertexAttributes.position=a(new Float64Array(g.length),g,[-i.x,-i.y,-(i.z??0)]),c.vertexAttributesChanged(),c},f:function(e,n){const{x:t,y:a,z:g,spatialReference:s}=e,u=[t,a,g??0];if(void 0!==n?.geographic){if(i(r(),"option: geographic",{replacement:"use vertexSpace option instead",version:"4.29",warnOnce:!0}),!n?.vertexSpace)return n?.geographic?new c({origin:u}):new o({origin:u});r().warn("Deprecated geographic flag ignored since vertexSpace option is provided.")}if(!n?.vertexSpace)return s.isGeographic||s.isWebMercator?new c({origin:u}):new o({origin:u});switch(n.vertexSpace){case"local":return new c({origin:u});case"georeferenced":return new o({origin:u});case"georeferenced-absolute":return new o}},g:g,h:function(e,r){return"local"===e?new c({origin:r}):new o({origin:r})},l:function(e){return e.isGeographic||e.isWebMercator?"local":"georeferenced"},p:function(e){return g(e.vertexSpace)},u:function(e,r){if(!g(e))return null;const[i,t,o]=e.origin;return new n({x:i,y:t,z:o,spatialReference:r})}})}}}));