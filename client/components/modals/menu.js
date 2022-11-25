import Link from 'next/link';
import { Container, Box } from '@mui/system';
import { List,ListItem, Fade, Modal, Backdrop, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { HorizontalRuleSharp } from '@mui/icons-material';
import { selectUser } from '../../store/slice';
import { useSelector } from 'react-redux';

export default function MenuModal({ open, handleClose, menuItems }) {

  const { pathname } = useRouter()
  const thisUser = useSelector(selectUser)

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        height='100vh'
        sx={{ opacity: '1', bgcolor: 'primary.main'}}
      >
        <Fade in={open}>
          <Container variant='main'
            maxWidth={false}
            disableGutters
            height='100%'
          >
              <Box sx={{height: thisUser ? '186px' : '130px'}} />
              <List
                // sx={{ border: "0.5px solid white" }}
                onClick={handleClose}>
                {menuItems.map(({name, path}) => (
                <Link key={name.trim()}
                passHref
                href={path}
                style={pathname === path ? { color: "white" } : { color: "#949799" }}>
                  <ListItem sx={{ mb: "43px", gap: '14px'}}>
                    {
                      pathname === path && <HorizontalRuleSharp sx={{fontSize: '64px'}} />
                    }
                    <Typography
                      component='h1'
                      variant='h1'
                      sx={{ "&:hover": { color: "secondary.main" }, color: "inherit"}}>
                      {name}
                    </Typography>
                </ListItem>
                </Link>
              ))}
             </List>
            </Container>
        </Fade>
      </Modal>
    </div>
  );
}