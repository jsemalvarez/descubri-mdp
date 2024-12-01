import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../../features/home'
import { PlacesRoutes } from '../../features/places'
import { UserRoutes } from '../../features/users'

export const PrivateRoutes = () => {

    return(
        <Routes>
            <Route path="/home" element={ <HomePage /> } />

            <Route path='/users/*' element={ < UserRoutes />} />
            <Route path='/places/*' element={ < PlacesRoutes />} />
            
            <Route path="/*" element={ <Navigate to="/places/list" /> } />
        </Routes>
    )
}
