import React, { useState } from "react";

const Quantity = () => {
    const [count, setCount] = useState (1);

    return (
        <div className="flex border-2 rounded-md">
            <button className="px-4 py-2 border-r-2" onClick={() => count > 0 && setCount (prev => prev - 1)}>-</button>
            <span className="px-4 py-2">{ count }</span>
            <button className="px-4 py-2 border-l-2" onClick={() => setCount (prev => prev + 1)}>+</button>
        </div>
    )
}

export default Quantity;