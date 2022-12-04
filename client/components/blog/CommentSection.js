import { fetcher } from "../../apis/clients"
import useSWR from "swr"
import CommentRate from "./CommentRate"
import Loading from "../main/Loading"
import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import SingleComment from "./SingleComment"

const CommentSection = ({ blogId }) => {
  
  const swrKey = `${process.env.SERVER}/comment/by-blog/${blogId}`

  const { data } = useSWR(swrKey, fetcher)
    
  if(!data) return <Loading />
  return (
    <Container disableGutters sx={{ display: { xs: "block", md: "flex" }, gap:"36px", mt:"69px"}}>
      <Container disableGutters sx={{width: { xs: "100%", md: "60%" }}}>
      <Typography component='h3' variant='h3' sx={{mb: '10px'}}>Post a review</Typography>
        <CommentRate refetchKey={swrKey} blogId={blogId} />
      </Container>
      <Container disableGutters sx={{ width: { xs: "100%", md: "40%" }, mt:{xs:'35px', md: 0}}}>
        <Typography component='h3' variant='h3' sx={{ mb: '10px' }}>Reviews</Typography>
        <Container disableGutters sx={{p: "0 10px 0 0", height: "285px", overflowY: "auto" }}>
        {
          !data[0] ?
            <Typography variant="caption" sx={{ mb: "70px" }}>No reviews yet!</Typography>
            :
            data.map(comment => (
              <SingleComment key={comment._id} comment={comment} />
            ))
        }
        </Container>
      </Container>
    </Container>
  )
}

export default CommentSection