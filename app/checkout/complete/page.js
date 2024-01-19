'use client'

// TODO: clear localStorage onload
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
        className="flex flex-col"
        >
            <div className="">
               <span> Thank you for supporting independent artists 😁</span>
               <br/>
               <span> Your order # is: {checkoutId.current}</span>
            </div>
            <div className="">
                You ordered: 
            </div>

            
            <Basket 
                cart={checkoutCart}
                shippingPrice={shippingPrice}
            />

            <div className="">
                Total Price: {checkoutPrice.current} 
            </div>

            

        </div>
    )
}