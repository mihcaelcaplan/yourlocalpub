(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{9228:function(e,t,i){Promise.resolve().then(i.bind(i,6926))},1434:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var a=i(7437),r=i(6691),s=i.n(r),n=i(4723),o=i(2265),c=i(6176),l=i(7115);function u(e){let{cart:t,item_key:i,checkout:r}=e,[u,b]=(0,o.useContext)(c.A),[p,m]=(0,o.useState)(t[i].quantity),f=n.Z[i],[g,x]=(0,o.useState)({soldOut:!1,availableQuantity:0});return!0!=r&&(0,o.useEffect)(()=>{console.log("updating inv."),(0,l.getInventory)(i).then(e=>{let t=!(e.lockedInventory<f.stockQuantity);e.lockedInventory;let i={soldOut:t,availableQuantity:f.stockQuantity-e.lockedInventory};console.log("inventory",i),x(i)})},[]),(0,a.jsxs)("div",{className:"bg-white border-2 border-black drop-shadow-sm grid grid-cols-cartItemNoImg sm:grid-cols-cartItemImg p-2 md:p-2 gap-2 justify-center text-center items-center",children:[(0,a.jsx)("a",{href:n.Z[i].route,className:"m-auto hidden sm:inline",children:(0,a.jsx)(s(),{className:"",src:n.Z[i].coverImage,alt:"$(item.title) cover image",width:100,height:100,sizes:"100vw",style:{width:"100%",height:"auto"}})}),(0,a.jsx)("div",{className:"flex flex-col justify-center border-r-2",children:(0,a.jsx)("p",{className:"pl-2 pr-2",children:n.Z[i].title})}),(0==p||!0==g.soldOut)&&(0,a.jsx)(h,{setQuantity:m,item_key:i}),p>0&&!1==g.soldOut&&(0,a.jsxs)("div",{className:"flex flex-col justify-center border-r-2",children:[r&&(0,a.jsxs)("div",{children:["x",t[i].quantity]}),!r&&(0,a.jsx)(d,{item_key:i,quantity:p,setQuantity:m,availableQuantity:g.availableQuantity})]}),p>0&&!1==g.soldOut&&(0,a.jsx)("div",{className:"flex flex-col justify-center",children:(0,a.jsxs)("p",{children:["\xa3",n.Z[i].price]})})]})}function d(e){let{item_key:t,quantity:i,setQuantity:r,availableQuantity:s}=e,[n,l]=(0,o.useContext)(c.A);return(0,o.useEffect)(()=>{let e={...n};e[t].quantity=i,l(t=>({...e}))},[i]),(0,a.jsxs)("div",{className:"flex flex-row items-center justify-center p-2 ",children:[(0,a.jsx)("div",{className:" bg-slate-200 hover:bg-pubblue p-1 w-[1.5rem]",onClick:()=>{r(Number(i)-1)},children:"-"}),(0,a.jsx)("div",{className:"text-center w-6",children:i}),(0,a.jsx)("div",{className:" bg-rose-200 hover:bg-pubred p-1 w-[1.5rem]",onClick:()=>{let e=Number(i)+1;e<=s?r(e):alert("Sorry, only ".concat(i," left!"))},children:"+"})]})}function h(e){let{setQuantity:t,item_key:i}=e,[r,s]=(0,o.useContext)(c.A);return(0,a.jsxs)("div",{className:"flex flex-col col-span-2 border-2 border-black bg-pubbrickblue w-full h-full",children:[(0,a.jsx)("div",{className:"flex flex-row bg-gray-200 border-b-2 border-black",children:(0,a.jsx)("div",{className:"text-[0.7rem] bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto m-2",onClick:()=>{t(1)},children:"X"})}),(0,a.jsx)("div",{className:"flex flex-col text-white justify-center text-center h-1/2 mt-auto mb-auto ml-2 mr-2",onClick:()=>{delete r[i],s(e=>({...r}))},children:(0,a.jsx)("p",{children:"Remove?"})})]})}},6926:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n}});var a=i(7437),r=i(259),s=i(2265);function n(){var[e,t]=(0,s.useState)({}),i=(0,s.useRef)(),n=(0,s.useRef)(),o=(0,s.useRef)();return(0,s.useEffect)(()=>{let a=JSON.parse(localStorage.getItem("checkout"));if(console.log("checkoutCart",e),i.current=a.checkoutId,n.current=a.shippingPrice,o.current=a.checkoutPrice,"null"!=localStorage.getItem("checkoutCart")){console.log("setting checkoutcart");let e=JSON.parse(localStorage.getItem("checkoutCart"));t(e)}},[]),(0,a.jsxs)("div",{className:"flex flex-col pt-4 pl-6 pr-4 font-semibold",children:[(0,a.jsx)("span",{children:" Thank you for your support!"}),(0,a.jsxs)("div",{className:"bg-white border border-2 border-black p-2",children:[(0,a.jsxs)("span",{children:[" Order Reference: ",i.current]}),(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:"font-semibold",children:" Confirmation email sent!"})]}),(0,a.jsx)("div",{className:"pt-4",children:"Your order:"}),(0,a.jsx)(r.Z,{cart:e,shippingPrice:n}),(0,a.jsxs)("div",{className:"pt-4",children:["Total Price: \xa3",o.current]})]})}i(6176)},259:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});var a=i(7437),r=i(1434);function s(e){let{price:t}=e;return(0,a.jsxs)("div",{className:"bg-white border-2 border-black grid grid-cols-shippingItem p-2 gap-2 justify-center text-center",children:[(0,a.jsx)("div",{className:"text-[2rem]",children:"\uD83D\uDCE6"}),(0,a.jsx)("div",{className:"flex flex-col justify-center border-r-2 pl-2",children:(0,a.jsx)("p",{children:"Shipping"})}),(0,a.jsx)("div",{className:"flex flex-col justify-center pl-2",children:(0,a.jsxs)("p",{children:["\xa3",t]})})]})}function n(e){let{cart:t,shippingPrice:i}=e;return console.log(t),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[Object.keys(t).map(e=>(0,a.jsx)(r.Z,{cart:t,item_key:e,checkout:!0})),(0,a.jsx)(s,{price:i.current})]})}i(6691)},6176:function(e,t,i){"use strict";i.d(t,{A:function(){return r}});var a=i(2265);let r=(0,a.createContext)([])},7115:function(e,t,i){"use strict";i.r(t),i.d(t,{getInventory:function(){return a}});let a=async e=>{let t=await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?"+new URLSearchParams({productId:e}));if(t.ok){let i=await t.json();return console.log("inventory for ".concat(e,":"),i),i}}},4723:function(e,t,i){"use strict";var a=i(7437);t.Z={castle_bts:{id:4,status:"active",coverImage:"/castle_by_the_sea/CBTS_Grey_Front.jpg",route:"/publications/castle_by_the_sea",title:"Castle By the Sea",publicationYear:2024,detail:"Softcover",stockQuantity:30,info:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{children:"A Castle by the Sea is a 22-page publication by Brad Gilbert that collates images taken in Ischia, Italy in the summer of 2022. It has been designed to be disassembled allowing you to use images as individual or large-scale prints."}),(0,a.jsx)("br",{})," ",(0,a.jsx)("p",{children:"“Although the memories might not depict the actual events 100% they still feel like the truth. The image can show something different but it shows the same truth as the memory and it’s nice to have a scene that only appears in your head. Which is what a moment in time really is. Every time I look back on these images it forms that mist of memories and I feel closer to rabbits near the sea.”"})]}),images_location:"/castle_by_the_sea",variants:[],price:15},orpheus_st:{id:1,status:"active",coverImage:"/orpheus_st_paintings/ND_3070_Cover.jpg",route:"/publications/orpheus_st_paintings",title:"Orpheus Street Paintings",publicationYear:2023,detail:"Hardcover",stockQuantity:150,info:"Orpheus Street Paintings is a 57 paged hardback book that collates the work of Nelson Diplexcito. The book introduces you to the artists studio setting and then showcases his body of work ranging from large scale oil on canvas to smaller oil on paper pieces. The book also contains an interview conducted by Jungwon Jay Hur about Diplexcitos practice.",images_location:"/orpheus_st_paintings",variants:[],price:30},below_bunyan:{id:2,status:"active",coverImage:"/below_bunyan/BelowBunyan_Grey_01.jpg",route:"/publications/below_bunyan",title:"Below Bunyan",publicationYear:2021,detail:"Hardcover",stockQuantity:30,info:"Below Bunyan is a book that represents the diverse artistic spirit of the next generation, captured through compelling details that reveal the interior world of an oft-overlooked phenomenon.",images_location:"/below_bunyan",variants:[],price:15},babe_rainbow:{id:3,status:"active",coverImage:"/babe_rainbow/MHC_Zine_Grey_01.jpg",route:"/publications/babe_rainbow",title:"Mildly High on the Babe Rainbow",publicationYear:2023,detail:"Hardcover",stockQuantity:15,info:"Mildly High on The Babe Rainbow combines London concert photography with selected lyrics to transport the reader into the audience at the venue. Each copy features a hand typewritten cover making every edition unique. The publication also comes with a black & white darkroom handprint from The Mild High Club at Moth Club.",images_location:"/babe_rainbow",variants:[],price:15}}}},function(e){e.O(0,[986,971,596,744],function(){return e(e.s=9228)}),_N_E=e.O()}]);