import { postJSON } from '../../apis/clients'
import { getTopWriters } from '../../apis/statics'
import CommentRate from '../../components/blog/CommentRate'
import Confirm from '../../components/modals/confirm'
import Loading from '../../components/main/Loading'
import { useEffect, useState } from 'react'

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

  const [isDone, setIsDone] = useState(false)

  const func = () => {
    setIsDone(true)
  }

  useEffect(() => {
    setTimeout(func, 5000);
  }, [])

  
  return (
    <div>
        <Loading isDone={isDone} />
        <CommentRate />
        <Confirm type="remove" blogId='btb-1668778461883946737' />
        <h1>Salam</h1>
    </div>
  )
}

export default Page