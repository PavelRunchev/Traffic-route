System.register(["./WGLContainer-legacy.js","./Container-legacy.js"],(function(e,s){"use strict";var r,a,t;return{setters:[e=>{r=e.n,a=e.h},e=>{t=e.E}],execute:function(){e("a",class extends r{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const s=e.registerRenderPass({name:"bitmap",brushes:[a.bitmap],target:()=>this.children,drawPhase:t.MAP});return[...super.prepareRenderPasses(e),s]}_manageFade(){this.children.reduce(((e,s)=>e+(s.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}})}}}));