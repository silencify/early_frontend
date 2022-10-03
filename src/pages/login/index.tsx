import { WButton, WTextField, WTypography } from 'components';
import LoginWrapper from './index.style';
import actions from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {Grid} from '@mui/material';
import { Form, Field } from 'react-final-form';
import { composeValidators, email, required } from 'utils/Validators';

const Login = (): JSX.Element => {
    const dispatch = useDispatch();
    const loading: boolean = useSelector((state: any) => state.userReducer.loading);
    const navigate = useNavigate();

    const handleFormSubmit = (value: any): void => {
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
            <Form
                onSubmit={(value) => {
                    return handleFormSubmit(value)
                }}
            >
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <WTypography variant='h5'>Login</WTypography>
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    name='email'
                                    label='Email address'
                                    fullWidth
                                    component={WTextField}
                                    validate={composeValidators(required, email)}
                                />
                            </Grid>
                
                            <Grid item xs={12}>
                                <Field
                                    name='password'
                                    label='Password'
                                    type='password' 
                                    fullWidth
                                    component={WTextField}
                                    validate={composeValidators(required)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <WButton variant='contained' fullWidth type='submit'>Login</WButton>
                            </Grid>
                            { loading && <div>Loggin in....</div>}
                        </Grid>
                    </form>
                )}
            </Form>
        </LoginWrapper>
    )
}

export default Login;
