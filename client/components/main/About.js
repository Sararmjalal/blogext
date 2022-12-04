import { Typography } from "@mui/material"
import { Container, Box } from "@mui/system"
import Image from "next/image"
import { useRouter } from "next/router"
import InstagramIcon from "../../icons/Instagram"
import LinkdinIcon from "../../icons/Linkdin"
import FacebookIcon from "../../icons/Facebook"
import YoutubeIcon from "../../icons/Youtube"

const About = () => {

  const router = useRouter()

  return (
    <Container
      disableGutters
      sx={{
        position: "absolute",
        top: '69px',
        right: 0,
        width: '338px',
        height: '515px',
        border: '2px solid black',
        display: { xl: "block", xs: "none" }
      }}>
      <Image
        src='/statics/images/the-developer.webp'
        alt='Developer picture'
        width='152'
        height='152'
        style={{
          objectFit: 'cover',
          borderRadius: '250px',
          position: "absolute",
          top: '-76px',
          left: "93px"
        }}
      />
      <Box
        width="278px"
        sx={{
          m: "92px auto 20px auto",
          textAlign: "center"
        }}>
        <Typography
          component="h3"
          variant='h3'
          sx={{ mb: "10px" }}>
          Sara Jalal
        </Typography>
        <Typography
          component='p'
          variant='p'
          sx={{
            color: "#949799",
            mb: "25px"
          }}>
          They say some beautiful paths can’t be discovered without getting lost, and in the time I'm developing this project,
          I really need to believe this. Being a developer was my dream once and I'm in the middle of achiving it.
          So if you try to do this yourself, remember that this road isn't that hard,
          but believeing in yourself is.
        </Typography>
        <Typography
          component='p'
          variant='subtitle2'
          sx={{
            fontWeight: "700",
            color: "primary.main",
            mb: "16px"
          }}>
          Follow me
        </Typography>
        <Box
          width='100%'
          sx={{
            display: 'flex',
            gap: '10px'
          }}>
          <a href='https://www.facebook.com/sarajalal78/'><FacebookIcon/></a>
          <a href='https://www.instagram.com/sararmjalal/'><InstagramIcon/></a>
          <a href='https://ir.linkedin.com/in/sara-jalal-97980622b?trk=public_profile_browsemap&original_referer='><LinkdinIcon/></a>
          <a href='/'><YoutubeIcon/></a>
        </Box>
      </Box>
    </Container>
  )
}

export default About