import Header from "../components/main/Header"

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