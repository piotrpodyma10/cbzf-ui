import React, { useEffect, useState } from 'react'
import DataTable from '../../../common/dataTable/DataTable'
import { getNotApprovedProviders, getPendingProviders } from '../../../../features/services/provider/provider.service'
import './PendingProviders.scss'
import { ApproveProviderModal } from '../approveProviderModal/ApproveProviderModal'
import { CustomButton } from '../../../common/customButton/CustomButton'
import StarHalfIcon from '@mui/icons-material/StarHalf'
import BeenhereIcon from '@mui/icons-material/Beenhere'
import { pendingProviderColumns, providerColumns } from '../../../../utils/dataUtils'

export const PendingProviders = () => {
  const [providers, setProviders] = useState([])
  const [open, setOpen] = useState(false)
  const [provider, setProvider] = useState({})

  const handleOpen = (provider) => {
    setProvider(provider)
    setOpen(true)
  }
  const handleClose = () => {
    setProvider({})
    setOpen(false)
  }

  const fetchPendingProviders = () => {
    getNotApprovedProviders().then((providers) => {
      const pendingProviders = providers.data.map((provider) => ({
        ...provider,
        action: <CustomButton text={<BeenhereIcon />} onClick={() => handleOpen(provider)} />,
      }))
      setProviders(pendingProviders)
    })
  }

  useEffect(() => {
    fetchPendingProviders()
  }, [])

  const tableData = {
    rows: providers,
    columns: pendingProviderColumns,
  }

  return (
    <div className='pending-providers'>
      <DataTable data={tableData} />
      <ApproveProviderModal
        provider={provider}
        open={open}
        handleClose={handleClose}
        fetchPendingProviders={fetchPendingProviders}
      />
    </div>
  )
}
