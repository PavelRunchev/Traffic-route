System.register(["./index-legacy.js","./enums-legacy.js","./enums-legacy2.js","./Texture-legacy.js","./Program-legacy.js","./VertexElementDescriptor-legacy.js"],(function(t,e){"use strict";var r,n,s,i,o,a,h,c,u,f,l;return{setters:[t=>{r=t.jj,n=t.eL,s=t.jk,i=t.s,o=t.w},t=>{a=t.C,h=t.U},null,t=>{c=t.s,u=t.e,f=t.m},null,t=>{l=t.t}],execute:function(){t({M:function(t){return"url"in t&&"urlHash"in t?{...t,url:""}:t},T:function(t,e,r){const n=new u(e.width,e.height);return n.dataType=e.dataType,e.depth&&(n.depth=e.depth),e.flipped&&(n.flipped=e.flipped),e.hasMipmap&&(n.hasMipmap=e.hasMipmap),n.internalFormat=e.internalFormat,e.isImmutable&&(n.isImmutable=e.isImmutable),e.isOpaque&&(n.isOpaque=e.isOpaque),e.maxAnisotropy&&(n.maxAnisotropy=e.maxAnisotropy),n.pixelFormat=e.pixelFormat,e.preMultiplyAlpha&&(n.preMultiplyAlpha=e.preMultiplyAlpha),e.samplingMode&&(n.samplingMode=e.samplingMode),e.target&&(n.target=e.target),n.uniform=e.uniform,e.unpackAlignment&&(n.unpackAlignment=e.unpackAlignment),e.wrapMode&&(n.wrapMode=e.wrapMode),new f(t,n,r)},a:function(t){const e=t.map((({name:t,count:e,type:r})=>`${t}.${e}.${r}`)).join(",");return r(e)},c:function(t){switch(t){case h.UNSIGNED_BYTE:return 1;case h.UNSIGNED_SHORT_4_4_4_4:return 2;case h.FLOAT:return 4;default:return void g().error(new i("webgl-utils",`Unable to handle type ${t}`))}},d:function(t){switch(t){case h.UNSIGNED_BYTE:return Uint8Array;case h.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case h.FLOAT:return Float32Array;default:return void g().error(new i("webgl-utils",`Unable to handle type ${t}`))}},e:p,f:function(t,e,r,n){const s=r.packPrecisionFactor??1;switch(r.type){case a.BYTE:if(1===r.count)t.setInt8(n+r.offset,e*s);else for(let i=0;i<r.count;i++){const o=i*Int8Array.BYTES_PER_ELEMENT;t.setInt8(n+r.offset+o,e[i]*s)}break;case a.UNSIGNED_BYTE:if(1===r.count)t.setUint8(n+r.offset,e*s);else for(let i=0;i<r.count;i++){const o=i*Uint8Array.BYTES_PER_ELEMENT;t.setUint8(n+r.offset+o,e[i]*s)}break;case a.SHORT:if(1===r.count)t.setInt16(n+r.offset,e*s,!0);else for(let i=0;i<r.count;i++){const o=i*Int16Array.BYTES_PER_ELEMENT;t.setInt16(n+r.offset+o,e[i]*s,!0)}break;case a.UNSIGNED_SHORT:if(1===r.count)t.setUint16(n+r.offset,e*s,!0);else for(let i=0;i<r.count;i++){const o=i*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(n+r.offset+o,e[i]*s,!0)}break;case a.INT:if(1===r.count)t.setInt32(n+r.offset,e*s,!0);else for(let i=0;i<r.count;i++){const o=i*Int32Array.BYTES_PER_ELEMENT;t.setInt32(n+r.offset+o,e[i]*s,!0)}break;case a.UNSIGNED_INT:if(1===r.count)t.setUint32(n+r.offset,e*s,!0);else for(let i=0;i<r.count;i++){const o=i*Uint32Array.BYTES_PER_ELEMENT;t.setUint32(n+r.offset+o,e[i]*s,!0)}break;case a.FLOAT:if(1===r.count)t.setFloat32(n+r.offset,e*s,!0);else for(let i=0;i<r.count;i++){const o=i*Float32Array.BYTES_PER_ELEMENT;t.setFloat32(n+r.offset+o,e[i]*s,!0)}}},g:function(t){const e=t.width;return null!=t.effects?256:Math.max(1.25*e,8)},j:function(t){const e=[];for(let r=0;r<t.length;r++)e.push(t.charCodeAt(r));return e},n:function(t,e,r){switch(e.type){case a.BYTE:{if(1===e.count)return t.getInt8(r+e.offset);const n=[];for(let s=0;s<e.count;s++){const i=s*Int8Array.BYTES_PER_ELEMENT;n.push(t.getInt8(r+e.offset+i))}return n}case a.UNSIGNED_BYTE:{if(1===e.count)return t.getUint8(r+e.offset);const n=[];for(let s=0;s<e.count;s++){const i=s*Uint8Array.BYTES_PER_ELEMENT;n.push(t.getUint8(r+e.offset+i))}return n}case a.SHORT:{if(1===e.count)return t.getInt16(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const i=s*Int16Array.BYTES_PER_ELEMENT;n.push(t.getInt16(r+e.offset+i,!0))}return n}case a.UNSIGNED_SHORT:{if(1===e.count)return t.getUint16(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;n.push(t.getUint16(r+e.offset+i,!0))}return n}case a.INT:{if(1===e.count)return t.getInt32(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const i=s*Int32Array.BYTES_PER_ELEMENT;n.push(t.getInt32(r+e.offset+i,!0))}return n}case a.UNSIGNED_INT:{if(1===e.count)return t.getUint32(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const i=s*Uint32Array.BYTES_PER_ELEMENT;n.push(t.getUint32(r+e.offset+i,!0))}return n}case a.FLOAT:{if(1===e.count)return t.getFloat32(r+e.offset,!0);const n=[];for(let s=0;s<e.count;s++){const i=s*Float32Array.BYTES_PER_ELEMENT;n.push(t.getFloat32(r+e.offset+i,!0))}return n}}},o:function t(e,r,n,s,i,o,a){if(e.primitiveName===r)for(const h in e)if(h===n){let t=s?.readWithDefault(i,o,e[h]&&a);return"text"===e.type&&(t=t.toString()),void(e[h]=t)}if("type"in e&&null!=e.type)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.symbolLayers)for(const h of e.symbolLayers)t(h,r,n,s,i,o,a);break;case"CIMHatchFill":e.lineSymbol&&t(e.lineSymbol,r,n,s,i,o,a);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if("CIMVectorMarker"===e.type&&e.markerGraphics)for(const h of e.markerGraphics)t(h,r,n,s,i,o,a),t(h.symbol,r,n,s,i,o,a)}},w:function(t,e){return 65535&t|e<<16}});let e=class t{constructor(t,e,r,n,s,i,o){this.instanceId=t,this.textureKey=e,this.indexStart=r,this.indexCount=n,this.vertexStart=s,this.vertexCount=i,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new t(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,r,n,s,i,o,a){t.push(e),t.push(r),t.push(n),t.push(s),t.push(i),t.push(o),t.push(a)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(e){const r=e.readInt32(),n=e.readInt32(),s=e.readInt32(),i=e.readInt32(),o=e.readInt32(),a=e.readInt32(),h=e.readInt32();return new t(r,n,s,i,o,a,h)}};function d(t,e){if(null!==e){t.push(e.length);for(const r of e)r.serialize(t);return t}t.push(0)}function p(t,e,r){const n=t.readInt32(),s=new Array(n);for(let i=0;i<s.length;i++)s[i]=e.deserialize(t,r);return s}t("t",e),e.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;class E{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),d(t,this.records),t}static deserialize(t){const r=t.readInt32(),n=t.readF32(),s=new E(r,n);return s.records=p(t,e)??[],s}}t("s",E),E.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+e.byteSizeHint;class y{constructor(t,e,r,i){this.computedX=0,this.computedY=0,this.center=n(t,e),this.centerT=s(),this.halfWidth=r/2,this.halfHeight=i/2,this.width=r,this.height=i}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new y(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const r=Math.abs(t.centerT[0]-this.centerT[0]),n=Math.abs(t.centerT[1]-this.centerT[1]),s=(t.halfWidth+this.halfWidth+e)/r,i=(t.halfHeight+this.halfHeight+e)/n,o=Math.min(s,i);return Math.log2(o)}extend(t){const e=Math.min(this.xmin,t.xmin),r=Math.min(this.ymin,t.ymin),n=Math.max(this.xmax,t.xmax)-e,s=Math.max(this.ymax,t.ymax)-r,i=e+n/2,o=r+s/2;this.width=n,this.height=s,this.halfWidth=n/2,this.halfHeight=s/2,this.x=i,this.y=o}static deserialize(t){const e=t.readF32(),r=t.readF32(),n=t.readInt32(),s=t.readInt32();return new y(e,r,n,s)}}t("i",y);const m=new Float32Array(1);new Uint32Array(m.buffer);const g=()=>o.getLogger("esri.views.2d.engine.webgl.Utils"),T=t=>{const e=new Map;for(const r in t)for(const n of t[r])e.set(n.name,n.location);return e},I=t=>{const e={};for(const r in t){const n=t[r];e[r]=n?.length?n[0].stride:0}return e},S=new Map;t({b:(t,e)=>{if(!S.has(t)){const r=function(t){const e={};for(const r in t){const n=t[r];let s=0;e[r]=n.map((t=>{const e=new l(t.name,t.count,t.type,s,0,t.normalized||!1);return s+=t.count*c(t.type),e})),e[r]?.forEach((t=>t.stride=s))}return e}(e),n={strides:I(r),bufferLayouts:r,attributes:T(e)};S.set(t,n)}return S.get(t)},y:t=>t.includes("data:image/svg+xml")});class x{constructor(t,e,r,n,s,i,o,a,h=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=r,this.directionX=n,this.directionY=s,this.maxScale=i,this.minScale=o,this.referenceBounds=a,this.bounds=h}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),null===this.referenceBounds?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),d(t,this.bounds)}static deserialize(t){const e=t.readInt32(),r=t.readF32(),n=t.readF32(),s=t.readF32(),i=t.readF32(),o=t.readF32(),a=t.readF32(),h=t.readF32(),c=t.readF32(),u=t.readF32(),f=p(t,y)??[];return new x(e,r,n,s,i,o,a,{size:h,offsetX:c,offsetY:u},f)}}t("r",x)}}}));