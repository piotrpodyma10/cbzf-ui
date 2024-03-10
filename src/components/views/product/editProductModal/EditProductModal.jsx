import React from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import './EditProductModal.scss'

export const EditProductModal = ({ open, handleClose, product }) => {
  return (
    <CustomModal open={open} handleClose={handleClose}>
      EditProduct
    </CustomModal>
  )
}
