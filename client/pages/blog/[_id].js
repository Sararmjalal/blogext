import Head from "next/head"
import CommentSection from "../../components/blog/CommentSection"
import TopImage from "../../components/main/TopImage"
import { getAllBlogs, getSingleBlog, getSingleWriter } from "../../apis/statics"
import { useTitle } from "../../lib"
import { Container } from "@mui/system"
import { Typography, Rating, Divider, Avatar, CssBaseline } from "@mui/material"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"

export async function getStaticPaths() {
  const blogs = await getAllBlogs()
  const paths = blogs.map(blog => (
    {params: {_id: blog._id}}
  ))

  return { paths, fallback: 'blocking'}
}

export async function getStaticProps(ctx) {

  const blog = await getSingleBlog(ctx.params._id)

  if (blog.msg) return {
    notFound: true
  }

  const isImageValid = !!blog.imgurl
  
  const creator = await getSingleWriter(blog.creatorId)

  return {
    props: { blog, creator, isImageValid },
    revalidate: 10
  }
}

const Blog = ({ blog, creator, isImageValid }) => {
  
  const ref = useRef(null)
  const [marginTop, setMarginTop] = useState(0)

  useEffect(() => {
    if(ref.current) setMarginTop(ref.current.clientHeight - 300)
  }, [ref.current])

  return (
    <Container maxWidth='100%' disableGutters>
      <Head>
        <title>{useTitle(blog.title)}</title>
        <meta name="description" content="Single blog page" />
      </Head>
      <TopImage src='/statics/images/single-writer.webp' alt="Blog main picture" />
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
            src={isImageValid && blog.imgurl}
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
            <Typography component='h1' variant='h1' >{blog.title}</Typography>
            <Rating
              readOnly
              value={blog.averageScore}
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
          </Container>
        </Container>
      </Container>
      <Container sx={{ mt: `${marginTop}px` }}>
        <CssBaseline />
        <Container sx={{mb:"40px"}} dangerouslySetInnerHTML={{ __html: blog.content }} />
        <Typography
          variant='caption'
          sx={{
            fontStyle: "italic",
            fontSize: "16px",
            ml:'22px'
          }}>
          Writtern by:
          <Typography
            variant='caption'
            sx={{
              fontWeight: "700",
              fontStyle: "italic",
              fontSize: "16px"
            }}>
            <Link href={{
              pathname: "/writer/[_id]",
              query: {_id: blog.creatorId}
            }}>
             {" " + creator.name}
            </Link>
          </Typography>
        </Typography>
        <Divider sx={{
          margin: "auto",
          color: "#DCE4E7",
          borderBottomWidth: "2px",
          height:'50px' 
        }} />
        <CommentSection blogId={blog._id}/>
      </Container>
    </Container>
  )
}

export default Blog