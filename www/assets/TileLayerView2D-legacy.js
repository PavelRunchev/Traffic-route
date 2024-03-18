System.register(["./index-legacy.js","./GeometryUtils-legacy.js","./UpdateTracking2D-legacy.js","./enums-legacy2.js","./definitions-legacy.js","./floatRGBA-legacy.js","./Container-legacy.js","./WGLContainer-legacy.js","./Texture-legacy.js","./enums-legacy.js","./Program-legacy.js","./LabelMetric-legacy.js","./StyleDefinition-legacy.js","./enums-legacy3.js","./MagnifierPrograms-legacy.js","./pbf-legacy.js","./FeatureCommandQueue-legacy.js","./OrderIndependentTransparency-legacy.js","./testSVGPremultipliedAlpha-legacy.js","./GraphicsView2D-legacy.js","./earcut-legacy.js","./vec3f32-legacy.js","./imageUtils-legacy.js","./LayerView-legacy.js","./HighlightGraphicContainer-legacy.js","./RefreshableLayerView-legacy.js","./drapedUtils-legacy.js","./TurboLine-legacy.js","./OptimizedGeometry-legacy.js","./Rect-legacy.js","./BindType-legacy.js","./Util-legacy.js","./highlightReasons-legacy.js","./constants-legacy.js","./ProgramTemplate-legacy.js","./VertexElementDescriptor-legacy.js","./config-legacy.js","./featureConversionUtils-legacy.js","./OptimizedFeatureSet-legacy.js","./CircularArray-legacy.js","./AttributeStore-legacy.js","./TimeOnly-legacy.js","./timeSupport-legacy.js","./json-legacy.js","./basicInterfaces-legacy.js","./normalizeUtilsSync-legacy.js","./Bitmap-legacy.js","./TileContainer-legacy.js","./AGraphicContainer-legacy.js","./TechniqueInstance-legacy.js","./floorFilterUtils-legacy.js","./sublayerUtils-legacy.js","./popupUtils-legacy.js"],(function(e,t){"use strict";var i,l,s,a,h,n,r,c,u,g,p,o,y,d,f,m,_,w,j,I,V,T,v;return{setters:[e=>{i=e.j,l=e.k,s=e.m,a=e.r,h=e.n,n=e.G,r=e.o,c=e.v,u=e.w,g=e.x,p=e.y,o=e.z},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,e=>{y=e.$},null,null,e=>{d=e.r,f=e.o,m=e.n},e=>{_=e.m,w=e.u},e=>{j=e.h},e=>{I=e.i},e=>{V=e.S,T=e.U,v=e.r},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const t=[0,0];let U=class extends(I(d(_(w)))){constructor(){super(...arguments),this._fetchQueue=null,this._highlightGraphics=new i,this._highlightView=null,this._popupHighlightHelper=null,this._tileStrategy=null,this.layer=null}get resampling(){return!("resampling"in this.layer)||!1!==this.layer.resampling}get tilemapCache(){return"tilemapCache"in this.layer?this.layer.tilemapCache:null}update(e){this._fetchQueue.pause(),this._fetchQueue.state=e.state,this._tileStrategy.update(e),this._fetchQueue.resume(),this._highlightView?.processUpdate(e)}attach(){const e="tileServers"in this.layer?this.layer.tileServers:null,t=this.tilemapCache;if(this._tileInfoView=new l(this.layer.tileInfo,this.layer.fullExtent,t?.effectiveMinLOD,t?.effectiveMaxLOD),this._fetchQueue=new s({tileInfoView:this._tileInfoView,concurrency:e&&10*e.length||10,process:(e,t)=>this.fetchTile(e,t)}),this._tileStrategy=new a({cachePolicy:"keep",resampling:this.resampling,acquireTile:e=>this.acquireTile(e),releaseTile:e=>this.releaseTile(e),tileInfoView:this._tileInfoView}),V(this,this.layer)){const e=this._highlightView=new y({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new j(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1});this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new T({createFetchPopupFeaturesQueryGeometry:(e,t)=>v(e,t,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{e.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this._updatingHandles})}this.requestUpdate(),this.addAttachHandles(this._updatingHandles.add((()=>this.resampling),(()=>{this.doRefresh()}))),super.attach()}detach(){super.detach(),this._tileStrategy.destroy(),this._fetchQueue.clear(),this.container.removeAllChildren(),this._popupHighlightHelper?.destroy(),this._highlightView?.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=this._popupHighlightHelper=null}async fetchPopupFeaturesAtLocation(e,t){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,t):[]}highlight(e){return this._popupHighlightHelper?this._popupHighlightHelper.highlight(e):h()}moveStart(){this.requestUpdate()}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(e){return n(this.layer.tileInfo?.spatialReference,e)}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh((e=>this._updatingHandles.addPromise(this._enqueueTileFetch(e))))}}acquireTile(e){const i=this._bitmapView.createTile(e),l=i.bitmap;return[l.x,l.y]=this._tileInfoView.getTileCoords(t,i.key),l.resolution=this._tileInfoView.getTileResolution(i.key),[l.width,l.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(i)),this._bitmapView.addChild(i),this.requestUpdate(),i}releaseTile(e){this._fetchQueue.abort(e.key.id),this._bitmapView.removeChild(e),e.once("detach",(()=>e.destroy())),this.requestUpdate()}async fetchTile(e,t={}){const i=this.tilemapCache,{signal:l,resamplingLevel:a=0}=t;if(!i)try{return await this._fetchImage(e,l)}catch(s){if(!r(s)&&!this.resampling)return f(this._tileInfoView.tileInfo.size);if(a<3){const i=this._tileInfoView.getTileParentId(e.id);if(i){const l=new c(i),s=await this.fetchTile(l,{...t,resamplingLevel:a+1});return m(this._tileInfoView,s,l,e)}}throw s}const h=new c(0,0,0,0);let n;try{if(await i.fetchAvailabilityUpsample(e.level,e.row,e.col,h,{signal:l}),h.level!==e.level&&!this.resampling)return f(this._tileInfoView.tileInfo.size);n=await this._fetchImage(h,l)}catch(s){if(r(s))throw s;n=await this._fetchImage(e,l)}return this.resampling?m(this._tileInfoView,n,h,e):n}async _enqueueTileFetch(e){if(!this._fetchQueue.has(e.key.id)){try{const t=await this._fetchQueue.push(e.key);e.bitmap.source=t,e.bitmap.width=this._tileInfoView.tileInfo.size[0],e.bitmap.height=this._tileInfoView.tileInfo.size[1],e.once("attach",(()=>this.requestUpdate()))}catch(t){r(t)||u.getLogger(this).error(t)}this.requestUpdate()}}async _fetchImage(e,t){return this.layer.fetchImageBitmapTile(e.level,e.row,e.col,{signal:t})}};g([p()],U.prototype,"resampling",null),g([p()],U.prototype,"tilemapCache",null),U=g([o("esri.views.2d.layers.TileLayerView2D")],U),e("default",U)}}}));