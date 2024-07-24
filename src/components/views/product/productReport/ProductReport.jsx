import React from 'react'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { getProductReport } from '../../../../features/services/product/product.service'

export const ProductReport = () => {
  const getReport = () => {
    try {
      getProductReport()
    } catch (e) {
      console.log('Error', e)
    }
  }

  return (
    <div className='product-report'>
      <CustomButton text={'Ściągnij Raport'} onCLick={getReport} />{' '}
    </div>
  )
}
