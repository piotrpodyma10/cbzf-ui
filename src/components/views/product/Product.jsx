import React from 'react'
import CustomTabs from '../../common/customTabs/CustomTabs'
import Card from '../../common/card/Card'
import { ProductPanel } from './productPanel/ProductPanel'
import { PendingProducts } from './pendingProducts/PendingProducts'
import './Product.scss'
import { useSelector } from 'react-redux'
import { auth } from '../../../features/redux/auth/authSlice'

function Product() {
  const { isProvider } = useSelector(auth)

  let tabs = [
    { label: 'Panel', content: <ProductPanel /> },
    { label: 'Oczekujące', content: <PendingProducts /> },
  ]

  tabs = isProvider ? tabs.filter((tab) => tab.label !== 'RAPORT') : tabs

  return (
    <Card className='product'>
      <CustomTabs tabs={tabs} />
    </Card>
  )
}

export default Product
