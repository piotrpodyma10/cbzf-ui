import React, { useEffect, useState } from 'react'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import { CustomButton } from '../../../common/customButton/CustomButton'
import PendingActionsIcon from '@mui/icons-material/PendingActions'
import { useSelector } from 'react-redux'
import { auth } from '../../../../features/redux/auth/authSlice'
import { ProviderProfileModal } from './providerProfileModal/ProviderProfileModal'
import { getPendingProviders } from '../../../../features/services/provider/provider.service'
import { newProviderColumns } from '../../../../utils/dataUtils'
import ChangePasswordModal from '../../settings/components/ChangePassword/ChangePasswordModal'
import './MyProfile.scss'

export const MyProfile = () => {
  const { user, isProvider } = useSelector(auth)
  const { supplier } = user
  const { id, isApproved } = supplier
  const [open, setOpen] = useState(false)
  const [provider, setProvider] = useState({})
  const [openChangePassword, setOpenChangePassword] = useState(false)
  const isNotApprovedProvider = isProvider && !isApproved

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleOpenChangePassword = () => setOpenChangePassword(true)
  const handleCloseChangePassword = () => setOpenChangePassword(false)

  const fetchPendingProvider = () => {
    if (isProvider) {
      getPendingProviders(id).then((response) => {
        setProvider(response.data[0])
      })
    }
  }

  useEffect(() => {
    fetchPendingProvider()
  }, [])

  return (
    <div className='my-profile'>
      <div className='action-content'>
        <div className='title'>Moje konto</div>
        <div className='modals-actions'>
          {/* <CustomButton
            className='change-password-button'
            onCLick={handleOpenChangePassword}
            text={<div>Zmień hasło</div>}
          /> */}
          {isNotApprovedProvider && <CustomButton onCLick={handleOpen} text={<div>Wypełnij dane</div>} />}
        </div>
      </div>

      <div>
        {isNotApprovedProvider && (
          <div className='info'>
            <PendingActionsIcon />
            <div className='info-message'>Konto dostawcy nie zostało jeszcze zatwierdzone</div>
          </div>
        )}
      </div>
      <div className='account-container'>
        <div>
          <div className='title'>Dane Konta</div>
          <div className='container'>
            <div className='account'>
              <CustomTextField key={'x1'} label={'Imie'} defaultValue={user.firstName} disabled={true} />
              <CustomTextField key={'x2'} label={'Nazwisko'} defaultValue={user.lastName} disabled={true} />
              <CustomTextField key={'x3'} label={'Email'} defaultValue={user.email} disabled={true} />
              <CustomTextField key={'x4'} label={'Rola'} defaultValue={user.roles[0]} disabled={true} />
            </div>
          </div>
        </div>

        {isProvider && (
          <div>
            <div className='title'>Dane dostawcy</div>
            <div className='container'>
              <div className='provider'>
                {newProviderColumns.map((column, index) => {
                  return (
                    <CustomTextField
                      key={index}
                      label={column.label}
                      value={provider?.[column.id]}
                      InputLabelProps={{ shrink: true }}
                      disabled={true}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        )}
      </div>
      <ChangePasswordModal open={openChangePassword} handleClose={handleCloseChangePassword} />
      {isProvider && (
        <ProviderProfileModal
          open={open}
          handleClose={handleClose}
          userId={id}
          fetchPendingProvider={fetchPendingProvider}
        />
      )}
    </div>
  )
}
