import CartIcon from "../cart/components/cart_icon"

const nav_padding = ""

export default function Nav({nav_padding}){
    return(
        <div className={nav_padding +' lg:pl-6 lg:pr-12 lg:pt-4 pl-2 pt-2 pb-1 lg:pb-2 flex flex-row justify-between w-full text-[3vw] sm:text-sm md:text-base font-bold'}>
            <div className=' pr-[3vw] sm:pr-4 font-semibold whitespace-nowrap'>
                <a 
                className="lg:hidden visible  hover:text-slate-600 text-sm"
                href="/about_us"> 
                    ABOUT US
                </a>
                
               <div
                className="text-xl lg:inline hidden pl-6"
                > ABOUT US</div>
     
            </div>
            <CartIcon />
        </div>
    )
}