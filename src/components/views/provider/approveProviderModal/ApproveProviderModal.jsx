import React, { useEffect, useState } from 'react'
import CustomModal from '../../../common/modal/CustomModal'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { CustomButton } from '../../../common/customButton/CustomButton'
import { providerColumns } from '../../../../utils/dataUtils'
import { handleFields } from '../../../../utils/fieldsUtils'
import './ApproveProviderModal.scss'
import { addPendingProvider, addProvider } from '../../../../features/services/provider/provider.service'
import { toast } from 'react-toastify'

export const ApproveProviderModal = ({ open, handleClose, provider, fetchPendingProviders }) => {
  const [fields, setFields] = useState(provider)

  const saveData = () => {
    addProvider([fields])
      .then((data) => {
        if (data.status === 200) {
          toast.success('Dostawca został zatwierdzony')
          fetchPendingProviders()
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

  useEffect(() => {
    if (provider) {
      setFields(provider)
    }
  }, [provider])

  return (
    <CustomModal open={open} handleClose={handleClose} className='approve-provider-modal'>
      <div className='container'>
        <div className='title'>Czy na pewno chcesz zaakceptować tego dostawce?</div>
        <div className='details'>
          {providerColumns.map((f, key) => {
            const isDisabled = key === 0
            return (
              <div key={key} className='field'>
                <CustomTextField
                  onChange={(e) => handleFields(e, f, setFields, fields)}
                  type={f.type || 'string'}
                  label={f.label}
                  disabled={isDisabled}
                  maxNumber={f.max}
                  name={f.id}
                  value={fields[f.id]}
                />
              </div>
            )
          })}
        </div>
        <div className='button-container'>
          <CustomButton text={'Zaakceptuj'} onClick={saveData} className='add-button' />
        </div>
      </div>
    </CustomModal>
  )
}
