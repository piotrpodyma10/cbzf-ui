import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import './ReportManager.scss'

export const ReportManager = ({ reports }) => {
  const [selectedReport, setSelectedReport] = useState(0)

  const handleChange = (event) => {
    setSelectedReport(event.target.value)
  }

  return (
    <div className='report-manager'>
      <FormControl className='select'>
        <InputLabel>Raport</InputLabel>
        <Select value={selectedReport} label='Raport' onChange={handleChange}>
          {reports.map((report, index) => {
            return <MenuItem value={index}>{report.title}</MenuItem>
          })}
        </Select>
      </FormControl>
      {reports.map((report, index) => {
        if (index === selectedReport) {
          return <div>{report.component}</div>
        }
      })}
    </div>
  )
}
