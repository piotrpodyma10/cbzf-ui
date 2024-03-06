import React, { useState } from 'react'
import CustomModal from '../../../../common/modal/CustomModal'
import { newProviderColumns, providerTypes } from '../../../../../utils/dataUtils'
import { areRequiredFieldsSet, handleFields } from '../../../../../utils/fieldsUtils'
import { CustomButton } from '../../../../common/customButton/CustomButton'
import CustomTextField from '../../../../common/customTextField/CustomTextField'
import { addPendingProvider } from '../../../../../features/services/provider/provider.service'
import { CustomSelect } from '../../../../common/customSelect/CustomSelect'
import { toast } from 'react-toastify'
import './ProviderProfileModal.scss'

export const ProviderProfileModal = ({ open, handleClose, userId, fetchPendingProvider }) => {
  const [fields, setFields] = useState({})

  const saveData = () => {
    addPendingProvider([{ ...fields, idDostawca: userId }])
      .then((data) => {
        if (data.status === 200) {
          toast.success('Dostawca został uzupełniony i wysłany do akceptacji przez administratora')
          fetchPendingProvider()
          return close()
        }
      })
      .catch((e) => {
        toast.error('Pojawił się błąd zapisując dane')
      })
    close()
  }

  const close = () => {
    setFields({})
    handleClose()
  }

  const isDisabled = areRequiredFieldsSet(fields, newProviderColumns)

  return (
    <CustomModal open={open} handleClose={handleClose} className='provider-profile-modal'>
      <div className='container'>
        <div className='title'>Uzupełnij profil dostawcy</div>
        <div className='details'>
          {newProviderColumns.map((f, key) => {
            if (key === 0) {
              return (
                <CustomSelect
                  handleChange={(e) => handleFields(e, f, setFields, fields)}
                  value={fields[f.id]}
                  label={f.label}
                  options={providerTypes}
                  className='provider-select'
                  required={f.required}
                />
              )
            }

            return (
              <div key={key} className='field'>
                <CustomTextField
                  onChange={(e) => handleFields(e, f, setFields, fields)}
                  type={f.type || 'string'}
                  label={f.label}
                  maxNumber={f.max}
                  name={f.id}
                  value={fields[f.id]}
                  required={f.required}
                />
              </div>
            )
          })}
        </div>
        <div className='button-container'>
          <CustomButton disabled={!isDisabled} text={'Zaakceptuj'} onClick={saveData} className='add-button' />
        </div>
      </div>
    </CustomModal>
  )
}
