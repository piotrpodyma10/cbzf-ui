import React, { useEffect, useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { toast } from 'react-toastify'
import {
  addNutrition,
  addProduct,
  getPendingProductNutrition,
} from '../../../../features/services/product/product.service'
import './ApproveProductModal.scss'

export const ApproveProductModal = ({ open, handleClose, product, fetchPendingProducts }) => {
  const [nutritions, setNutritions] = useState([])
  const { nazwaProdukt, kodEan, idProdukt, idDostawca } = product

  useEffect(() => {
    if (idProdukt) {
      getPendingProductNutrition(idProdukt).then((response) => {
        setNutritions(response.data)
      })
    }
  }, [product])

  const close = () => {
    handleClose()
    setNutritions([])
  }

  const isDisabled = nutritions.length > 0 ? false : true

  const approve = () => {
    if (nutritions.length > 0) {
      addProduct([product])
        .then((response) => {
          if (response.status === 200) {
            const allPreparedNutritions = nutritions.map((nutritionField, index) => ({
              idProdukt: nutritionField.nutritionPrimaryKey.idProdukt,
              idNutrient: nutritionField.nutritionPrimaryKey.idNutrient,
              ...nutritionField,
            }))
            addNutrition(allPreparedNutritions)
              .then((response) => {
                toast.success('Produkt został zatwierdzony')
                fetchPendingProducts()
                close()
                return
              })
              .catch((error) => {
                console.log('Error', error)
                toast.error('Pojawił się problem zatwierdzając produkt')
              })
          }
        })
        .catch((error) => {
          console.log('Error', error)
          toast.error('Pojawił się problem zatwierdzając produkt')
        })
    }
  }

  return (
    <CustomModal className='approve-product-modal' open={open} handleClose={close}>
      <div className='title'>Czy na pewno chcesz zatwierdzić ten produkt?</div>
      <div className='details'>Nazwa Produktu: {nazwaProdukt}</div>
      <div className='details'>Kod EAN: {kodEan}</div>
      <div className='details'>Dostawca ID: {idDostawca}</div>
      <CustomButton disabled={isDisabled} onCLick={approve} text={'Zatwierdz'} />
    </CustomModal>
  )
}
