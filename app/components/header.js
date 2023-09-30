import Nav from "./nav"
import { useContext } from "react"
import { CartContext } from '@/app/components/cart_context'
import Image from "next/image"


export default function Header(){

    return(
        <div className="flex flex-row pt-2 md:pt-4 md:pb-2 pl-4 md:pl-8 pr-4 md:pr-8 ">
              
            <h1 className='animate-pulse'>
                <a href="/"
                className=""
                >
                    <Image
                        src={"/logo_upper.png"}
                        className=""
                        alt="Logo: Your local pub or publication"
                        priority={true}
                        height={100}
                        width={100}
                        sizes="100vw"
                        style={{
                            width: '85%',
                            height: 'auto',
                        }}

                    />
                </a>
            </h1>     
            <div className="flex md:hidden">
                <Nav />
            </div>
      </div>
    )
}