import{j as oe,c as re,i as ae,b as a,t as d,a as se,e as E,s as y,n as te}from"../chunks/disclose-version.DgrYO7ja.js";import{j as le,n as ne,l as x,g as o,x as O,a as ie,r as A,q as m,J as D,v as k,w as v,s as ce}from"../chunks/index-client.aj5FnfNL.js";import{e as J}from"../chunks/updater.DS3J6E4e.js";import{b as U}from"../chunks/legacy.CqLudUwD.js";import{E as me}from"../chunks/empty-result.C5n5iSPW.js";import{S as de,F as ge,a as pe,C as fe,N as z}from"../chunks/fancy-card.DZahWNpk.js";import{A as ue,a as $e,b as ve}from"../chunks/avatar-fallback.Bj9PKQIJ.js";import{h as _e}from"../chunks/utils.BZknjAdD.js";import{I as he}from"../chunks/icon.DedB4ad8.js";import{S as xe}from"../chunks/separator.yV4UPs46.js";import{R as ke,T as be,a as we}from"../chunks/index.D2Y5pJBe.js";import{L as G}from"../chunks/large.CGZqOGS3.js";import{A as Ce}from"../chunks/assets.CbOxnY8X.js";import{E as Pe}from"../chunks/education.DnMDv_9e.js";import{E as Le}from"../chunks/experience.CLGGZ0nP.js";import{P as Se}from"../chunks/projects.C6dchiKj.js";import{S as Ee}from"../chunks/skills.DGaszgxo.js";import{B as ye}from"../chunks/blogs.o-hwCL05.js";import{d as Ae}from"../chunks/stores.Bc2TQD5d.js";var De=d("<img>"),je=d("<!> <!>",1),Re=d("<!> <!>",1),Be=d("<!> <!>",1),Te=d('<div class="flex flex-col gap-8"><div class="flex flex-row items-center gap-6"><div class="flex flex-row gap-2"><!> <!></div> <!></div> <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div></div>'),Fe=d('<div class="mt-8 flex flex-col gap-12"></div>');function lo(H,K){le(K,!0);const Q=oe(),g=()=>te(Ae,"$mode",Q);let j=ce("");const V=s=>{const b=Ee.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),p=Se.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),_=Le.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),i=Pe.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),c=ye.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),r=[];return b.length&&r.push({icon:"i-carbon-assembly-cluster",name:"Skills",items:b.map(e=>({name:e.name,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/skills/${e.slug}`,color:e.color}))}),p.length&&r.push({icon:"i-carbon-cube",name:"Projects",items:p.map(e=>({name:e.name,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/projects/${e.slug}`,color:e.color}))}),_.length&&r.push({icon:"i-carbon-development",name:"Experience",items:_.map(e=>({name:e.name,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/experience/${e.slug}`,color:e.color}))}),i.length&&r.push({icon:"i-carbon-education",name:"Education",items:i.map(e=>({name:e.degree,logo:g()==="dark"?e.logo.dark:e.logo.light,link:`/education/${e.slug}`,color:z.gray}))}),c.length&&r.push({icon:"i-carbon-blog",name:"Blogs",items:c.map(e=>({name:e.name,logo:g()==="dark"?e.banner.dark:e.banner.light,link:`/blogs/${e.slug}`,color:z.gray}))}),r};let R=O(()=>V(o(j)));de(H,{title:"Search",onSearch:s=>ie(j,se(s)),children:(s,b)=>{var p=re(),_=x(p);ae(_,()=>o(R).length===0,i=>{me(i)},i=>{var c=Fe();J(c,21,()=>o(R),r=>r.name,(r,e)=>{var w=Te(),C=A(w),P=A(C),B=A(P);G(B,{children:(n,t)=>{he(n,{get icon(){return o(e).icon}})},$$slots:{default:!0}});var W=m(B,2);G(W,{children:(n,t)=>{D();var h=E();k(()=>y(h,o(e).name)),a(n,h)},$$slots:{default:!0}}),v(P);var X=m(P,2);xe(X,{class:"flex-1"}),v(C);var T=m(C,2);J(T,21,()=>o(e).items,n=>n.link,(n,t)=>{var h=O(()=>_e(o(t).link));ge(n,{get color(){return o(t).color},get href(){return o(h)},children:(Y,Me)=>{pe(Y,{class:"flex flex-row items-center gap-4",children:(Z,Ne)=>{var F=Be(),I=x(F);ue(I,{children:(L,ee)=>{var f=je(),u=x(f);$e(u,{children:($,M)=>{var l=De();k(()=>{U(l,"src",Ce.Unknown.light),U(l,"alt",o(t).name)}),a($,l)},$$slots:{default:!0}});var S=m(u,2);ve(S,{get src(){return o(t).logo}}),a(L,f)},$$slots:{default:!0}});var q=m(I,2);ke(q,{openDelay:300,children:(L,ee)=>{var f=Re(),u=x(f);be(u,{children:($,M)=>{fe($,{class:"line-clamp-2 truncate text-ellipsis text-left",children:(l,Oe)=>{D();var N=E();k(()=>y(N,o(t).name)),a(l,N)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=m(u,2);we(S,{children:($,M)=>{D();var l=E();k(()=>y(l,o(t).name)),a($,l)},$$slots:{default:!0}}),a(L,f)},$$slots:{default:!0}}),a(Z,F)},$$slots:{default:!0}})},$$slots:{default:!0}})}),v(T),v(w),a(r,w)}),v(c),a(i,c)}),a(s,p)},$$slots:{default:!0}}),ne()}export{lo as component};
