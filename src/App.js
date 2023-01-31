import { useState } from 'react';
import './App.css';
import CartComponent from './components/CartComponent';
import OrderSummary from './components/OrderSummary';
import { items } from './api/CartItemData';

function App() {
    const [itemsSet, SetItemsSet] = useState (items);

    const onDelete = (id) => {
        SetItemsSet (items => items.filter (item => parseInt (item.id) !== parseInt (id)))
    };

    return (
        <div className="App w-full flex justify-center">
            <CartComponent items={itemsSet} onDelete={onDelete} />
            {/* <OrderSummary /> */}
        </div>
    );
}

// #00FF7B - green
// #818CF8 - purple
export default App;
