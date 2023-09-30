'use client'

import { useState } from "react"
import { useEffect } from "react";
import { useContext } from "react";

import CartItem from "@/app/cart/components/cart_item"
import { CartContext } from "@/app/components/cart_context";
import CheckoutButton from "@/app/cart/components/checkout_button";


export default function Home(){
    
    // state and effects
    const [cart, setCart] = useContext(CartContext)
    console.log(cart)
      
    return(
        <div className="flex flex-col p-4">
            <div className="pb-4">            
                <h1 className="text-3xl font-medium">Cart</h1>
            </div>
            
            <div className="grid grid-cols-1 gap-4 pb-4">
            {/* map over the items in the cart by key */}
                {Object.keys(cart).map(item_key => (
                    <CartItem
                        key={item_key}
                        item_key={item_key}
                        checkout={false}
                    />
                ))}   

            </div>
            
            <CheckoutButton
            cart={cart} 
            />     
        </div>
    )
}