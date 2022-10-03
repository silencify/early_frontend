import { TextField, TextFieldProps } from '@mui/material';

const WTextField = ({label, type='text', required=false, ...rest}: TextFieldProps ): JSX.Element => {
    return (
       <TextField label={label} variant='outlined' type={type} required={required} {...rest}/> 
    )
}

export default WTextField;
