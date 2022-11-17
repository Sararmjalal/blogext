import { postJSON } from '../../apis/clients'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, setCurrent, removeCurrent } from '../../store/slice'
import { useEffect, useState } from 'react'

function Page() {

  const signUp = async (username, name) => {
    const data = await(await postJSON(
    'http://localhost:4000/user/signup',
    { username, name },
    false)
    ).json()
    
    if (data.msg) return alert("bemir")
    alert("afarin")
  }

  const [mystate, setmystate] = useState(0)
  
  const thisUser = useSelector(state => state.userReducer.current)
  
  const dispatch = useDispatch()
  
  const myFunction = (data) => {
    dispatch(setCurrent(data))
    setmystate(mystate + 1)
  }
  
  useEffect(() => {
    console.log("current changed!", thisUser)
  }, [mystate])
  
  return <button onClick={() => myFunction("sara")}>it will run the sign up with your daTa</button>
}

export default Page