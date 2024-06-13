import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import api from './api/api';
import GlobalStyle from './components/GlobalStyle';
import { setUserInfo } from './redux/reducers/slices/auth.slice';
import router from './routes/router';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const { id: userId, nickname, avatar } = await api.auth.getUserInfo();
                dispatch(setUserInfo({ userId, nickname, avatar }));
            } catch {
                console.log('로그인 필요');
            }
        })();
    }, []);

    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
