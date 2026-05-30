import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Trash } from "@/components/icons/outline"
import api from "@/lib/axios"
import { Combobox } from "@/components/Combobox"

interface Obat {
    id: string
    nama: string
    hargaJual: number
    stok: { jumlah: number }[]
    satuan?: string | null
    lokasiRak?: string | null
}

interface CartItem {
    obatId: string
    nama: string
    harga: number
    quantity: number
    stokTersedia: number
    satuan: string
    lokasiRak: string
}

export default function CreatePenjualan({ setTitle }: { setTitle: (title: string) => void }) {
    useEffect(() => {
        setTitle("Tambah Transaksi Penjualan")
    }, [setTitle])

    const router = useRouter()
    const [obats, setObats] = useState<Obat[]>([])
    const [cart, setCart] = useState<CartItem[]>([])
    const [selectedObatId, setSelectedObatId] = useState("")
    const [quantityInput, setQuantityInput] = useState(1)

    const [isLoading, setIsLoading] = useState(false)
    const [isFetchingObat, setIsFetchingObat] = useState(true)

    // Fetch daftar obat untuk dropdown
    useEffect(() => {
        const fetchObats = async () => {
            try {
                const response = await api.get('/obat')
                setObats(response.data.data)
            } catch (error) {
                console.error("Gagal mengambil data obat", error)
            } finally {
                setIsFetchingObat(false)
            }
        }
        fetchObats()
    }, [])

    // Hitung total stok tersedia untuk suatu obat
    const getTotalStok = (obat: Obat) => {
        return obat.stok.reduce((sum, s) => sum + s.jumlah, 0)
    }

    const handleAddToCart = () => {
        if (!selectedObatId) return alert("Pilih obat terlebih dahulu")
        if (quantityInput <= 0) return alert("Jumlah harus lebih dari 0")

        const obat = obats.find(o => o.id === selectedObatId)
        if (!obat) return

        const stokTersedia = getTotalStok(obat)
        if (stokTersedia < quantityInput) {
            return alert(`Stok tidak mencukupi! Sisa stok: ${stokTersedia}`)
        }

        // Cek apakah sudah ada di cart
        const existingItemIndex = cart.findIndex(item => item.obatId === selectedObatId)
        if (existingItemIndex >= 0) {
            const newCart = [...cart]
            const newQuantity = newCart[existingItemIndex].quantity + quantityInput

            if (newQuantity > stokTersedia) {
                return alert(`Total jumlah melebihi stok yang tersedia (${stokTersedia})`)
            }

            newCart[existingItemIndex].quantity = newQuantity
            setCart(newCart)
        } else {
            setCart([...cart, {
                obatId: obat.id,
                nama: obat.nama,
                harga: obat.hargaJual,
                quantity: quantityInput,
                stokTersedia: stokTersedia,
                satuan: obat.satuan || 'Pcs',
                lokasiRak: obat.lokasiRak || '-'
            }])
        }

        // Reset input
        setSelectedObatId("")
        setQuantityInput(1)
    }

    const handleRemoveFromCart = (obatId: string) => {
        setCart(cart.filter(item => item.obatId !== obatId))
    }

    const grandTotal = cart.reduce((sum, item) => sum + (item.harga * item.quantity), 0)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (cart.length === 0) return alert("Keranjang masih kosong!")

        setIsLoading(true)
        try {
            const payload = {
                total: grandTotal,
                details: cart.map(item => ({
                    obatId: item.obatId,
                    quantity: item.quantity,
                    harga: item.harga
                }))
            }

            await api.post('/penjualan', payload)
            router.push('/penjualan')
        } catch (error: any) {
            alert('Gagal membuat transaksi: ' + (error.response?.data?.message || error.message))
        } finally {
            setIsLoading(false)
        }
    }

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount)
    }

    return (
        <div className="max-w-7xl mx-auto py-6">
            <form onSubmit={handleSubmit}>
                <div className="md:grid md:grid-cols-12 md:gap-8">
                    {/* Left Column: Form & Cart */}
                    <div className="md:col-span-8 space-y-6">
                        {/* Input Section */}
                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Pilih Item</h3>
                            <div className="flex items-end gap-4">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Obat</label>
                                    <Combobox
                                        value={selectedObatId}
                                        onChange={setSelectedObatId}
                                        options={obats.map(obat => {
                                            const stok = getTotalStok(obat);
                                            const lokasi = obat.lokasiRak ? ` [Rak: ${obat.lokasiRak}]` : '';
                                            const satuanObat = obat.satuan || 'Pcs';
                                            return {
                                                value: obat.id,
                                                label: `${obat.nama}${lokasi} - ${formatCurrency(obat.hargaJual)} ${stok === 0 ? '(Habis)' : `(Stok: ${stok} ${satuanObat})`}`,
                                                disabled: stok === 0
                                            };
                                        })}
                                        placeholder="Pilih Obat..."
                                        disabled={isFetchingObat}
                                    />
                                </div>
                                <div className="w-24">
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Jumlah</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantityInput}
                                        onChange={(e) => setQuantityInput(parseInt(e.target.value) || 0)}
                                        className="block w-full rounded-lg border-neutral-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm p-2.5 border"
                                    />
                                </div>
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="rounded-lg bg-neutral-900 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800 transition-colors h-[42px]"
                                >
                                    Tambah
                                </button>
                            </div>
                        </div>

                        {/* Cart Table */}
                        <div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
                            <table className="w-full text-sm text-left">
                                <thead className="text-xs text-neutral-500 bg-neutral-50/50 border-b border-neutral-100">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Nama Obat</th>
                                        <th className="px-6 py-4 font-medium">Harga Satuan</th>
                                        <th className="px-6 py-4 font-medium text-center">Jumlah</th>
                                        <th className="px-6 py-4 font-medium text-right">Subtotal</th>
                                        <th className="px-4 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-100">
                                    {cart.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-12 text-center text-neutral-400">
                                                Keranjang masih kosong. Tambahkan item di atas.
                                            </td>
                                        </tr>
                                    ) : (
                                        cart.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-neutral-50/50">
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-neutral-800">{item.nama}</div>
                                                    {item.lokasiRak && item.lokasiRak !== '-' && (
                                                        <span className="inline-flex items-center px-1.5 py-0.5 mt-1 rounded text-[10px] font-medium bg-rose-50 text-rose-600 border border-rose-100">
                                                            📍 {item.lokasiRak}
                                                        </span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-neutral-600">{formatCurrency(item.harga)}</td>
                                                <td className="px-6 py-4 text-center text-neutral-600 font-medium">
                                                    {item.quantity} {item.satuan}
                                                </td>
                                                <td className="px-6 py-4 text-right font-medium text-neutral-800">
                                                    {formatCurrency(item.harga * item.quantity)}
                                                </td>
                                                <td className="px-4 py-4 text-right">
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveFromCart(item.obatId)}
                                                        className="text-neutral-400 hover:text-rose-500 transition-colors p-1"
                                                    >
                                                        <Trash className="w-4 h-4" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Right Column: Summary & Actions */}
                    <div className="md:col-span-4 mt-6 md:mt-0">
                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm sticky top-6">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Ringkasan</h3>

                            <div className="space-y-3 pb-6 border-b border-neutral-100">
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-500">Total Item</span>
                                    <span className="font-medium text-neutral-900">{cart.length} Jenis</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-500">Total Kuantitas</span>
                                    <span className="font-medium text-neutral-900">{cart.reduce((sum, item) => sum + item.quantity, 0)} Pcs</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center py-6">
                                <span className="text-base font-medium text-neutral-900">Total Pembayaran</span>
                                <span className="text-2xl font-bold text-rose-600">{formatCurrency(grandTotal)}</span>
                            </div>

                            <div className="space-y-3 mt-2">
                                <button
                                    type="submit"
                                    disabled={isLoading || cart.length === 0}
                                    className="w-full rounded-lg bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Memproses...' : 'Selesaikan Transaksi'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => router.push('/penjualan')}
                                    className="w-full rounded-lg bg-white border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                                >
                                    Batal
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
