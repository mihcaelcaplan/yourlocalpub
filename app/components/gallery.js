import Card from "@/app/components/card"

export default function Gallery({publications}){

    return(
        <div className='grid grid-cols-1 sm:grid-cols-1 gap-4 xl:gap-10 p-4 md:p-2 md:pl-4 md:pr-4 items-start'>
            {Object.keys(publications).map(publication_key => (
                <Card 
                    key={publication_key}
                    publication_key={publication_key}
                />
            ))}
        </div>
    )
}