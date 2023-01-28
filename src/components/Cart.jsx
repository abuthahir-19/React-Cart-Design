import React from "react";
import CartItem from "./CartItem";
import { items } from "../api/CartItemData";

const Cart = () => {
    return (
        <div className="w-full">
            {items.map (item => (
                <CartItem 
                    image={item.image}
                    head={item.heading} 
                    title={item.title} 
                    oldPrice={item.oldPrice} 
                    discPrice={item.discPrice} 
                    SKU={item.Sku} 
                    Brand={item.brand} 
                    DeliveryStatus={item.status}
                    statusIcon={item.statusIcon}
                    bgColor={item.bgColor}
                    textColor={item.textColor}
                />
            ))}
        </div>
    );
}

export default Cart;