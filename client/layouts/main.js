import Header from "../components/main/Header"
import Footer from '../components/main/Footer'
import { Container } from "@mui/material"
import MenuModal from "../components/modals/menu"
import ConfirmModal from "../components/modals/confirm"

const MainLayout = ({ children, open, handleOpen, handleClose, openConfirm, handleOpenConfirm, handleCloseConfirm, menuItemsDashboard }) => {
  
  const menuItems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Blogs',
      path: '/blogs'
    },
    {
      name: 'Writers',
      path: '/writers'
    },
    {
      name: 'My Account',
      path: '/dashboard/blogs'
    },
  ] 


  return (
    <section >
      <Header
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleOpenConfirm={handleOpenConfirm}
        isOpen={open}
        isLight={!open}
        menuItemsDashboard={menuItemsDashboard}
      />
      <MenuModal
        open={open}
        handleClose={handleClose}
        handleOpen={handleOpen}
        menuItems={menuItems} />
      <ConfirmModal
        openConfirm={openConfirm}
        handleOpenConfirm={handleOpenConfirm}
        handleCloseConfirm={handleCloseConfirm}
        type="logout" />
      <Container
        variant="main"
        maxWidth='xl'
        disableGutters>{children}
      </Container>
       <Footer menuItems={menuItems}/>
    </section>
  )
}

export default MainLayout