import CartIcon from "../cart/components/cart_icon"

const nav_padding = ""

export default function Nav({nav_padding}){
    return(
        <div className={nav_padding +' flex flex-row justify-between'}>
            <div className='pr-4  hover:text-slate-600 md:hover:none font-semibold whitespace-nowrap'>
            <a
            href="/about_us"
            >
                ABOUT US
            </a>        
            </div>
            <CartIcon />
        </div>
    )
}