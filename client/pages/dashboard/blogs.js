import { useRouter } from "next/router"
import useSWR from "swr"
import { fetcher } from "../../apis/clients"
import { useToken, setLayout } from "../../lib"
import DashboardLayout from "../../layoyts/dashboard"
import { useDispatch } from "react-redux"
import { setCurrentBlog } from "../../store/slice"

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

  return <h1>My Blogs yeay!</h1>
}

export default MyBlogs

setLayout(MyBlogs, DashboardLayout)
