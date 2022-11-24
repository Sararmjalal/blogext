import Head from 'next/head';
import { Box, Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useTitle } from '../lib';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NotFound = () => {
  const router = useRouter()

  return (
    <Container maxWidth='xl' variant="main">
    <Head><title>{useTitle('Not Found')}</title></Head>
    <Container
        maxWidth="md"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}>
        <Box
          sx={{
            position: "relative",
            minWidth: '600px',
            minHeight: '600px',
            overflow: "hidden"
        }}>
        <Image
          src='/statics/images/404.png'
          alt='404 picture'
          fill={true}
          style={{
          objectFit: 'cover',
          }}
          />
        </Box>
        <Typography component="p" variant='h3' sx={{fontSize: '33px', lineHeight:'33px'}}>The page you are looking for is not here!</Typography>
        <Button
          startIcon={(<ArrowBackIcon fontSize="small" />)}
          sx={{ mt: 3 }}
           variant="primaryButton"
          onClick={() => router.back()}
          >
            Go back
          </Button>
      </Container>
    </Container>
  );
}

export default NotFound;
