import React from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import './CustomSelect.scss'

export const CustomSelect = ({ label, handleChange, options, value = '', className, required }) => {
  return (
    <FormControl className={`custom-select ${className}`} required={required}>
      <InputLabel>{label}</InputLabel>
      <Select value={value} label={label} onChange={handleChange}>
        {options.map((option, key) => (
          <MenuItem key={key} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
