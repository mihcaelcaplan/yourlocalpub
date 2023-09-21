'use client'

import Image from "next/image"
import { useState } from "react"

export default function InfoGallery({publication, image_paths}){
    
    const [activeImage, setActiveImage] = useState(publication.coverImage)
    const allImages = image_paths
    const inactiveImages = image_paths.filter(element => element != activeImage)

    return(
        <div
        className="pb-6 sm:pl-10 sm:pr-10 grid grid-cols-4 grid-rows-5 sm:grid-cols-5 sm:grid-rows-4 gap-4" 
        >
            <Image 
                className="col-span-4 row-span-4"
                src={activeImage}
                alt={`$(publication.title) cover image`}
                width={100}
                height={100}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            
            {allImages.map(bookImage=>(
                <Image 
                key={bookImage}
                className = {bookImage === activeImage  ? "opacity-100" : 'opacity-50'}
                onClick={()=> setActiveImage(bookImage)}
                src={bookImage}
                alt={`$(publication.title) cover image`}
                width={100}
                height={100}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                />
            ))}
            
            
        </div>
    )
}