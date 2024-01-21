import CartIcon from "@/app/cart/components/cart_icon"
import Nav from "./nav"
import Info from "./info"
import {Brick, Spacer} from "@/app/components/brick.js"
import { BrickWall } from "./about_wall"

export default function SidePane(){
    return(
        <div className=' text-black border-l-2 border-black fixed top-0 leading-5 h-full pt-2'>
       <div className="flex flex-col h-full">
       <Nav 
        nav_padding={"p-4"}
       />
        
        <Info />

        <BrickWall
        parent={"sidepane"}
        />
        </div>
       
     </div>

    )
}

