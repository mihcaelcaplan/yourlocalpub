(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16,831],{9607:function(e,t,r){Promise.resolve().then(r.bind(r,8724)),Promise.resolve().then(r.bind(r,5833)),Promise.resolve().then(r.t.bind(r,3222,23)),Promise.resolve().then(r.bind(r,134))},5833:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),i=r(2265),s=r(6176);function o(e){let{publication_key:t,isHidden:r,setHidden:i}=e;return(0,n.jsxs)("div",{className:r+" fixed top-1/3 md:top-[25%] left-[17%] flex flex-col h-2/6 md:h-1/2 w-4/6 bg-slate-100 z-10 shadow-2xl",children:[(0,n.jsx)("div",{className:"bg-stone-200 p-1",children:(0,n.jsx)("div",{className:"text-[0.7rem] rounded-full bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto",onClick:()=>{i("hidden")},children:"X"})}),(0,n.jsxs)("div",{className:"text-center m-auto",children:["You're a right good pub-goer.",(0,n.jsx)("br",{}),"Well on ya, mate!",(0,n.jsx)("br",{})]}),(0,n.jsxs)("div",{className:"grid grid-cols-2 mt-auto mb-auto text-center p-8",children:[(0,n.jsx)("a",{className:"mr-4 bg-amber-200 hover:bg-amber-400",href:"/",children:"Continue Shopping"}),(0,n.jsx)("a",{className:" ml-4 bg-cyan-500 hover:bg-cyan-600",href:"/cart",children:"Go To Cart"})]})]})}function l(e){let{publication_key:t}=e,[r,l]=(0,i.useContext)(s.A),[a,c]=(0,i.useState)("hidden");return(0,n.jsxs)("div",{children:[(0,n.jsx)(o,{isHidden:a,setHidden:c,publication_key:t}),(0,n.jsx)("div",{href:"/cart",className:"h-6 w-auto p-4 bg-slate-100 text-stone-800 hover:bg-amber-50 border-rose-100 border-2 rounded-full text-center align-middle  text-[.75] leading-[0rem] sm:text-[1.25rem] sm:leading-[0rem] ",onClick:()=>{!function(){let e={...r};e[t]?e[t].quantity+=1:e[t]={quantity:1},console.log(e),l(t=>({...e}))}(),c("visible")},children:"Add To Cart"})]})}},6176:function(e,t,r){"use strict";r.d(t,{A:function(){return i}});var n=r(2265);let i=(0,n.createContext)([])},134:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),i=r(6691),s=r.n(i),o=r(2265);function l(e){let{publication:t,image_paths:r}=e,[i,l]=(0,o.useState)(t.coverImage);return r.filter(e=>e!=i),(0,n.jsxs)("div",{className:"pb-6 sm:pl-10 sm:pr-10 grid grid-cols-4 grid-rows-5 sm:grid-cols-5 sm:grid-rows-4 gap-4",children:[(0,n.jsx)(s(),{className:"col-span-4 row-span-4",src:i,alt:"$(publication.title) cover image",width:100,height:100,sizes:"100vw",style:{width:"100%",height:"auto"}}),r.map(e=>(0,n.jsx)(s(),{className:e===i?"opacity-100":"opacity-50",onClick:()=>l(e),src:e,alt:"$(publication.title) cover image",width:100,height:100,sizes:"100vw",style:{width:"100%",height:"auto"}},e))]})}},8724:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),i=r(5833),s=r(2265);let o=async e=>{let t=await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?"+new URLSearchParams({productId:e}));if(t.ok){let e=await t.json();return e}};function l(e){let{publication:t,publication_key:r}=e,[l,a]=(0,s.useState)({soldOut:!1,itemsLeft:0});return(0,s.useEffect)((e,t)=>{console.log("updating inv."),o(t).then(t=>{let r=!(t.lockedInventory<=e.stockQuantity),n=e.stockQuantity-t.lockedInventory;a({soldOut:r,itemsLeft:n})})},[]),(0,n.jsxs)("div",{className:"grid grid-cols-1 m-2 sm:m-6",children:[(0,n.jsx)("b",{children:t.title}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Published: "+t.publicationYear}),(0,n.jsx)("li",{children:t.detail})]}),(0,n.jsx)("p",{className:"mt-2 mb-4 w-inherit",children:t.info}),(0,n.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("div",{children:"Edition of ".concat(t.stockQuantity," (").concat(l.itemsLeft," copies left!)")}),(0,n.jsx)("div",{children:"\xa3"+t.price})]}),l.soldOut&&(0,n.jsx)("div",{className:"h-6 w-auto p-4 bg-rose-100 text-stone-800 border-rose-400 border-2 rounded-full text-center align-middle  text-[.75] leading-[0rem] sm:text-[1.25rem] sm:leading-[0rem]",children:" Sold out!"}),!l.soldOut&&(0,n.jsx)(i.default,{publication_key:r})]})]})}},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return c},unstable_getImgProps:function(){return a}});let n=r(1024),i=r(2301),s=r(7873),o=r(3222),l=n._(r(5033)),a=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},c=o.Image},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),i=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,a={},c=null,d=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:o.current}}t.jsx=a,t.jsxs=a},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)}},function(e){e.O(0,[222,971,596,744],function(){return e(e.s=9607)}),_N_E=e.O()}]);