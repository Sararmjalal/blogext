import { setLayout } from "../../lib"
import DashboardLayout from "../../layoyts/dashboard"
import { Button } from "@mui/material"
import { removeCurrent } from "../../store/slice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
const Dashboard = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const logout = () => {
    dispatch(removeCurrent())
    router.push('/')
  }
  return <Button onClick={logout}>Logout</Button>
}

export default Dashboard

setLayout(Dashboard, DashboardLayout)