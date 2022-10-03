import Button, {ButtonProps} from '@mui/material/Button';

const WButton = ({children, onClick, color='primary', ...rest}: ButtonProps): JSX.Element => {
    return (
        <Button color={color} onClick={onClick} {...rest}>{children}</Button>
    )
}

export default WButton;
