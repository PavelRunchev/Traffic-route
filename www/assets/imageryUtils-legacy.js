System.register(["./utils-legacy.js","./index-legacy.js","./originUtils-legacy.js","./multiOriginJSONSupportUtils-legacy.js","./jsonContext-legacy.js","./saveAPIKeyUtils-legacy.js","./saveUtils-legacy.js"],(function(e,t){"use strict";var a,r,i,s,l,n;return{setters:[e=>{a=e.$,r=e.j},e=>{i=e.l,s=e.b,l=e.f,n=e.i},null,null,null,null,null],execute:function(){e({save:async function(e,r){const i="imagery"===e.type?y:o;return a({layer:e,itemType:t,validateLayer:m,createItemData:g,errorNamePrefix:i},r)},saveAs:async function(e,a,i){const s="imagery"===e.type?c:u;return r({layer:e,itemType:t,validateLayer:m,createItemData:g,errorNamePrefix:s,newItem:a,setItemProperties:v},i)}});const t="Image Service",y="imagery-layer-save",c="imagery-layer-save-as",o="imagery-tile-layer-save",u="imagery-tile-layer-save-as";function m(e){if("imagery"===e.type)return{isValid:!0};const{raster:t}=e,a="Function"===t?.datasetFormat?t.primaryRasters?.rasters[0]:t;return{isValid:"RasterTileServer"===a?.datasetFormat&&("Raster"===a.tileType||"Map"===a.tileType),errorMessage:"imagery tile layer should be created from a tiled image service."}}function g(e){const t=e.layerJSON;return Promise.resolve(t&&Object.keys(t).length?t:null)}async function v(e,t){const{parsedUrl:a,title:r,fullExtent:y}=e;t.url=a.path,t.title||=r;try{t.extent=await i(y)}catch{t.extent=void 0}s(t,l.METADATA),"imagery-tile"===e.type&&n(t,l.TILED_IMAGERY)}}}}));
