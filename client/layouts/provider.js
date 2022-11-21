import { useToken } from "../lib"
import { postMe } from "../apis/clients"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "../store/slice"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import DashboardLayout from "./dashboard"
import MainLayout from './main'
import Loading from "../components/main/Loading"

const StateProvider = ({children}) => {
  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (useToken()) ifVerified()
    else setLoading(false)
  }, [])

  const ifVerified = async () => {
    const user = await postMe()
    dispatch(setCurrentUser(user))
    setLoading(false)
  }

  if (loading) return <Loading />
  if (router.asPath.includes('dashboard')) return <DashboardLayout><main>{children}</main></DashboardLayout>
  return <MainLayout><main>{children}</main></MainLayout>
}

export default StateProvider