import React from 'react';
import { RestrictedRoutes } from './interface/RestrictedRoutes.interface';

const restrictedRoutes: Array<RestrictedRoutes> = [
    {
        path: '/',
        Component: React.lazy(() => import('pages/dashboard')),
        permission: ['dashboard']
    },
    {
        path: '/users',
        Component: React.lazy(() => import('pages/users')),
        permission: ['dashboard']
    },
    {
        path: '/products',
        Component: React.lazy(() => import('pages/products')),
        permission: ['dashboard']
    }
]


export default restrictedRoutes;
