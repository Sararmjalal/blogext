import { Container } from "@mui/system"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"
import Appbar from "../dashboard/Appbar"

const Header = () => {
  const thisUser = useSelector(selectUser)
  return (
    <Container sx={{p: {sm: "0"}}} maxWidth={false}>
      {
        thisUser && <Appbar hasMenu={false}/>
      }
    </Container>
  )
}

export default Header

