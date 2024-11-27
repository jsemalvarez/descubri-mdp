
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRoutes'
import './style/Global.css'
import { ProviderState } from './state'

export const App = () => {
  return (
    <ProviderState>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ProviderState>
  )
}
