System.register(["./index-legacy.js","./lineSegment-legacy.js","./sphere-legacy.js","./ObjectStack-legacy.js","./plane-legacy.js","./Util-legacy.js","./edgeProcessing-legacy.js","./mat3f64-legacy.js","./mat4f64-legacy.js","./quatf64-legacy.js","./deduplicate-legacy.js","./Indices-legacy.js","./InterleavedLayout-legacy.js","./BufferView-legacy.js","./types-legacy.js","./VertexAttribute-legacy.js","./enums-legacy.js","./VertexElementDescriptor-legacy.js"],(function(e,t){"use strict";var n,o,i,s,r,h,d,a,c,l,u,_,f,m,T,p,g,O,b,R,E,N,A,j,S,F,x,M,B;return{setters:[e=>{n=e.ak,o=e.bo,i=e.cU,s=e.cV,r=e.h6,h=e.cR,d=e.h7,a=e.ct,c=e.cu,l=e.gX,u=e.h2,_=e.x,f=e.z,m=e.at,T=e.cQ},e=>{p=e.v,g=e.b,O=e.j},e=>{b=e.d,R=e.O,E=e.p,N=e.Z,A=e.V,j=e.I,S=e.w,F=e.s},e=>{x=e.s},null,e=>{M=e.i},e=>{B=e.m},null,null,null,null,null,null,null,null,null,null,null],execute:function(){function t(e){return e?{ray:b(e.ray),c0:e.c0,c1:e.c1}:{ray:b(),c0:0,c1:Number.MAX_VALUE}}function y(e,t){for(let n=0;n<L;n++){const o=e[n];if(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]+o[3]>=t[3])return!1}return!0}var P,I;new x((()=>t())),function(e){e[e.LEFT=0]="LEFT",e[e.RIGHT=1]="RIGHT",e[e.BOTTOM=2]="BOTTOM",e[e.TOP=3]="TOP",e[e.NEAR=4]="NEAR",e[e.FAR=5]="FAR"}(P||(P={})),function(e){e[e.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",e[e.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",e[e.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",e[e.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",e[e.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",e[e.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",e[e.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",e[e.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(I||(I={})),I.FAR_BOTTOM_RIGHT,I.NEAR_BOTTOM_RIGHT,I.NEAR_BOTTOM_LEFT,I.FAR_BOTTOM_LEFT,I.NEAR_BOTTOM_LEFT,I.NEAR_BOTTOM_RIGHT,I.NEAR_TOP_RIGHT,I.NEAR_TOP_LEFT,I.FAR_BOTTOM_RIGHT,I.FAR_BOTTOM_LEFT,I.FAR_TOP_LEFT,I.FAR_TOP_RIGHT,I.NEAR_BOTTOM_RIGHT,I.FAR_BOTTOM_RIGHT,I.FAR_TOP_RIGHT,I.NEAR_TOP_RIGHT,I.FAR_BOTTOM_LEFT,I.NEAR_BOTTOM_LEFT,I.NEAR_TOP_LEFT,I.FAR_TOP_LEFT,I.FAR_TOP_LEFT,I.NEAR_TOP_LEFT,I.NEAR_TOP_RIGHT,I.FAR_TOP_RIGHT;const L=6;new x(t);let z=class e{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(e,t){this.objectToBoundingSphere=e,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new C,this._objectCount=0,t&&(void 0!==t.maximumObjectsPerNode&&(this._maximumObjectsPerNode=t.maximumObjectsPerNode),void 0!==t.maximumDepth&&(this._maximumDepth=t.maximumDepth))}destroy(){this._degenerateObjects.clear(),C.clearPool(),J[0]=null,Y.prune(),ie.prune()}add(e,t=e.length){this._objectCount+=t,this._grow(e,t);const n=C.acquire();for(let o=0;o<t;o++){const t=e[o];this._isDegenerate(t)?this._degenerateObjects.add(t):(n.init(this._root),this._add(t,n))}C.release(n)}remove(e,t=null){this._objectCount-=e.length;const n=C.acquire();for(const o of e){const e=t??R(this.objectToBoundingSphere(o),$);k(e[3])?(n.init(this._root),this._remove(o,e,n)):this._degenerateObjects.delete(o)}C.release(n),this._shrink()}update(e,t){if(!k(t[3])&&this._isDegenerate(e))return;const n=function(e){return J[0]=e,J}(e);this.remove(n,t),this.add(n)}forEachAlongRay(e,t,n){const o=E(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNode(o,e))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObject(o,e)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObject(o,e)&&n(e)})),!0}))}forEachAlongRayWithVerticalOffset(e,t,n,o){const i=E(e,t);this._forEachNode(this._root,(e=>{if(!this._intersectsNodeWithOffset(i,e,o))return!1;const t=e.node;return t.terminals.forAll((e=>{this._intersectsObjectWithOffset(i,e,o)&&n(e)})),null!==t.residents&&t.residents.forAll((e=>{this._intersectsObjectWithOffset(i,e,o)&&n(e)})),!0}))}forEach(e){this._forEachNode(this._root,(t=>{const n=t.node;return n.terminals.forAll(e),null!==n.residents&&n.residents.forAll(e),!0})),this._degenerateObjects.forEach(e)}forEachDegenerateObject(e){this._degenerateObjects.forEach(e)}findClosest(e,t,n,o=(()=>!0),r=1/0){let h=1/0,d=1/0,a=null;const c=G(e,t),l=i=>{if(--r,!o(i))return;const s=this.objectToBoundingSphere(i);if(!y(n,s))return;const c=V(e,t,N(s)),l=c-s[3],u=c+s[3];l<h&&(h=l,d=u,a=i)};return this._forEachNodeDepthOrdered(this._root,(o=>{if(r<=0||!y(n,o.bounds))return!1;if(i(X,c,o.halfSize),s(X,X,N(o.bounds)),V(e,t,X)>d)return!1;const h=o.node;return h.terminals.forAll((e=>l(e))),null!==h.residents&&h.residents.forAll((e=>l(e))),!0}),e,t),a}forEachInDepthRange(t,n,o,r,h,d,a){let c=-1/0,l=1/0;const u={setRange:t=>{o===e.DepthOrder.FRONT_TO_BACK?(c=Math.max(c,t.near),l=Math.min(l,t.far)):(c=Math.max(c,-t.far),l=Math.min(l,-t.near))}};u.setRange(r);const _=V(n,o,t),f=G(n,o),m=G(n,-o),T=e=>{if(!a(e))return;const t=this.objectToBoundingSphere(e),i=N(t),s=V(n,o,i)-_,r=s-t[3],f=s+t[3];r>l||f<c||!y(d,t)||h(e,u)};this._forEachNodeDepthOrdered(this._root,(e=>{if(!y(d,e.bounds))return!1;if(i(X,f,e.halfSize),s(X,X,N(e.bounds)),V(n,o,X)-_>l)return!1;if(i(X,m,e.halfSize),s(X,X,N(e.bounds)),V(n,o,X)-_<c)return!1;const t=e.node;return t.terminals.forAll((e=>T(e))),null!==t.residents&&t.residents.forAll((e=>T(e))),!0}),n,o)}forEachNode(e){this._forEachNode(this._root,(t=>e(t.node,t.bounds,t.halfSize,t.depth)))}forEachNeighbor(e,t){const n=A(t),o=N(t),i=t=>{const i=this.objectToBoundingSphere(t),s=A(i),h=n+s;return!(r(N(i),o)-h*h<=0)||e(t)};let s=!0;const h=e=>{s&&(s=i(e))};this._forEachNode(this._root,(e=>{const t=A(e.bounds),i=n+t;if(r(N(e.bounds),o)-i*i>0)return!1;const d=e.node;return d.terminals.forAll(h),s&&null!==d.residents&&d.residents.forAll(h),s})),s&&this.forEachDegenerateObject(h)}_intersectsNode(e,t){return w(N(t.bounds),2*-t.halfSize,Q),w(N(t.bounds),2*t.halfSize,Z),M(e.origin,e.direction,Q,Z)}_intersectsNodeWithOffset(e,t,n){return w(N(t.bounds),2*-t.halfSize,Q),w(N(t.bounds),2*t.halfSize,Z),n.applyToMinMax(Q,Z),M(e.origin,e.direction,Q,Z)}_intersectsObject(e,t){const n=this.objectToBoundingSphere(t);return!(n[3]>0)||j(n,e)}_intersectsObjectWithOffset(e,t,n){const o=this.objectToBoundingSphere(t);return!(o[3]>0)||j(n.applyToBoundingSphere(o),e)}_forEachNode(e,t){let n=C.acquire().init(e);const o=[n];for(;0!==o.length;){if(n=o.pop(),t(n)&&!n.isLeaf())for(let e=0;e<n.node.children.length;e++)n.node.children[e]&&o.push(C.acquire().init(n).advance(e));C.release(n)}}_forEachNodeDepthOrdered(t,n,o,i=e.DepthOrder.FRONT_TO_BACK){let s=C.acquire().init(t);const r=[s];for(function(e,t,n){if(!ie.length)for(let o=0;o<8;++o)ie.push({index:0,distance:0});for(let o=0;o<8;++o){const n=q[o];ie.data[o].index=o,ie.data[o].distance=V(e,t,n)}ie.sort(((e,t)=>e.distance-t.distance));for(let o=0;o<8;++o)n[o]=ie.data[o].index}(o,i,se);0!==r.length;){if(s=r.pop(),n(s)&&!s.isLeaf())for(let e=7;e>=0;--e){const t=se[e];s.node.children[t]&&r.push(C.acquire().init(s).advance(t))}C.release(s)}}_remove(e,t,n){Y.clear();const o=n.advanceTo(t,((e,t)=>{Y.push(e.node),Y.push(t)}))?n.node.terminals:n.node.residents;if(o.removeUnordered(e),0===o.length)for(let i=Y.length-2;i>=0;i-=2){const e=Y.data[i],t=Y.data[i+1];if(!this._purge(e,t))break}}_nodeIsEmpty(e){if(0!==e.terminals.length)return!1;if(null!==e.residents)return 0===e.residents.length;for(let t=0;t<e.children.length;t++)if(e.children[t])return!1;return!0}_purge(e,t){return t>=0&&(e.children[t]=null),!!this._nodeIsEmpty(e)&&(null===e.residents&&(e.residents=new o({shrink:!0})),!0)}_add(e,t){t.advanceTo(this.objectToBoundingSphere(e))?t.node.terminals.push(e):(t.node.residents.push(e),t.node.residents.length>this._maximumObjectsPerNode&&t.depth<this._maximumDepth&&this._split(t))}_split(e){const t=e.node.residents;e.node.residents=null;for(let n=0;n<t.length;n++){const o=C.acquire().init(e);this._add(t.at(n),o),C.release(o)}}_grow(e,t){if(0!==t&&(H(e,t,(e=>this.objectToBoundingSphere(e)),ee),k(ee[3])&&!this._fitsInsideTree(ee)))if(this._nodeIsEmpty(this._root.node))R(ee,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const e=this._rootBoundsForRootAsSubNode(ee);this._placingRootViolatesMaxDepth(e)?this._rebuildTree(ee,e):this._growRootAsSubNode(e),C.release(e)}}_rebuildTree(e,t){h(N(te),N(t.bounds)),te[3]=t.halfSize,H([e,te],2,(e=>e),ne);const n=C.acquire().init(this._root);this._root.initFrom(null,ne,ne[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,(e=>(this.add(e.node.terminals.data,e.node.terminals.length),null!==e.node.residents&&this.add(e.node.residents.data,e.node.residents.length),!0))),C.release(n)}_placingRootViolatesMaxDepth(e){const t=Math.log(e.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(e=>(n=Math.max(n,e.depth),n+t<=this._maximumDepth))),n+t>this._maximumDepth}_rootBoundsForRootAsSubNode(e){const t=e[3],n=e;let o=-1/0;const i=this._root.bounds,s=this._root.halfSize;for(let h=0;h<3;h++){const e=i[h]-s-(n[h]-t),r=n[h]+t-(i[h]+s),d=Math.max(0,Math.ceil(e/(2*s))),a=Math.max(0,Math.ceil(r/(2*s)))+1,c=2**Math.ceil(Math.log(d+a)*Math.LOG2E);o=Math.max(o,c),oe[h].min=d,oe[h].max=a}for(let h=0;h<3;h++){let e=oe[h].min,t=oe[h].max;const n=(o-(e+t))/2;e+=Math.ceil(n),t+=Math.floor(n);const r=i[h]-s-e*s*2;U[h]=r+(t+e)*s}const r=o*s;return U[3]=r*K,C.acquire().initFrom(null,U,r,0)}_growRootAsSubNode(e){const t=this._root.node;h(N(ee),N(this._root.bounds)),ee[3]=this._root.halfSize,this._root.init(e),e.advanceTo(ee,null,!0),e.node.children=t.children,e.node.residents=t.residents,e.node.terminals=t.terminals}_shrink(){for(;;){const e=this._findShrinkIndex();if(-1===e)break;this._root.advance(e),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let e=null;const t=this._root.node.children;let n=0,o=0;for(;o<t.length&&null==e;)n=o++,e=t[n];for(;o<t.length;)if(t[o++])return-1;return n}_isDegenerate(e){return!k(this.objectToBoundingSphere(e)[3])}_fitsInsideTree(e){const t=this._root.bounds,n=this._root.halfSize;return e[3]<=n&&e[0]>=t[0]-n&&e[0]<=t[0]+n&&e[1]>=t[1]-n&&e[1]<=t[1]+n&&e[2]>=t[2]-n&&e[2]<=t[2]+n}toJSON(){const{maximumDepth:e,maximumObjectsPerNode:t,_objectCount:n}=this,o=this._nodeToJSON(this._root.node);return{maximumDepth:e,maximumObjectsPerNode:t,objectCount:n,root:{bounds:this._root.bounds,halfSize:this._root.halfSize,depth:this._root.depth,node:o}}}_nodeToJSON(e){const t=e.children.map((e=>e?this._nodeToJSON(e):null)),n=e.residents?.map((e=>this.objectToBoundingSphere(e))),o=e.terminals?.map((e=>this.objectToBoundingSphere(e)));return{children:t,residents:n,terminals:o}}static fromJSON(t){const n=new e((e=>e),{maximumDepth:t.maximumDepth,maximumObjectsPerNode:t.maximumObjectsPerNode});return n._objectCount=t.objectCount,n._root.initFrom(t.root.node,t.root.bounds,t.root.halfSize,t.root.depth),n}};class C{constructor(){this.bounds=S(),this.halfSize=0,this.initFrom(null,null,0,0)}init(e){return this.initFrom(e.node,e.bounds,e.halfSize,e.depth)}initFrom(e,t,n,o=this.depth){return this.node=null!=e?e:C.createEmptyNode(),t&&R(t,this.bounds),this.halfSize=n,this.depth=o,this}increaseHalfSize(e){this.halfSize*=e,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*K}advance(e){let t=this.node.children[e];t||(t=C.createEmptyNode(),this.node.children[e]=t),this.node=t,this.halfSize/=2,this.depth++;const n=q[e];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(e,t,n=!1){for(;;){if(this.isTerminalFor(e))return t&&t(this,-1),!0;if(this.isLeaf()){if(!n)return t&&t(this,-1),!1;this.node.residents=null}const o=this._childIndex(e);t&&t(this,o),this.advance(o)}}isLeaf(){return null!=this.node.residents}isTerminalFor(e){return e[3]>this.halfSize/2}_childIndex(e){const t=this.bounds;return(t[0]<e[0]?1:0)+(t[1]<e[1]?2:0)+(t[2]<e[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new o({shrink:!0}),residents:new o({shrink:!0})}}static acquire(){return C._pool.acquire()}static release(e){C._pool.release(e)}static clearPool(){C._pool.prune()}}function v(e,t){e[0]=Math.min(e[0],t[0]-t[3]),e[1]=Math.min(e[1],t[1]-t[3]),e[2]=Math.min(e[2],t[2]-t[3])}function D(e,t){e[0]=Math.max(e[0],t[0]+t[3]),e[1]=Math.max(e[1],t[1]+t[3]),e[2]=Math.max(e[2],t[2]+t[3])}function w(e,t,n){n[0]=e[0]+t,n[1]=e[1]+t,n[2]=e[2]+t}function H(e,t,n,o){if(1===t){const t=n(e[0]);R(t,o)}else{Q[0]=1/0,Q[1]=1/0,Q[2]=1/0,Z[0]=-1/0,Z[1]=-1/0,Z[2]=-1/0;for(let o=0;o<t;o++){const t=n(e[o]);k(t[3])&&(v(Q,t),D(Z,t))}d(N(o),Q,Z,.5),o[3]=Math.max(Z[0]-Q[0],Z[1]-Q[1],Z[2]-Q[2])/2}}function G(e,t){let n,o=1/0;for(let i=0;i<8;++i){const s=V(e,t,W[i]);s<o&&(o=s,n=W[i])}return n}function V(e,t,n){return t*(e[0]*n[0]+e[1]*n[1]+e[2]*n[2])}function k(e){return!isNaN(e)&&e!==-1/0&&e!==1/0&&e>0}C._pool=new n(C),function(e){var t;(t=e.DepthOrder||(e.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(z||(z={}));const q=[c(-1,-1,-1),c(1,-1,-1),c(-1,1,-1),c(1,1,-1),c(-1,-1,1),c(1,-1,1),c(-1,1,1),c(1,1,1)],W=[c(-1,-1,-1),c(-1,-1,1),c(-1,1,-1),c(-1,1,1),c(1,-1,-1),c(1,-1,1),c(1,1,-1),c(1,1,1)],K=Math.sqrt(3),J=[null],U=S(),X=a(),Q=a(),Z=a(),Y=new o,$=S(),ee=S(),te=S(),ne=S(),oe=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],ie=new o,se=[0,0,0,0,0,0,0,0],re=z;function he(e,t,n){const o=S(),i=N(o);return l(i,i,e,.5),l(i,i,t,.5),o[3]=u(i,e),s(i,i,n),o}let de=class{constructor(){this._idToComponent=new Map,this._components=new re((e=>e.bounds)),this._edges=new re((e=>e.bounds)),this._tmpLineSegment=p(),this._tmpP1=a(),this._tmpP2=a(),this._tmpP3=a(),this.remoteClient=null}async fetchCandidates(e,t){await Promise.resolve(),m(t),await this._ensureEdgeLocations(e,t);const n=[];return this._edges.forEachNeighbor((t=>(this._addCandidates(e,t,n),n.length<1e3)),e.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(e,t){const n=[];if(this._components.forEachNeighbor((e=>{if(null==e.info){const{id:t,uid:o}=e;n.push({id:t,uid:o})}return!0}),e.bounds),!n.length)return;const o={components:n},i=await this.remoteClient.invoke("fetchAllEdgeLocations",o,t??{});for(const s of i.components)this._setFetchEdgeLocations(s)}async add(e){const t=new ae(e.id,e.bounds);return this._idToComponent.set(t.id,t),this._components.add([t]),{result:{}}}async remove(e){const t=this._idToComponent.get(e.id);if(t){const e=[];this._edges.forEachNeighbor((n=>(n.component===t&&e.push(n),!0)),t.bounds),this._edges.remove(e),this._components.remove([t]),this._idToComponent.delete(t.id)}return{result:{}}}_setFetchEdgeLocations(e){const t=this._idToComponent.get(e.id);if(null==t||e.uid!==t.uid)return;const n=B.createView(e.locations),o=new Array(n.count),i=a(),s=a();for(let d=0;d<n.count;d++){n.position0.getVec(d,i),n.position1.getVec(d,s);const r=he(i,s,e.origin),h=new ce(t,d,r);o[d]=h}this._edges.add(o);const{objectIds:r,origin:h}=e;t.info={locations:n,objectIds:r,origin:h}}_addCandidates(e,t,n){const{info:o}=t.component,{origin:i,objectIds:r}=o,h=o.locations,d=h.position0.getVec(t.index,this._tmpP1),a=h.position1.getVec(t.index,this._tmpP2);s(d,d,i),s(a,a,i);const c=r[h.componentIndex.get(t.index)];this._addEdgeCandidate(e,c,d,a,n),this._addVertexCandidate(e,c,d,n),this._addVertexCandidate(e,c,a,n)}_addEdgeCandidate(e,t,n,o,i){if(!e.returnEdge)return;const s=N(e.bounds),r=g(n,o,this._tmpLineSegment),h=O(r,s,this._tmpP3);F(e.bounds,h)&&i.push({type:"edge",objectId:t,target:T(h),distance:u(s,h),start:T(n),end:T(o)})}_addVertexCandidate(e,t,n,o){if(!e.returnVertex||!F(e.bounds,n))return;const i=N(e.bounds);o.push({type:"vertex",objectId:t,target:T(n),distance:u(i,n)})}};de=_([f("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],de),e("default",de);class ae{constructor(e,t){this.id=e,this.bounds=t,this.info=null,this.uid=++ae.uid}}ae.uid=0;class ce{constructor(e,t,n){this.component=e,this.index=t,this.bounds=n}}}}}));