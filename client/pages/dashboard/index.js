import { Button } from "@mui/material"
import { removeCurrentUser } from "../../store/slice"
import { useDispatch } from "react-redux"
import { useRouter } from "next/router"
import { useTitle } from "../../lib"
import Head from "next/head"

const Dashboard = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const logout = () => {
    dispatch(removeCurrentUser())
    router.push('/')
  }
  return (
    <section>
    <Head>
      <title>{useTitle('Dashboard')}</title>
    </Head>
    <body>
      <div>
          <h1>Dashboard Yeay!</h1>
          <Button onClick={logout}>Logout</Button>
      </div>
    </body>
  </section>
  )
}

export default Dashboard