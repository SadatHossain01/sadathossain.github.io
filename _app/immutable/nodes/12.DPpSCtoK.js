import{c as oe,a,b as d,t as E,s as y}from"../chunks/disclose-version.B0khQYAV.js";import{p as re,a as ae,f as x,g as o,d as O,b as se,c as A,s as m,n as D,t as k,r as v,e as te}from"../chunks/index-client.Bk3NiiHW.js";import{s as le,i as ne,b as ie,a as ce}from"../chunks/props.CgsOA59U.js";import{e as U}from"../chunks/updater.BKH6HeCP.js";import{s as z}from"../chunks/base.opWDD_FC.js";import{E as me}from"../chunks/empty-result.DriicxTk.js";import{S as de,F as pe,C as ge,a as fe,N as G}from"../chunks/fancy-card.meHew_L2.js";import{A as ue,a as $e,b as ve}from"../chunks/avatar-fallback.CYKuExDZ.js";import"../chunks/legacy.DMKoOk8V.js";import{h as _e}from"../chunks/utils.75Jl2K-G.js";import{I as he}from"../chunks/icon.5t_gCcI6.js";import{S as xe}from"../chunks/separator.CoQWxdL0.js";import{R as ke,T as be,a as we}from"../chunks/index.CKGqw25I.js";import{L as H}from"../chunks/large.DeMMNQ8X.js";import{A as Ce}from"../chunks/assets.CqUM8IFb.js";import{E as Pe}from"../chunks/education.CW9xGQFv.js";import{E as Le}from"../chunks/experience.z1SjJMjt.js";import{P as Se}from"../chunks/projects.BVVj-5Ha.js";import{S as Ee}from"../chunks/skills.C8rtSgEt.js";import{B as ye}from"../chunks/blogs.ChuN6Rzy.js";import{d as Ae}from"../chunks/stores.BmDG_jW-.js";var De=d("<img>"),je=d("<!> <!>",1),Re=d("<!> <!>",1),Be=d("<!> <!>",1),Te=d('<div class="flex flex-col gap-8"><div class="flex flex-row items-center gap-6"><div class="flex flex-row gap-2"><!> <!></div> <!></div> <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div></div>'),Fe=d('<div class="mt-8 flex flex-col gap-12"></div>');function io(J,K){re(K,!0);const Q=le(),p=()=>ce(Ae,"$mode",Q);let j=te("");const V=s=>{const b=Ee.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),g=Se.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),_=Le.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),i=Pe.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),c=ye.items.filter(e=>e.name.toLowerCase().includes(s.toLowerCase())),r=[];return b.length&&r.push({icon:"i-carbon-assembly-cluster",name:"Skills",items:b.map(e=>({name:e.name,logo:p()==="dark"?e.logo.dark:e.logo.light,link:`/skills/${e.slug}`,color:e.color}))}),g.length&&r.push({icon:"i-carbon-cube",name:"Projects",items:g.map(e=>({name:e.name,logo:p()==="dark"?e.logo.dark:e.logo.light,link:`/projects/${e.slug}`,color:e.color}))}),_.length&&r.push({icon:"i-carbon-development",name:"Experience",items:_.map(e=>({name:e.name,logo:p()==="dark"?e.logo.dark:e.logo.light,link:`/experience/${e.slug}`,color:e.color}))}),i.length&&r.push({icon:"i-carbon-education",name:"Education",items:i.map(e=>({name:e.degree,logo:p()==="dark"?e.logo.dark:e.logo.light,link:`/education/${e.slug}`,color:G.gray}))}),c.length&&r.push({icon:"i-carbon-blog",name:"Blogs",items:c.map(e=>({name:e.name,logo:p()==="dark"?e.banner.dark:e.banner.light,link:`/blogs/${e.slug}`,color:G.gray}))}),r};let R=O(()=>V(o(j)));de(J,{title:"Search",onSearch:s=>se(j,ie(s)),children:(s,b)=>{var g=oe(),_=x(g);ne(_,()=>o(R).length===0,i=>{me(i)},i=>{var c=Fe();U(c,21,()=>o(R),r=>r.name,(r,e)=>{var w=Te(),C=A(w),P=A(C),B=A(P);H(B,{children:(n,t)=>{he(n,{get icon(){return o(e).icon}})},$$slots:{default:!0}});var W=m(B,2);H(W,{children:(n,t)=>{D();var h=E();k(()=>y(h,o(e).name)),a(n,h)},$$slots:{default:!0}}),v(P);var X=m(P,2);xe(X,{class:"flex-1"}),v(C);var T=m(C,2);U(T,21,()=>o(e).items,n=>n.link,(n,t)=>{var h=O(()=>_e(o(t).link));pe(n,{get color(){return o(t).color},get href(){return o(h)},children:(Y,Me)=>{ge(Y,{class:"flex flex-row items-center gap-4",children:(Z,Ne)=>{var F=Be(),I=x(F);ue(I,{children:(L,ee)=>{var f=je(),u=x(f);$e(u,{children:($,M)=>{var l=De();k(()=>{z(l,"src",Ce.Unknown.light),z(l,"alt",o(t).name)}),a($,l)},$$slots:{default:!0}});var S=m(u,2);ve(S,{get src(){return o(t).logo}}),a(L,f)},$$slots:{default:!0}});var q=m(I,2);ke(q,{openDelay:300,children:(L,ee)=>{var f=Re(),u=x(f);be(u,{children:($,M)=>{fe($,{class:"line-clamp-2 truncate text-ellipsis text-left",children:(l,Oe)=>{D();var N=E();k(()=>y(N,o(t).name)),a(l,N)},$$slots:{default:!0}})},$$slots:{default:!0}});var S=m(u,2);we(S,{children:($,M)=>{D();var l=E();k(()=>y(l,o(t).name)),a($,l)},$$slots:{default:!0}}),a(L,f)},$$slots:{default:!0}}),a(Z,F)},$$slots:{default:!0}})},$$slots:{default:!0}})}),v(T),v(w),a(r,w)}),v(c),a(i,c)}),a(s,g)},$$slots:{default:!0}}),ae()}export{io as component};