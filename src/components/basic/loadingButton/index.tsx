import { LoadingButton } from '@mui/lab';
import { LoadingButtonProps } from './interface/LoadingButton.interface';

const WLoadingButton = ({
    color='primary',
    onClick,
    children,
    loading=false,
    ...rest}: LoadingButtonProps
) => {
    return (
        <LoadingButton 
            loading={loading}
            color={color}
            onClick={onClick}
            {...rest}
        >
            {children}
        </LoadingButton>
    )
}

export default WLoadingButton;
