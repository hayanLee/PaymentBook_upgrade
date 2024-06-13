import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
    const { userId, isLoading } = useSelector((state) => state.auth);
    console.log('여긴 publicRoute', userId, isLoading);

    if (isLoading) return null;
    return userId ? <Navigate to='/' /> : element;
};

export default PublicRoute;
