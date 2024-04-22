import React, { useEffect, useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { Button } from '@mui/material'
import { CustomSwitch } from '../../../common/customSwitch/CustomSwitch'
import { toast } from 'react-toastify'
import { rateProductFields } from '../../../../utils/dataUtils'
import { rateProduct } from '../../../../features/services/rate/rate.service'
import './RateModal.scss'

export const RateModal = ({ open, handleClose, product = {}, fetchProducts }) => {
  const [fields, setFields] = useState(rateProductFields)
  const certificates = rateProductFields.filter((field) => field.nazwaGrupa === 'Posiadane Certyfikaty')
  const noIngredients = rateProductFields.filter((field) => field.nazwaGrupa === 'Parametry bez składników')
  const noExtra = rateProductFields.filter((field) => field.nazwaGrupa === 'Bez dodatków do żywności')
  const alergens = rateProductFields.filter((field) => field.nazwaGrupa === 'Alegreny (może zawierać)')
  const specific = rateProductFields.filter((field) => field.nazwaGrupa === 'Specyficzne cechy')
  const technology = rateProductFields.filter((field) => field.nazwaGrupa === 'Zastosowane procesy technologiczne')

  useEffect(() => {
    if (fields.length > 0) {
      setFields(fields.map((field) => ({ ...field, idProdukt: product.idProdukt })))
    }
  }, [product])

  const handleUpdate = (id, newValue) => {
    const updatedItems = fields.map((field) => {
      if (field.idParametr === id) {
        return { ...field, value: newValue }
      }
      return field
    })

    setFields(updatedItems)
  }

  const save = () => {
    rateProduct(fields)
      .then((response) => {
        if (response.status === 200) {
          toast.success('Produkt został oceniony')
          fetchProducts()
          handleClose()
        }
      })
      .catch((e) => {
        toast.error('Pojawił się błąd zapisując dane')
      })
  }

  return (
    <CustomModal className='rate-modal' open={open} handleClose={handleClose}>
      <div className='container'>
        <div className='main-title'>Dodaj oceny do produktu {product.nazwaProdukt}</div>
        <div className='title'>Posiadane Certyfikaty</div>
        {certificates.map((ingredient) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{ingredient.nazwaPar}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(ingredient.idParametr, v)} />
            </div>
          )
        })}
        <div className='title'>Bez składników</div>
        {noIngredients.map((extra) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{extra.nazwaPar}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(extra.idParametr, v)} />
            </div>
          )
        })}
        <div className='title'>Bez dodatków do żywności</div>
        {noExtra.map((extra) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{extra.nazwaPar}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(extra.idParametr, v)} />
            </div>
          )
        })}
        <div className='title'>Alergeny</div>
        {alergens.map((alergen) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{alergen.nazwaPar}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(alergen.idParametr, v)} />
            </div>
          )
        })}
        <div className='title'>Specyficzne Cechy</div>
        {specific.map((alergen) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{alergen.nazwaPar}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(alergen.idParametr, v)} />
            </div>
          )
        })}
        <div className='title'>Zastosowane procesy technologiczne</div>
        {technology.map((alergen) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{alergen.nazwaPar}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(alergen.idParametr, v)} />
            </div>
          )
        })}
        <div className='save'>
          <Button onClick={save}>Zapisz</Button>
        </div>
      </div>
    </CustomModal>
  )
}
