// imports
import Gallery from "@/app/components/gallery"

// data structures
import publications from "@/public/publication_list"

// default function
export default function Home() {
  return (
    <Gallery
        publications={publications} />
  )
}
