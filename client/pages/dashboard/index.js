import { selectUser } from "../../store/slice"
import { useSelector } from "react-redux"
const Dashboard = () => {
  const thisUser = useSelector(selectUser)
  console.log(thisUser)
  if(!thisUser) return <h1>Gomsho</h1>
  return <h1>Dashboard yeay!</h1>
}

export default Dashboard