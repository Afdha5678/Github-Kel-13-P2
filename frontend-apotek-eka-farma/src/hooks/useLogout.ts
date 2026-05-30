import Cookies from "js-cookie"
import { useRouter } from "next/router"

export const useLogout = () => {
    const router = useRouter()

    const logout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        router.push('/auth/login')
    }

    return { logout }
}