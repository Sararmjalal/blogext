import { Button } from "@mui/material"
import { useTitle } from "../../lib"
import Head from "next/head"

const Dashboard = () => {
  return (
    <section>
    <Head>
      <title>{useTitle('Dashboard')}</title>
    </Head>
    <body>
      <div>
          <h1>Dashboard Yeay!</h1>
      </div>
    </body>
  </section>
  )
}

export default Dashboard