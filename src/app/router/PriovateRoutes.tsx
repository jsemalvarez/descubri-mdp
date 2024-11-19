import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../../features/home'

export const PrivateRoutes = () => {

    return(
        <Routes>
            <Route path="/home" element={ <HomePage /> } />
            
            <Route path="/*" element={ <Navigate to="/home" /> } />
        </Routes>
    )
}
