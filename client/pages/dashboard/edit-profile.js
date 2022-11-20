import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import { postFormData, postJSON } from "../../apis/clients"
import { toast } from "react-toastify"
import { useTitle } from "../../lib"
import Head from "next/head"

const EditProfile = () => {
  const thisUser = useSelector(selectUser)
  const [user, setUser] = useState(null)
  const [file, setFile] = useState(null)

  useEffect(() => {
    setUser({
      name: thisUser.name,
      bio: thisUser.bio,
      avatar: thisUser.avatar
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
      if(res.msg !== 'ok') toast.error('Something went wrong during upload. Please try again!')
    } catch (error) {
      toast.error('Server is closed lool')
    }
  }

  const editProfile = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/user/edit`, data)
      await submitAvatar()
      if(res.msg === 'ok') toast.success('Profile updated successfully!')
    } catch (error) {
      toast.error('Server is closed lool')
    }
  }

  if(!user) return <h1>Loading...</h1>
  return (
    <section>
    <Head>
      <title>{useTitle('My Profile')}</title>
    </Head>
      <div>
        <h1>Edit Profile Yeay!</h1>
      </div>
  </section>
  )
}

export default EditProfile