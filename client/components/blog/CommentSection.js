import { fetcher } from "../../apis/clients"
import useSWR from "swr"
import CommentRate from "./CommentRate"

const CommentSection = ({ blogId }) => {
  
  const swrKey = `${process.env.SERVER}/comment/by-blog/${blogId}`

  const { data } = useSWR(swrKey, fetcher)
    
  if(!data) return <h1>Loading...</h1>
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