import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PrimaryButton } from "@/components/buttons/primary"
import { Search, Trash, Pencil } from "@/components/icons/outline"
import { DeleteConfirmation } from "@/components/modal/delete-confirmation"
import { useDebounce } from "@/hooks/useDebounce"
import api from "@/lib/axios"

// Eye Icon for Detail View
const Eye = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
)

// Truck/Receive icon
const Truck = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
)

interface TransaksiPembelian {
    id: string
    tanggal: string
    status: 'PENDING' | 'COMPLETED'
    supplier: { nama: string }
    details: any[]
}

export default function Pembelian({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Transaksi Pembelian")
    }, [setTitle])
    const router = useRouter()
    const [pembelians, setPembelians] = useState<TransaksiPembelian[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [deleteModalId, setDeleteModalId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    useEffect(() => {
        const fetchPembelian = async () => {
            setIsLoading(true)
            try {
                const response = await api.get(`/pembelian?search=${encodeURIComponent(debouncedSearchTerm)}`)
                setPembelians(response.data.data)
            } catch (err: any) {
                setError(err.response?.data?.message || err.message || "Gagal mengambil data pembelian")
            } finally {
                setIsLoading(false)
            }
        }

        fetchPembelian()
    }, [debouncedSearchTerm])

    const handleDelete = async () => {
        if (!deleteModalId) return;

        setIsDeleting(true)
        try {
            await api.delete(`/pembelian/${deleteModalId}`)
            setPembelians(pembelians.filter(p => p.id !== deleteModalId))
            setDeleteModalId(null)
        } catch (err: any) {
            alert('Gagal menghapus transaksi: ' + (err.response?.data?.message || err.message))
        } finally {
            setIsDeleting(false)
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
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
                        placeholder="Search ID Pembelian" 
                    />
                </div>
                <div className="text-xs">
                    <PrimaryButton onClick={() => router.push('/pembelian/create')}>
                        Buat Pesanan Baru (PO)
                    </PrimaryButton>
                </div>
            </div>

            <div className="bg-white mt-4 rounded-xl border border-neutral-100 overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-neutral-500 bg-neutral-50/50 border-b border-neutral-100">
                        <tr>
                            <th className="px-6 py-4 font-medium">ID Transaksi</th>
                            <th className="px-6 py-4 font-medium">Tanggal</th>
                            <th className="px-6 py-4 font-medium">Supplier</th>
                            <th className="px-6 py-4 font-medium">Jumlah Item</th>
                            <th className="px-6 py-4 font-medium text-center">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {isLoading ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-neutral-400">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 rounded-full border-2 border-rose-500 border-t-transparent animate-spin" />
                                        Memuat data...
                                    </div>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-8 text-center text-rose-500">{error}</td>
                            </tr>
                        ) : pembelians.length === 0 ? (
                            <tr>
                                <td colSpan={6} className="px-6 py-12 text-center text-neutral-400">
                                    <div className="flex flex-col items-center gap-2">
                                        <Search className="w-8 h-8 text-neutral-300" />
                                        <p>Tidak ada transaksi pembelian ditemukan</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            pembelians.map((p) => (
                                <tr key={p.id} className="hover:bg-neutral-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-neutral-700 text-xs font-mono">{p.id.split('-')[0].toUpperCase()}</span>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">
                                        {formatDate(p.tanggal)}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-neutral-800">
                                        {p.supplier?.nama}
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">
                                        {p.details.length} Jenis Obat
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            p.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                                        }`}>
                                            {p.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-3 text-neutral-400">
                                            {p.status === 'PENDING' ? (
                                                <button 
                                                    onClick={() => router.push(`/pembelian/${p.id}/receive`)}
                                                    className="hover:text-amber-500 transition-colors flex items-center gap-1 text-xs font-medium"
                                                    title="Terima Barang"
                                                >
                                                    <Truck className="w-5 h-5" /> Terima
                                                </button>
                                            ) : (
                                                <button 
                                                    onClick={() => router.push(`/pembelian/${p.id}`)}
                                                    className="hover:text-blue-500 transition-colors"
                                                    title="Lihat Detail"
                                                >
                                                    <Eye className="w-5 h-5" />
                                                </button>
                                            )}
                                            <button 
                                                onClick={() => setDeleteModalId(p.id)}
                                                className="hover:text-rose-500 transition-colors"
                                                title="Hapus Transaksi"
                                            >
                                                <Trash className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <DeleteConfirmation
                isOpen={!!deleteModalId}
                title="Hapus Transaksi Pembelian"
                message="Apakah Anda yakin ingin menghapus transaksi ini? Jika transaksi sudah COMPLETED, ini akan mengurangi stok obat yang pernah ditambahkan."
                onClose={() => setDeleteModalId(null)}
                onConfirm={handleDelete}
                isLoading={isDeleting}
            />
        </div>
    )
}
