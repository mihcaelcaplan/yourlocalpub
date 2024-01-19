import Info from "../components/info";
import { Brick, Spacer } from "@/app/components/brick"
import { BrickWall } from "../components/about_wall";


export default function Home(){
    
    return (
        <div
        className="flex-auto">
            <Info />
            <div
            className="fixed bottom-0 w-full">
                <BrickWall 
                height={"4vw"}
                parent={"about_us"}
                />
            </div>
            
        </div>
    )
}