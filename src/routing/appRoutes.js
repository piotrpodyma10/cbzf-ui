import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom'
import Sidebar from '../components/common/sidebar/Sidebar'
import { routes } from './routes'
import { PrivateRoute } from './PrivateRoute'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const AppRoutes = () => (
  <BrowserRouter>
    <Sidebar>
      <Routes>
        {routes.map((route, index) => {
          const { path, component, access } = route
          return <Route key={index} path={path} element={<PrivateRoute access={access}>{component}</PrivateRoute>} />
        })}
      </Routes>
      <ToastContainer autoClose={8000} />
    </Sidebar>
  </BrowserRouter>
)

export default AppRoutes
