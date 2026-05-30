import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import api, { API_BASE_URL } from "@/lib/axios"

interface Stok {
    id: string
    jumlah: number
    tanggalKedaluwarsa: string
    createdAt: string
}

interface Obat {
    id: string
    nama: string
    hargaJual: number
    totalStok: number
    image?: string | null
    stok: Stok[]
    satuan?: string | null
    lokasiRak?: string | null
}

export default function DetailObat() {
    const router = useRouter()
    const { id } = router.query

    const [obat, setObat] = useState<Obat | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!id) return;

        const fetchObat = async () => {
            try {
                const response = await api.get(`/obat/${id}`)
                setObat(response.data.data)
            } catch (error: any) {
                alert('Gagal mengambil detail obat: ' + (error.response?.data?.message || error.message))
                router.push('/obat')
            } finally {
                setIsLoading(false)
            }
        }

        fetchObat()
    }, [id])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric'
        })
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="flex items-center gap-2 text-neutral-500">
                    <div className="w-5 h-5 rounded-full border-2 border-rose-500 border-t-transparent animate-spin" />
                    Memuat detail obat...
                </div>
            </div>
        )
    }

    if (!obat) return null;

    const imageUrl = obat.image ? `${API_BASE_URL}${obat.image}` : `https://ui-avatars.com/api/?name=${encodeURIComponent(obat.nama)}&background=random`;

    return (
        <div className="max-w-4xl mx-auto py-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-neutral-900">Detail Obat</h2>
                    <p className="text-sm text-neutral-500 mt-1">ID: <span className="font-mono">{obat.id}</span></p>
                </div>
                <button
                    onClick={() => router.push('/obat')}
                    className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                    &larr; Kembali
                </button>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-8">
                <div className="p-6 md:flex items-start gap-8">
                    <div className="shrink-0 mb-6 md:mb-0">
                        <img 
                            src={imageUrl} 
                            alt={obat.nama} 
                            className="w-32 h-32 rounded-2xl object-cover border border-neutral-200 shadow-sm"
                        />
                    </div>
                    <div className="flex-1 space-y-4">
                        <div>
                            <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">Nama Obat</p>
                            <h3 className="text-2xl font-bold text-neutral-900">{obat.nama}</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">Harga Jual</p>
                                <p className="text-xl font-medium text-neutral-900">{formatCurrency(obat.hargaJual)}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">Total Stok Aktif</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className={`w-3 h-3 rounded-full ${obat.totalStok > 0 ? (obat.totalStok < 10 ? 'bg-amber-500' : 'bg-emerald-500') : 'bg-rose-500'}`}></div>
                                    <span className={`text-xl font-bold ${obat.totalStok < 10 ? 'text-amber-600' : 'text-neutral-900'}`}>{obat.totalStok}</span>
                                    <span className="text-sm text-neutral-500">{obat.satuan || "Pcs"}</span>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">Satuan</p>
                                <p className="text-lg font-medium text-neutral-900">{obat.satuan || "-"}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-1">Lokasi Penyimpanan (Rak)</p>
                                <p className="text-lg font-medium text-neutral-900">
                                    {obat.lokasiRak ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-sm font-medium bg-rose-50 text-rose-600 border border-rose-100">
                                            📍 {obat.lokasiRak}
                                        </span>
                                    ) : (
                                        "-"
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h3 className="text-lg font-bold text-neutral-900 mb-4">Riwayat Batch Stok</h3>
            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-neutral-500 bg-neutral-50/50 border-b border-neutral-100">
                        <tr>
                            <th className="px-6 py-4 font-medium">Batch ID</th>
                            <th className="px-6 py-4 font-medium">Tanggal Masuk</th>
                            <th className="px-6 py-4 font-medium">Sisa Jumlah</th>
                            <th className="px-6 py-4 font-medium">Tanggal Kedaluwarsa</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {obat.stok.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-neutral-400">
                                    Belum ada batch stok untuk obat ini.
                                </td>
                            </tr>
                        ) : (
                            obat.stok.map((s) => {
                                const isExpired = new Date(s.tanggalKedaluwarsa) <= new Date();
                                const isExpiringSoon = new Date(s.tanggalKedaluwarsa) <= new Date(new Date().setDate(new Date().getDate() + 30)) && !isExpired;
                                
                                return (
                                    <tr key={s.id} className="hover:bg-neutral-50/50 transition-colors group">
                                        <td className="px-6 py-4">
                                            <span className="font-medium text-neutral-700 text-xs font-mono">{s.id.split('-')[0].toUpperCase()}</span>
                                        </td>
                                        <td className="px-6 py-4 text-neutral-600">
                                            {formatDate(s.createdAt)}
                                        </td>
                                        <td className="px-6 py-4 text-neutral-900 font-medium">
                                            {s.jumlah}
                                        </td>
                                        <td className={`px-6 py-4 font-medium ${isExpired ? 'text-rose-600' : isExpiringSoon ? 'text-amber-600' : 'text-neutral-600'}`}>
                                            {formatDate(s.tanggalKedaluwarsa)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {s.jumlah === 0 ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600">
                                                    Habis
                                                </span>
                                            ) : isExpired ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-700">
                                                    Kedaluwarsa
                                                </span>
                                            ) : isExpiringSoon ? (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                                                    Segera Kedaluwarsa
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                                    Aman
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                )
                            })
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
