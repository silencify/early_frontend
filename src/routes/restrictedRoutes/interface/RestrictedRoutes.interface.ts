import { LazyExoticComponent } from 'react';

export interface RestrictedRoutes {
    path: string
    Component: LazyExoticComponent<() => JSX.Element>
    permission: Array<string>
}
