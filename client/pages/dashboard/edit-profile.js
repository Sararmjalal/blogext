import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import { postFormData, postJSON } from "../../apis/clients"
import { toast } from "react-toastify"
import { useTitle } from "../../lib"
import Head from "next/head"
import { ButtonBase, Input } from "@mui/material"
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
      <div>
        <h1>Edit Profile Yeay!</h1>
        <input type='file' onChange={(e) => setFile(e.target.files[0])}></input>
        <img src={user.avatar} style={{ height: "100px", width: "100px" }}></img>
        <Input onChange={(e) => setUser({ ...user, name: e.target.value })} value={user.name}></Input>
        <Input onChange={(e) => setUser({ ...user, bio: e.target.value })} value={user.bio}></Input>
        <p>{thisUser.name}</p>
        <ButtonBase onClick={editProfile}>Update Name</ButtonBase>
      </div>
  </section>
  )
}

export default EditProfile