import { createSlice } from '@reduxjs/toolkit';

const initialState = { userId: null, nickname: null, avatar: null };
const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        setUserInfo: (state, action) => {
            const { userId, nickname, avatar } = action.payload;
            state.userId = userId;
            state.nickname = nickname;
            state.avatar = avatar;
        },
        updateUserInfo: (state, action) => {
            const { nickname, avatar } = action.payload;
            if (nickname !== undefined) {
                state.nickname = nickname;
            }
            if (avatar !== undefined) {
                state.avatar = avatar;
            }
        },

        clearUserInfo: (state) => {
            state.userId = '';
            state.nickname = '';
            state.avatar = '';
        },
    },
});

export const { setUserInfo, updateUserInfo, clearUserInfo } = authSlice.actions;
export const authReducer = authSlice.reducer;
