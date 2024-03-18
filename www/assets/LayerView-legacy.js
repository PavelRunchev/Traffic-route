System.register(["./index-legacy.js","./Container-legacy.js"],(function(e,t){"use strict";var i,s,r,n,a,o,p,l,h,d,u,c,y,g,v,m,f,w,b,R,S,P,O,q;return{setters:[e=>{i=e.x,s=e.y,r=e.z,n=e.bX,a=e.ec,o=e.ei,p=e.aQ,l=e.aN,h=e.V,d=e.O,u=e.Z,c=e.s,y=e.C,g=e.fr,v=e.R,m=e.bn,f=e.dc,w=e.io,b=e.c7,R=e.bm,S=e.ip,P=e.w,O=e.K},e=>{q=e.h}],execute:function(){let t=class extends n{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};i([s({readOnly:!0})],t.prototype,"version",null),t=i([r("esri.views.layers.support.ClipArea")],t);const A=t;var x;let V=x=class extends A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new x({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};i([s({type:[Number,String],json:{write:!0}})],V.prototype,"left",void 0),i([s({type:[Number,String],json:{write:!0}})],V.prototype,"right",void 0),i([s({type:[Number,String],json:{write:!0}})],V.prototype,"top",void 0),i([s({type:[Number,String],json:{write:!0}})],V.prototype,"bottom",void 0),V=x=i([r("esri.views.layers.support.ClipRect")],V);const _=V;var C;const I={base:o,key:"type",typeMap:{extent:p,polygon:l}};let j=C=class extends A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new C({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};i([s({types:I,json:{read:a,write:!0}})],j.prototype,"geometry",void 0),j=C=i([r("esri.views.layers.support.Geometry")],j);const H=e("a",j);let N=class extends A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};i([s({type:[[[Number]]],json:{write:!0}})],N.prototype,"path",void 0),N=i([r("esri.views.layers.support.Path")],N);const U=N,L=h.ofType({key:"type",base:null,typeMap:{rect:_,path:U,geometry:H}});e("m",(e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new L,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new c("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new q),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([y((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),g),y((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),g),y((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),g),y((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),g),y((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),g),y((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),g),v((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),g),y((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=null!=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),g)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updateSuspended(){return this.suspended}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return m(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return i([s()],t.prototype,"attached",void 0),i([s({type:L,set(e){const t=d(e,this._get("clips"),L);this._set("clips",t)}})],t.prototype,"clips",void 0),i([s()],t.prototype,"container",void 0),i([s()],t.prototype,"moving",void 0),i([s({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),i([s({readOnly:!0})],t.prototype,"updateParameters",void 0),i([s()],t.prototype,"updateRequested",void 0),i([s()],t.prototype,"updateSuspended",null),i([s()],t.prototype,"updating",null),i([s()],t.prototype,"view",void 0),i([s({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),i([s({type:u})],t.prototype,"highlightOptions",void 0),t=i([r("esri.views.2d.layers.LayerView2D")],t),t}));let M=class extends(f(w(b.EventedMixin(R)))){constructor(e){super(e),this._updatingHandles=new S,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer?.title||"no title";P.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}destroy(){this._updatingHandles=O(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent?.suspended?this.parent.suspendInfo:{};return this.view?.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};i([s()],M.prototype,"fullOpacity",null),i([s()],M.prototype,"layer",void 0),i([s()],M.prototype,"parent",void 0),i([s({readOnly:!0})],M.prototype,"suspended",null),i([s({readOnly:!0})],M.prototype,"suspendInfo",null),i([s({readOnly:!0})],M.prototype,"legendEnabled",null),i([s({type:Boolean,readOnly:!0})],M.prototype,"updating",null),i([s({readOnly:!0})],M.prototype,"updatingProgress",null),i([s()],M.prototype,"visible",null),i([s()],M.prototype,"view",void 0),M=i([r("esri.views.layers.LayerView")],M),e("u",M)}}}));
