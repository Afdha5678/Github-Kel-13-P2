import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PrimaryButton } from "@/components/buttons/primary"
import { Search, Trash } from "@/components/icons/outline"
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

interface TransaksiPenjualan {
    id: string
    tanggal: string
    total: number
    details: any[]
}

export default function Penjualan({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Transaksi Penjualan")
    }, [setTitle])

    const router = useRouter()
    const [penjualans, setPenjualans] = useState<TransaksiPenjualan[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [deleteModalId, setDeleteModalId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    useEffect(() => {
        const fetchPenjualan = async () => {
            setIsLoading(true)
            try {
                const response = await api.get(`/penjualan?search=${encodeURIComponent(debouncedSearchTerm)}`)
                setPenjualans(response.data.data)
            } catch (err: any) {
                setError(err.response?.data?.message || err.message || "Gagal mengambil data transaksi")
            } finally {
                setIsLoading(false)
            }
        }

        fetchPenjualan()
    }, [debouncedSearchTerm])

    const handleDelete = async () => {
        if (!deleteModalId) return;

        setIsDeleting(true)
        try {
            await api.delete(`/penjualan/${deleteModalId}`)
            setPenjualans(penjualans.filter(p => p.id !== deleteModalId))
            setDeleteModalId(null)
        } catch (err: any) {
            alert('Gagal menghapus transaksi: ' + (err.response?.data?.message || err.message))
        } finally {
            setIsDeleting(false)
        }
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount)
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
                        placeholder="Search ID Transaksi"
                    />
                </div>
                <div className="text-xs">
                    <PrimaryButton onClick={() => router.push('/penjualan/create')}>
                        Tambah Transaksi
                    </PrimaryButton>
                </div>
            </div>

            <div className="bg-white mt-4 rounded-xl border border-neutral-100 overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-neutral-500 bg-neutral-50/50 border-b border-neutral-100">
                        <tr>
                            <th className="px-6 py-4 font-medium">ID Transaksi</th>
                            <th className="px-6 py-4 font-medium">Tanggal</th>
                            <th className="px-6 py-4 font-medium">Jumlah Item</th>
                            <th className="px-6 py-4 font-medium">Total Harga</th>
                            <th className="px-6 py-4 font-medium text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {isLoading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-neutral-400">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 rounded-full border-2 border-rose-500 border-t-transparent animate-spin" />
                                        Memuat data...
                                    </div>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-rose-500">{error}</td>
                            </tr>
                        ) : penjualans.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-neutral-400">
                                    <div className="flex flex-col items-center gap-2">
                                        <Search className="w-8 h-8 text-neutral-300" />
                                        <p>Tidak ada transaksi ditemukan</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            penjualans.map((p) => (
                                <tr key={p.id} className="hover:bg-neutral-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-neutral-700 text-xs font-mono">{p.id.split('-')[0].toUpperCase()}</span>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">
                                        {formatDate(p.tanggal)}
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">
                                        {p.details.length} Jenis Obat
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="font-semibold text-rose-600">
                                            {formatCurrency(p.total)}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-3 text-neutral-400">
                                            <button
                                                onClick={() => router.push(`/penjualan/${p.id}`)}
                                                className="hover:text-blue-500 transition-colors"
                                                title="Lihat Detail"
                                            >
                                                <Eye className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => setDeleteModalId(p.id)}
                                                className="hover:text-rose-500 transition-colors"
                                                title="Batalkan Transaksi"
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
                title="Batalkan Transaksi"
                message="Apakah Anda yakin ingin membatalkan transaksi ini? Membatalkan transaksi akan mengembalikan seluruh stok obat ke dalam inventaris secara otomatis."
                onClose={() => setDeleteModalId(null)}
                onConfirm={handleDelete}
                isLoading={isDeleting}
            />
        </div>
    )
}
