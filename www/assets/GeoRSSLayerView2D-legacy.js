System.register(["./index-legacy.js","./LayerView-legacy.js","./GraphicContainer-legacy.js","./GraphicsView2D-legacy.js","./Container-legacy.js","./highlightReasons-legacy.js","./definitions-legacy.js","./enums-legacy.js","./Texture-legacy.js","./AGraphicContainer-legacy.js","./TechniqueInstance-legacy.js","./UpdateTracking2D-legacy.js","./TurboLine-legacy.js","./enums-legacy2.js","./earcut-legacy.js","./GeometryUtils-legacy.js","./OptimizedGeometry-legacy.js","./Rect-legacy.js","./LabelMetric-legacy.js","./Program-legacy.js","./VertexElementDescriptor-legacy.js","./BindType-legacy.js","./Util-legacy.js","./constants-legacy.js","./TileContainer-legacy.js","./WGLContainer-legacy.js","./ProgramTemplate-legacy.js","./StyleDefinition-legacy.js","./config-legacy.js","./featureConversionUtils-legacy.js","./OptimizedFeatureSet-legacy.js","./FeatureCommandQueue-legacy.js","./vec3f32-legacy.js","./AttributeStore-legacy.js","./TimeOnly-legacy.js","./timeSupport-legacy.js","./json-legacy.js","./normalizeUtilsSync-legacy.js"],(function(e,l){"use strict";var s,t,i,a,n,r,o,c,y,p,g,h,u;return{setters:[e=>{s=e.C,t=e.P,i=e.E,a=e.V,n=e.F,r=e.I,o=e.J,c=e.x,y=e.z},e=>{p=e.m,g=e.u},e=>{h=e.t},e=>{u=e.$},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){let l=class extends(p(g)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(e,l){if(!this.graphicsViews.length)return null;const s=this.layer;return this.graphicsViews.reverse().flatMap((l=>{const t=this._popupTemplates.get(l),i=l.hitTest(e);for(const e of i)e.layer=s,e.sourceLayer=s,e.popupTemplate=t;return i})).map((l=>({type:"graphic",graphic:l,layer:s,mapPoint:e})))}update(e){if(this.graphicsViews)for(const l of this.graphicsViews)l.processUpdate(e)}attach(){this.addAttachHandles([s((()=>this.layer?.featureCollections),(e=>{this._clear();for(const{popupInfo:l,featureSet:s,layerDefinition:t}of e){const e=i.fromJSON(s),o=new a(e.features),c=t.drawingInfo,y=l?n.fromJSON(l):null,p=r(c.renderer),g=new u({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:o,renderer:p,container:new h(this.view.featuresTilingScheme)});this._graphicsViewMap[e.geometryType]=g,this._popupTemplates.set(g,y),"polygon"!==e.geometryType||this.layer.polygonSymbol?"polyline"!==e.geometryType||this.layer.lineSymbol?"point"!==e.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=p.symbol):this.layer.lineSymbol=p.symbol:this.layer.polygonSymbol=p.symbol,this.graphicsViews.push(g),this.container.addChild(g.container)}}),t),s((()=>this.layer?.polygonSymbol),(e=>{this._graphicsViewMap.polygon.renderer=new o({symbol:e})}),t),s((()=>this.layer?.lineSymbol),(e=>{this._graphicsViewMap.polyline.renderer=new o({symbol:e})}),t),s((()=>this.layer?.pointSymbol),(e=>{this._graphicsViewMap.point.renderer=new o({symbol:e})}),t)])}detach(){this._clear()}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}_clear(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};l=c([y("esri.views.2d.layers.GeoRSSLayerView2D")],l),e("default",l)}}}));