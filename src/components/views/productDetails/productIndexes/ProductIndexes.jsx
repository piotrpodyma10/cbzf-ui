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
  )
}
