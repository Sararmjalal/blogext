import { Box, Container } from "@mui/system"
import { Typography, TextField, Button } from "@mui/material"
import { postJSON, postMe } from '../../apis/clients'
import { toast } from "react-toastify"
import { useDispatch } from "react-redux"
import { setCurrentUser } from "../../store/slice"
import { useRouter } from "next/router"
import { setToken } from "../../lib"

const LoginRegister = ({ user, setUser, type }) => {
  
  const router = useRouter()
  const dispatch = useDispatch()

  const signup = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/user/signup`, user, false)
      if (res.msg) return toast.warn('Already one of us lool')
      setToken(res.token)
      const thisUser = await postMe()
      dispatch(setCurrentUser(thisUser))
      router.push('/dashboard/blogs')
      toast.success("You've logged in successfully!")
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  }

  const login = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/user/login`,user , false)
      if (res.msg === 'bad request: no such user exists')
      return toast.error('Not of on us lool')
      if (res.msg === 'password doesnt match')
      return toast.error("Wrong password")
      setToken(res.token)
      const thisUser = await postMe()
      if(!thisUser) return
      dispatch(setCurrentUser(thisUser))
      router.push('/dashboard/blogs')
      toast.success("You've logged in successfully!")
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  }
  
  const props = {
    login: {
      title: "Login",
      function: login,
      secondInput: 'password',
      placeholder: "Password"
    },
    register: {
      title: "Register",
      function: signup,
      secondInput: "name",
      placeholder: "Name"
    }
  }

  return (
    <Container maxWidth="100%" disableGutters>
      <Box width='100%' sx={{display:'block', padding: '24px 0'}}>
        <Typography component='h1' variant='h2'>{props[type]['title']}</Typography>
      <TextField
        type='text'
        variant='standard'
          placeholder="Username"
          name='username'
        sx={{
          display:"block",
          width: '100%',
          m: '15px 0 30px 0',
          fontSize: '16px',
          lineHeight: '26px',
          }}
          value={user.username}
          onChange={(e) => {
            const { name, value } = e.target
            setUser({ ...user, [name]: value })
          }} 
        />
          <TextField
          type= {type === 'login' ? 'password' : 'text'}
          variant='standard'
          placeholder={props[type]['placeholder']}
          name= {props[type]['secondInput']}
          sx={{
            display:"block",
            width: '100%',
            margin:'30px 0',
            fontSize: '16px',
            lineHeight: '26px',
            }}
            value={user[props[type]['secondInput']]}
            onChange={(e) => {
              const { name, value } = e.target
              setUser({ ...user, [name]: value })
          }} 
        />
       <Button variant="primaryButton" onClick={props[type]['function']} sx={{mt:'10px', width:'100%'}}>Submit</Button>
      </Box>
    </Container>
  )

}

export default LoginRegister