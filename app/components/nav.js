import CartIcon from "../cart/components/cart_icon"

const nav_padding = ""

export default function Nav({nav_padding}){
    return(
        <div className={nav_padding +' flex flex-row justify-between items-start'}>
            <div className='pr-4 font-semibold whitespace-nowrap'>
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