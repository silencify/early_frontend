import { TextFieldProps } from './interface/Textfield.interface';
import { TextField } from '@mui/material';

const WTextField = ({input, label, type = 'text', meta: { touched, error }, ...custom}: TextFieldProps): JSX.Element => {
    const isError = (): boolean => {
        if (touched && error){
            return true
        }

        return false
    }

    return (
        <TextField
            error={isError()}
            label={label}
            type={type}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )
}

export default WTextField;
