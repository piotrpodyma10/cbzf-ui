import React, { useState } from 'react'
import CustomModal from '../../../../common/modal/CustomModal'
import CustomTextField from '../../../../common/customTextField/CustomTextField'
import { CustomButton } from '../../../../common/customButton/CustomButton'
import { toast } from 'react-toastify'
import './EditProfileModal.scss'

export const EditProfileModal = ({ handleClose, open, data }) => {
  const [form, setForm] = useState(data)
  const hasValues = form.filter((field) => field.value.length > 0)
  const isDisabled = hasValues.length === data.length

  const update = () => {
    toast.success('Dane zostały prawidłowo wysłane do Eksperta')
    handleClose()
  }

  const editForm = (field, value) => {
    setForm((prevItems) => prevItems.map((item) => (item.field === field ? { ...item, value: value } : item)))
  }

  return (
    <CustomModal className='edit-profile-modal' open={open} handleClose={handleClose}>
      <div className='container'>
        <div className='title'>Edytuj dane</div>
        <div className='sub-title'>Nowe dane będą musiały zostać zaakceptowane przez Eksperta</div>
        <div className='details'>
          {form.map((user, key) => (
            <CustomTextField
              key={key}
              label={user.label}
              name={user.field}
              onChange={(e) => editForm(user.field, e.target.value)}
              value={user.value}
            />
          ))}
        </div>
        <div className='button-container'>
          <CustomButton className={'update'} onCLick={update} disabled={!isDisabled} text={'Zaktualizuj'} />
        </div>
      </div>
    </CustomModal>
  )
}
