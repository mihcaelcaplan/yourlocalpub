export default function Info({infoRef}){
    return(
        <div 
        ref={infoRef}
        className=' flex-1 pl-12 pr-12 lg:pt-1 xl:pt-4 font-medium text-lg leading-5 pb-4 lg:pb-[260px] overflow-scroll'>

        Your Local Pub is a independent small press created by Brad Gilbert and Michael Caplan. We want to be a resource for small artists and designers who don’t always have good options to start publishing collections of their work. We aim to release a new artists work monthly.         <br />
        <br />

        Currently Featured:
        <ul>
        <li>Nelson Diplexcito</li>
        <li>Brad Gilbert</li>
        <li>Gabriel Gayle</li>
        </ul>
        <br/>
        
        Upcoming Features:
        <ul>
        <li>Jungwon Jay Hur</li>
        <li>Michael Caplan</li>
        <li>Mataio Austin Dean</li>
        <li>Kay Liang</li>
        <li>Ula Taylor Reilly</li>
        <li>Michelle Lim</li>
        <li>Liam Hart</li>
        <li>Jos Nyreen</li>
        </ul>
        
        <br />
        If you would like to propose a project, please get in touch!
        <br />
        <br />
        {/* Social Media:  */}
        {/* <br /> */}
        {/* <a
        href="https://www.instagram.com/yourlocalpublication"
        className="hover:text-slate-600"
        >
        @yourlocalpublication
        </a> */}
        </div>
    )
}