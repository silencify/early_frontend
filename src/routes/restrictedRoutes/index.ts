import React from 'react';
import { RestrictedRoutes } from './interface/RestrictedRoutes.interface';

const restrictedRoutes: Array<RestrictedRoutes> = [
    {
        path: '/',
        Component: React.lazy(() => import('pages/dashboard')),
        permission: ['dashboard']
    },
]


export default restrictedRoutes;
