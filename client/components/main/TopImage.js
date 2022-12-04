import { Container } from "@mui/system"
import Image from "next/image"

const TopImage = ({ src, alt }) => (
  <Container maxWidth="100%" sx={{position:'relative', width:"100%", height:'100vh'}}>
    <Image
      priority
      alt={alt}
      src={src}
      fill
      style={{objectFit:'cover'}}
    />
  </Container>
)

export default TopImage