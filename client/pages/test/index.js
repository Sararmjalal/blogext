import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Link from 'next/link';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map(({name, path}, index) => (
          <Link passHref href={path}>
          <ListItem key={name}>
            <ListItemButton>
              <ListItemText sx={{ "&:hover": { color: "secondary.main" } }} primary={name} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Typography className='blockquote' variant='caption'>Hello I'm a blockqoute</Typography>
  );
}

export default ResponsiveDrawer;