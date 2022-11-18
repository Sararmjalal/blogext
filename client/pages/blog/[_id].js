import { getAllBlogs, getSingleBlog } from "../../apis/statics"

export async function getStaticPaths() {
  const blogs = await getAllBlogs()
  const paths = blogs.map(blog => (
    {params: {_id: blog._id}}
  ))

  return { paths, fallback: 'blocking'}
}

export async function getStaticProps(ctx) {
  const blog = await getSingleBlog(ctx.params._id)
  if (blog.msg) return {
    notFound: true
  }
  return {
    props: { blog },
    revalidate: 10
  }
}

const Blog = ({ blog }) => {
console.log(blog)
}

export default Blog