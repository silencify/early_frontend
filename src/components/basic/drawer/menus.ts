import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactsIcon from '@mui/icons-material/Contacts';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const menus = [
    {
        url: '/dashboard',
        text: 'Dashboard',
        icon: HomeIcon
    },
    {
        url: '/users',
        text: 'Users',
        icon: PeopleIcon
    },
    {
        url: '/products',
        text: 'Products',
        icon: ShoppingBagIcon
    },
    {
        divider: true,
    },
    {
        url: '/contact-us',
        text: 'Contact us',
        icon: ContactsIcon
    },
    {
        url: '/settings',
        text: 'Settings',
        icon: SettingsIcon
    },
    {
        url: '/profile',
        text: 'Profile',
        icon: AccountCircleIcon
    },
    {
        url: '/register',
        text: 'Register',
        icon: PersonAddAlt1Icon
    }
]

export default menus;
