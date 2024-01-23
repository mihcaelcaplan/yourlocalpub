'use client'
import Info from "../components/info";
import { BrickWall } from "../components/about_wall";
import { useRef, useEffect, useState} from "react";


export default function Home(){
    
    const infoRef = useRef();
    const [aboutUsStyle, setAboutUsStyle] = useState("fixed")

    useEffect(()=>{
        // get info height
        function setBricks(){
            const infoHeight = infoRef.current.offsetHeight;
            const infoBottom = infoRef.current.getBoundingClientRect().bottom;
            // get window height
            const windowHeight = window.innerHeight;
            const calcAboutUsStyle = (infoBottom + 240 > windowHeight) ? "inline" : "fixed" ;
            console.log(calcAboutUsStyle);
            setAboutUsStyle(calcAboutUsStyle);
        }

        function divert(){
            const pageWidth = window.innerWidth;
            console.log("diverting", pageWidth)
            if(pageWidth >= 1024){
                location.href="/"
            }
        }

        
        window.addEventListener('resize', setBricks);
        window.addEventListener('resize', divert);
        setBricks();
        
        // setBricks();

        return () => {
            window.removeEventListener('resize', setBricks);
            window.removeEventListener('resize', divert);
        }

    },[])

    
    return (
        <div
        className={"flex flex-col w-full inline lg:hidden"}
        >
            <Info 
                infoRef={infoRef}
            />
            
            <BrickWall 
            parent={"about_us"}
            style={aboutUsStyle}
            />
            
        </div>
    )
}