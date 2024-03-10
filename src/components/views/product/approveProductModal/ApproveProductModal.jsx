import React from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { toast } from 'react-toastify'
import { addProduct } from '../../../../features/services/product/product.service'
import './ApproveProductModal.scss'

export const ApproveProductModal = ({ open, handleClose, product, fetchPendingProducts }) => {
  const { nazwaProdukt, kodEan } = product

  const approve = () => {
    addProduct([product])
      .then((response) => {
        if (response.status === 200) {
          toast.success('Produkt został zatwierdzony')
          fetchPendingProducts()
          handleClose()
        }
      })
      .catch((error) => {
        console.log('Error', error)
        toast.error('Pojawił się problem zatwierdzając produkt')
      })
  }

  return (
    <CustomModal className='approve-product-modal' open={open} handleClose={handleClose}>
      <div className='title'>Czy na pewno chcesz zatwierdzić ten produkt?</div>
      <div className='details'>Nazwa Produktu: {nazwaProdukt}</div>
      <div className='details'>Kod EAN: {kodEan}</div>
      <CustomButton onCLick={approve} text={'Zatwierdz'} />
    </CustomModal>
  )
}
