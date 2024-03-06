import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import SignInModal from './signInModal/SignInModal'
import './SignInUser.scss'

function SignInUser() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className='sign-in-user'>
      <div className='text-container' onClick={handleOpen}>
        <AccountCircleIcon />
        <div className='title'>Zaloguj</div>
      </div>
      <SignInModal open={open} handleClose={handleClose} />
    </div>
  )
}

export default SignInUser
