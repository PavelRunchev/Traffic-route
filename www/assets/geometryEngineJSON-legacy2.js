System.register(["./geometryEngineBase-legacy.js","./json-legacy.js"],(function(e,n){"use strict";var t,r;return{setters:[e=>{t=e.G},e=>{r=e.t}],execute:function(){function n(e){return t.extendedSpatialReferenceInfo(e)}function i(e,n,i){return t.clip(r,e,n,i)}function u(e,n,i){return t.cut(r,e,n,i)}function c(e,n,i){return t.contains(r,e,n,i)}function o(e,n,i){return t.crosses(r,e,n,i)}function f(e,n,i,u){return t.distance(r,e,n,i,u)}function l(e,n,i){return t.equals(r,e,n,i)}function a(e,n,i){return t.intersects(r,e,n,i)}function s(e,n,i){return t.touches(r,e,n,i)}function p(e,n,i){return t.within(r,e,n,i)}function g(e,n,i){return t.disjoint(r,e,n,i)}function d(e,n,i){return t.overlaps(r,e,n,i)}function m(e,n,i,u){return t.relate(r,e,n,i,u)}function y(e,n){return t.isSimple(r,e,n)}function h(e,n){return t.simplify(r,e,n)}function S(e,n,i=!1){return t.convexHull(r,e,n,i)}function x(e,n,i){return t.difference(r,e,n,i)}function R(e,n,i){return t.symmetricDifference(r,e,n,i)}function w(e,n,i){return t.intersect(r,e,n,i)}function D(e,n,i=null){return t.union(r,e,n,i)}function j(e,n,i,u,c,o,f){return t.offset(r,e,n,i,u,c,o,f)}function A(e,n,i,u,c=!1){return t.buffer(r,e,n,i,u,c)}function E(e,n,i,u,c,o,f){return t.geodesicBuffer(r,e,n,i,u,c,o,f)}function T(e,n,i,u=!0){return t.nearestCoordinate(r,e,n,i,u)}function v(e,n,i){return t.nearestVertex(r,e,n,i)}function L(e,n,i,u,c){return t.nearestVertices(r,e,n,i,u,c)}function V(e,n,r,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const u=t.rotate(n,r,i);return u.spatialReference=e,u}function b(e,n,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const i=t.flipHorizontal(n,r);return i.spatialReference=e,i}function z(e,n,r){if(null==n||null==r)throw new Error("Illegal Argument Exception");const i=t.flipVertical(n,r);return i.spatialReference=e,i}function I(e,n,i,u,c){return t.generalize(r,e,n,i,u,c)}function H(e,n,i,u){return t.densify(r,e,n,i,u)}function _(e,n,i,u,c=0){return t.geodesicDensify(r,e,n,i,u,c)}function B(e,n,i){return t.planarArea(r,e,n,i)}function P(e,n,i){return t.planarLength(r,e,n,i)}function q(e,n,i,u){return t.geodesicArea(r,e,n,i,u)}function C(e,n,i,u){return t.geodesicLength(r,e,n,i,u)}function O(e,n,i){return null==n||null==i?[]:t.intersectLinesToPoints(r,e,n,i)}function G(e,n){t.changeDefaultSpatialReferenceTolerance(e,n)}function M(e){t.clearDefaultSpatialReferenceTolerance(e)}e({A:D,B:B,C:C,D:j,E:T,G:G,H:_,I:I,L:v,M:M,P:O,R:A,S:R,T:L,V:H,_:P,a:c,b:V,c:a,d:m,f:s,g:d,h:h,i:u,j:E,l:p,m:y,o:o,p:g,q:q,r:i,s:f,t:n,u:l,v:b,w:w,x:x,y:S,z:z}),e("O",Object.freeze(Object.defineProperty({__proto__:null,buffer:A,changeDefaultSpatialReferenceTolerance:G,clearDefaultSpatialReferenceTolerance:M,clip:i,contains:c,convexHull:S,crosses:o,cut:u,densify:H,difference:x,disjoint:g,distance:f,equals:l,extendedSpatialReferenceInfo:n,flipHorizontal:b,flipVertical:z,generalize:I,geodesicArea:q,geodesicBuffer:E,geodesicDensify:_,geodesicLength:C,intersect:w,intersectLinesToPoints:O,intersects:a,isSimple:y,nearestCoordinate:T,nearestVertex:v,nearestVertices:L,offset:j,overlaps:d,planarArea:B,planarLength:P,relate:m,rotate:V,simplify:h,symmetricDifference:R,touches:s,union:D,within:p},Symbol.toStringTag,{value:"Module"})))}}}));