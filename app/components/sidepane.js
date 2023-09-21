import CartIcon from "@/app/cart/components/cart_icon"
import Nav from "./nav"

export default function SidePane(){
    return(
        <div className='flex flex-col text-white fixed top-0'>
       
       <Nav 
        nav_padding={"p-8"}
       />

        <div className='p-8 '>
            Your Local Pub is a independent publisher created by Brad Gilbert and Michael Caplan. The aim is to create high quality limited run publications for smaller artists and designers.
            <br />
            <br />
            The Books range from Fine Art to Photography
            <br />
            <br />
            
            Artists:
            <ul>
            <li>Nelson Diplexcito</li>
            <li>Jungwon Jay Hur</li>
            <li>Mataio Austin Dean</li>
            <li>Ula Taylor Reilly</li>
            <li>Kay Liang</li>
            <li>Curtis Rayment</li>
            </ul>
            
            <br />
            <br />
            Social Media:
            @YourLocalPub
        </div>
 </div>

    )
}

