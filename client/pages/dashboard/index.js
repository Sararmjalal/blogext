import { Button } from "@mui/material"
import { removeCurrentUser } from "../../store/slice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"

const Dashboard = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const logout = () => {
    dispatch(removeCurrentUser())
    router.push('/')
  }
  return <Button onClick={logout}>Logout</Button>
}

export default Dashboard