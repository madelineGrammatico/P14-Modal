import{r as x,a as v}from"./index-c0290abd.js";import"./_commonjsHelpers-725317a4.js";var f={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=x,O=Symbol.for("react.element"),E=Symbol.for("react.fragment"),g=Object.prototype.hasOwnProperty,R=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function y(r,e,t){var o,s={},l=null,c=null;t!==void 0&&(l=""+t),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(c=e.ref);for(o in e)g.call(e,o)&&!b.hasOwnProperty(o)&&(s[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps,e)s[o]===void 0&&(s[o]=e[o]);return{$$typeof:O,type:r,key:l,ref:c,props:s,_owner:R.current}}a.Fragment=E;a.jsx=y;a.jsxs=y;f.exports=a;var i=f.exports;const j="_modal_eqrwa_1",w="_hidden_eqrwa_13",C="_close_eqrwa_17",p={modal:j,hidden:w,close:C};function d({children:r,onClose:e,isOpen:t=!0}){if(t)return v.createPortal(i.jsxs("div",{className:p.modal,children:[i.jsx("button",{className:p.close,onClick:()=>e(),children:"X"}),r]}),document.body)}try{d.displayName="Modal",d.__docgenInfo={description:"",displayName:"Modal",props:{onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},isOpen:{defaultValue:{value:"true"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}}}}}catch{}const k={component:d,title:"Modal"},n={args:{children:"Modal",onClose:()=>console.log("close")}};var _,u,m;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Modal",
    onClose: () => console.log("close")
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const q=["Default"];export{n as Default,q as __namedExportsOrder,k as default};
//# sourceMappingURL=Modal.stories-9dc20790.js.map
