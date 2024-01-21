import AddToCart from "@/app/cart/components/add_to_cart"
import Card from "@/app/components/card"
import InfoGallery from "@/app/components/info_gallery"

import publications from "@/public/publication_list"
import ItemDescription from "../components/itemDescription"
import getImages from "../components/getImages"


// data structure
const publication_key = "orpheus_st"
const publication = publications[publication_key]

// default function
export default function Home(){
    const image_paths = getImages(publication.images_location)

    return(
        <div className="">
            
            <InfoGallery
                publication={publication}
                image_paths={image_paths}
            />
            <ItemDescription 
                publication={publication}
                publication_key= {publication_key}
            />
        </div>
    )
}