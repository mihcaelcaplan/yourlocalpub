'use client'

import Basket from "../components/basket"
import { useContext, useRef, useEffect, useState} from "react";
import { CartContext } from "@/app/components/cart_context";


export default function CheckoutComplete(){
    // const [cart, setCart] = useContext(CartContext);
    var [checkoutCart, setCheckoutCart] = useState({});


    var checkoutId = useRef();
    var shippingPrice = useRef();
    var checkoutPrice = useRef();

     // get info from servers
    useEffect(() => {
        const checkout = JSON.parse(localStorage.getItem('checkout'));
        console.log("checkoutCart", checkoutCart)
        checkoutId.current = checkout.checkoutId;
        shippingPrice.current = checkout.shippingPrice;
        checkoutPrice.current = checkout.checkoutPrice;
        
        if(localStorage.getItem("checkoutCart") != "null"){
            console.log("setting checkoutcart")
            const storedCheckoutCart = JSON.parse(localStorage.getItem('checkoutCart'));
            setCheckoutCart(storedCheckoutCart);
        }
    }, []);


    return(
        <div
        className="flex flex-col pt-4 pl-6 pr-4 font-semibold"
        >
            <span> Thank you for your support!</span>
            <div className="bg-white border border-2 border-black p-2">
               <span> Order Reference: {checkoutId.current}</span>
               <br />
               <span className="font-semibold"> Confirmation email sent!</span>
            </div>
            <div className="pt-4">
                Your order: 
            </div>

            
            <Basket 
                cart={checkoutCart}
                shippingPrice={shippingPrice}
            />

            <div className="pt-4">
                Total Price: £{checkoutPrice.current} 
            </div>

            

        </div>
    )
}