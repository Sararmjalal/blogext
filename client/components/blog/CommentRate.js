import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import { useState } from "react"
import { toast } from 'react-toastify'
import { Button } from "@mui/material"
import { getBlogComments } from "../../apis/statics"
import { refetch, postJSON } from "../../apis/clients"

const CommentRate = ({blogId, refetchKey}) => {
  const thisUser = useSelector(selectUser)
  const [data, setData] = useState({
    text: "",
    score: 0
  })

  if(data.score) console.log('ridi')
  const submit = async () => {
    try {

      if (!thisUser) return toast.warn("Be one of us then comment here!")
      if (!data.text) return toast.error("Field cannot be empty!")
      if (!data.score) return toast.error("You should submit a rate first!")

      const commentRes = await submitComment()
      const rateRes = await submitRate()

      if (commentRes.msg && rateRes.msg !== 'ok') return toast.error('Something went wrong. Please try again!')

      setData({ ...data, text: "" })
      toast.success("You're comment submited successfully!")
      await refetch(refetchKey, await getBlogComments(blogId))
    }
    catch (error) {
      toast.error('Server is closed lool')
    }

    await refetch(refetchKey, await getBlogComments(blogId))
  }

  const submitComment = async () => await postJSON(`${process.env.SERVER}/comment/submit`, {blogId, text: data.text})

  const submitRate = async () => await postJSON(`${process.env.SERVER}/blog/submit-rate`, {blogId, score: data.score})

  return (
      <Button onClick={submit}>Hello from comment rate!</Button>
  )
}

export default CommentRate