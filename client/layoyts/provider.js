import { useToken } from "../lib"
import { postMe } from "../apis/clients"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "../store/slice"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectUser } from "../store/slice"

const StateProvider = ({children}) => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const thisUser = useSelector(selectUser)


  useEffect(() => {
    if (useToken()) ifVerified()
    setLoading(false)
  }, [])

  const ifVerified = async () => {
    const user = await postMe()
    dispatch(setCurrentUser(user))
  }

  if(loading) return <h1>Loading...</h1>
  return (
    <main>{children}</main>
  )

}

export default StateProvider