import{B as w,k as l,y as q,C as v}from"./index-client.Bk3NiiHW.js";const c=[];function j(s,t){return{subscribe:x(s,t).subscribe}}function x(s,t=l){let r=null;const o=new Set;function u(n){if(v(s,n)&&(s=n,r)){const i=!c.length;for(const e of o)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(n){u(n(s))}function f(n,i=l){const e=[n,i];return o.add(e),o.size===1&&(r=t(u,b)||l),n(s),()=>{o.delete(e),o.size===0&&r&&(r(),r=null)}}return{set:u,update:b,subscribe:f}}function B(s,t,r){const o=!Array.isArray(s),u=o?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return j(r,(f,n)=>{let i=!1;const e=[];let d=0,g=l;const _=()=>{if(d)return;g();const a=t(o?e[0]:e,f,n);b?f(a):g=typeof a=="function"?a:l},k=u.map((a,p)=>w(a,m=>{e[p]=m,d&=~(1<<p),i&&_()},()=>{d|=1<<p}));return i=!0,_(),function(){q(k),g(),i=!1}})}function T(s){return{subscribe:s.subscribe.bind(s)}}function C(s){let t;return w(s,r=>t=r)(),t}var y;const z=((y=globalThis.__sveltekit_gjflrr)==null?void 0:y.base)??"";var h;const E=((h=globalThis.__sveltekit_gjflrr)==null?void 0:h.assets)??z;export{j as a,z as b,E as c,B as d,C as g,T as r,x as w};