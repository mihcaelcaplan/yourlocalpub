export default function GoToCart({publication_key, isHidden, setHidden}){

    return (
        <div 
            // className={isHidden+" fixed top-[20%] left-[17%] flex flex-col h-2/6 md:h-1/2 w-4/6 bg-slate-100 z-10 shadow-2xl rounded-lg"}
            className={isHidden+" flex flex-col fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-2/3 md:h-1/2 w-4/6 bg-slate-100 z-10 shadow-2xl rounded-lg"}
        >
            <div className="bg-stone-200 p-1 rounded-t-lg">
                <div className="text-[0.7rem] leading-[0.9rem] rounded-full bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto" 
                    onClick={()=>{setHidden("hidden")}}
                >
                X
                </div>
            </div>
            <div className="text-center m-auto pl-4 pr-4 text-xl md:text-[1.4rem] md:leading-8">
                You&apos;re a right good pub-goer.
                <br/>
                 Well on ya, mate!
                <br/>
            </div>

            <div className="grid grid-rows-2 md:grid-cols-2 mt-auto items-center p-6 text-lg sm:text-xl  md:text-[1.25rem] text-center">
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
            </div>
        </div>
    )
}