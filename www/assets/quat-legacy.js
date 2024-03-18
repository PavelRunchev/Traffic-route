System.register(["./mat3f64-legacy.js","./quatf64-legacy.js","./index-legacy.js"],(function(t,n){"use strict";var c,e,s,r,o,a,u,i,h,M,l,f,g,q,d,m,y,p,j,x,P;return{setters:[t=>{c=t.e},t=>{e=t.e},t=>{s=t.cd,r=t.ce,o=t.cf,a=t.cg,u=t.ch,i=t.ci,h=t.cj,M=t.ck,l=t.cl,f=t.cm,g=t.cn,q=t.co,d=t.cp,m=t.cq,y=t.cr,p=t.cs,j=t.ct,x=t.cu,P=t.cv}],execute:function(){function n(t,n,c){c*=.5;const e=Math.sin(c);return t[0]=e*n[0],t[1]=e*n[1],t[2]=e*n[2],t[3]=Math.cos(c),t}function I(t,n){const c=2*Math.acos(n[3]),e=Math.sin(c/2);return e>s()?(t[0]=n[0]/e,t[1]=n[1]/e,t[2]=n[2]/e):(t[0]=1,t[1]=0,t[2]=0),c}function b(t,n,c){const e=n[0],s=n[1],r=n[2],o=n[3],a=c[0],u=c[1],i=c[2],h=c[3];return t[0]=e*h+o*a+s*i-r*u,t[1]=s*h+o*u+r*a-e*i,t[2]=r*h+o*i+e*u-s*a,t[3]=o*h-e*a-s*u-r*i,t}function v(t,n,c,e){const r=n[0],o=n[1],a=n[2],u=n[3];let i,h,M,l,f,g=c[0],q=c[1],d=c[2],m=c[3];return h=r*g+o*q+a*d+u*m,h<0&&(h=-h,g=-g,q=-q,d=-d,m=-m),1-h>s()?(i=Math.acos(h),M=Math.sin(i),l=Math.sin((1-e)*i)/M,f=Math.sin(e*i)/M):(l=1-e,f=e),t[0]=l*r+f*g,t[1]=l*o+f*q,t[2]=l*a+f*d,t[3]=l*u+f*m,t}function A(t,n){return t[0]=-n[0],t[1]=-n[1],t[2]=-n[2],t[3]=n[3],t}function _(t,n){const c=n[0]+n[4]+n[8];let e;if(c>0)e=Math.sqrt(c+1),t[3]=.5*e,e=.5/e,t[0]=(n[5]-n[7])*e,t[1]=(n[6]-n[2])*e,t[2]=(n[1]-n[3])*e;else{let c=0;n[4]>n[0]&&(c=1),n[8]>n[3*c+c]&&(c=2);const s=(c+1)%3,r=(c+2)%3;e=Math.sqrt(n[3*c+c]-n[3*s+s]-n[3*r+r]+1),t[c]=.5*e,e=.5/e,t[3]=(n[3*s+r]-n[3*r+s])*e,t[s]=(n[3*s+c]+n[3*c+s])*e,t[r]=(n[3*r+c]+n[3*c+r])*e}return t}function O(t,n,c,e){const s=.5*Math.PI/180;n*=s,c*=s,e*=s;const r=Math.sin(n),o=Math.cos(n),a=Math.sin(c),u=Math.cos(c),i=Math.sin(e),h=Math.cos(e);return t[0]=r*u*h-o*a*i,t[1]=o*a*h+r*u*i,t[2]=o*u*i-r*a*h,t[3]=o*u*h+r*a*i,t}t({O:A,T:O,b:n,v:I,x:b});const S=r,T=o,z=a,E=b,L=u,X=i,k=h,N=M,W=N,Y=l,Z=Y,w=f,B=g,C=q;t({X:T,N:B});const D=j(),F=x(1,0,0),G=x(0,1,0),H=e(),J=e(),K=c();Object.freeze(Object.defineProperty({__proto__:null,add:z,calculateW:function(t,n){const c=n[0],e=n[1],s=n[2];return t[0]=c,t[1]=e,t[2]=s,t[3]=Math.sqrt(Math.abs(1-c*c-e*e-s*s)),t},conjugate:A,copy:S,dot:X,equals:C,exactEquals:B,fromEuler:O,fromMat3:_,getAxisAngle:I,identity:function(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},invert:function(t,n){const c=n[0],e=n[1],s=n[2],r=n[3],o=c*c+e*e+s*s+r*r,a=o?1/o:0;return t[0]=-c*a,t[1]=-e*a,t[2]=-s*a,t[3]=r*a,t},len:W,length:N,lerp:k,mul:E,multiply:b,normalize:w,random:function(t){const n=P,c=n(),e=n(),s=n(),r=Math.sqrt(1-c),o=Math.sqrt(c);return t[0]=r*Math.sin(2*Math.PI*e),t[1]=r*Math.cos(2*Math.PI*e),t[2]=o*Math.sin(2*Math.PI*s),t[3]=o*Math.cos(2*Math.PI*s),t},rotateX:function(t,n,c){c*=.5;const e=n[0],s=n[1],r=n[2],o=n[3],a=Math.sin(c),u=Math.cos(c);return t[0]=e*u+o*a,t[1]=s*u+r*a,t[2]=r*u-s*a,t[3]=o*u-e*a,t},rotateY:function(t,n,c){c*=.5;const e=n[0],s=n[1],r=n[2],o=n[3],a=Math.sin(c),u=Math.cos(c);return t[0]=e*u-r*a,t[1]=s*u+o*a,t[2]=r*u+e*a,t[3]=o*u-s*a,t},rotateZ:function(t,n,c){c*=.5;const e=n[0],s=n[1],r=n[2],o=n[3],a=Math.sin(c),u=Math.cos(c);return t[0]=e*u+s*a,t[1]=s*u-e*a,t[2]=r*u+o*a,t[3]=o*u-r*a,t},rotationTo:function(t,c,e){const s=d(c,e);return s<-.999999?(m(D,F,c),y(D)<1e-6&&m(D,G,c),p(D,D),n(t,D,Math.PI),t):s>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):(m(D,c,e),t[0]=D[0],t[1]=D[1],t[2]=D[2],t[3]=1+s,w(t,t))},scale:L,set:T,setAxes:function(t,n,c,e){const s=K;return s[0]=c[0],s[3]=c[1],s[6]=c[2],s[1]=e[0],s[4]=e[1],s[7]=e[2],s[2]=-n[0],s[5]=-n[1],s[8]=-n[2],w(t,_(t,s))},setAxisAngle:n,slerp:v,sqlerp:function(t,n,c,e,s,r){return v(H,n,s,r),v(J,c,e,r),v(t,H,J,2*r*(1-r)),t},sqrLen:Z,squaredLength:Y,str:function(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}},Symbol.toStringTag,{value:"Module"}))}}}));