import React from 'react'
import Switch from '@mui/material/Switch'
import './CustomSwitch.scss'

export const CustomSwitch = ({ ...rest }) => {
  return <Switch className='custom-switch' {...rest} />
}
