import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout/AuthLayout';
import DefaultLayout from '../layout/DefaultLayout/DefaultLayout';
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MyPage from '../pages/MyPage/MyPage';
import PaymentDetailPage from '../pages/PaymentDetailPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const router = createBrowserRouter([
    {
        element: <DefaultLayout />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: '/',
                        element: <HomePage />,
                    },
                    {
                        path: '/payment/:paymentId',
                        element: <PaymentDetailPage />,
                    },
                    {
                        path: '/mypage',
                        element: <MyPage />,
                    },
                ],
            },
            {
                element: <AuthLayout />,
                children: [
                    { path: '/login', element: <LoginPage /> },
                    { path: '/sign-up', element: <SignUpPage /> },
                ],
            },
        ],
    },
]);

export default router;
