import { FormEvent } from 'react';
import {Button} from 'components';
import Input from 'components/input';
import LoginWrapper from './index.style';
import actions from './store/actions';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';

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
                <Input type='text' label='Username' />
                <Input type='text' label='Password' />
                <Button text='Submit' />
                { loading && <div>Loggin in....</div>}
            </form>
        </LoginWrapper>
    )
}

export default Login;
