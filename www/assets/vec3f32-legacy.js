System.register([],(function(n,t){"use strict";return{execute:function(){function t(){return new Float32Array(3)}function r(n){const t=new Float32Array(3);return t[0]=n[0],t[1]=n[1],t[2]=n[2],t}function e(n,t,r){const e=new Float32Array(3);return e[0]=n,e[1]=t,e[2]=r,e}function u(){return t()}function o(){return e(1,1,1)}function c(){return e(1,0,0)}function i(){return e(0,1,0)}function f(){return e(0,0,1)}n({n:t,r:e,t:r});const a=u(),l=o(),s=c(),y=i(),_=f();Object.freeze(Object.defineProperty({__proto__:null,ONES:l,UNIT_X:s,UNIT_Y:y,UNIT_Z:_,ZEROS:a,clone:r,create:t,createView:function(n,t){return new Float32Array(n,t,3)},fromValues:e,ones:o,unitX:c,unitY:i,unitZ:f,zeros:u},Symbol.toStringTag,{value:"Module"}))}}}));