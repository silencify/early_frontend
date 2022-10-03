import { FormEvent } from 'react';
import { WButton, WTextField, WTypography } from 'components';
import LoginWrapper from './index.style';
import actions from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Grid} from '@mui/material';

const Login = (): JSX.Element => {
    const dispatch = useDispatch();
    const loading: boolean = useSelector((state: any) => state.userReducer.loading);
    const navigate = useNavigate();

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        const loginData: Record<string, string> = {
            email: 'test@mail.com',
            password: 'abc'
        }

        // call login api here. Remove timeout function.
        new Promise((resolve, reject) => {
            dispatch(actions.login(loginData, resolve, reject));
        }).then(() => {
            localStorage.setItem('token', '123');
            navigate('/')
        })        
    }
            
    return (
        <LoginWrapper>
            <form onSubmit={handleFormSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <WTypography variant='h5'>Login</WTypography>
                    </Grid>
                    <Grid item xs={12}>
                        <WTextField label='Email' fullWidth required/>
                    </Grid>
        
                    <Grid item xs={12}>
                        <WTextField type='password' label='Password' fullWidth required/>
                    </Grid>

                    <Grid item xs={12}>
                        <WButton variant='contained' fullWidth type='submit'>Login</WButton>
                    </Grid>
                    { loading && <div>Loggin in....</div>}
                </Grid>
            </form>
        </LoginWrapper>
    )
}

export default Login;
