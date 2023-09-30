import Nav from "./nav"
import { useContext } from "react"
import { CartContext } from '@/app/components/cart_context'
import Image from "next/image"


export default function Header(){

    return(
        <div className="flex flex-row pt-4 pb-2 pl-8 pr-8 justify-between">
              
            <h1 className='animate-pulse'>
                <a href="/">
                    <Image
                        src={"/logo_upper.png"}
                        priority={true}
                        height={100}
                        width={100}
                        sizes="100vw"
                        style={{
                            width: '65%',
                            height: 'auto',
                        }}

                    />
                </a>
            </h1>     
            <div className="flex items-end md:hidden text-sm md:text-md ml-auto">
                <Nav />
            </div>
      </div>
    )
}