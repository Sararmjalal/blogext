import { toast } from "react-toastify"
import useSWR from "swr"
import { useToken } from "../lib"

export const fetcher = async (...args) => await (await fetch(...args)).json()
    
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
  if (!useToken) return toast.error('Something went wrong. Please try again!')
  try {
    return await (await postJSON(`${process.env.SERVER}/user/me`, {})).json()
  } catch (error) {
    console.log("me error", error)
  }
}

export const postFormData = async (url, formData) => await fetch(url, {
    method: "POST",
    headers: {
      'auth' : useToken
    },
    body: formData
})