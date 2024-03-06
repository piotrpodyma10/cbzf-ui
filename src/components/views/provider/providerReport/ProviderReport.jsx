import React, { useEffect, useState } from 'react'
import { getProviders } from '../../../../features/services/provider/provider.service'
import './ProviderReport.scss'
import DataTable from '../../../common/dataTable/DataTable'

export const ProviderReport = () => {
  const [providers, setProviders] = useState([])

  useEffect(() => {
    getProviders().then((providers) => {
      setProviders(providers.data)
    })
  }, [])

  const tableData = {
    rows: providers,
    columns: [
      { label: 'ID', id: 'idDostawca' },
      { label: 'Rodzaj dostawcy', id: 'pi' },
      { label: 'Nazwa', id: 'nazwaDostawca' },
      { label: 'Adres', id: 'adresDostawca' },
      { label: 'Kraj', id: 'idKraj' },
      { label: 'NIP', id: 'nipDostawca' },
      { label: 'Kontakt', id: 'kontaktDostawca' },
      { label: 'Kod Dostawcy', id: 'kodProdEan1' },
    ],
  }

  return (
    <div className='provider-report'>
      <DataTable data={tableData} />
    </div>
  )
}
