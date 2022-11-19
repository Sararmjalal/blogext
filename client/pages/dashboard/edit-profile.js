import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import { postFormData, postJSON } from "../../apis/clients"
import { toast } from "react-toastify"

const EditProfile = () => {
  const thisUser = useSelector(selectUser)
  const [data, setData] = useState(null)
  const [file, setFile] = useState(null)

  useEffect(() => {
    setData({
      name: thisUser.name,
      bio: thisUser.bio,
      avatar: thisUser.avatar
    })
  }, [thisUser])

  useEffect(() => {
    if (file) {
      const fileReader = new FileReader()
      fileReader.onload = function (e) {
        setData({...data, avatar:e.target.result})
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

  if(!data) return <h1>Loading...</h1>
  return <div> hehe !! </div>
}

export default EditProfile