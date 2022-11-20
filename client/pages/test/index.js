import { postJSON } from '../../apis/clients'
import { getTopWriters } from '../../apis/statics'
import CommentRate from '../../components/blog/CommentRate'

export async function getStaticProps() {
  const data = await getTopWriters()
  return {
    props: {
      writers: data
    }
  }
}
  
function Page({writers}) {

  // console.log(writers)
  
  const signUp = async (username, name) => {
    const data = await(await postJSON(
    'http://localhost:4000/user/signup',
    { username, name },
    false)
    ).json()

    
    if (data.msg) return alert("bemir")
    alert("afarin")
  }
  const obj = {
    ok: 'bye',
    hamid: 'joon'
  }
  console.log()
  
  return (
    <div>
      <CommentRate />
      <h1>Salam</h1>
    </div>
  )
}

export default Page