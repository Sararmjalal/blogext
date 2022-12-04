import Head from "next/head"
import { getAllWriters } from '../apis/statics'
import { useTitle } from "../lib"
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import WriterSection from "../components/writer/WriterSection"

export async function getStaticProps() {
  const writers = await getAllWriters()
  writers.sort((a, b) => {
    if (a.averageScore > b.averageScore) return -1
    if (a.averageScore < b.averageScore) return 1
    return 0
  })
  return {
    props: {
      writers
    },
    revalidate: 1
  }
}

const Writers = ({ writers }) => {
  return (
    <Container maxWidth='100%' disableGutters>
      <Head>
        <title>{useTitle('All Writers')}</title>
        <meta name="description" content="All writers page" />
      </Head>
      <Container maxWidth='xl' sx={{ position: 'relative', padding: {xl:"0"} }}>
        <Typography component='h3' variant='h3' sx={{ mt: "69px", mb: "35px" }}>All writers</Typography>
        <WriterSection writers={writers} />
      </Container>
    </Container>
    )
}

export default Writers