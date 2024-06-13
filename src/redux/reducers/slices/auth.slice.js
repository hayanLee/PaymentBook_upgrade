import { createSlice } from '@reduxjs/toolkit';

const initialState = { userId: null, nickname: null, avatar: null, isLoading: true };
const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setUserInfo: (state, action) => {
            const { userId, nickname, avatar } = action.payload;
            state.userId = userId;
            state.nickname = nickname;
            state.avatar = avatar;
            state.isLoading = false;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        clearUserInfo: (state) => {
            state.userId = '';
            state.nickname = '';
            state.avatar = '';
            state.isLoading = false;
        },
    },
});

export const { setUserInfo, setLoading, clearUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;
