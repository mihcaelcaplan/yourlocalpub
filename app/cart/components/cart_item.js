'use client'

import Image from "next/image"
import publications from "@/public/publication_list"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { CartContext } from "@/app/components/cart_context"



export default function CartItem({item_key, checkout}){
    
    // get context
    const [cart, setCart] = useContext(CartContext)

    // state
    console.log(item_key)

    return(
        <div className="bg-gray-100 grid grid-cols-4 p-4 gap-2 justify-center text-center">
            <a href={publications[item_key].route}>
            <Image 
                    className="pr-4"
                    src={publications[item_key].coverImage}
                    alt={`$(item.title) cover image`}
                    width={100}
                    height={100}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                </a>
            <div className="flex flex-col justify-center border-r-2 pl-2">
                <p className=" text-sm text-stone-700 pb-2">Title</p>
                <p>{publications[item_key].title}</p>
            </div>
            <div className="flex flex-col justify-center border-r-2 pl-2">
                <p className=" text-sm text-stone-700 pb-2">Quantity</p>
                {checkout && <div>{cart[item_key].quantity}</div>}
                {!checkout && <QuantityPicker
                    cart={cart}
                    setCart={setCart}
                    item_key={item_key}
                    // quantity={quantity}
                    // setQuantity={setQuantity}  
                    // updateCartQuantity={updateCartQuantity}   
                />}
            </div>
            <div className="flex flex-col justify-center pl-2">
                <p className=" text-sm text-stone-700 pb-2">Price</p>
                <p>£{publications[item_key].price}</p>
            </div>
        </div>
    )
}

function QuantityPicker({cart, setCart, item_key}){
    
    // set up state
    const [quantity, setQuantity] = useState(cart[item_key].quantity)

    // // set cart quantity when quantity is updated within an item
    useEffect((cart, item_key, setCart)=>{
        const newCart = {...cart}
        newCart[item_key].quantity = quantity
        setCart(cart=>({...newCart}))
    }, [quantity])
        
    return(
        <div className="flex flex-row items-center justify-center ">
            <div 
            className=" bg-slate-200 hover:bg-slate-400 rounded-md p-1 pb"
            onClick={()=>{
                setQuantity(Number(quantity)-1)
            }}
            >
                -
            </div>
                <div
                className="">
                    <input
                        className="text-center w-6"
                        onChange={e =>{
                            // logic to check that the input value is a number
                            if (!isNaN(e.target.value)) {
                            setQuantity(Number(e.target.value))
                            }
                            else{
                            setQuantity(quantity)
                            }
                        }}
                            value={quantity}
                    />
            </div>
            <div 
            className=" bg-rose-200 hover:bg-rose-600 rounded-md p-1"
            onClick={()=>{
                setQuantity(Number(quantity)+1)
            }}
            >
                +
            </div>
        </div>
    )
}