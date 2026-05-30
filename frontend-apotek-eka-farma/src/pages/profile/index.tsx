import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Cookies from "js-cookie"
import api from "@/lib/axios"

export default function Profile({ setTitle }: { setTitle: (title: string) => void }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        setTitle("Profil Saya")
        
        const fetchProfile = async () => {
            try {
                const response = await api.get('/users/profile')
                const user = response.data.data
                setFormData({
                    nama: user.nama || "",
                    email: user.email || "",
                    password: "" // Keep empty by default
                })
            } catch (error: any) {
                setMessage({ 
                    type: 'error', 
                    text: error.response?.data?.message || 'Gagal mengambil data profil' 
                })
            } finally {
                setIsLoading(false)
            }
        }

        fetchProfile()
    }, [setTitle])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)
        setMessage(null)

        try {
            const payload: any = {
                nama: formData.nama,
                email: formData.email
            }
            if (formData.password.trim() !== '') {
                payload.password = formData.password
            }

            const response = await api.put('/users/profile', payload)
            const updatedUser = response.data.data
            
            // Update cookie dengan data terbaru agar Topbar ikut terupdate
            const currentUserCookie = Cookies.get('user')
            if (currentUserCookie) {
                const currentUserData = JSON.parse(currentUserCookie)
                Cookies.set('user', JSON.stringify({ ...currentUserData, ...updatedUser }))
            }
            
            alert('Profil berhasil diperbarui!')
            router.push('/')
        } catch (error: any) {
            setMessage({ 
                type: 'error', 
                text: error.response?.data?.message || error.message || 'Gagal memperbarui profil' 
            })
            setIsSaving(false)
        }
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="flex items-center gap-2 text-neutral-500">
                    <div className="w-5 h-5 rounded-full border-2 border-rose-500 border-t-transparent animate-spin" />
                    Memuat data profil...
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto py-6 animate-in fade-in duration-500">
            <div className="mb-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-tr from-rose-400 to-pink-500 rounded-full flex items-center justify-center mx-auto shadow-lg mb-4 text-white text-3xl font-bold uppercase tracking-wider">
                    {formData.nama ? formData.nama.charAt(0) : 'U'}
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Pengaturan Profil</h2>
                <p className="text-sm text-neutral-500 mt-1">Perbarui informasi pribadi dan kata sandi Anda</p>
            </div>

            {message && (
                <div className={`mb-6 p-4 rounded-xl border ${message.type === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'}`}>
                    <div className="flex items-center gap-2">
                        {message.type === 'success' ? (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        ) : (
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        )}
                        <p className="text-sm font-medium">{message.text}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl border border-neutral-100 shadow-sm space-y-6">
                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Nama Lengkap</label>
                    <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        className="w-full rounded-xl border-neutral-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-3 bg-neutral-50/50"
                        placeholder="Masukkan nama lengkap"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border-neutral-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-3 bg-neutral-50/50"
                        placeholder="contoh@email.com"
                        required
                    />
                </div>

                <div className="pt-4 border-t border-neutral-100">
                    <label className="block text-sm font-medium text-neutral-700 mb-2">Kata Sandi Baru</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="new-password"
                        className="w-full rounded-xl border-neutral-200 shadow-sm focus:border-rose-500 focus:ring-rose-500 p-3 bg-neutral-50/50"
                        placeholder="Kosongkan jika tidak ingin mengubah sandi"
                    />
                    <p className="text-xs text-neutral-500 mt-2">Isi hanya jika Anda ingin mengubah kata sandi Anda saat ini.</p>
                </div>

                <div className="pt-6 flex gap-3">
                    <button
                        type="button"
                        onClick={() => router.push('/')}
                        className="w-full rounded-xl bg-white border border-neutral-200 px-4 py-3.5 text-sm font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {isSaving ? (
                            <>
                                <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                                Menyimpan...
                            </>
                        ) : (
                            'Simpan Perubahan'
                        )}
                    </button>
                </div>
            </form>
        </div>
    )
}
