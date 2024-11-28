import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PriovateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useAuth } from "../../features/auth";

export const AppRouter = () => {

    // const authStatus: string = 'authenticated'; // 'authenticated'; // 'not-authenticated';
    const { status: authStatus } = useAuth()

    if(authStatus === 'CHECKING'){
        return(<p>
            Cargando....
        </p>)
    }

    return (
        <Routes>
            {
                ( authStatus === 'NOT-AUTHENTICATED')  
                    ? <Route path="/*" element={ <PublicRoutes /> } />
                    : <Route path="/*" element={ <PrivateRoutes /> } />
            }

        </Routes>
    )
}
