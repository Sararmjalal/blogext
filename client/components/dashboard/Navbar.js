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

const menuItems = [
  {
    name: 'My Blogs',
    path: '/dashboard/blogs'
  },
  {
    name: 'Add Blog',
    path: '/dashboard/add-blog'
  },
  {
    name: 'Edit Profile',
    path: '/dashboard/edit-profile'
  },
  {
    name: 'Logout',
    path: ''
  },
]

function Navbar({ handleDrawerToggle, mobileOpen }) {
  const router = useRouter()
  const drawer = (
    <div>
      <Toolbar sx={{minHeight: {sm: "56px"}}}/>
      <List>
        {menuItems.map(({name, path}, index) => (
          <Link key={name.trim()} passHref href={path} style={router.pathname === path ? {color: "white"} : {color: "inherit"}}>
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

export default Navbar;