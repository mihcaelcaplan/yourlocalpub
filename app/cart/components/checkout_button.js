import publications from "@/public/publication_list"

export default function CheckoutButton({cart}){


    const enrichCart = () => {
        // add prices to cart
        let enrichedCart = {};
        enrichedCart.products = cart;

        Object.keys(enrichedCart.products).map(cart_item => {
            enrichedCart.products[cart_item].price = publications[cart_item].price
            enrichedCart.products[cart_item].shipping = publications[cart_item].shipping
        });

        // store checkout timestamp
        enrichedCart.checkout_time = Math.floor(Date.now() / 1000);

        console.log(enrichedCart)

        return enrichedCart
    }
    
    const handleCheckout = async () => {
        // add prices to cart
        let enrichedCart = enrichCart()
        console.log(JSON.stringify(enrichedCart))

        // call the lambda and save the result
        try {
            const response = await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/handleCheckoutV2", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(enrichedCart),
            });
        
            if (response.ok){
            
            const result = await response.json();
            console.log("Success:", result);
            
            // write to localstorage
            localStorage.setItem("checkout", JSON.stringify({
                checkoutId: result.checkoutId,
                shippingPrice: result.shippingPrice,
                checkoutPrice: result.checkoutPrice
            }));
            
            // navigate over to the checkout
            location.href = "/checkout";
            }
            else{
                alert("Please reload the page and try again :(");
            }
            
          
        } catch (error) {
            alert("Error:", error);
          }

    }

    return(
        <div>
            <div
            className="bg-pubbrickblue hover:bg-indigo-400 border-black border-2 text-center text-lg text-white pt-2 pb-2 pr-8 pl-8 drop-shadow-md "
            > 
                <div
                href="/checkout"
                onClick={()=>handleCheckout()}
                >
                    Checkout
                </div>
                
            </div>
        </div>
    )
}