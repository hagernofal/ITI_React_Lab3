import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box, IconButton, Typography, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import useThemeStore from '../../store/useThemeStore';
import { useSelector } from 'react-redux';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../../context/useLanguage';
const MainLayout = () => {
    const { language, toggleLanguage } = useLanguage();
    const { theme, toggleTheme } = useThemeStore();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const cartCount = cartItems.length;
    return (
        <div className={`flex flex-col min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-950'
            }`}>

            <AppBar position="sticky" sx={{ bgcolor: theme === 'dark' ? '#0f172a' : '#021c53' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters className="flex justify-between items-center">

                        <Typography variant="body1" className="font-semibold text-gray-200">
                            {language === 'en' ? 'Welcome 👋' : 'مرحباُ بك 👋'}
                        </Typography>
                        <Box className="flex gap-6 items-center">

                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `flex items-center gap-1 font-medium transition-colors ${isActive ? 'text-amber-400' : 'text-gray-200 hover:text-white'
                                    }`
                                }>
                                <HomeIcon fontSize="small" />
                                <span>{language === 'en' ? 'Home' : 'الرئيسية'}</span>
                            </NavLink>

                            <NavLink
                                to='/cart'
                                className={({ isActive }) =>
                                    `flex items-center gap-1 font-medium transition-colors ${isActive ? 'text-amber-400' : 'text-gray-200 hover:text-white'
                                    }`
                                }>
                                <ShoppingCartIcon fontSize="small" />
                                <span>{language === 'en' ? `Cart (${cartCount})` : `السلة (${cartCount})`}</span>
                            </NavLink>

                            <NavLink
                                to='/register'
                                className={({ isActive }) =>
                                    `flex items-center gap-1 font-medium transition-colors ${isActive ? 'text-amber-400' : 'text-gray-200 hover:text-white'
                                    }`
                                }>
                                <span>{language === 'en' ? 'Register' : 'تسجيل'}</span>
                            </NavLink>
                            <Button
                                onClick={toggleLanguage}
                                color="inherit"
                                size="small"
                                startIcon={<LanguageIcon />}
                                sx={{ textTransform: 'none', fontWeight: 'bold', color: '#e2e8f0' }}
                            >
                                {language === 'en' ? 'العربية' : 'English'}
                            </Button>

                            <IconButton
                                onClick={toggleTheme}
                                color="inherit"
                                sx={{ ml: 1 }}
                            >
                                {theme === 'light' ? (
                                    <DarkModeIcon sx={{ color: '#fbbf24' }} />
                                ) : (
                                    <LightModeIcon sx={{ color: '#f59e0b' }} />
                                )}
                            </IconButton>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <main className="container grow mx-auto p-10 max-w-4xl">
                <Outlet />
            </main>
            <footer className={`border-t p-6 text-center text-sm transition-colors ${theme === 'dark' ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-500'
                }`}>
                <p>© 2026 ITI by Hager Nofal with 💖</p>
            </footer>
        </div>
    );
};

export default MainLayout;