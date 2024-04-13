import React, { useEffect, useState } from 'react'
import DataTable from '../../../common/dataTable/DataTable'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { getProviders } from '../../../../features/services/provider/provider.service'
import AddProviderModal from '../addProviderModal/AddProviderModal'
import CustomTextField from '../../../common/customTextField/CustomTextField'
import './ProviderPanel.scss'

export default function ProviderPanel() {
  const [providers, setProviders] = useState([])
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    getProviders().then((providers) => {
      setProviders(providers.data)
    })
  }, [])

  const tableData = {
    rows: providers,
    columns: [
      { label: 'ID', id: 'idDostawca' },
      { label: 'Ile kodów EAN', id: 'ileKodowEan' },
      { label: 'Par', id: 'par1' },
      { label: 'Nazwa', id: 'nazwaDostawca' },
      { label: 'Adres', id: 'adresDostawca' },
      { label: 'ID Kraju', id: 'idKraj' },
      { label: 'NIP', id: 'nipDostawca' },
      { label: 'Kontakt', id: 'kontaktDostawca' },
      { label: 'RMSD Dostawca', id: 'rmsdDostawca' },
      { label: 'Kod EAN 1', id: 'kodProdEan1' },
      { label: 'Kod EAN 2', id: 'kodProdEan2' },
      { label: 'Kod EAN 3', id: 'kodProdEan3' },
      { label: 'Kod EAN 4', id: 'kodProdEan4' },
      { label: 'Kod EAN 5', id: 'kodProdEan5' },
      { label: 'Kod EAN 6', id: 'kodProdEan6' },
      { label: 'Kod EAN 7', id: 'kodProdEan7' },
      { label: 'Kod EAN 8', id: 'kodProdEan8' },
    ],
  }

  return (
    <div className='provider-panel'>
      <div className='action-conent'>
        <div className='filters'>
          <CustomTextField className='filter' label={'Nazwa | NIP'} size='small' />
        </div>
        <Button onClick={handleOpen}>
          <AddIcon />
          Dodaj
        </Button>
      </div>
      <DataTable data={tableData} />
      <AddProviderModal open={open} handleClose={handleClose} />
    </div>
  )
}
