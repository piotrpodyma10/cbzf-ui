import React from 'react'
import { blockedFliends, formatField } from '../../../utils/fieldsUtils'
import './List.scss'

export const List = ({ data, notAllowEmpty = false }) => {
  return (
    <div className='list'>
      {data &&
        Object.keys(data)?.map((key) => {
          if (blockedFliends.includes(key)) return
          if (data[key] === null && notAllowEmpty) return

          return (
            <div className='list-value'>
              <span className='title'>{formatField(key)}</span>
              <span className='value'>{data[key]}</span>
            </div>
          )
        })}
    </div>
  )
}
