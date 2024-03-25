import React, { useEffect, useState } from 'react'
import DataTable from '../../../common/dataTable/DataTable'
import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import { getPendingProducts } from '../../../../features/services/product/product.service'
import { AddProductModal } from '../addProductModal/AddProductModal'
import { EditProductModal } from '../editProductModal/EditProductModal'
import { ApproveProductModal } from '../approveProductModal/ApproveProductModal'
import { auth } from '../../../../features/redux/auth/authSlice'
import { useSelector } from 'react-redux'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { pendingProducts, pendingProductsActions } from '../../../../utils/dataUtils'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import './PendingProducts.scss'

export const PendingProducts = () => {
  const { isExpert, isSuperExpert, isAdmin, user, isProvider } = useSelector(auth)
  const { supplier } = user
  const { isApproved, id } = supplier
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [open, setOpen] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openApprove, setOpenApprove] = useState(false)
  const isApprovedProvider = isProvider && isApproved

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleOpenApprove = (product) => {
    setOpenApprove(true)
    setProduct(product)
  }

  const handleCloseApprove = () => {
    setOpenApprove(false)
    setProduct({})
  }

  const handleOpenEdit = (product) => {
    setOpenEdit(true)
    setProduct(product)
  }

  const handleCloseEdit = () => {
    setOpenEdit(false)
    setProduct({})
  }

  const editAccess = isExpert || isSuperExpert || isAdmin
  const approveAccess = isSuperExpert || isAdmin

  const fetchPendingProducts = () => {
    const providerId = isProvider ? id : ''
    const isApproved = isProvider ? '' : isExpert ? false : isSuperExpert ? true : ''
    getPendingProducts(providerId, isApproved).then((products) => {
      let data = products.data
      if (data) {
        if (editAccess || approveAccess) {
          data = data.map((product) => ({
            ...product,
            action: (
              <div>
                {editAccess && (
                  <CustomButton
                    className='action-button'
                    text={<BorderColorIcon />}
                    onClick={() => handleOpenEdit(product)}
                  />
                )}
                {approveAccess && (
                  <CustomButton
                    className='action-button'
                    text={<VerifiedUserIcon />}
                    onClick={() => handleOpenApprove(product)}
                  />
                )}
              </div>
            ),
          }))
        }

        setProducts(data)
      }
    })
  }

  useEffect(() => {
    fetchPendingProducts()
  }, [])

  const tableData = {
    rows: products,
    columns: editAccess || approveAccess ? pendingProductsActions : pendingProducts,
  }

  return (
    <div className='pending-products'>
      <div className='action-conent'>
        <div className='filters'></div>
        <div className='actions'>
          {(isApprovedProvider || isAdmin) && (
            <Button onClick={handleOpen}>
              <AddIcon />
              Dodaj
            </Button>
          )}
        </div>
      </div>
      <DataTable data={tableData} />
      <AddProductModal handleClose={handleClose} open={open} fetchPendingProducts={fetchPendingProducts} />
      {/* {editAccess && <EditProductModal handleClose={handleCloseEdit} product={product} open={openEdit} />} */}
      {editAccess && (
        <AddProductModal
          handleClose={handleCloseEdit}
          product={product}
          open={openEdit}
          editMode={true}
          fetchPendingProducts={fetchPendingProducts}
        />
      )}
      {approveAccess && (
        <ApproveProductModal
          handleClose={handleCloseApprove}
          product={product}
          open={openApprove}
          fetchPendingProducts={fetchPendingProducts}
        />
      )}
    </div>
  )
}
