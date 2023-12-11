import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import GrassIcon from '@mui/icons-material/Grass';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './auth-context';

const pages = ['home', 'about', 'services', 'contact'];
const adminEmail = 'admin@gmail.com';

const NavTheme = createTheme({
  palette: {
    primary: {
      main: '#f8f7f6',
    },
    secondary: {
      main: '#9e7555',
    },
    background: {
      default: '#f8f7f6',
      paper: '#e8e9e4',
    },
  },
});

const styles = {
  buttonStyle: {
    "&.active": {
      color: "#9e7555"
    },
    display: 'block',
    color: 'black'
  }
}

const Navbar = () => {
  const auth = useContext(AuthContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={NavTheme}>
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GrassIcon sx={{ fontSize: 40, display: { xs: 'none', md: 'flex' }, mr: 1, color: '#479066' }} />
          <Typography
            variant="h4"
            noWrap
            component={NavLink}
            to={"/home"}
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              color: '#479066',
              textDecoration: 'none',
              marginBottom: '-4px'
            }}
          >
            Nature Insight
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={NavLink} to={"/" + page} sx={styles.buttonStyle}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <GrassIcon sx={{ fontSize: 40, display: { xs: 'flex', md: 'none' }, mr: 1, color: '#479066' }} />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              color: '#479066',
              textDecoration: 'none',
            }}
          >
            Nature Insight
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-evenly' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={NavLink}
                to={"/" + page}
                onClick={handleCloseNavMenu}
                sx={styles.buttonStyle}
              >
                {page}
              </Button>
            ))}
            {auth.isLoggedIn && auth.userEmail == adminEmail &&(
                  <Button 
                  variant='outlined'
                  component={NavLink}
                  to={"/admin"}
                  onClick={handleCloseNavMenu}
                  sx={styles.buttonStyle}
                  >
                    Admin
                  </Button>
                  
                )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
                {!auth.isLoggedIn && (
                <Button
                variant='outlined'
                component={NavLink}
                to={"/login"}
                onClick={handleCloseNavMenu}
                color='secondary'
                sx={styles.buttonStyle}
              >
                Log in
              </Button>
                )}
                {auth.isLoggedIn && (
                  <Button 
                  variant='outlined'
                  component={NavLink}
                  to={"/home"}
                  onClick={auth.logout}
                  color='secondary'
                  sx={styles.buttonStyle}
                  >
                    Log out
                  </Button>
                  
                )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;