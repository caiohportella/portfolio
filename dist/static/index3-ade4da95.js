import{q as fe,s as ye,r as p,t as q,v as J,w as Y,g as O,x as xe,u as se,y as $,j as l,L as H,z as K,E as ge,F as ve,G as ie,H as Pe,I as Ie,J as we,K as D,M as be,N as W,O as je,S as Se,Q as _e,m as ke,R as Ee,T as Te,k as Re,U as Ce,V as De,W as oe,X as $e,Y as R,Z as V,$ as A,a0 as G,a1 as z,a2 as le,a3 as Le,a4 as U,a5 as k,a6 as X,l as N,a7 as de,B as Me,a8 as ze,P as Ne,h as Oe,p as Ve,a9 as Z,aa as ee,ab as Ae,ac as Be,ad as te,ae as Q,af as We,ag as Ge,ah as Fe,ai as He,aj as ue,ak as Ke,al as Ue,am as qe,an as Je,ao as L,ap as Ye,aq as Qe,ar as Xe,as as Ze,at as et}from"./sanity-1fc16b6c.js";function tt(){return fe(function(e,n){var t,o=!1;e.subscribe(ye(n,function(s){var i=t;t=s,o&&n.next([i,s]),o=!0}))})}const nt=[];function at(e){const{children:n,flatIndex:t,index:o,params:s,payload:i,siblingIndex:a}=e,{navigate:r,navigateIntent:d,resolvePathFromState:y}=q(),u=J(),{panes:m,expand:f}=ke(),c=p.useMemo(()=>(u==null?void 0:u.panes)||nt,[u==null?void 0:u.panes]),h=p.useMemo(()=>m==null?void 0:m[m.length-2],[m]),g=o-1,b=p.useCallback(x=>{const P=c[g]||[],w=P[a],E=x(P,w),me=[...c.slice(0,g),E,...c.slice(g+1)];return{...u||{},panes:me}},[g,c,u,a]),I=p.useCallback(x=>{const P=b(x);return setTimeout(()=>r(P),0),P},[b,r]),S=p.useCallback(x=>{const P=b((w,E)=>[...w.slice(0,a),{...E,params:x},...w.slice(a+1)]);return y(P)},[b,y,a]),_=p.useCallback(x=>{I((P,w)=>[...P.slice(0,a),{...w,payload:x},...P.slice(a+1)])},[I,a]),v=p.useCallback(x=>{I((P,w)=>[...P.slice(0,a),{...w,params:x},...P.slice(a+1)])},[I,a]),j=p.useCallback(({id:x,parentRefPath:P,type:w,template:E})=>{r({panes:[...c.slice(0,g+1),[{id:x,params:{template:E.id,parentRefPath:Ee(P),type:w},payload:E.params}]]})},[g,r,c]),T=p.useMemo(()=>({index:t,groupIndex:g,siblingIndex:a,payload:i,params:s,hasGroupSiblings:c[g]?c[g].length>1:!1,groupLength:c[g]?c[g].length:0,routerPanesState:c,ChildLink:Te,BackLink:t?Re:void 0,ReferenceChildLink:Ce,handleEditReference:j,ParameterizedLink:De,replaceCurrent:(x={})=>{I(()=>[{id:x.id||"",payload:x.payload,params:x.params||{}}])},closeCurrent:()=>{I((x,P)=>x.length>1?x.filter(w=>w!==P):x)},closeCurrentAndAfter:(x=!0)=>{x&&h&&f(h.element),r({panes:[...c.slice(0,g)]},{replace:!0})},duplicateCurrent:x=>{I((P,w)=>{const E={...w,payload:(x==null?void 0:x.payload)||w.payload,params:(x==null?void 0:x.params)||w.params};return[...P.slice(0,a),E,...P.slice(a)]})},setView:x=>{const P=oe(s,"view");return v(x?{...P,view:x}:P)},setParams:v,setPayload:_,createPathWithParams:S,navigateIntent:d}),[t,g,a,i,s,c,j,v,_,S,d,I,h,r,f]);return l.jsx($e.Provider,{value:T,children:n})}class C extends Error{constructor({message:n,context:t,helpId:o,cause:s}){super(n),this.context=t,this.helpId=o,this.cause=s}}const ne=new WeakMap;function B(e){const n=ne.get(e);if(n)return n;const t=Xe();return ne.set(e,t),t}const rt=e=>!!e&&typeof(e==null?void 0:e.then)=="function",st=e=>Y(e)?typeof e.serialize=="function":!1,it=e=>(n,t,o)=>{try{return e(n,t,o)}catch(s){throw s instanceof C?s:new C({message:typeof(s==null?void 0:s.message)=="string"?s.message:"",context:t,cause:s})}},ot=e=>(...n)=>e(...n).pipe(Ze(1),et());function ce(e){const n=it(ot(e((t,o,s)=>{if(!t)throw new C({message:"Pane returned no child",context:o,helpId:"structure-item-returned-no-child"});return rt(t)||qe(t)?Je(t).pipe(Q(i=>n(i,o,s))):st(t)?n(t.serialize(o),o,s):typeof t=="function"?n(t(o.id,o),o,s):L(t)})));return n}const ae=new WeakMap;function pe(e,n){const t=ae.get(e)||new Map;if(t){const i=t.get(n);if(i)return i}const o=e[n];if(typeof o!="function")throw new Error(`Expected property \`${n}\` to be a function but got ${typeof o} instead.`);const s=o.bind(e);return t.set(n,s),ae.set(e,t),s}async function lt(e){const n=new Map,t=ce(a=>(r,d,y)=>{const u=r&&`${B(r)}-${d.path.join("__")}`,m=u&&n.get(u);if(m)return m;const f=a(r,d,y);return u&&n.set(u,f),f}),o=[[{id:`__edit__${e.params.id}`,params:{...oe(e.params,["id"]),type:e.params.type},payload:e.payload}]];async function s({currentId:a,flatIndex:r,intent:d,params:y,parent:u,path:m,payload:f,unresolvedPane:c,levelIndex:h,structureContext:g}){var b;if(!c)return[];const{id:I,type:S,..._}=y,v=await ue(t(c,{id:a,splitIndex:0,parent:u,path:m,index:r,params:{},payload:void 0,structureContext:g},r));return v.type==="document"&&v.id===I?[{panes:[...m.slice(0,m.length-1).map(j=>[{id:j}]),[{id:I,params:_,payload:f}]],depthIndex:m.length,levelIndex:h}]:(b=v.canHandleIntent)!=null&&b.call(v,d,y,{pane:v,index:r})||v.type==="documentList"&&v.schemaTypeName===S&&v.options.filter==="_type == $type"?[{panes:[...m.map(j=>[{id:j}]),[{id:y.id,params:_,payload:f}]],depthIndex:m.length,levelIndex:h}]:v.type==="list"&&v.child&&v.items?(await Promise.all(v.items.map((j,T)=>j.type==="divider"?Promise.resolve([]):s({currentId:j._id||j.id,flatIndex:r+1,intent:d,params:y,parent:v,path:[...m,j.id],payload:f,unresolvedPane:typeof v.child=="function"?pe(v,"child"):v.child,levelIndex:T,structureContext:g})))).flat():[]}const i=(await s({currentId:"root",flatIndex:0,levelIndex:0,intent:e.intent,params:e.params,parent:null,path:[],payload:e.payload,unresolvedPane:e.rootPaneNode,structureContext:e.structureContext})).sort((a,r)=>a.depthIndex===r.depthIndex?a.levelIndex-r.levelIndex:a.depthIndex-r.depthIndex)[0];return i?i.panes:o}const dt=(e,n)=>{const t=e.replace(/^__edit__/,""),{params:o,payload:s,structureContext:{resolveDocumentNode:i}}=n,{type:a,template:r}=o;if(!a)throw new Error(`Document type for document with ID ${t} was not provided in the router params.`);let d=i({schemaType:a,documentId:t}).id("editor");return r&&(d=d.initialValueTemplate(r,s)),d.serialize()};function ut(e){var n,t;return`contextHash(${JSON.stringify({id:e.id,parentId:parent&&B(parent),path:e.path,index:e.index,splitIndex:e.splitIndex,serializeOptionsIndex:(n=e.serializeOptions)==null?void 0:n.index,serializeOptionsPath:(t=e.serializeOptions)==null?void 0:t.path})})`}const re=e=>{const n={type:e.type,id:e.routerPaneSibling.id,params:e.routerPaneSibling.params||{},payload:e.routerPaneSibling.payload||null,flatIndex:e.flatIndex,groupIndex:e.groupIndex,siblingIndex:e.siblingIndex,path:e.path,paneNode:e.type==="resolvedMeta"?B(e.paneNode):null};return`metaHash(${JSON.stringify(n)})`};function M({unresolvedPane:e,flattenedRouterPanes:n,parent:t,path:o,resolvePane:s,structureContext:i}){const[a,...r]=n,d=r[0],y={id:a.routerPaneSibling.id,splitIndex:a.siblingIndex,parent:t,path:[...o,a.routerPaneSibling.id],index:a.flatIndex,params:a.routerPaneSibling.params||{},payload:a.routerPaneSibling.payload,structureContext:i};try{return s(e,y,a.flatIndex).pipe(Q(u=>{const m={type:"resolvedMeta",...a,paneNode:u,path:y.path},f=r.map((h,g)=>({type:"loading",path:[...y.path,...r.slice(g).map((b,I)=>`[${h.flatIndex+I}]`)],paneNode:null,...h}));if(!r.length)return L([m]);let c;return d!=null&&d.routerPaneSibling.id.startsWith("__edit__")?c=M({unresolvedPane:dt,flattenedRouterPanes:r,parent:t,path:y.path,resolvePane:s,structureContext:i}):a.groupIndex===(d==null?void 0:d.groupIndex)?c=M({unresolvedPane:e,flattenedRouterPanes:r,parent:t,path:o,resolvePane:s,structureContext:i}):c=M({unresolvedPane:typeof u.child=="function"?pe(u,"child"):u.child,flattenedRouterPanes:r,parent:u,path:y.path,resolvePane:s,structureContext:i}),Ye(L([m,...f]),c.pipe(R(h=>[m,...h])))}))}catch(u){if(u instanceof C&&(u.context&&console.warn(`Pane resolution error at index ${u.context.index}${u.context.splitIndex>0?` for split pane index ${u.context.splitIndex}`:""}: ${u.message}${u.helpId?` - see ${de(u.helpId)}`:""}`,u),u.helpId==="structure-item-returned-no-child"))return L([]);throw u}}function ct({routerPanesStream:e,rootPaneNode:n,initialCacheState:t={cacheKeysByFlatIndex:[],flattenedRouterPanes:[],resolvedPaneCache:new Map,resolvePane:()=>Ge},structureContext:o}){return e.pipe(R(s=>[[{id:"root"}],...s]),R(s=>s.flatMap((i,a)=>i.map((r,d)=>({routerPaneSibling:r,groupIndex:a,siblingIndex:d}))).map((i,a)=>({...i,flatIndex:a}))),Be([]),tt(),R(([s,i])=>{for(let a=0;a<i.length;a++){const r=s[a],d=i[a];if(!K(r,d))return{flattenedRouterPanes:i,diffIndex:a}}return{flattenedRouterPanes:i,diffIndex:i.length}}),te((s,i)=>{const{cacheKeysByFlatIndex:a,resolvedPaneCache:r}=s,{flattenedRouterPanes:d,diffIndex:y}=i,u=a.slice(0,y+1),m=a.slice(y+1),f=new Set(u.flatMap(h=>Array.from(h))),c=m.flatMap(h=>Array.from(h)).filter(h=>!f.has(h));for(const h of c)r.delete(h);return{flattenedRouterPanes:d,cacheKeysByFlatIndex:a,resolvedPaneCache:r,resolvePane:ce(h=>(g,b,I)=>{const S=g&&`${B(g)}-${ut(b)}`,_=S&&r.get(S);if(_)return _;const v=h(g,b,I);if(!S)return v;const j=a[I]||new Set;return j.add(S),a[I]=j,r.set(S,v),v})}},t),Q(({flattenedRouterPanes:s,resolvePane:i})=>M({unresolvedPane:n,flattenedRouterPanes:s,parent:null,path:[],resolvePane:i,structureContext:o}))).pipe(te((s,i)=>i.map((a,r)=>{const d=s[r];return!d||a.type!=="loading"?a:d.routerPaneSibling.id===a.routerPaneSibling.id?d:a}),[]),We((s,i)=>{if(s.length!==i.length)return!1;for(let a=0;a<i.length;a++){const r=s[a],d=i[a];if(re(r)!==re(d))return!1}return!0}))}function pt(){const e=p.useMemo(()=>new Fe(1),[]),n=p.useMemo(()=>e.asObservable().pipe(R(o=>(o==null?void 0:o.panes)||[])),[e]),{state:t}=q();return p.useEffect(()=>{e.next(t)},[t,e]),n}function ht(){const[e,n]=p.useState();if(e)throw e;const{structureContext:t,rootPaneNode:o}=O(),[s,i]=p.useState({paneDataItems:[],resolvedPanes:[],routerPanes:[]}),a=pt();return p.useEffect(()=>{const r=ct({rootPaneNode:o,routerPanesStream:a,structureContext:t}).pipe(R(d=>{const y=d.reduce((f,c)=>{const h=f[c.groupIndex]||[];return h[c.siblingIndex]=c.routerPaneSibling,f[c.groupIndex]=h,f},[]),u=y.length,m=d.map(f=>{var c;const{groupIndex:h,flatIndex:g,siblingIndex:b,routerPaneSibling:I,path:S}=f,_=I.id,v=y[h+1];return{active:h===u-2,childItemId:(c=v==null?void 0:v[0].id)!=null?c:null,index:g,itemId:I.id,groupIndex:h,key:`${f.type==="loading"?"unknown":f.paneNode.id}-${_}-${b}`,pane:f.type==="loading"?D:f.paneNode,params:I.params||{},path:S.join(";"),payload:I.payload,selected:g===d.length-1,siblingIndex:b}});return{paneDataItems:m,routerPanes:y,resolvedPanes:m.map(f=>f.pane)}})).subscribe({next:d=>i(d),error:d=>n(d)});return()=>r.unsubscribe()},[o,a,t]),s}async function mt(e,n,t){if(n&&t)return{id:n,type:t};if(!n&&t)return{id:He(),type:t};if(n&&!t){const o=await ue(e.resolveTypeForDocument(n));return{id:n,type:o}}throw new C({message:"Neither document `id` or `type` was provided when trying to resolve intent."})}const ft={},yt=p.memo(function(){const{navigate:e}=q(),n=J(p.useCallback(r=>{const d=typeof r.intent=="string"?r.intent:void 0;return d?{intent:d,params:Y(r.params)?r.params:ft,payload:r.payload}:void 0},[])),{rootPaneNode:t,structureContext:o}=O(),s=xe(),[i,a]=p.useState(null);if(i)throw i;return p.useEffect(()=>{if(n){const{intent:r,params:d,payload:y}=n;let u=!1;async function m(){const{id:f,type:c}=await mt(s,typeof d.id=="string"?d.id:void 0,typeof d.type=="string"?d.type:void 0);if(u)return;const h=await lt({intent:r,params:{...d,id:f,type:c},payload:y,rootPaneNode:t,structureContext:o});u||e({panes:h},{replace:!0})}return m().catch(a),()=>{u=!0}}},[s,n,e,t,o]),null}),xt=se.span`
  &:not(:last-child)::after {
    content: ' ➝ ';
    opacity: 0.5;
  }
`;function gt(e){return e.replace(/\(\.\.\.\)\./g,`(...)
  .`).replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g,"").replace(/___default\./g,".").replace(new RegExp(` \\(https?:\\/\\/${window.location.host}`,"g")," (")}function vt({error:e}){if(!(e instanceof C))throw e;const{cause:n}=e,{t}=V(A),o=(n==null?void 0:n.stack)||e.stack,s=o&&!(n instanceof G)&&!e.message.includes("Module build failed:"),i=n instanceof G?n.path:[],a=n instanceof G&&n.helpId||e.helpId,r=p.useCallback(()=>{window.location.reload()},[]);return l.jsx(z,{height:"fill",overflow:"auto",padding:4,sizing:"border",tone:"critical",children:l.jsxs(le,{children:[l.jsx(Le,{as:"h2",children:t("structure-error.header.text")}),l.jsxs(z,{marginTop:4,padding:4,radius:2,overflow:"auto",shadow:1,tone:"inherit",children:[i.length>0&&l.jsxs(U,{space:2,children:[l.jsx(k,{size:1,weight:"medium",children:t("structure-error.structure-path.label")}),l.jsx(X,{children:i.slice(1).map((d,y)=>l.jsx(xt,{children:d},`${d}-${y}`))})]}),l.jsxs(U,{marginTop:4,space:2,children:[l.jsx(k,{size:1,weight:"medium",children:t("structure-error.error.label")}),l.jsx(X,{children:s?gt(o):e.message})]}),a&&l.jsx(N,{marginTop:4,children:l.jsx(k,{children:l.jsx("a",{href:de(a),rel:"noopener noreferrer",target:"_blank",children:t("structure-error.docs-link.text")})})}),l.jsx(N,{marginTop:4,children:l.jsx(Me,{text:t("structure-error.reload-button.text"),icon:ze,tone:"primary",onClick:r})})]})]})})}function Pt(e){const{isSelected:n,pane:t,paneKey:o}=e,s=Y(t)&&t.type||null,{t:i}=V(A);return l.jsxs(Ne,{id:o,selected:n,children:[l.jsx(Oe,{title:i("panes.unknown-pane-type.title")}),l.jsx(Ve,{children:l.jsx(N,{padding:4,children:typeof s=="string"?l.jsx(k,{as:"p",muted:!0,children:l.jsx(Z,{t:i,i18nKey:"panes.unknown-pane-type.unknown-type.text",values:{type:s}})}):l.jsx(k,{as:"p",muted:!0,children:l.jsx(Z,{t:i,i18nKey:"panes.unknown-pane-type.missing-type.text"})})})})]})}const It={component:p.lazy(()=>$(()=>import("./index-6a352cb1.js"),["static/index-6a352cb1.js","static/sanity-1fc16b6c.js"])),document:p.lazy(()=>$(()=>import("./pane-599e0b28.js"),["static/pane-599e0b28.js","static/sanity-1fc16b6c.js"])),documentList:p.lazy(()=>$(()=>import("./pane2-72df10c8.js"),["static/pane2-72df10c8.js","static/sanity-1fc16b6c.js"])),list:p.lazy(()=>$(()=>import("./index2-741c91d0.js"),["static/index2-741c91d0.js","static/sanity-1fc16b6c.js"]))},wt=p.memo(function(e){const{active:n,childItemId:t,groupIndex:o,index:s,itemId:i,pane:a,paneKey:r,params:d,payload:y,path:u,selected:m,siblingIndex:f}=e,c=It[a.type]||Pt;return l.jsx(at,{flatIndex:s,index:o,params:d,payload:y,siblingIndex:f,children:l.jsx(p.Suspense,{fallback:l.jsx(H,{paneKey:r,path:u,selected:m}),children:l.jsx(c,{childItemId:t||"",index:s,itemId:i,isActive:n,isSelected:m,paneKey:r,pane:a})})})},({params:e={},payload:n=null,...t},{params:o={},payload:s=null,...i})=>{if(!K(e,o)||!K(n,s))return!1;const a=new Set([...Object.keys(t),...Object.keys(i)]);for(const r of a)if(t[r]!==i[r])return!1;return!0});function bt(){const{t:e}=V(A);return l.jsx(z,{height:"fill",children:l.jsx(ee,{align:"center",height:"fill",justify:"center",padding:4,sizing:"border",children:l.jsx(le,{width:0,children:l.jsx(z,{padding:4,radius:2,shadow:1,tone:"caution",children:l.jsxs(ee,{children:[l.jsx(N,{children:l.jsx(k,{size:1,children:l.jsx(Ae,{})})}),l.jsxs(U,{flex:1,marginLeft:3,space:3,children:[l.jsx(k,{as:"h1",size:1,weight:"medium",children:e("no-document-types-screen.title")}),l.jsx(k,{as:"p",muted:!0,size:1,children:e("no-document-types-screen.subtitle")}),l.jsx(k,{as:"p",muted:!0,size:1,children:l.jsx("a",{href:"https://www.sanity.io/docs/create-a-schema-and-configure-sanity-studio",target:"_blank",rel:"noreferrer",children:e("no-document-types-screen.link-text")})})]})]})})})})})}const jt=e=>{const{documentId:n,documentType:t}=e,o=Ke(n,t),s=ie(),{t:i}=V(A),a=!(o!=null&&o.published)&&!(o!=null&&o.draft),r=(o==null?void 0:o.draft)||(o==null?void 0:o.published),d=s.get(t),{value:y,isLoading:u}=Ue({enabled:!0,schemaType:d,value:r}),m=a?i("browser-document-title.new-document",{schemaType:(d==null?void 0:d.title)||(d==null?void 0:d.name)}):(y==null?void 0:y.title)||i("browser-document-title.untitled-document"),f=o.ready&&!u,c=he(m);return p.useEffect(()=>{f&&(document.title=c)},[m,f,c]),null},F=e=>{const{title:n}=e,t=he(n);return p.useEffect(()=>{document.title=t},[t,n]),null},St=e=>{const{resolvedPanes:n}=e;if(!(n!=null&&n.length))return null;const t=n[n.length-1];return kt(t)?l.jsx(F,{}):_t(t)?t!=null&&t.title?l.jsx(F,{title:t.title}):l.jsx(jt,{documentId:t.options.id,documentType:t.options.type}):l.jsx(F,{title:t==null?void 0:t.title})};function he(e){const n=O().structureContext.title;return[e,n].filter(t=>t).join(" | ")}function _t(e){return e!==D&&e.type==="document"}function kt(e){return e===D}const Et=se(Qe)`
  min-height: 100%;
  min-width: 320px;
`,Tt=ge("mod+s"),Rt=p.memo(function({onPaneChange:e}){var n;const{push:t}=ve(),o=ie(),{layoutCollapsed:s,setLayoutCollapsed:i}=O(),{paneDataItems:a,resolvedPanes:r}=ht(),d=J(p.useCallback(h=>typeof h.intent=="string",[])),{sanity:{media:y}}=Pe(),[u,m]=p.useState(null),f=p.useCallback(()=>i(!0),[i]),c=p.useCallback(()=>i(!1),[i]);return p.useEffect(()=>{r.length&&e(r)},[e,r]),p.useEffect(()=>{const h=g=>{Tt(g)&&(g.preventDefault(),t({closable:!0,id:"auto-save-message",status:"info",title:"Your work is automatically saved!",duration:4e3}))};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t]),(n=o._original)!=null&&n.types.some(Ie)?l.jsxs(we,{element:u||null,children:[l.jsxs(Et,{flex:1,height:s?void 0:"fill",minWidth:y[1],onCollapse:f,onExpand:c,children:[a.map(({active:h,childItemId:g,groupIndex:b,itemId:I,key:S,pane:_,index:v,params:j,path:T,payload:x,siblingIndex:P,selected:w})=>l.jsx(p.Fragment,{children:_===D?l.jsx(H,{paneKey:S,path:T,selected:w}):l.jsx(wt,{active:h,groupIndex:b,index:v,pane:_,childItemId:g,itemId:I,paneKey:S,params:j,payload:x,path:T,selected:w,siblingIndex:P})},`${_===D?"loading":_.type}-${v}`)),a.length<=1&&d&&l.jsx(H,{paneKey:"intent-resolver"})]}),l.jsx(St,{resolvedPanes:r}),l.jsx("div",{"data-portal":"",ref:m})]}):l.jsx(bt,{})});function Dt({tool:{options:e}}){const{unstable_sources:n}=be(),[t]=n,{source:o,defaultDocumentNode:s,structure:i}=e||{};p.useEffect(()=>(W([]),()=>W([])),[]);const[{error:a},r]=p.useState({error:null});return a?l.jsx(vt,{error:a}):l.jsx(je,{onCatch:r,children:l.jsx(Se,{name:o||t.name,children:l.jsxs(_e,{defaultDocumentNode:s,structure:i,children:[l.jsx(Rt,{onPaneChange:W}),l.jsx(yt,{})]})})})}export{Dt as default};
