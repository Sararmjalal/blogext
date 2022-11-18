import { postJSON, postMe } from "../apis/clients"
import { useRouter } from "next/router"
import { setToken } from "../lib"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCurrent } from "../store/slice"
import { toast } from "react-toastify"

const SignIn = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const signup = async (body) => {
    // const body = {
    //   username: username.value,
    //   name: name.value
    // }

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
    
    // const body = {
    //   username: username.value,
    //   password: '1111'
    // }

    try {
      const res = await postJSON(`${process.env.SERVER}/user/login`, body, false)
      if (res.msg === 'bad request: no such user exists')
        return toast.error('Not of on us lool')
      if (res.msg === 'password doesnt match')
        return toast.error("Wrong password")
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

  return <Button onClick={login}>Click me</Button>
}

export default SignIn