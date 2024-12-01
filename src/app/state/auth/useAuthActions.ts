
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { checking, login, logout } from "./authSlice";
import { AuthUser, UseAuthActions } from "../../../features/auth";




export const useAuthActions = ():UseAuthActions => {

    const { status, user, errorMessage } = useSelector( (state: RootState) => state.auth);
    const dispatch = useDispatch();

    const doChecking = () => dispatch( checking() )

    const doLogin = (user: AuthUser) => dispatch( login(user) );

    const doLogout = (errorMessage: string | null) => dispatch( logout(errorMessage) );

    return {
        status, 
        user, 
        errorMessage,
        doChecking,
        doLogin,
        doLogout
    }
}