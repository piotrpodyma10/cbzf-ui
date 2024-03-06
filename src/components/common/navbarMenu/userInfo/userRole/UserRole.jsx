import './UserRole.scss'

function UserRole({ user }) {
  return <div className='user-role'>{user?.roles?.[0]}</div>
}

export default UserRole
