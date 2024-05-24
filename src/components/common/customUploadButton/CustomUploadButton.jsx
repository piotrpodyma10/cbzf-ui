import React from 'react'
import { styled } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { CustomButton } from '../customButton/CustomButton'
import './CustomUploadButton.scss'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export const CustomUploadButton = ({ ...rest }) => {
  return (
    <div className='custom-upload-button'>
      <CustomButton
        component='label'
        role={undefined}
        variant='contained'
        accept='image/*'
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        text={
          <>
            Dodaj Etykiete
            <VisuallyHiddenInput type='file' />
          </>
        }
        type='file'
        {...rest}
      />
    </div>
  )
}
