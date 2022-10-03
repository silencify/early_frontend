export interface LoadingButtonProps {
    loading: boolean
    children: string | JSX.Element | Array<JSX.Element>
    variant?: 'contained' | 'outlined' | 'text'
    onClick?: () => void,
    type?: 'button' | 'submit' | 'reset'
    fullWidth?: boolean
    [x: string]: any 
}
