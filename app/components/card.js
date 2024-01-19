import Image from 'next/image'
import publications from "@/public/publication_list"


export default function Card({publication_key}) {
    console.log(publications.publication_key)
    const publication = publications[publication_key]
    return (
        <div className='flex flex-col bg-pubmain drop-shadow-sm h-full w-full'>
            <a href={publication.route}>
            <div className='flex flex-col h-[68vw] sm:h-[28vw] xl:h-[35vw] w-[100%] bg-black relative justify-center'>
                <Image 
                    className="border-2 border-black"
                    src={publication.coverImage}
                    alt={`$(publication.title) cover image`}
                    fill
                    quality={30}
                    sizes="100vw"
                    style={{
                        objectFit:"cover"
                        // width: 'auto',
                        // height: '90%',
                    }}
                />
            </div>
                <div className='flex flex-row text-md md:text-base active:bg-gray-200 border-black border-b-2 border-l-2 border-r-2'>
                    <span
                    className='p-3'
                    >{publication.title}</span>
                    <span
                    className='ml-auto border-l-2 border-black p-3'
                    >{publication.price}</span>
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