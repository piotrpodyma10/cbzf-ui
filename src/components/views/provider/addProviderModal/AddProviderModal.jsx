import React, { useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { Button } from '@mui/material'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { toast } from 'react-toastify'
import { CustomSelect } from '../../../common/customSelect/CustomSelect'
import { addProvider } from '../../../../features/services/provider/provider.service'
import { handleFields } from '../../../../utils/fieldsUtils'
import './AddProviderModal.scss'

export default function AddProviderModal({ open, handleClose }) {
  const [fields, setFields] = useState({})

  const allFields = [
    { field: 'pi', type: 'string', label: 'Rodzaj dostawcy', isRequired: true },
    { field: 'ileKodowEan', type: 'number', label: 'Ile Kodów EAN', isRequired: true },
    { field: 'par1', type: 'number', label: 'PAR 1', isRequired: true },
    { field: 'nazwaDostawca', type: 'string', label: 'Nazwa Dostawcy', isRequired: true },
    { field: 'adresDostawca', type: 'string', label: 'Adres', isRequired: true },
    { field: 'idKraj', type: 'number', label: 'Id Kraj', isRequired: true },
    { field: 'nipDostawca', type: 'string', label: 'NIP', isRequired: true },
    { field: 'rmsdDostawca', type: 'number', label: 'RMS', isRequired: true },
    { field: 'kontaktDostawca', type: 'string', label: 'Kontakt', isRequired: true },
    { field: 'kodProdEan1', type: 'string', label: 'Kod EAN 1', isRequired: true },
    { field: 'kodProdEan2', type: 'string', label: 'Kod EAN 2' },
    { field: 'kodProdEan3', type: 'string', label: 'Kod EAN 3' },
    { field: 'kodProdEan4', type: 'string', label: 'Kod EAN 4' },
    { field: 'kodProdEan5', type: 'string', label: 'Kod EAN 5' },
    { field: 'kodProdEan6', type: 'string', label: 'Kod EAN 6' },
    { field: 'kodProdEan7', type: 'string', label: 'Kod EAN 7' },
    { field: 'kodProdEan8', type: 'string', label: 'Kod EAN 8' },
  ]

  const providerTypes = [
    { label: 'Importer', value: 'importer' },
    { label: 'Producent', value: 'producent' },
  ]

  const requiredFields = allFields.filter((field) => field.isRequired)
  const isDisabled = requiredFields.some((field) => {
    const value = fields[field.field]
    return (
      value === undefined ||
      value === null ||
      (typeof value === 'string' && value.trim() === '') ||
      (typeof value === 'number' && isNaN(value))
    )
  })

  const close = () => {
    handleClose()
  }

  const saveData = () => {
    addProvider([fields])
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

  return (
    <CustomModal className='add-provider-modal' open={open} handleClose={close}>
      <div className='container'>
        <div className='title'>Dodaj Dostawce</div>
        {allFields.map((f, key) => {
          if (key === 0) {
            return (
              <CustomSelect
                handleChange={(e) => handleFields(e, f, setFields, fields)}
                value={fields[f.field]}
                label={f.label}
                options={providerTypes}
                className='provider-select'
              />
            )
          }

          return (
            <div className='field'>
              <CustomTextField
                key={key}
                onChange={(e) => handleFields(e, f, setFields, fields)}
                type={f.type}
                label={f.label}
              />
            </div>
          )
        })}
        <Button disabled={isDisabled} onClick={saveData} className='add-button'>
          Dodaj
        </Button>
      </div>
    </CustomModal>
  )
}
