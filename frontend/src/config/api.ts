import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: `https://api.plumera.fr/api/v1/`,
  //baseURL: `http://localhost:3333/api/v1/`,
})

api.defaults.withCredentials = true

export default api
