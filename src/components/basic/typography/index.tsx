import { Typography, TypographyProps } from "@mui/material";

const WTypography = ({children, variant}: TypographyProps) => {
    return (
        <Typography variant={variant}>
            {children}
        </Typography>
    )
}

export default WTypography;
