System.register(["./index-legacy.js","./query-legacy.js"],(function(t,e){"use strict";var n,r,o,u,i,l,s,y;return{setters:[t=>{n=t.eb,r=t.ao,o=t.aG,u=t.X,i=t.bG,l=t.cC,s=t.dI},t=>{y=t.t}],execute:function(){t({a:function(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?Promise.resolve({data:{count:0}}):c(t,e,"json",n,{returnIdsOnly:!0,returnCountOnly:!0})},d:async function(t,n,r){return null!=n.timeExtent&&n.timeExtent.isEmpty?{data:{count:0,extent:null}}:c(t,n,"json",r,{returnExtentOnly:!0,returnCountOnly:!0}).then((t=>{const n=t.data;if(n.hasOwnProperty("extent"))return t;if(n.features)throw new Error(e);if(n.hasOwnProperty("count"))throw new Error(e);return t}))},m:async function(t,e,n){return null!=e.timeExtent&&e.timeExtent.isEmpty?{data:{objectIds:[]}}:c(t,e,"json",n,{returnIdsOnly:!0})},p:async function(t,e,r,o){const u=await c(t,e,"json",o);return n(e,r,u.data),u}});const e="Layer does not support extent calculation.";function d(t,e){const n=t.geometry,r=t.toJSON(),o=r;if(null!=n&&(o.geometry=JSON.stringify(n),o.geometryType=l(n),o.inSR=s(n.spatialReference)),r.topFilter?.groupByFields&&(o.topFilter.groupByFields=r.topFilter.groupByFields.join(",")),r.topFilter?.orderByFields&&(o.topFilter.orderByFields=r.topFilter.orderByFields.join(",")),r.topFilter&&(o.topFilter=JSON.stringify(o.topFilter)),r.objectIds&&(o.objectIds=r.objectIds.join(",")),r.orderByFields&&(o.orderByFields=r.orderByFields.join(",")),r.outFields&&!(e?.returnCountOnly||e?.returnExtentOnly||e?.returnIdsOnly)?r.outFields.includes("*")?o.outFields="*":o.outFields=r.outFields.join(","):delete o.outFields,r.outSR?o.outSR=s(r.outSR):n&&r.returnGeometry&&(o.outSR=o.inSR),r.returnGeometry&&delete r.returnGeometry,r.timeExtent){const t=r.timeExtent,{start:e,end:n}=t;null==e&&null==n||(o.time=e===n?e:`${e??"null"},${n??"null"}`),delete r.timeExtent}return o}function c(t,e,n,l={},s={}){const c="string"==typeof t?r(t):t,a=e.geometry?[e.geometry]:[];return l.responseType="pbf"===n?"array-buffer":"json",o(a,null,l).then((t=>{const r=t?.[0];null!=r&&((e=e.clone()).geometry=r);const o=y({...c.query,f:n,...s,...d(e,s)});return u(i(c.path,"queryTopFeatures"),{...l,query:{...o,...l.query}})}))}}}}));
