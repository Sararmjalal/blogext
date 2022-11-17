import { postJSON } from '../../apis/clients'

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
  
  return <button onClick={() => signUp("salamy", "salamy")}>it will run the sign up with your daTa</button>
}

export default Page