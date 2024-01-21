
const fs = require("fs")
const path = require("path")

export default function getImages(images_location){
    // look in the publication.images_location for all images
    const image_dir = path.join(process.cwd(), "/public"+images_location)
    
    const all_images = fs.readdirSync(image_dir)

    // filter out .* files (aka .DS_Store)
    const filtered_images = all_images.filter((value) => value.startsWith(".") == false )
    

    const image_paths = filtered_images.map(image=>(
        path.join(images_location, image)
    ))
    
    return image_paths
}