import { postJSON, postMe } from "../apis/clients"
import { useRouter } from "next/router"
import { setToken, useToken} from "../lib"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCurrent } from "../store/slice"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import Cookies from "universal-cookie"

const SignIn = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const cookies = new Cookies()
  useEffect(() => {
    useToken() ? router.push('/dashboard') : setLoading(false)
  }, [])

  const signup = async (body) => {
    try {
      const res = await postJSON(`${process.env.SERVER}/user/signup`, body, false)
      if (res.msg) return toast.warn('Already one of us lool')
      setToken(res.token)
      const user = await postMe()
      dispatch(setCurrent(user))
      router.push('/dashboard')
      toast.success("You've logged in successfully!")
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  }

  const login = async (body) => {
    
    const body2 = {
      username: 'sara',
      password: '1111'
    }
 
    try {
      const res = await postJSON(`${process.env.SERVER}/user/login`, body2, false)
      if (res.msg === 'bad request: no such user exists')
        return toast.error('Not of on us lool')
      if (res.msg === 'password doesnt match')
        return toast.error("Wrong password")
      console.log(res.token, 'token in login')
      setToken(res.token)
      const user = await postMe()
      if(!user) return
      dispatch(setCurrent(user))
      router.push('/dashboard')
      toast.success("You've logged in successfully!")
    }
    catch (error) {
      toast.error('Server is closed lool')
      console.log(error)
    }
  }

  if(loading) return <h1>Loading...</h1>
  return <Button onClick={login}>Click me</Button>
}

export default SignIn