import { loginWithEmailPassword } from "../../../app/firebase/authProvider";
import { AuthService, AuthUser } from "../interfaces/auth.interface";


const startLogin = async(email: string, password: string):Promise<AuthUser> => {
    console.log({email, password})

    const { uid } = await loginWithEmailPassword(email, password)

    return {
        id: uid,
        name:'josema',
        email: email
    }
}

const startLogout = () => {

}

export const authService: AuthService = {
    startLogin,
    startLogout
}
