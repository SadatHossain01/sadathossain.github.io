import{S as C}from"../chunks/skills.C8rtSgEt.js";import{c as G,t as h,a as s,b as E,s as F}from"../chunks/disclose-version.B0khQYAV.js";import{p as I,a as J,g as i,f as A,t as k,d as x,n as $,s as d,c as H,r as O}from"../chunks/index-client.Bk3NiiHW.js";import{s as K,i as b,a as L}from"../chunks/props.CgsOA59U.js";import{e as Q,i as V}from"../chunks/updater.BKH6HeCP.js";import{s as W}from"../chunks/base.opWDD_FC.js";import{B as X,H as Y}from"../chunks/base-page.CTO23zuD.js";import{E as Z}from"../chunks/empty-result.DriicxTk.js";import{F as tt,M as et,E as at}from"../chunks/empty-markdown.Bqw7dw17.js";import{B as rt}from"../chunks/badge.BCIrcxno.js";import{S as z}from"../chunks/separator.CoQWxdL0.js";import{M as ot,A as st}from"../chunks/assets.CqUM8IFb.js";import{E as lt}from"../chunks/experience.z1SjJMjt.js";import{P as nt}from"../chunks/projects.BVVj-5Ha.js";import{h as it}from"../chunks/utils.75Jl2K-G.js";import{d as mt}from"../chunks/stores.BmDG_jW-.js";import"../chunks/legacy.DMKoOk8V.js";function dt({params:f}){if(f.slug)return{item:C.items.find(c=>c.slug===f.slug)}}const Ft=Object.freeze(Object.defineProperty({__proto__:null,load:dt},Symbol.toStringTag,{value:"Module"}));var ft=E("<a><!></a>"),ut=E('<div class="flex flex-row flex-wrap items-center gap-2 py-4"><!> <!></div>'),gt=E("<!> <!> <!> <!> <!>",1);function At(f,a){I(a,!0);const c=K(),p=()=>L(mt,"$mode",c);let N=x(()=>{var e,r;return`${((r=(e=a.data)==null?void 0:e.item)==null?void 0:r.name)??"Not Found"} - Skills`}),R=x(()=>{var e,r,t;return(p()=="dark"?(r=(e=a.data)==null?void 0:e.item)==null?void 0:r.logo.dark:(t=a.data.item)==null?void 0:t.logo.light)??st.Unknown.light}),P=x(()=>(()=>{const e=a.data.item;if(!e)return[];const r=[];return nt.items.forEach(t=>{t.skills.find(m=>m.slug===e.slug)&&r.push({link:`/projects/${t.slug}`,logo:p()==="dark"?t.logo.dark:t.logo.light,name:t.name})}),lt.items.forEach(t=>{t.skills.find(m=>m.slug===e.slug)&&r.push({link:`/experience/${t.slug}`,logo:p()==="dark"?t.logo.dark:t.logo.light,name:t.name})}),r})());X(f,{get title(){return i(N)},children:(e,r)=>{var t=G(),m=A(t);b(m,()=>!a.data.item,_=>{Z(_)},_=>{var S=gt(),y=A(S);tt(y,{get img(){return i(R)},children:(o,u)=>{Y(o,{children:(g,B)=>{$();var l=h();k(()=>F(l,a.data.item.name)),s(g,l)},$$slots:{default:!0}})},$$slots:{default:!0}});var M=d(y,2);z(M,{});var w=d(M,2);b(w,()=>a.data.item.description.trim(),o=>{et(o,{get content(){return a.data.item.description}})},o=>{at(o)});var j=d(w,2);z(j,{});var T=d(j,2);b(T,()=>i(P).length!==0,o=>{var u=ut(),g=H(u);ot(g,{children:(l,v)=>{$();var n=h("Related items");s(l,n)},$$slots:{default:!0}});var B=d(g,2);Q(B,17,()=>i(P),V,(l,v)=>{var n=ft();k(()=>W(n,"href",it(i(v).link)));var U=H(n);rt(U,{children:(q,ct)=>{$();var D=h();k(()=>F(D,i(v).name)),s(q,D)},$$slots:{default:!0}}),O(n),s(l,n)}),O(u),s(o,u)}),s(_,S)}),s(e,t)},$$slots:{default:!0}}),J()}export{At as component,Ft as universal};