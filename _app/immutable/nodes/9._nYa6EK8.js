import{c as ne,e as pe,a as v,b as Q,t as Be,s as Me}from"../chunks/disclose-version.B0khQYAV.js";import{aG as Ct,aH as _n,aC as yn,p as ze,D as J,b as mt,z,g as c,F as Dt,f as K,t as te,N as kn,a as Ue,G as St,c as Ee,r as Te,ak as tt,s as se,n as je,H as rn,d as dt,e as Ut}from"../chunks/index-client.Bk3NiiHW.js";import{l as De,s as Et,p as _,i as xe,c as nt,a as vt,d as on,b as Kt}from"../chunks/props.CgsOA59U.js";import{t as Pt,c as xn,r as wn,g as Tn,d as En,e as xt}from"../chunks/updater.BKH6HeCP.js";import{E as On}from"../chunks/empty-result.DriicxTk.js";import{F as Cn,a as An,C as Pn,S as In}from"../chunks/fancy-card.meHew_L2.js";import{b as rt,a as we,s as wt}from"../chunks/base.opWDD_FC.js";import{M as bt,A as Sn}from"../chunks/assets.CqUM8IFb.js";import{n as ot,p as h,w as ge,q as ft,y as sn,i as Se,m as ke,s as pt,z as Mn,l as Ie,j as M,F as Vt,k as me,S as Mt,E as Le,G as Ht,v as $e,x as Dn,f as Nt,o as an,e as Fn,d as st,c as ln,A as Rn,g as Xt,a as Kn,h as Nn}from"../chunks/utils.75Jl2K-G.js";import{e as Bn}from"../chunks/index.DDBfyhzG.js";import{d as jn}from"../chunks/stores.BmDG_jW-.js";import{i as ht}from"../chunks/legacy.DMKoOk8V.js";import{B as un}from"../chunks/button.CngvVb7R.js";import{I as Tt}from"../chunks/icon.5t_gCcI6.js";import{u as Ln,g as Wn,R as cn,T as dn,a as fn}from"../chunks/index.CKGqw25I.js";import{S as zn}from"../chunks/skill-badge.Flz3nc3_.js";import{A as Un,a as Vn,b as Hn}from"../chunks/avatar-fallback.CYKuExDZ.js";import{B as Gt}from"../chunks/badge.BCIrcxno.js";import{C as Xn}from"../chunks/card-footer.BUPsNJmH.js";import{C as Gn,T as Yn}from"../chunks/toggle.BaE74UFv.js";import{d as gt,w as fe,g as qn}from"../chunks/paths.1nTLVXnO.js";import{u as gn,g as Yt,a as qt,o as It,c as Lt,t as _t}from"../chunks/events.Cz28FMGY.js";import{s as at,w as Jn,c as Qn,u as Zn,h as $n,r as er}from"../chunks/action.BdGcglLP.js";import{c as tr,S as Jt}from"../chunks/separator.CoQWxdL0.js";import{b as We}from"../chunks/misc.CLyc0lh3.js";import{P as Bt}from"../chunks/projects.BVVj-5Ha.js";import{S as nr}from"../chunks/skills.C8rtSgEt.js";function rr(n){n.setAttribute("data-highlighted","")}function ct(n){n.removeAttribute("data-highlighted")}function or(n,e=500){let o=null;return function(...u){const g=()=>{o=null,n(...u)};o&&clearTimeout(o),o=setTimeout(g,e)}}function Qt(n){const{open:e,forceVisible:o,activeTrigger:u}=n;return gt([e,o,u],([g,d,a])=>(g||d)&&a!==null)}function de(n){ot&&at(1).then(()=>{const e=document.activeElement;!h(e)||e===n||(e.tabIndex=-1,n&&(n.tabIndex=0,n.focus()))})}function mn(){return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'))}function sr(n){const e=mn(),u=e.indexOf(n)+1,g=e[u];return u<e.length&&h(g)?g:null}function ar(n){const e=mn(),u=e.indexOf(n)-1,g=e[u];return u>=0&&h(g)?g:null}const ir=new Set(["Shift","Control","Alt","Meta","CapsLock","NumLock"]),lr={onMatch:de,getCurrentItem:()=>document.activeElement};function ur(n={}){const e={...lr,...n},o=ge(fe([])),u=or(()=>{o.update(()=>[])});return{typed:o,resetTyped:u,handleTypeaheadSearch:(d,a)=>{if(ir.has(d))return;const r=e.getCurrentItem(),f=qn(o);if(!Array.isArray(f))return;f.push(d.toLowerCase()),o.set(f);const k=a.filter(m=>!(m.getAttribute("disabled")==="true"||m.getAttribute("aria-disabled")==="true"||m.hasAttribute("data-disabled"))),T=f.length>1&&f.every(m=>m===f[0])?f[0]:f.join(""),D=h(r)?k.indexOf(r):-1;let B=Jn(k,Math.max(D,0));T.length===1&&(B=B.filter(m=>m!==r));const W=B.find(m=>(m==null?void 0:m.innerText)&&m.innerText.toLowerCase().startsWith(T.toLowerCase()));h(W)&&W!==r&&e.onMatch(W),u()}}}const cr={floating:{},focusTrap:{},modal:{},escapeKeydown:{},portal:"body"},Zt=(n,e)=>{n.dataset.escapee="";const{anchorElement:o,open:u,options:g}=e;if(!o||!u||!g)return{destroy:ft};const d={...cr,...g},a=[];if(d.portal!==null&&a.push(gn(n,d.portal).destroy),a.push(Ln(o,n,d.floating).destroy),d.focusTrap!==null){const{useFocusTrap:f}=Qn({immediate:!0,escapeDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:n,...d.focusTrap});a.push(f(n).destroy)}d.modal!==null&&a.push(Zn(n,{onClose:()=>{h(o)&&(u.set(!1),o.focus())},shouldCloseOnInteractOutside:f=>!(f.defaultPrevented||h(o)&&o.contains(f.target)),...d.modal}).destroy),d.escapeKeydown!==null&&a.push(sn(n,{enabled:u,handler:()=>{u.set(!1)},...d.escapeKeydown}).destroy);const r=Se(...a);return{destroy(){r()}}},dr={ltr:[...Mt,me.ARROW_RIGHT],rtl:[...Mt,me.ARROW_LEFT]},fr={ltr:[me.ARROW_LEFT],rtl:[me.ARROW_RIGHT]},$t=["menu","trigger"],gr={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,typeahead:!0,closeOnItemClick:!0,onOutsideClick:void 0};function mr(n){const{name:e,selector:o}=Dn(n.selector),{preventScroll:u,arrowSize:g,positioning:d,closeOnEscape:a,closeOnOutsideClick:r,portal:f,forceVisible:k,typeahead:w,loop:T,closeFocus:D,disableFocusFirstItem:B,closeOnItemClick:L,onOutsideClick:W}=n.rootOptions,m=n.rootOpen,F=n.rootActiveTrigger,p=n.nextFocusable,R=n.prevFocusable,E=ge.writable(!1),$=ge(fe(0)),re=ge(fe(null)),U=ge(fe("right")),H=ge(fe(null)),N=ge(gt([U,re],([t,s])=>i=>t===(s==null?void 0:s.side)&&vr(i,s==null?void 0:s.area))),{typed:Z,handleTypeaheadSearch:O}=ur(),X=Pt({...Yt($t),...n.ids}),ue=Qt({open:m,forceVisible:k,activeTrigger:F}),ce=ke(e(),{stores:[ue,f,X.menu,X.trigger],returned:([t,s,i,l])=>({role:"menu",hidden:t?void 0:!0,style:pt({display:t?void 0:"none"}),id:i,"aria-labelledby":l,"data-state":t?"open":"closed","data-portal":Mn(s),tabindex:-1}),action:t=>{let s=ft;const i=Ie([ue,F,d,r,f,a],([y,G,_e,V,C,I])=>{s(),!(!y||!G)&&Ct().then(()=>{s(),kt(t,o),s=Zt(t,{anchorElement:G,open:m,options:{floating:_e,modal:{closeOnInteractOutside:V,shouldCloseOnInteractOutside:x=>{var A;return(A=W.get())==null||A(x),!(x.defaultPrevented||h(G)&&G.contains(x.target))},onClose:()=>{m.set(!1),G.focus()},open:y},portal:qt(t,C),escapeKeydown:I?void 0:null}}).destroy})}),l=Se(M(t,"keydown",y=>{const G=y.target,_e=y.currentTarget;if(!h(G)||!h(_e)||!(G.closest('[role="menu"]')===_e))return;if(Vt.includes(y.key)&&tn(y,T.get()??!1),y.key===me.TAB){y.preventDefault(),m.set(!1),en(y,p,R);return}const C=y.key.length===1;!(y.ctrlKey||y.altKey||y.metaKey)&&C&&w.get()===!0&&O(y.key,et(_e))}));return{destroy(){i(),l(),s()}}}}),ve=ke(e("trigger"),{stores:[m,X.menu,X.trigger],returned:([t,s,i])=>({"aria-controls":s,"aria-expanded":t,"data-state":t?"open":"closed",id:i,tabindex:0}),action:t=>(At(t),F.update(i=>i||t),{destroy:Se(M(t,"click",i=>{const l=m.get(),y=i.currentTarget;h(y)&&(oe(y),l||i.preventDefault())}),M(t,"keydown",i=>{const l=i.currentTarget;if(!h(l)||!(Mt.includes(i.key)||i.key===me.ARROW_DOWN))return;i.preventDefault(),oe(l);const y=l.getAttribute("aria-controls");if(!y)return;const G=document.getElementById(y);if(!G)return;const _e=et(G);_e.length&&de(_e[0])}))})}),Y=ke(e("arrow"),{stores:g,returned:t=>({"data-arrow":!0,style:pt({position:"absolute",width:`var(--arrow-size, ${t}px)`,height:`var(--arrow-size, ${t}px)`})})}),Ge=ke(e("overlay"),{stores:[ue],returned:([t])=>({hidden:t?void 0:!0,tabindex:-1,style:pt({display:t?void 0:"none"}),"aria-hidden":"true","data-state":pr(t)}),action:t=>{let s=ft;if(a.get()){const l=sn(t,{handler:()=>{m.set(!1);const y=F.get();y&&y.focus()}});l&&l.destroy&&(s=l.destroy)}const i=Ie([f],([l])=>{if(l===null)return ft;const y=qt(t,l);return y===null?ft:gn(t,y).destroy});return{destroy(){s(),i()}}}}),Oe=ke(e("item"),{returned:()=>({role:"menuitem",tabindex:-1,"data-orientation":"vertical"}),action:t=>(kt(t,o),At(t),{destroy:Se(M(t,"pointerdown",i=>{const l=i.currentTarget;if(h(l)&&Le(l)){i.preventDefault();return}}),M(t,"click",i=>{const l=i.currentTarget;if(h(l)){if(Le(l)){i.preventDefault();return}if(i.defaultPrevented){de(l);return}L.get()&&at(1).then(()=>{m.set(!1)})}}),M(t,"keydown",i=>{be(i)}),M(t,"pointermove",i=>{He(i)}),M(t,"pointerleave",i=>{Qe(i)}),M(t,"focusin",i=>{Ke(i)}),M(t,"focusout",i=>{Ne(i)}))})}),Fe=ke(e("group"),{returned:()=>t=>({role:"group","aria-labelledby":t})}),Re=ke(e("group-label"),{returned:()=>t=>({id:t})}),Ce={defaultChecked:!1,disabled:!1},Ae=t=>{const s={...Ce,...t},i=s.checked??fe(s.defaultChecked??null),l=It(i,s.onCheckedChange),y=fe(s.disabled),G=ke(e("checkbox-item"),{stores:[l,y],returned:([C,I])=>({role:"menuitemcheckbox",tabindex:-1,"data-orientation":"vertical","aria-checked":it(C)?"mixed":C?"true":"false","data-disabled":Nt(I),"data-state":Rt(C)}),action:C=>(kt(C,o),At(C),{destroy:Se(M(C,"pointerdown",x=>{const A=x.currentTarget;if(h(A)&&Le(A)){x.preventDefault();return}}),M(C,"click",x=>{const A=x.currentTarget;if(h(A)){if(Le(A)){x.preventDefault();return}if(x.defaultPrevented){de(A);return}l.update(Xe=>it(Xe)?!0:!Xe),L.get()&&Ct().then(()=>{m.set(!1)})}}),M(C,"keydown",x=>{be(x)}),M(C,"pointermove",x=>{const A=x.currentTarget;if(h(A)){if(Le(A)){Ve(x);return}He(x,A)}}),M(C,"pointerleave",x=>{Qe(x)}),M(C,"focusin",x=>{Ke(x)}),M(C,"focusout",x=>{Ne(x)}))})}),_e=gt(l,C=>C===!0),V=gt(l,C=>C==="indeterminate");return{elements:{checkboxItem:G},states:{checked:l},helpers:{isChecked:_e,isIndeterminate:V},options:{disabled:y}}},Ye=(t={})=>{const s=t.value??fe(t.defaultValue??null),i=It(s,t.onValueChange),l=ke(e("radio-group"),{returned:()=>({role:"group"})}),y={disabled:!1},G=ke(e("radio-item"),{stores:[i],returned:([V])=>C=>{const{value:I,disabled:x}={...y,...C},A=V===I;return{disabled:x,role:"menuitemradio","data-state":A?"checked":"unchecked","aria-checked":A,"data-disabled":Nt(x),"data-value":I,"data-orientation":"vertical",tabindex:-1}},action:V=>(kt(V,o),{destroy:Se(M(V,"pointerdown",I=>{const x=I.currentTarget;if(!h(x))return;const A=V.dataset.value;if(V.dataset.disabled||A===void 0){I.preventDefault();return}}),M(V,"click",I=>{const x=I.currentTarget;if(!h(x))return;const A=V.dataset.value;if(V.dataset.disabled||A===void 0){I.preventDefault();return}if(I.defaultPrevented){if(!h(x))return;de(x);return}i.set(A),L.get()&&Ct().then(()=>{m.set(!1)})}),M(V,"keydown",I=>{be(I)}),M(V,"pointermove",I=>{const x=I.currentTarget;if(!h(x))return;const A=V.dataset.value;if(V.dataset.disabled||A===void 0){Ve(I);return}He(I,x)}),M(V,"pointerleave",I=>{Qe(I)}),M(V,"focusin",I=>{Ke(I)}),M(V,"focusout",I=>{Ne(I)}))})}),_e=gt(i,V=>C=>V===C);return{elements:{radioGroup:l,radioItem:G},states:{value:i},helpers:{isChecked:_e}}},{elements:{root:he}}=tr({orientation:"horizontal"}),qe={...gr,disabled:!1,positioning:{placement:"right-start",gutter:8}},Pe=t=>{const s={...qe,...t},i=s.open??fe(!1),l=It(i,s==null?void 0:s.onOpenChange),y=Pt(an(s,"ids")),{positioning:G,arrowSize:_e,disabled:V}=y,C=ge(fe(null)),I=ge(fe(null)),x=ge(fe(0)),A=Pt({...Yt($t),...s.ids});Ht(()=>{const P=document.getElementById(A.trigger.get());P&&C.set(P)});const Xe=Qt({open:l,forceVisible:k,activeTrigger:C}),hn=ke(e("submenu"),{stores:[Xe,A.menu,A.trigger],returned:([P,ie,ye])=>({role:"menu",hidden:P?void 0:!0,style:pt({display:P?void 0:"none"}),id:ie,"aria-labelledby":ye,"data-state":P?"open":"closed","data-id":ie,tabindex:-1}),action:P=>{let ie=ft;const ye=Ie([Xe,G],([b,j])=>{if(ie(),!b)return;const q=C.get();q&&Ct().then(()=>{ie();const ee=Wt(q);ie=Zt(P,{anchorElement:q,open:l,options:{floating:j,portal:h(ee)?ee:void 0,modal:null,focusTrap:null,escapeKeydown:null}}).destroy})}),S=Se(M(P,"keydown",b=>{if(b.key===me.ESCAPE)return;const j=b.target,q=b.currentTarget;if(!h(j)||!h(q)||!(j.closest('[role="menu"]')===q))return;if(Vt.includes(b.key)){b.stopImmediatePropagation(),tn(b,T.get()??!1);return}const lt=fr.ltr.includes(b.key),ut=b.ctrlKey||b.altKey||b.metaKey,Ot=b.key.length===1;if(lt){const zt=C.get();b.preventDefault(),l.update(()=>(zt&&de(zt),!1));return}if(b.key===me.TAB){b.preventDefault(),m.set(!1),en(b,p,R);return}!ut&&Ot&&w.get()===!0&&O(b.key,et(q))}),M(P,"pointermove",b=>{le(b)}),M(P,"focusout",b=>{const j=C.get();if(E.get()){const q=b.target,ee=document.getElementById(A.menu.get());if(!h(ee)||!h(q))return;!ee.contains(q)&&q!==j&&l.set(!1)}else{const q=b.currentTarget,ee=b.relatedTarget;if(!h(ee)||!h(q))return;!q.contains(ee)&&ee!==j&&l.set(!1)}}));return{destroy(){ye(),ie(),S()}}}}),bn=ke(e("subtrigger"),{stores:[l,V,A.menu,A.trigger],returned:([P,ie,ye,S])=>({role:"menuitem",id:S,tabindex:-1,"aria-controls":ye,"aria-expanded":P,"data-state":P?"open":"closed","data-disabled":Nt(ie),"aria-haspopop":"menu"}),action:P=>{kt(P,o),At(P),C.update(S=>S||P);const ie=()=>{jt(I),window.clearTimeout(x.get()),re.set(null)},ye=Se(M(P,"click",S=>{if(S.defaultPrevented)return;const b=S.currentTarget;!h(b)||Le(b)||(de(b),l.get()||l.update(j=>j||(C.set(b),!j)))}),M(P,"keydown",S=>{const b=Z.get(),j=S.currentTarget;if(!(!h(j)||Le(j)||b.length>0&&S.key===me.SPACE)&&dr.ltr.includes(S.key)){if(!l.get()){j.click(),S.preventDefault();return}const ee=j.getAttribute("aria-controls");if(!ee)return;const lt=document.getElementById(ee);if(!h(lt))return;const ut=et(lt)[0];de(ut)}}),M(P,"pointermove",S=>{if(!yt(S)||(ae(S),S.defaultPrevented))return;const b=S.currentTarget;if(!h(b))return;br(A.menu.get())||de(b);const j=I.get();!l.get()&&!j&&!Le(b)&&I.set(window.setTimeout(()=>{l.update(()=>(C.set(b),!0)),jt(I)},100))}),M(P,"pointerleave",S=>{if(!yt(S))return;jt(I);const b=document.getElementById(A.menu.get()),j=b==null?void 0:b.getBoundingClientRect();if(j){const q=b==null?void 0:b.dataset.side,ee=q==="right",lt=ee?-5:5,ut=j[ee?"left":"right"],Ot=j[ee?"right":"left"];re.set({area:[{x:S.clientX+lt,y:S.clientY},{x:ut,y:j.top},{x:Ot,y:j.top},{x:Ot,y:j.bottom},{x:ut,y:j.bottom}],side:q}),window.clearTimeout(x.get()),x.set(window.setTimeout(()=>{re.set(null)},300))}else{if(Je(S),S.defaultPrevented)return;re.set(null)}}),M(P,"focusout",S=>{const b=S.currentTarget;if(!h(b))return;ct(b);const j=S.relatedTarget;if(!h(j))return;const q=b.getAttribute("aria-controls");if(!q)return;const ee=document.getElementById(q);ee&&!ee.contains(j)&&l.set(!1)}),M(P,"focusin",S=>{Ke(S)}));return{destroy(){ie(),ye()}}}}),pn=ke(e("subarrow"),{stores:_e,returned:P=>({"data-arrow":!0,style:pt({position:"absolute",width:`var(--arrow-size, ${P}px)`,height:`var(--arrow-size, ${P}px)`})})});return Ie([m],([P])=>{P||(C.set(null),l.set(!1))}),Ie([re],([P])=>{!ot||P||window.clearTimeout(x.get())}),Ie([l],([P])=>{if(ot&&(P&&E.get()&&at(1).then(()=>{const ie=document.getElementById(A.menu.get());if(!ie)return;const ye=et(ie);ye.length&&de(ye[0])}),!P)){const ie=H.get(),ye=document.getElementById(A.trigger.get());if(ie&&at(1).then(()=>{const S=document.getElementById(A.menu.get());S&&S.contains(ie)&&ct(ie)}),!ye||document.activeElement===ye)return;ct(ye)}}),{ids:A,elements:{subTrigger:bn,subMenu:hn,subArrow:pn},states:{subOpen:l},options:y}};Ht(()=>{const t=document.getElementById(X.trigger.get());h(t)&&m.get()&&F.set(t);const s=[],i=()=>E.set(!1),l=()=>{E.set(!0),s.push(Se($e(document,"pointerdown",i,{capture:!0,once:!0}),$e(document,"pointermove",i,{capture:!0,once:!0})))},y=G=>{if(G.key===me.ESCAPE&&a.get()){m.set(!1);return}};return s.push($e(document,"keydown",l,{capture:!0})),s.push($e(document,"keydown",y)),()=>{s.forEach(G=>G())}}),Ie([m,H],([t,s])=>{!t&&s&&ct(s)}),Ie([m],([t])=>{if(ot&&!t){const s=F.get();if(!s)return;const i=D.get();!t&&s&&$n({prop:i,defaultEl:s})}}),Ie([m,u],([t,s])=>{if(!ot)return;const i=[];return t&&s&&i.push(er()),at(1).then(()=>{const l=document.getElementById(X.menu.get());if(l&&t&&E.get()){if(B.get()){de(l);return}const y=et(l);if(!y.length)return;de(y[0])}}),()=>{i.forEach(l=>l())}}),Ie(m,t=>{if(!ot)return;const s=()=>E.set(!1),i=l=>{if(E.set(!0),l.key===me.ESCAPE&&t&&a.get()){m.set(!1);return}};return Se($e(document,"pointerdown",s,{capture:!0,once:!0}),$e(document,"pointermove",s,{capture:!0,once:!0}),$e(document,"keydown",i,{capture:!0}))});function oe(t){m.update(s=>{const i=!s;return i&&(p.set(sr(t)),R.set(ar(t)),F.set(t)),i})}function Ke(t){const s=t.currentTarget;if(!h(s))return;const i=H.get();i&&ct(i),rr(s),H.set(s)}function Ne(t){const s=t.currentTarget;h(s)&&ct(s)}function ae(t){Ze(t)&&t.preventDefault()}function Ve(t){if(Ze(t))return;const s=t.target;if(!h(s))return;const i=Wt(s);i&&de(i)}function Je(t){Ze(t)&&t.preventDefault()}function le(t){if(!yt(t))return;const s=t.target,i=t.currentTarget;if(!h(i)||!h(s))return;const l=$.get(),y=l!==t.clientX;if(i.contains(s)&&y){const G=t.clientX>l?"right":"left";U.set(G),$.set(t.clientX)}}function He(t,s=null){if(!yt(t)||(ae(t),t.defaultPrevented))return;if(s){de(s);return}const i=t.currentTarget;h(i)&&de(i)}function Qe(t){yt(t)&&Ve(t)}function be(t){if(Z.get().length>0&&t.key===me.SPACE){t.preventDefault();return}if(Mt.includes(t.key)){t.preventDefault();const l=t.currentTarget;if(!h(l))return;l.click()}}function it(t){return t==="indeterminate"}function Rt(t){return it(t)?"indeterminate":t?"checked":"unchecked"}function Ze(t){return N.get()(t)}function Wt(t){const s=t.closest('[role="menu"]');return h(s)?s:null}return{elements:{trigger:ve,menu:ce,overlay:Ge,item:Oe,group:Fe,groupLabel:Re,arrow:Y,separator:he},builders:{createCheckboxItem:Ae,createSubmenu:Pe,createMenuRadioGroup:Ye},states:{open:m},helpers:{handleTypeaheadSearch:O},ids:X,options:n.rootOptions}}function en(n,e,o){if(n.shiftKey){const u=o.get();u&&(n.preventDefault(),at(1).then(()=>u.focus()),o.set(null))}else{const u=e.get();u&&(n.preventDefault(),at(1).then(()=>u.focus()),e.set(null))}}function et(n){return Array.from(n.querySelectorAll(`[data-melt-menu-id="${n.id}"]`)).filter(e=>h(e))}function At(n){!n||!Le(n)||(n.setAttribute("data-disabled",""),n.setAttribute("aria-disabled","true"))}function jt(n){if(!ot)return;const e=n.get();e&&(window.clearTimeout(e),n.set(null))}function yt(n){return n.pointerType==="mouse"}function kt(n,e){if(!n)return;const o=n.closest(`${e()}, ${e("submenu")}`);h(o)&&n.setAttribute("data-melt-menu-id",o.id)}function tn(n,e){n.preventDefault();const o=document.activeElement,u=n.currentTarget;if(!h(o)||!h(u))return;const g=et(u);if(!g.length)return;const d=g.filter(f=>!(f.hasAttribute("data-disabled")||f.getAttribute("disabled")==="true")),a=d.indexOf(o);let r;switch(n.key){case me.ARROW_DOWN:e?r=a<d.length-1?a+1:0:r=a<d.length-1?a+1:a;break;case me.ARROW_UP:e?r=a>0?a-1:d.length-1:r=a<0?d.length-1:a>0?a-1:0;break;case me.HOME:r=0;break;case me.END:r=d.length-1;break;default:return}de(d[r])}function vr(n,e){if(!e)return!1;const o={x:n.clientX,y:n.clientY};return hr(o,e)}function hr(n,e){const{x:o,y:u}=n;let g=!1;for(let d=0,a=e.length-1;d<e.length;a=d++){const r=e[d].x,f=e[d].y,k=e[a].x,w=e[a].y;f>u!=w>u&&o<(k-r)*(u-f)/(w-f)+r&&(g=!g)}return g}function br(n){const e=document.activeElement;if(!h(e))return!1;const o=e.closest(`[data-id="${n}"]`);return h(o)}function pr(n){return n?"open":"closed"}const _r={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,forceVisible:!1,typeahead:!0,closeFocus:void 0,disableFocusFirstItem:!1,closeOnItemClick:!0,onOutsideClick:void 0};function yr(n){const e={..._r,...n},o=Pt(an(e,"ids")),u=e.open??fe(e.defaultOpen),g=It(u,e==null?void 0:e.onOpenChange),d=ge(fe(null)),a=ge(fe(null)),r=ge(fe(null)),{elements:f,builders:k,ids:w,states:T,options:D}=mr({rootOptions:o,rootOpen:g,rootActiveTrigger:ge(d),nextFocusable:ge(a),prevFocusable:ge(r),selector:"dropdown-menu",removeScroll:!0,ids:e.ids});return{ids:w,elements:f,states:T,builders:k,options:D}}function vn(){return{NAME:"menu",SUB_NAME:"menu-submenu",RADIO_GROUP_NAME:"menu-radiogroup",CHECKBOX_ITEM_NAME:"menu-checkboxitem",RADIO_ITEM_NAME:"menu-radioitem",GROUP_NAME:"menu-group",PARTS:["arrow","checkbox-indicator","checkbox-item","content","group","item","label","radio-group","radio-item","radio-indicator","separator","sub-content","sub-trigger","trigger"]}}function Ft(){const{NAME:n}=vn();return _n(n)}function kr(n){const{NAME:e,PARTS:o}=vn(),u=xn("menu",o),g={...yr({...wn(n),forceVisible:!0}),getAttrs:u};return yn(e,g),{...g,updateOption:Tn(g.options)}}function xr(n){const o={...{side:"bottom",align:"center"},...n},{options:{positioning:u}}=Ft();Wn(u)(o)}function wr(n,e){const o=De(e,["children","$$slots","$$events","$$legacy"]),u=De(o,["href","asChild","disabled","el"]);ze(e,!1);const g=Et(),d=()=>vt(D,"$item",g),a=St(),r=St();let f=_(e,"href",24,()=>{}),k=_(e,"asChild",8,!1),w=_(e,"disabled",8,!1),T=_(e,"el",28,()=>{});const{elements:{item:D},getAttrs:B}=Ft(),L=Lt();J(()=>d(),()=>{mt(a,d())}),J(()=>z(w()),()=>{mt(r,{...B("item"),...En(w())})}),J(()=>(c(a),c(r)),()=>{Object.assign(c(a),c(r))}),Dt(),ht();var W=ne(),m=K(W);xe(m,k,F=>{var p=ne(),R=K(p);we(R,e,"default",{get builder(){return c(a)}}),v(F,p)},F=>{var p=ne(),R=K(p);Fn(R,()=>f()?"a":"div",!1,(E,$)=>{nt(E,N=>T(N),()=>T()),st(E,N=>c(a).action(N));let re;te(()=>re=rt(E,re,{href:f(),...c(a),...u},void 0,E.namespaceURI===kn,E.nodeName.includes("-"))),pe("m-click",E,L),pe("m-focusin",E,L),pe("m-focusout",E,L),pe("m-keydown",E,L),pe("m-pointerdown",E,L),pe("m-pointerleave",E,L),pe("m-pointermove",E,L),pe("pointerenter",E,function(N){We.call(this,e,N)});var U=ne(),H=K(U);we(H,e,"default",{get builder(){return c(a)}}),v($,U)}),v(F,p)}),v(n,W),Ue()}function Tr(n,e){ze(e,!1);const o=Et(),u=()=>vt(E,"$idValues",o);let g=_(e,"closeOnOutsideClick",24,()=>{}),d=_(e,"closeOnEscape",24,()=>{}),a=_(e,"portal",24,()=>{}),r=_(e,"open",28,()=>{}),f=_(e,"onOpenChange",24,()=>{}),k=_(e,"preventScroll",24,()=>{}),w=_(e,"loop",24,()=>{}),T=_(e,"dir",24,()=>{}),D=_(e,"typeahead",24,()=>{}),B=_(e,"closeFocus",24,()=>{}),L=_(e,"disableFocusFirstItem",24,()=>{}),W=_(e,"closeOnItemClick",24,()=>{}),m=_(e,"onOutsideClick",24,()=>{});const{states:{open:F},updateOption:p,ids:R}=kr({closeOnOutsideClick:g(),closeOnEscape:d(),portal:a(),forceVisible:!0,defaultOpen:r(),preventScroll:k(),loop:w(),dir:T(),typeahead:D(),closeFocus:B(),disableFocusFirstItem:L(),closeOnItemClick:W(),onOutsideClick:m(),onOpenChange:({next:U})=>{var H;return r()!==U&&((H=f())==null||H(U),r(U)),U}}),E=gt([R.menu,R.trigger],([U,H])=>({menu:U,trigger:H}));J(()=>z(r()),()=>{r()!==void 0&&F.set(r())}),J(()=>z(g()),()=>{p("closeOnOutsideClick",g())}),J(()=>z(d()),()=>{p("closeOnEscape",d())}),J(()=>z(a()),()=>{p("portal",a())}),J(()=>z(k()),()=>{p("preventScroll",k())}),J(()=>z(w()),()=>{p("loop",w())}),J(()=>z(T()),()=>{p("dir",T())}),J(()=>z(B()),()=>{p("closeFocus",B())}),J(()=>z(L()),()=>{p("disableFocusFirstItem",L())}),J(()=>z(D()),()=>{p("typeahead",D())}),J(()=>z(W()),()=>{p("closeOnItemClick",W())}),J(()=>z(m()),()=>{p("onOutsideClick",m())}),Dt(),ht();var $=ne(),re=K($);we(re,e,"default",{get ids(){return u()}}),v(n,$),Ue()}var Er=Q("<div><!></div>"),Or=Q("<div><!></div>"),Cr=Q("<div><!></div>"),Ar=Q("<div><!></div>"),Pr=Q("<div><!></div>");function Ir(n,e){const o=De(e,["children","$$slots","$$events","$$legacy"]),u=De(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);ze(e,!1);const g=Et(),d=()=>vt(X,"$menu",g),a=()=>vt(ue,"$open",g),r=St();let f=_(e,"transition",24,()=>{}),k=_(e,"transitionConfig",24,()=>{}),w=_(e,"inTransition",24,()=>{}),T=_(e,"inTransitionConfig",24,()=>{}),D=_(e,"outTransition",24,()=>{}),B=_(e,"outTransitionConfig",24,()=>{}),L=_(e,"asChild",8,!1),W=_(e,"id",24,()=>{}),m=_(e,"side",8,"bottom"),F=_(e,"align",8,"center"),p=_(e,"sideOffset",8,0),R=_(e,"alignOffset",8,0),E=_(e,"collisionPadding",8,8),$=_(e,"avoidCollisions",8,!0),re=_(e,"collisionBoundary",24,()=>{}),U=_(e,"sameWidth",8,!1),H=_(e,"fitViewport",8,!1),N=_(e,"strategy",8,"absolute"),Z=_(e,"overlap",8,!1),O=_(e,"el",28,()=>{});const{elements:{menu:X},states:{open:ue},ids:ce,getAttrs:ve}=Ft(),Y=Lt(),Ge=ve("content");J(()=>z(W()),()=>{W()&&ce.menu.set(W())}),J(()=>d(),()=>{mt(r,d())}),J(()=>c(r),()=>{Object.assign(c(r),Ge)}),J(()=>(a(),z(m()),z(F()),z(p()),z(R()),z(E()),z($()),z(re()),z(U()),z(H()),z(N()),z(Z())),()=>{a()&&xr({side:m(),align:F(),sideOffset:p(),alignOffset:R(),collisionPadding:E(),avoidCollisions:$(),collisionBoundary:re(),sameWidth:U(),fitViewport:H(),strategy:N(),overlap:Z()})}),Dt(),ht();var Oe=ne(),Fe=K(Oe);xe(Fe,()=>L()&&a(),Re=>{var Ce=ne(),Ae=K(Ce);we(Ae,e,"default",{get builder(){return c(r)}}),v(Re,Ce)},Re=>{var Ce=ne(),Ae=K(Ce);xe(Ae,()=>f()&&a(),Ye=>{var he=Er();let qe;var Pe=Ee(he);we(Pe,e,"default",{get builder(){return c(r)}}),Te(he),nt(he,oe=>O(oe),()=>O()),st(he,oe=>c(r).action(oe)),tt(()=>pe("m-keydown",he,Y)),te(()=>qe=rt(he,qe,{...c(r),...u})),_t(3,he,f,k),v(Ye,he)},Ye=>{var he=ne(),qe=K(he);xe(qe,()=>w()&&D()&&a(),Pe=>{var oe=Or();let Ke;var Ne=Ee(oe);we(Ne,e,"default",{get builder(){return c(r)}}),Te(oe),nt(oe,ae=>O(ae),()=>O()),st(oe,ae=>c(r).action(ae)),tt(()=>pe("m-keydown",oe,Y)),te(()=>Ke=rt(oe,Ke,{...c(r),...u})),_t(1,oe,w,T),_t(2,oe,D,B),v(Pe,oe)},Pe=>{var oe=ne(),Ke=K(oe);xe(Ke,()=>w()&&a(),Ne=>{var ae=Cr();let Ve;var Je=Ee(ae);we(Je,e,"default",{get builder(){return c(r)}}),Te(ae),nt(ae,le=>O(le),()=>O()),st(ae,le=>c(r).action(le)),tt(()=>pe("m-keydown",ae,Y)),te(()=>Ve=rt(ae,Ve,{...c(r),...u})),_t(1,ae,w,T),v(Ne,ae)},Ne=>{var ae=ne(),Ve=K(ae);xe(Ve,()=>D()&&a(),Je=>{var le=Ar();let He;var Qe=Ee(le);we(Qe,e,"default",{get builder(){return c(r)}}),Te(le),nt(le,be=>O(be),()=>O()),st(le,be=>c(r).action(be)),tt(()=>pe("m-keydown",le,Y)),te(()=>He=rt(le,He,{...c(r),...u})),_t(2,le,D,B),v(Je,le)},Je=>{var le=ne(),He=K(le);xe(He,a,Qe=>{var be=Pr();let it;var Rt=Ee(be);we(Rt,e,"default",{get builder(){return c(r)}}),Te(be),nt(be,Ze=>O(Ze),()=>O()),st(be,Ze=>c(r).action(Ze)),tt(()=>pe("m-keydown",be,Y)),te(()=>it=rt(be,it,{...c(r),...u})),v(Qe,be)},null,!0),v(Je,le)},!0),v(Ne,ae)},!0),v(Pe,oe)},!0),v(Ye,he)},!0),v(Re,Ce)}),v(n,Oe),Ue()}var Sr=Q("<button><!></button>");function Mr(n,e){const o=De(e,["children","$$slots","$$events","$$legacy"]),u=De(o,["asChild","id","el"]);ze(e,!1);const g=Et(),d=()=>vt(w,"$trigger",g),a=St();let r=_(e,"asChild",8,!1),f=_(e,"id",24,()=>{}),k=_(e,"el",28,()=>{});const{elements:{trigger:w},ids:T,getAttrs:D}=Ft(),B=Lt(),L=D("trigger");J(()=>z(f()),()=>{f()&&T.trigger.set(f())}),J(()=>d(),()=>{mt(a,d())}),J(()=>c(a),()=>{Object.assign(c(a),L)}),Dt(),ht();var W=ne(),m=K(W);xe(m,r,F=>{var p=ne(),R=K(p);we(R,e,"default",{get builder(){return c(a)}}),v(F,p)},F=>{var p=Sr();let R;var E=Ee(p);we(E,e,"default",{get builder(){return c(a)}}),Te(p),nt(p,$=>k($),()=>k()),st(p,$=>c(a).action($)),tt(()=>pe("m-keydown",p,B)),tt(()=>pe("m-pointerdown",p,B)),te(()=>R=rt(p,R,{...c(a),type:"button",...u})),v(F,p)}),v(n,W),Ue()}var Dr=Q("<!> <!>",1),Fr=Q("<a><!></a>");function nn(n,e){ze(e,!0);var o=Fr(),u=Ee(o);cn(u,{openDelay:300,children:(g,d)=>{var a=Dr(),r=K(a);dn(r,{children:(k,w)=>{un(k,{size:"icon",variant:"outline",children:(T,D)=>{Tt(T,{icon:"i-carbon-link"})},$$slots:{default:!0}})},$$slots:{default:!0}});var f=se(r,2);fn(f,{children:(k,w)=>{je();var T=Be();te(()=>Me(T,e.link.label)),v(k,T)},$$slots:{default:!0}}),v(g,a)},$$slots:{default:!0}}),Te(o),te(()=>{wt(o,"href",e.link.to),wt(o,"target",e.link.newTab==!1?void 0:"_blank")}),v(n,o),Ue()}function Rr(n,e){const o=De(e,["children","$$slots","$$events","$$legacy"]),u=De(o,["class","inset"]);ze(e,!1);let g=_(e,"class",8,void 0),d=_(e,"inset",8,void 0);ht();var a=rn(()=>ln("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",d()&&"pl-8",g()));wr(n,on({get class(){return c(a)}},()=>u,{$$events:{click(r){We.call(this,e,r)},keydown(r){We.call(this,e,r)},focusin(r){We.call(this,e,r)},focusout(r){We.call(this,e,r)},pointerdown(r){We.call(this,e,r)},pointerleave(r){We.call(this,e,r)},pointermove(r){We.call(this,e,r)}},children:(r,f)=>{var k=ne(),w=K(k);we(w,e,"default",{}),v(r,k)},$$slots:{default:!0}})),Ue()}function Kr(n,e){const o=De(e,["children","$$slots","$$events","$$legacy"]),u=De(o,["class","sideOffset","transition","transitionConfig"]);ze(e,!1);let g=_(e,"class",8,void 0),d=_(e,"sideOffset",8,4),a=_(e,"transition",8,Rn),r=_(e,"transitionConfig",8,void 0);ht();var f=rn(()=>ln("bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none",g()));Ir(n,on({get transition(){return a()},get transitionConfig(){return r()},get sideOffset(){return d()},get class(){return c(f)}},()=>u,{$$events:{keydown(k){We.call(this,e,k)}},children:(k,w)=>{var T=ne(),D=K(T);we(D,e,"default",{}),v(k,T)},$$slots:{default:!0}})),Ue()}const Nr=Tr,Br=Mr;var jr=Q("<img>"),Lr=Q("<!> <!>",1),Wr=Q("<!> <!>",1),zr=Q('<a target="_blank"><!></a>'),Ur=Q("<!> <!>",1),Vr=Q("<!> <!>",1),Hr=Q('<!> <div class="flex w-full flex-row items-center gap-1 overflow-x-hidden"><!> <!></div> <!>',1),Xr=Q("<!> <!>",1),Gr=Q("<!> <!>",1),Yr=Q('<!> <!> <!> <div class="flex w-full flex-row items-center justify-between"><!> <!></div> <!>',1),qr=Q("<!> <!> <!>",1);function Jr(n,e){ze(e,!0);const o=Et(),u=()=>vt(jn,"$mode",o);let g=dt(()=>Xt(e.project.period.from)),d=e.project.period.to!=null,a=dt(()=>Xt(e.project.period.to)),r=dt(()=>Kn(e.project.period.from,e.project.period.to));var f=dt(()=>Nn(`/projects/${e.project.slug}`));Cn(n,{get color(){return e.project.color},class:"flex h-full flex-col",get href(){return c(f)},children:(k,w)=>{var T=qr(),D=K(T);Gn(D,{class:"flex w-full flex-col gap-4",children:(W,m)=>{var F=Hr(),p=K(F);Un(p,{children:(U,H)=>{var N=Lr(),Z=K(N);Vn(Z,{children:(ue,ce)=>{var ve=jr();te(()=>{wt(ve,"src",Sn.Unknown.light),wt(ve,"alt",e.project.name)}),v(ue,ve)},$$slots:{default:!0}});var O=se(Z,2),X=dt(()=>u()==="dark"?e.project.logo.dark:e.project.logo.light);Hn(O,{get src(){return c(X)}}),v(U,N)},$$slots:{default:!0}});var R=se(p,2),E=Ee(R);An(E,{class:"h-auto min-w-0 flex-1 overflow-x-hidden",children:(U,H)=>{cn(U,{children:(N,Z)=>{var O=Wr(),X=K(O);dn(X,{class:"w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left",children:(ce,ve)=>{je();var Y=Be();te(()=>Me(Y,e.project.name)),v(ce,Y)},$$slots:{default:!0}});var ue=se(X,2);fn(ue,{children:(ce,ve)=>{je();var Y=Be();te(()=>Me(Y,e.project.name)),v(ce,Y)},$$slots:{default:!0}}),v(N,O)},$$slots:{default:!0}})},$$slots:{default:!0}});var $=se(E,2);xe($,()=>e.project.links.length>2,U=>{var H=Vr(),N=K(H);nn(N,{get link(){return e.project.links[0]}});var Z=se(N,2);Nr(Z,{children:(O,X)=>{var ue=Ur(),ce=K(ue);Br(ce,{children:(Y,Ge)=>{un(Y,{size:"icon",variant:"outline",children:(Oe,Fe)=>{Tt(Oe,{icon:"i-carbon-overflow-menu-vertical"})},$$slots:{default:!0}})},$$slots:{default:!0}});var ve=se(ce,2);Kr(ve,{children:(Y,Ge)=>{var Oe=ne(),Fe=K(Oe);xt(Fe,17,()=>e.project.links.slice(1),Re=>Re.to,(Re,Ce)=>{var Ae=zr(),Ye=Ee(Ae);Rr(Ye,{children:(he,qe)=>{je();var Pe=Be();te(()=>Me(Pe,c(Ce).label)),v(he,Pe)},$$slots:{default:!0}}),Te(Ae),te(()=>wt(Ae,"href",c(Ce).to)),v(Re,Ae)}),v(Y,Oe)},$$slots:{default:!0}}),v(O,ue)},$$slots:{default:!0}}),v(U,H)},U=>{var H=ne(),N=K(H);xt(N,17,()=>e.project.links,Z=>Z.to,(Z,O)=>{nn(Z,{get link(){return c(O)}})}),v(U,H)}),Te(R);var re=se(R,2);Jt(re,{}),v(W,F)},$$slots:{default:!0}});var B=se(D,2);Pn(B,{class:"flex flex-1 flex-col gap-4",children:(W,m)=>{var F=Yr(),p=K(F);bt(p,{className:"flex flex-row gap-2 items-center",children:(N,Z)=>{var O=Xr(),X=K(O);Tt(X,{icon:"i-carbon-assembly-cluster"});var ue=se(X,2);bt(ue,{children:(ce,ve)=>{je();var Y=Be();te(()=>Me(Y,e.project.type)),v(ce,Y)},$$slots:{default:!0}}),v(N,O)},$$slots:{default:!0}});var R=se(p,2);bt(R,{className:"flex flex-row gap-2 items-center",children:(N,Z)=>{var O=ne(),X=K(O);xe(X,()=>d,ue=>{var ce=Gr(),ve=K(ce);Tt(ve,{icon:"i-carbon-time"});var Y=se(ve,2);bt(Y,{children:(Ge,Oe)=>{je();var Fe=Be();te(()=>Me(Fe,c(r))),v(Ge,Fe)},$$slots:{default:!0}}),v(ue,ce)}),v(N,O)},$$slots:{default:!0}});var E=se(R,2);bt(E,{className:"flex-1",children:(N,Z)=>{je();var O=Be();te(()=>Me(O,Bn(e.project.shortDescription,100))),v(N,O)},$$slots:{default:!0}});var $=se(E,2),re=Ee($);Gt(re,{variant:"outline",children:(N,Z)=>{je();var O=Be();te(()=>Me(O,c(g))),v(N,O)},$$slots:{default:!0}});var U=se(re,2);xe(U,()=>d,N=>{Gt(N,{variant:"outline",children:(Z,O)=>{je();var X=Be();te(()=>Me(X,c(a))),v(Z,X)},$$slots:{default:!0}})}),Te($);var H=se($,2);Jt(H,{}),v(W,F)},$$slots:{default:!0}});var L=se(B,2);Xn(L,{class:"flex flex-row flex-wrap items-center gap-2",children:(W,m)=>{var F=ne(),p=K(F);xt(p,17,()=>e.project.skills,R=>R.slug,(R,E)=>{zn(R,{get skill(){return c(E)}})}),v(W,F)},$$slots:{default:!0}}),v(k,T)},$$slots:{default:!0}}),Ue()}var Qr=Q("<!> ",1),Zr=Q('<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>'),$r=Q('<div class="flex flex-1 flex-col gap-8"><div class="flex flex-row flex-wrap gap-2"></div> <!></div>');function Ao(n,e){ze(e,!0);let o=Ut(Kt(nr.items.filter(r=>Bt.items.some(f=>f.skills.some(k=>k.slug===r.slug))))),u=Ut(""),g=dt(()=>Bt.items.filter(r=>{const f=c(o).every(w=>!w.isSelected)||r.skills.some(w=>c(o).some(T=>T.isSelected&&T.slug===w.slug)),k=c(u).trim().length===0||r.name.trim().toLowerCase().includes(c(u).trim().toLowerCase());return f&&k}));const d=r=>{mt(o,Kt(c(o).map(f=>f.slug===r?{...f,isSelected:!f.isSelected}:f)))};In(n,{get title(){return Bt.title},onSearch:r=>mt(u,Kt(r)),children:(r,f)=>{var k=$r(),w=Ee(k);xt(w,21,()=>c(o),D=>D.slug,(D,B)=>{Yn(D,{get pressed(){return c(B).isSelected},variant:"outline",class:"flex flex-row items-center gap-2 rounded-lg",$$events:{click:()=>d(c(B).slug)},children:(L,W)=>{var m=Qr(),F=K(m);xe(F,()=>c(B).isSelected,R=>{Tt(R,{icon:"i-carbon-close"})});var p=se(F);te(()=>Me(p,` ${c(B).name??""}`)),v(L,m)},$$slots:{default:!0}})}),Te(w);var T=se(w,2);xe(T,()=>c(g).length===0,D=>{On(D)},D=>{var B=Zr();xt(B,21,()=>c(g),L=>L.slug,(L,W)=>{Jr(L,{get project(){return c(W)}})}),Te(B),v(D,B)}),Te(k),v(r,k)},$$slots:{default:!0}}),Ue()}export{Ao as component};
