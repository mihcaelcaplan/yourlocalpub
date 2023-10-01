import CartItem from "@/app/cart/components/cart_item"
import ShippingItem from "./shipping_item"

export default function Basket({cart, shippingPrice}){

    return(
        <div
            className="grid grid-cols-1 gap-2"
            >
            {Object.keys(cart).map(item_key => (
                    <CartItem
                        key={item_key}
                        item_key={item_key}
                        checkout={true}
                    />
                ))}
            <ShippingItem
                price={shippingPrice.current}
            />
            </div>
    )
}