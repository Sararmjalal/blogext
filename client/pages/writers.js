import { getAllWriters } from '../apis/statics'

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
  return <h1>Writers yeay!</h1>
}

export default Writers