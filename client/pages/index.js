import Head from 'next/head'
import Button from '@mui/material/Button'
import { useTitle } from '../lib'
import { getTopWriters, getTopBlogs, getAllWriters } from '../apis/statics'
import { Typography } from '@mui/material'
import TopRatedBlogCard from '../components/blog/TopRatedCard'
import TopRatedUserCard from '../components/writer/TopRatedCard'
import { Container } from '@mui/system'
import TopImage from '../components/main/TopImage'

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
      <Container maxWidth='xl'>
        <Typography component='h3' variant='h3' sx={{ mt: "69px", mb: "35px" }}>Top rated blogs</Typography>
        <Container maxWidth='100%' disableGutters sx={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "start" }}>
          {
            !blogs[0] ?
              <Typography variant="caption">No blogs found, sorry!</Typography>
              :
              blogs.map(blog => (
                <TopRatedBlogCard
                  key={blog._id}
                  blog={blog}
                  creator={creators.find(creator => creator._id === blog.creatorId)}
                />
              ))
          }
        </Container>
        <Typography component='h3' variant='h3' sx={{ mt: "69px", mb: "35px" }}>Top rated writers</Typography>
          <Container maxWidth='100%' disableGutters sx={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "start" }}>
            {
              !writers[0] ?
                <Typography variant="caption">No writers found, sorry!</Typography>
                :
                writers.map((writer, index) => (
                  <TopRatedUserCard
                    key={writer._id}
                    writer={writer}
                    place={index + 1}
                  />
                ))
            }
          </Container>
      </Container>
    </Container>
  )
}
