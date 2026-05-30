import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PrimaryButton } from "@/components/buttons/primary"
import { Search, Pencil, Trash } from "@/components/icons/outline"
import { DeleteConfirmation } from "@/components/modal/delete-confirmation"
import { useDebounce } from "@/hooks/useDebounce"
import api from "@/lib/axios"

interface Supplier {
    id: string
    nama: string
    alamat: string
    telepon: string
}

export default function Supplier({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Data Supplier")
    }, [setTitle])

    const router = useRouter()
    const [suppliers, setSuppliers] = useState<Supplier[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [deleteModalSupplierId, setDeleteModalSupplierId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    useEffect(() => {
        const fetchSupplier = async () => {
            setIsLoading(true)
            try {
                const response = await api.get(`/supplier?search=${encodeURIComponent(debouncedSearchTerm)}`)
                setSuppliers(response.data.data)
            } catch (err: any) {
                setError(err.response?.data?.message || err.message || "Gagal mengambil data supplier")
            } finally {
                setIsLoading(false)
            }
        }

        fetchSupplier()
    }, [debouncedSearchTerm])

    const handleDelete = async () => {
        if (!deleteModalSupplierId) return;

        setIsDeleting(true)
        try {
            await api.delete(`/supplier/${deleteModalSupplierId}`)
            setSuppliers(suppliers.filter(supplier => supplier.id !== deleteModalSupplierId))
            setDeleteModalSupplierId(null)
        } catch (err: any) {
            alert('Gagal menghapus data supplier: ' + (err.response?.data?.message || err.message))
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
                        placeholder="Search supplier"
                    />
                </div>
                <div className="text-xs">
                    <PrimaryButton onClick={() => router.push('/supplier/create')}>
                        Tambah Supplier
                    </PrimaryButton>
                </div>
            </div>

            <div className="bg-white mt-4 rounded-xl border border-neutral-100 overflow-hidden shadow-sm">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-neutral-500 bg-neutral-50/50 border-b border-neutral-100">
                        <tr>
                            <th className="px-6 py-4 font-medium">Nama Supplier</th>
                            <th className="px-6 py-4 font-medium">Alamat</th>
                            <th className="px-6 py-4 font-medium">Telepon</th>
                            <th className="px-6 py-4 font-medium text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {isLoading ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-neutral-400">
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 rounded-full border-2 border-rose-500 border-t-transparent animate-spin" />
                                        Memuat data...
                                    </div>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-rose-500">{error}</td>
                            </tr>
                        ) : suppliers.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-neutral-400">
                                    <div className="flex flex-col items-center gap-2">
                                        <Search className="w-8 h-8 text-neutral-300" />
                                        <p>Tidak ada data supplier ditemukan</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            suppliers.map((supplier) => (
                                <tr key={supplier.id} className="hover:bg-neutral-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <span className="font-medium text-neutral-700">{supplier.nama}</span>
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600 max-w-xs truncate">
                                        {supplier.alamat}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">
                                            {supplier.telepon}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-3 text-neutral-400">
                                            <button
                                                onClick={() => router.push(`/supplier/${supplier.id}/edit`)}
                                                className="hover:text-emerald-500 transition-colors"
                                            >
                                                <Pencil className="w-5 h-5" />
                                            </button>
                                            <button
                                                onClick={() => setDeleteModalSupplierId(supplier.id)}
                                                className="hover:text-rose-500 transition-colors"
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
                isOpen={!!deleteModalSupplierId}
                title="Hapus Data Supplier"
                message="Apakah Anda yakin ingin menghapus data supplier ini? Tindakan ini akan menghapus data secara permanen."
                onClose={() => setDeleteModalSupplierId(null)}
                onConfirm={handleDelete}
                isLoading={isDeleting}
            />
        </div>
    )
}
