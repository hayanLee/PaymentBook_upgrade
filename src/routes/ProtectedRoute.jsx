import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
    const { userId, isLoading } = useSelector((state) => state.auth);
    console.log('여긴protectedRoute', userId, isLoading);

    if (isLoading) return null;
    return userId ? element : <Navigate to='/login' />;
};

export default ProtectedRoute;
