'use client'
import Script from "next/script";
import { useRef } from "react"
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../components/cart_context";
import Basket from "./components/basket";
import DetailsForm from "./components/details_form";
import { useForm, SubmitHandler } from "react-hook-form"


export default function Home(){

    const [cart, setCart] = useContext(CartContext)

    // create form {register, handleSubmit}
    const {register, handleSubmit, watch, formState: {errors}, control} = useForm({mode: "onTouched"});
    watch(errors);
    

     // set up card obj
    var card = useRef();
    var checkoutId = useRef();
    var shippingDetails = useRef();
    var contactDetails = useRef();
    var shippingPrice = useRef();
    var checkoutPrice = useRef();

    // get info onload
    useEffect(() => {
        const checkout = JSON.parse(localStorage.getItem('checkout'))
       checkoutId.current = checkout.checkoutId
       shippingPrice.current = checkout.shippingPrice
       checkoutPrice.current = checkout.checkoutPrice

      }, []);

      useEffect(() => {
        if (Object.keys(cart).length > 0){
            localStorage.setItem("checkoutCart", JSON.stringify(cart))
        }
      }, [cart]);

    // handler runs on payment widget load
    const handlePaymentWidgetLoad = ()=> {
        card.current = SumUpCard.mount({
            id:               "sumup-card",
            checkoutId:       checkoutId.current,
            onResponse:       (e) => handleOrder(e),
            showAmount: true,
            showSubmitButton: false
        });
    }

    // handler runs on submit button press
    const handleOrderSubmit = (data) => {
        console.log(data)
        shippingDetails.current = {
            fullName: data.fullName,
            address1: data.address1,
            address2: data.address2,
            postcode: data.postCode,
            price: shippingPrice.current

        }
        contactDetails.current = {
            email: data.email,
            phone: data.phone
        }

        console.log("shipping", shippingDetails.current)
        console.log("contact" ,contactDetails.current)
        const submit = card.current.submit()
    }

    // order handler
    const handleOrder = async(status, response) => {
        console.log(status,response)
        if(status=="success"){
            // create payload
            const payload = {
                checkoutId: checkoutId.current,
                shippingDetails: shippingDetails.current,
                contactDetails: contactDetails.current,
            }
            console.log(payload)
            
            try {
                const response = await fetch("https://p3p22yr8sg.execute-api.eu-west-2.amazonaws.com/default/handleOrder", {
                method: "POST", // or 'PUT'
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
                });
                
                if (response.ok){
                    const result = await response.json();
                    console.log("Success:", result);
                    
                    // clear cart
                    setCart({})

                    // link over to the checkout complete
                    location.href = "/checkout/complete"
                }
                else{
                    throw await response.json();
                }
            } catch (error) {
                alert("Something went wrong with your payment. Please try again:)");
                console.log("Payment failure", error)
            }
        }
        else{
            if(status=="error"){
                alert("Something went wrong with your payment. Please try again :)");
            }
            console.log(status)
            console.log(response)
        }
    };

    return(
        <div className="flex flex-col pl-6 pr-6">
            {/* load sumup payment widget */}
            
            <Script
            src="https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js"
            onLoad={()=>handlePaymentWidgetLoad()}
            />
            
            <h1 className=" text-2xl font-semibold pb-4">Checkout</h1>

            <div
            className="bg-pubmain drop-shadow-sm">
            
            <h2 className="text-lg pb-2 font-semibold">Order</h2>
            
            <div className="">
                <Basket 
                    cart={cart}
                    shippingPrice={shippingPrice}
                    
                />
            </div>
            

            <DetailsForm
            form = {[register, control, errors]}
            /> 


            <h2 className="text-lg pb-2 pt-4 font-semibold">Payment</h2>
            <div 
            id="sumup-card"
            className="pt-2 mb-4 bg-white border-2 border-black" />

            <div
            onClick={handleSubmit(handleOrderSubmit)}
            className="bg-indigo-600 hover:bg-stone-200 border-2 border-black text-center text-lg text-white pt-2 pb-2 pr-8 pl-8 drop-shadow-sm "
            >
                Pay £{checkoutPrice.current}
            </div>
            </div>
            
        </div>
    )
}

