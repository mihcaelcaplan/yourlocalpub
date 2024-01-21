import {Brick, Spacer} from "@/app/components/brick.js"

export const BrickWall = ({parent})=>{
    let brickHeight;
    switch(parent){
        case "sidepane":
            brickHeight =  "h-[40px]"
            break;
        case "about_us":
            brickHeight =  "h-[40px]"
            break;
        default:
            brickHeight =  "h-[40px]"
            break;
    }

    return (
        <div
        className="mt-auto fixed bottom-0 w-full pt-2"
        >   
            {/* <div className="bg-pubmain h-2 w-full"></div> */}
            <div className={`grid grid-rows-1 grid-cols-brick1 ${brickHeight}`}>
                <Brick borderT={true} borderB={true} borderR={true} borderL={false}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Brick borderT={true} borderB={true} borderR={false} borderL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick2 ${brickHeight}`}>
            <Brick borderT={false} borderB={false} borderR={true} borderL={false}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Brick borderT={false} borderB={false} borderR={false} borderL={true}/>
            </div>
            
            <div className={`grid grid-rows-1 grid-cols-brick3 ${brickHeight}`}>
                <Brick borderT={true} borderB={false} borderR={true} borderL={false}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Brick borderT={true} borderB={false} borderR={false} borderL={true}/>
            </div>
            
            <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
                <Brick borderT={true} borderB={true} borderR={true} borderL={false}/>
                <div className="flex bg-pubbrickgreen text-white justify-center border-t-2 border-t-black border-b-2 border-b-black"><span className="text-[1.2vw] self-center font-semibold"></span></div>
                <Brick borderT={true} borderB={true} borderR={false} borderL={true}/>
                <Brick borderT={true} borderB={true} borderR={false} borderL={true}/>
                <Brick borderT={true} borderB={true} borderR={false} borderL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick5 ${brickHeight}`}>
                <Brick borderT={false} borderB={false} borderR={true} borderL={false}/>
                <div className="flex bg-pubbrickyellow text-white justify-center tracking-wider"><a 
                className="text-l self-center font-semibold"
                href="mailto:contact@yourlocalpublication.com"
                >Contact</a></div>
                <Brick borderT={false} borderB={false} borderR={false} borderL={true}/>
                <Brick borderT={false} borderB={false} borderR={false} borderL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
                <Brick borderT={true} borderB={true} borderR={false} borderL={false}/>
                <Brick borderT={true} borderB={true} borderR={true} borderL={true}/>
                <Brick borderT={true} borderB={true} borderR={true} borderL={false}/>
                <div className="flex bg-pubbrickblue text-white justify-center border-t-2 border-t-black border-b-2 border-b-black"><span className="text-[1.2vw] self-center font-semibold"></span></div>
                <Brick borderT={true} borderB={true} borderR={false} borderL={true}/>
            </div>

    </div>
    )
}