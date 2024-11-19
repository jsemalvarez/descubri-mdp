import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../../features/home'
import { PleacesRoutes } from '../../features/places'
import { UserRoutes } from '../../features/users'

export const PrivateRoutes = () => {

    return(
        <Routes>
            <Route path="/home" element={ <HomePage /> } />

            <Route path='/users/*' element={ < UserRoutes />} />
            <Route path='/pleace/*' element={ < PleacesRoutes />} />
            
            <Route path="/*" element={ <Navigate to="/home" /> } />
        </Routes>
    )
}
