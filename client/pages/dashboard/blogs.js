import useSWR from "swr"
import { fetcher } from "../../apis/clients"
import { useToken, useTitle } from "../../lib"
import Head from "next/head"
import Loading from "../../components/main/Loading"


const MyBlogs = () => {

  const { data, error } = useSWR(
    [
      `${process.env.SERVER}/blog/my-blogs`,
      {
        'Content-Type': 'application/json',
        'auth': useToken()
      }
    ]
    , fetcher)
    
  if (!data) return <Loading />

  return (
  <section>
    <Head>
      <title>{useTitle('My Blog')}</title>
    </Head>
      <div>
        <h1>My Blogs Yeay!</h1>
      </div>
  </section>
  )
}

export default MyBlogs