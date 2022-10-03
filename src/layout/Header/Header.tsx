import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#283e4a', zIndex: (theme) => theme.zIndex.drawer + 1 }} className='header-nav'>
      <Toolbar>
        <Link to={"/"}>
          <Typography variant="h6">
            Aquaculture
          </Typography>
        </Link >
      </Toolbar>
    </AppBar>
  );
}

export default Header;
