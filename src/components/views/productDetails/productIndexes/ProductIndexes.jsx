import React from 'react'
import './ProductIndexes.scss'
import Card from '../../../common/card/Card'
import { getIndex } from '../../../../utils/productUtils'

export const ProductIndexes = ({ product }) => {
  const { indeksE, indeksV, indeksM, indeksO, indeksP, indeksF, indeksS, indeksT } = product

  return (
    <Card className='product-indexes'>
      <div className='title'>Indeksy</div>
      <div className='index-container'>
        <div>
          <div className='index'>
            <span className='index-title'>Indeks EN:</span>
            <div className='index-value'>{indeksE}</div>
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
          </div>
          <div className='index'>
            <span className='index-title'>Indeks FF:</span>
            <div className='index-value'>{indeksT}</div>
          </div>
        </div>
        {getIndex(indeksT)}
      </div>
    </Card>
  )
}
