import CartIcon from "@/app/cart/components/cart_icon"
import Nav from "./nav"
import Info from "./info"
import {Brick, Spacer} from "@/app/components/brick.js"
import { BrickWall } from "./about_wall"

export default function SidePane(){
    return(
        <div className='flex flex-col text-black border-l-2 border-black fixed top-0 leading-5 h-screen'>
       
       <Nav 
        nav_padding={"p-4"}
       />
        
        <Info />

        <BrickWall
        height={"3vw"}
        />
       
     </div>

    )
}

// const BrickWall = ({})=>{
//     const brickHeight = "h-[3vw]"

//     return (
//         <div
//         className=" mt-auto justify-end"
//         >
//             <div className={`grid grid-rows-1 grid-cols-brick1  ${brickHeight}`}>
//                 <Brick borderTB={true} borderRL={true}/>
//                 <Spacer />
//                 <Spacer />
//                 <Spacer />
//                 <Brick borderTB={true} borderRL={true}/>
//             </div>
//             <div className={`grid grid-rows-1 grid-cols-brick2  ${brickHeight}`}>
//                 <Brick borderTB={true} borderRL={true}/>
//                 <Spacer />
//                 <Spacer />
//                 <Spacer />
//                 <Spacer />
//                 <Brick borderTB={true} borderRL={true}/>
//             </div>
            
//             <div className={`grid grid-rows-1 grid-cols-brick3 ${brickHeight}`}>
//                 <Brick borderTB={true} borderRL={true}/>
//                 <Spacer />
//                 <Spacer />
//                 <Spacer />
//                 <Spacer />
//                 <Brick  borderTB={true} borderRL={true}/>
//             </div>
            
//             <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
//                 <Brick borderTB={true} borderRL={true}/>
//                 <div className="flex bg-green-600 text-white justify-center border border-black"><span className="self-center font-semibold">ARTISTS</span></div>
//                 <Brick  borderTB={true} borderRL={true}/>
//                 <Brick  borderTB={true} borderRL={true}/>
//                 <Brick  borderTB={true} borderRL={true}/>
//             </div>
//             <div className={`grid grid-rows-1 grid-cols-brick5 ${brickHeight}`}>
//                 <Brick borderTB={true} borderRL={true}/>
//                 <div className="flex bg-yellow-400 text-white justify-center border border-black"><span className="self-center font-semibold">CONTACT</span></div>
//                 <Brick  borderTB={true} borderRL={true}/>
//                 <Brick  borderTB={true} borderRL={true}/>
//             </div>
//             <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
//                 <Brick borderTB={true} borderRL={true}/>
//                 <Brick  borderTB={true} borderRL={true}/>
//                 <Brick  borderTB={true} borderRL={true}/>
//                 <div className="flex bg-indigo-700 text-white justify-center border border-black"><span className="self-center font-semibold">NEWS</span></div>
//                 <Brick  borderTB={true} borderRL={true}/>
//             </div>

//     </div>
//     )
// }

