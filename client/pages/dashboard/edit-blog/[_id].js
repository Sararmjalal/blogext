import { useRouter } from "next/router"
import { fetcher, postJSON } from "../../../apis/clients"
import useSWR from "swr"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { toast } from "react-toastify"

const EditBlog = () => {
  const router = useRouter()
  const { data } = useSWR(`${process.env.SERVER}/blog/single-blog/${router.query._id}`, fetcher)
  const [thisBlog, setThisBlog] = useState(null)

  console.log(thisBlog)

  useEffect(() => {
    if (data) setThisBlog({
      title: data.title,
      content: data.content,
      imgurl: data.imgurl
    })
  }, [data])

  const edit = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/blog/edit`,
      {
        blogId: router.query._id,
        data: thisBlog
      }
    )
    if (res.msg !== 'ok') return toast.error('Pay attention please!')
    toast.success('Edited your blog lool')
    router.push('/dashboard/blogs')
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  }

  if (!data || data.msg) return <h1>Loading...</h1>
  return (
    <div>
      <h1>{thisBlog.title}</h1>
      <h2>{thisBlog.content}</h2>
      <h3>{thisBlog.imgurl}</h3>
      <Button onClick={edit}>Edit blog</Button>
    </div>
  )
}

export default EditBlog