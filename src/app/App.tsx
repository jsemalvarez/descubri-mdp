
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRoutes'
import './style/Global.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
