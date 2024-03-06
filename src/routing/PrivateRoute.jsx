import React from 'react'
import { Navigate } from 'react-router-dom'
import { hasAccess } from '../utils/userUtils'
import { useSelector } from 'react-redux'
import { auth } from '../features/redux/auth/authSlice'

export const PrivateRoute = ({ children, access }) => {
  const { user, isProvider, isAdmin } = useSelector(auth)

  if (!hasAccess(access, user)) {
    return <Navigate to='/' />
  }

  return children
}
