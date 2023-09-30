import Image from 'next/image'
import publications from "@/public/publication_list"


export default function Card({publication_key}) {
    console.log(publications.publication_key)
    const publication = publications[publication_key]
    return (
        <div className='flex flex-col bg-white rounded-xl drop-shadow-md h-full w-full'>
            <a href={publication.route}>
                <Image 
                    className="rounded-t-xl"
                    src={publication.coverImage}
                    alt={`$(publication.title) cover image`}
                    width={100}
                    height={100}
                    quality={30}
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
                <div className='flex flex-col text-sm md:text-base p-2 active:bg-gray-200'>
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
                        
                </div>
            </a>
        </div>
    )
  }