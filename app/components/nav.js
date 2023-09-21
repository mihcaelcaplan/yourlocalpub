import CartIcon from "../cart/components/cart_icon"

const nav_padding = ""

export default function Nav({nav_padding}){
    return(
        <div className={nav_padding +' flex flex-row justify-between'}>
            <div className='pr-4  hover:text-slate-600'>
                About Us
            </div>
            <CartIcon />
        </div>
    )
}