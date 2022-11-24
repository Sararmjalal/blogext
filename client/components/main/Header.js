import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import Link from "next/link"
import Appbar from "../dashboard/Appbar"
import { Container } from "@mui/system"
import { Grid, Typography,Tooltip } from "@mui/material"
import {MenuSharp, LoginSharp, LogoutSharp} from '@mui/icons-material';

const Header = () => {
  const thisUser = useSelector(selectUser)
  return (
    <Container maxWidth={false} disableGutters>
      {
        thisUser && <Appbar hasMenu={false}/>
      }
      <Container variant='contained'
        sx={{
          position: 'relative',
          height: '130px',
          padding: '40px 0 80px 0',
          width: '100vw'
        }}>
        <Grid container sx={{
          position: 'absolute',
          width: '100%',
          top: '40px',
          left: '0',
          right: '0',
          padding: {xs: '0 16px', md:'0'}
        }}>
          <Grid item xs={4}
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}>
            <MenuSharp sx={{ fontSize: '32px', cursor:'pointer' }} />
          </Grid>
          <Grid item xs={4}
            sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Typography variant='logo'>
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
                  <LoginSharp
                    sx={{
                      fontSize: '32px',
                      cursor:'pointer' }} />
               </Tooltip>
            }
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

export default Header

