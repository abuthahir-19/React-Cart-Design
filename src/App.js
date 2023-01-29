import './App.css';
import CartComponent from './components/CartComponent';
import OrderSummary from './components/OrderSummary';

function App() {
    return (
        <div className="App w-3/4 m-6 mx-auto flex justify-between">
            <CartComponent />
            <OrderSummary />
        </div>
    );
}

// #00FF7B - green
// #818CF8 - purple
export default App;
