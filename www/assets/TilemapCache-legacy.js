System.register(["./index-legacy.js","./ByteSizeUnit-legacy.js"],(function(e,t){"use strict";var i,a,l,n,s,r,o,h,c,f,p,m,u,v,d,y,w,g,b,_,T,O,D;return{setters:[e=>{i=e.cc,a=e.ax,l=e.gp,n=e.X,s=e.gq,r=e.s,o=e.bo,h=e.x,c=e.y,f=e.bm,p=e.ef,m=e.C,u=e.P,v=e.gr,d=e.o,y=e.gs,w=e.gt,g=e.dY,b=e.z,_=e.gu,T=e.n,O=e.f1},e=>{D=e.E}],execute:function(){class t{constructor(e){this._validateJSON(e);const{location:t,data:n}=e;this.location=Object.freeze(a(t));const s=this.location.width,r=this.location.height;let o=!0,h=!0;const c=function(e,t=!1){return e<=i?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}(Math.ceil(s*r/32));let f=0;for(let i=0;i<n.length;i++){const e=i%32;n[i]?(h=!1,c[f]|=1<<e):o=!1,31===e&&++f}h?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=c,this.byteSize=40+l(c))}getAvailability(e,t){if("unavailable"===this._availability||"available"===this._availability)return this._availability;const i=(e-this.location.top)*this.location.width+(t-this.location.left),a=i%32,l=i>>5,n=this._availability;return l<0||l>n.length?"unknown":n[l]&1<<a?"available":"unavailable"}static fromDefinition(e,i){const a=e.service.request||n,{row:l,col:o,width:h,height:c}=e,f={query:{f:"json"}};return i=i?{...f,...i}:f,a(function(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const i=e.service.query;return i&&(t=`${t}?${i}`),t}(e),i).then((e=>e.data)).catch((e=>{if(e&&e.details&&422===e.details.httpStatus)return{location:{top:l,left:o,width:h,height:c},valid:!0,data:s(h*c,0)};throw e})).then((e=>{if(e.location&&(e.location.top!==l||e.location.left!==o||e.location.width!==h||e.location.height!==c))throw new r("tilemap:location-mismatch","Tilemap response for different location than requested",{response:e,definition:{top:l,left:o,width:h,height:c}});return t.fromJSON(e)}))}static fromJSON(e){return Object.freeze(new t(e))}_validateJSON(e){if(!e?.location)throw new r("tilemap:missing-location","Location missing from tilemap response");if(!1===e.valid)throw new r("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new r("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new r("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new r("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}}function A(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}var $;let z=e("T",$=class extends f{constructor(e){super(e),this._pendingTilemapRequests={},this.request=n,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new p(2*D.MEGABYTES),this.addHandles(m((()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]}),(()=>this._initializeTilemapDefinition()),u))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}fetchTilemap(e,i,a,l){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new r("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const n=this._tmpTilemapDefinition,s=this._tilemapFromCache(e,i,a,n);if(s)return Promise.resolve(s);const o=l?.signal;return l={...l,signal:null},new Promise(((e,i)=>{v(o,(()=>i(_())));const a=A(n);let s=this._pendingTilemapRequests[a];if(!s){s=t.fromDefinition(n,l).then((e=>(this._tilemapCache.put(a,e,e.byteSize),e)));const e=()=>{delete this._pendingTilemapRequests[a]};this._pendingTilemapRequests[a]=s,s.then(e,e)}s.then(e,i)}))}getAvailability(e,t,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const a=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return a?a.getAvailability(t,i):"unknown"}fetchAvailability(e,i,a,l){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(new r("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a})):this.fetchTilemap(e,i,a,l).catch((e=>e)).then((l=>{if(l instanceof t){const t=l.getAvailability(i,a);if("unavailable"===t)throw new r("tile-map:tile-unavailable","Tile is not available",{level:e,row:i,col:a});return t}if(d(l))throw l;return"unknown"}))}fetchAvailabilityUpsample(e,t,i,a,l){a.level=e,a.row=t,a.col=i;const n=this.layer.tileInfo;n.updateTileInfo(a);const s=this.fetchAvailability(e,t,i,l).catch((e=>{if(d(e))throw e;if(n.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a,l);throw e}));return this._fetchAvailabilityUpsamplePrefetch(a.id,e,t,i,l,s),s}async _fetchAvailabilityUpsamplePrefetch(e,t,i,a,l,n){if(!this._prefetchingEnabled||null==e)return;const s=`prefetch-${e}`;if(this.hasHandles(s))return;const r=new AbortController;n.then((()=>r.abort()),(()=>r.abort()));let o=!1;const h=T((()=>{o||(o=!0,r.abort())}));if(this.addHandles(h,s),await y(10,r.signal).catch((()=>{})),o||(o=!0,this.removeHandles(s)),w(r))return;const c=new O(e,t,i,a),f={...l,signal:r.signal},p=this.layer.tileInfo;for(let m=0;$._prefetches.length<$._maxPrefetch&&p.upsampleTile(c);++m){const e=this.fetchAvailability(c.level,c.row,c.col,f);$._prefetches.push(e);const t=()=>{$._prefetches.removeUnordered(e)};e.then(t,t)}}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:i}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:g({...e.query,...i,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,i,a){a.level=e,a.row=t-t%this.size,a.col=i-i%this.size;const l=A(a);return this._tilemapCache.get(l)}get test(){const e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:(t,i,a)=>!!e._tilemapFromCache(t,i,a,e._tmpTilemapDefinition)}}});z._maxPrefetch=4,z._prefetches=new o({initialSize:$._maxPrefetch}),h([c({constructOnly:!0})],z.prototype,"layer",void 0),h([c({constructOnly:!0})],z.prototype,"minLOD",void 0),h([c({constructOnly:!0})],z.prototype,"maxLOD",void 0),h([c({constructOnly:!0})],z.prototype,"request",void 0),h([c({constructOnly:!0})],z.prototype,"size",void 0),e("T",z=$=h([b("esri.layers.support.TilemapCache")],z))}}}));
