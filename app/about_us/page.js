'use client'
import Info from "../components/info";
import { Brick, Spacer } from "@/app/components/brick"
import { BrickWall } from "../components/about_wall";
import { useRef, useEffect } from "react";


export default function Home(){

    const headerHeight = useRef;

    useEffect(()=>{
        const currentHeaderHeight = document.getElementById("header").offsetHeight
        headerHeight.current = currentHeaderHeight
        console.log(headerHeight.current)
    }, [])

    
    return (
        <div
        className={"flex flex-col w-full"}
        >
            <Info />
            
            <BrickWall 
            parent={"about_us"}
            />
            
        </div>
    )
}