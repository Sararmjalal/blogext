import { getAllBlogs } from '../apis/statics'
import { useTitle } from "../lib"
import Head from "next/head"

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
  return (
    <section>
      <Head>
        <title>{useTitle('All Blogs')}</title>
        <meta name="description" content="All blogs page" />
      </Head>
        <div>
          <h1>All Blogs Yeay!</h1>
        </div>
    </section>
    )
}

export default Blogs