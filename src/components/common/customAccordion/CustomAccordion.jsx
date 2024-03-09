import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'
import './CustomAccordion.scss'

export const CustomAccordion = ({ title, children }) => {
  return (
    <Accordion className='custom-accordion'>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}><span className='title'>{title}</span></AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}
