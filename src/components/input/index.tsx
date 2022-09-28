import InputWrapper from './index.style';
import { InputProps } from './interface/Input.interface';

const Input = ({label, type}: InputProps): JSX.Element => {
    return (
        <InputWrapper>
            <label>{label}</label>
            <input type={type} />
        </InputWrapper>
    )
}

export default Input;
