import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import { useState } from "react"
import { toast } from 'react-toastify'
import { Button, Rating, TextField, Typography } from "@mui/material"
import { getBlogComments } from "../../apis/statics"
import { refetch, postJSON } from "../../apis/clients"
import { Container, Box } from "@mui/system"

const CommentRate = ({blogId, refetchKey}) => {
  const thisUser = useSelector(selectUser)
  const [data, setData] = useState({
    text: "",
    score: 0
  })

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
    <Container disableGutters sx={{width:'100%'}}>
      <TextField
        type='text'
        variant='standard'
        placeholder="Leave a review here..."
        multiline={true}
        rows='12'
        sx={{
          display:"block",
          fontSize: '16px',
          lineHeight: '26px',
        }}
        value={data.text}
        onChange={(e) => setData({...data, text:e.target.value})}
      />
      <Box sx={{m:"20px 0", width:"100%", display:"flex", gap:'5px' }}>
      <Typography component='span' variant='caption'>Rate this blog:</Typography>
        <Rating
          size="small"
          value={data.score}
          onChange={(e, newValue) => setData({...data, score: Number(newValue)})}
        />
      </Box>
      <Button variant='primaryButton' onClick={submit}>Post</Button>
      </Container>
  )
}

export default CommentRate