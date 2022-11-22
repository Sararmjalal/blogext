import { useToken } from "../lib"
import { postMe } from "../apis/clients"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "../store/slice"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import DashboardLayout from "./dashboard"
import MainLayout from './main'
import Loading from "../components/main/Loading"
import localFont from '@next/font/local'

const myFont = localFont({ src: './fonts/CormorantGaramond-Bold.ttf' })

const StateProvider = ({children}) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // if(router.pathname === "/_error") router.push('/404')
    if (useToken()) ifVerified()
    else setLoading(false)
  }, [])

  const ifVerified = async () => {
    const user = await postMe()
    dispatch(setCurrentUser(user))
    setLoading(false)
  }

  if (loading) return <Loading />
  if (router.asPath.includes('dashboard')) return <DashboardLayout><main className={myFont.className}>{children}</main></DashboardLayout>
  return <MainLayout><main className={myFont.className}>{children}</main></MainLayout>
}

export default StateProvider