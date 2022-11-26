import { useToken } from "../lib"
import { mutate } from "swr"

export const fetcher = async (url, headers = {'Content-Type': 'application/json'}) => {
  const res = await (await fetch(url, {headers})).json()
  if (res.msg) throw new Error(res.msg)
  return res
}

export const refetch = async (key, func) => {
  await mutate(key, func, {revalidate: true})
}

export const postJSON = async (url, body, requireAuth = true) => {

  const headers = {
    'Content-Type': 'application/json',
  };
  if (requireAuth) headers.auth = useToken()

  const res = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body)
  });

  return await res.json()
}

export const postMe = async () => {
  if (!useToken()) return 
  return await postJSON(`${process.env.SERVER}/user/me`, {})
}

export const postFormData = async (url, formData) => await (await fetch(url, {
  method: "POST",
  headers: {
    'auth' : useToken()
  },
  body: formData
})).json()