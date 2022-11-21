import { fetcher } from "../../apis/clients"
import useSWR from "swr"
import CommentRate from "./CommentRate"
import Loading from "../main/Loading"

const CommentSection = ({ blogId }) => {
  
  const swrKey = `${process.env.SERVER}/comment/by-blog/${blogId}`

  const { data } = useSWR(swrKey, fetcher)
    
  if(!data) return <Loading />
  return (
      <div>
        {
          data.map(comment => (<h1 key={comment._id}>{comment.text}</h1>))
        }
      <CommentRate refetchKey={swrKey} blogId={blogId} />

      </div>
  )
}

export default CommentSection