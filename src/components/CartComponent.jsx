import React from "react";
import Cart from "./Cart";

const CartComponent = () => {
    const link = "#"
    return (
        <div className="rounded-xl shadow-[1px_1px_10px_#888888] w-[70%]">
            <div className="p-4">
                <div className="flex justify-between w-11/12 mx-auto">
                    <h4 className="text-xl font-bold">Cart</h4>
                    <a href={link} className="text-blue-500 font-semibold">View all</a>
                </div>
            </div>
            <Cart />
        </div>
    );
}

export default CartComponent;