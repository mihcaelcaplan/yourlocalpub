import {Brick, Spacer} from "@/app/components/brick.js"

export const BrickWall = ({height, parent})=>{
    let brickHeight;
    switch(parent){
        case "sidepane":
            brickHeight =  "h-[3vw]"
            break;
        case "about_us":
            brickHeight =  "h-[6vw]"
            break;
        default:
            brickHeight =  "h-[3vw]"
            break;
    }

    return (
        <div
        className="mt-auto"
        >
            <div className={`grid grid-rows-1 grid-cols-brick1 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Brick borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick2 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Brick borderTB={true} borderRL={true}/>
            </div>
            
            <div className={`grid grid-rows-1 grid-cols-brick3 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Spacer />
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            
            <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <div className="flex bg-green-600 text-white justify-center border border-black"><span className="text-[1.2vw] self-center font-semibold"></span></div>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick5 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <div className="flex bg-yellow-400 text-black justify-center border border-black"><a 
                className="text-[1.5vw] lg:text-[1.2vw] self-center font-semibold"
                href="mailto:contact@yourlocalpublication.com"
                >Contact</a></div>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <div className="flex bg-indigo-700 text-white justify-center border border-black"><span className="text-[1.2vw] self-center font-semibold"></span></div>
                <Brick  borderTB={true} borderRL={true}/>
            </div>

    </div>
    )
}