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
  const { isApproved } = supplier
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

  const editAccess = isExpert || isAdmin
  const approveAccess = isSuperExpert || isAdmin

  useEffect(() => {
    getPendingProducts().then((products) => {
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
  }, [])

  // OLD
  // columns: [
  //   { label: 'Kod EAN', id: 'kodEAN' },
  //   { label: 'Nazwa', id: 'nazwa' },
  //   { label: 'Producent', id: 'producent' },
  //   { label: 'Kraj', id: 'idKraj' },
  //   { label: 'Waga', id: 'waga' },
  //   { label: 'Wartość Energetyczna', id: 'wartoscEnergetyczna' },
  //   { label: 'Indeks F-FOOD', id: 'indeks' },
  //   { label: 'indeks_v', id: 'indeks_v' },
  //   { label: 'indeks_m', id: 'indeks_m' },
  //   { label: 'indeks_o', id: 'indeks_o' },
  //   { label: 'indeks_f', id: 'indeks_f' },
  //   { label: 'indeks_p', id: 'indeks_p' },
  // ],

  const tableData = {
    rows: products,
    columns: editAccess || approveAccess ? pendingProductsActions : pendingProducts,
  }

  return (
    <div className='pending-products'>
      <div className='action-conent'>
        <div className='filters'></div>
        <div className='actions'>
          {isApprovedProvider && (
            <Button onClick={handleOpen}>
              <AddIcon />
              Dodaj
            </Button>
          )}
        </div>
      </div>
      <DataTable data={tableData} />
      <AddProductModal handleClose={handleClose} open={open} />
      {editAccess && <EditProductModal handleClose={handleCloseEdit} product={product} open={openEdit} />}
      {approveAccess && <ApproveProductModal handleClose={handleCloseApprove} product={product} open={openApprove} />}
    </div>
  )
}
