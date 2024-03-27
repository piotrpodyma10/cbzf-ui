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
import { List } from '../../common/list/List'
import { ProductIndexes } from './productIndexes/ProductIndexes'
import { CustomAccordion } from '../../common/customAccordion/CustomAccordion'
import { getRateOfProduct } from '../../../features/services/rate/rate.service'

export const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [nutrition, setNutrition] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [labels, setLabels] = useState([])
  const [indexes, setIndexes] = useState([])
  const [rates, setRates] = useState([])

  useEffect(() => {
    getProducts('', { productId: id }).then((response) => {
      const data = response.data
      if (data && data.length > 0) {
        const { indicesEntity, ...rest } = data?.[0]
        setProduct(rest)
      }
    })
    getProductNutrition(id).then((response) => {
      const data = response.data
      if (data) {
        setNutrition(data)
      }
    })

    getProductIndexes(id).then((response) => {
      const data = response.data?.[0]
      if (data) {
        setIndexes(data)
      }
    })
    getProductIngredients(id).then((response) => {
      const data = response.data
      if (data && data.length > 0) {
        setIngredients(data[0])
      }
    })
    getProductLabels(id).then((response) => {
      const data = response.data
      if (data && data.length > 0) {
        setLabels(data[0])
      }
    })
    getRateOfProduct(id).then((response) => {
      const data = response.data
      if (data && data.length > 0) {
        setRates(data)
      }
    })
  }, [])

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

  const productParameters = {
    rows: rates,
    columns: [
      { label: 'Parametr ID', id: 'idParametr' },
      { label: 'Grupa', id: 'nazwaGrupa' },
      { label: 'Parametr', id: 'nazwaPar' },
      { label: 'Wartość', id: 'value' },
    ],
  }

  const productDescription = {
    kodEan: product.kodEan,
    idKraj: product.idKraj,
    wagaProdukt: product.wagaProdukt,
    opakowanie: product.opakowanie,
  }

  return (
    <div className='produt-details-page'>
      <div className='details-container'>
        <div className='details-cards-container'>
          <Card className='product-details'>
            <div className='title'>{product.nazwaProdukt}</div>
            <CustomAccordion title={'Opis produktu'}>
              <div className='description'>{product.opisProdukt}</div>
              <List data={productDescription} />
            </CustomAccordion>
            <CustomAccordion title={'Skład produktu'}>
              <div className='nutritions-table'>
                <List data={ingredients} notAllowEmpty={true} />
              </div>
            </CustomAccordion>
            <CustomAccordion title={'Dodatkowy opis'}>
              <div className='nutritions-table'>
                <List data={labels} />
              </div>
            </CustomAccordion>
            <CustomAccordion title={'Parametry'}>
              <div className='nutritions-table'>
                <DataTable data={productParameters} all={true} noPagination={true} />
              </div>
            </CustomAccordion>
          </Card>
          <div className='indexes-nutritions'>
            <ProductIndexes product={indexes} />
            {/* <Card className='nutritions-card'>
              <div className='title'>Wartości odżywcze</div>
              <CustomAccordion title={'Ogólne'}>
                <div className='nutritions-table'>
                  <DataTable data={productNutritions} noPagination={true} />
                </div>
              </CustomAccordion>
              <CustomAccordion title={'Szczegółowe'}>
                <div className='nutritions-table'>
                  <DataTable data={productNutritions} noPagination={true} />
                </div>
              </CustomAccordion>
            </Card> */}
          </div>
        </div>
      </div>
      <div className='details-container'></div>
    </div>
  )
}
