import { TextField } from '@mui/material'
import React from 'react'
import './CustomTextField.scss'

function CustomTextField({ className, label, onChange, maxNumber = null, type, ...rest }) {
  const inputProps = type === 'number' ? { min: 0, max: maxNumber, inputMode: 'numeric' } : {}
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
