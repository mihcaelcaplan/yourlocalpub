'use client'

import { APP_CLIENT_INTERNALS } from "next/dist/shared/lib/constants"
import Image from "next/image"
import { useState } from "react"

export default function InfoGallery({publication, image_paths}){
    
    const [fullScreen, setFullscreen] = useState(false)
    const [activeImage, setActiveImage] = useState(publication.coverImage)
    const allImages = image_paths
    const inactiveImages = image_paths.filter(element => element != activeImage)

    // console.log(inactiveImages)

    const handleFullscreenClick = (e)=>{
        if(e.target.id == "bg"){
            setFullscreen(false)
        }
        else if(e.target.id == "forward"){
            const nextImgIndex = (allImages.indexOf(activeImage) + 1) % allImages.length
            setActiveImage(allImages[nextImgIndex])
        }
        else if(e.target.id == "back"){
            const nextImgIndex = (((allImages.indexOf(activeImage) - 1) % allImages.length)+ allImages.length) % allImages.length
            setActiveImage(allImages[nextImgIndex])
        }
    }

    return(
        <div
        className="pb-6 sm:pl-10 sm:pr-10 flex flex-col items-center" 
        >
            <Image 
                className={fullScreen ? "fixed z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" : "pb-4" }
                priority={true}
                src={activeImage}
                alt={`$(publication.title) cover image`} 
                width={100}
                height={75}
                quality={90}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
                onClick={()=>{
                    setFullscreen(true);
                }}
            />

          
            <div
            className="flex flex-row overflow-scroll md:h-[5rem] h-[3rem]"
            >
            {allImages.map(bookImage=>(
                <Image 
                key={bookImage}
                className = {bookImage === activeImage  ? "pr-2 opacity-100" : 'pr-2 opacity-50'}
                onClick={()=> setActiveImage(bookImage)}
                src={bookImage}
                alt={`$(publication.title) cover image`}
                width={100}
                height={100}
                quality={25}
                sizes="100vw"
                style={{
                    width: 'auto',
                    height: '100%',
                }}
                />
            ))}
            </div>
            
            {fullScreen && <div 
                id="bg"
                className="bg-black fixed top-0 left-0 h-screen w-screen z-10"
                onClick={(e)=>handleFullscreenClick(e)}
            >
                <div
                id="back"
                className="fixed z-30 left-0  opacity-60 h-full text-white text-[5rem] p-4"
                onClick={(e)=>handleFullscreenClick(e)}
                >
                    <div
                    id="back"
                    className=" relative top-1/2 -translate-y-1/2"
                    >&lt;</div>
                </div>
                
                <div
                id="forward"
                className="fixed z-30 right-0 opacity-60 h-full text-white text-[5rem] p-4 shadow-2xl shadow-rose-700"
                onClick={(e)=>handleFullscreenClick(e)}
                >
                    <div
                    id="forward"
                    className="relative top-1/2 -translate-y-1/2"
                    >&gt;</div>
                </div>

            </div>}
            
        </div>
    )
}