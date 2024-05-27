import React from 'react'
import Card from '../../../common/card/Card'
import { getIndex } from '../../../../utils/productUtils'
import './ProductIndexes.scss'

export const ProductIndexes = ({ product, nutrition }) => {
  const { indeksE, indeksV, indeksM, indeksO, indeksP, indeksF, indeksS, indeksT } = product
  const indexEN = nutrition?.filter((nutr) => nutr?.nazwaGrupy === 'Wartość Energetyczna')
  const valueOfIndexEN = indexEN?.[0]?.zawartosc

  return (
    <Card className='product-indexes'>
      <div className='title'>Indeksy</div>
      <div className='index-container'>
        <div>
          <div className='index'>
            <span className='index-title'>Indeks EN:</span>
            {/* <div className='index-value'>{indeksE}</div> */}
            {getIndex(valueOfIndexEN, 'en')}
          </div>
          <div className='index'>
            <span className='index-title'>Indeks VIT:</span>
            <div className='index-value'>{indeksV}</div>
          </div>
          <div className='index'>
            <span className='index-title'>Indeks MIN:</span>
            <div className='index-value'>{indeksM}</div>
          </div>
          <div className='index'>
            <span className='index-title'>Indeks OM3:</span>
            <div className='index-value'>{indeksO}</div>
          </div>
          <div className='index'>
            <span className='index-title'>Indeks PRT:</span>
            <div className='index-value'>{indeksP}</div>
          </div>
          <div className='index'>
            <span className='index-title'>Indeks FIB:</span>
            <div className='index-value'>{indeksF}</div>
          </div>
          <div className='index'>
            <span className='index-title'>Indeks SUM:</span>
            <div className='index-value'>{indeksS}</div>
            {getIndex(indeksS, 'ff')}
          </div>
          <div className='index'>
            <span className='index-title'>Indeks FF:</span>
            <div className='index-value'>{indeksT}</div>
            {getIndex(indeksT, 'cl')}
          </div>
        </div>
      </div>
    </Card>
  )
}
