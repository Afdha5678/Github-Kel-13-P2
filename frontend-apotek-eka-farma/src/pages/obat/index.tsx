import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PrimaryButton } from "@/components/buttons/primary"
import { Search, Pencil, Trash, Eye } from "@/components/icons/outline"
import { ImagePreview } from "@/components/modal/image-preview"
import { DeleteConfirmation } from "@/components/modal/delete-confirmation"
import { useDebounce } from "@/hooks/useDebounce"
import api, { API_BASE_URL } from "@/lib/axios"

interface Obat {
    id: string
    nama: string
    hargaJual: number
    totalStok: number
    image?: string | null
    hasExpiringStock?: boolean
    satuan?: string | null
    lokasiRak?: string | null
}

export default function Obat({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Data Obat")
    }, [setTitle])

    const router = useRouter()
    const [obats, setObats] = useState<Obat[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [deleteModalObatId, setDeleteModalObatId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    useEffect(() => {
        const fetchObat = async () => {
            setIsLoading(true)
            try {
                const response = await api.get(`/obat?search=${encodeURIComponent(debouncedSearchTerm)}`)
                setObats(response.data.data)
            } catch (err: any) {
                setError(err.response?.data?.message || err.message || "Gagal mengambil data obat")
            } finally {
                setIsLoading(false)
            }
        }

        fetchObat()
    }, [debouncedSearchTerm])

    const handleDelete = async () => {
        if (!deleteModalObatId) return;

        setIsDeleting(true)
        try {
            await api.delete(`/obat/${deleteModalObatId}`)
            setObats(obats.filter(obat => obat.id !== deleteModalObatId))
            setDeleteModalObatId(null)
        } catch (err: any) {
            alert('Gagal menghapus data obat: ' + (err.response?.data?.message || err.message))
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="relative w-64 text-neutral-400 focus-within:text-rose-500">
                    <Search className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white w-full rounded-lg pl-8 p-2 text-xs focus:outline-rose-300 transition-colors"
                        placeholder="Search obat"
                    />
                </div>
                <div className="text-xs">
                    <PrimaryButton onClick={() => router.push('/obat/create')}>
                        Tambah Obat
                    </PrimaryButton>
                </div>
            </div>

            <div className="mt-4 bg-white rounded-xl overflow-hidden border-neutral-200 shadow-sm border">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-neutral-200 text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            <th className="px-6 py-4">No.</th>
                            <th className="px-6 py-4">Nama Obat</th>
                            <th className="px-6 py-4">Harga Jual</th>
                            <th className="px-6 py-4">Satuan</th>
                            <th className="px-6 py-4">Lokasi Rak</th>
                            <th className="px-6 py-4">Stok</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {isLoading ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-sm text-neutral-500">
                                    Loading data obat...
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-sm text-rose-500">
                                    {error}
                                </td>
                            </tr>
                        ) : obats.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="px-6 py-8 text-center text-sm text-neutral-500">
                                    Belum ada data obat.
                                </td>
                            </tr>
                        ) : (
                            obats.map((obat, index) => {
                                const imageUrl = obat.image 
                                    ? (obat.image.startsWith('http') ? obat.image : `${API_BASE_URL}${obat.image}`) 
                                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(obat.nama)}&background=random`;
                                
                                // Cek apakah row ini harus di-highlight
                                let isHighlighted = false;
                                if (router.query.highlight === 'low-stock' && obat.totalStok < 10) {
                                    isHighlighted = true;
                                }
                                if (router.query.highlight === 'expiring' && obat.hasExpiringStock) {
                                    isHighlighted = true;
                                }
                                
                                return (
                                    <tr 
                                        key={obat.id} 
                                        className={`transition-all duration-500 hover:bg-neutral-50/50 ${
                                            isHighlighted ? (router.query.highlight === 'expiring' ? 'bg-amber-50/80 ring-1 ring-amber-200' : 'bg-rose-50/80 ring-1 ring-rose-200') : ''
                                        }`}
                                    >
                                        <td className="px-6 py-4 text-sm text-neutral-500">{index + 1}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => setSelectedImage(imageUrl)}
                                                    className="focus:outline-none hover:opacity-80 transition-opacity"
                                                >
                                                    <img
                                                        src={imageUrl}
                                                        alt={obat.nama}
                                                        className="w-10 h-10 rounded-full bg-neutral-100 object-cover cursor-pointer shadow-sm border border-neutral-200"
                                                    />
                                                </button>
                                                <div 
                                                    onClick={() => router.push(`/obat/${obat.id}`)}
                                                    className="font-medium text-neutral-900 text-sm cursor-pointer hover:text-rose-600 transition-colors"
                                                >
                                                    {obat.nama}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-500">
                                            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(obat.hargaJual)}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-neutral-700 font-medium">
                                            {obat.satuan || "Pcs"}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {obat.lokasiRak ? (
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-50 text-rose-600 border border-rose-100">
                                                    📍 {obat.lokasiRak}
                                                </span>
                                            ) : (
                                                <span className="text-neutral-400">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${obat.totalStok > 0 ? (obat.totalStok < 10 ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-rose-500'}`}></div>
                                                <span className={`${isHighlighted ? (router.query.highlight === 'expiring' ? 'text-amber-700 font-bold' : 'text-rose-700 font-bold') : 'text-neutral-700 font-medium'}`}>
                                                    {obat.totalStok}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center justify-end gap-3 text-neutral-400">
                                                <button
                                                    onClick={() => router.push(`/obat/${obat.id}`)}
                                                    className="hover:text-blue-500 transition-colors"
                                                    title="Lihat Detail"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => router.push(`/obat/${obat.id}/edit`)}
                                                    className="hover:text-emerald-500 transition-colors"
                                                    title="Edit Data"
                                                >
                                                    <Pencil className="w-5 h-5" />
                                                </button>
                                                <button
                                                    onClick={() => setDeleteModalObatId(obat.id)}
                                                    className="hover:text-rose-500 transition-colors"
                                                    title="Hapus Obat"
                                                >
                                                    <Trash className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        )}
                    </tbody>
                </table>
            </div>

            <ImagePreview
                selectedImage={selectedImage}
                onClose={() => setSelectedImage(null)}
            />

            <DeleteConfirmation
                isOpen={!!deleteModalObatId}
                title="Hapus Data Obat"
                message="Apakah Anda yakin ingin menghapus data obat ini? Tindakan ini akan menghapus data secara permanen."
                onClose={() => setDeleteModalObatId(null)}
                onConfirm={handleDelete}
                isLoading={isDeleting}
            />
        </div>
    )
}