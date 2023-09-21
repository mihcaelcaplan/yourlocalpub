'use client'

import AddToCart from "@/app/cart/components/add_to_cart"
import { useState, useEffect } from "react";

const getInventory = async (productId)=>{
    const response = await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?"+ new URLSearchParams({
        productId: productId,
    }));
    
    if (response.ok){
        const data  = await response.json()
        return data;
    }
}

export default function ItemDescription({publication, publication_key}){
    
    // get inventor on load
    const [inventory, setInventory] = useState({
        soldOut: false,
        itemsLeft: 0
    })
    
    useEffect((publication, publication_key)=>{
            console.log("updating inv.")
            // go update the inventory    
            
            const response = getInventory(publication_key).then((response)=>{
                const soldOut = (response.lockedInventory <= publication.stockQuantity ? false : true)
                const itemsLeft = publication.stockQuantity - response.lockedInventory;
                
                const updateInventory = {
                    soldOut: soldOut,
                    itemsLeft: itemsLeft,
                };
                
                setInventory(updateInventory);
            });    
    }, [])


    return(
        <div className="grid grid-cols-1 m-2 sm:m-6">
                <b>{publication.title}</b>
                
                <ul>
                    <li>{"Published: "+ publication.publicationYear}</li>
                    <li>{publication.detail}</li>
                </ul>
            
                <p className="mt-2 mb-4 w-inherit">{publication.info}</p>
                
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                            <div>
                                {`Edition of ${publication.stockQuantity} (${inventory.itemsLeft} copies left!)`}
                            </div>
                            <div>{"£"+publication.price}</div>
                    </div>
                    
                    
                    {inventory.soldOut && 
                    <div
                    className="h-6 w-auto p-4 bg-rose-100 text-stone-800 border-rose-400 border-2 rounded-full text-center align-middle  text-[.75] leading-[0rem] sm:text-[1.25rem] sm:leading-[0rem]"
                    > Sold out!</div>}

                    {!inventory.soldOut && 
                    <AddToCart
                        publication_key={publication_key} 
                    />}
                
                </div>

            </div>
    )
}