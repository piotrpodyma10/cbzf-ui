import { Button } from '@mui/material'
import React from 'react'
import './CustomButton.scss'

export const CustomButton = ({ className, text, onCLick, ...rest }) => {
  return (
    <Button className={`custom-button ${className}`} onClick={onCLick} {...rest}>
      {text}
    </Button>
  )
}
