
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import './style/Global.css'

export const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}
