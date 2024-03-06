import React from 'react'
import CustomModal from '../../../../common/modal/CustomModal'
import { CustomButton } from '../../../../common/customButton/CustomButton'
import { deleteUser } from '../../../../../features/services/auth.service'
import { toast } from 'react-toastify'
import './DeleteUserModal.scss'

export const DeleteUserModal = ({ open, handleClose, userData, fetchUsers }) => {
  const { firstName, lastName, email, idUser } = userData

  const deleteData = () => {
    deleteUser(idUser)
      .then((response) => {
        if (response.status) {
          toast.success('Użytkownik został usunięty')
          fetchUsers()
          handleClose()
        }
      })
      .catch((error) => {
        console.log('Error', error)
        toast.error('Pojawił się problem usuwając użytkownika')
      })
  }

  return (
    <CustomModal open={open} handleClose={handleClose} className='delete-user-modal'>
      <div className='title'>Czy na pewno chcesz usunąć tego użytkownika?</div>
      <div className='details'>
        Użytkownik: {firstName} {lastName}
      </div>
      <div className='details'>Email: {email}</div>
      <CustomButton onCLick={deleteData} text={'Zatwierdz'} />
    </CustomModal>
  )
}
