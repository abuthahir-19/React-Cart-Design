import { useState } from 'react';
import './App.css';
import CartComponent from './components/CartComponent';
import OrderSummary from './components/OrderSummary';
import { items } from './api/CartItemData';

function App() {
    const [itemsSet, SetItemsSet] = useState (items);

    const onDelete = (id) => {
        console.log (`Clicked delete button on the item id ${id}`);
        SetItemsSet (items => items.filter (item => parseInt (item.id) !== parseInt (id)))
    };

    return (
        <div className="App w-3/4 m-6 mx-auto flex justify-between">
            <CartComponent items={itemsSet} onDelete={onDelete} />
            <OrderSummary />
        </div>
    );
}

// #00FF7B - green
// #818CF8 - purple
export default App;
