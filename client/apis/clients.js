import { toast } from "react-toastify"
import { useToken } from "../lib"

export const fetcher = async (url, headers = {'Content-Type': 'application/json'}) => {
  const res = await (await fetch(url, {headers})).json()
  if (res.msg) throw new Error(res.msg)
  return res
}
    
export const postJSON = async (url, body, requireAuth = true) => {
    const res = await fetch(url, {
    method: "POST",
    headers: requireAuth ?
      {
      'Content-Type': 'application/json',
      'auth': useToken
      }
      :
      {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(body)
    })
  return await res.json()
}

export const postMe = async () => {
  console.log(useToken)
  if (useToken.includes('undefiend')) return toast.error('Something went wrong. Please try again!')
  try {
    return await postJSON(`${process.env.SERVER}/user/me`, {})
  } catch (error) {
    toast.error("Server is closed or you're not one of us lool")
  }
}

export const postFormData = async (url, formData) => await fetch(url, {
    method: "POST",
    headers: {
      'auth' : useToken
    },
    body: formData
})