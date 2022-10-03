import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './SideNav.scss';

function SideNav() {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem key="Home" disablePadding>
            <ListItemButton onClick={(event) => { navigate('/'); }}>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="Register Farm" disablePadding>
            <ListItemButton onClick={(event) => { navigate('/add-farm'); }}>
              <ListItemText primary="Register Farm" />
            </ListItemButton>
          </ListItem>
          <ListItem key="Register Worker" disablePadding>
            <ListItemButton onClick={(event) => { navigate('/add-worker'); }}>
              <ListItemText primary="Register Worker" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default SideNav;
