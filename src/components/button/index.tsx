import { ButtonProps } from './interface/Button.interface';

const Button = ({text, onClick}: ButtonProps): JSX.Element => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Button;
