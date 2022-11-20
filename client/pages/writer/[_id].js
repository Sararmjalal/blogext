import { getAllWriters, getSingleWriter } from "../../apis/statics"
import { useTitle } from "../../lib"
import Head from "next/head"

export async function getStaticPaths() {
  const writers = await getAllWriters()
  const paths = writers.map(writer => (
    { params: { _id: writer._id } }
    
  ))

  return { paths, fallback: 'blocking'}
}

export async function getStaticProps(ctx) {
  const writer = await getSingleWriter(ctx.params._id)
  if (writer.msg) return {
    notFound: true
  }
  return {
    props: { writer },
    revalidate: 10
  }
}

const Writer = ({writer}) => {
  return (
    <section>
      <Head>
        <title>{useTitle(writer.name)}</title>
        <meta name="description" content="Single writer page" />
      </Head>
        <div>
          <h1>Writer Yeay!</h1>
        </div>
    </section>
    )
}

export default Writer