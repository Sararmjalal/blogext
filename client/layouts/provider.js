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
  const { pathname, asPath, push } = useRouter()
  
  const menuItemsDashboard = [
    {
      name: 'View Site',
      path: '/'
    },
    {
      name: 'My Blogs',
      path: '/dashboard/blogs'
    },
    {
      name: 'Add Blog',
      path: '/dashboard/add-blog'
    },
    {
      name: 'Edit Profile',
      path: '/dashboard/edit-profile'
    },
    {
      name: 'Logout',
      path: ''
    },
  ]

  useEffect(() => {
    if (useToken()) ifVerified()
    else setLoading(false)
  }, [])

  const ifVerified = async () => {
    const user = await postMe()
    if (user.msg) return setLoading(false)
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
          menuItemsDashboard={menuItemsDashboard}
      >
        <NotFound />
      </MainLayout>
        :
        asPath.includes('dashboard') ?
            <DashboardLayout
            openConfirm={openConfirm}
            handleOpenConfirm={() => setOpenConfirm(true)}
            handleCloseConfirm={() => setOpenConfirm(false)}
            menuItemsDashboard={menuItemsDashboard}
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
            menuItemsDashboard={menuItemsDashboard}
          >
            <main >{children}</main>
          </MainLayout>
      }
          </main>
}

export default StateProvider