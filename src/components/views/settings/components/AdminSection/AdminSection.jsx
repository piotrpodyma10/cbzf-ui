import React from 'react'
import RoleManagement from '../RoleManagement/RoleManagement'
import CustomTabs from '../../../../common/customTabs/CustomTabs'
import { MyProfile } from '../../../provider/myProvider/MyProfile'

const AdminSection = () => {
  const tabs = [
    { label: 'Konto', content: <MyProfile /> },
    { label: 'Użytkownicy', content: <RoleManagement /> },
  ]

  return (
    <div>
      <CustomTabs tabs={tabs} />
    </div>
  )
}

export default AdminSection
