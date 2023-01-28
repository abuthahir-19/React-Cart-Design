import React from "react";
import Cart from "./Cart";

const CartComponent = () => {
    const link = "#"
    return (
        <div className="rounded-xl shadow-2xl shadow-gray-400">
            <div className="flex justify-between">
                <h4 className="text-xl ml-6 font-bold">Cart</h4>
                <a href={link} className="mr-3 text-blue-500 font-semibold">View all</a>
            </div>
            <Cart />
        </div>
    );
}

export default CartComponent;