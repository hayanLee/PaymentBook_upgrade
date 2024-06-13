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
        updateUserInfo: (state, action) => {
            const { nickname, avatar } = action.payload;
            console.log('>>>>', nickname, avatar);
            if (nickname !== undefined) {
                state.nickname = nickname;
            }
            if (avatar !== undefined) {
                state.avatar = avatar;
            }
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

export const { setUserInfo, updateUserInfo, setLoading, clearUserInfo } =
    authSlice.actions;
export const authReducer = authSlice.reducer;
