import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../store/slice"
import Loading from "../components/main/Loading"
import Navbar from "../components/dashboard/Navbar"
import Appbar from "../components/dashboard/Appbar"
const DashboardLayout = ({children}) => {
  
  const router = useRouter()
  const thisUser = useSelector(selectUser)
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if(!thisUser) router.push('/sign-in')
  }, [])

  if (!thisUser) return <Loading />
  return (
    <>
      <Appbar handleDrawerToggle={handleDrawerToggle} />
      <Navbar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout