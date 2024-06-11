import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout/AuthLayout';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PaymentDetailPage from '../pages/PaymentDetailPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    { path: '/login', element: <LoginPage /> },
                    { path: '/sign-up', element: <SignUpPage /> },
                ],
            },
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/payment/:paymentId',
                element: <PaymentDetailPage />,
            },
        ],
    },
]);

export default router;
