import Header from "../components/main/Header"
import Footer from '../components/main/Footer'
import { Container } from "@mui/material"

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
      path: '/dashboard/edit-profile'
    },
  ]

  return (
    <section >
      <Header menuItems={menuItems}/>
        <Container variant="main" maxWidth='xl'>{children}</Container>
       <Footer menuItems={menuItems}/>
    </section>
  )
}

export default MainLayout