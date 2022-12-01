import { Container, Box } from "@mui/system"
import Image from "next/image"
import useSWRImmutable from "swr"
import { Button, Typography, Rating } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { checkImg } from "../../apis/statics"

const TopRatedCard = ({ writer, place }) => {

  const { _id, averageScore, avatar, createdAt, bio, name  } = writer
  
  const { data } = useSWRImmutable(`${process.env.SERVER}/${avatar}`, checkImg)

  const router = useRouter()

  const calculatedDays = () => {
    const difference = (new Date() - new Date(createdAt)) / (1000 * 3600 * 24)
    if (difference < 1) return 'Joined in Today'
    if (difference > 1 && difference < 2) return 'Joined 1 day ago'
    return 'Joined' + Math.ceil(difference) + 'days ago'
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: { lg: 'flex', xs: 'block' },
        width: { lg: '1073px', xs: '100%' },
        bgcolor: "secondary.main",
        m: { xs: "auto", lg: "0" }
      }}>
      <Container
        sx={{
          width: { lg: "460px", xs: '100%' },
          position: "relative",
          height: "460px"
        }}>
        <Image
          src={data && avatar ? `${process.env.SERVER}/${avatar}` : '/statics/images/user-blog-default.svg'}
          alt="User Image"
          fill
          style={{objectFit:"cover"}}
        />
      </Container>
      <Container
        sx={{
          width: {xs: '100%', lg: "calc(100% - 460px)"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: '8px',
          padding: { xs: "24px 24px 36px 24px", lg: "30px 0px 30px 36px" },
          maxHeight: "460px"
        }}>
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: "12px",
            width: '100%'
          }}>
            <Typography variant="p">
              <Link href={`/writer/${_id}`}>
              {`#${name}`}
              </Link>
            </Typography>
          <Typography
            variant='p'
            sx={{
              fontSize: "10px",
              color: '#DCE4E7'
            }}>
            ●
          </Typography>
          <Typography
            variant="p"
            sx={{ color: "#949799" }}>
            {calculatedDays()}
          </Typography>
        </Box>
        <Typography
          component='h2'
          variant='h2'>
          {`Rank ${place} in Blogext`}
        </Typography>
        <Typography component='p' variant='subtitle2'>{bio ? bio : 'No info yet'}</Typography>
          <Rating readOnly value={averageScore}
            sx={{
              width: '100%',
              m: "16px 0"
            }}/>
        <Button variant='primaryButton' onClick={() => router.push(`/writer/${_id}`)}>See more</Button>
      </Container>
    </Container>
  )
}

export default TopRatedCard