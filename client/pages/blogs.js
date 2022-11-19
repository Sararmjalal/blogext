import { getAllBlogs } from '../apis/statics'

export async function getStaticProps() {
  const blogs = await getAllBlogs()
  return {
    props: {
      blogs
    },
    revalidate: 1
  }
}

const Blogs = ({blogs}) => {
  console.log(blogs)
  return <h1>Blogs yeay!</h1>
}

export default Blogs