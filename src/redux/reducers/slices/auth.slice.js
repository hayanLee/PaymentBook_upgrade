import { createSlice } from '@reduxjs/toolkit';

const initialState = {};
const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        logIn: (state, action) => {},
        logOut: (state, action) => {},
        signUp: (state, action) => {},
    },
});

export const { logIn, logOut, signUp } = authSlice.actions;
export const authReducer = authSlice.reducer;
