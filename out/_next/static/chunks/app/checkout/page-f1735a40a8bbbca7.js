(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{8830:function(e,t,s){Promise.resolve().then(s.bind(s,7393))},1434:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var r=s(7437),o=s(6691),a=s.n(o),i=s(4723),n=s(2265),l=s(6176),c=s(7115);function d(e){let{cart:t,item_key:s,checkout:o}=e,[d,m]=(0,n.useContext)(l.A),[p,b]=(0,n.useState)(t[s].quantity),g=i.Z[s],[f,y]=(0,n.useState)({soldOut:!1,availableQuantity:0});return!0!=o&&(0,n.useEffect)(()=>{console.log("updating inv."),(0,c.getInventory)(s).then(e=>{let t=!(e.lockedInventory<g.stockQuantity);e.lockedInventory;let s={soldOut:t,availableQuantity:g.stockQuantity-e.lockedInventory};console.log("inventory",s),y(s)})},[]),(0,r.jsxs)("div",{className:"bg-white border-2 border-black drop-shadow-sm grid grid-cols-cartItemNoImg sm:grid-cols-cartItemImg p-2 md:p-2 gap-2 justify-center text-center items-center",children:[(0,r.jsx)("a",{href:i.Z[s].route,className:"m-auto hidden sm:inline",children:(0,r.jsx)(a(),{className:"",src:i.Z[s].coverImage,alt:"$(item.title) cover image",width:100,height:100,sizes:"100vw",style:{width:"100%",height:"auto"}})}),(0,r.jsx)("div",{className:"flex flex-col justify-center border-r-2",children:(0,r.jsx)("p",{className:"pl-2 pr-2",children:i.Z[s].title})}),(0==p||!0==f.soldOut)&&(0,r.jsx)(h,{setQuantity:b,item_key:s}),p>0&&!1==f.soldOut&&(0,r.jsxs)("div",{className:"flex flex-col justify-center border-r-2",children:[o&&(0,r.jsxs)("div",{children:["x",t[s].quantity]}),!o&&(0,r.jsx)(u,{item_key:s,quantity:p,setQuantity:b,availableQuantity:f.availableQuantity})]}),p>0&&!1==f.soldOut&&(0,r.jsx)("div",{className:"flex flex-col justify-center",children:(0,r.jsxs)("p",{children:["\xa3",i.Z[s].price]})})]})}function u(e){let{item_key:t,quantity:s,setQuantity:o,availableQuantity:a}=e,[i,c]=(0,n.useContext)(l.A);return(0,n.useEffect)(()=>{let e={...i};e[t].quantity=s,c(t=>({...e}))},[s]),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-center p-2 ",children:[(0,r.jsx)("div",{className:" bg-slate-200 hover:bg-pubblue p-1 w-[1.5rem]",onClick:()=>{o(Number(s)-1)},children:"-"}),(0,r.jsx)("div",{className:"text-center w-6",children:s}),(0,r.jsx)("div",{className:" bg-rose-200 hover:bg-pubred p-1 w-[1.5rem]",onClick:()=>{let e=Number(s)+1;e<=a?o(e):alert("Sorry, only ".concat(s," left!"))},children:"+"})]})}function h(e){let{setQuantity:t,item_key:s}=e,[o,a]=(0,n.useContext)(l.A);return(0,r.jsxs)("div",{className:"flex flex-col col-span-2 border-2 border-black bg-pubbrickblue w-full h-full",children:[(0,r.jsx)("div",{className:"flex flex-row bg-gray-200 border-b-2 border-black",children:(0,r.jsx)("div",{className:"text-[0.7rem] bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto m-2",onClick:()=>{t(1)},children:"X"})}),(0,r.jsx)("div",{className:"flex flex-col text-white justify-center text-center h-1/2 mt-auto mb-auto ml-2 mr-2",onClick:()=>{delete o[s],a(e=>({...o}))},children:(0,r.jsx)("p",{children:"Remove?"})})]})}},259:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var r=s(7437),o=s(1434);function a(e){let{price:t}=e;return(0,r.jsxs)("div",{className:"bg-white border-2 border-black grid grid-cols-shippingItem p-2 gap-2 justify-center text-center",children:[(0,r.jsx)("div",{className:"text-[2rem]",children:"\uD83D\uDCE6"}),(0,r.jsx)("div",{className:"flex flex-col justify-center border-r-2 pl-2",children:(0,r.jsx)("p",{children:"Shipping"})}),(0,r.jsxs)("div",{className:"flex flex-col justify-center pl-2",children:[t>0&&(0,r.jsxs)("p",{children:["\xa3",t]}),0==t&&(0,r.jsx)("p",{children:"FREE"})]})]})}function i(e){let{cart:t,shippingPrice:s}=e;return console.log(t),(0,r.jsxs)("div",{className:"grid grid-cols-1 gap-4",children:[Object.keys(t).map(e=>(0,r.jsx)(o.Z,{cart:t,item_key:e,checkout:!0})),(0,r.jsx)(a,{price:s.current})]})}s(6691)},7393:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return p}});var r=s(7437),o=s(8475),a=s.n(o),i=s(2265),n=s(6176),l=s(259),c=s(1865);s(4016);var d=s(5794),u=s.n(d);function h(e){let{form:t}=e,[s,o,a]=t;return(0,r.jsx)("div",{className:"bg-white border-2 border-black mt-4 p-4",children:(0,r.jsxs)("form",{children:[(0,r.jsx)("h2",{className:"text-lg   font-semibold",children:"Shipping Address:"}),(0,r.jsxs)("div",{className:"pb-4",children:["*international shipping coming soon! For now, please contact us via ",(0,r.jsx)("a",{className:" text-blue-400 underline",href:"mailto:contact@yourlocalpublication.com",children:"email!"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2",children:[(0,r.jsx)("label",{htmlFor:"country",children:"Country*"}),(0,r.jsx)(m,{form:[s,o,a]}),(0,r.jsx)("label",{htmlFor:"shippingName",children:"Name*"}),(0,r.jsx)("input",{id:"shippingName",...s("fullName",{required:!0}),className:"md:col-span-2 p-2 rounded-md border border-gray-400"+(a.fullName?" bg-red-200":"")}),(0,r.jsx)("label",{htmlFor:"address1",children:"Address Line 1*"}),(0,r.jsx)("input",{id:"address1",...s("address1",{required:!0}),className:"md:col-span-2 p-2 rounded-md border border-gray-400"+(a.address1?" bg-red-200":"")}),(0,r.jsx)("label",{htmlFor:"address2",children:"Address Line 2"}),(0,r.jsx)("input",{id:"address2",...s("address2"),className:"md:col-span-2 p-2 rounded-md border border-gray-400"+(a.address2?" bg-red-200":"")}),(0,r.jsx)("label",{htmlFor:"postcode",children:"Post Code*"}),(0,r.jsx)("input",{id:"postcode",...s("postCode",{required:!0}),className:"md:col-span-2 p-2 rounded-md border border-gray-400"+(a.postCode?" bg-red-200":"")})]}),(0,r.jsx)("h2",{className:"text-lg pb-2 pt-4 font-semibold",children:"Contact Info:"}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2 ",children:[(0,r.jsx)("label",{htmlFor:"email",children:"Email Address*"}),(0,r.jsx)("input",{id:"email",...s("email",{required:"Email required"}),className:"md:col-span-2 p-2 rounded-md border border-gray-400"+(a.email?" bg-red-200":"")}),(0,r.jsx)("label",{htmlFor:"phoneNum",children:"Phone Number*"}),(0,r.jsx)(c.Qr,{control:o,name:"phoneNum",rules:{required:"Phone num required."},render:e=>{let{field:{onChange:t,onBlur:s,value:o,ref:i}}=e;return(0,r.jsx)(u(),{id:"phoneNum",country:"gb",onChange:t,enableSearch:!0,inputStyle:{background:a.phoneNum?"rgb(254 202 202":"",fontSize:"1rem",lineHeight:"1.5rem",width:"100%"},inputProps:{name:"phoneNum",required:!0,autoFocus:!0}})}})]})]})})}s(1457);let m=e=>{let{form:t}=e,[s,o]=t;return(0,r.jsx)("select",{id:"country",defaultValue:"United Kingdom",...s("country",{required:!0,validate:e=>"United Kingdom"===e||"NUh uh"}),className:"md:col-span-2 p-2 rounded-md border border-gray-400"+(o.country?" border-red-500 border-2":""),children:(0,r.jsx)("option",{value:"United Kingdom",children:"United Kingdom"})})};function p(){let[e,t]=(0,i.useContext)(n.A),{register:s,handleSubmit:o,watch:d,formState:{errors:u},control:m}=(0,c.cI)({mode:"onTouched"});d(u);var p=(0,i.useRef)(),b=(0,i.useRef)(),g=(0,i.useRef)(),f=(0,i.useRef)(),y=(0,i.useRef)(),x=(0,i.useRef)();(0,i.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("checkout"));b.current=e.checkoutId,y.current=e.shippingPrice,x.current=e.checkoutPrice},[]),(0,i.useEffect)(()=>{Object.keys(e).length>0&&localStorage.setItem("checkoutCart",JSON.stringify(e))},[e]);let j=()=>{p.current=SumUpCard.mount({id:"sumup-card",checkoutId:b.current,onResponse:e=>v(e),showAmount:!0,showSubmitButton:!1})},v=async(e,s)=>{if(console.log(e,s),"success"==e){let e={checkoutId:b.current,shippingDetails:g.current,contactDetails:f.current};console.log(e);try{let s=await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/handleOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});if(s.ok){let e=await s.json();console.log("Success:",e),t({}),location.href="/checkout/complete"}else throw await s.json()}catch(e){alert("Something went wrong with your payment. Please try again:)"),console.log("Payment failure",e)}}else"error"==e&&alert("Something went wrong with your payment. Please try again :)"),console.log(e),console.log(s)};return(0,r.jsxs)("div",{className:"flex flex-col pl-6 pr-6",children:[(0,r.jsx)(a(),{src:"https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js",onLoad:()=>j()}),(0,r.jsx)("h1",{className:" text-2xl font-semibold pb-4",children:"Checkout"}),(0,r.jsxs)("div",{className:"bg-pubmain drop-shadow-sm",children:[(0,r.jsx)("h2",{className:"text-lg pb-2 font-semibold",children:"Order"}),(0,r.jsx)("div",{className:"",children:(0,r.jsx)(l.Z,{cart:e,shippingPrice:y})}),(0,r.jsx)(h,{form:[s,m,u]}),(0,r.jsx)("h2",{className:"text-lg pb-2 pt-4 font-semibold",children:"Payment"}),(0,r.jsx)("div",{id:"sumup-card",className:"pt-2 mb-4 bg-white border-2 border-black"}),(0,r.jsxs)("div",{onClick:o(e=>{console.log(e),g.current={fullName:e.fullName,address1:e.address1,address2:e.address2,postcode:e.postCode,price:y.current},f.current={email:e.email,phone:e.phoneNum},console.log("shipping",g.current),console.log("contact",f.current),p.current.submit()}),className:"bg-pubbrickblue hover:bg-stone-200 border-2 border-black text-center text-lg text-white pt-2 pb-2 pr-8 pl-8 drop-shadow-sm ",children:["Pay \xa3",x.current]})]})]})}},6176:function(e,t,s){"use strict";s.d(t,{A:function(){return o}});var r=s(2265);let o=(0,r.createContext)([])},7115:function(e,t,s){"use strict";s.r(t),s.d(t,{getInventory:function(){return r}});let r=async e=>{let t=await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?"+new URLSearchParams({productId:e}));if(t.ok){let s=await t.json();return console.log("inventory for ".concat(e,":"),s),s}}},4723:function(e,t,s){"use strict";var r=s(7437);t.Z={eyes:{id:5,status:"active",coverImage:"/book_of_eyes/BookOfEyes_4x3_01.jpg",route:"/publications/book_of_eyes",title:"Book of Eyes",publicationYear:2024,detail:"Softcover",stockQuantity:30,info:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"The Book of Eyes contains 23 images of the human eye, photographed in the UK during 2021-2024."}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"The impetus (perhaps subconscious) of the project comes from Boris Groys who, in Philosophy of Care, argues that the human body is worthy of the same reverence as art-objects."}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:'"The human gaze does not see the human soul - that was the privilege of god. The human soul sees only the human body. Our rights are related to the image that we offer to the gaze of others… Art does not wait for a better society of the future - it immortalizes here and now… To fulfill its mission, the art museum should include humans. Because the human being is simply a body among other bodies, a thing among other things, humans can also be blessed with the museums immortality."'})]}),images_location:"/book_of_eyes",variants:[],price:15,shipping:0},castle_bts:{id:4,status:"active",coverImage:"/castle_by_the_sea/Small_CBTS_Grey_00.jpg",route:"/publications/castle_by_the_sea",title:"Castle By the Sea",publicationYear:2024,detail:"Softcover",stockQuantity:30,info:(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{children:"A Castle by the Sea is a 22-page publication by Brad Gilbert that collates images taken in Ischia, Italy in the summer of 2022. It has been designed to be disassembled allowing you to use images as individual or large-scale prints."}),(0,r.jsx)("br",{})," ",(0,r.jsx)("p",{children:"“Although the memories might not depict the actual events 100% they still feel like the truth. The image can show something different but it shows the same truth as the memory and it’s nice to have a scene that only appears in your head. Which is what a moment in time really is. Every time I look back on these images it forms that mist of memories and I feel closer to rabbits near the sea.”"})]}),images_location:"/castle_by_the_sea",variants:[],price:15,shipping:0},orpheus_st:{id:1,status:"active",coverImage:"/orpheus_st_paintings/Small_ND_3070.jpg",route:"/publications/orpheus_st_paintings",title:"Orpheus Street Paintings",publicationYear:2023,detail:"Hardcover",stockQuantity:150,info:"Orpheus Street Paintings is a 57 paged hardback book that collates the work of Nelson Diplexcito. The book introduces you to the artists studio setting and then showcases his body of work ranging from large scale oil on canvas to smaller oil on paper pieces. The book also contains an interview conducted by Jungwon Jay Hur about Diplexcitos practice.",images_location:"/orpheus_st_paintings",variants:[],price:30,shipping:0},below_bunyan:{id:2,status:"active",coverImage:"/below_bunyan/Small_BelowBunyan_Grey_01.jpg",route:"/publications/below_bunyan",title:"Below Bunyan",publicationYear:2021,detail:"Hardcover",stockQuantity:30,info:"Below Bunyan is a book that represents the diverse artistic spirit of the next generation, captured through compelling details that reveal the interior world of an oft-overlooked phenomenon.",images_location:"/below_bunyan",variants:[],price:15,shipping:0},babe_rainbow:{id:3,status:"active",coverImage:"/babe_rainbow/Small_MHC_Zine_Grey_01.jpg",route:"/publications/babe_rainbow",title:"Mildly High on the Babe Rainbow",publicationYear:2023,detail:"Hardcover",stockQuantity:15,info:"Mildly High on The Babe Rainbow combines London concert photography with selected lyrics to transport the reader into the audience at the venue. Each copy features a hand typewritten cover making every edition unique. The publication also comes with a black & white darkroom handprint from The Mild High Club at Moth Club.",images_location:"/babe_rainbow",variants:[],price:15,shipping:0}}}},function(e){e.O(0,[986,258,971,596,744],function(){return e(e.s=8830)}),_N_E=e.O()}]);