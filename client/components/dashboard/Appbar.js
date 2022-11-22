import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

function Appbar({hasMenu = true, handleDrawerToggle }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const router = useRouter()

  return (
    <AppBar
      elevation={0}
      position="static"
    >
      <Toolbar disableGutters
        sx={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          ml: hasMenu ? { sm: "240px" } : "0",
          p: "0px 15px",
          minHeight: {sm: "56px"}
        }}>
        <Box sx={{ width: "100%" }}>
          {
            hasMenu && (
              <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: 'none' } }}
                >
                  <MenuIcon />
             </IconButton>
            )
          }
        </Box>
        <Box sx={{display:"flex", justifyContent: "end"}}>
            <Tooltip title="Open Settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
          <Menu
              elevation={0} 
              sx={{ mt: '47px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
            {menuItems.map(({ name, path }) => (
                <Link key={name.trim()} passHref href={path} style={router.pathname === path ? {color: "white"} : {color: "gray"}}>
                  <MenuItem
                    sx={{
                      "&:hover": { color: "secondary.main", bgcolor: "inherit" },
                      "&:active": { background: "#1a1a1ade" }
                    }}
                    onClick={handleCloseUserMenu}
                    >
                    <Typography textAlign="center">{name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default Appbar;