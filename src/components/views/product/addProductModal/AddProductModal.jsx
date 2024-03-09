import React, { useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { addProduct } from '../../../../features/services/product/product.service'
import CustomTextField from '../../../common/customTextField/CustomTextField'

import './AddProductModal.scss'
import { toast } from 'react-toastify'
import { CustomAccordion } from '../../../common/customAccordion/CustomAccordion'
import { praductIndexFields, productCategoryFields, productLabelFields, productSquadFields } from '../../../../utils/dataUtils'

export const AddProductModal = ({ handleClose, open }) => {
  const [fields, setFields] = useState({})

  const allFields = [
    { field: 'kodEan', type: 'string', label: 'Kod EAN' },
    { field: 'nazwaProdukt', type: 'string', label: 'Nazwa' },
    { field: 'opisProdukt', type: 'string', label: 'Opis' },
    { field: 'wagaProdukt', type: 'string', label: 'Waga' },
    { field: 'opakowanie', type: 'string', label: 'Opakowanie' },
    { field: 'idKraj', type: 'number', label: 'Id Kraj' },
  ]

  const isDisabled = Object.keys(fields).length === allFields.length

  const close = () => {
    setFields({})
    handleClose()
  }

  const saveData = () => {
    addProduct([{ ...fields, id_dostawca: 5 }])
      .then((data) => {
        if (data.status === 200) {
          toast.success('Dane zostały prawidłowo dodane!')
          return close()
        }
      })
      .catch((e) => {
        toast.error('Pojawił się błąd zapisując dane')
      })
  }

  const handleFields = (e, f) => {
    let value = e.target.value
    if (f.type === 'number') {
      value = e.target.valueAsNumber
    }

    if (value === '' || (isNaN(value) && f.type === 'number')) {
      const currentFields = { ...fields }
      delete currentFields[f.field]
      setFields(currentFields)
      return
    }
    setFields({ ...fields, [f.field]: value })
  }

  return (
    <CustomModal className='add-product-modal' open={open} handleClose={close}>
      <div className='container'>
        <div className='title'>Dodaj Produkt</div>
        <div className='fields-container'>
          <CustomAccordion title='Podstawowe informacje'>
            {allFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField onChange={(e) => handleFields(e, f)} type={f.type} label={f.label} />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Kategorie'}>
            {productCategoryFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField onChange={(e) => handleFields(e, f)} type={f.type} label={f.label} />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Skład'}>
            {productSquadFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField onChange={(e) => handleFields(e, f)} type={f.type} label={f.label} />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Wartości odżywcze'}>
            {productSquadFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField onChange={(e) => handleFields(e, f)} type={f.type} label={f.label} />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Etykiety'}>
            {productLabelFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField onChange={(e) => handleFields(e, f)} type={f.type} label={f.label} />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Indeksy'}>
            {praductIndexFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField onChange={(e) => handleFields(e, f)} type={f.type} label={f.label} />
                </div>
              )
            })}
          </CustomAccordion>
        </div>
        <CustomButton text={'Dodaj'} disabled={false} onClick={saveData} className='add-button' />
      </div>
    </CustomModal>
  )
}
