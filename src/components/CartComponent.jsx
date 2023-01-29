import React from "react";
import Cart from "./Cart";

const CartComponent = () => {
    const link = "#"
    return (
        <div className="rounded-xl shadow-2xl shadow-gray-400 w-2/3">
            <div className="flex justify-between w-11/12 mx-auto">
                <h4 className="text-xl font-bold">Cart</h4>
                <a href={link} className="text-blue-500 font-semibold">View all</a>
            </div>
            <Cart />
        </div>
    );
}

export default CartComponent;