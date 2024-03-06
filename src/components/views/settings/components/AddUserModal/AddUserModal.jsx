import React, { useState } from 'react'
import CustomModal from '../../../../common/modal/CustomModal'
import { CustomButton } from '../../../../common/customButton/CustomButton'
import { EMAIL_REGEX, handleFields } from '../../../../../utils/fieldsUtils'
import CustomTextField from '../../../../common/customTextField/CustomTextField'
import { CustomSelect } from '../../../../common/customSelect/CustomSelect'
import './AddUserModal.scss'
import { roles } from '../../../../../utils/userUtils'
import { addUser } from '../../../../../features/services/auth.service'
import { toast } from 'react-toastify'

export const AddUserModal = ({ handleClose, open, fetchUsers }) => {
  const [fields, setFields] = useState({})

  const allFields = [
    { field: 'firstName', type: 'string', label: 'Imie' },
    { field: 'lastName', type: 'string', label: 'Nazwisko' },
    { field: 'password', type: 'password', label: 'Hasło' },
    { field: 'email', type: 'string', label: 'Email' },
    { field: 'role', type: 'string', label: 'Rola' },
  ]
  const isDisabled = fields && Object.keys(fields)?.length >= allFields?.length && !!EMAIL_REGEX.test(fields.email)

  const saveData = () => {
    addUser([fields])
      .then((response) => {
        if (response.status) {
          toast.success('Użytkownik został dodany')
          fetchUsers()
          close()
        }
      })
      .catch((error) => {
        console.log('Error', error)
        toast.error('Pojawił się problem dodając użytkownika')
      })
  }

  const close = () => {
    setFields({})
    handleClose()
  }

  return (
    <CustomModal handleClose={close} open={open} className='add-user-modal'>
      <div className='container'>
        <div className='title'>Dodaj Użytkownika</div>
        {allFields.map((f, key) => {
          if (f.field === 'role') {
            return (
              <CustomSelect
                handleChange={(e) => handleFields(e, f, setFields, fields)}
                value={fields[f.field]}
                label={f.label}
                options={roles}
                className='roles-select'
              />
            )
          }

          return (
            <div key={key} className='field'>
              <CustomTextField onChange={(e) => handleFields(e, f, setFields, fields)} type={f.type} label={f.label} />
            </div>
          )
        })}
        <CustomButton text={'Dodaj'} disabled={!isDisabled} onClick={saveData} className='add-button' />
      </div>
    </CustomModal>
  )
}
