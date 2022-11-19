import { useSelector } from "react-redux"
import { selectUser } from "../../store/slice"

const Header = () => {
  const thisUser = useSelector(selectUser)
  console.log('thisUser from header', thisUser)
  return (
      <h1>
      {
        thisUser ? "Logged" : "out"
      }
      </h1>
  )
}

export default Header

