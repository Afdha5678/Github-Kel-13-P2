import { useEffect, useState, ComponentType } from "react"
import { useRouter } from "next/router"

export function withAuth<P extends object>(
    WrappedComponent: ComponentType<P>,
    requireAuth: boolean = true
) {
    return function AuthGuard(props: P) {
        const router = useRouter()
        const [isVerified, setIsVerified] = useState(false)

        useEffect(() => {
            const token = localStorage.getItem("token")

            if (requireAuth && !token) {
                router.replace("/auth/login")
            } else if (!requireAuth && token) {
                router.replace("/dashboard")
            } else {
                setIsVerified(true)
            }
        }, [router])

        if (!isVerified) {
            return (
                <div className="min-h-screen flex items-center justify-center bg-pink-50">
                    <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )
        }

        return <WrappedComponent {...props} />
    }
}