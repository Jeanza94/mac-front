import axios from 'axios'

// const url = "http://127.0.0.1:8000/"
const url = "https://mac-backend-zsmf.onrender.com/"

export const macApi = axios.create({
  baseURL: url
})