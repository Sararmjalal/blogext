import { useToken } from "../lib"
import { postMe } from "../apis/clients"
import { useDispatch } from "react-redux"
import { setCurrent } from "../store/slice"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

const StateProvider = ({children}) => {

  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  console.log(useToken())
  useEffect(() => {
    if (useToken()) ifVerified()
    else router.push('sign-in')
  }, [useToken()])

  const ifVerified = async () => {
    const user = await postMe()
    dispatch(setCurrent(user))
    setLoading(false)
  }

  if(loading) return <h1>Loading...</h1>
  return (
    <main>{children}</main>
  )

}

export default StateProvider