System.register([],(function(c,a){"use strict";return{execute:function(){c({a:function(c,o){return c&&(o=o||globalThis.location.hostname)?null!=o.match(a)||null!=o.match(s)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=o.match(t)||null!=o.match(e)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c:c},c:function(c){return c=c||globalThis.location.hostname,o.some((a=>null!=c?.match(a)))}});const a=/^devext.arcgis.com$/,t=/^qaext.arcgis.com$/,s=/^[\w-]*\.mapsdevext.arcgis.com$/,e=/^[\w-]*\.mapsqa.arcgis.com$/,o=[/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,a,t,/^jsapps.esri.com$/,s,e]}}}));