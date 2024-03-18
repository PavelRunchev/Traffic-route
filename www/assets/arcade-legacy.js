System.register(["./index-legacy.js","./TimeOnly-legacy.js","./ImmutableArray-legacy.js"],(function(e,t){"use strict";var a,r,n,o,c,s,i,l,u,p,f;return{setters:[e=>{a=e.s,r=e.ax,n=e.c2,o=e.an,c=e.M,s=e.E,i=e.dQ},e=>{l=e.n,u=e.a,p=e.m},e=>{f=e.t}],execute:function(){e({createArcadeExecutor:async function(e,r,o={}){t||(t=await n());const{arcade:c,arcadeUtils:s}=t,{loadScriptDependencies:i,referencesMember:l,scriptIsAsync:u}=c,p=S(r.variables,[]),f=p.filter((e=>"featureSet"===e.type||"featureSetCollection"===e.type)).map((e=>e.name.toLowerCase())),y=c.parseScript(e,f);if(!y)throw new a("arcade:invalid-script","Unable to create SyntaxTree");const m=s.extractFieldNames(y),d=c.scriptTouchesGeometry(y),b=p.map((e=>e.name.toLowerCase())).filter((e=>l(y,e))),v=u(y,f);await i(y,v,f);const $={vars:{},spatialReference:null,useAsync:v};for(const t of b)$.vars[t]="any";const{lruCache:h}=o,C=c.compileScript(y,$),A=c.featureSetUtils(),{services:x}=o;return{execute:(e,t={})=>{if(v)throw new a("arcade:invalid-execution-mode","Cannot execute the script in synchronous mode");const n=C(g(r,e,{lruCache:h,...t},A,v));return t.rawOutput?n:w(n,s)},executeAsync:async(e,t={})=>{const a=await C(g(r,e,{lruCache:h,services:x,...t},A,v));return t.rawOutput?a:w(a,s)},isAsync:v,variablesUsed:b,fieldsUsed:m,geometryUsed:d,syntaxTree:y}},createArcadeProfile:function(e){const t=C.get(e);if(!t){const t=Array.from(C.keys()).map((e=>`'${e}'`)).join(", ");throw new a("createArcadeProfile:invalid-profile-name",`Invalid profile name '${e}'. You must specify one of the following values: ${t}`)}return r(t)}});let t=null;function y(e,t,a,r={}){const n=t.elementType,o="value",c="array"===n.type?[{name:o,type:n.type,elementType:n.elementType}]:"dictionary"===n.type?[{name:o,type:n.type,properties:n.properties}]:[{name:o,type:n.type}];return new f(e.map((e=>{const t={};return v(t,c,{[o]:e},a,r),t[o]})))}function m(e,t,a={}){const r=e instanceof s?new i({source:e.features,geometryType:e.geometryType,fields:e.fields,spatialReference:e.spatialReference}):e;return t.constructFeatureSet(r,a.spatialReference,null,!0,a.lruCache,a.interceptor)}function d(e,t,a={}){const{spatialReference:r,interceptor:n,lruCache:o}=a;return"string"==typeof e?t.createFeatureSetCollectionFromService(e,r,o,n):t.createFeatureSetCollectionFromMap(e,r,o,n)}function b(e,a,r,n={}){const o={};return v(o,a.properties,e,r,n),new t.Dictionary(o)}function v(e,a,r,n,o={}){const c={};for(const t of Object.keys(r))c[t.toLowerCase()]=r[t];for(const s of a){const a=s.name.toLowerCase();if(o.variablesPreProcessed)e[a]=c[a];else switch(s.type){case"array":{const t=c[a];e[a]=null==t?null:y(t,s,n,o);break}case"feature":{const r=c[a];e[a]=null==r?null:t.Feature.createFromGraphic(r,o?.timeZone);break}case"featureSet":{const t=c[a];e[a]=null==t?null:n?m(t,n,o):null;break}case"featureSetCollection":{const t=c[a];e[a]=null==t?null:n?d(t,n,o):null;break}case"dictionary":{const t=c[a];e[a]=null==t?null:b(t,s,n,o);break}case"date":{const t=c[a];e[a]=t?t instanceof p?t:o?.timeZone?p.dateJSAndZoneToArcadeDate(t,o?.timeZone):p.dateJSToArcadeDate(t):null;break}case"dateOnly":{const t=c[a];e[a]=t?t instanceof u?t:u.fromReader(t):null;break}case"time":{const t=c[a];e[a]=t?t instanceof l?t:l.fromReader(t):null;break}case"knowledgeGraph":case"geometry":case"boolean":case"text":case"number":e[a]=c[a]}}}function S(e,t){for(const a of e)t.push(a),"dictionary"===a.type&&S(a.properties,t);return t}function g(e,t,a,r,n){const{spatialReference:c,interceptor:s,lruCache:i,console:l,abortSignal:u,timeZone:p,services:f={portal:o.getDefault()}}=a,y={vars:{},spatialReference:c,interceptor:s,timeZone:p,lrucache:i,useAsync:n,services:f,console:l,abortSignal:u};return t?(v(y.vars,e.variables,t,r,a),y):y}function w(e,t){switch(t.getArcadeType(e)){case"number":case"text":case"boolean":case"point":case"polygon":case"polyline":case"multipoint":case"extent":return e;case"date":return e.toJSDate();case"time":case"dateOnly":return e.toString();case"feature":{const t=(e.type,e),a="geometry"in t?t.geometry():null,r="readAttributes"in t?t.readAttributes():t.attributes;return new c({geometry:a,attributes:r})}case"dictionary":{const a=e,r=a.attributes,n={};for(const e of Object.keys(r))n[e]=w(a.field(e),t);return n}case"array":return("toArray"in e?e.toArray():e).map((e=>w(e,t)))}return e}const $={variables:[{name:"$feature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$userInput",type:"geometry"},{name:"$graph",type:"knowledgeGraph"}]},h={variables:[{name:"$feature",type:"feature"},{name:"$aggregatedFeatures",type:"featureSet"}]},C=new Map([["form-constraint",{variables:[{name:"$feature",type:"feature"}]}],["feature-z",{variables:[{name:"$feature",type:"feature"}]}],["field-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$datastore",type:"featureSetCollection"}]}],["form-calculation",{variables:[{name:"$feature",type:"feature"},{name:"$originalFeature",type:"feature"},{name:"$layer",type:"featureSet"},{name:"$featureSet",type:"featureSet"},{name:"$datastore",type:"featureSetCollection"},{name:"$map",type:"featureSetCollection"},{name:"$editContext",type:"dictionary",properties:[{name:"editType",type:"text"}]}]}],["labeling",{variables:[{name:"$feature",type:"feature"}]}],["popup",$],["popup-element",$],["feature-reduction-popup",h],["feature-reduction-popup-element",h],["visualization",{variables:[{name:"$feature",type:"feature"},{name:"$view",type:"dictionary",properties:[{name:"scale",type:"number"}]}]}]])}}}));