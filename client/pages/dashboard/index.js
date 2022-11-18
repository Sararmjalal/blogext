import { selectUser } from "../../store/slice"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Dashboard = () => {
  const thisUser = useSelector(selectUser)
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    thisUser ? setLoading(false) : router.push('sign-in')
  }, [])

  console.log(thisUser)
  
  if(loading) return <h1>loading...</h1>
  return <h1>Dashboard yeay!</h1>
}

export default Dashboard