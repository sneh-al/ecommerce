import { Navigate, Outlet } from 'react-router-dom';
import { useBoundStore } from '../../../store/store';

const PrivateRoute = () => {
    const user = useBoundStore((state) => state.user);

   
    return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute