import React from "react";
import Status from "./Status";
import Quantity from "./Quantity";

const CartItem = ({ image, head, title, oldPrice, discPrice, SKU, Brand, DeliveryStatus, statusIcon, bgColor, textColor }) => {
    return (
        <div className="p-3 mb-4">
            <div className="flex justify-around">
                <div className="w-28 h-28 mr-2">
                    <img src={image} alt="CartItemImage" />
                </div>
                <div className="w-2/3 ml-4">
                    <p className="text-sm font-normal text-slate-400 mb-1">{head}</p>
                    <h2 className="text-lg font-bold mb-3 text-slate-700">{title}</h2>
                    <div className="mb-4 flex md:flex-wrap">
                        <span className="font-normal text-slate-400">SKU: <span className="font-bold text-slate-700">{SKU}</span> </span>
                        <span className="font-normal text-slate-400 ml-3">Brand: <span className="font-semibold text-slate-700 overflow-ellipsis">{Brand}</span></span>
                    </div>
                    <Status content={DeliveryStatus} icon={statusIcon} bgColor={bgColor} textColor={textColor} />
                </div>
                <div className="ml-9 flex flex-col justify-between">
                    <Quantity />
                    <div className=" mt-12">
                        <p className="text-slate-400"><strike>{`$${oldPrice}`}</strike></p>
                        <h3 className="font-bold text-slate-700">{`$${discPrice}`}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;