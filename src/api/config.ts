import axios from 'axios'

const url = "http://127.0.0.1:8000/"

export const macApi = axios.create({
  baseURL: url
})