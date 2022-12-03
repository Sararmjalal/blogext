import Head from 'next/head'
import { useTitle } from '../lib'
import { getTopWriters, getTopBlogs, getAllWriters } from '../apis/statics'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'
import TopImage from '../components/main/TopImage'
import About from '../components/main/About'
import BlogSection from '../components/blog/BlogSection'
import WriterSection from '../components/writer/WriterSection'

export async function getStaticProps() {
  const writers = await getTopWriters()
  const blogs = await getTopBlogs()
  
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
        writers,
        blogs,
        creators,
      },
      revalidate: 60 * 60 * 24 
  }
}

export default function Home({ writers, blogs, creators }) {
  return (
    <Container maxWidth='100%' disableGutters>
      <Head>
        <title>{useTitle('Home')}</title>
        <meta name="description" content="Simple Blog App with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopImage src='/statics/images/home-page.jpg' alt="Home page main picture" />
      <Container maxWidth='xl' sx={{ position: 'relative', padding: {xl:"0"} }}>
        <About />
        <Typography component='h3' variant='h3' sx={{ mt: "69px", mb: "35px" }}>Top rated blogs</Typography>
          <BlogSection blogs={blogs} creators={creators} />
        <Typography component='h3' variant='h3' sx={{ mt: "69px", mb: "35px" }}>Top rated writers</Typography>
          <WriterSection writers={writers} />
      </Container>
    </Container>
  )
}
