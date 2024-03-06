import React, { useEffect, useState } from 'react'
import CustomModal from '../../../../common/modal/CustomModal'
import { CustomSelect } from '../../../../common/customSelect/CustomSelect'
import CustomTextField from '../../../../common/customTextField/CustomTextField'
import { CustomButton } from '../../../../common/customButton/CustomButton'
import { roles } from '../../../../../utils/userUtils'
import { handleFields } from '../../../../../utils/fieldsUtils'
import './SettingsModal.scss'
import { editUser } from '../../../../../features/services/auth.service'
import { toast } from 'react-toastify'

const SettingsModal = ({ open, handleClose, userData, fetchUsers }) => {
  const { idUser } = userData
  const [fields, setFields] = useState(userData)

  const allFields = [
    { field: 'firstName', type: 'string', label: 'Imie' },
    { field: 'lastName', type: 'string', label: 'Nazwisko' },
    { field: 'password', type: 'password', label: 'Hasło' },
    { field: 'email', type: 'string', label: 'Email' },
    { field: 'role', type: 'string', label: 'Rola' },
  ]
  const isDisabled = fields && Object.keys(fields)?.length >= allFields?.length

  useEffect(() => {
    if (userData) {
      setFields(userData)
    }
  }, [userData, open])

  const saveData = () => {
    editUser(idUser, fields)
      .then((response) => {
        if (response.status) {
          toast.success('Użytkownik został zaktualizowany')
          fetchUsers()
          close()
        }
      })
      .catch((error) => {
        console.log('Error', error)
        toast.error('Pojawił się problem aktualizować użytkownika')
      })
  }

  const close = () => {
    setFields({})
    handleClose()
  }

  return (
    <CustomModal className={'settings-modal'} open={open} handleClose={close}>
      <div className='container'>
        <div className='title'>Edytuj Użytkownika</div>
        {allFields.map((f, key) => {
          if (f.field === 'role') {
            return (
              <CustomSelect
                handleChange={(e) => handleFields(e, f, setFields, fields)}
                value={fields?.[f.field]}
                label={f.label}
                InputLabelProps={{ shrink: true }}
                options={roles}
                className='roles-select'
              />
            )
          }

          return (
            <div key={key} className='field'>
              <CustomTextField
                onChange={(e) => handleFields(e, f, setFields, fields)}
                type={f.type}
                value={fields?.[f.field]}
                label={f.label}
                InputLabelProps={{ shrink: true }}
              />
            </div>
          )
        })}
        <CustomButton text={'Zaktualizuj'} disabled={!isDisabled} onClick={saveData} className='add-button' />
      </div>
    </CustomModal>
  )
}

export default SettingsModal
