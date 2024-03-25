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
  productNutritionAminoFields,
  productNutritionAntyoksydantyFields,
  productNutritionBacteriaFields,
  productNutritionCarboFields,
  productNutritionEnzymyFields,
  productNutritionFatFields,
  productNutritionFosfoFields,
  productNutritionGeneralFields,
  productNutritionGlikozydyFields,
  productNutritionHormonyFields,
  productNutritionInneFields,
  productNutritionKwasyOrgFields,
  productNutritionMineralFields,
  productNutritionOligoFields,
  productNutritionOmgaFields,
  productNutritionOtherVitaminsFields,
  productNutritionSteroleFields,
  productNutritionVitaminFields,
  productSquadFields,
} from '../../../../utils/dataUtils'
import { countIndexes, handleFields } from '../../../../utils/fieldsUtils'
import {
  addPendingNutrition,
  addPendingProduct,
  calculateIndexes,
  getPendingProductNutrition,
  getProductNutrition,
} from '../../../../features/services/product/product.service'
import { CustomSwitch } from '../../../common/customSwitch/CustomSwitch'
import { useSelector } from 'react-redux'
import { auth } from '../../../../features/redux/auth/authSlice'
import { isNotEmpty } from '../../../../utils/userUtils'
import './AddProductModal.scss'

