import React from "react";

const Price = () => {
    return (
        <div className="mt-5">
            <div className="flex items-center justify-between mb-2">
                <p className="font-normal text-slate-400">Weight</p>
                <p className="font-normal text-slate-700">$80.00</p>
            </div>
            <div className="flex items-center justify-between mb-2">
                <p className="font-normal text-slate-400">Item (s)</p>
                <p className="font-normal text-slate-700">1 x $20.00</p>
            </div>
            <div className="flex items-center justify-between mb-2">
                <p className="font-normal text-slate-400">Fees</p>
                <p className="font-normal text-slate-700">$20.00</p>
            </div>
            <div className="flex items-center justify-between mb-2">
                <p className="font-semibold text-xl text-slate-800">Total</p>
                <p className="font-semibold text-xl text-slate-800">$120.00</p>
            </div>
        </div>
    )
}

export default Price;