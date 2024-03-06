import React, { useState } from 'react'
import CustomModal from '../../../modal/CustomModal'
import { login } from '../../../../../features/redux/auth/authSlice'
import { useDispatch } from 'react-redux'
import CustomTextField from '../../../customTextField/CustomTextField'
import { CustomButton } from '../../../customButton/CustomButton'
import { EMAIL_REGEX } from '../../../../../utils/fieldsUtils'
import './SignInModal.scss'

function SignInModal({ open, handleClose }) {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isDisabled = email.length > 0 && password.length > 0 && !!EMAIL_REGEX.test(email)

  const handleSignIn = () => {
    dispatch(login({ email, password })).then(({ payload }) => {
      const { error } = payload
      if (error) {
        setError(error)
        return
      }

      handleClose()
    })
  }

  const close = () => {
    setEmail('')
    setPassword('')
    setError('')
    handleClose()
  }

  return (
    <CustomModal className='sign-in-modal' open={open} handleClose={close}>
      <div className='title'>Panel logowania</div>
      <CustomTextField onChange={(e) => setEmail(e.target.value)} label='Login' />
      <CustomTextField onChange={(e) => setPassword(e.target.value)} label='Hasło' variant='outlined' type='password' />
      {error && <div className='error'>{error}</div>}
      <CustomButton text={'Zaloguj'} disabled={!isDisabled} onClick={handleSignIn} />
    </CustomModal>
  )
}

export default SignInModal
