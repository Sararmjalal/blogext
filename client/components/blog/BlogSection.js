import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import BlogCard from "./Card"

const BlogSection = ({ blogs, creators }) => {
  return (
    <Container maxWidth='100%' disableGutters sx={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "start" }}>
    {
      !blogs[0] ?
        <Typography variant="caption">No blogs found, sorry!</Typography>
        :
        blogs.map(blog => (
          <BlogCard
            key={blog._id}
            blog={blog}
            creator={creators.find(creator => creator._id === blog.creatorId)}
          />
        ))
    }
  </Container>
  )
}

export default BlogSection