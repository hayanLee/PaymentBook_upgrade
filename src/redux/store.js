import { configureStore } from '@reduxjs/toolkit';
import { paymentReducer } from './reducers/slices/payment.slice';

// 전역 상태 저장소
const store = configureStore({
    reducer: { payments: paymentReducer },
});
export default store;
