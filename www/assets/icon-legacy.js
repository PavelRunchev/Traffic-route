System.register(["./index-legacy.js","./dom-legacy.js","./observers-legacy.js"],(function(t,i){"use strict";var e,s,n,a,c,l,o,r;return{setters:[t=>{e=t.c,s=t.H,n=t.h,a=t.g,c=t.aL},t=>{l=t.b,o=t.t},t=>{r=t.c}],execute:function(){t("d",f);
/*!
             * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
             * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
             * v2.6.0
             */
const i="flip-rtl",h={},d={},p={s:16,m:24,l:32};async function u({icon:t,scale:i}){const e=p[i],s=function(t){const i=!isNaN(Number(t.charAt(0))),e=t.split("-");if(e.length>0){const i=/[a-z]/i;t=e.map(((t,e)=>t.replace(i,(function(t,i){return 0===e&&0===i?t:t.toUpperCase()})))).join("")}return i?`i${t}`:t}(t),n="F"===s.charAt(s.length-1),a=`${n?s.substring(0,s.length-1):s}${e}${n?"F":""}`;if(h[a])return h[a];d[a]||(d[a]=fetch(c(`./assets/icon/${a}.json`)).then((t=>t.json())).catch((()=>(console.error(`"${a}" is not a valid calcite-ui-icon name`),""))));const l=await d[a];return h[a]=l,l}const b=t("I",e(class extends s{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.icon=null,this.flipRtl=!1,this.scale="m",this.textLabel=void 0,this.pathData=void 0,this.visible=!1}connectedCallback(){this.waitUntilVisible((()=>{this.visible=!0,this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect(),this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:e,pathData:s,scale:c,textLabel:r}=this,h=l(t),d=p[c],u=!!r,b=[].concat(s||"");return n(a,{"aria-hidden":o(!u),"aria-label":u?r:null,role:u?"img":null},n("svg",{"aria-hidden":"true",class:{[i]:"rtl"===h&&e,svg:!0},fill:"currentColor",height:"100%",viewBox:`0 0 ${d} ${d}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},b.map((t=>n("path","string"==typeof t?{d:t}:{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:i,visible:e}=this;if(!t||!e)return;const s=await u({icon:t,scale:i});t===this.icon&&(this.pathData=s)}waitUntilVisible(t){this.intersectionObserver=r("intersection",(i=>{i.forEach((i=>{i.isIntersecting&&(this.intersectionObserver.disconnect(),this.intersectionObserver=null,t())}))}),{rootMargin:"50px"}),this.intersectionObserver?this.intersectionObserver.observe(this.el):t()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},void 0,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]));function f(){"undefined"!=typeof customElements&&["calcite-icon"].forEach((t=>{"calcite-icon"===t&&(customElements.get(t)||customElements.define(t,b))}))}f()}}}));