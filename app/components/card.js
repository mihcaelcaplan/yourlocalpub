import Image from 'next/image'
import publications from "@/public/publication_list"


export default function Card({publication_key}) {
    console.log(publications.publication_key)
    const publication = publications[publication_key]
    return (
        <div className='bg-white w-full h-auto m-auto rounded-lg drop-shadow-md'>
            <Image 
                className=""
                src={publication.coverImage}
                alt={`$(publication.title) cover image`}
                width={100}
                height={100}
                sizes="100vw"
                style={{
                    width: '100%',
                    height: 'auto',
                }}
            />
            <div className='text-sm md:text-base p-2 active:bg-gray-200'>
                <a href={publication.route}>
                    <p>{publication.title}</p>
                    <ul>
                        <li>{"Published: "+ publication.publicationYear}</li>
                        <li>{publication.detail}</li>
                        <li>{"Edition of: "+publication.stockQuantity}</li>
                        <li>{"£"+publication.price}</li>
                    </ul>
                </a>
            </div>

        </div>
    )
  }