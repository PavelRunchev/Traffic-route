System.register(["./index-legacy.js"],(function(t,e){"use strict";var a,n,r,i,o,c;return{setters:[t=>{a=t._,n=t.U,r=t.W,i=t.X,o=t.o,c=t.s}],execute:function(){t({c:function(t,e,a,n){if(!e||!a)throw new Error("Cannot construct image data without dimensions");if(u)try{return new ImageData(t,e,a)}catch(s){u=!1}const r=f(e,a,n);return r.data.set(t,0),r},p:async function(t,n){const{arrayBuffer:r,mediaType:s}=await d(t,n),f="image/png"===s;if("image/gif"===s){const{isAnimatedGIF:t,parseGif:i}=await a((()=>e.import("./gif-legacy.js")),void 0,e.meta.url);if(t(r))return i(r,n)}if(f){const{isAnimatedPNG:t,parseApng:i}=await a((()=>e.import("./apng-legacy.js")),void 0,e.meta.url);if(t(r))return i(r,n)}return async function(t,e){const a=window.URL.createObjectURL(t);try{const{data:t}=await i(a,{...e,responseType:"image"});return t}catch(u){if(!o(u))throw new c("invalid-image",`Could not fetch requested image at ${a}`);throw u}finally{window.URL.revokeObjectURL(a)}}(new Blob([r],{type:s}),n)},s:function(t,e,a){if(!t||!e)throw new Error("Cannot construct image data without dimensions");if(u)try{return new ImageData(t,e)}catch(n){u=!1}return f(t,e,a)}});let s=null,u=!0;function f(t,e,a){return a||(s||(s=document.createElement("canvas"),s.width=1,s.height=1),a=s),a.getContext("2d").createImageData(t,e)}async function d(t,e){const a=n(t);if(a?.isBase64)return{arrayBuffer:r(a.data),mediaType:a.mediaType};const o=await i(t,{responseType:"array-buffer",...e});return{arrayBuffer:o.data,mediaType:o.getHeader?.("Content-Type")??""}}}}}));