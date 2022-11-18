import { getAllWriters, getSingleWriter } from "../../apis/statics"

export async function getStaticPaths() {
  const writers = await getAllWriters()
  const paths = writers?.map(writer => (
    { params: { _id: writer._id } }
    
  ))
  console.log(paths,'12121212')

  return { paths, fallback: 'blocking'}
}

export async function getStaticProps(ctx) {
  const writer = await getSingleWriter(ctx.params._id)
  if (writer?.msg) return {
    notFound: true
  }
  return {
    props: { writer },
    revalidate: 10
  }
}

const Writer = () => {
return <h1>Single Writer Yeay!</h1>
}

export default Writer