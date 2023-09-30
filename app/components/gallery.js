import Card from "@/app/components/card"

export default function Gallery({publications}){

    return(
        <div className='grid grid-cols-2 gap-4 xl:gap-10 items-center p-8 pt-4 xl:p-10'>
            {Object.keys(publications).map(publication_key => (
                <Card 
                    key={publication_key}
                    publication_key={publication_key}
                />
            ))}
        </div>
    )
}