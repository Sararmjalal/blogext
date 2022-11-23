import Head from 'next/head'
import Button from '@mui/material/Button'
import { useTitle } from '../lib'
import { getTopWriters, getTopBlogs } from '../apis/statics'
import Header from '../components/Main/Header'
import { Typography } from '@mui/material'

export async function getStaticProps() {
    const writers = await getTopWriters()
    const blogs = await getTopBlogs()
    return {
      props: {
        writers,
        blogs
      },
      revalidate: 60 * 60 * 24   //roozanas
  }
}

export default function Home({writers, blogs}) {
  return (
    <div>
      <Head>
        <title>{useTitle('Home')}</title>
        <meta name="description" content="Simple Blog App with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography component='h2' variant='h2'> WWWWWWWWWWWWWWWWiiiiiiiiiiiiiiiiiii wwwwwwwwwwwwwww</Typography>
      <h1>Welcome Home!</h1>
      <Button className='buttonPrimary' component="button" variant="button">Hello World</Button>
    </div>
  )
}
