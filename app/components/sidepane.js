import CartIcon from "@/app/cart/components/cart_icon"
import Nav from "./nav"

export default function SidePane(){
    return(
        <div className='flex flex-col text-white fixed top-0'>
       
       <Nav 
        nav_padding={"p-8"}
       />

        <div className='p-8 '>
            Your Local Pub is a independent publisher created by Brad Gilbert and Michael Caplan. The project started with the aim is to create high quality limited run publications for smaller artists and designers. We aim to release a new artists work monthly.            
            <br />
            <br />
            The Books range from Fine Art to Photography
            <br />
            <br />
            
            Currently Featured:
            <ul>
            <li>Nelson Diplexcito</li>
            <li>Brad Gilbert</li>
            </ul>
            <br />
            
            Upcoming Features:
            <ul>
            <li>Jungwon Jay Hur</li>
            <li>Mataio Austin Dean</li>
            <li>Ula Taylor Reilly</li>
            <li>Kay Liang</li>
            <li>Curtis Rayment</li>
            </ul>
            
            <br />
            If you would like to propose a project concept please get in touch via our instagram account.
            <br />
            <br />
            Social Media: 
            <br />
            <a
            href="https://www.instagram.com/yourlocalpublication"
            className="hover:text-slate-600"
            >
            @yourlocalpublication
            </a>
        </div>
 </div>

    )
}

