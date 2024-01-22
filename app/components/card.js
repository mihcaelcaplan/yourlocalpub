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
          // const height = titleRef.current.offsetHeight
          // const lineHeight = +getComputedStyle(titleRef.current).lineHeight.slice(0,2)
          const textHeight = titleRef.current.getBoundingClientRect().height
          if(textHeight> 20.5){
            // console.log("i'm wrapping..")
            // titleRef.current.style["font-size"] = "1rem"
            titleRef.current.style["line-height"] = "1.25rem"
            // titleRef.current.style["letter-spacing"] = "-0.05em"
          }
          else{
            // titleRef.current.style["font-size"] = "1rem"
            titleRef.current.style["line-height"] = "2.25rem"


          }
        }
        window.addEventListener('resize', updateTitle);
        updateTitle();
        return () => window.removeEventListener('resize', updateTitle);
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
                <div className='flex flex-row text-lg active:bg-gray-200 border-black border-b-2 border-l-2 border-r-2'>
                    <div
                    // ref={titleRef}
                    className='p-3 leading-5 h-[60px]'
                    > <span ref={titleRef}>{publication.title}</span></div>
                    <div
                    className='ml-auto border-l-2 border-black p-3'
                    >{publication.price}</div>
                </div>
            </a>
        </div>
    )
  }