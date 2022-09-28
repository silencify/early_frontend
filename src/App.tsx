import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import {publicRoutes, restrictedRoutes} from 'routes';
import { PublicRoutes, RestrictedRoutes } from 'routes/index.interface';
import PermittedRoutes from 'routes/permittedRoutes';

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
                       return <Route key={path} path={path} element={<Component />} />
                    })
                }
            </Routes>
        )
    }

    return (
            <Routes>
                {
                    restrictedRoutes.map(({path, permission, Component}: RestrictedRoutes) => {
                       return <Route key={path} path={path} element={<PermittedRoutes permission={permission} Component={Component}/>} />
                    }) 
                }
            </Routes>
    )
}

export default App;
