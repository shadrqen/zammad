import axios, { AxiosInstance } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-apisports-key': import.meta.env.VITE_API_KEY as string,
  },
})

export default apiClient
