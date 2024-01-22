'use client'

import AddToCart from "@/app/cart/components/add_to_cart"
import { useState, useEffect } from "react";
import { getInventory } from "./getInventory";

export default function ItemDescription({publication, publication_key}){
    
    // get inventor on load
    const [inventory, setInventory] = useState({
        soldOut: false,
        lockedInventory: 0
    })
    
    useEffect(()=>{
            console.log("updating inv.")
            // go update the inventory    
            
            const response = getInventory(publication_key).then((response)=>{
                const soldOut = (response.lockedInventory < publication.stockQuantity ? false : true)
                const lockedInventory = response.lockedInventory;
                
                const updateInventory = {
                    soldOut: soldOut,
                    lockedInventory: lockedInventory
                };
                
                setInventory(updateInventory);
            });    
    }, [])


    return(
        <div className="grid grid-cols-1 mr-2 ml-2 sm:ml-4 sm:mr-4 font-bold leading-5">
                <b>{publication.title}</b>
                
                <ul>
                    <li
                    className=""
                    >{"Published in "+ publication.publicationYear}</li>
                    <li
                    className=""
                    >{publication.detail}</li>
                </ul>
            
                <div className="mt-2 mb-4 w-inherit ">{publication.info}</div>
                
                <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col md:">
                           {!inventory.soldOut && <div>
                                {`(${inventory.lockedInventory}/${publication.stockQuantity})`}
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
                    className="h-6 w-auto p-4 bg-pubbrickblue font-semibold text-white border-black border-2 text-center align-middle leading-[0rem] text-[0.75rem]  sm:text-[1rem]  md:text-[1.25rem] whitespace-nowrap"
                    > Sold out!</div>}

                    {!inventory.soldOut && 
                    <AddToCart
                        publication_key={publication_key} 
                    />}
                
                </div>

            </div>
    )
}