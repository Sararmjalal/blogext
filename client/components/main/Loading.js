import LinearProgress from '@mui/material/LinearProgress';
import Container from '@mui/material/Container';

const Loading = () => {

  return (
    <Container maxWidth={false} sx={{position: "relative"}}>
    <Container maxWidth={false} className='loadingContainer'>
          <LinearProgress color='primary' className='loading' />
    </Container>
    </Container>
  )
}

export default Loading