import { useSelector } from 'react-redux'
import avatar from '../../../../../assets/imgs/avatar.png'
import { auth } from '../../../../../features/redux/auth/authSlice'
import './User.scss'

function User() {
  const { user } = useSelector(auth)
  const { email, firstName, lastName } = user
  return (
    <div className='user'>
      <img className='user-avatar' src={avatar} />
      <div className='user-name-container'>
        <div className='user-name'>
          {firstName} {lastName}
        </div>
        <div className='user-email'>{email}</div>
      </div>
    </div>
  )
}

export default User
