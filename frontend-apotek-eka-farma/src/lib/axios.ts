import axios from 'axios'
import Cookies from 'js-cookie'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001'

const api = axios.create({
    baseURL: `${API_BASE_URL}/api`,
    headers: {
        'Content-Type': 'application/json',
    },
})

api.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default api