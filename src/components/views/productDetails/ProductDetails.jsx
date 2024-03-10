import React, { useEffect, useState } from 'react'
import Card from '../../common/card/Card'
import DataTable from '../../common/dataTable/DataTable'
import {
  getProductIndexes,
  getProductIngredients,
  getProductLabels,
  getProductNutrition,
  getProducts,
} from '../../../features/services/product/product.service'
import { useParams } from 'react-router-dom'
import { getIndex } from '../../../utils/productUtils'
import './ProductDetails.scss'

export const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [nutrition, setNutrition] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [labels, setLabels] = useState([])
  const [indexes, setIndexes] = useState([])

  const {
    indeksE = '',
    indeksV,
    indeksM,
    indeksO,
    indeksF,
    indeksP,
    indeksS,
    indeksT,
  } = indexes && indexes.length > 0 && indexes?.[0]

  useEffect(() => {
    getProducts('', { productId: id }).then((response) => {
      const data = response.data
      if (data) {
        setProduct(data)
      }
    })
    getProductNutrition(1).then((response) => {
      const data = response.data
      if (data) {
        setNutrition(data)
      }
    })

    getProductIndexes(2).then((response) => {
      const data = response.data
      if (data) {
        setIndexes(data)
      }
    })
    getProductIngredients(3).then((response) => {
      const data = response.data
      if (data) {
        setIngredients(data)
      }
    })
    getProductLabels(3).then((response) => {
      const data = response.data
      if (data) {
        setLabels(data)
      }
    })
  }, [])

  console.log('nutrition', nutrition)
  console.log('ingredients', ingredients)
  console.log('labels', labels)
  console.log('indexes', indexes)

  const tableData = {
    rows: product,
    columns: [
      { label: 'Kod EAN', id: 'kodEan' },
      { label: 'Nazwa', id: 'nazwaProdukt' },
      { label: 'Opis', id: 'opisProdukt' },
      { label: 'Waga', id: 'wagaProdukt' },
      { label: 'Opakowanie', id: 'opakowanie' },
      { label: 'Kraj', id: 'idKraj' },
    ],
  }

  const wartosciOdz = [
    { avgLife: 'Wartość energetyczna', '100ml': '151 kJ\n 36 kcal', '75ml': '114 kJ\n 27 kcal', rws: '1%' },
    {
      avgLife: 'Tłuszcz\n w tym kwasy tłuszczowe nasycone',
      '100ml': '0,9g\n 0,6g',
      '75ml': '0,7g\n 0,5g',
      rws: '1%\n 3%',
    },
    { avgLife: 'Węglowodany w tym cukry', '100ml': '5,9g\n 1,3g', '75ml': '4,4g\n 1,0g', rws: '2%\n 1%' },
    { avgLife: 'Błonnik', '100ml': '0,2g', '75ml': '0,2g', rws: '-' },
    { avgLife: 'Białko', '100ml': '0,9g', '75ml': '0,7g', rws: '1%' },
    { avgLife: 'Sól', '100ml': '1,3g', '75ml': '1,0g', rws: '17%' },
  ]

  const productNutritions = {
    rows: wartosciOdz,
    columns: [
      { label: 'Średnia wartość odżywcza\n po przyrządzeniu', id: 'avgLife' },
      { label: 'W\n 100 ml', id: '100ml' },
      { label: 'W\n 1 porcji 75 ml', id: '75ml' },
      { label: '%RWS*\n w 1 porcji', id: 'rws' },
    ],
  }

  return (
    <div className='produt-details-page'>
      <div className='details-container'>
        <div className='details-cards-container'>
          <Card className='product-details'>
            <div className='title'>Szczegóły Produktu</div>
            <div className='details-table'>
              <DataTable data={tableData} noPagination={true} />
            </div>
          </Card>
          <Card className='product-indexes'>
            <div className='title'>Indeksy</div>
            <div className='index-container'>
              <div>
                <div className='index'>
                  <span className='index-title'>Indeks E:</span>
                  {indeksE}
                </div>
                <div className='index'>
                  <span className='index-title'>Indeks V:</span>
                  {indeksV}
                </div>
                <div className='index'>
                  <span className='index-title'>Indeks M:</span>
                  {indeksM}
                </div>
                <div className='index'>
                  <span className='index-title'>Indeks O:</span>
                  {indeksO}
                </div>
                <div className='index'>
                  <span className='index-title'>Indeks P:</span>
                  {indeksP}
                </div>
                <div className='index'>
                  <span className='index-title'>Indeks F:</span>
                  {indeksF}
                </div>
                <div className='index'>
                  <span className='index-title'>Indeks S:</span>
                  {indeksS}
                </div>
                <div className='index'>
                  <span className='index-title'>Indeks T:</span>
                  {indeksT}
                </div>
              </div>
              {getIndex(indeksT)}
            </div>
          </Card>
          <Card className='product-labels'>Labels</Card>
        </div>
        <Card className='nutritions-card'>
          <div className='title'>Wartości odżywcze</div>
          <div className='nutritions-table'>
            <DataTable data={productNutritions} noPagination={true} />
          </div>
        </Card>
      </div>
      <div className='details-container'></div>
    </div>
  )
}
