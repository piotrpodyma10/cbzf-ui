import React, { useEffect, useState } from 'react'
import DataTable from '../../../common/dataTable/DataTable'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { getProducts } from '../../../../features/services/product/product.service'
import { AddProductModal } from '../addProductModal/AddProductModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { useNavigate, useLocation } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import './ProductPanel.scss'
import { PanelMenu } from './panelMenu/PanelMenu'
import { useSelector } from 'react-redux'
import { auth } from '../../../../features/redux/auth/authSlice'

export const ProductPanel = ({ isConsumer }) => {
  const { isProvider, user } = useSelector(auth)
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const toDetailsPage = (id) => {
    const path = location.pathname
    let moveToPage = `/${id}`
    if (path.includes('product')) {
      moveToPage = `/product/${id}`
    }

    navigate(moveToPage)
  }

  const actionButton = (id) => (
    <CustomButton
      text={
        <div>
          Szczegóły <ArrowForwardIosIcon />
        </div>
      }
      className='details-page'
      onClick={() => toDetailsPage(id)}
    />
  )

  const fetchProducts = (filters = {}) => {
    const providerId = !isConsumer && isProvider ? user?.supplier?.id : ''
    getProducts(providerId, filters).then((response) => {
      const data = response.data
      if (data) {
        const allProducts = data.map((product) => ({
          ...product,
          action: actionButton(product.idProdukt),
        }))

        setProducts(allProducts)
      }
    })
  }

  useEffect(() => {
    fetchProducts()
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
    columns: [
      { label: 'Kod EAN', id: 'kodEan' },
      { label: 'Nazwa', id: 'nazwaProdukt' },
      { label: 'Opis', id: 'opisProdukt' },
      { label: 'Waga', id: 'wagaProdukt' },
      { label: 'Opakowanie', id: 'opakowanie' },
      { label: 'Kraj', id: 'idKraj' },
      { label: 'Akcja', id: 'action' },
    ],
  }

  return (
    <div className='product-panel'>
      {isConsumer && <PanelMenu fetchProducts={fetchProducts} />}
      <div className='action-conent'>
      </div>
      <DataTable data={tableData} />
      <AddProductModal handleClose={() => setOpen(false)} open={open} />
    </div>
  )
}
