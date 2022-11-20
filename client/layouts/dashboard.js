import { useRouter } from "next/router"
import { useEffect } from "react"
import TopBar from "../components/main/TopBar"
import { useSelector } from "react-redux"
import { selectUser } from "../store/slice"


const DashboardLayout = ({children}) => {
  
  const router = useRouter()

  const thisUser = useSelector(selectUser)

  useEffect(() => {
    if(!thisUser) router.push('/sign-in')
  }, [])

  return (
    <section>
      <TopBar />
      <main>{children}</main>
    </section>
  )
}

export default DashboardLayout