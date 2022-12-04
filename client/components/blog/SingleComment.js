import { Box } from "@mui/system"
import { Avatar, Typography } from "@mui/material"
import { daysBetween } from '../../lib'
import Link from "next/link"

const SingleComment = ({ comment }) => {
  
  const isImageValid = !!comment.user.avatar

  return (
      <Box key={comment._id} sx={{ display: "flex", gap:'15px', minHeight: "100px", border: "2px solid #DCE4E7", m: "10px 0", p: "10px", width:"100%"}}>
        <Avatar
          src={isImageValid &&`${process.env.SERVER}/${comment.user.avatar}`}
          alt='Writer picture'
          loading="lazy"
          sx={{
            width:'80px',
            height:'80px',
            objectFit: 'cover',
            borderRadius: '250px',
          }}>
          <img
            src='/statics/images/user-blog-default.svg'
            width='80px'
            height='80px'
            loading="lazy"
            style={{
              objectFit:"cover"
            }}
          />
      </Avatar>
      <Box sx={{width: "calc(100% - 80px)"}}>
      <Box
          component="div"
          sx={{
            display: "flex",
            gap: "12px",
            width: '100%',
            mb: "10px",
            justifyContent: "start",
            alignItems: "center"
          }}>
          <Typography variant="caption"
          sx={{color:"primary.main", fontSize: "16px"}}
          >
            <Link href={{
              pathname: '/writer/[_id]',
              query: {_id: comment.user._id}
              }}>
              {comment.user.name}
              </Link>
            </Typography>
          <Typography
            variant='p'
            sx={{
              fontSize: "10px",
              color: '#DCE4E7'
            }}>
            ●
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "#949799", fontSize:"16px" }}>
            {daysBetween(comment.createdAt)}
          </Typography>
        </Box>
        <Typography variant="caption" component="p">{comment.text}</Typography>
      </Box>
        </Box>
  )
}

export default SingleComment