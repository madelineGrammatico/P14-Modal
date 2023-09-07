import{r as x,a as v}from"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";var f={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=x,E=Symbol.for("react.element"),g=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,R=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function y(r,e,s){var o,t={},a=null,d=null;s!==void 0&&(a=""+s),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(d=e.ref);for(o in e)h.call(e,o)&&!b.hasOwnProperty(o)&&(t[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)t[o]===void 0&&(t[o]=e[o]);return{$$typeof:E,type:r,key:a,ref:d,props:t,_owner:R.current}}l.Fragment=g;l.jsx=y;l.jsxs=y;f.exports=l;var i=f.exports;const j="_modal_ds93s_1",C="_close_ds93s_17",p={modal:j,close:C};function c({children:r,onClose:e,isOpen:s=!0}){if(s)return v.createPortal(i.jsxs("div",{className:p.modal,children:[i.jsx("button",{className:p.close,onClick:()=>e(),children:"X"}),r]}),document.body)}try{c.displayName="Modal",c.__docgenInfo={description:"",displayName:"Modal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:{value:"true"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const k={component:c,title:"Modal"},n={args:{children:"Modal",onClose:()=>console.log("close")}};var u,_,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: "Modal",
    onClose: () => console.log("close")
  }
}`,...(m=(_=n.parameters)==null?void 0:_.docs)==null?void 0:m.source}}};const S=["Default"];export{n as Default,S as __namedExportsOrder,k as default};
//# sourceMappingURL=Modal.stories-163a2b1f.js.map
