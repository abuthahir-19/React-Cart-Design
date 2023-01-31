import React from "react";
import CartItem from "./CartItem";

const Cart = ({ items, onDelete }) => {
    return (
        <div className="w-full">
            {items.map (item => (
                <CartItem 
                    id={item.id}
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
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default Cart;