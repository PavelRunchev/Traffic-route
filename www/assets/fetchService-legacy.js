System.register(["./lazyLayerLoader-legacy.js"],(function(e,t){"use strict";var a;return{setters:[e=>{a=e.t}],execute:function(){function t(e){return"Feature Layer"===e.type||"Oriented Imagery Layer"===e.type}function r(e){return"Table"===e.type}function n(e){e.layers=e.layers?.filter(t),e.tables=e.tables?.filter(r)}function s(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function i(e){e.layers?.forEach(s),e.tables?.forEach(c)}e("t",(async function(e,t){const{loadContext:r,...s}=t||{},c=r?await r.fetchServiceMetadata(e,s):await a(e,s);i(c),n(c);const y={serviceJSON:c};if((c.currentVersion??0)<10.5)return y;const l=`${e}/layers`,u=r?await r.fetchServiceMetadata(l,s):await a(l,s);return i(u),n(u),y.layersJSON={layers:u.layers,tables:u.tables},y}))}}}));