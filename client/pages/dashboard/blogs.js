import useSWR from "swr"
import { fetcher } from "../../apis/clients"
import { useToken, useTitle } from "../../lib"
import Head from "next/head"
import Loading from "../../components/main/Loading"
import MyBlogCard from "../../components/blog/MyBlogCard"
import { Container } from "@mui/system"
import { Typography, Divider, List } from "@mui/material"


const MyBlogs = () => {

  const swrKey = [
    `${process.env.SERVER}/blog/my-blogs`,
    {
      'auth': useToken()
    }
  ]

  const { data, error } = useSWR(swrKey, fetcher)
    
  if (!data) return <Loading />

  return (
  <section>
    <Head>
      <title>{useTitle('My Blogs')}</title>
    </Head>
      <Container disableGutters sx={{mb:{xs:"40px", sm: '0'}}}>
        <Typography component='h1' variant='h2'>My Blogs</Typography>
        <Divider sx={{ margin: '10px 0 20px 0' }} />
        <Container
          disableGutters
          maxWidth='100%'
          sx={{width: {xs:'100%', md:'48%'}, margin: '0'}}>
          <List sx={{ width: '100%', maxWidth: '100%'}}>
            {
              data[0] ?
            data.map(({ title, imgurl, _id }) => (
              <MyBlogCard
                title={title}
                imgurl={imgurl}
                _id={_id}
                key={_id}
                swrKey={swrKey}
              />
            ))
                :
                <Typography variant="caption">You don't have any blogs yet. Try by creating your first one!</Typography>
          }
        </List>
      </Container>
      </Container>
  </section>
  )
}

export default MyBlogs