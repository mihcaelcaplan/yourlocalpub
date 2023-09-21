(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{3805:function(e,t,r){Promise.resolve().then(r.bind(r,2606))},1434:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var o=r(7437),n=r(6691),i=r.n(n),a=r(4723),s=r(2265),c=r(6176);function l(e){let{item_key:t,checkout:r}=e,[n,l]=(0,s.useContext)(c.A);return console.log(t),(0,o.jsxs)("div",{className:"bg-gray-100 grid grid-cols-4 p-4 gap-2 justify-center text-center",children:[(0,o.jsx)("a",{href:a.Z[t].route,children:(0,o.jsx)(i(),{className:"pr-4",src:a.Z[t].coverImage,alt:"$(item.title) cover image",width:100,height:100,sizes:"100vw",style:{width:"100%",height:"auto"}})}),(0,o.jsxs)("div",{className:"flex flex-col justify-center border-r-2 pl-2",children:[(0,o.jsx)("p",{className:" text-sm text-stone-700 pb-2",children:"Title"}),(0,o.jsx)("p",{children:a.Z[t].title})]}),(0,o.jsxs)("div",{className:"flex flex-col justify-center border-r-2 pl-2",children:[(0,o.jsx)("p",{className:" text-sm text-stone-700 pb-2",children:"Quantity"}),r&&(0,o.jsx)("div",{children:n[t].quantity}),!r&&(0,o.jsx)(u,{cart:n,setCart:l,item_key:t})]}),(0,o.jsxs)("div",{className:"flex flex-col justify-center pl-2",children:[(0,o.jsx)("p",{className:" text-sm text-stone-700 pb-2",children:"Price"}),(0,o.jsxs)("p",{children:["\xa3",a.Z[t].price]})]})]})}function u(e){let{cart:t,setCart:r,item_key:n}=e,[i,a]=(0,s.useState)(t[n].quantity);return(0,s.useEffect)((e,t,r)=>{let o={...e};o[t].quantity=i,r(e=>({...o}))},[i]),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-center ",children:[(0,o.jsx)("div",{className:" bg-slate-200 hover:bg-slate-400 rounded-md p-1 pb",onClick:()=>{a(Number(i)-1)},children:"-"}),(0,o.jsx)("div",{className:"",children:(0,o.jsx)("input",{className:"text-center w-6",onChange:e=>{isNaN(e.target.value)?a(i):a(Number(e.target.value))},value:i})}),(0,o.jsx)("div",{className:" bg-rose-200 hover:bg-rose-600 rounded-md p-1",onClick:()=>{a(Number(i)+1)},children:"+"})]})}},2606:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var o=r(7437),n=r(2265),i=r(1434),a=r(6176),s=r(4723);function c(e){let{cart:t}=e,r=()=>{let e={};return e.products=t,Object.keys(e.products).map(t=>{e.products[t].price=s.Z[t].price}),e.checkout_time=Math.floor(Date.now()/1e3),console.log(e),e},n=async()=>{let e=r();console.log(JSON.stringify(e));try{let t=await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/handleCheckoutV2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){let e=await t.json();console.log("Success:",e),localStorage.setItem("checkoutId",e.checkoutId),location.href="/checkout"}else alert("Please reload the page and try again :(")}catch(e){alert("Error:",e)}};return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"bg-stone-100 hover:bg-stone-200 border-2 border-sky-200 rounded-md text-center text-lg text-stone-600 pt-2 pb-2 pr-8 pl-8 drop-shadow-md ",children:(0,o.jsx)("div",{href:"/checkout",onClick:()=>n(),children:"Checkout \uD83D\uDED2"})})})}function l(){let[e,t]=(0,n.useContext)(a.A);return console.log(e),(0,o.jsxs)("div",{className:"flex flex-col p-4",children:[(0,o.jsx)("div",{className:"pb-4",children:(0,o.jsx)("h1",{className:"text-3xl",children:"Cart"})}),(0,o.jsx)("div",{className:"grid grid-cols-1 gap-4 pb-4",children:Object.keys(e).map(e=>(0,o.jsx)(i.Z,{item_key:e,checkout:!1},e))}),(0,o.jsx)(c,{cart:e})]})}},6176:function(e,t,r){"use strict";r.d(t,{A:function(){return n}});var o=r(2265);let n=(0,o.createContext)([])},1295:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},unstable_getImgProps:function(){return c}});let o=r(1024),n=r(2301),i=r(7873),a=r(3222),s=o._(r(5033)),c=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},l=a.Image},4723:function(e,t){"use strict";t.Z={orpheus_st:{id:1,status:"active",coverImage:"/orpheus_st_paintings/orpheus_1_cover.png",route:"/publications/orpheus_st_paintings",title:"Orpheus Street Paintings",publicationYear:2023,detail:"Hardcover",stockQuantity:15,info:"Orpheus Street Paintings is 57 paged hardback book that collates the work of Nelson Diplexcito. The book introduces you to the artists studio setting and then showcases his body of work ranging from large scale oil on canvas to smaller oil on paper pieces. The book also contains an interview conducted by Jungwon Jay Hur about Diplexcitos practice.",images_location:"/orpheus_st_paintings",variants:[],price:35},below_bunyan:{id:2,status:"active",coverImage:"/below_bunyan/belowbunyan_1_cover.png",route:"/publications/below_bunyan",title:"Below Bunyan",publicationYear:2021,detail:"Hardcover",stockQuantity:30,info:"Below Bunyan is a book that represents the diverse artistic spirit of the next generation, captured through compelling details that reveal the interior world of an oft-overlooked phenomenon.",images_location:"/below_bunyan",variants:[],price:15},babe_rainbow:{id:3,status:"active",coverImage:"/babe_rainbow/baberainbow_1_cover.png",route:"/publications/babe_rainbow",title:"Mildly High on the Babe Rainbow",publicationYear:2023,detail:"Hardcover",stockQuantity:15,info:"Below Bunyan is a book that represents the diverse artistic spirit of the next generation, captured through compelling details that reveal the interior world of an oft-overlooked phenomenon.",images_location:"/babe_rainbow",variants:[],price:50}}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=r(2265),n=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,c={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}t.jsx=c,t.jsxs=c},7437:function(e,t,r){"use strict";e.exports=r(622)},6691:function(e,t,r){e.exports=r(1295)}},function(e){e.O(0,[222,971,596,744],function(){return e(e.s=3805)}),_N_E=e.O()}]);