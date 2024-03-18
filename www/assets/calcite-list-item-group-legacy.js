System.register(["./index-legacy.js","./interactive-legacy.js","./utils3-legacy.js"],(function(t,e){"use strict";var i,a,l,s,n,o,c,d,r,h,u;return{setters:[t=>{i=t.c,a=t.H,l=t.e,s=t.h,n=t.g},t=>{o=t.c,c=t.u,d=t.d,r=t.I},t=>{h=t.g,u=t.M}],execute:function(){
/*!
             * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
             * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
             * v2.6.0
             */
const e="container",g="heading",f=i(class extends a{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalListItemGroupDefaultSlotChange=l(this,"calciteInternalListItemGroupDefaultSlotChange",6),this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()},this.disabled=!1,this.filterHidden=!1,this.heading=void 0,this.visualLevel=null}connectedCallback(){const{el:t}=this;this.visualLevel=h(t,!0),o(this)}componentDidRender(){c(this)}disconnectedCallback(){d(this)}render(){const{disabled:t,heading:i,visualLevel:a}=this;return s(n,null,s(r,{disabled:t},s("tr",{class:e,style:{"--calcite-list-item-spacing-indent-multiplier":`${a}`}},s("td",{class:g,colSpan:u},i)),s("slot",{onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1);--calcite-list-item-spacing-indent:1rem}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;background-color:var(--calcite-color-foreground-2);padding:0.75rem;font-family:var(--calcite-sans-family);font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.heading{padding-inline-start:calc(var(--calcite-list-item-spacing-indent) * var(--calcite-list-item-spacing-indent-multiplier))}::slotted(calcite-list-item){--tw-shadow:0 -1px 0 var(--calcite-color-border-3);--tw-shadow-colored:0 -1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:1px}::slotted(calcite-list-item:nth-child(1 of :not([hidden]))){--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);margin-block-start:0px}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513],visualLevel:[32]}]);function m(){"undefined"!=typeof customElements&&["calcite-list-item-group"].forEach((t=>{"calcite-list-item-group"===t&&(customElements.get(t)||customElements.define(t,f))}))}m(),t("CalciteListItemGroup",f),t("defineCustomElement",m)}}}));