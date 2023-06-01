import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sistama-api.onrender.com'
})

export default api