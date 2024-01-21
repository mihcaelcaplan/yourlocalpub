import Image from 'next/image'
import publications from "@/public/publication_list"


export default function Card({publication_key}) {
    console.log(publications.publication_key)
    const publication = publications[publication_key]
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
                    <div
                    className='p-3 leading-5'
                    >{publication.title}</div>
                    <div
                    className='ml-auto border-l-2 border-black p-3'
                    >{publication.price}</div>
                </div>

                {/* <div className='flex flex-col text-sm md:text-base p-2 active:bg-gray-200'>
                            <div
                            className='font-medium'
                            >{publication.title}</div>
                            <div 
                            className=''
                            >{"Published in "+ publication.publicationYear}</div>
                            <div 
                            className='hidden sm:block'
                            >{publication.detail}</div>
                            <div 
                            className='hidden sm:block'
                            >{"Edition of "+publication.stockQuantity}</div>
                            <div className='italic mt-auto'>
                                <p>{"£"+publication.price}</p>
                            </div>
                        
                </div> */}
            </a>
        </div>
    )
  }