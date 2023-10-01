'use client'

import Image from "next/image"
import publications from "@/public/publication_list"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { CartContext } from "@/app/components/cart_context"



export default function CartItem({item_key, checkout}){
    
    // get context
    const [cart, setCart] = useContext(CartContext)
    const [quantity, setQuantity] = useState(cart[item_key].quantity)


    return(
        <div className="bg-gray-100 grid grid-cols-cartItem p-2 md:p-4 gap-2 justify-center text-center items-center">
            
            <a href={publications[item_key].route}
            className="m-auto"
            >
            <Image 
                    className=""
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
                
            

            <div className="flex flex-col justify-center border-r-2"
            >
                <p className=" text-sm text-stone-700 pb-2">Title</p>
                <p className="pl-2 pr-2">{publications[item_key].title}</p>
            </div>

            {quantity == 0 && <Remove 
                setQuantity={setQuantity}
                cart={cart}
                setCart={setCart}
                item_key={item_key}
            />}

            {quantity > 0 && <div className="flex flex-col justify-center border-r-2">
                <p className=" text-sm text-stone-700">Quantity</p>
                {checkout && <div>{cart[item_key].quantity}</div>}
                {!checkout && <QuantityPicker
                    item_key={item_key}
                    quantity={quantity}
                    setQuantity={setQuantity}  
                />}
                
            </div>}
            
            {quantity > 0 && <div className="flex flex-col justify-center">
                <p className=" text-sm text-stone-700 pb-2">Price</p>
                <p>£{publications[item_key].price}</p>
            </div>}
        
        </div>
    )
}

function QuantityPicker({item_key, quantity, setQuantity}){
    
    // set up state
    const [cart, setCart] = useContext(CartContext)


    // // set cart quantity when quantity is updated within an item
    useEffect(()=>{
        const newCart = {...cart};
        newCart[item_key].quantity = quantity
        setCart(cart=>({...newCart}))
    }, [quantity])
        
    return(
        <div className="flex flex-row items-center justify-center p-2 ">
            <div 
            className=" bg-slate-200 hover:bg-pubblue rounded-md p-1 w-[1.5rem]"
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
            className=" bg-rose-200 hover:bg-pubred rounded-md p-1 w-[1.5rem]"
            onClick={()=>{
                setQuantity(Number(quantity)+1)
            }}
            >
                +
            </div>
        </div>
    )
}

function Remove({cart, setCart, setQuantity, item_key}){
    return(
        <div
        className="flex flex-col col-span-2 rounded-md bg-white w-full h-full"
        >   

            <div className="flex flex-row bg-gray-200 rounded-t-md">
            <div className="text-[0.7rem] rounded-full bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto m-2" 
                onClick={()=>{setQuantity(1)}}
                >
                X
            </div>
            </div>

            <div
            className="flex flex-col rounded-md text-white justify-center text-center bg-pubblue hover:bg-pubred h-1/2 mt-auto mb-auto ml-2 mr-2"
            onClick={()=>{
                const updateCart = cart;
                delete updateCart[item_key];
                setCart(cart=>({...updateCart}));
                // console.log(updateCart);
            }}
            >
                <p>Remove?</p>
            </div>
        </div> 
    )
}