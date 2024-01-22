'use client'
import Image from 'next/image'
import publications from "@/public/publication_list"
import { useEffect, useRef } from 'react'


export default function Card({publication_key}) {
    console.log(publications.publication_key)
    const publication = publications[publication_key]

    const titleRef = useRef();

    useEffect(() => {
        function updateTitle() {
          const height = titleRef.current.offsetHeight
          const lineHeight = +getComputedStyle(titleRef.current).lineHeight.slice(0,2)
          console.log(height, lineHeight)
          if(height> 3*lineHeight){
            titleRef.current.style["font-size"] = "0.8frem"
            titleRef.current.style["line-height"] = "1.2rem"
            // titleRef.current.style["letter-spacing"] = "-0.05em"
          }
          else{
            // titleRef.current.style["letter-spacing"] = "0em"

          }
        }
        window.addEventListener('resize', updateTitle);
        updateTitle();
        return () => window.removeEventListener('resize', updateSize);
      }, [titleRef.current]);
    


    return (
        <div className='flex flex-col bg-pubmain drop-shadow-sm h-full w-full'>
            <a href={publication.route}>
            <div className='flex flex-col bg-pubmain relative justify-center'>
                <Image 
                    className="border-2 border-black"
                    src={publication.coverImage}
                    alt={`$(publication.title) cover image`}
                    // fill
                    height={80}
                    width={80}
                    quality={30}
                    sizes="100vw"
                    style={{
                        // objectFit:"contain"
                        width: '100%',
                        height: '75%',
                    }}
                />
            </div>
                <div className='flex flex-row text-md md:text-base active:bg-gray-200 border-black border-b-2 border-l-2 border-r-2'>
                    <div f
                    ref={titleRef}
                    className='p-3 leading-5'
                    >{publication.title}</div>
                    <div
                    className='ml-auto border-l-2 border-black p-3'
                    >{publication.price}</div>
                </div>
            </a>
        </div>
    )
  }