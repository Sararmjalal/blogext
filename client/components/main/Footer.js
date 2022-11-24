import { Typography, Container } from "@mui/material"
import { Box } from "@mui/system"
import Link from 'next/link';

const Footer = ({menuItems}) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ mt: '76px', bgcolor:'secondary.main' }} >
      <Container
        variant="contained"
        sx={{
          display: "grid",
          gridTemplateColumns: { md: '1fr 1fr' },
        }}>
        <Box
          sx={{
            padding: '33px 0'
          }}>
          <Typography variant='logo'>
            <Link href='https://github.com/Sararmjalal/blogext'>
             Blogext
            </Link>
          </Typography>
          <Typography component='p' variant="caption">Copyrights © 2022. Developed by Sara Jalal.</Typography>
        </Box>
        <Box
          sx={{
            padding: '52px 0'
          }}>
          <Box
            sx={{
              display: 'flex',
              gap: '32px',
              justifyContent: 'end'
            }}>
            {menuItems.map(({ name, path }) => (
              <Typography
                key={name}
                component='p'
                variant='subtitle2'
                sx={{ '&:hover': { color: 'primary.main' }}}>
                <Link href={path}>
                  {name}
                </Link>
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Footer