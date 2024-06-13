import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import api from './api/api';
import GlobalStyle from './components/GlobalStyle';
import { setLoading, setUserInfo } from './redux/reducers/slices/auth.slice';
import router from './routes/router';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const { id: userId, nickname, avatar } = await api.auth.getUserInfo();
                console.log('앱 처음 마운트', userId);
                dispatch(setUserInfo({ userId, nickname, avatar }));
            } catch (error) {
                console.error(error);
                dispatch(setLoading(false));
            }
        })();
    }, [dispatch]);

    return (
        <>
            <GlobalStyle />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
