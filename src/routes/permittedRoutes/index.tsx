import { Navigate } from 'react-router-dom';
import { PermittedRoutesProps } from './interface/PermittedRoutes.interface';

const PermittedRoutes = ({permission, Component}: PermittedRoutesProps): JSX.Element => {
    const token: string | null = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const userPermission = ['dashboard', 'settings']

    const isAuthorized = (): boolean => {
        return userPermission.some((element) => {
            return permission.includes(element)
        })
    }

    if (!isAuthorized()) {
        return <Navigate to="/" replace />;
    }

    return <Component />
}

export default PermittedRoutes;
