import CartIcon from "@/app/cart/components/cart_icon"
import Nav from "./nav"
import Info from "./info"

export default function SidePane(){
    return(
        <div className='flex flex-col text-white fixed top-0 leading-5'>
       
       <Nav 
        nav_padding={"p-6"}
       />
        
        <Info />
       
     </div>

    )
}

