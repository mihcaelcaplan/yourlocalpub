'use client'

// TODO: clear localStorage onload
import Basket from "../components/basket"
import { useContext, useRef, useEffect } from "react";
import { CartContext } from "@/app/components/cart_context";


export default function CheckoutComplete(){
    const [cart, setCart] = useContext(CartContext)

    var checkoutId = useRef();
    var shippingPrice = useRef();
    var checkoutPrice = useRef();

     // get info from servers
     useEffect(() => {
        const checkout = JSON.parse(localStorage.getItem('checkout'))
       checkoutId.current = checkout.checkoutId
       shippingPrice.current = checkout.shippingPrice
       checkoutPrice.current = checkout.checkoutPrice

      }, []);


    return(
        <div
        className="flex flex-col"
        >
            <div className="">
                Thank you for supporting independent artists 😁
            </div>
            <div className="">
                You ordered: 
            </div>

            <Basket 
                cart={cart}
                shippingPrice={shippingPrice}
            />

            <div className="">
                Total Price: {checkoutPrice.current} 
            </div>

            

        </div>
    )
}