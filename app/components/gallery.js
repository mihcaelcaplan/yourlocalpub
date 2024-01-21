import Card from "@/app/components/card"

export default function Gallery({publications}){

    return(
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 items-start'>
            {Object.keys(publications).map(publication_key => (
                <Card 
                    key={publication_key}
                    publication_key={publication_key}
                />
            ))}
        </div>
    )
}