import React, { useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import { Button } from '@mui/material'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { toast } from 'react-toastify'
import './AddProviderModal.scss'
import { CustomSelect } from '../../../common/customSelect/CustomSelect'
import { addProvider } from '../../../../features/services/provider/provider.service'
import { handleFields } from '../../../../utils/fieldsUtils'

export default function AddProviderModal({ open, handleClose }) {
  const [fields, setFields] = useState({})

  const allFields = [
    { field: 'pi', type: 'string', label: 'Rodzaj dostawcy' },
    { field: 'ileKodowEan', type: 'number', label: 'Ile Kodów EAN' },
    { field: 'par1', type: 'number', label: 'PAR 1' },
    { field: 'nazwaDostawca', type: 'string', label: 'Nazwa Dostawcy' },
    { field: 'adresDostawca', type: 'string', label: 'Adres' },
    { field: 'idKraj', type: 'number', label: 'Id Kraj' },
    { field: 'nipDostawca', type: 'string', label: 'NIP' },
    { field: 'rmsdDostawca', type: 'number', label: 'RMS' },
    { field: 'kontaktDostawca', type: 'string', label: 'Kontakt' },
    { field: 'dlugKodEan1', type: 'number', label: 'Dług Kod EAN 1' },
    { field: 'kodProdEan1', type: 'string', label: 'Kod EAN 1' },
    { field: 'dlugKodEan2', type: 'number', label: 'Dług Kod EAN 2' },
    { field: 'kodProdEan2', type: 'string', label: 'Kod EAN 2' },
    { field: 'dlugKodEan3', type: 'number', label: 'Dług Kod EAN 3' },
    { field: 'kodProdEan3', type: 'string', label: 'Kod EAN 3' },
    { field: 'dlugKodEan4', type: 'number', label: 'Dług Kod EAN 4' },
    { field: 'kodProdEan4', type: 'string', label: 'Kod EAN 4' },
  ]

  const providerTypes = [
    { label: 'Importer', value: 'importer' },
    { label: 'Producent', value: 'producent' },
  ]

  const isDisabled = Object.keys(fields).length === allFields.length

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
        <Button disabled={!isDisabled} onClick={saveData} className='add-button'>
          Dodaj
        </Button>
      </div>
    </CustomModal>
  )
}
