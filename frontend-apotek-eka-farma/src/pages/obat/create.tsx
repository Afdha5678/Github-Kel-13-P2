import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import api from "@/lib/axios"

export default function CreateObat({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Tambah Data Obat")
    }, [setTitle])

    const router = useRouter()

    const [formData, setFormData] = useState({
        nama: "",
        hargaJual: "",
        satuan: "Pcs",
        lokasiRak: "",
        image: null as File | null
    })
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        const files = (e.target as HTMLInputElement).files
        if (name === 'image' && files && files[0]) {
            const file = files[0]
            setFormData(prev => ({ ...prev, image: file }))
            setPreviewUrl(URL.createObjectURL(file))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const triggerFileInput = () => {
        fileInputRef.current?.click()
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        const data = new FormData()
        data.append('nama', formData.nama)
        data.append('hargaJual', formData.hargaJual)
        data.append('satuan', formData.satuan)
        data.append('lokasiRak', formData.lokasiRak)
        if (formData.image) {
            data.append('image', formData.image)
        }

        try {
            await api.post('/obat', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            router.push('/obat')
        } catch (error: any) {
            alert('Gagal menambahkan obat: ' + (error.response?.data?.message || error.message))
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
                            <h3 className="text-lg font-semibold leading-6 text-neutral-900">Tambah Obat</h3>
                            <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                                Masukkan informasi obat baru ke dalam inventaris. Pastikan data seperti nama dan harga jual sudah benar.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Form Card */}
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        {/* Form Card */}
                        <div className="shadow-sm overflow-hidden sm:rounded-xl border border-neutral-200 bg-white">
                            <div className="px-4 py-6 sm:p-8 space-y-6">
                                {/* Nama Obat */}
                                <div>
                                    <label htmlFor="nama" className="block text-sm font-medium text-neutral-700">
                                        Nama Obat
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="nama"
                                            id="nama"
                                            value={formData.nama}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="Contoh: Paracetamol 500mg"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Harga Jual */}
                                <div>
                                    <label htmlFor="hargaJual" className="block text-sm font-medium text-neutral-700">
                                        Harga Jual
                                    </label>
                                    <div className="mt-2 relative rounded-md shadow-sm">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <span className="text-neutral-500 sm:text-sm">Rp</span>
                                        </div>
                                        <input
                                            type="number"
                                            name="hargaJual"
                                            id="hargaJual"
                                            value={formData.hargaJual}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 pl-10 focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="0"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Satuan */}
                                <div>
                                    <label htmlFor="satuan" className="block text-sm font-medium text-neutral-700">
                                        Satuan
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            name="satuan"
                                            id="satuan"
                                            value={formData.satuan}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border bg-white cursor-pointer"
                                            required
                                        >
                                            <option value="Syr">Syr</option>
                                            <option value="Strip">Strip</option>
                                            <option value="Box">Box</option>
                                            <option value="Pcs">Pcs</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Lokasi Rak */}
                                <div>
                                    <label htmlFor="lokasiRak" className="block text-sm font-medium text-neutral-700">
                                        Lokasi Penyimpanan (Rak)
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="lokasiRak"
                                            id="lokasiRak"
                                            value={formData.lokasiRak}
                                            onChange={handleChange}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                            placeholder="Contoh: Rak A-3, Kulkas pendingin"
                                        />
                                    </div>
                                </div>

                                {/* Foto Obat (Drag and Drop Area from design) */}
                                <div>
                                    <label className="block text-sm font-medium text-neutral-700">
                                        Foto Obat
                                    </label>
                                    <div
                                        className="mt-2 flex justify-center rounded-lg border border-dashed border-neutral-300 px-6 py-10 hover:bg-neutral-50 transition-colors cursor-pointer"
                                        onClick={triggerFileInput}
                                    >
                                        <div className="text-center">
                                            {previewUrl ? (
                                                <div className="mb-4">
                                                    <img src={previewUrl} alt="Preview" className="mx-auto h-32 w-32 object-cover rounded-lg shadow-sm" />
                                                </div>
                                            ) : (
                                                <svg className="mx-auto h-12 w-12 text-neutral-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                                </svg>
                                            )}

                                            <div className="mt-4 flex text-sm leading-6 text-neutral-600 justify-center">
                                                <span className="relative cursor-pointer rounded-md bg-white font-semibold text-rose-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-rose-600 focus-within:ring-offset-2 hover:text-rose-500">
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="image"
                                                        type="file"
                                                        className="sr-only"
                                                        accept="image/*"
                                                        onChange={handleChange}
                                                        ref={fileInputRef}
                                                    />
                                                </span>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs leading-5 text-neutral-500">PNG, JPG, GIF up to 5MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Actions (Outside Form Card) */}
                        <div className="mt-6 flex items-center justify-end gap-x-4">
                            <button
                                type="button"
                                onClick={() => router.push('/obat')}
                                className="text-sm font-semibold leading-6 text-neutral-900 hover:text-neutral-600 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="rounded-lg bg-rose-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-colors disabled:opacity-50"
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