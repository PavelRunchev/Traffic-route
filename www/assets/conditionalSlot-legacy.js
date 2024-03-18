System.register(["./index-legacy.js","./observers-legacy.js"],(function(e,t){"use strict";var n,c;return{setters:[e=>{n=e.aK},e=>{c=e.c}],execute:function(){e({c:function(e){s||(s=c("mutation",r)),s.observe(e.el,o)},d:function(e){t.delete(e.el),r(s.takeRecords()),s.disconnect();for(const[n]of t.entries())s.observe(n,o)}});
/*!
             * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
             * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
             * v2.6.0
             */
const t=new Set;let s;const o={childList:!0};function r(e){e.forEach((({target:e})=>{n(e)}))}}}}));