export const AddProductModal = ({ handleClose, open, product = {}, editMode = false, fetchPendingProducts }) => {
  const { user, isProvider } = useSelector(auth)
  const { supplier = {} } = user
  const { id = '' } = supplier
  const [fields, setFields] = useState({})

  const allNutritions = [
    ...productNutritionGeneralFields,
    ...productNutritionFatFields,
    ...productNutritionCarboFields,
    ...productNutritionVitaminFields,
    ...productNutritionMineralFields,
    ...productNutritionOmgaFields,
    ...productNutritionOtherVitaminsFields,
    ...productNutritionAntyoksydantyFields,
    ...productNutritionBacteriaFields,
    ...productNutritionOligoFields,
    ...productNutritionGlikozydyFields,
    ...productNutritionKwasyOrgFields,
    ...productNutritionEnzymyFields,
    ...productNutritionHormonyFields,
    ...productNutritionSteroleFields,
    ...productNutritionFosfoFields,
    ...productNutritionAminoFields,
    ...productNutritionInneFields,
  ]

  const [nutritionfields, setNutritionFields] = useState(allNutritions)
  const [indexes, setIndexes] = useState({})
  const [porcja, setPorcja] = useState(0)

  const allFields = [
    { field: 'kodEan', type: 'string', label: 'Kod EAN', required: true },
    { field: 'nazwaProdukt', type: 'string', label: 'Nazwa', required: true },
    { field: 'opisProdukt', type: 'string', label: 'Opis' },
    { field: 'wagaProdukt', type: 'string', label: 'Waga' },
    { field: 'opakowanie', type: 'string', label: 'Opakowanie' },
    { field: 'idKraj', type: 'number', label: 'Id Kraj' },
  ]

  const requiredFields = ['par2', 'kodEan', 'nazwaProdukt', 'skladnikIlosc']
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
            const isPorcja = updatedNutritions[0].porcja
            if (isPorcja) {
              setPorcja(isPorcja)
            }
          }
        }
      })
    }
  }, [product])

  const handleNutritionUpdate = (nazwaGrupy, nazwa, cell, newValue, total = true) => {
    if (cell === 'indeks' && newValue > 3 && total) {
      return
    }

    setNutritionFields((prevState) => {
      const updatedItems = prevState.map((field) => {
        if (field.nazwaGrupy === nazwaGrupy && field.nazwa === nazwa) {
          return { ...field, [cell]: newValue }
        }
        return field
      })
      return updatedItems
    })
  }

  const getCalculatedIndexes = async () => {
    if (nutritionfields.length > 0) {
      try {
        const response = await calculateIndexes(nutritionfields)
        const data = response.data
        console.log('DATA', response)
        if (isNotEmpty(data)) {
          setIndexes(data)
          await handleNutritionUpdate('Omega-3', 'Total', 'indeks', data.indeksO, false)
          await handleNutritionUpdate('Minerały', 'Total', 'indeks', data.indeksM, false)
          await handleNutritionUpdate('Witaminy', 'Total', 'indeks', data.indeksV, false)
        }
      } catch (e) {
        console.log('Error', e)
        toast.error('Problem with calculating the indexes')
      }
    }
  }

  const close = () => {
    setFields({})
    setNutritionFields(allNutritions)
    handleClose()
  }

  const saveData = () => {
    const allFields = editMode
      ? [{ ...fields, approvedByExpert: true }]
      : [{ ...fields, idDostawca: id, approvedByExpert: false }]
    addPendingProduct(allFields)
      .then((response) => {
        const productId = response.data
        const allPreparedNutritions = nutritionfields.map((nutritionField, index) => ({
          idProdukt: productId,
          idNutrient: index + 1,
          porcja: porcja,
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
  const OmegaData = nutritionfields.filter((field) => field.nazwaGrupy === 'Omega-3')
  const otherVitaminsData = nutritionfields.filter((field) => field.nazwaGrupy === 'Witaminy inne')
  const antyoksydantyData = nutritionfields.filter((field) => field.nazwaGrupy === 'Antyoksydanty')
  const bacteriasData = nutritionfields.filter((field) => field.nazwaGrupy === 'Żywe bakterie')
  const oligoData = nutritionfields.filter((field) => field.nazwaGrupy === 'Oligo/Polisacharydy')
  const glokozydyData = nutritionfields.filter((field) => field.nazwaGrupy === 'Glikozydy')
  const enzymyData = nutritionfields.filter((field) => field.nazwaGrupy === 'Enzymy')
  const kwasyOrgData = nutritionfields.filter((field) => field.nazwaGrupy === 'Kwasy Organiczne')
  const hormonyData = nutritionfields.filter((field) => field.nazwaGrupy === 'Hormony')
  const steroleData = nutritionfields.filter((field) => field.nazwaGrupy === 'Sterole/Stanole')
  const fosfoData = nutritionfields.filter((field) => field.nazwaGrupy === 'Fosfolipidy')
  const aminoData = nutritionfields.filter((field) => field.nazwaGrupy === 'Aminokwasy egzogenne')
  const otherData = nutritionfields.filter((field) => field.nazwaGrupy === 'Inne')

  const allIndexes = [generalata, fatData, carbioData, vitaminsData, mineralsData]
  const canCalculate = !(!isProvider && nutritionfields.length > 0)

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
          </CustomAccordion>
          <CustomAccordion title={'Wartości odżywcze'}>
            <CustomAccordion title={'Ogólne wartości'}>
              <div>
                <div>PAR 2*</div>
                <span>g</span>
                <CustomSwitch
                  value={fields.par2}
                  checked={fields.par2}
                  required={true}
                  onChange={(e, v) => handleFields({ target: { value: v } }, { field: 'par2' }, setFields, fields)}
                />
                <span>ml</span>
              </div>
              <CustomTextField
                onChange={(e) => setPorcja(e.target.value)}
                size='small'
                className='porcja'
                type={'number'}
                value={porcja}
                InputLabelProps={editMode ? { shrink: true } : {}}
                label={'Porcja'}
              />
              {generalata.map((f, key) => {
                const isWartosc = f.nazwaGrupy === 'Wartość Energetyczna'

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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        minNumber={isWartosc ? 1 : 0}
                        maxNumber={isWartosc ? 6 : 3}
                        className='index'
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      type={'number'}
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Witaminy'}>
              {vitaminsData.map((f, key) => {
                const isTotal = f.nazwa === 'Total'

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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        disabled={isTotal}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode || isTotal ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Minerały'}>
              {mineralsData.map((f, key) => {
                const isTotal = f.nazwa === 'Total'
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        disabled={isTotal}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode || isTotal ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Omega-3'}>
              {OmegaData.map((f, key) => {
                const isTotal = f.nazwa === 'Total'
                console.log('OKWKD', f)
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        disabled={isTotal}
                        value={f.indeks}
                        InputLabelProps={editMode || isTotal ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Witaminy inne'}>
              {otherVitaminsData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Antyoksydanty'}>
              {antyoksydantyData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Żywe bakterie'}>
              {bacteriasData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Oligo/Polisacharydy'}>
              {oligoData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Glikozydy'}>
              {glokozydyData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Enzymy'}>
              {enzymyData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Kwasy Organiczne'}>
              {kwasyOrgData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Hormony'}>
              {hormonyData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Sterole/Stanole'}>
              {steroleData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Fosfolipidy'}>
              {fosfoData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Aminokwasy egzogenne'}>
              {aminoData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
            <CustomAccordion title={'Inne'}>
              {otherData.map((f, key) => {
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
                      onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'procentRws', e.target.value)}
                      size='small'
                      className='rws'
                      value={f.procentRws}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      type={'number'}
                      label={'Procent RWS'}
                    />
                    {!isProvider && (
                      <CustomTextField
                        onChange={(e) => handleNutritionUpdate(f.nazwaGrupy, f.nazwa, 'indeks', e.target.valueAsNumber)}
                        size='small'
                        className='index'
                        maxNumber={3}
                        type={'number'}
                        value={f.indeks}
                        InputLabelProps={editMode ? { shrink: true } : {}}
                        label={'Indeks'}
                      />
                    )}
                  </div>
                )
              })}
            </CustomAccordion>
          </CustomAccordion>
          {!isProvider && (
            <CustomAccordion title={'Indeksy'}>
              <CustomButton
                disabled={canCalculate}
                text={'Oblicz Indexy'}
                onClick={getCalculatedIndexes}
                className='calculate-indexes'
              />
              {praductIndexFields.map((f, key) => {
                return (
                  <div key={key} className='field'>
                    <CustomTextField
                      disabled
                      onChange={(e) => handleFields(e, f, setFields, fields)}
                      type={f.type}
                      value={indexes[f.field] || 0}
                      InputLabelProps={editMode ? { shrink: true } : {}}
                      label={f.label}
                    />
                  </div>
                )
              })}
            </CustomAccordion>
          )}
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
