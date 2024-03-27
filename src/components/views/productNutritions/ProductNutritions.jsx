import React, { useEffect, useState } from 'react'
import Card from '../../common/card/Card'
import { getProductNutrition, getProducts } from '../../../features/services/product/product.service'
import { useParams } from 'react-router-dom'
import DataTable from '../../common/dataTable/DataTable'
import './ProductNutritions.scss'

export const ProductNutritions = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [nutrition, setNutrition] = useState([])

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
        setNutrition(data)
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

  // const wartosciOdz = [
  //   { avgLife: 'Wartość energetyczna', '100ml': '151 kJ\n 36 kcal', '75ml': '114 kJ\n 27 kcal', rws: '1%' },
  //   {
  //     avgLife: 'Tłuszcz\n w tym kwasy tłuszczowe nasycone',
  //     '100ml': '0,9g\n 0,6g',
  //     '75ml': '0,7g\n 0,5g',
  //     rws: '1%\n 3%',
  //   },
  //   { avgLife: 'Węglowodany w tym cukry', '100ml': '5,9g\n 1,3g', '75ml': '4,4g\n 1,0g', rws: '2%\n 1%' },
  //   { avgLife: 'Błonnik', '100ml': '0,2g', '75ml': '0,2g', rws: '-' },
  //   { avgLife: 'Białko', '100ml': '0,9g', '75ml': '0,7g', rws: '1%' },
  //   { avgLife: 'Sól', '100ml': '1,3g', '75ml': '1,0g', rws: '17%' },
  // ]

  const productNutritions = {
    rows: nutrition,
    columns: [
      { label: 'Nazwa grupy', id: 'nazwaGrupy' },
      { label: 'Nazwa', id: 'nazwa' },
      { label: `Wartość liczbowa (${unitPorcja}/100)`, id: 'zawartosc' },
      { label: '%RWS*\n /100', id: 'procentRws' },
      { label: 'Wartość /porcja', id: 'zawartoscPorcja' },
      { label: '%RWS*\n /porcja', id: 'procentRwsPorcja' },
    ],
    // columns: [
    //   { label: 'Średnia wartość odżywcza po przyrządzeniu', id: 'avgLife' },
    //   { label: 'W\n 100 ml', id: '100ml' },
    //   { label: 'W\n 1 porcji 75 ml', id: '75ml' },
    //   { label: '%RWS*\n w 1 porcji', id: 'rws' },
    // ],
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
        <DataTable data={productNutritions} noPagination={true} isScroll={true} />
      </div>
    </Card>
  )
}
