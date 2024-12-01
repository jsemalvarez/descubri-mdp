

import { authService } from '../sevices/authService';
import { useAuthActions } from "../../../app/state";
import { UseAuthParams, UserLogin } from '../interfaces/auth.interface';



export const useAuth = ({ 
    service = authService,
    authActions = useAuthActions
}: UseAuthParams) => {

    const { status, user, errorMessage, doChecking, doLogin, doLogout  } = authActions();
    const { startLogin, startLogout} = service;

    const onLogin = async(user: UserLogin) => {
        try {
            doChecking()
            const userLogged = await startLogin(user.email, user.password);
            doLogin(userLogged)            
        } catch (error) {
            doLogout('Error')
        }
    }

    const onLogout = () => {
        try {
            doChecking();
            startLogout();
            doLogout(null)     
        } catch (error) {
            doLogout('Error')
        }
    }


    return{
        status, 
        user, 
        errorMessage,
        onLogin,
        onLogout
    }
}