import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './reducers/slices/auth.slice';
import { paymentReducer } from './reducers/slices/payment.slice';

// 전역 상태 저장소
const store = configureStore({
    reducer: { payments: paymentReducer, auth: authReducer },
});
export default store;
