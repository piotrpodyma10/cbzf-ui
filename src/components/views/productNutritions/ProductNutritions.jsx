import React, { useEffect, useState } from 'react'
import Card from '../../common/card/Card'
import { getProductNutrition, getProducts } from '../../../features/services/product/product.service'
import { useParams } from 'react-router-dom'
import DataTable from '../../common/dataTable/DataTable'
import './ProductNutritions.scss'
import { CustomAccordion } from '../../common/customAccordion/CustomAccordion'

export const ProductNutritions = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [nutrition, setNutrition] = useState([])
  const [extraNutrition, setExtraNutrition] = useState([])

  const productName = product?.nazwaProdukt
  const porcja = nutrition?.[0]?.porcja
  const unitPorcja = `${porcja} ${nutrition?.[0]?.par1Nutrition === '1' ? 'g' : 'ml'}`

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
        const index = data.findIndex((obj) => obj.nazwa === 'EPA+DHA' && obj.nazwaGrupy === 'Omega-3')
        const basic = data.slice(0, index + 1)
        const extra = data.slice(index + 1)
        setNutrition(basic)
        setExtraNutrition(extra)
      }
    })
  }, [])

  const columns = [
    { label: 'Nazwa grupy', id: 'nazwaGrupy' },
    { label: 'Nazwa', id: 'nazwa' },
    { label: `Zawartość /100 g/ml)`, id: 'zawartosc' },
    { label: '%RWS*\n /100', id: 'procentRws' },
    { label: 'Zawartość /porcja', id: 'zawartoscPorcja' },
    { label: '%RWS*\n /porcja', id: 'procentRwsPorcja' },
    { label: 'Indeks', id: 'indeks' },
  ]

  const basicProductNutritions = {
    rows: nutrition,
    columns: columns,
  }

  const extraProductNutritions = {
    rows: extraNutrition,
    columns: columns,
  }

  return (
    <Card className='product-nutritions'>
      <div className='title'>Wartości odżywcze</div>
      <div className='product-details'>
        <div className='product-name'>
          <span className='title'>Produkt: </span>
          <span>{productName}</span>
        </div>
        <div className='product-value'>
          <span className='title'>Porcja: </span>
          <span>{unitPorcja}</span>
        </div>
      </div>
      <div className='product-values'></div>
      <div className='nutritions-table'>
        <CustomAccordion title={'Podstawowe'}>
          <DataTable data={basicProductNutritions} noPagination={true} isScroll={true} />
        </CustomAccordion>
        <CustomAccordion title={'Dodatkowe'}>
          <DataTable data={extraProductNutritions} noPagination={true} isScroll={true} />
        </CustomAccordion>
      </div>
    </Card>
  )
}
