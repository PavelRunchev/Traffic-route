System.register(["./index-legacy.js"],(function(e,n){"use strict";var t,a,r,i,o;return{setters:[e=>{t=e.ar,a=e.aN,r=e.aO,i=e.aP,o=e.aQ}],execute:function(){e("hydratedAdapter",{convertToGEGeometry:function(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t},exportPoint:function(e,n,a){const r=e.hasZ(n),i=e.hasM(n),o=new t({x:e.getPointX(n),y:e.getPointY(n),spatialReference:a});return r&&(o.z=e.getPointZ(n)),i&&(o.m=e.getPointM(n)),o.cache._geVersion=n,o},exportPolygon:function(e,n,t){const r=new a({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return r.cache._geVersion=n,r},exportPolyline:function(e,n,t){const a=new r({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a},exportMultipoint:function(e,n,t){const a=new i({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a},exportExtent:function(e,n,t){const a=e.hasZ(n),r=e.hasM(n),i=new o({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(a){const t=e.getZExtent(n);i.zmin=t.vmin,i.zmax=t.vmax}if(r){const t=e.getMExtent(n);i.mmin=t.vmin,i.mmax=t.vmax}return i.cache._geVersion=n,i}})}}}));
