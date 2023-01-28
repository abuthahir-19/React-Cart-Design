import React from "react";
import Status from "./Status";
import Quantity from "./Quantity";

const CartItem = ({ image, head, title, oldPrice, discPrice, SKU, Brand, DeliveryStatus, statusIcon, bgColor, textColor }) => {
    return (
        <div className="p-3">
            <div className="flex justify-around">
                <div className="w-28 h-28">
                    <img src={image} alt="CartItemImage" />
                </div>
                <div className="w-4/5">
                    <p>{head}</p>
                    <h2>{title}</h2>
                    <div>
                        <span>SKU: {SKU}</span>
                        <span>Brand:{Brand}</span>
                    </div>
                    <Status content={DeliveryStatus} icon={statusIcon} bgColor={bgColor} textColor={textColor} />
                </div>
                <div>
                    <Quantity />
                    <p>{oldPrice}</p>
                    <h3>{discPrice}</h3>
                </div>
            </div>
        </div>
    );
}

export default CartItem;