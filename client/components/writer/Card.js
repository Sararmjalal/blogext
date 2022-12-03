import { Container, Box } from "@mui/system"
import Image from "next/image"
import useSWRImmutable from "swr"
import { Button, Typography, Rating } from "@mui/material"
import Link from "next/link"
import { checkImg } from "../../apis/statics"
import {daysBetween} from "../../lib"
const WriterCard = ({ writer, place }) => {

  const { _id, averageScore, avatar, createdAt, bio, name  } = writer
  
  const { data } = useSWRImmutable(`${process.env.SERVER}/${avatar}`, checkImg)

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
            <Link href={{
                pathname: '/writer/[_id]',
                query: {_id,}
              }}>
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
            {daysBetween(createdAt) === 'Today' ? "Joined in Today" : 'Joined ' + daysBetween(createdAt)}
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
          <Link href={{
            pathname: '/writer/[_id]',
            query: {_id,}
          }}>
            <Button variant='primaryButton'>
              See more
            </Button>
          </Link>
      </Container>
    </Container>
  )
}

export default WriterCard