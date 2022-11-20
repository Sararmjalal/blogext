import { getAllWriters } from '../apis/statics'
import { useTitle } from "../lib"
import Head from "next/head"

export async function getStaticProps() {
  const writers = await getAllWriters()
  return {
    props: {
      writers
    },
    revalidate: 1
  }
}

const Writers = ({ writers }) => {
  console.log(writers)
  return (
    <section>
      <Head>
        <title>{useTitle('All Writers')}</title>
        <meta name="description" content="All writers page" />
      </Head>
        <div>
          <h1>All Writers Yeay!</h1>
        </div>
    </section>
    )
}

export default Writers