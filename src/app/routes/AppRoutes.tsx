import { Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./PriovateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {

    const authStatus: string = 'authenticated'; // 'authenticated'; // 'not-authenticated';

    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')  
                    ? <Route path="/*" element={ <PublicRoutes /> } />
                    : <Route path="/*" element={ <PrivateRoutes /> } />
            }

        </Routes>
    )
}
