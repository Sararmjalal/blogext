import useSWR from "swr"
import { fetcher } from "../../apis/clients"
import { useToken } from "../../lib"

const MyBlogs = () => {

  const { data } = useSWR ([`${process.env.SERVER}/blog/my-blogs`, useToken], fetcher)

  console.log(data)

  if (!data || data.msg) return <h1>Loading...</h1>

  return <h1>My Blogs yeay!</h1>
}

export default MyBlogs