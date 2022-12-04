import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { useTitle } from "../lib"
import { useSelector } from "react-redux"
import { selectUser } from "../store/slice"
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from "@mui/lab"
import Head from "next/head"
import Loading from "../components/main/Loading"
import LoginRegister from "../components/signin/LoginRegister"
import { Container } from "@mui/system"

const SignIn = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userLogin, setUserLogin] = useState({
    password: "",
    username:""
  })
  const [userRegister, setUserRegister] = useState({
    name: "",
    username:""
  })
  const thisUser = useSelector(selectUser)

  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    thisUser ? router.push('/dashboard/blogs') : setLoading(false)
  }, [])

  if(loading) return <Loading />
  return (
    <Container maxWidth='xl' disableGutters >
      <Head>
        <title>{useTitle('Sign in')}</title>
        <meta name="description" content="Login-Register page" />
      </Head>
    <Box sx={{ maxWidth: 'sm', margin: "auto" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#dce4e7' }}>
          <TabList onChange={handleChange} textColor="primary" centered TabIndicatorProps={{style:{height:"2px"}}}>
            <Tab label="Login" value="1" sx={{width:"50%"}} />
            <Tab label="Register" value="2"  sx={{width:"50%"}}/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <LoginRegister
            type="login"
            user={userLogin}
            setUser={setUserLogin}
            />
        </TabPanel>
        <TabPanel value="2">
          <LoginRegister
            type="register"
            user={userRegister}
            setUser={setUserRegister}
            />
        </TabPanel>
      </TabContext>
    </Box>
            </Container>
    )
}

export default SignIn