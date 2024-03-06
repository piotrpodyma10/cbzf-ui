import React, { useEffect, useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { Button } from '@mui/material'
import { CustomSwitch } from '../../../common/customSwitch/CustomSwitch'
import { toast } from 'react-toastify'
import { rateProductFields } from '../../../../utils/dataUtils'
import './RateModal.scss'
import { rateProduct } from '../../../../features/services/rate/rate.service'

export const RateModal = ({ open, handleClose, product = {}, fetchProducts }) => {
  const [fields, setFields] = useState(rateProductFields)

  const noIngredients = [
    {
      text: 'Bez glutenu',
      id: 1,
    },
    {
      text: 'O bardzo niskiej zawartości glutenu',
      id: 2,
    },
    {
      text: 'Bez beta kazeiny A1',
      id: 3,
    },
    {
      text: 'Bez mleka krowiego i produktów pochodnych',
      id: 4,
    },
    {
      text: 'Bez laktozy',
      id: 5,
    },
    {
      text: 'Wegański (bez produktów zwierzęcych',
      id: 6,
    },
  ]

  const noExtras = [
    {
      text: 'Bez barwników',
      id: 7,
    },
    {
      text: 'Bez wzmacniaczy smaku',
      id: 8,
    },
    {
      text: 'Bez azotanów',
      id: 9,
    },
    {
      text: 'Bez dodatków do żywności',
      id: 10,
    },
    {
      text: 'Bez aromatów',
      id: 11,
    },
  ]
  const alergens = [{ text: 'Gluten', id: 12 }]
  console.log('product', fields)

  useEffect(() => {
    if (fields.length > 0) {
      setFields(fields.map((field) => ({ ...field, idProdukt: product.idProdukt })))
    }
  }, [])

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
        <div className='title'>Parametry bez składników</div>
        {noIngredients.map((ingredient) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{ingredient.text}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(ingredient.id, v)} />
            </div>
          )
        })}
        <div className='title'>Parametry bez dodatków</div>
        {noExtras.map((extra) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{extra.text}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(extra.id, v)} />
            </div>
          )
        })}
        <div className='title'>Alergeny</div>
        {alergens.map((alergen) => {
          return (
            <div className='parameter-container'>
              <div className='parameter'>{alergen.text}</div>
              <CustomSwitch onChange={(e, v) => handleUpdate(alergen.id, v)} />
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
