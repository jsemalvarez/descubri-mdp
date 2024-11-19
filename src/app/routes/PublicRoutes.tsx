import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../../features/home'
import { AuthRoutes } from '../../features/auth'

export const PublicRoutes = () => {

    return(
        <Routes>
            <Route path="/home" element={ <HomePage /> } />

            <Route path="/auth" element={ <AuthRoutes /> } />
            
            <Route path="/*" element={ <Navigate to="/home" /> } />
        </Routes>
    )
}
