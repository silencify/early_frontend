import styled from 'styled-components';

const LoginWrapper = styled.div`
    height: 100vh;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    form {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export default LoginWrapper;
