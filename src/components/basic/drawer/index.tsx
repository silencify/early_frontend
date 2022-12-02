import { useState } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import menus from './menus';
import WTypography from '../typography';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 300;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}))

const WDrawer = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleCloseOrExpand = () => {
        setOpen(!open)
    }

    const handleClick = (url: string) => {
        console.log("click", url)
        navigate(url)
    }

    const renderMenu = () => {
        return menus.map(menu => {
            if (menu.divider) {
                return <Divider sx={{backgroundColor: 'secondary.light'}}/>
            }

            if (menu.url) {
                const Icon = menu.icon;

                return (
                    <ListItem key={menu.text} disablePadding sx={{ display: 'block' }} onClick={() => handleClick(menu.url)}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <Icon sx={{color: 'primary.light'}}/>
                            </ListItemIcon>
                            <ListItemText primary={<WTypography variant='body1'>{menu.text}</WTypography>} sx={{ opacity: open ? 1 : 0, color: 'primary.light'}} />
                        </ListItemButton>
                    </ListItem>
                )
            }
        })
    }

    return (
        <Drawer 
            variant='permanent'
            open={open}
            PaperProps={{
                sx:{
                    backgroundColor: 'primary.main'
                }
            }}
        >
            <DrawerHeader>
                <IconButton onClick={handleCloseOrExpand}>
                    { open ? <ChevronLeftIcon sx={{color: 'primary.light'}}/> : <MenuIcon sx={{color: 'primary.light'}}/> }
                </IconButton>
            </DrawerHeader>
            <Divider sx={{backgroundColor: 'secondary.light'}}/>
            <List>
                {renderMenu()}
            </List>
        </Drawer>
    )
}

export default WDrawer;
