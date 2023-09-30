import AddToCart from "@/app/cart/components/add_to_cart"
import Card from "@/app/components/card"
import InfoGallery from "@/app/components/info_gallery"

import publications from "@/public/publication_list"
import ItemDescription from "../components/itemDescription"



const fs = require("fs")
const path = require("path")

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

function getImages(images_location){
    // look in the publication.images_location for all images
    const image_dir = path.join(process.cwd(), "/public"+images_location)
    
    const all_images = fs.readdirSync(image_dir)

    const image_paths = all_images.map(image=>(
        path.join(images_location, image)
    ))
    
    return image_paths
}