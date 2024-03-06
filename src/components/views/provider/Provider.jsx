import React from 'react'
import CustomTabs from '../../common/customTabs/CustomTabs'
import ProviderPanel from './providerPanel/ProviderPanel'
import Card from '../../common/card/Card'
import { ProviderReport } from './providerReport/ProviderReport'
import { useSelector } from 'react-redux'
import { auth } from '../../../features/redux/auth/authSlice'
import { PendingProviders } from './pendingProviders/PendingProviders'
import './Provider.scss'

function Provider() {
  const { isAdmin } = useSelector(auth)

  const tabs = [
    { label: 'Panel', content: <ProviderPanel /> },
    { label: 'RAPORT', content: <ProviderReport /> },
    isAdmin && { label: 'Do Akceptacji', content: <PendingProviders /> },
  ]

  return (
    <Card className='provider'>
      <CustomTabs tabs={tabs} />
    </Card>
  )
}

export default Provider
