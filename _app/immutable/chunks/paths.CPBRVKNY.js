import{aA as q,Z as l,ay as m,aq as v}from"./index-client.aj5FnfNL.js";const c=[];function A(s,t){return{subscribe:k(s,t).subscribe}}function k(s,t=l){let n=null;const o=new Set;function i(r){if(v(s,r)&&(s=r,n)){const a=!c.length;for(const e of o)e[1](),c.push(e,s);if(a){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){i(r(s))}function f(r,a=l){const e=[r,a];return o.add(e),o.size===1&&(n=t(i,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:i,update:b,subscribe:f}}function B(s,t,n){const o=!Array.isArray(s),i=o?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return A(n,(f,r)=>{let a=!1;const e=[];let d=0,p=l;const g=()=>{if(d)return;p();const u=t(o?e[0]:e,f,r);b?f(u):p=typeof u=="function"?u:l},w=i.map((u,_)=>q(u,x=>{e[_]=x,d&=~(1<<_),a&&g()},()=>{d|=1<<_}));return a=!0,g(),function(){m(w),p(),a=!1}})}function E(s){return{subscribe:s.subscribe.bind(s)}}function S(s){let t;return q(s,n=>t=n)(),t}var y;const z=((y=globalThis.__sveltekit_1rxqa7o)==null?void 0:y.base)??"";var h;const Z=((h=globalThis.__sveltekit_1rxqa7o)==null?void 0:h.assets)??z;export{Z as a,z as b,A as c,B as d,S as g,E as r,k as w};
