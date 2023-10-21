import CartIcon from "@/app/cart/components/cart_icon"
import Nav from "./nav"
import Info from "./info"

export default function SidePane(){
    return(
        <div className='flex flex-col text-black border-l-2 border-black fixed top-0 leading-5 h-full'>
       
       <Nav 
        nav_padding={"p-4"}
       />
        
        <Info />

        <BrickWall/>
       
     </div>

    )
}

const BrickWall = ({})=>{
    const brickHeight = "h-[3vw]"

    return (
        <div
        className=" mt-auto justify-end"
        >
            <div className={`grid grid-rows-1 grid-cols-brick1  ${brickHeight}`}>
                <Brick borderTB={true} borderRL={true}/>
                <Spacer />
                <Spacer />
                <Spacer />
                <Brick borderTB={true} borderRL={true}/>
            </div>
            <div className={`grid grid-rows-1 grid-cols-brick2  ${brickHeight}`}>
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

const Brick = ({position, borderTB, borderRL, span})=>{
    const borderTBFormat = borderTB ? "border-t-black border-t border-b-black border-b" : ""
    const borderRLFormat = borderRL ? "border-l-black border-l border-r-black border-r" : ""
    const spanFormat = (span > 1) ? `col-span-${span}` : ""
    // const colStartFormat = `col-start-${position}`

    return(
        <div className={`bg-orange-800 ${borderTBFormat} ${borderRLFormat} ${spanFormat}`} />
    )
}

const Spacer = ({position, borderTB, borderRL, span})=>{
    const borderTBFormat = borderTB ? "border-t-black border-t border-b-black border-b" : ""
    const borderRLFormat = borderRL ? "border-l-black border-l border-r-black border-r" : ""
    const spanFormat = (span > 1) ? `col-span-${span}` : ""

    return(
        <div className={` ${borderTBFormat} ${borderRLFormat} ${spanFormat}`} />
    )
}