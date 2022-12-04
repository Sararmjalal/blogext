import { Container, Box } from "@mui/system"
import { Button, Typography, Rating } from "@mui/material"
import { useEffect, useRef } from "react"
import { checkImg } from "../../apis/statics"
import useSWR from "swr"
import Link from "next/link"
import { daysBetween } from '../../lib'

const BlogCard = ({ blog, creator }) => {

  const { _id, averageScore, imgurl, rateCount, title, updatedAt, content } = blog
  
  const { data } = useSWR(imgurl, checkImg)

  const contentRef = useRef(null) 

  useEffect(() => {
    if (contentRef.current) {
      const currentText = contentRef.current.innerText
      contentRef.current.innerHTML = currentText.length > 188 ? currentText.slice(0, 188) + '...' : currentText
    }
  }, [contentRef.current])
  
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
        disableGutters
        sx={{
          width: { lg: "460px", xs: '100%' },
          position: "relative",
          height: "460px"
        }}>
        <img
          src={data && imgurl ? imgurl : '/statics/images/user-blog-default.svg'}
          alt="Blog Image"
          width="100%"
          height="100%"
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
              {`#${creator.name}`}
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
            {daysBetween(updatedAt)}
          </Typography>
        </Box>
        <Typography
          component='h2'
          variant='h2'>
          {title.length > 45 ? title.slice(0, 45) + '...' : title}
        </Typography>
        <Typography ref={contentRef} component='p' variant='subtitle2' dangerouslySetInnerHTML={{__html: content}} />
        <Box component="div"
          sx={{
            display: "flex",
            gap: "6px",
            width: '100%',
            m: "16px 0"
          }}>
        <Rating readOnly value={averageScore} />
          <Typography
            component='span'
            variant='caption'
            sx={{ lineHeight: "23px" }}>
            {`by ${rateCount} person`}
          </Typography>
          </Box>
          <Link href={{
            pathname: '/blog/[_id]',
            query: {_id: _id}
          }}>
            <Button variant='primaryButton'>
              Read more
            </Button>
          </Link>
      </Container>
    </Container>
  )
}

export default BlogCard