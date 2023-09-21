'use client'

import { useContext } from "react";
import { InventoryContext } from "./inventoryContext";

const getInventory = async (productId)=>{
    const response = await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/checkInventory?"+ new URLSearchParams({
        productId: productId,
    }));
    
    if (response.ok){
        const data  = await response.json()
        return data;
    }
    
}

export default function InventoryGetter({productId}){
    // set up context
    const [inventory, setInventory] = useContext(InventoryContext);


    // only run if not in inventory already
    if (inventory[productId] != null) {
        let updateInventory = inventory;


        const response = getInventory(productId).then((response)=>{
            updateInventory[response.productId] = response.lockedInventory;
            setInventory(updateInventory);
        });    
    }
    
    return(null);
}