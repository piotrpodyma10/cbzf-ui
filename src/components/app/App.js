import { useSelector } from 'react-redux'
import { themeMode } from '../../features/redux/theme/themeSlice'
import AppRoutes from '../../routing/appRoutes'
import './App.css'

function App() {
  const theme = useSelector(themeMode)
  document.body.setAttribute('data-theme', theme)

  return <AppRoutes />
}

export default App
