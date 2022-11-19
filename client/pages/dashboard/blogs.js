import { useRouter } from "next/router"
import useSWR from "swr"
import { fetcher } from "../../apis/clients"
import { useToken } from "../../lib"

const MyBlogs = () => {

  const router = useRouter()

  const { data, error } = useSWR(
    [
      `${process.env.SERVER}/blog/my-blogs`,
      {
        'Content-Type': 'application/json',
        'auth': useToken
      }
    ]
    , fetcher)

  if (error) console.log(error)
  if (!data) return <h1>Loading...</h1>

  return <h1>My Blogs yeay!</h1>
}

export default MyBlogs