System.register(["./index-legacy.js","./crsUtils-legacy.js","./ExportWMSImageParameters-legacy.js","./imageBitmapUtils-legacy.js"],(function(e,t){"use strict";var r,n,i,s,a,o,l,u,p,c,d,m,y,f,h,g,b,x,w,v,S,N,E,F,I,O,R,P,L,A,M,U,j,_,T,C,q,B,V,W,$,D,k,G,H,X,J;return{setters:[e=>{r=e.dc,n=e.R,i=e.en,s=e.C,a=e.ft,o=e.V,l=e.x,u=e.y,p=e.aQ,c=e.bD,d=e.d_,m=e.z,y=e.hu,f=e.s,h=e.q,g=e.bc,b=e.ao,x=e.c5,w=e.bs,v=e.dD,S=e.dd,N=e.bt,E=e.de,F=e.df,I=e.dg,O=e.T,R=e.bx,P=e.bf,L=e.dH,A=e.X,M=e.hv,U=e.G,j=e.e8,_=e.F,T=e.M,C=e.fx,q=e.ap,B=e.ax,V=e.dN,W=e.di,$=e.dO,D=e.dj,k=e.bw,G=e.hw},e=>{H=e.o},e=>{X=e.a},e=>{J=e.t}],execute:function(){var t;let z=0,Q=t=class extends(r(y)){constructor(e){super(e),this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.name=null,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.title=null,this.addHandles([n((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=this,e.layer=this.layer}),i),n((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),i),s((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=this,r.layer=this.layer}),i),s((()=>this.layer),(e=>{if(this.sublayers)for(const t of this.sublayers)t.layer=e}),i)])}get id(){return this._get("id")??z++}set id(e){this._set("id",e)}readLegendUrl(e,t){return t.legendUrl??t.legendURL??null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}castSublayers(e){return a(o.ofType(t),e)}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){const e=new t;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=this.fullExtents?.map((e=>e.clone()))??null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?.map((e=>e.clone()))),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=this.spatialReferences?.map((e=>e))),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const r=this.layer;this._get(e)!==t&&(this._set(e,t),r&&r.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};l([u()],Q.prototype,"description",void 0),l([u({readOnly:!0})],Q.prototype,"dimensions",void 0),l([u({type:p,json:{name:"extent"}})],Q.prototype,"fullExtent",void 0),l([u()],Q.prototype,"fullExtents",void 0),l([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],Q.prototype,"id",null),l([u({type:String,json:{name:"legendUrl",write:{ignoreOrigin:!0}}})],Q.prototype,"legendUrl",void 0),l([c("legendUrl",["legendUrl","legendURL"])],Q.prototype,"readLegendUrl",null),l([u({type:Boolean,json:{name:"showLegend",origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],Q.prototype,"legendEnabled",void 0),l([u()],Q.prototype,"layer",void 0),l([u()],Q.prototype,"maxScale",void 0),l([u()],Q.prototype,"minScale",void 0),l([u({readOnly:!0})],Q.prototype,"effectiveScaleRange",null),l([u({type:String,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"name",void 0),l([u()],Q.prototype,"parent",void 0),l([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],Q.prototype,"popupEnabled",void 0),l([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"queryable",void 0),l([u()],Q.prototype,"sublayers",void 0),l([d("sublayers")],Q.prototype,"castSublayers",null),l([u({type:[Number],json:{read:{source:"spatialReferences"}}})],Q.prototype,"spatialReferences",void 0),l([u({type:String,json:{write:{ignoreOrigin:!0}}})],Q.prototype,"title",void 0),l([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],Q.prototype,"visible",null),Q=t=l([m("esri.layers.support.WMSSublayer")],Q);const K=Q,Y={84:4326,83:4269,27:4267};function Z(e){if(!e)return null;const t={idCounter:-1};"string"==typeof e&&(e=(new DOMParser).parseFromString(e,"text/xml"));const r=e.documentElement;if("ServiceExceptionReport"===r.nodeName){const e=Array.prototype.slice.call(r.childNodes).map((e=>e.textContent)).join("\r\n");throw new f("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",e)}const n=ne("Capability",r),i=ne("Service",r),s=n&&ne("Request",n);if(!n||!i||!s)return null;const a=ne("Layer",n);if(!a)return null;const o="WMS_Capabilities"===r.nodeName||"WMT_MS_Capabilities"===r.nodeName?r.getAttribute("version"):"1.3.0",l=se("Title",i,"")||se("Name",i,""),u=se("AccessConstraints",i,""),c=/^none$/i.test(u)?"":u,d=se("Abstract",i,""),m=parseInt(se("MaxWidth",i,"5000"),10),y=parseInt(se("MaxHeight",i,"5000"),10),g=le(s,"GetMap"),b=oe(s,"GetMap"),x=pe(a,o,t);if(!x)return null;let w,v=0;const S=Array.prototype.slice.call(n.childNodes),N=x.sublayers??[],E=e=>{null!=e&&N.push(e)};S.forEach((e=>{"Layer"===e.nodeName&&(0===v?w=e:1===v?(x.name&&(x.name="",E(pe(w,o,t))),E(pe(e,o,t))):E(pe(e,o,t)),v++)}));let F=x.sublayers,I=x.extent;const O=x.fullExtents??[];if(F||(F=[]),0===F.length&&F.push(x),!I){const e=new p(F[0].extent);x.extent=e.toJSON(),I=x.extent}const R=x.spatialReferences.length>0?x.spatialReferences:ee(x),P=oe(s,"GetFeatureInfo"),L=P?le(s,"GetFeatureInfo"):null,A=te(F),M=x.minScale||0,U=x.maxScale||0,j=x.dimensions??[],_=A.reduce(((e,t)=>e.concat(t.dimensions??[])),[]),T=j.concat(_).filter(de);let C=null;if(T.length){const e=T.map((e=>{const{extent:t}=e;return function(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}(t)?t.map((e=>e.getTime())):t?.map((e=>[e.min.getTime(),e.max.getTime()]))})).flat(2).filter(h);C={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...e),Math.max(...e)]}}return{copyright:c,description:d,dimensions:j,extent:I,fullExtents:O,featureInfoFormats:L,featureInfoUrl:P,mapUrl:b,maxWidth:m,maxHeight:y,maxScale:U,minScale:M,layers:A,spatialReferences:R,supportedImageFormatTypes:g,timeInfo:C,title:l,version:o}}function ee(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const e=ee(t);if(e.length>0)return e}return[]}function te(e){let t=[];for(const r of e)t.push(r),r.sublayers?.length&&(t=t.concat(te(r.sublayers)),delete r.sublayers);return t}function re(e,t,r){return t.getAttribute(e)??r}function ne(e,t){for(let r=0;r<t.childNodes.length;r++){const n=t.childNodes[r];if(ce(n)&&n.nodeName===e)return n}return null}function ie(e,t){if(null==t)return[];const r=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];ce(i)&&i.nodeName===e&&r.push(i)}return r}function se(e,t,r){return ne(e,t)?.textContent??r}function ae(e,t,r){if(!e)return null;const n=parseFloat(e.getAttribute("minx")),i=parseFloat(e.getAttribute("miny")),s=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let o,l,u,c;r?(o=isNaN(i)?-Number.MAX_VALUE:i,l=isNaN(n)?-Number.MAX_VALUE:n,u=isNaN(a)?Number.MAX_VALUE:a,c=isNaN(s)?Number.MAX_VALUE:s):(o=isNaN(n)?-Number.MAX_VALUE:n,l=isNaN(i)?-Number.MAX_VALUE:i,u=isNaN(s)?Number.MAX_VALUE:s,c=isNaN(a)?Number.MAX_VALUE:a);const d=new g({wkid:t});return new p({xmin:o,ymin:l,xmax:u,ymax:c,spatialReference:d})}function oe(e,t){const r=ne(t,e);if(r){const e=ne("DCPType",r);if(e){const t=ne("HTTP",e);if(t){const e=ne("Get",t);if(e){let t=function(e,t,r,n){const i=ne(e,r);return i?re(t,i,n):n}("OnlineResource","xlink:href",e,null);if(t)return t.indexOf("&")===t.length-1&&(t=t.substring(0,t.length-1)),function(e,t){const r=[],n=b(e);for(const i in n.query)n.query.hasOwnProperty(i)&&(t.includes(i.toLowerCase())||r.push(i+"="+n.query[i]));return n.path+(r.length?"?"+r.join("&"):"")}(t,["service","request"])}}}}return null}function le(e,t){const r=ie("Operation",e);if(!r.length)return ie("Format",ne(t,e)).map((({textContent:e})=>e)).filter(h);const n=[];for(const i of r)if(i.getAttribute("name")===t){const e=ie("Format",i);for(const{textContent:t}of e)null!=t&&n.push(t)}return n}function ue(e,t,r){const n=ne(t,e);if(!n)return r;const{textContent:i}=n;if(null==i||""===i)return r;const s=Number(i);return isNaN(s)?r:s}function pe(e,t,r){if(!e)return null;const n={id:r.idCounter++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},i=ne("LatLonBoundingBox",e),s=ne("EX_GeographicBoundingBox",e);let a=null;i&&(a=ae(i,4326)),s&&(a=new p(0,0,0,0,new g({wkid:4326})),a.xmin=parseFloat(se("westBoundLongitude",s,"0")),a.ymin=parseFloat(se("southBoundLatitude",s,"0")),a.xmax=parseFloat(se("eastBoundLongitude",s,"0")),a.ymax=parseFloat(se("northBoundLatitude",s,"0"))),i||s||(a=new p(-180,-90,180,90,new g({wkid:4326}))),n.minScale=ue(e,"MaxScaleDenominator",0),n.maxScale=ue(e,"MinScaleDenominator",0);const o=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach((e=>{if("Name"===e.nodeName)n.name=e.textContent||"";else if("Title"===e.nodeName)n.title=e.textContent||"";else if("Abstract"===e.nodeName)n.description=e.textContent||"";else if("BoundingBox"===e.nodeName){const r=e.getAttribute(o);if(r&&0===r.indexOf("EPSG:")){const n=parseInt(r.substring(5),10);0===n||isNaN(n)||a||(a="1.3.0"===t?ae(e,n,H(n)):ae(e,n))}const i=r&&r.indexOf(":");if(i&&i>-1){let s=parseInt(r.substring(i+1,r.length),10);0===s||isNaN(s)||(s=Y[s]??s);const a="1.3.0"===t?ae(e,s,H(s)):ae(e,s);a&&n.fullExtents&&n.fullExtents.push(a)}}else if(e.nodeName===o)(e.textContent?.split(" ")??[]).forEach((e=>{const t=e.includes(":")?parseInt(e.split(":")[1],10):parseInt(e,10);if(0!==t&&!isNaN(t)){const e=Y[t]??t;n.spatialReferences.includes(e)||n.spatialReferences.push(e)}}));else if("Style"!==e.nodeName||n.legendUrl){if("Layer"===e.nodeName){const i=pe(e,t,r);i&&(i.parentLayerId=n.id,n.sublayers||(n.sublayers=[]),n.sublayers.push(i))}}else{const t=ne("LegendURL",e);if(t){const e=ne("OnlineResource",t);e&&(n.legendUrl=e.getAttribute("xlink:href"))}}})),n.extent=a?.toJSON(),n.dimensions=ie("Dimension",e).filter((e=>e.getAttribute("name")&&e.getAttribute("units")&&e.textContent)).map((e=>{const t=e.getAttribute("name"),r=e.getAttribute("units"),n=e.textContent,i=e.getAttribute("unitSymbol")??void 0,s=e.getAttribute("default")??void 0,a="0"!==re("default",e,"0"),o="0"!==re("nearestValue",e,"0"),l="0"!==re("current",e,"0");return de({name:t,units:r})?{name:"time",units:"ISO8601",extent:fe(n),default:fe(s),multipleValues:a,nearestValue:o,current:l}:function(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}({name:t,units:r})?{name:"elevation",units:r,extent:me(n),unitSymbol:i,default:me(s),multipleValues:a,nearestValue:o}:{name:t,units:r,extent:ye(n),unitSymbol:i,default:ye(s),multipleValues:a,nearestValue:o}})),n}function ce(e){return e.nodeType===Node.ELEMENT_NODE}function de(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function me(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:parseFloat(t[0]),max:parseFloat(t[1]),resolution:t.length>=3&&"0"!==t[2]?parseFloat(t[2]):void 0}})).filter(h):r.map((e=>parseFloat(e)))}function ye(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:t[0],max:t[1],resolution:t.length>=3&&"0"!==t[2]?t[2]:void 0}})).filter(h):r}function fe(e){if(!e)return;const t=e.includes("/"),r=e.split(",");return t?r.map((e=>{const t=e.split("/");return t.length<2?null:{min:new Date(t[0]),max:new Date(t[1]),resolution:t.length>=3&&"0"!==t[2]?he(t[2]):void 0}})).filter(h):r.map((e=>new Date(e)))}function he(e){const t=e.match(/(?:p(\d+y|\d+(?:\.|,)\d+y)?(\d+m|\d+(?:\.|,)\d+m)?(\d+d|\d+(?:\.|,)\d+d)?)?(?:t(\d+h|\d+(?:\.|,)\d+h)?(\d+m|\d+(?:\.|,)\d+m)?(\d+s|\d+(?:\.|,)\d+s)?)?/i);return t?{years:ge(t[1]),months:ge(t[2]),days:ge(t[3]),hours:ge(t[4]),minutes:ge(t[5]),seconds:ge(t[6])}:null}function ge(e){if(!e)return 0;const t=e.match(/(?:\d+(?:\.|,)\d+|\d+)/);if(!t)return 0;const r=t[0].replace(",",".");return Number(r)}function be(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const xe=new Set([102100,3857,102113,900913]),we=new Set([3395,54004]),ve=new x({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function Se(e){return"text/html"===e}function Ne(e){return"text/plain"===e}let Ee=class extends(w(v(S(N(E(F(I(k)))))))){constructor(...e){super(...e),this.allSublayers=new O({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.version=null,this.addHandles([n((()=>this.sublayers),"after-add",(({item:e})=>{e.parent=e.layer=this}),i),n((()=>this.sublayers),"after-remove",(({item:e})=>{e.layer=e.parent=null}),i),s((()=>this.sublayers),((e,t)=>{if(t)for(const r of t)r.layer=r.parent=null;if(e)for(const r of e)r.parent=r.layer=this}),i)])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this.allSublayers.destroy()}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(R).then((()=>this._fetchService(t)))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const r=t.extent;return r?new p({xmin:r[0][0],ymin:r[0][1],xmax:r[1][0],ymax:r[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){return null==this.featureInfoFormats?null:this.featureInfoFormats.find(Se)??this.featureInfoFormats.find(Ne)??null}set featureInfoFormat(e){null==e?(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat")):(Se(e)||Ne(e))&&this._override("featureInfoFormat",e)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("image/png")?"image/png":r&&r[0]}readSpatialReferenceFromItemOrDocument(e,t){return new g(t.spatialReferences[0])}writeSpatialReferences(e,t){const r=this.spatialReference?.wkid;e&&r?(t.spatialReferences=e.filter((e=>e!==r)),t.spatialReferences.unshift(r)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,r){return Fe(t.layers,r,t.visibleLayers)}readSublayers(e,t,r){return Fe(t.layers,r)}writeSublayers(e,t,r,n){t.layers=[];const i=new Map,s=e.flatten((({sublayers:e})=>e??[]));for(const a of s)if("number"==typeof a.parent?.id){const e=i.get(a.parent.id);null!=e?e.push(a.id):i.set(a.parent.id,[a.id])}for(const a of s){const e={sublayer:a,...n},r=a.write({parentLayerId:"number"==typeof a.parent?.id?a.parent.id:-1},e);if(i.has(a.id)&&(r.sublayerIds=i.get(a.id)),!a.sublayers&&a.name){const r=a.write({},e);delete r.id,t.layers.push(r)}}t.visibleLayers=s.filter((({visible:e,sublayers:t})=>e&&!t)).map((({name:e})=>e)).toArray()}set url(e){if(!e)return void this._set("url",e);const{path:t,query:r}=b(e);for(const i in r)/^(request|service)$/i.test(i)&&delete r[i];const n=P(t,r??{});this._set("url",n)}createExportImageParameters(e,t,r,n){const i=n?.pixelRatio??1,s=L({extent:e,width:t})*i,a=new X({layer:this,scale:s}),{xmin:o,ymin:l,xmax:u,ymax:p,spatialReference:c}=e,d=function(e,t){let r=e.wkid;return null==t?r:(null!=r&&t.includes(r)||!e.latestWkid||(r=e.latestWkid),null!=r&&xe.has(r)?t.find((e=>xe.has(e)))||t.find((e=>we.has(e)))||102100:r)}(c,this.spatialReferences),m="1.3.0"===this.version&&H(d)?`${l},${o},${p},${u}`:`${o},${l},${u},${p}`,y=a.toJSON();return{bbox:m,["1.3.0"===this.version?"crs":"srs"]:null==d||isNaN(d)?void 0:"EPSG:"+d,...y}}async fetchImage(e,t,r,n){const i=this.mapUrl,s=this.createExportImageParameters(e,t,r,n);if(!s.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=n?.timeExtent?.start,o=n?.timeExtent?.end,l=null!=a&&null!=o?a.getTime()===o.getTime()?be(a):`${be(a)}/${be(o)}`:void 0,u={responseType:"image",query:this._mixCustomParameters({width:t,height:r,...s,time:l,...this.refreshParameters}),signal:n?.signal};return A(i??"",u).then((e=>e.data))}async fetchImageBitmap(e,t,r,n){const i=this.mapUrl??"",s=this.createExportImageParameters(e,t,r,n);if(!s.layers){const e=document.createElement("canvas");return e.width=t,e.height=r,e}const a=n?.timeExtent?.start,o=n?.timeExtent?.end,l=null!=a&&null!=o?a.getTime()===o.getTime()?be(a):`${be(a)}/${be(o)}`:void 0,u={responseType:"blob",query:this._mixCustomParameters({width:t,height:r,...s,time:l,...this.refreshParameters}),signal:n?.signal},{data:p}=await A(i,u);return J(p,i,n?.signal)}fetchFeatureInfo(e,t,r,n,i){const s=L({extent:e,width:t}),a=function(e){const t=e.filter((e=>e.popupEnabled&&e.name&&e.queryable));return t.length?t.map((({name:e})=>e)).join():null}(new X({layer:this,scale:s}).visibleSublayers);if(null==this.featureInfoUrl||null==a)return Promise.resolve([]);if(null==this.fetchFeatureInfoFunction&&null==this.featureInfoFormat)return Promise.resolve([]);const o="1.3.0"===this.version?{I:n,J:i}:{x:n,y:i},l={query_layers:a,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:r,...o},u={...this.createExportImageParameters(e,t,r),...l},p=this._mixCustomParameters(u);return null!=this.fetchFeatureInfoFunction?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction(P(this.featureInfoUrl,p))}findSublayerById(e){return this.allSublayers.find((t=>t.id===e))}findSublayerByName(e){return this.allSublayers.find((t=>t.name===e))}serviceSupportsSpatialReference(e){return M(this.url)||null!=this.spatialReferences&&this.spatialReferences.some((t=>{const r=900913===t?g.WebMercator:new g({wkid:t});return U(r,e)}))}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=j(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const r=new _({title:this.title,content:t}),n=new T({sourceLayer:this,popupTemplate:r});return Promise.resolve([n])}async _fetchService(e){if(!this.resourceInfo&&this.parsedUrl?.path){const{path:t,query:r}=this.parsedUrl,{data:n}=await A(t,{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=Z(n)}if(this.parsedUrl){const e=new C(this.parsedUrl.path),{httpsDomains:t}=q.request;"https"!==e.scheme||e.port&&"443"!==e.port||!e.host||t.includes(e.host)||t.push(e.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const r in t)e[r.toLowerCase()]=t[r];return e}};function Fe(e,t,r){e=e??[];const n=new Map;e.every((e=>null==e.id))&&(e=B(e)).forEach(((e,t)=>e.id=t));for(const s of e){const e=new K;e.read(s,t),r&&!r.includes(e.name)&&(e.visible=!1),n.set(e.id,e)}const i=[];for(const s of e){const e=null!=s.id?n.get(s.id):null;if(e)if(null!=s.parentLayerId&&s.parentLayerId>=0){const t=n.get(s.parentLayerId);if(!t)continue;t.sublayers||(t.sublayers=new o),t.sublayers.push(e)}else i.push(e)}return i}l([u({readOnly:!0})],Ee.prototype,"allSublayers",void 0),l([u({json:{type:Object,write:!0}})],Ee.prototype,"customParameters",void 0),l([u({json:{type:Object,write:!0}})],Ee.prototype,"customLayerParameters",void 0),l([u({type:String,json:{write:!0}})],Ee.prototype,"copyright",void 0),l([u()],Ee.prototype,"description",void 0),l([u({readOnly:!0})],Ee.prototype,"dimensions",void 0),l([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],Ee.prototype,"fullExtent",void 0),l([c(["web-document","portal-item"],"fullExtent",["extent"])],Ee.prototype,"readFullExtentFromItemOrMap",null),l([V(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],Ee.prototype,"writeFullExtent",null),l([u()],Ee.prototype,"fullExtents",void 0),l([u({type:String,json:{write:{ignoreOrigin:!0}}})],Ee.prototype,"featureInfoFormat",null),l([u({type:[String],readOnly:!0})],Ee.prototype,"featureInfoFormats",void 0),l([u({type:String,json:{write:{ignoreOrigin:!0}}})],Ee.prototype,"featureInfoUrl",void 0),l([u()],Ee.prototype,"fetchFeatureInfoFunction",void 0),l([u({type:String,json:{origins:{"web-document":{default:"image/png",type:ve.jsonValues,read:{reader:ve.read,source:"format"},write:{writer:ve.write,target:"format"}}}}})],Ee.prototype,"imageFormat",void 0),l([c("imageFormat",["supportedImageFormatTypes"])],Ee.prototype,"readImageFormat",null),l([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],Ee.prototype,"imageMaxHeight",void 0),l([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],Ee.prototype,"imageMaxWidth",void 0),l([u()],Ee.prototype,"imageTransparency",void 0),l([u(W)],Ee.prototype,"legendEnabled",void 0),l([u({type:["show","hide","hide-children"]})],Ee.prototype,"listMode",void 0),l([u({type:String,json:{write:{ignoreOrigin:!0}}})],Ee.prototype,"mapUrl",void 0),l([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],Ee.prototype,"isReference",void 0),l([u({type:["WMS"]})],Ee.prototype,"operationalLayerType",void 0),l([u()],Ee.prototype,"resourceInfo",void 0),l([u({type:g,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],Ee.prototype,"spatialReference",void 0),l([c(["web-document","portal-item"],"spatialReference",["spatialReferences"])],Ee.prototype,"readSpatialReferenceFromItemOrDocument",null),l([u({type:[$],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],Ee.prototype,"spatialReferences",void 0),l([V(["web-document","portal-item"],"spatialReferences")],Ee.prototype,"writeSpatialReferences",null),l([u({type:o.ofType(K),json:{write:{target:"layers",overridePolicy(e,t,r){if(function(e,t){return e.some((e=>{for(const r in e)if(G(e,r,null,t))return!0;return!1}))}(this.allSublayers,r))return{ignoreOrigin:!0}}}}})],Ee.prototype,"sublayers",void 0),l([c(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],Ee.prototype,"readSublayersFromItemOrMap",null),l([c("service","sublayers",["layers"])],Ee.prototype,"readSublayers",null),l([V("sublayers",{layers:{type:[K]},visibleLayers:{type:[String]}})],Ee.prototype,"writeSublayers",null),l([u({json:{read:!1},readOnly:!0,value:"wms"})],Ee.prototype,"type",void 0),l([u(D)],Ee.prototype,"url",null),l([u({type:String,json:{write:{ignoreOrigin:!0}}})],Ee.prototype,"version",void 0),Ee=l([m("esri.layers.WMSLayer")],Ee),e("default",Ee)}}}));