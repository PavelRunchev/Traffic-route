System.register(["./index-legacy.js","./TileInfoTilemapCache-legacy.js","./TilemapCache-legacy.js"],(function(e,l){"use strict";var t,i,a,n,o,r,s,c;return{setters:[e=>{t=e.x,i=e.y,a=e.bD,n=e.bc,o=e.bE,r=e.z},e=>{s=e.e},e=>{c=e.T}],execute:function(){e("p",(e=>{let l=class extends e{constructor(){super(...arguments),this.copyright=null,this.minScale=0,this.maxScale=0,this.spatialReference=null,this.tileInfo=null,this.tilemapCache=null}destroy(){this.tilemapCache?.destroy?.()}readMinScale(e,l){return null!=l.minLOD&&null!=l.maxLOD?e:0}readMaxScale(e,l){return null!=l.minLOD&&null!=l.maxLOD?e:0}get supportsBlankTile(){return this.version>=10.2}readTilemapCache(e,l,t){const i=l.capabilities?.includes("Tilemap");let{minLOD:a,maxLOD:n,minScale:r,maxScale:p}=l;if(null==a&&null==n&&0!==r&&0!==p){const e=e=>Math.round(1e4*e)/1e4;r=e(r||l.tileInfo.lods[0].scale),p=e(p||l.tileInfo.lods[l.tileInfo.lods.length-1].scale);for(const t of l.tileInfo.lods){const l=e(t.scale);a=l>=r?t.level:a,n=l>=p?t.level:n}}if(i)return new c({layer:this,minLOD:a,maxLOD:n});if(l.tileInfo){const e=new o;return e.read(l.tileInfo,t),new s(e,a,n)}return null}};return t([i({json:{read:{source:"copyrightText"}}})],l.prototype,"copyright",void 0),t([i()],l.prototype,"minScale",void 0),t([a("service","minScale")],l.prototype,"readMinScale",null),t([i()],l.prototype,"maxScale",void 0),t([a("service","maxScale")],l.prototype,"readMaxScale",null),t([i({type:n})],l.prototype,"spatialReference",void 0),t([i({readOnly:!0})],l.prototype,"supportsBlankTile",null),t([i({type:o})],l.prototype,"tileInfo",void 0),t([i()],l.prototype,"tilemapCache",void 0),t([a("service","tilemapCache",["capabilities","tileInfo"])],l.prototype,"readTilemapCache",null),t([i()],l.prototype,"version",void 0),l=t([r("esri.layers.mixins.ArcGISCachedService")],l),l}))}}}));