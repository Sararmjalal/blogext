import Head from 'next/head';
import { Box, Button, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTitle } from '../lib';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter()

  return (
    <>
      <Head><title>{useTitle('Not Found')}</title></Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <img
                alt="Under development"
                src="/statics/images/404.png"
                style={{
                  marginTop: 50,
                  display: 'inline-block',
                  maxWidth: '100%',
                  width: 560
                }}
              />
            </Box>
              <Button
                component="a"
                startIcon={(<ArrowBackIcon fontSize="small" />)}
                sx={{ mt: 3 }}
              variant="contained"
              onClick={() => router.back()}
              >
                Go back
              </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default NotFound;
