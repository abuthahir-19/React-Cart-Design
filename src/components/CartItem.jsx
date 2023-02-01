import React from "react";
import Status from "./Status";
import Quantity from "./Quantity";
import DeleteIcon from '../icons/icon-delete.svg';

const CartItem = ({ id, image, head, title, oldPrice, discPrice, SKU, Brand, DeliveryStatus, statusIcon, bgColor, textColor, onDelete }) => {
    return (
        <div className=" w-full p-3 mb-4 box-border">
            <div className="flex justify-around">
                <div className="w-1/5 flex justify-center items-center ultra-xs:w-[30%]">
                    <div className="w-24 h-24 h mr-2 bg-slate-200 rounded-lg flex justify-center items-center">
                        <img src={image} alt="CartItemImage" />
                    </div>
                </div>
                <div className="flex justify-between flex-row items-center w-10/12 md:flex-col sm:flex-col xs:flex-col xxs:flex-col ultra-xs:flex-col ultra-xs:w-[70%]">
                    <div className="w-2/3 ml-4 md:w-10/12 md:m-0 sm:w-10/12 sm:m-0 xs:w-10/12 xs:m-0 xxs:w-10/12 xxs:m-0 ultra-xs:w-10/12 ultra-xs:m-0">
                        <p className="text-sm font-normal text-slate-400 mb-1 ultra-xs:text-xs">{head}</p>
                        <h2 className="text-lg font-bold mb-3 text-slate-700 ultra-xs:text-md">{title}</h2>
                        <div className="mb-4 flex md:flex-wrap ultra-xs:text-sm">
                            <span className="font-normal text-slate-400">SKU: <span className="font-bold text-slate-700">{SKU}</span> </span>
                            <span className="font-normal text-slate-400 ml-3 w-1/2 whitespace-nowrap overflow-hidden text-ellipsis">Brand: <span className="font-semibold text-slate-700 overflow-ellipsis">{Brand}</span></span>
                        </div>
                        <Status content={DeliveryStatus} icon={statusIcon} bgColor={bgColor} textColor={textColor} />
                    </div>
                    <div className="ml-9 flex flex-col justify-between md:flex-row md:items-center md:m-0 md:w-10/12 md:mt-7 sm:flex-row sm:items-center sm:m-0 sm:w-10/12 sm:mt-7  xs:flex-row xs:items-center xs:m-0 xs:w-10/12 xs:mt-7 xxs:flex-row xxs:items-center xxs:m-0 xxs:w-10/12 xxs:mt-7 ultra-xs:flex-row ultra-xs:items-center ultra-xs:m-0 ultra-xs:w-10/12 ultra-xs:mt-7">
                        <div className="flex">
                            <Quantity />
                        </div>
                        <div className="mt-12 flex justify-between items-center md:m-0 md:w-1/3 sm:m-0 sm:w-1/3 xs:m-0 xs:w-1/3 xxs:m-0 xxs:w-1/3 ultra-xs:m-0 ultra-xs:w-[45%]">
                            <div>
                                <p className="text-slate-400 ultra-xs:text-sm"><strike>{`$${oldPrice}`}</strike></p>
                                <h3 className="font-bold text-slate-700 ultra-xs:text-sm">{`$${discPrice}`}</h3>
                            </div>
                            <div className="cursor-pointer" onClick={() => onDelete(id)}>
                                <img src={DeleteIcon} alt="DeleteIcon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;