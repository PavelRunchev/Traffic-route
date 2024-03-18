System.register(["./index-legacy.js","./enums-legacy2.js","./definitions-legacy.js"],(function(t,e){"use strict";var r,i,n,s,o,a;return{setters:[t=>{r=t.ai,i=t._,n=t.h8},t=>{s=t.e,o=t.n},t=>{a=t.S}],execute:function(){t({a:function(t,e){const r=Math.max(t.length,l);return h.triangulate(t,e,r)},i:async function(){return u||(u=async function(){const t=r("esri-csp-restrictions")?await i((()=>e.import("./libtess-asm-legacy.js")),void 0,e.meta.url).then((t=>t.l)):await i((()=>e.import("./libtess-legacy.js")),void 0,e.meta.url).then((t=>t.l));h=await t.default({locateFile:t=>n(`esri/core/libs/libtess/${t}`)})}()),u}});const l=128e3;let u=null,h=null;const c=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["«","»"],["»","«"],["‹","›"],["›","‹"],["⁽","⁾"],["⁾","⁽"],["₍","₎"],["₎","₍"],["≤","≥"],["≥","≤"],["〈","〉"],["〉","〈"],["﹙","﹚"],["﹚","﹙"],["﹛","﹜"],["﹜","﹛"],["﹝","﹞"],["﹞","﹝"],["﹤","﹥"],["﹥","﹤"]],x=["آ","أ","إ","ا"],f=["ﻵ","ﻷ","ﻹ","ﻻ"],y=["ﻶ","ﻸ","ﻺ","ﻼ"],_=["ا","ب","ت","ث","ج","ح","خ","د","ذ","ر","ز","س","ش","ص","ض","ط","ظ","ع","غ","ف","ق","ك","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ل","م","ن","ه","و","ي","إ","أ","آ","ة","ى","ی","ئ","ؤ"],T=["ﺍ","ﺏ","ﺕ","ﺙ","ﺝ","ﺡ","ﺥ","ﺩ","ﺫ","ﺭ","ﺯ","ﺱ","ﺵ","ﺹ","ﺽ","ﻁ","ﻅ","ﻉ","ﻍ","ﻑ","ﻕ","ﻙ","ﻝ","ﻡ","ﻥ","ﻩ","ﻭ","ﻱ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯼ","ﺉ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺉ","ﺅ"],d=["ﺎ","ﺐ","ﺖ","ﺚ","ﺞ","ﺢ","ﺦ","ﺪ","ﺬ","ﺮ","ﺰ","ﺲ","ﺶ","ﺺ","ﺾ","ﻂ","ﻆ","ﻊ","ﻎ","ﻒ","ﻖ","ﻚ","ﻞ","ﻢ","ﻦ","ﻪ","ﻮ","ﻲ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯽ","ﺊ","ﺆ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺊ","ﺆ"],g=["ﺎ","ﺒ","ﺘ","ﺜ","ﺠ","ﺤ","ﺨ","ﺪ","ﺬ","ﺮ","ﺰ","ﺴ","ﺸ","ﺼ","ﻀ","ﻄ","ﻈ","ﻌ","ﻐ","ﻔ","ﻘ","ﻜ","ﻠ","ﻤ","ﻨ","ﻬ","ﻮ","ﻴ","ﺈ","ﺄ","ﺂ","ﺔ","ﻰ","ﯿ","ﺌ","ﺆ","ﹱ","ﹲ","ﹴ","ﹷ","ﹹ","ﹻ","ﹽ","ﹿ","ﺀ","ﺌ","ﺆ"],A=["ﺍ","ﺑ","ﺗ","ﺛ","ﺟ","ﺣ","ﺧ","ﺩ","ﺫ","ﺭ","ﺯ","ﺳ","ﺷ","ﺻ","ﺿ","ﻃ","ﻇ","ﻋ","ﻏ","ﻓ","ﻗ","ﻛ","ﻟ","ﻣ","ﻧ","ﻫ","ﻭ","ﻳ","ﺇ","ﺃ","ﺁ","ﺓ","ﻯ","ﯾ","ﺋ","ﺅ","ﹰ","ﹲ","ﹴ","ﹶ","ﹸ","ﹺ","ﹼ","ﹾ","ﺀ","ﺋ","ﺅ"],L=["ء","آ","أ","ؤ","إ","ا","ة","د","ذ","ر","ز","و","ى"],m=["ً","ً","ٌ","؟","ٍ","؟","َ","َ","ُ","ُ","ِ","ِ","ّ","ّ","ْ","ْ","ء","آ","آ","أ","أ","ؤ","ؤ","إ","إ","ئ","ئ","ئ","ئ","ا","ا","ب","ب","ب","ب","ة","ة","ت","ت","ت","ت","ث","ث","ث","ث","ج","ج","ج","ج","ح","ح","ح","ح","خ","خ","خ","خ","د","د","ذ","ذ","ر","ر","ز","ز","س","س","س","س","ش","ش","ش","ش","ص","ص","ص","ص","ض","ض","ض","ض","ط","ط","ط","ط","ظ","ظ","ظ","ظ","ع","ع","ع","ع","غ","غ","غ","غ","ف","ف","ف","ف","ق","ق","ق","ق","ك","ك","ك","ك","ل","ل","ل","ل","م","م","م","م","ن","ن","ن","ن","ه","ه","ه","ه","و","و","ى","ى","ي","ي","ي","ي","ﻵ","ﻶ","ﻷ","ﻸ","ﻹ","ﻺ","ﻻ","ﻼ","؟","؟","؟"],w=["ء","ف"],v=["غ","ي"],b=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],U=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],R=0,B=1,p=2,N=3,F=4,S=5,V=6,E=7,C=8,k=10,M=11,D=12,O=18,j=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],I=100,P=[I+0,R,R,R,R,I+1,I+2,I+3,B,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,I+4,F,F,F,R,F,R,F,R,F,F,F,R,R,F,F,R,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,R,R,F,F,R,R,F,F,R,R,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,R,R,R,I+5,E,E,I+6,I+7],W=[[O,O,O,O,O,O,O,O,O,V,S,V,C,S,O,O,O,O,O,O,O,O,O,O,O,O,O,O,S,S,S,V,C,F,F,M,M,M,F,F,F,F,F,k,9,k,9,9,p,p,p,p,p,p,p,p,p,p,9,F,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,F,O,O,O,O,O,O,S,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,O,9,F,M,M,M,M,F,F,F,F,R,F,F,O,F,F,M,M,p,p,F,R,F,F,F,p,R,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,R,R,R,R,R,R,R,R],[R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,F,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,R,R,R,R,R,R,R,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,R,F,F,F,F,F,F,F,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,B,D,B,D,D,B,D,D,B,D,F,F,F,F,F,F,F,F,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,F,F,F,F,F,B,B,B,B,B,F,F,F,F,F,F,F,F,F,F,F],[N,N,N,N,F,F,F,F,E,M,M,E,9,E,F,F,D,D,D,D,D,D,D,D,D,D,D,E,F,F,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,N,N,N,N,N,N,N,N,N,N,M,N,N,E,E,E,D,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,D,D,D,D,D,D,D,N,F,D,D,D,D,D,D,E,E,D,D,F,D,D,D,D,E,E,p,p,p,p,p,p,p,p,p,p,E,E,E,E,E,E],[E,E,E,E,E,E,E,E,E,E,E,E,E,E,F,E,E,D,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,F,F,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,D,D,D,D,D,D,D,D,D,D,D,E,F,F,F,F,F,F,F,F,F,F,F,F,F,F,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,B,D,D,D,D,D,D,D,D,D,B,B,F,F,F,F,B,F,F,F,F,F],[C,C,C,C,C,C,C,C,C,C,C,O,O,O,R,B,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,C,S,13,14,15,16,17,9,M,M,M,M,M,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,9,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,C,O,O,O,O,O,F,F,F,F,F,O,O,O,O,O,O,p,R,F,F,p,p,p,p,p,p,k,k,F,F,F,R,p,p,p,p,p,p,p,p,p,p,k,k,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,M,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F],[R,R,R,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,F,R,R,R,R,R,F,F,F,F,F,B,D,B,B,B,B,B,B,B,B,B,B,k,B,B,B,B,B,B,B,B,B,B,B,B,B,F,B,B,B,B,B,F,B,F,B,B,F,B,B,F,B,B,B,B,B,B,B,B,B,B,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E],[D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,D,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,D,D,D,D,D,D,D,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,9,F,9,F,F,9,F,F,F,F,F,F,F,F,F,M,F,F,k,k,F,F,F,F,F,M,M,F,F,F,F,F,E,E,E,E,E,F,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,E,F,F,O],[F,F,F,M,M,M,F,F,F,F,F,k,9,k,9,9,p,p,p,p,p,p,p,p,p,p,9,F,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,F,F,F,F,F,F,F,F,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,R,F,F,F,R,R,R,R,R,R,F,F,R,R,R,R,R,R,F,F,R,R,R,R,R,R,F,F,R,R,R,F,F,F,M,M,F,F,F,M,M,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F,F]];function Y(t,e,r,i,n){const s=function(t,e,r){if(void 0===e.inFormat&&(e.inFormat=r.defInFormat),void 0===e.outFormat&&(e.outFormat=r.defOutFormat),void 0===e.swap&&(e.swap=r.defSwap),e.inFormat===e.outFormat)return e;const i=e.inFormat.substring(0,1),n=e.outFormat.substring(0,1);let s,o=e.inFormat.substring(1,4),a=e.outFormat.substring(1,4);return"C"===o.charAt(0)&&(s=q(t),o="ltr"===s||"rtl"===s?s.toUpperCase():"L"===e.inFormat.charAt(2)?"LTR":"RTL",e.inFormat=i+o),"C"===a.charAt(0)&&(s=q(t),"rtl"===s?a="RTL":"ltr"===s?(s=function(t){const e=t.split("");return e.reverse(),q(e.join(""))}(t),a=s.toUpperCase()):a="L"===e.outFormat.charAt(2)?"LTR":"RTL",e.outFormat=n+a),e}(t,{inFormat:e,outFormat:r,swap:i},n);if(s.inFormat===s.outFormat)return t;e=s.inFormat,r=s.outFormat,i=s.swap;const o=e.substring(0,1),a=e.substring(1,4),l=r.substring(0,1),u=r.substring(1,4);if(n.inFormat=e,n.outFormat=r,n.swap=i,"L"===o&&"VLTR"===r){if("LTR"===a)return n.dir=Tt,z(t,n);if("RTL"===a)return n.dir=dt,z(t,n)}if("V"===o&&"V"===l)return n.dir="RTL"===a?dt:Tt,$(t,n);if("L"===o&&"VRTL"===r)return"LTR"===a?(n.dir=Tt,t=z(t,n)):(n.dir=dt,t=z(t,n)),$(t);if("VLTR"===e&&"LLTR"===r)return n.dir=Tt,z(t,n);if("V"===o&&"L"===l&&a!==u)return t=$(t),"RTL"===a?Y(t,"LLTR","VLTR",i,n):Y(t,"LRTL","VRTL",i,n);if("VRTL"===e&&"LRTL"===r)return Y(t,"LRTL","VRTL",i,n);if("L"===o&&"L"===l){const e=n.swap;return n.swap=e.substr(0,1)+"N","RTL"===a?(n.dir=dt,t=z(t,n),n.swap="N"+e.substr(1,2),n.dir=Tt,t=z(t,n)):(n.dir=Tt,t=z(t,n),n.swap="N"+e.substr(1,2),t=Y(t,"VLTR","LRTL",n.swap,n)),t}return t}function q(t){const e=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(t);return e?e[0]<="z"?"ltr":"rtl":""}function z(t,e){const r=t.split(""),i=[];return Q(r,i,e),function(t,e,r){if(0!==r.hiLevel&&r.swap.substr(0,1)!==r.swap.substr(1,2))for(let i=0;i<t.length;i++)1===e[i]&&(t[i]=et(t[i]))}(r,i,e),K(2,r,i,e),K(1,r,i,e),xt=i,r.join("")}function Q(t,e,r){const i=t.length,n=r.dir?U:b;let s=0,o=-1;const a=[],l=[];r.hiLevel=r.dir,r.lastArabic=!1,r.hasUbatAl=!1,r.hasUbatB=!1,r.hasUbatS=!1;for(let u=0;u<i;u++)a[u]=X(t[u]);for(let u=0;u<i;u++){const i=s,h=tt(t,a,l,u,r);l[u]=h,s=n[i][h];const c=240&s;s&=15;const x=n[s][yt];if(e[u]=x,c>0)if(16===c){for(let t=o;t<u;t++)e[t]=1;o=-1}else o=-1;if(n[s][_t])-1===o&&(o=u);else if(o>-1){for(let t=o;t<u;t++)e[t]=x;o=-1}a[u]===S&&(e[u]=0),r.hiLevel|=x}r.hasUbatS&&function(t,e,r,i){for(let n=0;n<r;n++)if(t[n]===V){e[n]=i.dir;for(let r=n-1;r>=0&&t[r]===C;r--)e[r]=i.dir}}(a,e,i,r)}function X(t){const e=t.charCodeAt(0),r=P[e>>8];return r<I?r:W[r-I][255&e]}function $(t,e){const r=t.split("");if(e){const t=[];Q(r,t,e),xt=t}return r.reverse(),ht.reverse(),r.join("")}function Z(t,e,r){for(let i=0;i<e;i++)if(t[i]===r)return i;return-1}function G(t){for(let e=0;e<w.length;e++)if(t>=w[e]&&t<=v[e])return!0;return!1}function H(t,e,r,i){for(;e*r<i&&st(t[e]);)e+=r;return!!(e*r<i&&G(t[e]))}function J(t,e,r,i){for(;e*r<i&&st(t[e]);)e+=r;let n=" ";if(!(e*r<i))return!1;n=t[e];for(let s=0;s<x.length;s++)if(x[s]===n)return!0;return!1}function K(t,e,r,i){if(i.hiLevel<t)return;if(1===t&&i.dir===dt&&!i.hasUbatB)return e.reverse(),void ht.reverse();const n=e.length;let s,o,a,l,u,h=0;for(;h<n;){if(r[h]>=t){for(s=h+1;s<n&&r[s]>=t;)s++;for(o=h,a=s-1;o<a;o++,a--)l=e[o],e[o]=e[a],e[a]=l,u=ht[o],ht[o]=ht[a],ht[a]=u;h=s}h++}}function tt(t,e,r,i,n){const s=e[i];return{UBAT_L:()=>(n.lastArabic=!1,R),UBAT_R:()=>(n.lastArabic=!1,B),UBAT_ON:()=>F,UBAT_AN:()=>N,UBAT_EN:()=>n.lastArabic?N:p,UBAT_AL:()=>(n.lastArabic=!0,n.hasUbatAl=!0,B),UBAT_WS:()=>F,UBAT_CS:()=>{let t,s;return i<1||i+1>=e.length||(t=r[i-1])!==p&&t!==N||(s=e[i+1])!==p&&s!==N?F:(n.lastArabic&&(s=N),s===t?s:F)},UBAT_ES:()=>(i>0?r[i-1]:S)===p&&i+1<e.length&&e[i+1]===p?p:F,UBAT_ET:()=>{if(i>0&&r[i-1]===p)return p;if(n.lastArabic)return F;let t=i+1;const s=e.length;for(;t<s&&e[t]===M;)t++;return t<s&&e[t]===p?p:F},UBAT_NSM:()=>{if("VLTR"===n.inFormat){const r=e.length;let n=i+1;for(;n<r&&e[n]===D;)n++;if(n<r){const r=t[i].charCodeAt(0),s=r>=1425&&r<=2303||64286===r,o=e[n];if(s&&(o===B||o===E))return B}}return i<1||e[i-1]===S?F:r[i-1]},UBAT_B:()=>(n.lastArabic=!0,n.hasUbatB=!0,n.dir),UBAT_S:()=>(n.hasUbatS=!0,F),UBAT_LRE:()=>(n.lastArabic=!1,F),UBAT_RLE:()=>(n.lastArabic=!1,F),UBAT_LRO:()=>(n.lastArabic=!1,F),UBAT_RLO:()=>(n.lastArabic=!1,F),UBAT_PDF:()=>(n.lastArabic=!1,F),UBAT_BN:()=>F}[j[s]]()}function et(t){let e,r=0,i=c.length-1;for(;r<=i;)if(e=Math.floor((r+i)/2),t<c[e][0])i=e-1;else{if(!(t>c[e][0]))return c[e][1];r=e+1}return t}function rt(t){for(let e=0;e<L.length;e++)if(L[e]===t)return!0;return!1}function it(t){for(let e=0;e<_.length;e++)if(t===_[e])return g[e];return t}function nt(t,e){for(let r=0;r<_.length;r++)if(t===_[r])return e[r];return t}function st(t){return t>="ً"&&t<="ٕ"}function ot(t){return"L"===t?"LTR":"R"===t?"RTL":"C"===t?"CLR":"D"===t?"CRL":""}function at(t,e,r,i){for(;e*r<i&&st(t[e]);)e+=r;return e*r<i&&(t[e]=" ",!0)}function lt(t,e){for(let r=0;r<x.length;r++)if(t===x[r])return e[r];return t}function ut(t,e,r,i){for(let n=0;n<t.length;n++)(t[n]>e||!r&&t[n]===e)&&(t[n]+=i)}t("C",class{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(t,e,r){if(this.sourceToTarget=[],this.targetToSource=[],!t)return"";if(function(t,e,r){ht=[],xt=[];for(let i=0;i<r;i++)t[i]=i,e[i]=i,ht[i]=i}(this.sourceToTarget,this.targetToSource,t.length),!this.checkParameters(e,r))return t;e=this.inputFormat,r=this.outputFormat;let i=t;const n=ft,s=ot(e.charAt(1)),o=ot(r.charAt(1)),a=("I"===e.charAt(0)?"L":e.charAt(0))+s,l=("I"===r.charAt(0)?"L":r.charAt(0))+o,u=e.charAt(2)+r.charAt(2);n.defInFormat=a,n.defOutFormat=l,n.defSwap=u;const h=Y(t,a,l,u,n);let c=!1;return"R"===r.charAt(1)?c=!0:"C"!==r.charAt(1)&&"D"!==r.charAt(1)||(c="rtl"===this.checkContextual(h)),this.sourceToTarget=ht,this.targetToSource=function(t){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[t[r]]=r;return e}(this.sourceToTarget),ct=this.targetToSource,i=e.charAt(3)===r.charAt(3)?h:"S"===r.charAt(3)?function(t,e,r){if(0===e.length)return"";void 0===t&&(t=!0),void 0===r&&(r=!0);const i=(e=String(e)).split("");let n=0,s=1,o=i.length;t||(n=i.length-1,s=-1,o=1);const a=function(t,e,r,i,n){let s=0;const o=[];let a=0;for(let l=e;l*r<i;l+=r)if(G(t[l])||st(t[l])){if("ل"===t[l]&&J(t,l+r,r,i)){t[l]=lt(t[l+r],0===s?f:y),l+=r,at(t,l,r,i),n&&(o[a]=l,a++),s=0;continue}const e=t[l];1===s?t[l]=H(t,l+r,r,i)?it(t[l]):nt(t[l],d):!0===H(t,l+r,r,i)?t[l]=nt(t[l],A):t[l]=nt(t[l],T),st(e)||(s=1),!0===rt(e)&&(s=0)}else s=0;return o}(i,n,s,o,r);let l="";for(let u=0;u<i.length;u++)r&&Z(a,a.length,u)>-1?(ut(ct,u,!t,-1),ht.splice(u,1)):l+=i[u];return l}(c,h,!0):function(t,e,r){if(0===t.length)return"";void 0===r&&(r=!0),void 0===e&&(e=!0);let i="";const n=(t=String(t)).split("");for(let s=0;s<t.length;s++){let o=!1;if(n[s]>="ﹰ"&&n[s]<"\ufeff"){const a=t.charCodeAt(s);n[s]>="ﻵ"&&n[s]<="ﻼ"?(e?(s>0&&r&&" "===n[s-1]?i=i.substring(0,i.length-1)+"ل":(i+="ل",o=!0),i+=x[(a-65269)/2]):(i+=x[(a-65269)/2],i+="ل",s+1<t.length&&r&&" "===n[s+1]?s++:o=!0),o&&(ut(ct,s,!0,1),ht.splice(s,0,ht[s]))):i+=m[a-65136]}else i+=n[s]}return i}(h,c,!0),this.sourceToTarget=ht,this.targetToSource=ct,this.levels=xt,i}_inputFormatSetter(t){if(!gt.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=t}_outputFormatSetter(t){if(!gt.test(t))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=t}checkParameters(t,e){return t?this._inputFormatSetter(t):t=this.inputFormat,e?this._outputFormatSetter(e):e=this.outputFormat,t!==e}checkContextual(t){let e=q(t);if("ltr"!==e&&"rtl"!==e){try{e=document.dir.toLowerCase()}catch(U){}"ltr"!==e&&"rtl"!==e&&(e="ltr")}return e}hasBidiChar(t){return At.test(t)}});let ht=[],ct=[],xt=[];const ft={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},yt=5,_t=6,Tt=0,dt=1,gt=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,At=/[\u0591-\u06ff\ufb1d-\ufefc]/;function Lt(t,e){return t.x===e.x&&t.y===e.y}function mt(t){if(!t)return;const e=t.length;if(e<=1)return;let r=0;for(let i=1;i<e;i++)Lt(t[i],t[r])||++r===i||(t[r]=t[i]);t.length=r+1}function wt(t,e){return t.x=e.y,t.y=-e.x,t}function vt(t,e){return t.x=-e.y,t.y=e.x,t}function bt(t,e){return t.x=e.x,t.y=e.y,t}function Ut(t,e){return t.x=-e.x,t.y=-e.y,t}function Rt(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function Bt(t,e){return t.x*e.y-t.y*e.x}function pt(t,e){return t.x*e.x+t.y*e.y}function Nt(t,e,r,i){return t.x=e.x*r+e.y*i,t.y=e.x*i-e.y*r,t}t("c",class{constructor(t,e,r){this._writeVertex=t,this._writeTriangle=e,this._canUseThinTessellation=r,this._prevNormal={x:void 0,y:void 0},this._nextNormal={x:void 0,y:void 0},this._textureNormalLeft={x:0,y:1},this._textureNormalRight={x:0,y:-1},this._textureNormal={x:void 0,y:void 0},this._joinNormal={x:void 0,y:void 0},this._inner={x:void 0,y:void 0},this._outer={x:void 0,y:void 0},this._roundStart={x:void 0,y:void 0},this._roundEnd={x:void 0,y:void 0},this._startBreak={x:void 0,y:void 0},this._endBreak={x:void 0,y:void 0},this._innerPrev={x:void 0,y:void 0},this._innerNext={x:void 0,y:void 0},this._bevelStart={x:void 0,y:void 0},this._bevelEnd={x:void 0,y:void 0},this._bevelMiddle={x:void 0,y:void 0}}tessellate(t,e,r=this._canUseThinTessellation){mt(t),r&&e.halfWidth<a&&!e.offset?this._tessellateThin(t,e):this._tessellate(t,e)}_tessellateThin(t,e){if(t.length<2)return;const r=e.wrapDistance||65535;let i=e.initialDistance||0,n=!1,s=t[0].x,o=t[0].y;const a=t.length;for(let l=1;l<a;++l){n&&(n=!1,i=0);let e=t[l].x,a=t[l].y,u=e-s,h=a-o,c=Math.sqrt(u*u+h*h);if(u/=c,h/=c,i+c>r){n=!0;const t=(r-i)/c;c=r-i,e=(1-t)*s+t*e,a=(1-t)*o+t*a,--l}const x=this._writeVertex(s,o,0,0,u,h,h,-u,0,-1,i),f=this._writeVertex(s,o,0,0,u,h,-h,u,0,1,i);i+=c;const y=this._writeVertex(e,a,0,0,u,h,h,-u,0,-1,i),_=this._writeVertex(e,a,0,0,u,h,-h,u,0,1,i);this._writeTriangle(x,f,y),this._writeTriangle(f,y,_),s=e,o=a}}_tessellate(t,e){const r=t[0],i=t[t.length-1],n=Lt(r,i),a=n?3:2;if(t.length<a)return;const l=e.pixelCoordRatio,u=null!=e.capType?e.capType:s.BUTT,h=null!=e.joinType?e.joinType:o.MITER,c=null!=e.miterLimit?Math.min(e.miterLimit,4):2,x=null!=e.roundLimit?Math.min(e.roundLimit,1.05):1.05,f=null!=e.halfWidth?e.halfWidth:2,y=!!e.textured;let _,T,d,g=null;const A=this._prevNormal,L=this._nextNormal;let m=-1,w=-1;const v=this._joinNormal;let b,U;const R=this._textureNormalLeft,B=this._textureNormalRight,p=this._textureNormal;let N=-1,F=-1;const S=e.wrapDistance||65535;let V=e.initialDistance||0;const E=this._writeVertex,C=this._writeTriangle,k=(t,e,r,i,n,s)=>{const o=E(T,d,b,U,r,i,t,e,n,s,V);return N>=0&&F>=0&&o>=0&&C(N,F,o),N=F,F=o,o};n&&(_=t[t.length-2],L.x=i.x-_.x,L.y=i.y-_.y,w=Rt(L),L.x/=w,L.y/=w);let M=!1;for(let D=0;D<t.length;++D){if(M&&(M=!1,V=0),_&&(A.x=-L.x,A.y=-L.y,m=w,V+m>S&&(M=!0)),M){const e=(S-V)/m;m=S-V,_={x:(1-e)*_.x+e*t[D].x,y:(1-e)*_.y+e*t[D].y},--D}else _=t[D];T=_.x,d=_.y;const e=D<=0&&!M,r=D===t.length-1;if(e||(V+=m),g=r?n?t[1]:null:t[D+1],g?(L.x=g.x-T,L.y=g.y-d,w=Rt(L),L.x/=w,L.y/=w):(L.x=void 0,L.y=void 0),!n){if(e){vt(v,L),b=v.x,U=v.y,u===s.SQUARE&&(k(-L.y-L.x,L.x-L.y,L.x,L.y,0,-1),k(L.y-L.x,-L.x-L.y,L.x,L.y,0,1)),u===s.ROUND&&(k(-L.y-L.x,L.x-L.y,L.x,L.y,-1,-1),k(L.y-L.x,-L.x-L.y,L.x,L.y,-1,1)),u!==s.ROUND&&u!==s.BUTT||(k(-L.y,L.x,L.x,L.y,0,-1),k(L.y,-L.x,L.x,L.y,0,1));continue}if(r){wt(v,A),b=v.x,U=v.y,u!==s.ROUND&&u!==s.BUTT||(k(A.y,-A.x,-A.x,-A.y,0,-1),k(-A.y,A.x,-A.x,-A.y,0,1)),u===s.SQUARE&&(k(A.y-A.x,-A.x-A.y,-A.x,-A.y,0,-1),k(-A.y-A.x,A.x-A.y,-A.x,-A.y,0,1)),u===s.ROUND&&(k(A.y-A.x,-A.x-A.y,-A.x,-A.y,1,-1),k(-A.y-A.x,A.x-A.y,-A.x,-A.y,1,1));continue}}let i,a,E=-Bt(A,L);if(Math.abs(E)<.01)pt(A,L)>0?(v.x=A.x,v.y=A.y,E=1,i=Number.MAX_VALUE,a=!0):(vt(v,L),E=1,i=1,a=!1);else{v.x=(A.x+L.x)/E,v.y=(A.y+L.y)/E,i=Rt(v);const t=(i-1)*f*l;a=i>4||t>m&&t>w}b=v.x,U=v.y;let C=h;switch(h){case o.BEVEL:i<1.05&&(C=o.MITER);break;case o.ROUND:i<x&&(C=o.MITER);break;case o.MITER:i>c&&(C=o.BEVEL)}switch(C){case o.MITER:if(k(v.x,v.y,-A.x,-A.y,0,-1),k(-v.x,-v.y,-A.x,-A.y,0,1),r)break;if(y){const t=M?0:V;N=this._writeVertex(T,d,b,U,L.x,L.y,v.x,v.y,0,-1,t),F=this._writeVertex(T,d,b,U,L.x,L.y,-v.x,-v.y,0,1,t)}break;case o.BEVEL:{const t=E<0;let e,i,n,s;if(t){const t=N;N=F,F=t,e=R,i=B}else e=B,i=R;if(a)n=t?vt(this._innerPrev,A):wt(this._innerPrev,A),s=t?wt(this._innerNext,L):vt(this._innerNext,L);else{const e=t?Ut(this._inner,v):bt(this._inner,v);n=e,s=e}const o=t?wt(this._bevelStart,A):vt(this._bevelStart,A);k(n.x,n.y,-A.x,-A.y,e.x,e.y);const l=k(o.x,o.y,-A.x,-A.y,i.x,i.y);if(r)break;const u=t?vt(this._bevelEnd,L):wt(this._bevelEnd,L);if(a){const t=this._writeVertex(T,d,b,U,-A.x,-A.y,0,0,0,0,V);N=this._writeVertex(T,d,b,U,L.x,L.y,s.x,s.y,e.x,e.y,V),F=this._writeVertex(T,d,b,U,L.x,L.y,u.x,u.y,i.x,i.y,V),this._writeTriangle(l,t,F)}else{if(y){const t=this._bevelMiddle;t.x=(o.x+u.x)/2,t.y=(o.y+u.y)/2,Nt(p,t,-A.x,-A.y),k(t.x,t.y,-A.x,-A.y,p.x,p.y),Nt(p,t,L.x,L.y),N=this._writeVertex(T,d,b,U,L.x,L.y,t.x,t.y,p.x,p.y,V),F=this._writeVertex(T,d,b,U,L.x,L.y,s.x,s.y,e.x,e.y,V)}else{const t=N;N=F,F=t}k(u.x,u.y,L.x,L.y,i.x,i.y)}if(t){const t=N;N=F,F=t}break}case o.ROUND:{const t=E<0;let e,n;if(t){const t=N;N=F,F=t,e=R,n=B}else e=B,n=R;const s=t?Ut(this._inner,v):bt(this._inner,v);let o,l;a?(o=t?vt(this._innerPrev,A):wt(this._innerPrev,A),l=t?wt(this._innerNext,L):vt(this._innerNext,L)):(o=s,l=s);const u=t?wt(this._roundStart,A):vt(this._roundStart,A),h=t?vt(this._roundEnd,L):wt(this._roundEnd,L),c=k(o.x,o.y,-A.x,-A.y,e.x,e.y),x=k(u.x,u.y,-A.x,-A.y,n.x,n.y);if(r)break;const f=this._writeVertex(T,d,b,U,-A.x,-A.y,0,0,0,0,V);a||this._writeTriangle(N,F,f);const _=Ut(this._outer,s),g=this._writeVertex(T,d,b,U,L.x,L.y,h.x,h.y,n.x,n.y,V);let m,w;const S=i>2;if(S){let e;i!==Number.MAX_VALUE?(_.x/=i,_.y/=i,e=pt(A,_),e=(i*(e*e-1)+1)/e):e=-1,m=t?wt(this._startBreak,A):vt(this._startBreak,A),m.x+=A.x*e,m.y+=A.y*e,w=t?vt(this._endBreak,L):wt(this._endBreak,L),w.x+=L.x*e,w.y+=L.y*e}Nt(p,_,-A.x,-A.y);const C=this._writeVertex(T,d,b,U,-A.x,-A.y,_.x,_.y,p.x,p.y,V);Nt(p,_,L.x,L.y);const M=y?this._writeVertex(T,d,b,U,L.x,L.y,_.x,_.y,p.x,p.y,V):C,D=f,O=y?this._writeVertex(T,d,b,U,L.x,L.y,0,0,0,0,V):f;let j=-1,I=-1;if(S&&(Nt(p,m,-A.x,-A.y),j=this._writeVertex(T,d,b,U,-A.x,-A.y,m.x,m.y,p.x,p.y,V),Nt(p,w,L.x,L.y),I=this._writeVertex(T,d,b,U,L.x,L.y,w.x,w.y,p.x,p.y,V)),y?S?(this._writeTriangle(D,x,j),this._writeTriangle(D,j,C),this._writeTriangle(O,M,I),this._writeTriangle(O,I,g)):(this._writeTriangle(D,x,C),this._writeTriangle(O,M,g)):S?(this._writeTriangle(f,x,j),this._writeTriangle(f,j,I),this._writeTriangle(f,I,g)):(this._writeTriangle(f,x,C),this._writeTriangle(f,M,g)),a?(N=this._writeVertex(T,d,b,U,L.x,L.y,l.x,l.y,e.x,e.y,V),F=g):(N=y?this._writeVertex(T,d,b,U,L.x,L.y,l.x,l.y,e.x,e.y,V):c,this._writeTriangle(N,O,g),F=g),t){const t=N;N=F,F=t}break}}}}})}}}));