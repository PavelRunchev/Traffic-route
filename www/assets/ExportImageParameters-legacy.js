System.register(["./index-legacy.js","./floorFilterUtils-legacy.js","./sublayerUtils-legacy.js"],(function(e,s){"use strict";var r,t,i,l,a,n,y,o,c;return{setters:[e=>{r=e.x,t=e.y,i=e.bl,l=e.z,a=e.bm,n=e.D,y=e.bn},e=>{o=e.n},e=>{c=e.n}],execute:function(){const s={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let h=e("m",class extends a{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const s=o(this.floors,e);return e.toExportImageJSON(s)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&c(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(s[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,s=this.visibleSublayers.filter((s=>null!=s.definitionExpression||e&&null!=s.floorInfo));return s.length?JSON.stringify(s.reduce(((e,s)=>{const r=o(this.floors,s),t=n(r,s.definitionExpression);return null!=t&&(e[s.id]=t),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const s=this.layer.sublayers,r=this.scale,t=s=>{s.visible&&(0===r||y(r,s.minScale,s.maxScale))&&(s.sublayers?s.sublayers.forEach(t):e.unshift(s))};s&&s.forEach(t);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((s,r)=>e[r]!==s))?e:i}toJSON(){const e=this.layer;let s={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?s.dynamicLayers=this.dynamicLayers:s={...s,layers:this.layers,layerDefs:this.layerDefs},s}});r([t({readOnly:!0})],h.prototype,"dynamicLayers",null),r([t()],h.prototype,"floors",void 0),r([t({readOnly:!0})],h.prototype,"hasDynamicLayers",null),r([t()],h.prototype,"layer",null),r([t({readOnly:!0})],h.prototype,"layers",null),r([t({readOnly:!0})],h.prototype,"layerDefs",null),r([t({type:Number})],h.prototype,"scale",void 0),r([t(i)],h.prototype,"timeExtent",void 0),r([t({readOnly:!0})],h.prototype,"version",null),r([t({readOnly:!0})],h.prototype,"visibleSublayers",null),e("m",h=r([l("esri.layers.mixins.ExportImageParameters")],h))}}}));
