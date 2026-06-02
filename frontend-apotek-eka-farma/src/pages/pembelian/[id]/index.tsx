import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import api from "@/lib/axios"

interface TransaksiDetail {
    id: string
    quantityOrdered: number
    quantityReceived: number
    obat: {
        nama: string
    }
}

interface TransaksiPembelian {
    id: string
    tanggal: string
    status: 'PENDING' | 'COMPLETED'
    supplier: { nama: string }
    details: TransaksiDetail[]
}

export default function DetailPembelian({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Detail Transaksi Pembelian")
    }, [setTitle])
    const router = useRouter()
    const { id } = router.query

    const [transaksi, setTransaksi] = useState<TransaksiPembelian | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!id) return;

        const fetchTransaksi = async () => {
            try {
                const response = await api.get(`/pembelian/${id}`)
                setTransaksi(response.data.data)
            } catch (error: any) {
                alert('Gagal mengambil detail transaksi: ' + (error.response?.data?.message || error.message))
                router.push('/pembelian')
            } finally {
                setIsLoading(false)
            }
        }

        fetchTransaksi()
    }, [id])

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="flex items-center gap-2 text-neutral-500">
                    <div className="w-5 h-5 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                    Memuat detail pesanan...
                </div>
            </div>
        )
    }

    if (!transaksi) return null;

    return (
        <div className="max-w-4xl mx-auto py-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-neutral-900">Detail Pesanan (PO)</h2>
                    <p className="text-sm text-neutral-500 mt-1">ID: <span className="font-mono">{transaksi.id}</span></p>
                </div>
                <button
                    onClick={() => router.push('/pembelian')}
                    className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                    &larr; Kembali
                </button>
            </div>

            <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-neutral-100 bg-neutral-50/50 flex justify-between items-center">
                    <div>
                        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Tanggal Pemesanan</p>
                        <p className="text-neutral-900 font-medium">{formatDate(transaksi.tanggal)}</p>
                    </div>
                    <div>
                        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Supplier</p>
                        <p className="text-neutral-900 font-medium">{transaksi.supplier?.nama}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Status</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            transaksi.status === 'COMPLETED' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                            {transaksi.status}
                        </span>
                    </div>
                </div>

                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-neutral-500 bg-white border-b border-neutral-100">
                        <tr>
                            <th className="px-6 py-4 font-medium">Item Obat</th>
                            <th className="px-6 py-4 font-medium text-center">Dipesan</th>
                            <th className="px-6 py-4 font-medium text-center">Diterima</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                        {transaksi.details.map((detail) => (
                            <tr key={detail.id} className="hover:bg-neutral-50/30">
                                <td className="px-6 py-4 font-medium text-neutral-800">{detail.obat.nama}</td>
                                <td className="px-6 py-4 text-center text-neutral-600">{detail.quantityOrdered}</td>
                                <td className="px-6 py-4 text-center font-medium">
                                    {transaksi.status === 'PENDING' ? (
                                        <span className="text-neutral-400 italic">Menunggu...</span>
                                    ) : (
                                        <span className={detail.quantityReceived < detail.quantityOrdered ? "text-amber-600" : "text-emerald-600"}>
                                            {detail.quantityReceived}
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
