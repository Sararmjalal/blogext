import { postJSON } from "../../apis/clients"
import { toast } from "react-toastify"
import { useRouter } from "next/router"
import { useState } from "react"
import AddEditBlog from "../../components/blog/AddEditBlog"

const AddBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    imgurl: ''
  });
  const router = useRouter();

  const create = async (content) => {
    try {
      const res = await postJSON(`${process.env.SERVER}/blog/write`, {
        title: blog.title,
        content,
        imgurl: blog.imgurl
      })
      if (res.msg === 'bad request: bad inputs') return toast.error('Pay attention please!')
      toast.success('You added a blog lool')
      router.push('/dashboard/blogs')
    }
    catch (error) {
      return
    }
  };

  return (
    <AddEditBlog 
    type='create'
    title='Add Blog'
    blog={blog}
    setBlog={setBlog}
    create={create}
    />
  )
}

export default AddBlog
