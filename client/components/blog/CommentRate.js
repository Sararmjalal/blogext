import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"

const CommentRate = () => {
  const thisUser = useSelector(selectUser)
  console.log('This user from comment', thisUser)
  return (
      <h1>Hello!</h1>
  )
}

export default CommentRate