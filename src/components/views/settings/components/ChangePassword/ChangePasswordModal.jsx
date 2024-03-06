import React, { useState } from 'react'
import CustomModal from '../../../../common/modal/CustomModal'
import CustomTextField from '../../../../common/customTextField/CustomTextField'
import { Button } from '@mui/material'
import './ChangePasswordModal.scss'


const ChangePasswordModal = ({ open, handleClose }) => {

    // [password, setPassword] = useState('')
    // [newPassword, setNewPassword] = useState('')

    const close = () => {
        handleClose()
    }

    const updatePassword = (e) => {
        setNewPassword(e.target.value)
        handleClose()
    }


  return (
    <CustomModal open={open} handleClose={close} className={'container'}>
        <div className='title'>Edytuj hasło</div>
        <div className='content'>
            <CustomTextField className='change-color' label={'Stare hasło'} />
            <CustomTextField className='change-color' label={'Nowe hasło'} />
            <CustomTextField className='change-color' label={'Powtórz hasło'} />
            <Button onClick={updatePassword} className={'button'}>
                Zaktualizuj
            </Button>
        </div>
    </CustomModal>
  )
}

export default ChangePasswordModal