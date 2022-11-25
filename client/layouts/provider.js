import { useToken } from "../lib"
import { postMe } from "../apis/clients"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "../store/slice"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import DashboardLayout from "./dashboard"
import MainLayout from './main'
import Loading from "../components/main/Loading"
import NotFound from "../pages/404"

const StateProvider = ({ children }) => {
  
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false)
  const {pathname, asPath} = useRouter()

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
  return <main>
          {
      (pathname === '_error' || pathname === '/404') && pathname !== '/dashboard'?
      <MainLayout
      open={open}
      handleOpen={() => setOpen(true)}
      handleClose={() => setOpen(false)}
      openConfirm={openConfirm}
      handleOpenConfirm={() => setOpenConfirm(true)}
      handleCloseConfirm={() => setOpenConfirm(false)}
      >
        <NotFound />
      </MainLayout>
        :
        asPath.includes('dashboard') ?
          <DashboardLayout
          openConfirm={openConfirm}
          handleOpenConfirm={() => setOpenConfirm(true)}
          handleCloseConfirm={() => setOpenConfirm(false)}
          >
            <main>{children}</main>
          </DashboardLayout>
            :
          <MainLayout
            open={open}
            handleOpen={() => setOpen(true)}
            handleClose={() => setOpen(false)}
            openConfirm={openConfirm}
            handleOpenConfirm={() => setOpenConfirm(true)}
            handleCloseConfirm={() => setOpenConfirm(false)}
          >
            <main >{children}</main>
          </MainLayout>
      }
          </main>
}

export default StateProvider