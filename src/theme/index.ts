import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: '10px 0'
                }
            }
        }
    },
    palette: {
        mode: 'light',
        primary: {
            main: '#2d3748',
            light: '#718096',
            dark: '#1a202c',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#69617B',
            light: '#878095',
            dark: '#524F7B',
            contrastText: '#ffffff'
        },
    },
})

export default theme;
