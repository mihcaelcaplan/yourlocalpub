export const Brick = ({position, borderTB, borderRL, span})=>{
    const borderTBFormat = borderTB ? "border-t-black border-t border-b-black border-b" : ""
    const borderRLFormat = borderRL ? "border-l-black border-l border-r-black border-r" : ""
    const spanFormat = (span > 1) ? `col-span-${span}` : ""
    // const colStartFormat = `col-start-${position}`

    return(
        <div className={`bg-pubbrick ${borderTBFormat} ${borderRLFormat} ${spanFormat}`} />
    )
}

export const Spacer = ({position, borderTB, borderRL, span})=>{
    const borderTBFormat = borderTB ? "border-t-black border-t border-b-black border-b" : ""
    const borderRLFormat = borderRL ? "border-l-black border-l border-r-black border-r" : ""
    const spanFormat = (span > 1) ? `col-span-${span}` : ""

    return(
        <div className={` ${borderTBFormat} ${borderRLFormat} ${spanFormat}`} />
    )
}