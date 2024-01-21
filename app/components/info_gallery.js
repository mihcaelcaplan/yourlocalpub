'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { useSwipeable } from "react-swipeable"

export default function InfoGallery({publication, image_paths}){
    
    const [fullScreen, setFullscreen] = useState(false)
    const [activeImage, setActiveImage] = useState(publication.coverImage)
    const allImages = image_paths
    const inactiveImages = image_paths.filter(element => element != activeImage)

    // swipe handle function
    const handleSwipe = (dir)=>{
        if(dir == "Left"){
            const nextImgIndex = (allImages.indexOf(activeImage) + 1) % allImages.length
            setActiveImage(allImages[nextImgIndex])
        }
        else if(dir == "Right"){
            const nextImgIndex = (((allImages.indexOf(activeImage) - 1) % allImages.length)+ allImages.length) % allImages.length
            setActiveImage(allImages[nextImgIndex])
        }
    }

    // handle key press
    const handleKeyPress = (e)=>{
        let nextImgIndex;
        
        switch (e.key) {
            case "Escape":
                    setFullscreen(false);
                break;
            
                case "ArrowRight":
                    nextImgIndex = (allImages.indexOf(activeImage) + 1) % allImages.length
                    setActiveImage(allImages[nextImgIndex])
                break;
                
                case "ArrowLeft":
                    nextImgIndex = (((allImages.indexOf(activeImage) - 1) % allImages.length)+ allImages.length) % allImages.length
                    setActiveImage(allImages[nextImgIndex])
                break;
        
            default:
                break;
        }
    }

    useEffect(()=>{
        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
      
    }, [activeImage]);
    
    // set up swipe handlers
    const config = {
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    }
    const handlers = useSwipeable({
        // onSwiped: (eventData) => console.log("User Swiped!", eventData),
        onSwiped: (e) => handleSwipe(e.dir),
        ...config,
      });

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

    "xl:max-w-3xl xl:m-auto"

    return(
        <div
        className="pb-6 sm:pl-4 sm:pr-4 max-w-[750px] m-auto flex flex-col items-center " 
        >
                <div className={fullScreen ? "absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[100%] md:w-[90vw] h-[80vw] md:h-[100%] bg-black mb-2 justify-center" : 
                                             "flex flex-col w-[100%] bg-black relative mb-2 justify-center"}
                >
                <Image 
                    {...handlers}
                    className={fullScreen ? "z-20" : "" }
                    priority={true}
                    src={activeImage}
                    alt={`${publication.title} cover`}
                    quality={90}
                    // sizes="100vw"
                    // fill
                    height={100}
                    width={100}
                    sizes="100vw"
                    style={{
                        // objectFit:"contain"
                        width: '100%',
                        height: '75%',
                    }}
                />

                </div>
                
          
            <div
            className="flex flex-row overflow-scroll md:h-[5rem] h-[3rem] w-full justify-start"
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
                <div className="mr-2 mt-2 right-10 text-[0.7rem] leading-[1rem] rounded-full bg-gray-200 opacity-70 hover:bg-red-800 w-4 h-4 text-center ml-auto" 
                    onClick={()=>{setFullscreen(false)}}
                >
                X
                </div>
                
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
                className="fixed z-30 right-0 opacity-60 h-full text-white text-[5rem] p-4 "
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