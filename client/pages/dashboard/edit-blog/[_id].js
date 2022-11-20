import { useRouter } from "next/router"
import { fetcher, postJSON } from "../../../apis/clients"
import useSWR from "swr"
import { useEffect, useState } from "react"
import { Button } from "@mui/material"
import { toast } from "react-toastify"
import { useTitle } from "../../../lib"
import Head from "next/head"

const EditBlog = () => {

  const router = useRouter()

  const { data, error } = useSWR(`${process.env.SERVER}/blog/single-blog/${router?.query?._id}`, fetcher)

  const [thisBlog, setThisBlog] = useState(null)

  useEffect(() => {
    if (data && !error) setThisBlog({
      title: data.title,
      content: data.content,
      imgurl: data.imgurl
    })
  }, [data])

  useEffect(() => {
    if (error) return router.push('/404')
  }, [error])

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

  if (!thisBlog) return <h1>Loading...</h1>
  return (
    <section>
      <Head>
       <title>{useTitle('Edit Blog')}</title>
      </Head>
      <div>
        <h1>{thisBlog.title}</h1>
        <h2>{thisBlog.content}</h2>
        <h3>{thisBlog.imgurl}</h3>
        <Button onClick={edit}>Edit blog</Button>
      </div>
    </section>
  )
}

export default EditBlog