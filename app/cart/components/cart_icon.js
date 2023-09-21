'use client'
import { useState } from "react";
import { useEffect } from "react";
import { CartContext } from "@/app/components/cart_context";
import { useContext } from "react";

export default function CartIcon(){
    // use context
    const [cart, setCart] = useContext(CartContext)

      return(
        <div className='flex flex-row hover:text-slate-600'>
            <div>
                <a href="/cart">
                    Cart
                </a>
            </div>
            
            <Counter 
                cart={cart}
            />

        </div>
    )
}

function Counter({cart}){
    // get total quantity in cart

    var total_quantity = 0

    // useEffect(()=>{
    //     total_quantity = (localStorage.getItem("cart") === null) ? 0 : ''
    // }, [])

    Object.keys(cart).map(cart_key=>(
        total_quantity += cart[cart_key].quantity
    ))        
  

    return(
        <div className="h-4 w-4 bg-red-500 rounded-full text-center text-white text-[0.75rem] leading-[1rem]">
            {total_quantity}
        </div>
    )
}
