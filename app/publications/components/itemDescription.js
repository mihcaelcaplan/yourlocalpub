'use client'

import AddToCart from "@/app/cart/components/add_to_cart"
import { useState, useEffect } from "react";

const getInventory = async (productId)=>{
    const response = await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?"+ new URLSearchParams({
        productId: productId,
    }));
    
    if (response.ok){
        const data  = await response.json()
        console.log(data)
        return data;
    }
}

export default function ItemDescription({publication, publication_key}){
    
    // get inventor on load
    const [inventory, setInventory] = useState({
        soldOut: false,
        itemsLeft: 0
    })
    
    useEffect(()=>{
            console.log("updating inv.")
            // go update the inventory    
            
            const response = getInventory(publication_key).then((response)=>{
                const soldOut = (response.lockedInventory <= publication.stockQuantity ? false : true)
                const itemsLeft = response.lockedInventory;
                
                const updateInventory = {
                    soldOut: soldOut,
                    itemsLeft: itemsLeft,
                };
                
                setInventory(updateInventory);
            });    
    }, [])


    return(
        <div className="grid grid-cols-1 m-2 sm:m-6 uppercase font-medium leading-5">
                <b>{publication.title}</b>
                
                <ul>
                    <li
                    className=""
                    >{"Published in "+ publication.publicationYear}</li>
                    <li
                    className=""
                    >{publication.detail}</li>
                </ul>
            
                <p className="mt-2 mb-4 w-inherit ">{publication.info}</p>
                
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col text-sm md:">
                           {!inventory.soldOut && <div>
                                {`(${inventory.itemsLeft}/${publication.stockQuantity})`}
                            </div>}
                           
                           {inventory.soldOut && <a
                           className=" underline hover:text-pubblue"
                           href={`mailto:support@yourlocalpublication.com?subject=Print more copies of ${publication.title}&body=I want to buy one 😀`}
                           >
                                Print more!
                            </a>}
                            <div className="font-bold">{"£"+publication.price}</div>
                    </div>
                    
                    
                    {inventory.soldOut && 
                    <div
                    className="h-6 w-auto p-4  text-stone-800 border-pubred border-2 rounded-full text-center align-middle md:text-[1.25] leading-[0rem] text-[.75rem] whitespace-nowrap"
                    > Sold out!</div>}

                    {!inventory.soldOut && 
                    <AddToCart
                        publication_key={publication_key} 
                    />}
                
                </div>

            </div>
    )
}