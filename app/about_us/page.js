import Info from "../components/info";
import { Brick, Spacer } from "@/app/components/brick"
import { BrickWall } from "../components/about_wall";


export default function Home(){
    
    return (
        <div
        className="flex flex-col">
            <Info />
            <div
            className="pt-10">
                <BrickWall 
                parent={"about_us"}
                />
            </div>
            
        </div>
    )
}