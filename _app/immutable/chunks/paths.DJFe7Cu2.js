import{B as q,k as l,y as m,C as v}from"./index-client.CRB7gsTB.js";const c=[];function x(s,t){return{subscribe:z(s,t).subscribe}}function z(s,t=l){let n=null;const i=new Set;function u(r){if(v(s,r)&&(s=r,n)){const o=!c.length;for(const e of i)e[1](),c.push(e,s);if(o){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){u(r(s))}function f(r,o=l){const e=[r,o];return i.add(e),i.size===1&&(n=t(u,b)||l),r(s),()=>{i.delete(e),i.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function T(s,t,n){const i=!Array.isArray(s),u=i?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return x(n,(f,r)=>{let o=!1;const e=[];let p=0,d=l;const g=()=>{if(p)return;d();const a=t(i?e[0]:e,f,r);b?f(a):d=typeof a=="function"?a:l},w=u.map((a,_)=>q(a,k=>{e[_]=k,p&=~(1<<_),o&&g()},()=>{p|=1<<_}));return o=!0,g(),function(){m(w),d(),o=!1}})}function C(s){return{subscribe:s.subscribe.bind(s)}}function E(s){let t;return q(s,n=>t=n)(),t}var y;const A=((y=globalThis.__sveltekit_1pi7qu0)==null?void 0:y.base)??"";var h;const S=((h=globalThis.__sveltekit_1pi7qu0)==null?void 0:h.assets)??A;export{x as a,A as b,S as c,T as d,E as g,C as r,z as w};
