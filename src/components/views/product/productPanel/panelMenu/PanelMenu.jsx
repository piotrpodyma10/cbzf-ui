import React, { useState } from 'react'
import './PanelMenu.scss'
import Card from '../../../../common/card/Card'
import { CustomAccordion } from '../../../../common/customAccordion/CustomAccordion'
import CustomTextField from '../../../../common/customTextField/CustomTextField'
import { searchFilters } from '../../../../../utils/dataUtils'
import { handleFields } from '../../../../../utils/fieldsUtils'
import { CustomButton } from '../../../../common/customButton/CustomButton'
import { isNotEmpty } from '../../../../../utils/userUtils'

export const PanelMenu = ({ fetchProducts }) => {
  const [filters, setFilters] = useState({})
  // const isDisabled = isNotEmpty(filters)

  const search = () => {
    // if (isNotEmpty(filters)) {
      fetchProducts(filters)
    // }
  }

  return (
    <Card className='panel-menu'>
      <CustomAccordion title='Szukaj Produktów'>
        {searchFilters.map((f, index) => {
          return (
            <CustomTextField
              className='filter'
              onChange={(e) => handleFields(e, f, setFilters, filters)}
              type={f.type}
              size='small'
              key={index}
              label={f.label}
            />
          )
        })}
        <CustomButton disabled={false} className='search' onCLick={search} text='Szukaj' />
      </CustomAccordion>
    </Card>
  )
}
