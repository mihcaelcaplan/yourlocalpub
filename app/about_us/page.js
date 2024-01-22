'use client'
import Info from "../components/info";
import { BrickWall } from "../components/about_wall";
import { useRef, useEffect} from "react";


export default function Home(){
    
    const infoRef = useRef();
    const aboutUsStyle = useRef()

    useEffect(()=>{
        // get info height
        const infoHeight = infoRef.current.offsetHeight
        // get window height
        const windowHeight = window.innerHeight

        aboutUsStyle.current = (infoHeight > windowHeight) ? "inline" : "fixed" 
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
            style={aboutUsStyle.current}
            />
            
        </div>
    )
}