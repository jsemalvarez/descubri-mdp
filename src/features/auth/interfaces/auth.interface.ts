

export interface AuthUser {
    id: string;
    name: string;
    email: string;
}

export type AuthStatus = 'CHECKING' | 'AUTHENTICATED' | 'NOT-AUTHENTICATED' ; 

export interface AuthState {
  status: AuthStatus;
  user: AuthUser | null;
  errorMessage: string | null;
}

export interface UserRegister{
    name: string;
    email: string;
    password: string;
}

export interface UserLogin{
    email: string;
    password: string;
}

export interface AuthService {
    startLogin: (email: string, password: string) => Promise<AuthUser>;
    startLogout: () => void;
}


export interface UseAuthParams {
    authActions?: ()=> UseAuthActions;
    service?: AuthService;
}


export interface UseAuthActions {
    status:  AuthStatus;
    user: AuthUser | null; 
    errorMessage: string | null,
    doChecking: () => void;
    doLogin: (user: AuthUser) => void;
    doLogout: (errorMessage: string | null) => void;
}

// export interface AuthService {
//     login(email: string, password: string): Promise<User>;
//     logout(): Promise<void>;
//     getUser(): Promise<User | null>;
// }
  