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
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/slice';
import { useState } from 'react';

function Appbar({ hasMenu = true, handleDrawerToggle, handleOpenConfirm, menuItemsDashboard }) {

  const [anchorElUser, setAnchorElUser] = useState(null);
  const { avatar } = useSelector(selectUser)
  const { pathname } = useRouter()
  
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
          minHeight: { sm: "56px" },
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
              <Avatar
                alt="Writer profile picture"
                src={`${process.env.SERVER}/${avatar}`}
              >
                <img
                  src='/statics/images/user-blog-default.svg'
                  style={{width:"100%", height: "100%", objectFit: "cover"}}
                />
              </Avatar>
              </IconButton>
            </Tooltip>
          <Menu
              elevation={0} 
              sx={{ mt: '47px', zIndex:9999 }}
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
            {menuItemsDashboard.map(({ name, path }) => (
              <Link
                key={name.trim()}
                passHref href={path}
                style={pathname === path ? { color: "white" } : { color: "gray" }}
              >
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
                <MenuItem
                  sx={{
                    color: "gray" ,
                    "&:hover": { color: "secondary.main", bgcolor: "inherit" },
                    "&:active": { background: "#1a1a1ade" }
                  }}
                  onClick={handleOpenConfirm}
                  >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default Appbar;