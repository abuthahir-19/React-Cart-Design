import './App.css';
import deliveryIcon from './images/icons8-in-transit-48.png';
import discountIcon from './images/icons8-discount-50.png';
import Quantity from './components/Quantity';
// import Status from './components/Status';

function App() {
    return (
        <div className="App w-full h-full flex justify-center items-center mt-11">
            {/* <Status content={'Free Delivery'} icon={deliveryIcon} bgColor={'bg-green-100'} textColor={'text-green-600'} />
            <Status content={'Discount'} icon={discountIcon} bgColor={'bg-indigo-100'} textColor={'text-indigo-500'} /> */}

            <Quantity />
        </div>
    );
}

// #00FF7B - green
// #818CF8 - purple
export default App;
