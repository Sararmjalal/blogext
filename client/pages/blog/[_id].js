import { getAllBlogs, getSingleBlog, getBlogComments } from "../../apis/statics"
import { useTitle } from "../../lib"
import Head from "next/head"
import CommentSection from "../../components/blog/CommentSection"

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

  return (
    <section>
    <Head>
      <title>{useTitle(blog.title)}</title>
      <meta name="description" content="Single blog page" />
    </Head>
      <div>
        <h1>Blog Yeay!</h1>
        <div>
          <CommentSection blogId={blog._id}/>
        </div>
      </div>
  </section>
  )
}

export default Blog