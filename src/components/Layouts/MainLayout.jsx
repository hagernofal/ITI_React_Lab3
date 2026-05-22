import { Outlet, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Container, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <AppBar position="sticky" sx={{ bgcolor: '#021c53' }}>
                <Container maxWidth="lg">
                    <Toolbar disableGutters className="flex justify-end">
                        <Box className="flex gap-4">
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                                }>
                                <HomeIcon fontSize="small" margin-right="8px" /> 
                                <span>Home</span>
                            </NavLink>
                            <NavLink
                                to='/cart'
                                className={({ isActive }) =>
                                    `font-medium ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}`
                                }>
                                <ShoppingCartIcon fontSize="small" margin-right="8px" />
                                <span>Cart</span>
                            </NavLink>

                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <main className="container grow mx-auto p-10 max-w-4xl">
                <Outlet />
            </main>

            <footer className="border-t p-6 text-center text-sm bg-white text-gray-500">
                <p>© 2026 ITI by Hager Nofal with 💖</p>
            </footer>
        </div>
    );
};

export default MainLayout;