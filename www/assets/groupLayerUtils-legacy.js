System.register(["./utils-legacy.js","./jsonContext-legacy.js","./index-legacy.js","./resourceUtils-legacy3.js","./originUtils-legacy.js","./multiOriginJSONSupportUtils-legacy.js","./saveAPIKeyUtils-legacy.js","./saveUtils-legacy.js","./resourceUtils-legacy2.js"],(function(e,r){"use strict";var t,s,a,l,n,o,i,c;return{setters:[e=>{t=e.$,s=e.j},e=>{a=e.o},e=>{l=e.bC,n=e.b,o=e.f,i=e.i},e=>{c=e.p},null,null,null,null,null],execute:function(){e({save:async function(e,s){return t({layer:e,itemType:r,validateLayer:m,validateItem:p,createJSONContext:r=>v(r,e),createItemData:f,errorNamePrefix:u,saveResources:async(r,t)=>(e.sourceIsPortalItem||await r.removeAllResources().catch((()=>{})),c(e.resourceReferences,t))},s)},saveAs:async function(e,t,a){return s({layer:e,itemType:r,validateLayer:m,createJSONContext:r=>v(r,e),createItemData:f,errorNamePrefix:y,newItem:t,setItemProperties:j,saveResources:(r,t)=>c(e.resourceReferences,t)},a)}});const r="Group Layer",u="group-layer-save",y="group-layer-save-as",g=o.GROUP_LAYER_MAP;function m(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function p(e){return{isValid:l(e,g),errorMessage:`Layer.portalItem.typeKeywords should have '${g}'`}}function v(e,r){return{...a(e,"web-map",!0),initiator:r}}function f(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function j(e,r){r.title||=e.title,n(r,o.METADATA),i(r,g)}}}}));