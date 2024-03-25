import { TextField } from '@mui/material'
import React from 'react'
import './CustomTextField.scss'

function CustomTextField({ className, label, onChange, minNumber = 0, maxNumber = null, type, ...rest }) {
  const inputProps = type === 'number' ? { min: minNumber, max: maxNumber, inputMode: 'numeric' } : {}
  return (
    <TextField
      className={`custom-text-field ${className}`}
      onChange={onChange}
      inputProps={inputProps}
      type={type}
      label={label}
      {...rest}
    />
  )
}

export default CustomTextField
