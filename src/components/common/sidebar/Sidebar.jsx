import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import NavbarMenu from '../navbarMenu/NavbarMenu'
import SidebarHeader from './sidebarHeader/SidebarHeader'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { auth, logout } from '../../../features/redux/auth/authSlice'
import { hasAccess } from '../../../utils/userUtils'
import { routes } from '../../../routing/routes'
import './Sidebar.scss'

function Sidebar({ children, window }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const dispatch = useDispatch()
  const location = useLocation()
  const { user } = useSelector(auth)
  const drawerWidth = 208
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const container = window !== undefined ? () => window().document.body : undefined

  const handleUrlLocation = (url) => {
    let foundIndex = 0
    routes.map((route) => {
      const link = route.path.split('/')[1]
      const screenName = url.split('/')[1]
      if (link === screenName) {
        foundIndex = route.index
      }
    })
    return foundIndex
  }

  useEffect(() => {
    setSelectedIndex(handleUrlLocation(location.pathname))
  }, [location.pathname])

  const sidebar = (
    <div className='sidebar-container'>
      <div className='sidebar-header'>
        <SidebarHeader />
        <div className='route-container'>
          <List className='route-list'>
            {routes.map((route, id) => {
              const { access, title, path, icon, index } = route
              const liClasses = selectedIndex === index ? 'selectedItem' : ''
              if (title && hasAccess(access, user)) {
                return (
                  <ListItem
                    className={liClasses}
                    component={Link}
                    button
                    key={`${title}-${id}`}
                    to={path}
                    selected={index === selectedIndex}
                  >
                    <ListItemIcon className='icon-container'>{icon}</ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItem>
                )
              }
            })}
          </List>
          <Divider />
        </div>
      </div>
      {user?.email && <Button onClick={() => dispatch(logout())}>Wyloguj</Button>}
    </div>
  )

  return (
    <Box className='screen-container'>
      <CssBaseline />
      <NavbarMenu drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} />
      <Box component='nav' sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
        <Drawer
          container={container}
          className='sidebar'
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
          }}
        >
          {sidebar}
        </Drawer>
        <Drawer
          variant='permanent'
          className='sidebar'
          sx={{
            display: { xs: 'none', lg: 'block' },
          }}
          open
        >
          {sidebar}
        </Drawer>
      </Box>
      <Box
        className='screen-content'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <div className='page-content'>{children}</div>
      </Box>
    </Box>
  )
}

export default Sidebar
