import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import api from "@/lib/axios"
import Link from "next/link"

export default function ResetPassword({ setTitle }: { setTitle: (title: string) => void }) {
    const router = useRouter()
    const { token } = router.query

    useEffect(() => {
        setTitle("Atur Ulang Password")
    }, [setTitle])

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (password !== confirmPassword) {
            setMessage({ type: 'error', text: 'Konfirmasi password tidak cocok' })
            return
        }

        if (password.length < 6) {
            setMessage({ type: 'error', text: 'Password minimal 6 karakter' })
            return
        }

        setIsLoading(true)
        setMessage(null)

        try {
            const response = await api.post('/auth/reset-password', { token, newPassword: password })
            setMessage({ type: 'success', text: response.data.message })
            setTimeout(() => {
                router.push('/login')
            }, 3000)
        } catch (error: any) {
            setMessage({ type: 'error', text: error.response?.data?.message || 'Gagal mereset password. Link mungkin sudah tidak berlaku.' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Atur Kata Sandi Baru</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Silakan buat kata sandi baru untuk akun Anda.
                    </p>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-xl text-sm ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                        {message.text}
                        {message.type === 'success' && <div className="mt-2 text-xs opacity-70">Mengalihkan ke halaman login...</div>}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Kata Sandi Baru</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full rounded-xl border-gray-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-3 bg-gray-50"
                            placeholder="Minimal 6 karakter"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Kata Sandi Baru</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full rounded-xl border-gray-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-3 bg-gray-50"
                            placeholder="Ulangi kata sandi"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading || message?.type === 'success'}
                        className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3.5 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center mt-2"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        ) : (
                            'Simpan Password Baru'
                        )}
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <Link href="/login" className="text-sm font-semibold text-rose-500 hover:text-rose-600">
                        &larr; Kembali ke halaman Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
