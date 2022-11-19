import { useRouter } from "next/router"
import { useEffect } from "react"
import TopBar from "../components/main/TopBar"


const DashboardLayout = ({ children, thisUser }) => {
  
  const router = useRouter()

  useEffect(() => {
    // if(!thisUser) router.push('/sign-in')
    console.log(thisUser)
  }, [thisUser])

  return (
    <section>
      <TopBar />
      <main>{children}</main>
    </section>
  )
}

export default DashboardLayout