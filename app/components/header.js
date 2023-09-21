import Nav from "./nav"
import { useContext } from "react"
import { CartContext } from '@/app/components/cart_context'


export default function Header(){

    return(
        <div className="flex flex-row pt-4 pb-2 pl-8 pr-8 justify-between">
              
            <h1 className='animate-pulse text-xl sm:text-2xl md:text-3xl'>
                <a href="/">Your Local Pub</a>
            </h1>     
            <div className="flex items-end md:hidden text-base sm:text-l md:text-3xl">
                <Nav />
            </div>
      </div>
    )
}