import React, { useEffect, useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { toast } from 'react-toastify'
import { CustomAccordion } from '../../../common/customAccordion/CustomAccordion'
import {
  praductIndexFields,
  productCategoryFields,
  productLabelFields,
  productNutritionCarboFields,
  productNutritionFatFields,
  productNutritionGeneralFields,
  productNutritionMineralFields,
  productNutritionVitaminFields,
  productSquadFields,
} from '../../../../utils/dataUtils'
import { handleFields } from '../../../../utils/fieldsUtils'
import {
  addPendingNutrition,
  addPendingProduct,
  getPendingProductNutrition,
  getProductNutrition,
} from '../../../../features/services/product/product.service'
import { CustomSwitch } from '../../../common/customSwitch/CustomSwitch'
import { useSelector } from 'react-redux'
import { auth } from '../../../../features/redux/auth/authSlice'
import './AddProductModal.scss'
import { isNotEmpty } from '../../../../utils/userUtils'

export const AddProductModal = ({ handleClose, open, product = {}, editMode = false, fetchPendingProducts }) => {
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

  useEffect(() => {
    if (isNotEmpty(product)) {
      setFields(product)

      const { idProdukt } = product
      getPendingProductNutrition(idProdukt).then((response) => {
        const nutritions = response.data
        if (nutritions.length > 0) {
          const updatedNutritions =
            nutritionfields &&
            nutritionfields.length > 0 &&
            nutritionfields.map((nutrition) => {
              const findRecord = nutritions.filter(
                (nutri) => nutri.nazwa === nutrition.nazwa && nutri.nazwaGrupy === nutrition.nazwaGrupy
              )
              const record = findRecord.length > 0 ? findRecord[0] : nutrition
              return { ...record }
            })
          if (updatedNutritions.length > 0) {
            setNutritionFields(updatedNutritions)
          }
        }
      })
    }
  }, [product])

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
    setNutritionFields(allNutritions)
    handleClose()
  }

  const saveData = () => {
    const allFields = editMode ? [{ ...fields, approvedByExpert: true }] : [{ ...fields, idDostawca: id }]
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
            if (nutrResponse.status === 200) {
              const toastText = editMode ? 'Produkt został zaktualizowany' : 'Produkt został dodany'
              toast.success(toastText)
              fetchPendingProducts()
              close()
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

  const mineralsData = nutritionfields.filter((field) => field.nazwaGrupy === 'Minerały')
  const vitaminsData = nutritionfields.filter((field) => field.nazwaGrupy === 'Witaminy')
  const carbioData = nutritionfields.filter((field) => field.nazwaGrupy === 'Węglowodany')
  const fatData = nutritionfields.filter((field) => field.nazwaGrupy === 'Tłuszcz')
  const generalata = nutritionfields.filter(
    (field) =>
      field.nazwaGrupy === 'Wartość Energetyczna' || field.nazwaGrupy === 'Białko' || field.nazwaGrupy === 'Sól'
  )
  return (
    <CustomModal className='add-product-modal' open={open} handleClose={close}>
      <div className='container'>
        <div className='title'>{editMode ? 'Rozszerz' : 'Dodaj'} Produkt</div>
        <div className='fields-container'>
          <CustomAccordion title='Podstawowe informacje'>
            {allFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField
                    onChange={(e) => handleFields(e, f, setFields, fields)}
                    type={f.type}
                    label={f.label}
                    value={fields?.[f.field]}
                    InputLabelProps={editMode ? { shrink: true } : {}}
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
                    value={fields?.[f.field]}
                    InputLabelProps={editMode ? { shrink: true } : {}}
                    required={f.required}
                  />
                </div>
              )
            })}
          </CustomAccordion>
          <CustomAccordion title={'Etykiety'}>
            {productLabelFields.map((f, key) => {
              return (
                <div key={key} className='field'>
                  <CustomTextField
                    onChange={(e) => handleFields(e, f, setFields, fields)}
                    type={f.type}
                    label={f.label}
                    value={fields?.[f.field]}
                    InputLabelProps={editMode ? { shrink: true } : {}}
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
                    value={fields?.[f.field]}
                    InputLabelProps={editMode ? { shrink: true } : {}}
                    required={f.required}
                  />
                </div>
              )
            })}
            PAR 2*
            <CustomSwitch
              value={fields.par2}
              checked={fields.par2}
              required={true}
              onChange={(e, v) => handleFields({ target: { value: v } }, { field: 'par2' }, setFields, fields)}
            />
          </CustomAccordion>
          <CustomAccordion title={'Wartości odżywcze'}>
            <CustomAccordion title={'Ogólne wartości'}>
              {generalata.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      value={f.zawartosc}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={f.nazwaGrupy}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      value={f.procentRWS}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Tłuszcz'}>
              {fatData.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      value={f.zawartosc}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      value={f.procentRWS}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Węglowodany'}>
              {carbioData.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      value={f.zawartosc}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRWS}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Witaminy'}>
              {vitaminsData.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      size='small'
                      value={f.zawartosc}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRWS}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Minerały'}>
              {mineralsData.map((f, key) => {
                return (
                  <div key={key} className='nutrition-field'>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'zawartosc', e.target.value)}
                      type={'number'}
                      value={f.zawartosc}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      size='small'
                      label={f.nazwa}
                    />
                    <span className='nutrition-unit'>{f.jednostka}</span>
                    <CustomTextField
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRWS', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRWS}
                      InputLabelProps={editMode ? { shrink: true } : {}}
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
                    value={fields?.[f.field]}
                    InputLabelProps={editMode ? { shrink: true } : {}}
                    label={f.label}
                  />
                </div>
              )
            })}
          </CustomAccordion>
        </div>
        <CustomButton
          disabled={isDisabled}
          text={editMode ? 'Zaktualizuj' : 'Dodaj'}
          onClick={saveData}
          className='add-button'
        />
      </div>
    </CustomModal>
  )
}
