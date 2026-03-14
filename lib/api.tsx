import axios from "axios"

const API_URL = "https://jsonplaceholder.typicode.com/users"

export const fetchUsers = async () => {
  const res = await axios.get(API_URL)
  return res.data
}

export const createUser = async (data: any) => {
  const res = await axios.post(API_URL, data)
  return res.data
}

export const updateUser = async (id: number, data: any) => {
  const res = await axios.put(`${API_URL}/${id}`, data)
  return res.data
}

export const deleteUser = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`)
  return id
}