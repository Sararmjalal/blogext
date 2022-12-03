import { useEffect, useMemo, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectUser, setCurrentUser } from "../../store/slice"
import { postFormData, postJSON, postMe } from "../../apis/clients"
import { checkImg } from "../../apis/statics"
import { toast } from "react-toastify"
import { useTitle } from "../../lib"
import Head from "next/head"
import {Container, TextField, Typography, Divider, Button, Tooltip} from "@mui/material"
import Loading from "../../components/main/Loading"
import useSWRImmutable from "swr"

const EditProfile = () => {
  const thisUser = useSelector(selectUser)
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)
  const [file, setFile] = useState(null)

  console.log("THIS USER", thisUser)

  useEffect(() => {
    setUser({
      name: thisUser.name,
      bio: thisUser.bio,
      avatar: thisUser.avatar? `${process.env.SERVER}/${thisUser.avatar}` : '/statics/images/user-blog-default.svg'
    })
  }, [thisUser])

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader()
      fileReader.onload = function (e) {
        setUser({...user, avatar:e.target.result})
      }
      fileReader.readAsDataURL(file)
    }
  }, [file])

  const submitAvatar = async () => {
    if(!file) return
    try {
      const formData = new FormData()
      formData.append('avatar', file)
      const res = await postFormData(`${process.env.SERVER}/user/update-avatar`, formData)
      if (res.msg !== 'ok') toast.error('Something went wrong during upload. Please try again!')
    } catch (error) {
      toast.error('Server is closed lool')
    }
  }

  const editProfile = async () => {
    if(!user.bio || !user.name) return toast.error("You can't submit empty fields lool")
    try {
      const res = await postJSON(`${process.env.SERVER}/user/edit`, {name: user.name, bio: user.bio})
      await submitAvatar()
      if (res.msg === 'ok') {
        const newData = await postMe()
        dispatch(setCurrentUser(newData))
        toast.success('Profile updated successfully!')
      }
    } catch (error) {
      toast.error('Server is closed lool')
    }
  }

  if(!user) return <Loading />
  return (
    <section>
    <Head>
      <title>{useTitle('My Profile')}</title>
      </Head>
      <Container disableGutters sx={{mb:{xs:"40px", sm: '0'}}}>
        <Typography component='h1' variant='h2'>Edit Profile</Typography>
        <Divider sx={{ margin: '10px 0 20px 0' }} />
        <Container
          disableGutters
          maxWidth='100%'
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: '20px',
            alignItems: "start"
          }}>
          <Tooltip title="Click to change">
              <Container
                disableGutters
                maxWidth='100%'          
                sx={{position:'relative', height: '500px', width: { xs: '100%', md: '48%' }, margin: "0"}}
                >
              <label htmlFor="fileInput">
                <img
                  src={user.avatar}
                  onError={(e) => e.target.src === '/statics/images/user-default.svg'}
                  alt="Writer profile picture"
                  width='100%'
                  height='100%'
                  style={{objectFit:"cover", cursor:"pointer"}}
                  />
              </label>
              </Container>
            </Tooltip>
          <Container
            disableGutters
            maxWidth='100%'
            >
          <TextField
            type='text'
            variant='standard'
            placeholder="Name..."
            sx={{
              '&::before': {
                borderBottom: '2px solid #dce4e7',
              },
              display:"block",
              width: { xs: '100%', md: '48%' },
              margin:{xs: '10px 0', sm: '0'},
              fontSize: '16px',
              lineHeight: '26px',
              }}
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })} 
            />
            <TextField
              type='text'
              variant='standard'
              placeholder="Tell us more about yourself..."
              multiline={true}
              rows='4'
              sx={{
                display:"block",
                width: { xs: '100%', md: '48%' },
                margin:{xs: '10px 0', sm: '0'},
                fontSize: '16px',
                lineHeight: '26px',
              }}
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value.slice(0, 200) })} 
             />
          </Container>
          <Button variant="primaryButton" onClick={editProfile}>Edit</Button>
        </Container>
    </Container>
        <input hidden type='file' id='fileInput' onChange={(e) => setFile(e.target.files[0])}></input>
  </section>
  )
}

export default EditProfile