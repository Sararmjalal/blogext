import Header from '../main/Header';
import Link from 'next/link';
import { Container } from '@mui/system';
import { List,ListItem, Fade, Modal, Backdrop, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { HorizontalRuleSharp } from '@mui/icons-material';

// const style = {
//   height: '100vh'
// };

export default function MenuModal({ open, handleClose, menuItems }) {
  const {pathname} = useRouter()
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Container variant='main'
            sx={{bgcolor: 'primary.main', height:"100%"}}
            maxWidth={false}
            disableGutters>
            <Header isOpen={true} isLight={false} handleClose={handleClose} />
            <Container variant='contained' maxWidth='xl' disableGutters>
            <List sx={{border: "none"}} onClick={handleClose}>
              {menuItems.map(({name, path}) => (
                <Link key={name.trim()} passHref href={path} style={pathname === path ? {color: "white"} : {color: "#949799"}}>
                  <ListItem sx={{ mb: "43px", gap: '14px' }}>
                    {
                      pathname === path && <HorizontalRuleSharp sx={{fontSize: '64px'}} />
                    }
                    <Typography component='h1' variant='h1' sx={{ "&:hover": { color: "secondary.main" },color: "inherit" }}>
                      {name}
                    </Typography>
                </ListItem>
                </Link>
              ))}
             </List>
            </Container>
          </Container>
        </Fade>
      </Modal>
    </div>
  );
}