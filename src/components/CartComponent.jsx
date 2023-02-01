import React from "react";
import Cart from "./Cart";

const CartComponent = ({ items, onDelete }) => {
    const link = "#"
    return (
        <div className="rounded-lg shadow-[1px_1px_10px_#888888] min-h-[350px] w-2/4 h-auto lg:w-2/3">
            <div className="p-4">
                <div className="flex justify-between w-11/12 mx-auto">
                    <h4 className="text-xl font-bold">Cart</h4>
                    <a href={link} className="text-blue-500 font-semibold">View all</a>
                </div>
            </div>
            {items.length ? <Cart items={items} onDelete={onDelete} /> :
            <EmptyCart />}
        </div>
    );
}

const EmptyCart = () => {
    return (
        <div className="flex justify-center items-center w-full h-auto">
            <p className="text-xl font-medium text-slate-700">Your cart is empty</p>
        </div>
    )
}

export default CartComponent;