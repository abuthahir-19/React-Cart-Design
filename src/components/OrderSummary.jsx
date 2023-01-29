import React from "react";
import Button from "./Button";
import Item from "./Item";

const OrderSummary = () => {
    return (
        <div className="p-8 ml-3 rounded-lg shadow-xl shadow-gray-400 w-1/3">
            <div className="">
                <h1 className="font-semibold text-xl text-slate-700">Order Summary</h1>
            </div>
            <p className=" font-medium text-slate-500 text-md mt-6">Items</p>
            <Item />
            <Button />
        </div>
    );
}

export default OrderSummary;