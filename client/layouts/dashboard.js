import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../store/slice"
import Loading from "../components/main/Loading"
import Sidebar from "../components/dashboard/Sidebar"
import Appbar from "../components/dashboard/Appbar"
import ConfirmModal from "../components/modals/confirm"
import { Container } from "@mui/system"

const DashboardLayout = ({children, openConfirm, handleOpenConfirm, handleCloseConfirm, menuItemsDashboard}) => {
  
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
        handleOpenConfirm={handleOpenConfirm}
        menuItemsDashboard={menuItemsDashboard}
      />
      <Sidebar
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        handleOpenConfirm={handleOpenConfirm}
        menuItemsDashboard={menuItemsDashboard}
      />
      <ConfirmModal
        openConfirm={openConfirm}
        handleOpenConfirm={handleOpenConfirm}
        handleCloseConfirm={handleCloseConfirm}
        type="logout"  
      />
      <Container
        disableGutters
        maxWidth='lg'
        variant='main'
        sx={{ pl: { xs: '10px', sm: '270px' }, pr: {xs:'10px', sm:"auto"}, mt: "17px", margin: '0' }}
      >
        {children}
      </Container>
    </>
  )
}

export default DashboardLayout