import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    payments: [],
};

const paymentSlice = createSlice({
    name: 'payments',
    initialState,
    reducers: {
        addPayment: (state, action) => {
            state.payments.push(action.payload);
        },
        updatePayment: (state, action) => {
            const targetIdx = state.payments.findIndex(
                (payment) => payment.id === action.payload.id
            );
            if (targetIdx !== -1) state.payments[targetIdx] = action.payload;
        },
        deletePayment: (state, action) => {
            state.payments = state.payments.filter(
                (payment) => payment.id !== action.payload.id
            );
        },
    },
});

export const paymentReducer = paymentSlice.reducer;
export const { addPayment, updatePayment, deletePayment } = paymentSlice.actions;
