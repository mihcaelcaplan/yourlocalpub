'use client'

import Image from "next/image"

export default function ShippingItem({price}){

    return(
        <div className="bg-white border-2 border-black grid grid-cols-4 p-4 gap-2 justify-center text-center">
            <div
            className="text-[3rem]"
            >📦</div>
            <div className="flex flex-col justify-center border-r-2 pl-2">
                <p className=" text-sm text-stone-700 pb-2">Title</p>
                <p>Shipping</p>
            </div>
            <div className="flex flex-col justify-center border-r-2 pl-2">
                <p className=" text-sm text-stone-700 pb-2">Quantity</p>
                <div>1</div>
            </div>
            <div className="flex flex-col justify-center pl-2">
                <p className=" text-sm text-stone-700 pb-2">Price</p>
                <p>£{price}</p>
            </div>
        </div>
    )
}

