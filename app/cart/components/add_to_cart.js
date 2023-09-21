'use client'

import { useState } from "react"
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "@/app/components/cart_context";
import GoToCart from "./go_to_cart";



export default function AddToCart({publication_key}){
    
    // set up state and storage
    const [cart, setCart] = useContext(CartContext)
    const [popupHidden, setpopupHidden] = useState("hidden")

    function AddToCart(){
        const newCart = {...cart}
        if(newCart[publication_key]){
            newCart[publication_key].quantity +=1
        }
        else{
            newCart[publication_key] = {
                quantity:1
            }
        }
        console.log(newCart)
        setCart(cart=>({...newCart}))
    }
    
    
    return(
        <div>
            <GoToCart 
                isHidden={popupHidden}
                setHidden={setpopupHidden}
                publication_key={publication_key}
            />
            <div
                href="/cart"
                className="h-6 w-auto p-4 bg-slate-100 text-stone-800 hover:bg-amber-50 border-rose-100 border-2 rounded-full text-center align-middle  text-[.75] leading-[0rem] sm:text-[1.25rem] sm:leading-[0rem] "
                onClick={()=>{
                    AddToCart()
                    setpopupHidden("visible")
                    }}>
                Add To Cart
            </div>
        </div>
    )
}