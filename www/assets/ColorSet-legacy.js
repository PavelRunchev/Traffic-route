System.register(["./Theme-legacy.js"],(function(e,t){"use strict";var s,r;return{setters:[e=>{s=e.B,r=e.a3}],execute:function(){class t extends s{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1}_beforeChanged(){this.isDirty("colors")&&this.reset()}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const e=this.getPrivate("currentPass"),t=this.get("colors",[this.get("baseColor",r.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",t.length);const s=this.getPrivate("numColors"),i=this.get("passOptions"),a=this.get("reuse");for(let n=0;n<s;n++)if(a)t.push(t[n]);else{const s=t[n].toHSL();let a=s.h+(i.hue||0)*e;for(;a>1;)a-=1;let o=s.s+(i.saturation||0)*e;o>1&&(o=1),o<0&&(o=0);let l=s.l+(i.lightness||0)*e;for(;l>1;)l-=1;t.push(r.fromHSL(a,o,l))}}getIndex(e){const t=this.get("colors",[]),s=this.get("saturation");return e>=t.length?(this.generateColors(),this.getIndex(e)):null!=s?r.saturate(t[e],s):t[e]}next(){let e=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",e+this.get("step",1)),this.getIndex(e)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0)}}e("s",t),Object.defineProperty(t,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(t,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.classNames.concat([t.className])})}}}));