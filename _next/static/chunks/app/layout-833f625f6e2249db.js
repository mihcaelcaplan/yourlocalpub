(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{425:function(e,t,r){Promise.resolve().then(r.bind(r,4095))},6176:function(e,t,r){"use strict";r.d(t,{A:function(){return s}});var n=r(2265);let s=(0,n.createContext)([])},4095:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7437),s=r(2481),i=r.n(s);r(3177);var l=r(2265),a=r(6176);function o(){let[e,t]=(0,l.useContext)(a.A);return(0,n.jsxs)("div",{className:"flex flex-row hover:text-slate-600 font-semibold",children:[(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:"/cart",children:"CART"})}),(0,n.jsx)(c,{cart:e})]})}function c(e){let{cart:t}=e;var r=0;return Object.keys(t).map(e=>r+=t[e].quantity),(0,n.jsx)("div",{className:"h-4 w-4 bg-red-500 rounded-full text-center text-white text-[0.75rem] leading-[1rem]",children:r})}function u(e){let{nav_padding:t}=e;return(0,n.jsxs)("div",{className:t+" flex flex-row justify-between items-start",children:[(0,n.jsxs)("div",{className:"pr-4 font-semibold whitespace-nowrap",children:[(0,n.jsx)("a",{className:"md:hidden visible  hover:text-slate-600 ",href:"/about_us",children:"ABOUT US"}),(0,n.jsx)("div",{className:"text-xl md:inline hidden",children:" ABOUT US"})]}),(0,n.jsx)(o,{})]})}var d=r(6691),f=r.n(d);function x(){return(0,n.jsxs)("div",{className:"flex flex-row pt-4 pb-2 pl-8 pr-8 justify-between",children:[(0,n.jsx)("h1",{className:"animate-pulse",children:(0,n.jsx)("a",{href:"/",children:(0,n.jsx)(f(),{src:"/logo_upper.png",alt:"Logo: Your local pub or publication",priority:!0,height:100,width:100,sizes:"100vw",style:{width:"65%",height:"auto"}})})}),(0,n.jsx)("div",{className:"flex items-end md:hidden text-sm md:text-md ml-auto",children:(0,n.jsx)(u,{})})]})}function h(){return(0,n.jsxs)("div",{className:"p-6 ",children:["Your Local Pub is a independent publisher created by Brad Gilbert and Michael Caplan. The project started with the aim is to create high quality limited run publications for smaller artists and designers. We aim to release a new artists work monthly.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"The Books range from Fine Art to Photography",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Currently Featured:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Nelson Diplexcito"}),(0,n.jsx)("li",{children:"Brad Gilbert"})]}),(0,n.jsx)("br",{}),"Upcoming Features:",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Jungwon Jay Hur"}),(0,n.jsx)("li",{children:"Mataio Austin Dean"}),(0,n.jsx)("li",{children:"Ula Taylor Reilly"}),(0,n.jsx)("li",{children:"Kay Liang"}),(0,n.jsx)("li",{children:"Curtis Rayment"})]}),(0,n.jsx)("br",{}),"If you would like to propose a project concept please get in touch via our instagram account.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"Social Media:",(0,n.jsx)("br",{}),(0,n.jsx)("a",{href:"https://www.instagram.com/yourlocalpublication",className:"hover:text-slate-600",children:"@yourlocalpublication"})]})}function m(){return(0,n.jsxs)("div",{className:"flex flex-col text-white fixed top-0 leading-5",children:[(0,n.jsx)(u,{nav_padding:"p-6"}),(0,n.jsx)(h,{})]})}function p(e){let{children:t}=e,[r,s]=(0,l.useState)({});return(0,l.useEffect)(()=>{if(null!=localStorage.getItem("cart")){let e=JSON.parse(localStorage.getItem("cart"));s(e)}},[]),(0,l.useEffect)(()=>{localStorage.setItem("cart",JSON.stringify(r))},[r]),(0,n.jsx)("html",{lang:"en",className:i().className,children:(0,n.jsx)("body",{className:"",children:(0,n.jsx)("main",{className:"flex flex-row h-full",children:(0,n.jsxs)(a.A.Provider,{value:[r,s],children:[(0,n.jsxs)("div",{className:"bg-pubmain md:w-2/3",children:[(0,n.jsx)(x,{}),t]}),(0,n.jsx)("div",{className:"bg-pubblue md:w-1/3 md:flex h-auto min-h-screen",children:(0,n.jsx)(m,{})})]})})})})}},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return o}});let n=r(1024),s=r(2301),i=r(7873),l=r(3222),a=n._(r(5033)),o=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=l.Image},3177:function(){},2481:function(e){e.exports={style:{fontFamily:"'__Schibsted_Grotesk_19ee7e'",fontStyle:"normal"},className:"__className_19ee7e"}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,o={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:u,props:o,_owner:l.current}}t.jsx=o,t.jsxs=o},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)}},function(e){e.O(0,[222,971,596,744],function(){return e(e.s=425)}),_N_E=e.O()}]);