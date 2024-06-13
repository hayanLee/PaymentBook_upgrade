import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const { userId } = useSelector((state) => state.auth); // useSelector = 읽고 구독한다
    console.log('👍protectedRoute', userId);

    return userId ? element : <Navigate to='/login' />;
};

export default ProtectedRoute;
