import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type AuthStatus = 'CHECKING' | 'AUTHENTICATED' | 'NOT-AUTHENTICATED' ; 

export interface AuthUser {
    name: string;
}

export interface AuthState {
  status: AuthStatus;
  user: AuthUser | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
    status: 'NOT-AUTHENTICATED',
    user: null,
    errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onChecking: (state) => {
        state.status = 'CHECKING';
        state.user = null;
        state.errorMessage = null;
    },
    onLogin: (state, { payload }: PayloadAction<AuthUser | null>) => {
        state.status = 'AUTHENTICATED';
        state.user = payload;
        state.errorMessage = null;
    },
    onLogout: (state, { payload }: PayloadAction<string | null>) => {
        state.status = 'NOT-AUTHENTICATED';
        state.user = null;
        state.errorMessage = payload;
    },
    onClearErrorMEssage: (state) => {
        state.errorMessage = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { onChecking, onLogin, onLogout, onClearErrorMEssage } = authSlice.actions
