System.register(["./index-legacy.js"],(function(e,r){"use strict";var t,i,o,n,s,c,u,a;return{setters:[e=>{t=e.ef,i=e.s,o=e.X,n=e._,s=e.eg,c=e.bg,u=e.eh,a=e.ct}],execute:function(){e({clearBoundingBoxCache:function(){l=h()},computeIconLayerResourceSize:async function(e,r){if(e.resource?.href)return(t=e.resource.href,o(t,{responseType:"image"}).then((e=>e.data))).then((e=>[e.width,e.height]));var t;if(e.resource?.primitive)return null!=r?[r,r]:[256,256];throw new i("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")},computeObjectLayerResourceSize:async function(e,t=null){if(!e.isPrimitive){const t=e.resource.href;if(!t)throw new i("symbol:invalid-resource","The symbol does not have a valid resource");const o=l.get(t);if(void 0!==o)return o;const{fetch:c}=await n((()=>r.import("./objectResourceUtils-legacy.js").then((e=>e.o))),void 0,r.meta.url),u=await c(t,{disableTextures:!0}),h=s(u.referenceBoundingBox,a());return l.put(t,h),h}if(!e.resource?.primitive)throw new i("symbol:invalid-resource","The symbol does not have a valid resource");const o=c(u(e.resource.primitive));if(null!=t)for(let r=0;r<o.length;r++)o[r]*=t;return s(o,a())}});let l=h();function h(){return new t(50)}}}}));