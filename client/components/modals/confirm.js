import { removeCurrentUser } from "../../store/slice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { postJSON } from "../../apis/clients"
import { toast } from "react-toastify"


const Confirm = ({type, blogId}) => {

  const dispatch = useDispatch()
  const router = useRouter()

  const logout = () => {
    dispatch(removeCurrentUser())
    router.push('/')
  } 

  const remove = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/blog/delete`, { blogId })
      if (res.msg !== 'ok') return toast.error("Something went wrong. Please try again!")
      toast.info('Selected blog deleted successfully')
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  }

  return <h1 onClick={type === 'remove' ? remove : logout}>Confirm Modal</h1>
}

export default Confirm