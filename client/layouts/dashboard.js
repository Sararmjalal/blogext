import { useRouter } from "next/router"
import { useEffect } from "react"
import TopBar from "../components/main/TopBar"
import { useSelector } from "react-redux"
import { selectUser } from "../store/slice"
import Loading from "../components/main/Loading"

const DashboardLayout = ({children}) => {
  
  const router = useRouter()

  const thisUser = useSelector(selectUser)

  useEffect(() => {
    if(!thisUser) router.push('/sign-in')
  }, [])

  if (!thisUser) return <Loading />
  return (
    <section>
      <TopBar />
      <main>{children}</main>
    </section>
  )
}

export default DashboardLayout