import{u as f,r as l,c as P,j as e,P as h,e as j,f as B,g as I,h as k,i as E,B as H,k as C,A as b,l as g}from"./sanity-1fc16b6c.js";const v=f(g)`
  position: relative;
`;function y(a){const{children:o}=a,{collapsed:t}=B();return e.jsx(v,{hidden:t,height:"fill",overflow:"auto",children:o})}function A(a){const{actionHandlers:o,index:t,menuItems:n,menuItemGroups:r,title:i}=a,{features:s}=I();return!(n!=null&&n.length)&&!i?null:e.jsx(k,{actions:e.jsx(E,{menuItems:n,menuItemGroups:r,actionHandlers:o}),backButton:s.backButton&&t>0&&e.jsx(H,{as:C,"data-as":"a",icon:b,mode:"bleed",tooltipProps:{content:"Back"}}),title:i})}function T(a){const{index:o,pane:t,paneKey:n,...r}=a,{child:i,component:s,menuItems:c,menuItemGroups:d,type:R,...m}=t,[u,p]=l.useState(null),{title:x=""}=P(t);return e.jsxs(h,{id:n,minWidth:320,selected:r.isSelected,children:[e.jsx(A,{actionHandlers:u==null?void 0:u.actionHandlers,index:o,menuItems:c,menuItemGroups:d,title:x}),e.jsxs(y,{children:[j.isValidElementType(s)&&l.createElement(s,{...r,...m,ref:p,child:i,paneKey:n}),l.isValidElement(s)&&s]})]})}export{T as default};
