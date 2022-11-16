import useSWR from "swr"
import Cookies from 'universal-cookie';

const cookies = new Cookies()

const fetcher = async (...args) => {
  const req = await fetch(...args)
  return await req.json()
}

const getAllWriters = () => useSWR(`${process.env.SERVER}/user` , fetcher)

const getSingleWriter = (_id) => useSWR(`${process.env.SERVER}/user/singleUser/${_id}`, fetcher)

const getTopWriters = () => useSWR(`${process.env.SERVER}/user/top-users`, fetcher)

const getAllBlogs = () => useSWR(`${process.env.SERVER}/blog`, fetcher)

const getSingleBlog = (_id) => useSWR(`${process.env.SERVER}/blog/single-blog/${_id}`, fetcher)

const getTopBlogs = () => useSWR(`${process.env.SERVER}/blog/top-blogs`, fetcher)

const getMyBlogs = () => useSWR([`${process.env.SERVER}/blog/my-blogs`, cookies.get('token')], fetcher)

export { getAllWriters, getSingleWriter,  getTopWriters, getAllBlogs, getSingleBlog, getTopBlogs, getMyBlogs}