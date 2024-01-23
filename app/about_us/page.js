'use client'
import Info from "../components/info";
import { BrickWall } from "../components/about_wall";
import { useRef, useEffect, useState} from "react";


export default function Home(){
    
    const infoRef = useRef();
    const [aboutUsStyle, setAboutUsStyle] = useState("fixed")

    useEffect(()=>{
        // get info height
        const infoHeight = infoRef.current.offsetHeight
        // get window height
        const windowHeight = window.innerHeight
        const calcAboutUsStyle = (infoHeight + 240 > windowHeight) ? "inline" : "fixed" 
        console.log(calcAboutUsStyle)
        setAboutUsStyle(calcAboutUsStyle);
        
        // console.log(aboutUsStyle)
    },[])

    
    return (
        <div
        className={"flex flex-col w-full"}
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