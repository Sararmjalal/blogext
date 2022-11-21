import { useTitle } from "../../lib"
import Head from "next/head"
import { Container } from "@mui/system"

const Dashboard = () => {
  return (
    <section>
    <Head>
      <title>{useTitle('Dashboard')}</title>
    </Head>
    <body>
      <div>
          <h1>Dashboard Yeay!</h1>
          <Container maxWidth="xl" sx={{ height: "200px", width: "100%", bgcolor: "primary.main" }}>
            <Container sx={{background: "red", width: "90%", height: "100px"}}></Container>
          </Container>
      </div>
    </body>
  </section>
  )
}

export default Dashboard