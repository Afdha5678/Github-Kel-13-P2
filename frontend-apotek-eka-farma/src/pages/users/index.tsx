import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { PrimaryButton } from "@/components/buttons/primary"
import { Search, Pencil, Trash } from "@/components/icons/outline"
import { DeleteConfirmation } from "@/components/modal/delete-confirmation"
import { useDebounce } from "@/hooks/useDebounce"
import api from "@/lib/axios"
import Cookies from "js-cookie"

interface User {
    id: string
    nama: string
    email: string
    role: string
}

export default function Users({ setTitle }: { setTitle: (title: string) => void }) {
    const router = useRouter()
    const [users, setUsers] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [deleteModalUserId, setDeleteModalUserId] = useState<string | null>(null)
    const [isDeleting, setIsDeleting] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    useEffect(() => {
        setTitle("Kelola Pengguna")

        // Role guard: redirect if not OWNER
        const userData = Cookies.get('user')
        if (!userData || JSON.parse(userData).role !== 'OWNER') {
            router.push('/')
            return
        }

        const fetchUsers = async () => {
            setIsLoading(true)
            try {
                const response = await api.get(`/users?search=${encodeURIComponent(debouncedSearchTerm)}`)
                setUsers(response.data.data)
            } catch (err: any) {
                setError(err.response?.data?.message || err.message || "Gagal mengambil data pengguna")
            } finally {
                setIsLoading(false)
            }
        }

        fetchUsers()
    }, [debouncedSearchTerm, router, setTitle])

    const handleDelete = async () => {
        if (!deleteModalUserId) return;

        setIsDeleting(true)
        try {
            await api.delete(`/users/${deleteModalUserId}`)
            setUsers(users.filter(user => user.id !== deleteModalUserId))
            setDeleteModalUserId(null)
        } catch (err: any) {
            alert('Gagal menghapus data pengguna: ' + (err.response?.data?.message || err.message))
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className="animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div className="relative w-64 text-neutral-400 focus-within:text-rose-500">
                    <Search className="absolute w-4 h-4 left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-white w-full rounded-lg pl-8 p-2 text-xs focus:outline-rose-300 transition-colors"
                        placeholder="Cari pengguna..."
                    />
                </div>
                <div className="text-xs">
                    <PrimaryButton onClick={() => router.push('/users/create')}>
                        Tambah Pengguna
                    </PrimaryButton>
                </div>
            </div>

            <div className="mt-4 bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-pink-50 text-xs font-medium text-neutral-500 uppercase tracking-wider bg-gray-50/50">
                            <th className="px-6 py-4">No.</th>
                            <th className="px-6 py-4">Nama Lengkap</th>
                            <th className="px-6 py-4">Email</th>
                            <th className="px-6 py-4">Role</th>
                            <th className="px-6 py-4 text-right">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-pink-50/50">
                        {isLoading ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-sm text-neutral-500">
                                    Loading data pengguna...
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-sm text-rose-500">
                                    {error}
                                </td>
                            </tr>
                        ) : users.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-sm text-neutral-500">
                                    Belum ada data pengguna.
                                </td>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                                <tr key={user.id} className="hover:bg-pink-50/30 transition-colors">
                                    <td className="px-6 py-4 text-sm text-neutral-500">{index + 1}</td>
                                    <td className="px-6 py-4 font-medium text-neutral-900">{user.nama}</td>
                                    <td className="px-6 py-4 text-sm text-neutral-600">{user.email}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            user.role === 'OWNER' 
                                                ? 'bg-rose-100 text-rose-800' 
                                                : 'bg-emerald-100 text-emerald-800'
                                        }`}>
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-3 text-neutral-400">
                                            <button
                                                onClick={() => router.push(`/users/${user.id}/edit`)}
                                                className="hover:text-emerald-500 transition-colors"
                                                title="Edit"
                                            >
                                                <Pencil className="w-5 h-5" />
                                            </button>
                                            
                                            {/* Prevent deleting oneself */}
                                            {user.id !== JSON.parse(Cookies.get('user') || '{}').id && (
                                                <button
                                                    onClick={() => setDeleteModalUserId(user.id)}
                                                    className="hover:text-rose-500 transition-colors"
                                                    title="Hapus"
                                                >
                                                    <Trash className="w-5 h-5" />
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <DeleteConfirmation
                isOpen={!!deleteModalUserId}
                title="Hapus Pengguna"
                message="Apakah Anda yakin ingin menghapus data pengguna ini? Aksi ini permanen."
                onClose={() => setDeleteModalUserId(null)}
                onConfirm={handleDelete}
                isLoading={isDeleting}
            />
        </div>
    )
}
