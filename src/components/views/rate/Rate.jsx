import React, { useEffect, useState } from 'react'
import DataTable from '../../common/dataTable/DataTable'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import { RateModal } from './rateModal/RateModal'
import Card from '../../common/card/Card'
import { CustomButton } from '../../common/customButton/CustomButton'
import { getProductsReadyToReview } from '../../../features/services/product/product.service'
import './Rate.scss'

function Rate() {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const ActionButton = ({ product }) => (
    <div>
      <CustomButton
        text={<StarHalfIcon />}
        onClick={() => {
          setProduct(product)
          setOpen(true)
        }}
      />
    </div>
  )

  const fetchProducts = () => {
    getProductsReadyToReview().then((products) => {
      const allProducts = products.data.map((productInfo) => ({
        ...productInfo,
        action: <ActionButton product={productInfo} />,
      }))
      setProducts(allProducts)
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const productsData = {
    rows: products,
    columns: [
      { label: 'Kod EAN', id: 'kodEan' },
      { label: 'Nazwa Produktu', id: 'nazwaProdukt' },
      { label: 'Opis', id: 'opisProdukt' },
      { label: 'Akcja', id: 'action' },
    ],
  }

  console.log('prz', product)

  return (
    <Card className='rate'>
      <DataTable data={productsData} />
      <RateModal product={product} open={open} handleClose={handleClose} fetchProducts={fetchProducts} />
    </Card>
  )
}

export default Rate
