import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import api from "@/lib/axios"

interface TransaksiDetail {
    id: string
    quantityOrdered: number
    quantityReceived: number
    obat: {
        id: string
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

interface ReceiveFormState {
    detailId: string
    tanggalKedaluwarsa: string
}

export async function getServerSideProps(context: any) { return { props: {} } }

export default function ReceivePembelian({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Terima Barang (Receive)")
    }, [setTitle])
    const router = useRouter()
    const { id } = router.query

    const [transaksi, setTransaksi] = useState<TransaksiPembelian | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [forms, setForms] = useState<Record<string, ReceiveFormState>>({})

    const [receivedBatches, setReceivedBatches] = useState<any[] | null>(null)

    useEffect(() => {
        if (!id) return;

        const fetchTransaksi = async () => {
            try {
                const response = await api.get(`/pembelian/${id}`)
                const data = response.data.data

                if (data.status === 'COMPLETED') {
                    alert('Transaksi ini sudah selesai (COMPLETED).')
                    router.push('/pembelian')
                    return
                }

                setTransaksi(data)

                // Initialize form states
                const initForms: Record<string, ReceiveFormState> = {}
                data.details.forEach((detail: TransaksiDetail) => {
                    initForms[detail.id] = {
                        detailId: detail.id,
                        tanggalKedaluwarsa: ""
                    }
                })
                setForms(initForms)

            } catch (error: any) {
                alert('Gagal mengambil detail transaksi: ' + (error.response?.data?.message || error.message))
                router.push('/pembelian')
            } finally {
                setIsLoading(false)
            }
        }

        fetchTransaksi()
    }, [id])

    const handleFormChange = (detailId: string, field: keyof ReceiveFormState, value: any) => {
        setForms(prev => ({
            ...prev,
            [detailId]: {
                ...prev[detailId],
                [field]: value
            }
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const payload = {
                details: Object.values(forms).map(form => ({
                    detailId: form.detailId,
                    quantityReceived: transaksi!.details.find(d => d.id === form.detailId)!.quantityOrdered,
                    tanggalKedaluwarsa: new Date(form.tanggalKedaluwarsa).toISOString()
                }))
            }

            const response = await api.post(`/pembelian/${id}/receive`, payload)
            setReceivedBatches(response.data.data.batches)
        } catch (error: any) {
            alert('Gagal menerima barang: ' + (error.response?.data?.message || error.message))
        } finally {
            setIsSubmitting(false)
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'long', year: 'numeric',
        })
    }

    const handlePrintLabel = (batch: any) => {
        // Implementasi sederhana untuk memprint label
        const printWindow = window.open('', '', 'width=600,height=400');
        if (!printWindow) return;

        printWindow.document.write(`
            <html>
                <head>
                    <title>Print Label - Batch ${batch.id}</title>
                    <style>
                        body { font-family: monospace; padding: 20px; text-align: center; }
                        .label { border: 2px solid #000; padding: 20px; display: inline-block; }
                        .title { font-size: 18px; font-weight: bold; margin-bottom: 10px; }
                        .barcode { font-size: 24px; letter-spacing: 2px; margin: 15px 0; }
                        .info { font-size: 14px; margin: 5px 0; text-align: left; }
                    </style>
                </head>
                <body>
                    <div class="label">
                        <div class="title">APOTEK EKA FARMA</div>
                        <div class="barcode">*${batch.id.split('-')[0].toUpperCase()}*</div>
                        <div class="info"><strong>Batch ID:</strong> ${batch.id.split('-')[0].toUpperCase()}</div>
                        <div class="info"><strong>Item:</strong> ${batch.obat?.nama || 'Unknown'}</div>
                        <div class="info"><strong>Qty:</strong> ${batch.jumlah} Pcs</div>
                        <div class="info"><strong>Exp:</strong> ${new Date(batch.tanggalKedaluwarsa).toLocaleDateString('id-ID')}</div>
                    </div>
                    <script>
                        window.onload = function() { window.print(); window.close(); }
                    </script>
                </body>
            </html>
        `);
        printWindow.document.close();
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[50vh]">
                <div className="flex items-center gap-2 text-neutral-500">
                    <div className="w-5 h-5 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                    Memuat data pesanan...
                </div>
            </div>
        )
    }

    if (!transaksi) return null;

    if (receivedBatches) {
        return (
            <div className="max-w-5xl mx-auto py-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-emerald-600 flex items-center gap-2">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Penerimaan Berhasil
                    </h2>
                    <p className="text-sm text-neutral-500 mt-1">Barang telah ditambahkan ke stok. Silakan cetak label Batch untuk masing-masing item.</p>
                </div>

                <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-6">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-neutral-500 bg-neutral-50 border-b border-neutral-100">
                            <tr>
                                <th className="px-6 py-4 font-medium">Batch ID</th>
                                <th className="px-6 py-4 font-medium">Nama Obat</th>
                                <th className="px-6 py-4 font-medium">Jumlah Masuk</th>
                                <th className="px-6 py-4 font-medium">Kedaluwarsa</th>
                                <th className="px-6 py-4 font-medium text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {receivedBatches.map((batch) => (
                                <tr key={batch.id} className="hover:bg-neutral-50/30">
                                    <td className="px-6 py-4 font-mono text-neutral-700 font-medium">
                                        {batch.id.split('-')[0].toUpperCase()}
                                    </td>
                                    <td className="px-6 py-4 text-neutral-900 font-medium">
                                        {batch.obat?.nama}
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">
                                        {batch.jumlah} Pcs
                                    </td>
                                    <td className="px-6 py-4 text-neutral-600">
                                        {formatDate(batch.tanggalKedaluwarsa)}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handlePrintLabel(batch)}
                                            className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-neutral-800 transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2-2v4h10z"></path></svg>
                                            Print Label
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={() => router.push('/pembelian')}
                        className="rounded-lg bg-white border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 transition-colors"
                    >
                        Selesai & Kembali
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="max-w-5xl mx-auto py-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-neutral-900">Terima Barang (Receive PO)</h2>
                    <p className="text-sm text-neutral-500 mt-1">ID: <span className="font-mono text-neutral-700">{transaksi.id}</span></p>
                </div>
                <button
                    onClick={() => router.push('/pembelian')}
                    className="text-sm font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                    &larr; Kembali
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden mb-6">
                    <div className="px-6 py-5 border-b border-neutral-100 bg-neutral-50/50 flex justify-between items-center">
                        <div>
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Supplier</p>
                            <p className="text-neutral-900 font-medium">{transaksi.supplier?.nama}</p>
                        </div>
                        <div>
                            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">Tanggal PO</p>
                            <p className="text-neutral-900 font-medium">{formatDate(transaksi.tanggal)}</p>
                        </div>
                    </div>

                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-neutral-500 bg-white border-b border-neutral-100">
                            <tr>
                                <th className="px-6 py-4 font-medium">Nama Obat</th>
                                <th className="px-6 py-4 font-medium text-center">Jumlah Dipesan</th>
                                <th className="px-6 py-4 font-medium w-56">Tanggal Kedaluwarsa</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-100">
                            {transaksi.details.map((detail) => (
                                <tr key={detail.id} className="hover:bg-neutral-50/30">
                                    <td className="px-6 py-4 font-medium text-neutral-800">{detail.obat.nama}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
                                            {detail.quantityOrdered} Pcs
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="date"
                                            value={forms[detail.id]?.tanggalKedaluwarsa ?? ""}
                                            onChange={(e) => handleFormChange(detail.id, 'tanggalKedaluwarsa', e.target.value)}
                                            className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 sm:text-sm p-2 border"
                                            required
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => router.push('/pembelian')}
                        className="rounded-lg bg-white border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm hover:bg-neutral-50 transition-colors"
                    >
                        Batal
                    </button>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="rounded-lg bg-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors disabled:opacity-50"
                    >
                        {isSubmitting ? 'Menyimpan...' : 'Konfirmasi Penerimaan Barang'}
                    </button>
                </div>
            </form>
        </div>
    )
}
