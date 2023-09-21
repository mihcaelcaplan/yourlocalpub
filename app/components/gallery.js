import Card from "@/app/components/card"

export default function Gallery({publications}){
Object.keys(publications).map(key=>(
    console.log(publications.key)
))
// publications.keys
    return(
        <div className='grid grid-cols-2 gap-4 xl:gap-10 items-center p-8 xl:p-10'>
            {Object.keys(publications).map(publication_key => (
                <Card 
                    key={publication_key}
                    publication_key={publication_key}
                />
            ))}
        </div>
    )
}