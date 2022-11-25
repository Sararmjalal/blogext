import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../store/slice"
import Loading from "../components/main/Loading"
import Sidebar from "../components/dashboard/Sidebar"
import Appbar from "../components/dashboard/Appbar"
import ConfirmModal from "../components/modals/confirm"
const DashboardLayout = ({children, openConfirm, handleOpenConfirm, handleCloseConfirm}) => {
  
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
      <Appbar
        handleDrawerToggle={handleDrawerToggle}
        handleOpenConfirm={handleOpenConfirm} />
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        handleOpenConfirm={handleOpenConfirm}
      />
      <ConfirmModal
        openConfirm={openConfirm}
        handleOpenConfirm={handleOpenConfirm}
        handleCloseConfirm={handleCloseConfirm}
        type="logout"  
      />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout