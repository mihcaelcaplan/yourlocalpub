export const Brick = ({position, borderT, borderB, borderR ,borderL, span})=>{
    const borderTFormat = borderT ? "border-t border-t-2 border-t-black " :""
    const borderBFormat = borderB ? "border-b border-b-2 border-b-black" : ""
    const borderRFormat = borderR ? "border-r border-r-2 border-r-black" : ""
    const borderLFormat = borderL ? "border-l border-l-2 border-l-black" : ""
    const spanFormat = (span > 1) ? `col-span-${span}` : ""
    // const colStartFormat = `col-start-${position}`

    return(
        <div className={`bg-pubbrick ${borderTFormat} ${borderBFormat} ${borderRFormat} ${borderLFormat} ${spanFormat}`} />
    )
}

export const Spacer = ()=>{


    return(
        <div className={""} />
    )
}