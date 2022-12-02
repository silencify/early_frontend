import { Box, BoxProps } from '@mui/material';

const WBox = ({children, sx}: BoxProps) => {
    return (
        <Box sx={sx}>
            {children}
        </Box>
    )
}

export default WBox
