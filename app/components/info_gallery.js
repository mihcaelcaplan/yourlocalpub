'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { useSwipeable } from "react-swipeable"

export default function InfoGallery({publication, image_paths}){
    
    const [fullScreen, setFullscreen] = useState(false)
    const allImages = image_paths
    const [activeImage, setActiveImage] = useState(allImages[0])

    // swipe handle function
    const handleSwipe = (dir)=>{
        if(dir == "Left"){
            const nextImgIndex = (allImages.map(i=>i.large).indexOf(activeImage.large) + 1) % allImages.length
            setActiveImage(allImages[nextImgIndex])
        }
        else if(dir == "Right"){
            const nextImgIndex = (((allImages.map(i=>i.large).indexOf(activeImage.large) - 1) % allImages.length)+ allImages.length) % allImages.length
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
                    nextImgIndex = (allImages.map(i=>i.large).indexOf(activeImage.large) + 1) % allImages.length
                    setActiveImage(allImages[nextImgIndex])
                break;
                
                case "ArrowLeft":
                    nextImgIndex = (((allImages.map(i=>i.large).indexOf(activeImage.large) - 1) % allImages.length)+ allImages.length) % allImages.length
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
            const nextImgIndex = (allImages.map(i=>i.large).indexOf(activeImage.large) + 1) % allImages.length
            setActiveImage(allImages[nextImgIndex])
        }
        else if(e.target.id == "back"){
            const nextImgIndex = (((allImages.map(i=>i.large).indexOf(activeImage.large) - 1) % allImages.length)+ allImages.length) % allImages.length
            setActiveImage(allImages[nextImgIndex])
        }
    }

    "xl:max-w-3xl xl:m-auto"

    return(
        <div
        className="pb-6 sm:pl-4 sm:pr-4 max-w-[750px] m-auto flex flex-col items-center " 
        >
                <div id="bg" className={fullScreen ? "absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full bg-black mb-2 justify-center" : 
                                             "flex flex-col w-[100%] bg-white relative mb-2 justify-center"}
                >
                <Image 
                    {...handlers}
                    onClick={()=>setFullscreen(true)}
                    className={fullScreen ? "z-30" : "" }
                    priority={true}
                    src={activeImage.large}
                    alt={`Photo of book: filename ${activeImage.large}`}
                    placeholder={`data:${activeImage.small}`}
                    blurDataURL={activeImage.small}
                    quality={75}
                    height={75}
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
            className="flex flex-row md:h-[5rem] h-[3rem] overflow-scroll w-full justify-start overflow-hidden"
            >
                {allImages.map(bookImage=>(
                        <Image 
                        key={bookImage.small}
                        className = {`pr-2 ${bookImage.large === activeImage.large  ? "opacity-100" : 'opacity-50'}`}
                        onClick={()=> setActiveImage(bookImage)}
                        src={bookImage.large}
                        placeholder={`data:${bookImage.small}`}
                        // blurDataURL={bookImage.small}
                        alt={`$(publication.title) cover image`}
                        width={100}
                        height={75}
                        quality={1}
                        sizes="100vw"
                        // priority={true}
                        loading="lazy"
                        // fill
                        style={{
                            width: 'auto',
                            height: '100%',
                            // objectFit: 'contain'
                        }}
                        />
                ))}
            </div>
            
            {fullScreen && <div 
                id="bg"
                className="bg-black fixed top-0 left-0 h-screen w-screen z-10"
                onClick={(e)=>handleFullscreenClick(e)}
            />}

            {fullScreen && <div className="fixed top-6 right-6 w-4 h-4 xl:w-5 xl:h-5 text-[0.7rem] leading-[1.1rem] xl:text-[1rem] xl:leading-[1.3rem] rounded-full bg-gray-100 opacity-70 hover:bg-red-700  text-center z-50" 
                onClick={()=>{setFullscreen(false)}}
            >
            X
            </div>}
            
            {fullScreen && <div
            id="back"
            className="fixed z-40 top-0 left-0 h-full w-1/4"
            onClick={(e)=>handleFullscreenClick(e)}
            >
                {/* <div
                id="back"
                className=" relative top-1/2 -translate-y-1/2"
                >&lt;</div> */}
            </div>}
            
            {fullScreen && <div
            id="forward"
            className="fixed z-40 top-0 right-0 h-full w-1/4git "
            onClick={(e)=>handleFullscreenClick(e)}
            >
                {/* <div
                id="forward"
                className="relative top-1/2 -translate-y-1/2"
                >&gt;</div> */}
            </div>}
            
        </div>
    )
}