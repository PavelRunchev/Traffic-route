System.register(["./arcadeUtils-legacy.js","./TimeOnly-legacy.js","./SpatialFilter-legacy.js","./index-legacy.js","./geometryEngineAsync-legacy.js","./ImmutableArray-legacy.js","./number-legacy.js","./featureConversionUtils-legacy.js","./OptimizedGeometry-legacy.js","./OptimizedFeatureSet-legacy.js","./WhereClause-legacy.js"],(function(e,n){"use strict";var t,r,a,s,i,l,u,c,o,f,p,d,y,m,w,g,h;return{setters:[e=>{t=e.T,r=e.a,a=e.d,s=e.B,i=e.b,l=e.r},e=>{u=e.s},e=>{c=e.u,o=e.f},e=>{f=e.ei},e=>{p=e.relate,d=e.crosses,y=e.touches,m=e.within,w=e.overlaps,g=e.contains,h=e.intersects},null,null,null,null,null,null],execute:function(){function n(e){return e instanceof f}function S(e,r,a,p){return p(e,r,(async(p,S,v)=>{if(v.length<2)throw new i(e,l.WrongNumberOfParameters,r);if(null===(v=t(v))[0]&&null===v[1])return!1;if(s(v[0])){if(v[1]instanceof f)return new o({parentfeatureset:v[0],relation:a,relationGeom:v[1]});if(null===v[1])return new c({parentfeatureset:v[0]});throw new i(e,l.InvalidParameter,r)}if(n(v[0])){if(n(v[1])){switch(a){case"esriSpatialRelEnvelopeIntersects":return h(u(v[0]),u(v[1]));case"esriSpatialRelIntersects":return h(v[0],v[1]);case"esriSpatialRelContains":return g(v[0],v[1]);case"esriSpatialRelOverlaps":return w(v[0],v[1]);case"esriSpatialRelWithin":return m(v[0],v[1]);case"esriSpatialRelTouches":return y(v[0],v[1]);case"esriSpatialRelCrosses":return d(v[0],v[1])}throw new i(e,l.InvalidParameter,r)}if(s(v[1]))return new o({parentfeatureset:v[1],relation:a,relationGeom:v[0]});if(null===v[1])return!1;throw new i(e,l.InvalidParameter,r)}if(null!==v[0])throw new i(e,l.InvalidParameter,r);return s(v[1])?new c({parentfeatureset:v[1]}):!(v[1]instanceof f||null===v[1])&&void 0}))}e("registerFunctions",(function(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return S(n,t,"esriSpatialRelIntersects",e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return S(n,t,"esriSpatialRelEnvelopeIntersects",e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:2,max:2}),e.functions.contains=function(n,t){return S(n,t,"esriSpatialRelContains",e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return S(n,t,"esriSpatialRelOverlaps",e.standardFunctionAsync)},e.functions.within=function(n,t){return S(n,t,"esriSpatialRelWithin",e.standardFunctionAsync)},e.functions.touches=function(n,t){return S(n,t,"esriSpatialRelTouches",e.standardFunctionAsync)},e.functions.crosses=function(n,t){return S(n,t,"esriSpatialRelCrosses",e.standardFunctionAsync)},e.functions.relate=function(u,o){return e.standardFunctionAsync(u,o,((e,d,y)=>{if(y=t(y),r(y,3,3,u,o),n(y[0])&&n(y[1]))return p(y[0],y[1],a(y[2]));if(y[0]instanceof f&&null===y[1])return!1;if(y[1]instanceof f&&null===y[0])return!1;if(s(y[0])&&null===y[1])return new c({parentfeatureset:y[0]});if(s(y[1])&&null===y[0])return new c({parentfeatureset:y[1]});if(s(y[0])&&y[1]instanceof f)return y[0].relate(y[1],a(y[2]));if(s(y[1])&&y[0]instanceof f)return y[1].relate(y[0],a(y[2]));if(null===y[0]&&null===y[1])return!1;throw new i(u,l.InvalidParameter,o)}))})}))}}}));