import Nav from "./nav"
import { useContext } from "react"
import { CartContext } from '@/app/components/cart_context'
import Image from "next/image"


export default function Header(){

    return(
        <div className="flex flex-col md:flex-row pt-2 md:pt-2 md:pb-2 pl- md:pl-4 pr-2 md:pr-8 ">
              
            <div className='animate-pulse w-full pb-2 pl-2'>
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
            <div className="flex md:hidden">
                <Nav />
            </div>
      </div>
    )
}