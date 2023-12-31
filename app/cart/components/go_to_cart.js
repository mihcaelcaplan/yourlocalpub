import { Brick, Spacer } from "@/app/components/brick"
export default function GoToCart({publication_key, isHidden, setHidden}){

    return (
        <div 
            className={isHidden+" flex flex-col fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-2/3 md:h-1/2 w-4/6 bg-slate-100 z-10 shadow-2xl border-black border-2"}
        >
            <div>
            <div className="absolute top-0 bg-stone-200 z-10 w-full ml-auto border-b-black border-b-2">
                <div className="text-[1rem] leading-[1.rem] bg-red-500 hover:bg-red-800 w-6 h-6 text-center ml-auto border-l-black border-l-2" 
                    onClick={()=>{setHidden("hidden")}}
                >
                X
                </div>
            </div>
            
                <div className="absolute w-full h-full">
                    <BrickWall />
                </div>
                
                <div className="absolute top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <div className="text-center m-auto pl-4 pr-4 text-xl md:text-[1.4rem] md:leading-8 bg-white border-2 border-black w-auto">
                        You&apos;re a right good pub-goer.
                        <br/>
                        Well on ya, mate!
                        <br/>
                    </div>

                    {/* <div className="grid grid-rows-2 md:grid-cols-2 mt-auto items-center p-6 text-lg sm:text-xl  md:text-[1.25rem] text-center">
                        <a className=" bg-pubyellow border-pubblue hover:bg-amber-200 border-2 rounded-full mb-4 md:mb-0 md:mr-4 mr-0"
                            href="/"
                        >
                            Continue Shopping
                        </a>
                        <a className=" bg-pubblue border-pubyellow hover:bg-sky-200 border-2 rounded-full md:ml-4 ml-0"
                            href="/cart"
                        >
                            Go To Cart
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}


const BrickWall = ()=>{
    const brickHeight = "h-1/6"

    return(
        <div className="h-full">
            <div className={`grid grid-rows-1 grid-cols-brick1 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick2 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick3 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick4 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <a href="/" className="flex bg-green-600 text-white justify-center border border-black"><span  className="text-[1.2vh] md:text-[1.5vw] self-center font-semibold">Keep Shopping</span></a>
                <Brick  borderTB={true} borderRL={true}/>
                <a href="/cart" className="flex bg-yellow-400 text-white justify-center border border-black"><span  className="text-[1.2vh] md:text-[1.5vw] self-center font-semibold">Go to Cart</span></a>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick5 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick2 ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Brick borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
                <Brick  borderTB={true} borderRL={true}/>
            </div>

        </div>
    )

}