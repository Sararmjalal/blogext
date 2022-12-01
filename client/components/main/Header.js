import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import Link from "next/link"
import Appbar from "../dashboard/Appbar"
import { Container } from "@mui/system"
import { Grid, Typography,Tooltip } from "@mui/material"
import {MenuSharp, CloseSharp, LoginSharp, LogoutSharp} from '@mui/icons-material';
import { useRouter } from "next/router"

const Header = ({ isOpen = false, isLight = true, handleOpen, handleClose, handleOpenConfirm, menuItemsDashboard }) => {
  
  const thisUser = useSelector(selectUser)

  const {pathname} = useRouter()

  const withImagePaths = {
    home: "/",
    others: ['/blog/']
  }
  
  return (
    <Container
      sx={{
        color: isLight ?
          'primary.main'
          :
          'secondary.main',
      }}
      maxWidth={false}
      disableGutters
    >
      {
        thisUser &&
        <Appbar
          hasMenu={false}
          handleOpenConfirm={handleOpenConfirm}
          menuItemsDashboard={menuItemsDashboard} />
      }
      <Container variant='contained' maxWidth='100%'
        sx={{
          position: 'relative',
          width: {xs:'100vw', md:'calc(100vw - 48px)'},
          m: "auto",
          height: withImagePaths.others.some(path => pathname.includes(path) || pathname === withImagePaths.home) ? '0px' : '130px'
        }}>
        <Grid container sx={{
          position: 'absolute',
          padding: '40px 24px 80px 24px',
          zIndex: '9998',
          width: '100%',
          top: '40px',
          left: '0',
          right: '0',
          padding: {xs: '0 16px', xl:'0'}
        }}>
          <Grid item xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            {
              isOpen ?
                <CloseSharp
                  onClick={handleClose}
                  sx={{ fontSize: '32px', cursor: 'pointer' }} />
              :
                <MenuSharp
                  onClick={handleOpen}
                  sx={{ fontSize: '32px', cursor: 'pointer' }} />
            }
          </Grid>
          <Grid item xs={4}
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant='logo' sx={{color: 'inherit'}}>
              <Link href='/'>
              Blogext
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: "end"
            }}>
            {
            thisUser ?
             <Tooltip title='Logout'>
                  <LogoutSharp
                    onClick={handleOpenConfirm}
                    sx={{
                      fontSize: '32px',
                      cursor: 'pointer'
                    }} />
              </Tooltip>
                :
                <Tooltip title='Login'>
                  <Link href='/sign-in'>
                  <LoginSharp
                    sx={{
                      fontSize: '32px',
                      cursor:'pointer' }} />
                  </Link>
               </Tooltip>
            }
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Header

