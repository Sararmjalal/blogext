import { toast } from "react-toastify"
import { useToken } from "../lib"

export const fetcher = async (url, headers = {'Content-Type': 'application/json'}) => {
  const res = await (await fetch(url, {headers})).json()
  if (res.msg) throw new Error(res.msg)
  return res
}
    
export const postJSON = async (url, body, requireAuth = true) => {

  const headers = {
    'Content-Type': 'application/json',
  };
  if (requireAuth) headers.auth = useToken()

  console.log(headers, 'headers')

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  });

  return await res.json()
}

export const postMe = async () => {
  if (!useToken()) return toast.error('Something went wrong. Please try again!')
  try {
    return await postJSON(`${process.env.SERVER}/user/me`, {}, true)
  } catch (error) {
    toast.error("Server is closed or you're not one of us lool")
  }
}

export const postFormData = async (url, formData) => await (await fetch(url, {
  method: "POST",
  headers: {
    'auth' : useToken()
  },
  body: formData
})).json()