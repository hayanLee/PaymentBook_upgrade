import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
    const { userId } = useSelector((state) => state.auth);
    console.log('🔥publicRoute', userId);

    return userId ? <Navigate to='/' /> : element;
};

export default PublicRoute;
