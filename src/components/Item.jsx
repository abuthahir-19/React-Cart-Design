import React from "react";

const Item = () => {
    return (
        <div className="flex justify-between items-center mt-7">
            <div className="w-11/12">
                <h2 className="font-semibold text-lg text-slate-700">Midi Keyboard</h2>
                <p className="font-normal text-sm text-slate-400">35L x 11W x 65H - 5KG - $250</p>
            </div>
            <div>
                <h1 className="font-semibold text-lg text-slate-700">$45</h1>
            </div>
        </div>
    );
}

export default Item;