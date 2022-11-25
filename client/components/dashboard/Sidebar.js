import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

const drawerWidth = 240;

function Sidebar({ handleDrawerToggle, mobileOpen, handleOpenConfirm, menuItemsDashboard }) {

  const {pathname} = useRouter()

  const drawer = (
    <div>
      <Toolbar sx={{minHeight: {sm: "56px"}}}/>
      <List>
        {menuItemsDashboard.map(({name, path}) => (
          <Link
            key={name.trim()}
            passHref
            href={path}
            style={pathname === path ? { color: "white" } : { color: "inherit" }}
            onClick={name === 'Logout' && handleOpenConfirm}
          >
          <ListItem>
            <ListItemButton sx={ {"&:active":{background: "#1a1a1ade"}}}>
              <ListItemText sx={{ "&:hover": { color: "secondary.main" } }} primary={name} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: "primary.main", color: 'gray' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              bgcolor: "primary.main",
              color: 'gray'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
    </Box>
  );
}

export default Sidebar;