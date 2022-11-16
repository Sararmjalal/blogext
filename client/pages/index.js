import Head from 'next/head'
import Button from '@mui/material/Button'
import { useTitle } from '../lib'

export default function Home() {
  return (
    <div>
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