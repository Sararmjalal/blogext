import useSWR from "swr"
import { useToken } from "../lib"
import { useDispatch } from "react-redux"
import { setCurrent } from '../store/slice'

export const getMyBlogs = () => useSWR (
    [`${process.env.SERVER}/blog/my-blogs`, useToken],
    async (...args) => await (await fetch(...args)).json()
  )

export const postJSON = async (url, body, requireAuth = true) => {
  return await fetch(url, {
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
}

export const postMe = async () => {
  if (!useToken) return alert("nmitooni fetch bezani lool")
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