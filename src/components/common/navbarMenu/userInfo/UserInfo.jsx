import UserRole from './userRole/UserRole'
import User from './user/User'
import './UserInfo.scss'

function UserInfo({ user }) {
  return (
    <div className='user-info'>
      <UserRole user={user} />
      <User />
    </div>
  )
}

export default UserInfo
