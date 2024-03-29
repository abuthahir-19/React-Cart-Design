import MoogImg from '../images/moog-minitaur.png';
import ChaseImg from '../images/chase-bliss.png';
import KompleteImg from '../images/Komplete-Kontrol.png';
import ValveHead from '../images/guitar.png';
import deliveryIcon from '../images/icons8-in-transit-48.png';
import discIcon from '../images/icons8-ratio-26.png';

const items = [
    {
        id: '0',
        image: MoogImg,
        heading : 'Synthesiser Modules'.toUpperCase(),
        title : 'MOOG Minitaur',
        Sku : '476415',
        brand : 'Moog',
        status : 'Free shipping',
        oldPrice : '999.00',
        discPrice : '949.00',
        statusIcon : deliveryIcon,
        bgColor : 'bg-green-100',
        textColor : 'text-green-600'
    },
    {
        id : '1',
        image: ChaseImg,
        heading : 'Guitar Effects'.toUpperCase(),
        title : 'Chase Bliss Audio CXM 1978',
        Sku : '476415',
        brand : 'Chase Bliss',
        status : 'Free shipping',
        oldPrice : '1500.00',
        discPrice : '1399.00',
        statusIcon : deliveryIcon,
        bgColor : 'bg-green-100',
        textColor : 'text-green-600'
    },
    {
        id : '2',
        image : KompleteImg,
        heading : 'Guitar Effects'.toUpperCase(),
        title : 'Native Instruments Komplete Kontrol S88 MK2',
        Sku : '476415',
        brand : 'Native Instruments Komplete Kontrol',
        status : 'Discount',
        oldPrice : '1899.00',
        discPrice : '1699.00',
        statusIcon : discIcon,
        bgColor : 'bg-indigo-100',
        textColor : 'text-indigo-600'
    },
    {
        id : '3',
        image : ValveHead,
        heading : 'Guitar Heads'.toUpperCase(),
        title : 'Orange Dual Terror Guitar Valve Head',
        Sku : '476415',
        brand : 'Orange',
        status : 'Discount',
        oldPrice : '1699.00',
        discPrice : '1329.00',
        statusIcon : discIcon,
        bgColor: 'bg-indigo-100',
        textColor : 'text-indigo-600'
    }
];

export { items }