import { postJSON, postMe } from "../apis/clients"
import { useRouter } from "next/router"
import { setToken, useTitle } from "../lib"
import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser, selectUser } from "../store/slice"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import Head from "next/head"

const SignIn = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const thisUser = useSelector(selectUser)

  useEffect(() => {
    thisUser ? router.push('/dashboard') : setLoading(false)
  }, [])

  const signup = async (body) => {
    try {
      const res = await postJSON(`${process.env.SERVER}/user/signup`, body, false)
      if (res.msg) return toast.warn('Already one of us lool')
      setToken(res.token)
      const user = await postMe()
      dispatch(setCurrentUser(user))
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
      setToken(res.token)
      const user = await postMe()
      if(!user) return
      dispatch(setCurrentUser(user))
      router.push('/dashboard')
      toast.success("You've logged in successfully!")
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  }

  return (
    <section>
      <Head>
        <title>{useTitle('Create an Account')}</title>
        <meta name="description" content="Login/Register page" />
      </Head>
        <div>
          <h1>Login Sign up yeay!</h1>
          <Button onClick={login}>Click me</Button>
        </div>
    </section>
    )
}

export default SignIn