import React, { useEffect, useState } from 'react'
import Card from '../../common/card/Card'
import './ProductDetails.scss'
import DataTable from '../../common/dataTable/DataTable'
import { getProducts } from '../../../features/services/product/product.service'

export const ProductDetails = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts().then((response) => {
      const data = response.data
      if (data) {
        setProducts(data)
      }
    })
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
    <Card className='product-details'>
      <div className='title'>Szczegóły Produktu</div>
      <div className='container'></div>
      <DataTable data={tableData} />
    </Card>
  )
}
