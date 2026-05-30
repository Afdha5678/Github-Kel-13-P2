import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import api from "@/lib/axios"
import Link from "next/link"

export default function ForgotPassword({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Lupa Password")
    }, [setTitle])

    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setMessage(null)

        try {
            const response = await api.post('/auth/forgot-password', { email })
            setMessage({ type: 'success', text: response.data.message })
            setEmail("")
        } catch (error: any) {
            setMessage({ type: 'error', text: error.response?.data?.message || 'Gagal mengirim email reset password' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50 p-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-pink-100 p-8">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Lupa Password?</h2>
                    <p className="text-sm text-gray-500 mt-2">
                        Masukkan email yang terdaftar. Kami akan mengirimkan instruksi untuk mengatur ulang kata sandi Anda.
                    </p>
                </div>

                {message && (
                    <div className={`mb-6 p-4 rounded-xl text-sm ${message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'}`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Alamat Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-xl border-gray-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-3 bg-gray-50"
                            placeholder="email@contoh.com"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3.5 text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                        ) : (
                            'Kirim Instruksi Reset'
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
