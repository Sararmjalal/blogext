import { getAllBlogs, getAllWriters } from '../apis/statics'
import { useTitle } from "../lib"
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import Head from "next/head"
import BlogSection from '../components/blog/BlogSection'

export async function getStaticProps() {
  const blogs = await getAllBlogs()
  const allWriters = await getAllWriters()
  const creatorIds = blogs.map(blog => (blog.creatorId))
  const creators = []

  allWriters.forEach(writer => {
  creatorIds.forEach(_id => {
    if (_id === writer._id) creators.push( {
      name: writer.name,
      _id,
    })
  })
  })

  return {
    props: {
      blogs,
      creators
    },
    revalidate: 1
  }
}

const Blogs = ({blogs, creators}) => {
  return (
    <Container maxWidth='100%' disableGutters>
      <Head>
        <title>{useTitle('All blogs')}</title>
        <meta name="description" content="All blogs page" />
      </Head>
      <Container maxWidth='xl' sx={{ padding: {xl:"0"} }}>
        <Typography component='h3' variant='h3' sx={{ mt: "69px", mb: "35px" }}>All blogs</Typography>
          <BlogSection blogs={blogs} creators={creators} />
      </Container>
    </Container>
  )
}

export default Blogs