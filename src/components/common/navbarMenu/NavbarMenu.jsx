import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SwitchTheme from './switchTheme/SwitchTheme'
import UserInfo from './userInfo/UserInfo'
import SignInUser from './signInUser/SignInUser'
import { useLocation } from 'react-router-dom'
import { isUser } from '../../../utils/userUtils'
import './NavbarMenu.scss'
import { useSelector } from 'react-redux'
import { auth } from '../../../features/redux/auth/authSlice'

function NavbarMenu({ handleDrawerToggle, drawerWidth }) {
  const location = useLocation()
  const { user } = useSelector(auth)

  return (
    <AppBar
      position='fixed'
      className='appbar'
      sx={{
        width: { lg: `calc(100% - ${drawerWidth}px)` },
        ml: { lg: `${drawerWidth}px` },
      }}
    >
      <Toolbar className='action-container'>
        <div className='toggle-icon-container'>
          <IconButton
            className='toggle-icon'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className='configuration-container'>
          {user.email ? <UserInfo user={user} /> : <SignInUser />}
          <SwitchTheme />
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavbarMenu
