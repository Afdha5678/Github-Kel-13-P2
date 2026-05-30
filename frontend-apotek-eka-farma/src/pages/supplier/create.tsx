import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import api from "@/lib/axios"

export default function CreateSupplier({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Tambah Data Supplier")
    }, [setTitle])

    const router = useRouter()
    const [formData, setFormData] = useState({
        nama: "",
        alamat: "",
        telepon: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            await api.post('/supplier', formData)
            router.push('/supplier')
        } catch (error: any) {
            alert('Gagal menambahkan supplier: ' + (error.response?.data?.message || error.message))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto py-6">
            <form onSubmit={handleSubmit}>
                <div className="md:grid md:grid-cols-3 md:gap-8">
                    {/* Left Column: Title and Description */}
                    <div className="md:col-span-1">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-lg font-semibold leading-6 text-neutral-900">Tambah Supplier</h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Masukkan informasi supplier baru ke dalam sistem. Pastikan data seperti nama, alamat, dan nomor telepon sudah benar.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        {/* Form Card */}
                        <div className="shadow-sm overflow-hidden sm:rounded-xl border border-neutral-200 bg-white">
                            <div className="px-4 py-6 sm:p-8 space-y-6">
                                {/* Nama Supplier */}
                                <div>
                                    <label htmlFor="nama" className="block text-sm font-medium text-neutral-700">
                                        Nama Supplier
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nama"
                                            id="nama"
                                            value={formData.nama}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="Contoh: PT Bina San Prima"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Telepon */}
                                <div>
                                    <label htmlFor="telepon" className="block text-sm font-medium text-neutral-700">
                                        Nomor Telepon
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="telepon"
                                            id="telepon"
                                            value={formData.telepon}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="Contoh: 08123456789"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Alamat */}
                                <div>
                                    <label htmlFor="alamat" className="block text-sm font-medium text-neutral-700">
                                        Alamat
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            name="alamat"
                                            id="alamat"
                                            rows={4}
                                            value={formData.alamat}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border resize-none"
                                            placeholder="Masukkan alamat lengkap..."
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions (Outside Form Card) */}
                        <div className="mt-6 flex items-center justify-end gap-x-4">
                            <button
                                type="button"
                                onClick={() => router.push('/supplier')}
                                className="text-sm font-semibold leading-6 text-neutral-900 hover:text-neutral-600 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="rounded-lg bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-colors disabled:opacity-50"
                            >
                                {isLoading ? 'Menyimpan...' : 'Save'}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
