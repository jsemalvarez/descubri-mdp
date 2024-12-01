import { AuthService, AuthUser } from "../interfaces/auth.interface";


const startLogin = async(email: string, password: string):Promise<AuthUser> => {
    console.log({email, password})

    return {
        id:'abc',
        name:'josema',
        email:'josema@gmail.com'
    }
}

const startLogout = () => {

}

export const authService: AuthService = {
    startLogin,
    startLogout
}
