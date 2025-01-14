import{j as mt,p as h,c as x,b as _,n as ut,l as j,i as U,d as X,t as B,o as d,q as Et}from"./disclose-version.DgrYO7ja.js";import{i as rt,s as V,a as p}from"./legacy.CqLudUwD.js";import{t as qt,K as Bt,N as Gt,j as lt,D as N,F as bt,l as k,n as ct,I as it,g as o,O as u,v as J,G as Ct,r as ot,w as st,a as yt,P as jt,q as At,J as Ht}from"./index-client.aj5FnfNL.js";import{v as Lt,w as Ut,m as ft,s as Ft,e as wt,f as ht,r as Wt,j as Tt,k as kt,u as xt,n as vt,p as pt,i as Jt,d as St,a as Q,c as Pt,y as Xt}from"./utils.BZknjAdD.js";import{g as Qt,o as Yt,a as Zt,u as $t,c as It,t as tt}from"./events.xe7ZLnki.js";import{b as g}from"./misc.DcPUcBRK.js";import{I as te}from"./Icon.DjjfYkmU.js";import{d as Mt,w as ee}from"./paths.DHyTQ4nN.js";import{u as ne,c as ae,r as ie,h as zt}from"./action.DqZ3IkbU.js";import{t as Nt,c as oe,r as se,g as re}from"./updater.DS3J6E4e.js";const{name:gt}=Wt("dialog"),le={preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,role:"dialog",defaultOpen:!1,portal:void 0,forceVisible:!1,openFocus:void 0,closeFocus:void 0,onOutsideClick:void 0},ce=["content","title","description"];function de(O){const t={...le,...O},T=Nt(Lt(t,"ids")),{preventScroll:C,closeOnEscape:b,closeOnOutsideClick:y,role:n,portal:e,forceVisible:E,openFocus:G,closeFocus:A,onOutsideClick:z}=T,w=Ut.writable(null),P=Nt({...Qt(ce),...t.ids}),S=t.open??ee(t.defaultOpen),s=Yt(S,t==null?void 0:t.onOpenChange),r=Mt([s,E],([l,c])=>l||c);let F=vt;function I(l){const c=l.currentTarget,f=l.currentTarget;!St(c)||!St(f)||(s.set(!0),w.set(f))}function D(){s.set(!1),zt({prop:A.get(),defaultEl:w.get()})}const W=ft(gt("trigger"),{stores:[s],returned:([l])=>({"aria-haspopup":"dialog","aria-expanded":l,type:"button"}),action:l=>({destroy:wt(Tt(l,"click",f=>{I(f)}),Tt(l,"keydown",f=>{f.key!==kt.ENTER&&f.key!==kt.SPACE||(f.preventDefault(),I(f))}))})}),et=ft(gt("overlay"),{stores:[r,s],returned:([l,c])=>({hidden:l?void 0:!0,tabindex:-1,style:Ft({display:l?void 0:"none"}),"aria-hidden":!0,"data-state":c?"open":"closed"}),action:l=>{let c=vt;if(b.get()){const f=xt(l,{handler:()=>{D()}});f&&f.destroy&&(c=f.destroy)}return{destroy(){c()}}}}),dt=ft(gt("content"),{stores:[r,P.content,P.description,P.title,s],returned:([l,c,f,K,a])=>({id:c,role:n.get(),"aria-describedby":f,"aria-labelledby":K,"aria-modal":l?"true":void 0,"data-state":a?"open":"closed",tabindex:-1,hidden:l?void 0:!0,style:Ft({display:l?void 0:"none"})}),action:l=>{let c=vt,f=vt;const K=wt(ht([s,y,b],([a,M,L])=>{if(!a)return;const i=ae({immediate:!1,escapeDeactivates:L,clickOutsideDeactivates:M,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:l});c=i.activate,f=i.deactivate;const R=i.useFocusTrap(l);return R&&R.destroy?R.destroy:i.deactivate}),ht([y,s],([a,M])=>ne(l,{open:M,closeOnInteractOutside:a,onClose(){D()},shouldCloseOnInteractOutside(L){var i;return(i=z.get())==null||i(L),!L.defaultPrevented}}).destroy),ht([b],([a])=>a?xt(l,{handler:D}).destroy:vt),ht([r],([a])=>{qt().then(()=>{a?c():f()})}));return{destroy:()=>{F(),K()}}}}),nt=ft(gt("portalled"),{stores:e,returned:l=>({"data-portal":pt(l)}),action:l=>{const c=ht([e],([f])=>{if(f===null)return vt;const K=Zt(l,f);return K===null?vt:$t(l,K).destroy});return{destroy(){c()}}}}),at=ft(gt("title"),{stores:[P.title],returned:([l])=>({id:l})}),Y=ft(gt("description"),{stores:[P.description],returned:([l])=>({id:l})}),H=ft(gt("close"),{returned:()=>({type:"button"}),action:l=>({destroy:wt(Tt(l,"click",()=>{D()}),Tt(l,"keydown",f=>{f.key!==kt.SPACE&&f.key!==kt.ENTER||(f.preventDefault(),D())}))})});return ht([s,C],([l,c])=>{if(Jt){if(c&&l&&(F=ie()),l){const f=document.getElementById(P.content.get());zt({prop:G.get(),defaultEl:f})}return()=>{E.get()||F()}}}),{ids:P,elements:{content:dt,trigger:W,title:at,description:Y,overlay:et,close:H,portalled:nt},states:{open:s},options:T}}function Rt(){return{NAME:"dialog",PARTS:["close","content","description","overlay","portal","title","trigger"]}}function ue(O){const{NAME:t,PARTS:T}=Rt(),C=oe(t,T),b={...de({...se(O),role:"dialog",forceVisible:!0}),getAttrs:C};return Bt(t,b),{...b,updateOption:re(b.options)}}function Ot(){const{NAME:O}=Rt();return Gt(O)}function fe(O,t){lt(t,!1);const T=mt(),C=()=>ut(r,"$idValues",T);let b=h(t,"preventScroll",24,()=>{}),y=h(t,"closeOnEscape",24,()=>{}),n=h(t,"closeOnOutsideClick",24,()=>{}),e=h(t,"portal",24,()=>{}),E=h(t,"open",28,()=>{}),G=h(t,"onOpenChange",24,()=>{}),A=h(t,"openFocus",24,()=>{}),z=h(t,"closeFocus",24,()=>{}),w=h(t,"onOutsideClick",24,()=>{});const{states:{open:P},updateOption:S,ids:s}=ue({closeOnEscape:y(),preventScroll:b(),closeOnOutsideClick:n(),portal:e(),forceVisible:!0,defaultOpen:E(),openFocus:A(),closeFocus:z(),onOutsideClick:w(),onOpenChange:({next:D})=>{var W;return E()!==D&&((W=G())==null||W(D),E(D)),D}}),r=Mt([s.content,s.description,s.title],([D,W,et])=>({content:D,description:W,title:et}));N(()=>it(E()),()=>{E()!==void 0&&P.set(E())}),N(()=>it(b()),()=>{S("preventScroll",b())}),N(()=>it(y()),()=>{S("closeOnEscape",y())}),N(()=>it(n()),()=>{S("closeOnOutsideClick",n())}),N(()=>it(e()),()=>{S("portal",e())}),N(()=>it(A()),()=>{S("openFocus",A())}),N(()=>it(z()),()=>{S("closeFocus",z())}),N(()=>it(w()),()=>{S("onOutsideClick",w())}),bt(),rt();var F=x(),I=k(F);V(I,t,"default",{get ids(){return C()}}),_(O,F),ct()}var ve=B("<button><!></button>");function Vt(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(G,"$close",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{close:G},getAttrs:A}=Ot(),z=It(),w=A("close");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),w)}),bt(),rt();var P=x(),S=k(P);U(S,e,s=>{var r=x(),F=k(r);V(F,t,"default",{get builder(){return o(n)}}),_(s,r)},s=>{var r=ve();let F;var I=ot(r);V(I,t,"default",{get builder(){return o(n)}}),st(r),X(r,D=>E(D),()=>E()),Q(r,D=>o(n).action(D)),u(()=>d("m-click",r,z)),u(()=>d("m-keydown",r,z)),J(()=>F=p(r,F,{...o(n),type:"button",...C})),_(s,r)}),_(O,P),ct()}var ge=B("<div><!></div>");function _e(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(G,"$portalled",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{portalled:G},getAttrs:A}=Ot(),z=A("portal");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),z)}),bt(),rt();var w=x(),P=k(w);U(P,e,S=>{var s=x(),r=k(s);V(r,t,"default",{get builder(){return o(n)}}),_(S,s)},S=>{var s=ge();let r;var F=ot(s);V(F,t,"default",{get builder(){return o(n)}}),st(s),X(s,I=>E(I),()=>E()),Q(s,I=>o(n).action(I)),J(()=>r=p(s,r,{...o(n),...C})),_(S,s)}),_(O,w),ct()}var he=B("<div><!></div>"),me=B("<div><!></div>"),be=B("<div><!></div>"),Ce=B("<div><!></div>"),ye=B("<div><!></div>");function Oe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","el"]);lt(t,!1);const b=mt(),y=()=>ut(F,"$content",b),n=()=>ut(I,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),G=h(t,"transitionConfig",24,()=>{}),A=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"id",24,()=>{}),r=h(t,"el",28,()=>{});const{elements:{content:F},states:{open:I},ids:D,getAttrs:W}=Ot(),et=W("content");N(()=>it(s()),()=>{s()&&D.content.set(s())}),N(()=>y(),()=>{yt(e,y())}),N(()=>o(e),()=>{Object.assign(o(e),et)}),bt(),rt();var dt=x(),nt=k(dt);U(nt,()=>S()&&n(),at=>{var Y=x(),H=k(Y);V(H,t,"default",{get builder(){return o(e)}}),_(at,Y)},at=>{var Y=x(),H=k(Y);U(H,()=>E()&&n(),l=>{var c=he();let f;var K=ot(c);V(K,t,"default",{get builder(){return o(e)}}),st(c),X(c,a=>r(a),()=>r()),Q(c,a=>o(e).action(a)),u(()=>d("pointerdown",c,function(a){g.call(this,t,a)})),u(()=>d("pointermove",c,function(a){g.call(this,t,a)})),u(()=>d("pointerup",c,function(a){g.call(this,t,a)})),u(()=>d("touchcancel",c,function(a){g.call(this,t,a)})),u(()=>d("touchend",c,function(a){g.call(this,t,a)})),u(()=>d("touchmove",c,function(a){g.call(this,t,a)},void 0,!1)),u(()=>d("touchstart",c,function(a){g.call(this,t,a)},void 0,!1)),J(()=>f=p(c,f,{...o(e),...C})),tt(3,c,E,G),_(l,c)},l=>{var c=x(),f=k(c);U(f,()=>A()&&w()&&n(),K=>{var a=me();let M;var L=ot(a);V(L,t,"default",{get builder(){return o(e)}}),st(a),X(a,i=>r(i),()=>r()),Q(a,i=>o(e).action(i)),u(()=>d("pointerdown",a,function(i){g.call(this,t,i)})),u(()=>d("pointermove",a,function(i){g.call(this,t,i)})),u(()=>d("pointerup",a,function(i){g.call(this,t,i)})),u(()=>d("touchcancel",a,function(i){g.call(this,t,i)})),u(()=>d("touchend",a,function(i){g.call(this,t,i)})),u(()=>d("touchmove",a,function(i){g.call(this,t,i)},void 0,!1)),u(()=>d("touchstart",a,function(i){g.call(this,t,i)},void 0,!1)),J(()=>M=p(a,M,{...o(e),...C})),tt(1,a,A,z),tt(2,a,w,P),_(K,a)},K=>{var a=x(),M=k(a);U(M,()=>A()&&n(),L=>{var i=be();let R;var Z=ot(i);V(Z,t,"default",{get builder(){return o(e)}}),st(i),X(i,v=>r(v),()=>r()),Q(i,v=>o(e).action(v)),u(()=>d("pointerdown",i,function(v){g.call(this,t,v)})),u(()=>d("pointermove",i,function(v){g.call(this,t,v)})),u(()=>d("pointerup",i,function(v){g.call(this,t,v)})),u(()=>d("touchcancel",i,function(v){g.call(this,t,v)})),u(()=>d("touchend",i,function(v){g.call(this,t,v)})),u(()=>d("touchmove",i,function(v){g.call(this,t,v)},void 0,!1)),u(()=>d("touchstart",i,function(v){g.call(this,t,v)},void 0,!1)),J(()=>R=p(i,R,{...o(e),...C})),tt(1,i,A,z),_(L,i)},L=>{var i=x(),R=k(i);U(R,()=>w()&&n(),Z=>{var v=Ce();let $;var _t=ot(v);V(_t,t,"default",{get builder(){return o(e)}}),st(v),X(v,m=>r(m),()=>r()),Q(v,m=>o(e).action(m)),u(()=>d("pointerdown",v,function(m){g.call(this,t,m)})),u(()=>d("pointermove",v,function(m){g.call(this,t,m)})),u(()=>d("pointerup",v,function(m){g.call(this,t,m)})),u(()=>d("touchcancel",v,function(m){g.call(this,t,m)})),u(()=>d("touchend",v,function(m){g.call(this,t,m)})),u(()=>d("touchmove",v,function(m){g.call(this,t,m)},void 0,!1)),u(()=>d("touchstart",v,function(m){g.call(this,t,m)},void 0,!1)),J(()=>$=p(v,$,{...o(e),...C})),tt(2,v,w,P),_(Z,v)},Z=>{var v=x(),$=k(v);U($,n,_t=>{var m=ye();let Dt;var Kt=ot(m);V(Kt,t,"default",{get builder(){return o(e)}}),st(m),X(m,q=>r(q),()=>r()),Q(m,q=>o(e).action(q)),u(()=>d("pointerdown",m,function(q){g.call(this,t,q)})),u(()=>d("pointermove",m,function(q){g.call(this,t,q)})),u(()=>d("pointerup",m,function(q){g.call(this,t,q)})),u(()=>d("touchcancel",m,function(q){g.call(this,t,q)})),u(()=>d("touchend",m,function(q){g.call(this,t,q)})),u(()=>d("touchmove",m,function(q){g.call(this,t,q)},void 0,!1)),u(()=>d("touchstart",m,function(q){g.call(this,t,q)},void 0,!1)),J(()=>Dt=p(m,Dt,{...o(e),...C})),_(_t,m)},null,!0),_(Z,v)},!0),_(L,i)},!0),_(K,a)},!0),_(l,c)},!0),_(at,Y)}),_(O,dt),ct()}var Te=B("<div></div>"),ke=B("<div></div>"),Ee=B("<div></div>"),we=B("<div></div>"),Pe=B("<div></div>");function De(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(r,"$overlay",b),n=()=>ut(F,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),G=h(t,"transitionConfig",24,()=>{}),A=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"el",28,()=>{});const{elements:{overlay:r},states:{open:F},getAttrs:I}=Ot(),D=I("overlay");N(()=>y(),()=>{yt(e,y())}),N(()=>o(e),()=>{Object.assign(o(e),D)}),bt(),rt();var W=x(),et=k(W);U(et,()=>S()&&n(),dt=>{var nt=x(),at=k(nt);V(at,t,"default",{get builder(){return o(e)}}),_(dt,nt)},dt=>{var nt=x(),at=k(nt);U(at,()=>E()&&n(),Y=>{var H=Te();let l;u(()=>d("mouseup",H,function(c){g.call(this,t,c)})),X(H,c=>s(c),()=>s()),Q(H,c=>o(e).action(c)),J(()=>l=p(H,l,{...o(e),...C})),tt(3,H,E,G),_(Y,H)},Y=>{var H=x(),l=k(H);U(l,()=>A()&&w()&&n(),c=>{var f=ke();let K;X(f,a=>s(a),()=>s()),Q(f,a=>o(e).action(a)),u(()=>d("mouseup",f,function(a){g.call(this,t,a)})),J(()=>K=p(f,K,{...o(e),...C})),tt(1,f,A,z),tt(2,f,w,P),_(c,f)},c=>{var f=x(),K=k(f);U(K,()=>A()&&n(),a=>{var M=Ee();let L;X(M,i=>s(i),()=>s()),Q(M,i=>o(e).action(i)),u(()=>d("mouseup",M,function(i){g.call(this,t,i)})),J(()=>L=p(M,L,{...o(e),...C})),tt(1,M,A,z),_(a,M)},a=>{var M=x(),L=k(M);U(L,()=>w()&&n(),i=>{var R=we();let Z;X(R,v=>s(v),()=>s()),Q(R,v=>o(e).action(v)),u(()=>d("mouseup",R,function(v){g.call(this,t,v)})),J(()=>Z=p(R,Z,{...o(e),...C})),tt(2,R,w,P),_(i,R)},i=>{var R=x(),Z=k(R);U(Z,n,v=>{var $=Pe();let _t;X($,m=>s(m),()=>s()),Q($,m=>o(e).action(m)),u(()=>d("mouseup",$,function(m){g.call(this,t,m)})),J(()=>_t=p($,_t,{...o(e),...C})),_(v,$)},null,!0),_(i,R)},!0),_(a,M)},!0),_(c,f)},!0),_(Y,H)},!0),_(dt,nt)}),_(O,W),ct()}var Ae=B("<button><!></button>");function Fe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["asChild","el"]);lt(t,!1);const b=mt(),y=()=>ut(G,"$trigger",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{trigger:G},getAttrs:A}=Ot(),z=It(),w=A("trigger");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),w)}),bt(),rt();var P=x(),S=k(P);U(S,e,s=>{var r=x(),F=k(r);V(F,t,"default",{get builder(){return o(n)}}),_(s,r)},s=>{var r=Ae();let F;var I=ot(r);V(I,t,"default",{get builder(){return o(n)}}),st(r),X(r,D=>E(D),()=>E()),Q(r,D=>o(n).action(D)),u(()=>d("m-click",r,z)),u(()=>d("m-keydown",r,z)),J(()=>F=p(r,F,{...o(n),type:"button",...C})),_(s,r)}),_(O,P),ct()}function xe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,[]);_e(O,Et(()=>C,{children:(b,y)=>{var n=x(),e=k(n);V(e,t,"default",{}),_(b,n)},$$slots:{default:!0}}))}var Se=B("<div><!></div>");function Xe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["class"]);lt(t,!1);let b=h(t,"class",8,void 0);rt();var y=Se();let n;var e=ot(y);V(e,t,"default",{}),st(y),J(()=>n=p(y,n,{class:Pt("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",b()),...C})),_(O,y),ct()}const ze=O=>O;function Ne(O,{delay:t=0,duration:T=400,easing:C=ze}={}){const b=+getComputedStyle(O).opacity;return{delay:t,duration:T,easing:C,css:y=>`opacity: ${y*b}`}}function je(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["class","transition","transitionConfig"]);lt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,Ne),n=h(t,"transitionConfig",24,()=>({duration:150}));rt();var e=jt(()=>Pt("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm",b()));De(O,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return o(e)}},()=>C)),ct()}function Ie(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]);te(O,Et({name:"x"},()=>T,{iconNode:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],children:(b,y)=>{var n=x(),e=k(n);V(e,t,"default",{}),_(b,n)},$$slots:{default:!0}}))}var Me=B('<!> <span class="sr-only">Close</span>',1),Re=B("<!> <!>",1),Ve=B("<!> <!>",1);function Qe(O,t){const T=j(t,["children","$$slots","$$events","$$legacy"]),C=j(T,["class","transition","transitionConfig"]);lt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,Xt),n=h(t,"transitionConfig",24,()=>({duration:200}));rt(),xe(O,{children:(e,E)=>{var G=Ve(),A=k(G);je(A,{});var z=At(A,2),w=jt(()=>Pt("bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full",b()));Oe(z,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return o(w)}},()=>C,{children:(P,S)=>{var s=Re(),r=k(s);V(r,t,"default",{});var F=At(r,2);Vt(F,{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(I,D)=>{var W=Me(),et=k(W);Ie(et,{class:"h-4 w-4"}),Ht(2),_(I,W)},$$slots:{default:!0}}),_(P,s)},$$slots:{default:!0}})),_(e,G)},$$slots:{default:!0}}),ct()}const Ye=fe,Ze=Fe,$e=Vt;export{$e as C,Qe as D,Ye as R,Ze as T,Xe as a,Ot as g};
