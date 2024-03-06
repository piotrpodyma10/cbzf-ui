import React from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import './ApproveProductModal.scss'
import { toast } from 'react-toastify'
import { approveProduct } from '../../../../features/services/product/product.service'

export const ApproveProductModal = ({ open, handleClose, product }) => {
  const { nazwaProdukt, kodEan } = product

  const approve = () => {
    approveProduct()
      .then((response) => {
        if (response.status) {
          toast.success('Produkt został zatwierdzony')
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
