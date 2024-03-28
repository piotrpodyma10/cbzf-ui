import TuneIcon from '@mui/icons-material/Tune'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ApartmentIcon from '@mui/icons-material/Apartment'
import InventoryIcon from '@mui/icons-material/Inventory'
import StarRateIcon from '@mui/icons-material/StarRate'
import Consumer from '../components/views/general/Consumer'
import Provider from '../components/views/provider/Provider'
import Product from '../components/views/product/Product'
import Rate from '../components/views/rate/Rate'
import Settings from '../components/views/settings/Settings'
import { ADMIN, EXPERT, SUPER_EXPERT, allRoles } from '../utils/userUtils'
import { ProductDetails } from '../components/views/productDetails/ProductDetails'
import { ProductNutritions } from '../components/views/productNutritions/ProductNutritions'

export const routes = [
  {
    title: 'Konsument',
    path: '/',
    icon: <AccountCircleIcon className='route-icon bigger-icon' />,
    component: <Consumer />,
    index: 0,
    access: 'ALL',
  },
  {
    path: '/:id',
    component: <ProductDetails />,
    access: 'ALL',
    index: 0,
  },
  {
    title: 'Producent',
    path: '/provider',
    icon: <ApartmentIcon className='route-icon bigger-icon' />,
    component: <Provider />,
    index: 1,
    access: [EXPERT, SUPER_EXPERT, ADMIN],
  },
  {
    title: 'Produkt',
    path: '/product',
    icon: <InventoryIcon className='route-icon' />,
    index: 2,
    component: <Product />,
    access: allRoles,
  },
  {
    path: '/product/:id',
    component: <ProductDetails />,
    index: 2,
    access: allRoles,
  },
  {
    path: '/nutritions/:id',
    component: <ProductNutritions />,
    index: 2,
    access: 'ALL',
  },
  {
    title: 'Ocena',
    path: '/rate',
    icon: <StarRateIcon className='route-icon bigger-icon' />,
    component: <Rate />,
    index: 3,
    access: [EXPERT, SUPER_EXPERT, ADMIN],
  },
  {
    title: 'Ustawienia',
    path: '/settings',
    icon: <TuneIcon className='route-icon' />,
    component: <Settings />,
    index: 4,
    access: allRoles,
  },
]
