export default function GoToCart({publication_key, isHidden, setHidden}){

    return (
        <div 
            className={isHidden+" fixed top-1/3 md:top-[25%] left-[17%] flex flex-col h-2/6 md:h-1/2 w-4/6 bg-slate-100 z-10 shadow-2xl rounded-lg"}
        >
            <div className="bg-stone-200 p-1 rounded-t-lg">
                <div className="text-[0.7rem] rounded-full bg-red-500 hover:bg-red-800 w-4 h-4 text-center ml-auto" 
                    onClick={()=>{setHidden("hidden")}}
                >
                X
                </div>
            </div>
            <div className="text-center m-auto">
                You&apos;re a right good pub-goer.
                <br/>
                 Well on ya, mate!
                <br/>
            </div>

            <div className="grid grid-cols-2 mt-auto mb-auto text-center p-8">
                <a className="mr-4 bg-pubyellow border-pubblue hover:bg-amber-200 border-2 rounded-full"
                    href="/"
                >
                    Continue Shopping
                </a>
                <a className=" ml-4 bg-pubblue border-pubyellow hover:bg-sky-200 border-2 rounded-full"
                    href="/cart"
                >
                    Go To Cart
                </a>
            </div>
        </div>
    )
}