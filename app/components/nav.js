import CartIcon from "../cart/components/cart_icon"

const nav_padding = ""

export default function Nav({nav_padding}){
    return(
        <div className={nav_padding +' flex flex-row justify-between w-full text-[3vw] sm:text-sm md:text-base'}>
            <div className=' pr-[3vw] sm:pr-4 font-semibold whitespace-nowrap'>
                <a 
                className="md:hidden visible  hover:text-slate-600 "
                href="/about_us"> 
                    ABOUT US
                </a>
                
               <div
                className="text-xl md:inline hidden"
                > ABOUT US</div>
     
            </div>
            <CartIcon />
        </div>
    )
}