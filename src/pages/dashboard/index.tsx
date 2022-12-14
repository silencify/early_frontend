import { useState } from 'react';
import { Button } from 'components';
import { useNavigate } from 'react-router-dom';
import MainLayout from 'layout/MainLayout'

const Dashboard = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
   
    const handleLogout = (): void => {
        localStorage.removeItem('token');
        setLoading(true)

        // Write logout logic here
        setTimeout(() => {
            setLoading(false)
            navigate('/login', { replace: true })
        }, 2000)
    }

    return (
        <MainLayout>
            <>
                <h1>I am dashboard</h1>
                <Button text='Log out' onClick={handleLogout}/>
                { loading && <div>Please wait for log out.....</div> }
            </>
        </MainLayout>
    )
}

export default Dashboard;
