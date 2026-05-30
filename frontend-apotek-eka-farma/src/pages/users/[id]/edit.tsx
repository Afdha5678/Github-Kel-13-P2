import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import api from "@/lib/axios"
import Cookies from "js-cookie"

export default function EditUser({ setTitle }: { setTitle: (title: string) => void }) {
    const router = useRouter()
    const { id } = router.query

    const [isLoading, setIsLoading] = useState(true)
    const [isSaving, setIsSaving] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        password: "",
        role: "PEGAWAI"
    })

    useEffect(() => {
        setTitle("Edit Data Pengguna")
        
        const userData = Cookies.get('user')
        if (!userData || JSON.parse(userData).role !== 'OWNER') {
            router.push('/')
            return
        }

        if (!id) return;

        const fetchUser = async () => {
            try {
                const response = await api.get(`/users/${id}`)
                const data = response.data.data
                setFormData({
                    nama: data.nama,
                    email: data.email,
                    password: "", // Keep password blank
                    role: data.role
                })
            } catch (err: any) {
                setError(err.response?.data?.message || err.message || "Gagal mengambil data pengguna")
            } finally {
                setIsLoading(false)
            }
        }

        fetchUser()
    }, [id, setTitle, router])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)
        setError(null)

        try {
            const payload: any = {
                nama: formData.nama,
                email: formData.email,
                role: formData.role // Cannot be changed by UI anyway since there's no dropdown
            }
            if (formData.password.trim() !== '') {
                payload.password = formData.password
            }

            await api.put(`/users/${id}`, payload)
            router.push('/users')
        } catch (err: any) {
            setError(err.response?.data?.message || err.message || "Terjadi kesalahan saat menyimpan data")
            setIsSaving(false)
        }
    }

    if (isLoading) {
        return <div className="text-center py-8 text-neutral-500">Memuat data...</div>
    }

    return (
        <div className="max-w-7xl mx-auto py-6 animate-in fade-in duration-500">
            {error && (
                <div className="mb-6 p-4 rounded-lg bg-rose-50 text-rose-600 text-sm border border-rose-100">
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="md:grid md:grid-cols-3 md:gap-8">
                    {/* Left Column: Title and Description */}
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-semibold leading-6 text-neutral-900">Perbarui Informasi</h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Ubah data nama, email, atau atur ulang kata sandi pengguna ini. 
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="shadow-sm overflow-hidden sm:rounded-xl border border-neutral-200 bg-white">
                            <div className="px-4 py-6 sm:p-8 space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700">Nama Lengkap</label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nama"
                                            value={formData.nama}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="Masukkan nama pengguna"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700">Email</label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            autoComplete="off"
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="email@contoh.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-neutral-700">Kata Sandi Baru</label>
                                    <div className="mt-2">
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            autoComplete="new-password"
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="Kosongkan jika tidak ingin mengubah sandi"
                                        />
                                    </div>
                                    <p className="text-xs text-neutral-500 mt-2">Isi hanya jika ingin mengubah kata sandi pengguna ini.</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-6 flex items-center justify-end gap-x-4">
                            <button
                                type="button"
                                onClick={() => router.push('/users')}
                                className="text-sm font-semibold leading-6 text-neutral-900 hover:text-neutral-600 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSaving}
                                className="rounded-lg bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-colors disabled:opacity-50"
                            >
                                {isSaving ? 'Menyimpan...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
