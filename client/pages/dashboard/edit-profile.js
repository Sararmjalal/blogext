import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import { postFormData, postJSON } from "../../apis/clients"
import { toast } from "react-toastify"
import { useTitle } from "../../lib"
import Head from "next/head"
import {Container, TextField, Typography, Divider, Button} from "@mui/material"
import Loading from "../../components/main/Loading"

const EditProfile = () => {
  const thisUser = useSelector(selectUser)
  const [user, setUser] = useState(null)
  const [file, setFile] = useState(null)
  const [img, setImg] = useState(null)

  useEffect(() => {
    setUser({
      name: thisUser.name,
      bio: thisUser.bio,
      avatar: `${process.env.SERVER}/${thisUser.avatar}`
    })
    setImg(thisUser.avatar)
  }, [thisUser])

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader()
      fileReader.onload = function (e) {
        setUser({...user, avatar:e.target.result})
        setImg(e.target.result)
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
      if(res.msg !== 'ok') toast.error('Something went wrong during upload. Please try again!')
    } catch (error) {
      toast.error('Server is closed lool')
    }
  }

  const editProfile = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/user/edit`, {name: user.name, bio: user.bio})
      await submitAvatar()
      console.log(res)
      if(res.msg === 'ok') toast.success('Profile updated successfully!')
    } catch (error) {
      toast.error('Server is closed lool')
      console.log(error)
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
          <Container
            disableGutters
            maxWidth='100%'
            sx={{
              display: {xs:'block', sm:"flex"},
              justifyContent: "space-between"
            }}>
          <TextField
            type='text'
            variant='standard'
            placeholder="Name..."
            sx={{
              '&::before': {
                borderBottom: '2px solid #dce4e7',
              },
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
              placeholder="Image url..."
              sx={{
                '&::before': {
                  borderBottom: '2px solid #dce4e7',
                },
                width: { xs: '100%', md: '48%' },
                margin:{xs: '10px 0', sm: '0'},
                fontSize: '16px',
                lineHeight: '26px',
              }}
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value })} 
             />
          </Container>
          <Button variant="primaryButton" onClick={editProfile}>Edit</Button>
        </Container>
    </Container>
      <div>
        <input type='file' onChange={(e) => setFile(e.target.files[0])}></input>
        <img src={user.avatar} style={{ height: "100px", width: "100px" }}></img>
      </div>
  </section>
  )
}

export default EditProfile