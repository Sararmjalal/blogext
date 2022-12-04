import Head from "next/head"
import { getAllBlogs, getAllWriters, getSingleWriter } from "../../apis/statics"
import { useTitle } from "../../lib"
import { Container } from "@mui/system"
import { Typography, Divider, Rating, Avatar } from "@mui/material"
import BlogSection from "../../components/blog/BlogSection"
import TopImage from "../../components/main/TopImage"
import { useEffect, useRef, useState } from "react"

export async function getStaticPaths() {
  const writers = await getAllWriters()
  const paths = writers.map(writer => (
    { params: { _id: writer._id } }
    
  ))

  return { paths, fallback: 'blocking'}
}

export async function getStaticProps(ctx) {

  const writer = await getSingleWriter(ctx.params._id)
  
  const allBlogs = await getAllBlogs()
  const thisBlogs = []
  allBlogs.forEach(blog => {
    writer.blogs.forEach(_id => {
      if(_id === blog._id) thisBlogs.push(blog)
    })
  })

  if (writer.msg) return {
    notFound: true
  }

  const isImageValid = !!writer.avatar

  return {
    props: { writer, thisBlogs, isImageValid },
    revalidate: 1
  }
}

const Writer = ({ writer, thisBlogs, isImageValid }) => {
  const ref = useRef(null)
  const [marginTop, setMarginTop] = useState(0)

  useEffect(() => {
    if(ref.current) setMarginTop(ref.current.clientHeight - 300)
  }, [ref.current])
  
  return (
    <Container maxWidth='100%' disableGutters>
      <Head>
        <title>{useTitle(writer.name)}</title>
        <meta name="description" content="Single writer page" />
      </Head>
      <TopImage src='/statics/images/single-writer.webp' alt="Writer main picture" />
      <Container
        maxWidth='xl'
        sx={{
          position: 'relative',
          padding: { xl: "0" }
        }}>
        <Container
          ref={ref}
          maxWidth='xl'
          sx={{
            bgcolor: "secondary.main",
            position: "absolute",
            top: '-300px',
            left: 0,
            padding: "100px 0 72px 0"
          }}>
          <Avatar
            src={isImageValid &&`${process.env.SERVER}/${writer.avatar}`}
            alt='Blog picture'
            sx={{
              width:'200px',
              height:'200px',
              objectFit: 'cover',
              borderRadius: '250px',
              position: "absolute",
              top: '-100px',
              left: "calc(50% - 100px)",
              border: "5px double white"
            }}>
            <img
              src='/statics/images/user-blog-default.svg'
              width='200px'
              height='200px'
              style={{
                objectFit:"cover"
              }}
            />
          </Avatar>
          <Container sx={{
            maxWidth: '706px',
            textAlign: "center"
          }}>
            <Typography component='h1' variant='h1'>My name is</Typography>
            <Typography component='h1' variant='h1' >{writer.name}</Typography>
            <Rating
              readOnly
              value={writer.averageScore}
              size='large'
              component='div'
                sx={{
                  width: 'max-content',
                  m: "40px 0"
                }}/>
            <Divider sx={{
              margin: "auto",
              color: "#DCE4E7",
              borderBottomWidth: "2px"
            }}/>
            <Typography
              component="p"
              variant="blockquote"
              sx={{
                maxWidth: 'inherit',
                p: "40px 0"
              }}>
              {writer.bio ? writer.bio : "No captions for now!"}
            </Typography>
            <Divider
              sx={{
                margin: "auto",
                color: "#DCE4E7",
                borderBottomWidth: "2px"
              }}/>
          </Container>
        </Container>
      </Container>
        <Container sx={{ mt: `${marginTop}px` }}>
        <Typography
          component='h3'
          variant='h3'
          sx={{
            mt: "69px",
            mb: "35px"
          }}>
          Blogs written by this writer
        </Typography>
          <BlogSection blogs={thisBlogs} creators={writer} />
        </Container>
    </Container>
    )
}

export default Writer