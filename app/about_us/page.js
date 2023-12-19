import Info from "../components/info";
import { Brick, Spacer } from "@/app/components/brick"
import { BrickWall } from "../components/about_wall";


export default function Home(){
    
    return (
        <div
        className="flex flex-col">
            <Info />

            <BrickWall 
            height={"5vh"}
            />
            
        </div>
    )
}