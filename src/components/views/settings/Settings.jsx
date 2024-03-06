import React from 'react'
import AdminSection from './components/AdminSection/AdminSection'
import Card from '../../common/card/Card'
import { MyProfile } from '../provider/myProvider/MyProfile'
import './Settings.scss'
import { useSelector } from 'react-redux'
import { auth } from '../../../features/redux/auth/authSlice'

function Settings() {
  const { isAdmin } = useSelector(auth)

  return <Card className='settings'>{isAdmin ? <AdminSection /> : <MyProfile />}</Card>
}

export default Settings
