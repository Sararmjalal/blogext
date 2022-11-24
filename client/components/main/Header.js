import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import Link from "next/link"
import Appbar from "../dashboard/Appbar"
import { Container } from "@mui/system"
import { Grid, Typography,Tooltip } from "@mui/material"
import {MenuSharp, CloseSharp, LoginSharp, LogoutSharp} from '@mui/icons-material';
import { useState } from "react"

const Header = ({ isOpen = false, isLight = true, handleOpen, handleClose }) => {
  
  const thisUser = useSelector(selectUser)
  
  const [openConfirm, setOpenConfirm] = useState(false)

  return (
    <Container sx={{color: isLight ? 'primary.main' : 'secondary.main'}} maxWidth={false} disableGutters>
      {
        thisUser && <Appbar hasMenu={false}/>
      }
      <Container variant='contained' maxWidth='xl'
        sx={{
          position: 'relative',
          height: '130px',
          padding: '40px 0 80px 0',
          width: '100vw',
          ml: {xs:'0', md:'auto'}
        }}>
        <Grid container sx={{
          position: 'absolute',
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
              <CloseSharp onClick={handleClose} sx={{ fontSize: '32px', cursor: 'pointer' }} />
              :
              <MenuSharp sx={{ fontSize: '32px', cursor: 'pointer' }} onClick={handleOpen}/>
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

