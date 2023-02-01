import React, { useState } from "react";

const Quantity = () => {
    const [count, setCount] = useState (1);

    return (
        <div className="border-2 rounded-md sm:flex">
            <button className="px-4 py-2 border-r-2 xxs:px-2 xxs:py-1 ultra-xs:px-2 ultra-xs:py-1" onClick={() => count > 0 && setCount (prev => prev - 1)}>-</button>
            <span className="px-4 py-2">{ count }</span>
            <button className="px-4 py-2 border-l-2 xxs:px-2 xxs:py-1 ultra-xs:px-2 ultra-xs:py-1" onClick={() => setCount (prev => prev + 1)}>+</button>
        </div>
    )
}

export default Quantity;