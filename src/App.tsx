import { useEffect, Suspense } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import {publicRoutes, restrictedRoutes} from 'routes';
import { PublicRoutes, RestrictedRoutes } from 'routes/index.interface';
import PermittedRoutes from 'routes/permittedRoutes';
import MainLayout from 'layout/MainLayout';

function App() {
    const token: string | null = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            // Fetch current user data
            navigate('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    if (!token) {
        return (
            <Routes>
                {
                    publicRoutes.map(({path, Component}: PublicRoutes) => {
                       return <Route key={path} path={path} element={
                           <Suspense fallback={<div>Loading...</div>}>
                               <Component />
                           </Suspense>
                       } />
                    })
                }
            </Routes>
        )
    }

    return (
        <MainLayout>
            <Routes>
                {
                    restrictedRoutes.map(({path, permission, Component}: RestrictedRoutes) => {
                       return <Route key={path} path={path} element={
                           <Suspense fallback={<div>Loading...</div>}>
                               <PermittedRoutes permission={permission} Component={Component}/>
                           </Suspense>
                       } />
                    }) 
                }
            </Routes>
        </MainLayout>
    )
}

export default App;
