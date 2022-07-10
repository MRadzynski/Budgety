import FoodIcon from './assets/icons/food.png';
import BillsIcon from './assets/icons/bills.png';
import HealthIcon from './assets/icons/health.png';
import FashionIcon from './assets/icons/fashion.png';
import HouseIcon from './assets/icons/house.png';
import FamilyIcon from './assets/icons/family.png';
import GasIcon from './assets/icons/gas.png';
import OtherIcon from './assets/icons/other.png';

const CATEGORIES_DATA = {
  Food: {
    id: 1,
    title: 'Food',
    amount: 3987.78,
    path: '/expenses/food',
    image: FoodIcon,
    bgColor: '#CDB4DB',
  },
  Bills: {
    id: 2,
    title: 'Bills',
    amount: 132443.23,
    path: '/expenses/bills',
    image: BillsIcon,
    bgColor: '#FFC8DD',
  },
  Health: {
    id: 3,
    title: 'Health',
    amount: 12343.43,
    path: '/expenses/health',
    image: HealthIcon,
    bgColor: '#BDE0FE',
  },
  Fashion: {
    id: 4,
    title: 'Fashion',
    amount: 9877.54,
    path: '/expenses/fashion',
    image: FashionIcon,
    bgColor: '#A0C4FF',
  },
  House: {
    id: 5,
    title: 'House',
    amount: 643.42,
    path: '/expenses/house',
    image: HouseIcon,
    bgColor: '#C07EED',
  },
  Family: {
    id: 6,
    title: 'Family',
    amount: 534.92,
    path: '/expenses/family',
    image: FamilyIcon,
    bgColor: '#8783E0',
  },
  Gas: {
    id: 7,
    title: 'Gas',
    amount: 23.53,
    path: '/expenses/gas',
    image: GasIcon,
    bgColor: '#A983F7',
  },
  Other: {
    id: 8,
    title: 'Other',
    amount: 8963.12,
    path: '/expenses/other',
    image: OtherIcon,
    bgColor: '#839CF7',
  },
};

export default CATEGORIES_DATA;
