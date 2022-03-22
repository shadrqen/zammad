import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: ' https://v3.football.api-sports.io',
  headers: {
    'Content-type': 'application/json',
    'x-apisports-key': import.meta.env.VITE_API_KEY as string,
  },
})

export default apiClient
