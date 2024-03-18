System.register(["./index-legacy.js"],(function(t,l){"use strict";var e,i,s;return{setters:[t=>{e=t.bF,i=t.s,s=t.o}],execute:function(){t("e",class{constructor(t,l=0,e=t.lods[t.lods.length-1].level){this.tileInfo=t,this.minLOD=l,this.maxLOD=e,t.lodAt(l)||(this.minLOD=t.lods[0].level),t.lodAt(e)||(this.maxLOD=t.lods[t.lods.length-1].level)}get effectiveMinLOD(){return this.minLOD??this.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.tileInfo.lods[this.tileInfo.lods.length-1].level}getAvailability(t,l,e){const i=this.tileInfo?.lodAt(t);return!i||t<this.minLOD||t>this.maxLOD?"unavailable":i.cols&&i.rows?e>=i.cols[0]&&e<=i.cols[1]&&l>=i.rows[0]&&l<=i.rows[1]?"unknown":"unavailable":"unknown"}async fetchAvailability(t,l,s,a){await e(a);const n=this.getAvailability(t,l,s);if("unavailable"===n)throw new i("tile-map:tile-unavailable","Tile is not available",{level:t,row:l,col:s});return n}async fetchAvailabilityUpsample(t,l,i,a,n){await e(n),a.level=t,a.row=l,a.col=i;const o=this.tileInfo;return o.updateTileInfo(a),this.fetchAvailability(t,l,i,n).catch((t=>{if(s(t))throw t;if(o.upsampleTile(a))return this.fetchAvailabilityUpsample(a.level,a.row,a.col,a,n);throw t}))}})}}}));