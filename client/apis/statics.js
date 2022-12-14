const getAllWriters = async() => await (await fetch(`${process.env.SERVER}/user`)).json()

const getSingleWriter = async (_id) => await (await fetch(`${process.env.SERVER}/user/singleUser/${_id}`)).json()

const getTopWriters = async () => await (await fetch(`${process.env.SERVER}/user/top-users`)).json()

const getAllBlogs = async () => await (await fetch(`${process.env.SERVER}/blog`)).json()

const getSingleBlog = async (_id) => await (await fetch(`${process.env.SERVER}/blog/single-blog/${_id}`)).json()

const getBlogComments = async (_id) => await (await fetch(`${process.env.SERVER}/comment/by-blog/${_id}`)).json()

const getTopBlogs = async () => await (await fetch(`${process.env.SERVER}/blog/top-blogs`)).json()

const checkImg = async (url) => (await fetch(url)).ok

export { getAllWriters, getSingleWriter, getTopWriters, getAllBlogs, getSingleBlog, getBlogComments, getTopBlogs, checkImg }