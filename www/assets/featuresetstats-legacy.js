System.register(["./TimeOnly-legacy.js","./arcadeUtils-legacy.js","./WhereClause-legacy.js","./index-legacy.js","./ImmutableArray-legacy.js","./number-legacy.js","./featureConversionUtils-legacy.js","./OptimizedGeometry-legacy.js","./OptimizedFeatureSet-legacy.js"],(function(n,t){"use strict";var e,a,r,i,u,c,s,o,l,f,d,m,g;return{setters:[n=>{e=n.m},n=>{a=n.a,r=n.B,i=n.U,u=n.G,c=n.Q,s=n.b,o=n.r,l=n.P,f=n.v,d=n.q},n=>{m=n.x,g=n.r},null,null,null,null,null,null],execute:function(){async function t(n,t,e,a,u,s){if(1===a.length){if(i(a[0]))return l(n,a[0],f(a[1],-1));if(c(a[0]))return l(n,a[0].toArray(),f(a[1],-1))}else if(2===a.length){if(i(a[0]))return l(n,a[0],f(a[1],-1));if(c(a[0]))return l(n,a[0].toArray(),f(a[1],-1));if(r(a[0])){const e=await a[0].load(),r=await F(m.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),s,u);return y(u,await a[0].calculateStatistic(n,r,f(a[2],1e3),t.abortSignal))}}else if(3===a.length&&r(a[0])){const e=await a[0].load(),r=await F(m.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),s,u);return y(u,await a[0].calculateStatistic(n,r,f(a[2],1e3),t.abortSignal))}return l(n,a,-1)}function y(n,t){return t instanceof g?e.fromReaderAsTimeStampOffset(t.toStorageFormat()):t instanceof Date?e.dateJSAndZoneToArcadeDate(t,d(n)):t}async function F(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i))}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}n("registerFunctions",(function(n){"async"===n.mode&&(n.functions.stdev=function(e,a){return n.standardFunctionAsync(e,a,((a,r,i)=>t("stdev",a,0,i,e,n)))},n.functions.variance=function(e,a){return n.standardFunctionAsync(e,a,((a,r,i)=>t("variance",a,0,i,e,n)))},n.functions.average=function(e,a){return n.standardFunctionAsync(e,a,((a,r,i)=>t("mean",a,0,i,e,n)))},n.functions.mean=function(e,a){return n.standardFunctionAsync(e,a,((a,r,i)=>t("mean",a,0,i,e,n)))},n.functions.sum=function(e,a){return n.standardFunctionAsync(e,a,((a,r,i)=>t("sum",a,0,i,e,n)))},n.functions.min=function(e,a){return n.standardFunctionAsync(e,a,((a,r,i)=>t("min",a,0,i,e,n)))},n.functions.max=function(e,a){return n.standardFunctionAsync(e,a,((a,r,i)=>t("max",a,0,i,e,n)))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,((n,l,f)=>{if(a(f,1,1,t,e),r(f[0]))return f[0].count(n.abortSignal);if(i(f[0])||u(f[0]))return f[0].length;if(c(f[0]))return f[0].length();throw new s(t,o.InvalidParameter,e)}))})}))}}}));
