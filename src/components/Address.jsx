import React from "react";

const Address = () => {
    return (
        <div>
            <div className="mt-5">
                <h3 className="font-medium text-slate-700 text-lg">From:</h3>
                <ul className="text-slate-400">
                    <li>Damien Smith</li>
                    <li>27 Bank Street,</li>
                    <li>Winsted 6089, Australia</li>
                </ul>
            </div>
            <div className="mt-5">
                <h3 className="font-medium text-slate-700 text-lg">To:</h3>
                <ul className="text-slate-400">
                    <li>Googleplex</li>
                    <li>23/23a 124 King Street,</li>
                    <li>Sydney 2000, Australia</li>
                </ul>
            </div>
        </div>
    );
}

export default Address;