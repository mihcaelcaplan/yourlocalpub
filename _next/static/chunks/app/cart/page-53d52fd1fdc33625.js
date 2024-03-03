(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{3805:function(e,t,i){Promise.resolve().then(i.bind(i,2606))},1434:function(e,t,i){"use strict";i.d(t,{Z:function(){return h}});var o=i(7437),a=i(6691),s=i.n(a),n=i(4723),r=i(2265),l=i(6176),c=i(7115);function h(e){let{cart:t,item_key:i,checkout:a}=e,[h,p]=(0,r.useContext)(l.A),[m,b]=(0,r.useState)(t[i].quantity),g=n.Z[i],[f,y]=(0,r.useState)({soldOut:!1,availableQuantity:0});return!0!=a&&(0,r.useEffect)(()=>{console.log("updating inv."),(0,c.getInventory)(i).then(e=>{let t=!(e.lockedInventory<g.stockQuantity);e.lockedInventory;let i={soldOut:t,availableQuantity:g.stockQuantity-e.lockedInventory};console.log("inventory",i),y(i)})},[]),(0,o.jsxs)("div",{className:"bg-white border-2 border-black drop-shadow-sm grid grid-cols-cartItemNoImg sm:grid-cols-cartItemImg p-2 md:p-2 gap-2 justify-center text-center items-center",children:[(0,o.jsx)("a",{href:n.Z[i].route,className:"m-auto hidden sm:inline",children:(0,o.jsx)(s(),{className:"",src:n.Z[i].coverImage,alt:"$(item.title) cover image",width:100,height:100,sizes:"100vw",style:{width:"100%",height:"auto"}})}),(0,o.jsx)("div",{className:"flex flex-col justify-center border-r-2",children:(0,o.jsx)("p",{className:"pl-2 pr-2",children:n.Z[i].title})}),(0==m||!0==f.soldOut)&&(0,o.jsx)(d,{setQuantity:b,item_key:i}),m>0&&!1==f.soldOut&&(0,o.jsxs)("div",{className:"flex flex-col justify-center border-r-2",children:[a&&(0,o.jsxs)("div",{children:["x",t[i].quantity]}),!a&&(0,o.jsx)(u,{item_key:i,quantity:m,setQuantity:b,availableQuantity:f.availableQuantity})]}),m>0&&!1==f.soldOut&&(0,o.jsx)("div",{className:"flex flex-col justify-center",children:(0,o.jsxs)("p",{children:["\xa3",n.Z[i].price]})})]})}function u(e){let{item_key:t,quantity:i,setQuantity:a,availableQuantity:s}=e,[n,c]=(0,r.useContext)(l.A);return(0,r.useEffect)(()=>{let e={...n};e[t].quantity=i,c(t=>({...e}))},[i]),(0,o.jsxs)("div",{className:"flex flex-row items-center justify-center p-2 ",children:[(0,o.jsx)("div",{className:" bg-slate-200 hover:bg-pubblue p-1 w-[1.5rem]",onClick:()=>{a(Number(i)-1)},children:"-"}),(0,o.jsx)("div",{className:"text-center w-6",children:i}),(0,o.jsx)("div",{className:" bg-rose-200 hover:bg-pubred p-1 w-[1.5rem]",onClick:()=>{let e=Number(i)+1;e<=s?a(e):alert("Sorry, only ".concat(i," left!"))},children:"+"})]})}function d(e){let{setQuantity:t,item_key:i}=e,[a,s]=(0,r.useContext)(l.A);return(0,o.jsxs)("div",{className:"flex flex-col col-span-2 border-2 border-black bg-pubbrickblue w-full h-full",children:[(0,o.jsx)("div",{className:"flex flex-row bg-gray-200 border-b-2 border-black",children:(0,o.jsx)("div",{className:"text-[0.7rem] bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto m-2",onClick:()=>{t(1)},children:"X"})}),(0,o.jsx)("div",{className:"flex flex-col text-white justify-center text-center h-1/2 mt-auto mb-auto ml-2 mr-2",onClick:()=>{delete a[i],s(e=>({...a}))},children:(0,o.jsx)("p",{children:"Remove?"})})]})}},2606:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return c}});var o=i(7437),a=i(2265),s=i(1434),n=i(6176),r=i(4723);function l(e){let{cart:t}=e,i=()=>{let e={};return e.products=t,Object.keys(e.products).map(t=>{e.products[t].price=r.Z[t].price,e.products[t].shipping=r.Z[t].shipping}),e.checkout_time=Math.floor(Date.now()/1e3),console.log(e),e},a=async()=>{let e=i();console.log(JSON.stringify(e));try{let t=await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/handleCheckoutV2",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(t.ok){let e=await t.json();console.log("Success:",e),localStorage.setItem("checkout",JSON.stringify({checkoutId:e.checkoutId,shippingPrice:e.shippingPrice,checkoutPrice:e.checkoutPrice})),location.href="/checkout"}else alert("Please reload the page and try again :(")}catch(e){alert("Error:",e)}};return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:"bg-pubbrickblue hover:bg-indigo-400 border-black border-2 text-center text-lg text-white pt-2 pb-2 pr-8 pl-8 drop-shadow-md ",children:(0,o.jsx)("div",{href:"/checkout",onClick:()=>a(),children:"Checkout"})})})}function c(){let[e,t]=(0,a.useContext)(n.A);return console.log(e),(0,o.jsxs)("div",{className:"flex flex-col p-4",children:[(0,o.jsx)("div",{className:"pb-4",children:(0,o.jsx)("h1",{className:"text-3xl font-medium",children:"Cart"})}),(0,o.jsx)("div",{className:"grid grid-cols-1 gap-4 pb-4",children:Object.keys(e).map(t=>(0,o.jsx)(s.Z,{cart:e,item_key:t,checkout:!1},t))}),Object.keys(e).length>0&&(0,o.jsx)(l,{cart:e})]})}},6176:function(e,t,i){"use strict";i.d(t,{A:function(){return a}});var o=i(2265);let a=(0,o.createContext)([])},7115:function(e,t,i){"use strict";i.r(t),i.d(t,{getInventory:function(){return o}});let o=async e=>{let t=await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?"+new URLSearchParams({productId:e}));if(t.ok){let i=await t.json();return console.log("inventory for ".concat(e,":"),i),i}}},4723:function(e,t,i){"use strict";var o=i(7437);t.Z={eyes:{id:5,status:"active",coverImage:"/book_of_eyes/BookOfEyes_4x3_01.jpg",route:"/publications/book_of_eyes",title:"Book of Eyes",publicationYear:2024,detail:"Softcover",stockQuantity:30,info:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"The Book of Eyes contains 23 images of the human eye, photographed in the UK during 2021-2024."}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:"The impetus (perhaps subconscious) of the project comes from Boris Groys who, in Philosophy of Care, argues that the human body is worthy of the same reverence as art-objects."}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:'"The human gaze does not see the human soul - that was the privilege of god. The human soul sees only the human body. Our rights are related to the image that we offer to the gaze of others… Art does not wait for a better society of the future - it immortalizes here and now… To fulfill its mission, the art museum should include humans. Because the human being is simply a body among other bodies, a thing among other things, humans can also be blessed with the museums immortality."'})]}),images_location:"/book_of_eyes",variants:[],price:15,shipping:0},castle_bts:{id:4,status:"active",coverImage:"/castle_by_the_sea/Small_CBTS_Grey_00.jpg",route:"/publications/castle_by_the_sea",title:"Castle By the Sea",publicationYear:2024,detail:"Softcover",stockQuantity:30,info:(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{children:"A Castle by the Sea is a 22-page publication by Brad Gilbert that collates images taken in Ischia, Italy in the summer of 2022. It has been designed to be disassembled allowing you to use images as individual or large-scale prints."}),(0,o.jsx)("br",{})," ",(0,o.jsx)("p",{children:"“Although the memories might not depict the actual events 100% they still feel like the truth. The image can show something different but it shows the same truth as the memory and it’s nice to have a scene that only appears in your head. Which is what a moment in time really is. Every time I look back on these images it forms that mist of memories and I feel closer to rabbits near the sea.”"})]}),images_location:"/castle_by_the_sea",variants:[],price:15,shipping:0},orpheus_st:{id:1,status:"active",coverImage:"/orpheus_st_paintings/Small_ND_3070.jpg",route:"/publications/orpheus_st_paintings",title:"Orpheus Street Paintings",publicationYear:2023,detail:"Hardcover",stockQuantity:150,info:"Orpheus Street Paintings is a 57 paged hardback book that collates the work of Nelson Diplexcito. The book introduces you to the artists studio setting and then showcases his body of work ranging from large scale oil on canvas to smaller oil on paper pieces. The book also contains an interview conducted by Jungwon Jay Hur about Diplexcitos practice.",images_location:"/orpheus_st_paintings",variants:[],price:30,shipping:0},below_bunyan:{id:2,status:"active",coverImage:"/below_bunyan/Small_BelowBunyan_Grey_01.jpg",route:"/publications/below_bunyan",title:"Below Bunyan",publicationYear:2021,detail:"Hardcover",stockQuantity:30,info:"Below Bunyan is a book that represents the diverse artistic spirit of the next generation, captured through compelling details that reveal the interior world of an oft-overlooked phenomenon.",images_location:"/below_bunyan",variants:[],price:15,shipping:0},babe_rainbow:{id:3,status:"active",coverImage:"/babe_rainbow/Small_MHC_Zine_Grey_01.jpg",route:"/publications/babe_rainbow",title:"Mildly High on the Babe Rainbow",publicationYear:2023,detail:"Hardcover",stockQuantity:15,info:"Mildly High on The Babe Rainbow combines London concert photography with selected lyrics to transport the reader into the audience at the venue. Each copy features a hand typewritten cover making every edition unique. The publication also comes with a black & white darkroom handprint from The Mild High Club at Moth Club.",images_location:"/babe_rainbow",variants:[],price:15,shipping:0}}}},function(e){e.O(0,[986,971,596,744],function(){return e(e.s=3805)}),_N_E=e.O()}]);