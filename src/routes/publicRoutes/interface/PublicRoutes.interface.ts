import { LazyExoticComponent } from 'react';

export interface PublicRoutes {
    path: string
    Component: LazyExoticComponent<() => JSX.Element>
}
