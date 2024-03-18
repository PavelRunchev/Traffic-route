System.register(["./index-legacy.js"],(function(e,t){"use strict";return{setters:[null],execute:function(){e("c",(
/*!
             * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
             * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
             * v2.6.0
             */
function(e,t,r){return new(function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e))(t,r)}))}}}));
