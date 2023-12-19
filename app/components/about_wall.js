import {Brick, Spacer} from "@/app/components/brick.js"

export const BrickWall = ({height})=>{
    const brickHeight = `h-[${height}]`

    return (
        <div
        className="mt-auto justify-end"
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
                <div className="flex bg-green-600 text-white justify-center border border-black"><span className="self-center font-semibold">ARTISTS</span></div>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick5 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <div className="flex bg-yellow-400 text-white justify-center border border-black"><span className="self-center font-semibold">CONTACT</span></div>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <div className="flex bg-indigo-700 text-white justify-center border border-black"><span className="self-center font-semibold">NEWS</span></div>
                <Brick  borderTB={true} borderRL={true}/>
            </div>

    </div>
    )
}