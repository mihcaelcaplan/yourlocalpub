'use client'

import Image from "next/image"
import publications from "@/public/publication_list"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { CartContext } from "@/app/components/cart_context"
import {getInventory} from "@/app/publications/components/getInventory"



export default function CartItem({cart, item_key, checkout}){
    
    // get context setter, but let cart be passed in from above
    const [_, setCart] = useContext(CartContext)

    
    const [quantity, setQuantity] = useState(cart[item_key].quantity)

    const publication = publications[item_key];

        const [inventory, setInventory] = useState({
            soldOut: false,
            availableQuantity: 0
        })
        
        // get inventory on load 
        //  unless you're in checkout, in which case don't check!!! because locks right before checkout step so it would prompt to remove
        if (checkout != true){
            useEffect(()=>{
                    console.log("updating inv.")
                    // go update the inventory    
                    
                    const response = getInventory(item_key).then((response)=>{
                        const soldOut = response.lockedInventory < publication.stockQuantity ? false : true;
                        const availableQuantity = response.lockedInventory;
                        
                        const updateInventory = {
                            soldOut: soldOut,
                            availableQuantity: publication.stockQuantity - response.lockedInventory,
                        };

                        console.log("inventory", updateInventory);
                        
                        setInventory(updateInventory);
                    });    
            }, [])
        }


    return(
        <div className="bg-white border-2 border-black drop-shadow-sm grid grid-cols-cartItemNoImg sm:grid-cols-cartItemImg p-2 md:p-2 gap-2 justify-center text-center items-center">
            
            <a href={publications[item_key].route}
            className="m-auto hidden sm:inline"
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
                {/* <p className=" text-sm text-stone-700 pb-2">Title</p> */}
                <p className="pl-2 pr-2">{publications[item_key].title}</p>
            </div>

            {(quantity == 0 || inventory.soldOut == true) && <Remove 
                setQuantity={setQuantity}
                item_key={item_key}
            />}

            {(quantity > 0 && inventory.soldOut == false) && <div className="flex flex-col justify-center border-r-2">
                {/* <p className=" text-sm text-stone-700">Quantity</p> */}
                {checkout && <div>x{cart[item_key].quantity}</div>}
                {!checkout && <QuantityPicker
                    item_key={item_key}
                    quantity={quantity}
                    setQuantity={setQuantity} 
                    availableQuantity={inventory.availableQuantity} 
                />}
                
            </div>}
            
            {(quantity > 0 && inventory.soldOut == false) && <div className="flex flex-col justify-center">
                {/* <p className=" text-sm text-stone-700 pb-2">Price</p> */}
                <p>£{publications[item_key].price}</p>
            </div>}
        
        </div>
    )
}

function QuantityPicker({item_key, quantity, setQuantity, availableQuantity}){
    
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
            className=" bg-slate-200 hover:bg-pubblue p-1 w-[1.5rem]"
            onClick={()=>{
                setQuantity(Number(quantity)-1)
            }}
            >
                -
            </div>
                <div
                className="text-center w-6">
                {quantity}
                    {/* <input
                        className="text-center w-6"
                        onChange={e =>{
                            // logic to check that the input value is a number
                            if (!isNaN(e.target.value)) {
                                const newQuantity = Number(e.target.value)
                                if(newQuantity <= availableQuantity){
                                    setQuantity(newQuantity)
                                    }
                                else{
                                    alert(`Sorry, only ${quantity} left!`)
                                    setQuantity(quantity)
                                }
                            }
                            else{
                                setQuantity(quantity)
                            }
                        }}
                            value={quantity}
                    /> */}
            </div>
            <div 
            className=" bg-rose-200 hover:bg-pubred p-1 w-[1.5rem]"
            onClick={()=>{
                const newQuantity = Number(quantity)+1
                if(newQuantity <= availableQuantity){
                    setQuantity(newQuantity)
                }
                else{
                    alert(`Sorry, only ${quantity} left!`)
                }
            }}
            >
                +
            </div>
        </div>
    )
}

function Remove({setQuantity, item_key}){
    const [cart, setCart] = useContext(CartContext)

    return(
        <div
        className="flex flex-col col-span-2 border-2 border-black bg-pubbrickblue w-full h-full"
        >   

            <div className="flex flex-row bg-gray-200 border-b-2 border-black">
            <div className="text-[0.7rem] bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto m-2" 
                onClick={()=>{setQuantity(1)}}
                >
                X
            </div>
            </div>

            <div
            className="flex flex-col text-white justify-center text-center h-1/2 mt-auto mb-auto ml-2 mr-2"
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