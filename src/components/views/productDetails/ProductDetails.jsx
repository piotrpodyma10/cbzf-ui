import React, { useEffect, useState } from 'react'
import Card from '../../common/card/Card'
import DataTable from '../../common/dataTable/DataTable'
import {
  getProductImage,
  getProductIndexes,
  getProductIngredients,
  getProductLabels,
  getProductNutrition,
  getProductReport,
  getProducts,
} from '../../../features/services/product/product.service'
import { useParams } from 'react-router-dom'
import { getIndex } from '../../../utils/productUtils'
import './ProductDetails.scss'
import { List } from '../../common/list/List'
import { ProductIndexes } from './productIndexes/ProductIndexes'
import { CustomAccordion } from '../../common/customAccordion/CustomAccordion'
import { getRateOfProduct } from '../../../features/services/rate/rate.service'
import { CustomButton } from '../../common/customButton/CustomButton'
import { useSelector } from 'react-redux'
import { auth } from '../../../features/redux/auth/authSlice'

export const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [nutrition, setNutrition] = useState([])
  const [image, setImage] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [labels, setLabels] = useState([])
  const [indexes, setIndexes] = useState([])
  const [rates, setRates] = useState([])
  const { isAdmin, isSuperExpert } = useSelector(auth)

  const legends = nutrition.filter((nutr) => nutr?.legenda)
  const legendColumns = [{ label: 'Nazwa', id: 'legenda' }]

  const isReport = isAdmin || isSuperExpert

  const legendsData = {
    rows: legends,
    columns: legendColumns,
  }

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
        const labelsWithoutObraz = data.map((label) => {
          const { obraz, ...labelWithoutObraz } = label
          return labelWithoutObraz
        })
        setLabels(labelsWithoutObraz[0])
      }
    })
    getRateOfProduct(id).then((response) => {
      const data = response.data
      if (data && data.length > 0) {
        setRates(data)
      }
    })
    getProductImage(id).then((response) => {
      const imageResponse = response.data
      if (imageResponse.byteLength > 0) {
        const blob = new Blob([imageResponse], { type: 'image/jpeg' })
        const url = URL.createObjectURL(blob)
        setImage(url)
      }
    })
  }, [])

  const getReport = () => {
    try {
      getProductReport(id)
    } catch (e) {
      console.log('Error', e)
    }
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

  const productParameters = {
    rows: rates,
    columns: [{ label: '', id: 'nazwaPar' }],
  }

  const productDescription = {
    kodEan: product.kodEan,
    kraj: product.kraj,
    wagaProdukt: product.wagaProdukt,
    opakowanie: product.opakowanie,
  }

  return (
    <div className='produt-details-page'>
      <div className='details-container'>
        <div className='details-cards-container'>
          <Card className='product-details'>
            <div className='title-container'>
              <div className='title'>{product.nazwaProdukt}</div>
              {isReport && (
                <div className='report'>
                  <CustomButton text={'Ściągnij Raport'} onCLick={getReport} />
                </div>
              )}
            </div>
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
                <DataTable data={productParameters} all={productParameters?.rows?.length} noPagination={true} />
              </div>
            </CustomAccordion>
            {image && (
              <Card>
                <div style={{ fontSize: '14px', fontWeight: 'bold', padding: '16px' }}>Etykieta</div>
                <img style={{ marginBottom: '20px' }} src={image} width={400} />
              </Card>
            )}
          </Card>
          <div className='indexes-nutritions'>
            <ProductIndexes product={indexes} nutrition={nutrition} />
            {legends.length > 0 && (
              <Card className='legenda'>
                <DataTable
                  className='short-table'
                  noHeader={true}
                  data={legendsData}
                  noPagination={true}
                  isScroll={true}
                />
              </Card>
            )}
          </div>
        </div>
      </div>

      <div className='details-container'></div>
    </div>
  )
}
