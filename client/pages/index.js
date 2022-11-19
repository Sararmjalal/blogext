import Head from 'next/head'
import Button from '@mui/material/Button'
import { useTitle } from '../lib'
import { getTopWriters, getTopBlogs } from '../apis/statics'
import Header from '../components/Main/Header'

export async function getStaticProps() {
    const writers = await getTopWriters()
    const blogs = await getTopBlogs()
    return {
      props: {
        writers,
        blogs
      },
      revalidate: 84600 //roozanas
  }
}

export default function Home({writers, blogs}) {
  return (
    <div>
      <Header />
      <Head>
        <title>{useTitle('Home')}</title>
        <meta name="description" content="Simple Blog App with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 style={{ textAlign: "center" }}>Welcome Home!</h1>
      <Button variant="contained">Hello World</Button>
    </div>
  )
}
