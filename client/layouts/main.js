import Header from "../components/main/Header"
import Footer from '../components/main/Footer'
import { Container } from "@mui/material"
import { useState } from "react"
import MenuModal from "../components/modals/menu"

const MainLayout = ({ children }) => {
  
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

  const [open, setOpen] = useState(false);

  return (
    <section >
      <Header handleOpen={setOpen(true)}/>
      <MenuModal open={open} handleClose={() => setOpen(false)} handleOpen={() => setOpen(true)} menuItems={menuItems}/>
          <Container variant="main" maxWidth='xl' disableGutters>{children}</Container>
       <Footer menuItems={menuItems}/>
    </section>
  )
}

export default MainLayout