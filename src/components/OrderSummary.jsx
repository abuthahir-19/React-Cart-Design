import React from "react";
import Button from "./Button";
import Item from "./Item";
import Address from "./Address";
import Price from "./Price";
import PlusIcon from '../icons/plus-icon.svg';

const OrderSummary = () => {
    return (
        <div className="p-8 ml-3 rounded-lg shadow-[1px_1px_10px_#888888] w-1/3">
            <div className="">
                <h1 className="font-semibold text-xl text-slate-700">Order Summary</h1>
            </div>
            <p className=" font-medium text-slate-500 text-md mt-6">Items</p>
            <hr className=" w-full mt-4" />
            <Item />
            <Button content={'Add Parcel'} iconImg={PlusIcon} />
            <hr className=" w-full mt-4" />
            <Address />
            <hr className="w-full mt-6"/>
            <Price />
            <div className="flex justify-between items-center mt-6">
                <Button content={'Cancel'} iconImg={null} bgColor={'bg-slate-100'} textColor={'text-slate-700'} border={'border-slate-200 border-2'} />
                <Button content={'Confirm'} iconImg={null} bgColor={'bg-blue-600'} textColor={'text-white'} border={'border-none'} />
            </div>
        </div>
    );
}

export default OrderSummary;