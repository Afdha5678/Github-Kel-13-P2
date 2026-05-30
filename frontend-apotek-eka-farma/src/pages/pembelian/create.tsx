import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { Trash } from "@/components/icons/outline"
import api from "@/lib/axios"
import { Combobox } from "@/components/Combobox"

interface Obat {
    id: string
    nama: string
}

interface Supplier {
    id: string
    nama: string
}

interface CartItem {
    obatId: string
    nama: string
    quantityOrdered: number
}

export default function CreatePembelian() {
    const router = useRouter()
    const [obats, setObats] = useState<Obat[]>([])
    const [suppliers, setSuppliers] = useState<Supplier[]>([])
    
    const [selectedSupplierId, setSelectedSupplierId] = useState("")
    const [cart, setCart] = useState<CartItem[]>([])
    const [selectedObatId, setSelectedObatId] = useState("")
    const [quantityInput, setQuantityInput] = useState(1)
    
    const [isLoading, setIsLoading] = useState(false)
    const [isFetchingData, setIsFetchingData] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [obatRes, supplierRes] = await Promise.all([
                    api.get('/obat'),
                    api.get('/supplier')
                ])
                setObats(obatRes.data.data)
                setSuppliers(supplierRes.data.data)
            } catch (error) {
                console.error("Gagal mengambil data awal", error)
            } finally {
                setIsFetchingData(false)
            }
        }
        fetchData()
    }, [])

    const handleAddToCart = () => {
        if (!selectedObatId) return alert("Pilih obat terlebih dahulu")
        if (quantityInput <= 0) return alert("Jumlah pesanan harus lebih dari 0")

        const obat = obats.find(o => o.id === selectedObatId)
        if (!obat) return

        const existingItemIndex = cart.findIndex(item => item.obatId === selectedObatId)
        if (existingItemIndex >= 0) {
            const newCart = [...cart]
            newCart[existingItemIndex].quantityOrdered += quantityInput
            setCart(newCart)
        } else {
            setCart([...cart, {
                obatId: obat.id,
                nama: obat.nama,
                quantityOrdered: quantityInput
            }])
        }

        setSelectedObatId("")
        setQuantityInput(1)
    }

    const handleRemoveFromCart = (obatId: string) => {
        setCart(cart.filter(item => item.obatId !== obatId))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!selectedSupplierId) return alert("Pilih supplier terlebih dahulu!")
        if (cart.length === 0) return alert("Daftar pesanan masih kosong!")

        setIsLoading(true)
        try {
            const payload = {
                supplierId: selectedSupplierId,
                details: cart.map(item => ({
                    obatId: item.obatId,
                    quantityOrdered: item.quantityOrdered
                }))
            }

            await api.post('/pembelian', payload)
            router.push('/pembelian')
        } catch (error: any) {
            alert('Gagal membuat pesanan: ' + (error.response?.data?.message || error.message))
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-7xl mx-auto py-6">
            <form onSubmit={handleSubmit}>
                <div className="md:grid md:grid-cols-12 md:gap-8">
                    {/* Left Column: Form & Cart */}
                    <div className="md:col-span-8 space-y-6">
                        {/* Input Section */}
                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Buat Pesanan (PO)</h3>
                            
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-neutral-700 mb-1">Pilih Supplier</label>
                                <Combobox
                                    value={selectedSupplierId}
                                    onChange={setSelectedSupplierId}
                                    options={suppliers.map(sup => ({ value: sup.id, label: sup.nama }))}
                                    placeholder="Pilih Supplier..."
                                    disabled={isFetchingData}
                                    required={true}
                                />
                            </div>

                            <div className="flex items-end gap-4 border-t border-neutral-100 pt-6 mt-6">
                                <div className="flex-1">
                                    <label className="block text-sm font-medium text-neutral-700 mb-1">Obat yang Dipesan</label>
                                    <Combobox
                                        value={selectedObatId}
                                        onChange={setSelectedObatId}
                                        options={obats.map(obat => ({ value: obat.id, label: obat.nama }))}
                                        placeholder="Pilih Obat..."
                                        disabled={isFetchingData}
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
                                        <th className="px-6 py-4 font-medium text-center">Jumlah Dipesan</th>
                                        <th className="px-4 py-4"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-100">
                                    {cart.length === 0 ? (
                                        <tr>
                                            <td colSpan={3} className="px-6 py-12 text-center text-neutral-400">
                                                Daftar pesanan masih kosong.
                                            </td>
                                        </tr>
                                    ) : (
                                        cart.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-neutral-50/50">
                                                <td className="px-6 py-4 font-medium text-neutral-800">{item.nama}</td>
                                                <td className="px-6 py-4 text-center text-neutral-600">{item.quantityOrdered}</td>
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

                    {/* Right Column: Actions */}
                    <div className="md:col-span-4 mt-6 md:mt-0">
                        <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm sticky top-6">
                            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Konfirmasi PO</h3>
                            
                            <div className="space-y-3 pb-6 border-b border-neutral-100 mb-6">
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-500">Supplier Terpilih</span>
                                    <span className="font-medium text-neutral-900 text-right">
                                        {selectedSupplierId ? suppliers.find(s => s.id === selectedSupplierId)?.nama : '-'}
                                    </span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-neutral-500">Total Item</span>
                                    <span className="font-medium text-neutral-900">{cart.length} Jenis</span>
                                </div>
                            </div>

                            <div className="space-y-3 mt-2">
                                <button
                                    type="submit"
                                    disabled={isLoading || cart.length === 0 || !selectedSupplierId}
                                    className="w-full rounded-lg bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Menyimpan...' : 'Buat Pesanan'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => router.push('/pembelian')}
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
