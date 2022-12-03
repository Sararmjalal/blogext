import { Container, Box } from "@mui/system"
import { Button, Typography, Rating } from "@mui/material"
import { useEffect, useRef } from "react"
import { checkImg } from "../../apis/statics"
import useSWRImmutable from "swr"
import Image from "next/image"
import Link from "next/link"

const BlogCard = ({ blog, creator }) => {

  const { _id, averageScore, imgurl, rateCount, title, updatedAt, content } = blog
  
  const { data } = useSWRImmutable(`${process.env.SERVER}/${imgurl}`, checkImg)

  const contentRef = useRef(null) 

  useEffect(() => {
    if (contentRef.current) {
      const currentText = contentRef.current.innerText
      contentRef.current.innerHTML = currentText.length > 188 ? currentText.slice(0, 188) + '...' : currentText
    }
  }, [contentRef.current])

  const calculatedDays = () => {
    const difference = (new Date() - new Date(updatedAt)) / (1000 * 3600 * 24)
    if (difference < 1) return 'Today'
    if (difference > 1 && difference < 2) return '1 day ago'
    return Math.ceil(difference) + 'days ago'
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
          src={data && imgurl ? `${process.env.SERVER}/${imgurl}` : '/statics/images/user-blog-default.svg'}
          alt="Blog Image"
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
              <Link href={`/writer/${creator._id}`}>
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
            {calculatedDays()}
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
            {`by ${rateCount} people`}
          </Typography>
          </Box>
        <Button variant='primaryButton'>
          <Link href={{
            pathname: '/blog/[_id]',
            query: {_id,}
          }}>
          Read more
          </Link>
        </Button>
      </Container>
    </Container>
  )
}

export default BlogCard