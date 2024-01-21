import Nav from "./nav"
import { useContext } from "react"
import { CartContext } from '@/app/components/cart_context'
import Image from "next/image"


export default function Header(){

    return(
        <div id="header" className="flex flex-col lg:flex-row pt-2 pl-4 pr-4 bg-pubmain sticky top-0 z-10">
              
            <div className='animate-pulse w-full'>
                <a href="/"
                className=""
                >
                    <Image
                        src={"/YourLocalPubLogo_Trimmed.png"}
                        className=""
                        alt="Logo: Your local pub or publication"
                        priority={true}
                        height={100}
                        width={100}
                        sizes="100vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}

                    />
                </a>
            </div>     
            <div className="flex lg:hidden">
                <Nav />
            </div>
      </div>
    )
}