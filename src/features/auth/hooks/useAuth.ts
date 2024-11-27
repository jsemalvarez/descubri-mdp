
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../../app/state/store"
import { AuthUser, onChecking, onLogin, onLogout } from "../../../app/state/authSlice";


export const useAuth = () => {

    const { status, user, errorMessage } = useSelector( (state: RootState) => state.auth);
    const dispatch = useDispatch();

    const startLogin = (user: AuthUser) => {
        dispatch( onChecking() );
        dispatch( onLogin(user) );
    }

    const startLogout = () => {
        dispatch( onLogout(null) );
    }


    return{
        status, 
        user, 
        errorMessage,
        startLogin,
        startLogout
    }
}