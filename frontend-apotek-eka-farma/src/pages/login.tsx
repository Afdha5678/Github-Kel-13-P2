import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import api from "@/lib/axios"
import Link from "next/link"

export default function Login({ setTitle }: { setTitle: (title: string) => void }) {
    const router = useRouter()
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setTitle("Login")
    }, [setTitle])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError(null)

        try {
            const { data } = await api.post('/auth/login', formData)
            if (data.success) {
                Cookies.set('token', data.data.token, { expires: 1, path: '/' })
                Cookies.set('user', JSON.stringify(data.data.user), { expires: 1, path: '/' })
                router.push('/')
            }
        } catch (err: any) {
            setError(err.response?.data?.message || 'Login gagal.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-pink-100">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-rose-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-4">
                        <span className="text-white text-3xl font-bold">A</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-800">Selamat Datang</h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {error && <div className="text-red-500 text-xs text-center">{error}</div>}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        <div className="flex justify-end mt-2">
                            <Link href="/forgot-password" className="text-xs font-semibold text-rose-500 hover:text-rose-600">
                                Lupa Password?
                            </Link>
                        </div>
                    </div>
                    <button className="w-full bg-rose-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-70">
                        {isLoading ? "Masuk..." : "Masuk ke Sistem"}
                    </button>
                </form>
            </div>
        </div>
    )
}