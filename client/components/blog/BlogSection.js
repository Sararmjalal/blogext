import { Container } from "@mui/system"
import { Typography } from "@mui/material"
import BlogCard from "./Card"

const BlogSection = ({ blogs, creators }) => {
  return (
    <Container maxWidth='100%' disableGutters sx={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "start" }}>
    {
      !blogs[0] ?
        <Typography variant="caption" sx={{mb:"70px"}}>No blogs found, sorry!</Typography>
        :
        blogs.map(blog => (
          <BlogCard
            key={blog._id}
            blog={blog}
            creator={Array.isArray(creators) ? creators.find(creator => creator._id === blog.creatorId) : creators}
          />
        ))
    }
  </Container>
  )
}

export default BlogSection