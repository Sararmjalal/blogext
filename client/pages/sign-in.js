import { postJSON, postMe } from "../apis/clients"
import { useRouter } from "next/router"
import { setToken, useToken } from "../lib"
import { Button } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCurrent } from "../store/slice"

const SignIn = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const signup = async ({ username, name }) => {
    
    const body = {
      username: username.value,
      name: name.value
    }

    try {
      const data = await (await postJSON(`${process.env.SERVER}/user/signup`, body, false)).json()
      if (data.msg) return alert('sabtenam kardi')
      setToken(data.token)
      const user = await postMe()
      dispatch(setCurrent(user))
      router.push('/dashboard')
    }
    catch (error) {
      console.error("server is closed lool")
    }
  }

  const login = async ({ username, password }) => {
    
    const body = {
      username: 'sara',
      password: '1111'
    }

    try {
      const data = await (await postJSON(`${process.env.SERVER}/user/login`, body, false)).json()
      if (data.msg) return alert('sabtenam nakardi')
      setToken(data.token)
      const user = await postMe()
      dispatch(setCurrent(user))
      router.push('/dashboard')
    }
    catch (error) {
      console.error("server is closed lool")
    }
  }

  return <Button onClick={login}>Click me</Button>
}

export default SignIn