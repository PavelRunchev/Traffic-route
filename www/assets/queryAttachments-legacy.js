System.register(["./index-legacy.js","./query-legacy.js","./AttachmentInfo-legacy.js","./pbfQueryUtils-legacy.js","./pbf-legacy.js","./OptimizedGeometry-legacy.js","./OptimizedFeatureSet-legacy.js"],(function(t,e){"use strict";var n,s,a,c,o;return{setters:[t=>{n=t.e8,s=t.e9,a=t.X},t=>{c=t.t},t=>{o=t.a},null,null,null,null],execute:function(){function e(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}t({executeAttachmentQuery:function(t,n,s){let o={query:c({...t.query,f:"json",...e(n)})};return s&&(o={...s,...o,query:{...s.query,...o.query}}),a(t.path+"/queryAttachments",o).then((t=>t.data.attachmentGroups))},fetchAttachments:async function(t,e,n){const{objectIds:s}=e,c=[];for(const o of s)c.push(a(t.path+"/"+o+"/attachments",n));return Promise.all(c).then((t=>s.map(((e,n)=>({parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos})))))},processAttachmentQueryResult:function(t,e){const a={};for(const c of e){const{parentObjectId:e,parentGlobalId:r,attachmentInfos:u}=c;for(const c of u){const{id:u}=c,l=n(s(`${t.path}/${e}/attachments/${u}`)),y=o.fromJSON(c);y.set({url:l,parentObjectId:e,parentGlobalId:r}),a[e]?a[e].push(y):a[e]=[y]}}return a}})}}}));