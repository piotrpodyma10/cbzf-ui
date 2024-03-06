import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'
import DataTable from '../../../../common/dataTable/DataTable'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import AddIcon from '@mui/icons-material/Add'
import SettingsModal from '../SettingsModal/SettingsModal'
import { CustomButton } from '../../../../common/customButton/CustomButton'
import { AddUserModal } from '../AddUserModal/AddUserModal'
import axios from 'axios'
import { config } from '../../../../../utils/config'
import { DeleteUserModal } from '../DeleteUserModal/DeleteUserModal'
import DeleteIcon from '@mui/icons-material/Delete'
import './RoleManagement.scss'

const RoleManagement = () => {
  const [openEdit, setEdit] = useState(false)
  const [openAdd, setAdd] = useState(false)
  const [openDelete, setDelete] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})

  const ActionButton = ({ user }) => (
    <div>
      <CustomButton
        text={<BorderColorIcon />}
        onClick={() => {
          const { dateAdded, ...userInfo } = user
          setUser(userInfo)
          setEdit(true)
        }}
      />
      <CustomButton
        className='delete-button'
        text={<DeleteIcon />}
        onClick={() => {
          setUser(user)
          setDelete(true)
        }}
      />
    </div>
  )

  const fetchUsers = () => {
    axios
      .get(config.endpoints.users, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwb2R5bWFAZi1mb29kLmNvbSIsImlhdCI6MTcwOTUzNjc3MCwiZXhwIjoxNzA5NjIzMTcwLCJyb2xlIjoiQWRtaW5pc3RyYXRvciIsInVzZXJJZCI6OX0.Tbn3miFYXLLomW_Yk5wi9tZ4q3lcsq8vGVW8gxQ8pDE',
        },
      })
      .then((response) => {
        const allUsers = response.data.map((user) => ({
          ...user,
          action: <ActionButton user={user} />,
        }))
        setUsers(allUsers)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // useEffect(() => {
  //   axios.get(config.endpoints.users).then((response) => {
  //     const allUsers = response.data.map((user) => ({
  //       ...user,
  //       action: <ActionButton user={user} />,
  //     }))
  //     setUsers(allUsers)
  //   })
  // }, [])

  const usersData = {
    rows: users,
    columns: [
      { label: 'Imie', id: 'firstName' },
      { label: 'Nazwisko', id: 'lastName' },
      { label: 'Email', id: 'email' },
      { label: 'Rola', id: 'role' },
      { label: 'Akcja', id: 'action' },
    ],
  }

  return (
    <div className='role-management'>
      <div className='action-conent'>
        <CustomButton
          onClick={() => setAdd(true)}
          text={
            <>
              <AddIcon />
              Dodaj
            </>
          }
        ></CustomButton>
      </div>
      <DataTable data={usersData} />
      <AddUserModal open={openAdd} handleClose={() => setAdd(false)} fetchUsers={fetchUsers} />
      <SettingsModal open={openEdit} handleClose={() => setEdit(false)} userData={user} fetchUsers={fetchUsers} />
      <DeleteUserModal open={openDelete} handleClose={() => setDelete(false)} userData={user} fetchUsers={fetchUsers} />
    </div>
  )
}

export default RoleManagement
