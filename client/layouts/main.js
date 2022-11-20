import Header from "../components/main/Header"
import Footer from '../components/main/Footer'

const MainLayout = ({children}) => {
  return (
      <section>
      <Header />
        <main>{children}</main>
       <Footer />
      </section>
  )
}

export default MainLayout