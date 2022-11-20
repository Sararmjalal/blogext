import { postJSON } from "../../apis/clients"
import { Button } from "@mui/material"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import { useState } from "react"

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    imgurl: ''
  });
  const router = useRouter();

  const create = async () => {
    try {
      const res = await postJSON(`${process.env.SERVER}/blog/write`, blog)
      if (res.msg === 'bad request: bad inputs') return toast.error('Pay attention please!')
      toast.success('You added a blog lool')
      router.push('/dashboard/blogs')
    }
    catch (error) {
      toast.error('Server is closed lool')
    }
  };

  return <Button onClick={create}>Add Blog</Button>;
}

export default AddBlog
