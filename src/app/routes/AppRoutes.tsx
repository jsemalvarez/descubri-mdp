import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PriovateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useAuth } from "../../features/auth";

export const AppRouter = () => {

    // const authStatus: string = 'NOT-AUTHENTICATED'; // 'AUTHENTICATED' 'NOT-AUTHENTICATED' 'CHECKING';
    const { status: authStatus } = useAuth({})

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
