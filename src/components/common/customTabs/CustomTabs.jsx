import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import './CustomTabs.scss'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export default function CustomTabs({ tabs }) {
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box className='custom-tabs' sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          {tabs.map((tab, index) => {
            return <Tab key={index} label={tab.label} />
          })}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => {
        const { content } = tab
        return (
          <CustomTabPanel key={index} value={value} index={index}>
            {content}
          </CustomTabPanel>
        )
      })}
    </Box>
  )
}
