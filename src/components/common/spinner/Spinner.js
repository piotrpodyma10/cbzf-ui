import { CircularProgress } from '@mui/material'
import React from 'react'
import './Spinner.scss'

function Spinner({ fullScreen, size = 40, thickness = 4 }) {
  return (
    <div className={`spinner ${fullScreen && 'full-screen'} `}>
      <div className='spinner-container'>
        <CircularProgress
          variant='determinate'
          className='bottom-spinner'
          size={size}
          thickness={thickness}
          value={100}
        />
        <CircularProgress
          variant='indeterminate'
          disableShrink
          className='top-spinner'
          size={size}
          thickness={thickness}
        />
      </div>
    </div>
  )
}

export default Spinner
