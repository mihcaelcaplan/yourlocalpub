'use client'
import Script from "next/script";
import { useRef } from "react"
import { useEffect } from "react";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import CartItem from "../cart/components/cart_item";
import { CartContext } from "../components/cart_context";


export default function Home(){

    const [cart, setCart] = useContext(CartContext)

    // create form {register, handleSubmit}
    const {register, handleSubmit, watch, formState: {errors}} = useForm({mode: "onTouched"});
    watch(errors);
    

     // set up card obj
    var card = useRef();
    var checkoutId = useRef();
    var shippingDetails = useRef();
    var contactDetails = useRef();

    // get the checkoutId
    useEffect(() => {
       checkoutId.current = localStorage.getItem('checkoutId')
      }, []);

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

        }
        contactDetails.current = {
            email: data.email,
            phone: data.phone
        }

        console.log("shipping", shippingDetails.current)
        console.log("contact" ,contactDetails.current)
        card.current.submit()
    }

    // order handler
    const handleOrder = async(status, response) => {
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
                }
                else{
                    throw error = await response.json()
                }
            } catch (error) {
                alert("Error:", error);
            }
        }
        else{
            console.log(status)
            console.log(response)
        }
    };

    return(
        <div className="flex flex-col p-4">
            {/* load sumup payment widget */}
            
            <Script
            src="https://gateway.sumup.com/gateway/ecom/card/v2/sdk.js"
            onLoad={()=>handlePaymentWidgetLoad()}
            />
            
            <h1 className=" text-xl pb-6">Checkout</h1>

            <div
            className="bg-slate-200 p-2 rounded-md drop-shadow-md">
            
            <h2 className="text-lg pb-2 font-semibold">Order</h2>
            {Object.keys(cart).map(item_key => (
                    <CartItem
                        key={item_key}
                        item_key={item_key}
                        checkout={true}
                    />
                ))}
            

            <DetailsForm
            form = {[register, errors]}
            /> 


            <h2 className="text-lg pb-2 pt-4 font-semibold">Payment</h2>
            <div 
            id="sumup-card"
            className="pt-2 pb-4" />

            <div
            onClick={handleSubmit(handleOrderSubmit)}
            className="bg-stone-100 hover:bg-stone-200 border-2 border-sky-200 rounded-md text-center text-lg text-stone-600 pt-2 pb-2 pr-8 pl-8 drop-shadow-md "
            >
                Submit
            </div>
            </div>
            
        </div>
    )
}

const DetailsForm = ({form}) => {

    const [register, errors]  = form;
    console.log(errors)

    const formBorderStyle = {
        error:"md:col-span-2 border-red-500 border-1", 
        noError: "md:col-span-2"
    }

    return(
        <div>
        <form>
            <h2 className="text-lg pb-2 pt-4 font-semibold">Contact Info</h2>
            
            <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-2"
            > 
                <label>Email Address*</label>
                <input {...register("email", {required:"Email required"})}
                className={"md:col-span-2 rounded-md pl-2" + (errors.email ? " border-red-500 border-2" : "")}
                />
                <label>Phone Number*</label>
                <input {...register("phone", {required:true})}
                className={"md:col-span-2 rounded-md pl-2" + (errors.phone ? " border-red-500 border-2" : "")}
                />
            </div>
            
            <h2 className="text-lg pb-2 pt-4 font-semibold">Shipping Address</h2>
            <div
            className="grid grid-cols-1 md:grid-cols-3 gap-2"
            >
                <label>Name*</label>
                <input {...register("fullName", {required:true})}
                className={"md:col-span-2 rounded-md pl-2" + (errors.fullName ? " border-red-500 border-2" : "")}
                />
                <label>Address Line 1*</label>
                <input {...register("address1", {required:true})}
                className={"md:col-span-2 rounded-md pl-2" + (errors.address1 ? " border-red-500 border-2" : "")}
                />
                <label>Address Line 2*</label>
                <input {...register("address2")}
                className={"md:col-span-2 rounded-md pl-2" + (errors.address2 ? " border-red-500 border-2" : "")}
                />
                <label>Post Code*</label>
                <input {...register("postCode", {required:true})}
                className={"md:col-span-2 rounded-md pl-2" + (errors.postCode ? " border-red-500 border-2" : "")}
                />
            </div>
        </form>
        </div>
    )
}