import React, { useEffect, useState } from 'react'
import DataTable from '../../../common/dataTable/DataTable'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { getProducts } from '../../../../features/services/product/product.service'
import { AddProductModal } from '../addProductModal/AddProductModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { useNavigate, useLocation } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { PanelMenu } from './panelMenu/PanelMenu'
import { useSelector } from 'react-redux'
import { auth } from '../../../../features/redux/auth/authSlice'
import './ProductPanel.scss'

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

  const toNutritionsPage = (id) => {
    const moveToPage = `/nutritions/${id}`
    navigate(moveToPage)
  }

  const actionButton = (id) => (
    <div className='action-buttons'>
      <CustomButton
        text={
          <div>
            Szczegóły <ArrowForwardIosIcon />
          </div>
        }
        className='details-page'
        onClick={() => toDetailsPage(id)}
      />
      <div className='wartosci-odz'>
        <CustomButton
          text={
            <div>
              Wartości odżywcze <ArrowForwardIosIcon />
            </div>
          }
          className='details-page'
          onClick={() => toNutritionsPage(id)}
        />
      </div>
    </div>
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
      <div className='action-conent'></div>
      <DataTable data={tableData} />
      <AddProductModal handleClose={() => setOpen(false)} open={open} />
    </div>
  )
}
