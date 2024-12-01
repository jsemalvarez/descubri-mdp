import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthState, AuthUser } from '../state.interfaces';


const initialState: AuthState = {
    status: 'NOT-AUTHENTICATED',
    user: null,
    errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    checking: (state) => {
        state.status = 'CHECKING';
        state.user = null;
        state.errorMessage = null;
    },
    login: (state, { payload }: PayloadAction<AuthUser | null>) => {
        state.status = 'AUTHENTICATED';
        state.user = payload;
        state.errorMessage = null;
    },
    logout: (state, { payload }: PayloadAction<string | null>) => {
        state.status = 'NOT-AUTHENTICATED';
        state.user = null;
        state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
        state.errorMessage = null;
    },
  },
})

// Action creators are generated for each case reducer function
export const { checking, login, logout, clearErrorMessage } = authSlice.actions
