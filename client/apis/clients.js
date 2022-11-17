import useSWR from "swr"
import { useToken } from "../lib"

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

export const postFormData = async (url, formData) => await fetch(url, {
    method: "POST",
    headers: {
      'auth' : useToken
    },
    body: formData
})