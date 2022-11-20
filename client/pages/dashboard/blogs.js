import { useRouter } from "next/router"
import useSWR from "swr"
import { fetcher } from "../../apis/clients"
import { useToken } from "../../lib"
import { useDispatch } from "react-redux"
import { setCurrentBlog } from "../../store/slice"
import { useTitle } from "../../lib"
import Head from "next/head"


const MyBlogs = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const { data, error } = useSWR(
    [
      `${process.env.SERVER}/blog/my-blogs`,
      {
        'Content-Type': 'application/json',
        'auth': useToken()
      }
    ]
    , fetcher)
    
  const onEdit = (blog) => {
    dispatch(setCurrentBlog(blog))
    router.push(`/dashboard/edit-blog/${blog._id}`)
  }
  
  
  if (error) console.log(error)
  if (!data) return <h1>Loading...</h1>

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