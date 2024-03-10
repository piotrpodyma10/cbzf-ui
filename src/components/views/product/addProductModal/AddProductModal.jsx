import React, { useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { toast } from 'react-toastify'
import { CustomAccordion } from '../../../common/customAccordion/CustomAccordion'
import {
  praductIndexFields,
  productCategoryFields,
  productNutritionCarboFields,
  productNutritionFatFields,
  productNutritionGeneralFields,
  productNutritionMineralFields,
  productNutritionVitaminFields,
  productSquadFields,
} from '../../../../utils/dataUtils'
import { handleFields } from '../../../../utils/fieldsUtils'
import './AddProductModal.scss'
import { addPendingNutrition, addPendingProduct } from '../../../../features/services/product/product.service'
import { CustomSwitch } from '../../../common/customSwitch/CustomSwitch'
import { useSelector } from 'react-redux'
import { auth } from '../../../../features/redux/auth/authSlice'

export const AddProductModal = ({ handleClose, open }) => {
  const { user } = useSelector(auth)
  const { supplier = {} } = user
  const { id = '' } = supplier
  const [fields, setFields] = useState({})
  const allNutritions = [
    ...productNutritionGeneralFields,
    ...productNutritionFatFields,
    ...productNutritionCarboFields,
    ...productNutritionVitaminFields,
    ...productNutritionMineralFields,
  ]

  const [nutritionfields, setNutritionFields] = useState(allNutritions)

  const allFields = [
    { field: 'kodEan', type: 'string', label: 'Kod EAN', required: true },
    { field: 'nazwaProdukt', type: 'string', label: 'Nazwa', required: true },
    { field: 'opisProdukt', type: 'string', label: 'Opis' },
    { field: 'wagaProdukt', type: 'string', label: 'Waga' },
    { field: 'opakowanie', type: 'string', label: 'Opakowanie' },
    { field: 'idKraj', type: 'number', label: 'Id Kraj' },
  ]

  const requiredFields = ['par1', 'par2', 'kodEan', 'nazwaProdukt', 'skladnikIlosc']
  const isDisabled = !requiredFields.every((field) => Object.keys(fields).includes(field))

  const handleNutritionUpdate = (nazwaGrupy, nazwa, cell, newValue) => {
    const updatedItems = nutritionfields.map((field) => {
      if (field.nazwaGrupy === nazwaGrupy && field.nazwa === nazwa) {
        return { ...field, [cell]: newValue }
      }
      return field
    })

    setNutritionFields(updatedItems)
  }

  const close = () => {
    setFields({})
    handleClose()
  }

  const saveData = () => {
    const allFields = [{ ...fields, idDostawca: id }]
    addPendingProduct(allFields)
      .then((response) => {
        const productId = response.data
        const allPreparedNutritions = nutritionfields.map((nutritionField, index) => ({
          idProdukt: productId,
          idNutrient: index + 1,
          ...nutritionField,
        }))
        addPendingNutrition(allPreparedNutritions)
          .then((nutrResponse) => {
            console.log('Nutr', nutrResponse)
            if (nutrResponse.status === 200) {
              toast.success('Produkt został dodany')
              setNutritionFields({})
              setFields({})
            }
          })
          .catch((e) => {
            console.log('Error', e)
            toast.error('Produkt nie został prawidłowo zapisany')
          })
      })
      .catch((e) => {
        console.log('Error', e)
        toast.error('Produkt nie został prawidłowo zapisany')
      })
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
                  <CustomTextField
                    onChange={(e) => handleFields(e, f, setFields, fields)}
                    type={f.type}
                    label={f.label}
                    required={f.required}
                  />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Kategorie'}>
            {productCategoryFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField
                    onChange={(e) => handleFields(e, f, setFields, fields)}
                    type={f.type}
                    label={f.label}
                    required={f.required}
                  />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Skład'}>
            {productSquadFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField
                    onChange={(e) => handleFields(e, f, setFields, fields)}
                    type={f.type}
                    label={f.label}
                    required={f.required}
                  />
                </div>
              )
            })}
            PAR 2*
            <CustomSwitch
              required={true}
              onChange={(e, v) => handleFields({ target: { value: v } }, { field: 'par2' }, setFields, fields)}
            />
          </CustomAccordion>
          <CustomAccordion title={'Wartości odżywcze'}>
            <CustomAccordion title={'Ogólne wartości'}>
              {productNutritionGeneralFields.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      label={f.nazwaGrupy}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Tłuszcz'}>
              {productNutritionFatFields.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Węglowodany'}>
              {productNutritionCarboFields.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Witaminy'}>
              {productNutritionVitaminFields.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Minerały'}>
              {productNutritionMineralFields.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
          </CustomAccordion>
          <CustomAccordion title={'Indeksy'}>
            {praductIndexFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField
                    onChange={(e) => handleFields(e, f, setFields, fields)}
                    type={f.type}
                    label={f.label}
                  />
                </div>
              )
            })}
          </CustomAccordion>
        </div>
        <CustomButton disabled={isDisabled} text={'Dodaj'} onClick={saveData} className='add-button' />
      </div>
    </CustomModal>
  )
}
