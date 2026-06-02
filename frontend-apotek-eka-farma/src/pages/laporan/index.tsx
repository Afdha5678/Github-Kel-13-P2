import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import dynamic from 'next/dynamic'
import api from "@/lib/axios"
import { Combobox } from "@/components/Combobox"

const ReactECharts = dynamic(() => import('echarts-for-react'), { ssr: false })

interface Aktivitas {
    id: string
    tanggal: string
    total: number
    details: any[]
}

interface DashboardData {
    totalJenisObat: number
    stokMenipis: number
    kedaluwarsa: number
    aktivitasTerbaru: Aktivitas[]
}

interface ChartData {
    date: string
    total: number
}

type ReportType = 'TOTAL_OBAT' | 'STOK_MENIPIS' | 'KEDALUWARSA' | 'CHART_PENDAPATAN' | 'TRANSAKSI_TERBARU' | 'TOP_SELLING' | 'PURCHASES_SUPPLIER' | null;

export default function Laporan({ setTitle }: { setTitle: (title: string) => void }) {
    const router = useRouter()
    
    // State for chosen report type
    const [selectedReport, setSelectedReport] = useState<ReportType>(null)

    // Data states
    const [data, setData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [chartData, setChartData] = useState<ChartData[]>([])
    const [chartFilter, setChartFilter] = useState<'week' | 'month' | 'year'>('week')
    const [isChartLoading, setIsChartLoading] = useState(false)
    const [topSellingData, setTopSellingData] = useState<{nama: string, totalSold: number}[]>([])
    const [supplierData, setSupplierData] = useState<{nama: string, totalOrders: number}[]>([])

    useEffect(() => {
        setTitle("Laporan Apotek")
    }, [setTitle])

    // Fetch metric & activity data when entering specific reports
    useEffect(() => {
        if (['TOTAL_OBAT', 'STOK_MENIPIS', 'KEDALUWARSA', 'TRANSAKSI_TERBARU'].includes(selectedReport as string)) {
            const fetchDashboard = async () => {
                setIsLoading(true)
                try {
                    const response = await api.get('/dashboard')
                    setData(response.data.data)
                } catch (error) {
                    console.error("Gagal mengambil data laporan:", error)
                } finally {
                    setIsLoading(false)
                }
            }
            fetchDashboard()
        }
    }, [selectedReport])

    // Fetch chart data when entering chart report
    useEffect(() => {
        if (selectedReport === 'CHART_PENDAPATAN') {
            const fetchChart = async () => {
                setIsChartLoading(true)
                try {
                    const response = await api.get(`/dashboard/chart?filter=${chartFilter}`)
                    setChartData(response.data.data)
                } catch (error) {
                    console.error("Gagal mengambil data grafik laporan:", error)
                } finally {
                    setIsChartLoading(false)
                }
            }
            fetchChart()
        }
        
        if (selectedReport === 'TOP_SELLING') {
            const fetchTopSelling = async () => {
                setIsChartLoading(true)
                try {
                    const response = await api.get(`/dashboard/top-selling`)
                    setTopSellingData(response.data.data)
                } catch (error) {
                    console.error("Gagal mengambil data top selling:", error)
                } finally {
                    setIsChartLoading(false)
                }
            }
            fetchTopSelling()
        }
        
        if (selectedReport === 'PURCHASES_SUPPLIER') {
            const fetchSupplier = async () => {
                setIsChartLoading(true)
                try {
                    const response = await api.get(`/dashboard/purchases-supplier`)
                    setSupplierData(response.data.data)
                } catch (error) {
                    console.error("Gagal mengambil data supplier:", error)
                } finally {
                    setIsChartLoading(false)
                }
            }
            fetchSupplier()
        }
    }, [selectedReport, chartFilter])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
    }

    // ==================
    // RENDER MENU SELECTION
    // ==================
    if (!selectedReport) {
        return (
            <div className="animate-in fade-in duration-500 max-w-5xl mx-auto py-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800">Menu Laporan</h2>
                    <p className="text-gray-500 mt-2">Pilih jenis laporan yang ingin Anda lihat berdasarkan data terkini sistem.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Ringkasan Pendapatan Penjualan */}
                    <button 
                        onClick={() => setSelectedReport('CHART_PENDAPATAN')}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 hover:shadow-md transition-all text-left flex flex-col group relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg z-10">Ringkasan Pendapatan</h3>
                        <p className="text-sm text-gray-500 mt-1 z-10">Grafik penjualan 7 hari, 30 hari, hingga 1 tahun terakhir.</p>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-50 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                    </button>

                    {/* Transaksi Penjualan Terbaru */}
                    <button 
                        onClick={() => setSelectedReport('TRANSAKSI_TERBARU')}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 hover:shadow-md transition-all text-left flex flex-col group relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg z-10">Transaksi Terbaru</h3>
                        <p className="text-sm text-gray-500 mt-1 z-10">Daftar lengkap transaksi penjualan terkini beserta pendapatannya.</p>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-blue-50 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                    </button>

                    {/* Total Obat */}
                    <button 
                        onClick={() => setSelectedReport('TOTAL_OBAT')}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 hover:shadow-md transition-all text-left flex flex-col group relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg z-10">Total Jenis Obat</h3>
                        <p className="text-sm text-gray-500 mt-1 z-10">Menampilkan metrik jumlah keseluruhan jenis obat dalam inventaris.</p>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-purple-50 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                    </button>

                    {/* Stok Menipis */}
                    <button 
                        onClick={() => setSelectedReport('STOK_MENIPIS')}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 hover:shadow-md transition-all text-left flex flex-col group relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg z-10">Laporan Stok Menipis</h3>
                        <p className="text-sm text-gray-500 mt-1 z-10">Metrik jumlah obat yang memiliki sisa stok kurang dari 10.</p>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-rose-50 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                    </button>

                    {/* Kedaluwarsa */}
                    <button 
                        onClick={() => setSelectedReport('KEDALUWARSA')}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 hover:shadow-md transition-all text-left flex flex-col group relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg z-10">Obat Kedaluwarsa</h3>
                        <p className="text-sm text-gray-500 mt-1 z-10">Metrik jumlah obat yang akan kedaluwarsa dalam 30 hari ke depan.</p>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-50 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                    </button>

                    {/* Top Selling */}
                    <button 
                        onClick={() => setSelectedReport('TOP_SELLING')}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-emerald-100 hover:shadow-md transition-all text-left flex flex-col group relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg z-10">Obat Terlaris</h3>
                        <p className="text-sm text-gray-500 mt-1 z-10">Grafik 15 obat paling banyak terjual.</p>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-50 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                    </button>

                    {/* Purchases Supplier */}
                    <button 
                        onClick={() => setSelectedReport('PURCHASES_SUPPLIER')}
                        className="bg-white p-6 rounded-3xl shadow-sm border border-indigo-100 hover:shadow-md transition-all text-left flex flex-col group relative overflow-hidden"
                    >
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform z-10">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        </div>
                        <h3 className="font-bold text-gray-800 text-lg z-10">Pembelian ke Supplier</h3>
                        <p className="text-sm text-gray-500 mt-1 z-10">Grafik jumlah transaksi pembelian per supplier.</p>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-indigo-50 rounded-full opacity-0 group-hover:opacity-50 transition-all"></div>
                    </button>
                </div>
            </div>
        )
    }

    // ==================
    // RENDER SELECTED REPORT
    // ==================
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* Header / Back Button */}
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                <button 
                    onClick={() => setSelectedReport(null)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-rose-500 transition-colors bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100"
                >
                    &larr; Kembali ke Pilihan Laporan
                </button>
            </div>

            {/* Displaying the exact component logic from dashboard */}
            
            {/* 1. CHART_PENDAPATAN */}
            {selectedReport === 'CHART_PENDAPATAN' && (
                <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden max-w-5xl mx-auto mt-4">
                    <div className="p-6 border-b border-pink-50 flex justify-between items-center bg-white">
                        <h4 className="text-lg font-semibold text-gray-800">Ringkasan Pendapatan Penjualan</h4>
                        <div className="w-48">
                            <Combobox
                                value={chartFilter}
                                onChange={(val) => setChartFilter(val as any)}
                                options={[
                                    { value: 'week', label: '7 Hari Terakhir' },
                                    { value: 'month', label: '30 Hari Terakhir' },
                                    { value: 'year', label: '1 Tahun Terakhir' }
                                ]}
                                className="text-sm"
                            />
                        </div>
                    </div>
                    <div className="p-6 h-[400px]">
                        {isChartLoading ? (
                            <div className="h-full flex items-center justify-center text-gray-400">Memuat grafik...</div>
                        ) : (
                            <ReactECharts 
                                option={{
                                    tooltip: {
                                        trigger: 'axis',
                                        formatter: function (params: any) {
                                            let val = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(params[0].value);
                                            return `${params[0].name}<br/><b>${val}</b>`;
                                        }
                                    },
                                    grid: {
                                        left: '3%',
                                        right: '4%',
                                        bottom: '3%',
                                        containLabel: true
                                    },
                                    xAxis: {
                                        type: 'category',
                                        data: chartData.map(d => d.date),
                                        axisLine: { lineStyle: { color: '#e5e7eb' } },
                                        axisLabel: { color: '#6b7280' }
                                    },
                                    yAxis: {
                                        type: 'value',
                                        axisLine: { show: false },
                                        axisTick: { show: false },
                                        splitLine: { lineStyle: { color: '#f3f4f6', type: 'dashed' } },
                                        axisLabel: { 
                                            color: '#6b7280',
                                            formatter: (value: number) => {
                                                if (value >= 1000000) return `Rp${(value / 1000000).toFixed(1)}M`;
                                                if (value >= 1000) return `Rp${(value / 1000).toFixed(0)}K`;
                                                return `Rp${value}`;
                                            }
                                        }
                                    },
                                    series: [
                                        {
                                            data: chartData.map(d => d.total),
                                            type: 'bar',
                                            smooth: true,
                                            itemStyle: {
                                                color: {
                                                    type: 'linear',
                                                    x: 0, y: 0, x2: 0, y2: 1,
                                                    colorStops: [{
                                                        offset: 0, color: '#f43f5e'
                                                    }, {
                                                        offset: 1, color: '#fda4af'
                                                    }]
                                                },
                                                borderRadius: [4, 4, 0, 0]
                                            },
                                            barMaxWidth: 40
                                        }
                                    ]
                                }} 
                                style={{ height: '100%', width: '100%' }}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* 2. TRANSAKSI_TERBARU */}
            {selectedReport === 'TRANSAKSI_TERBARU' && (
                <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden max-w-5xl mx-auto mt-4">
                    <div className="p-6 border-b border-pink-50 flex justify-between items-center bg-white">
                        <h4 className="text-lg font-semibold text-gray-800">Transaksi Penjualan Terbaru</h4>
                    </div>
                    
                    {isLoading ? (
                        <div className="p-12 text-center text-gray-400">Memuat aktivitas...</div>
                    ) : data?.aktivitasTerbaru && data.aktivitasTerbaru.length > 0 ? (
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-gray-500 bg-gray-50/50 border-b border-gray-100">
                                <tr>
                                    <th className="px-6 py-4 font-medium">ID Transaksi</th>
                                    <th className="px-6 py-4 font-medium">Waktu</th>
                                    <th className="px-6 py-4 font-medium">Jumlah Item</th>
                                    <th className="px-6 py-4 font-medium text-right">Total Pendapatan</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {data.aktivitasTerbaru.map((aktivitas) => (
                                    <tr key={aktivitas.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <span className="font-mono text-xs text-gray-600">
                                                {aktivitas.id.split('-')[0].toUpperCase()}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {formatDate(aktivitas.tanggal)}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            {aktivitas.details.length} Jenis Obat
                                        </td>
                                        <td className="px-6 py-4 text-right font-medium text-emerald-600">
                                            + {formatCurrency(aktivitas.total)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="p-12 text-center">
                            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-3">
                                <span className="text-2xl">📝</span>
                            </div>
                            <p className="text-gray-500 text-sm">Belum ada transaksi penjualan yang tercatat.</p>
                        </div>
                    )}
                </div>
            )}

            {/* 3. TOTAL_OBAT */}
            {selectedReport === 'TOTAL_OBAT' && (
                <div className="max-w-md mx-auto mt-4">
                    <div 
                        onClick={() => router.push('/obat')}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer text-center"
                    >
                        <div className="relative z-10">
                            <p className="text-gray-500 text-lg font-medium">Laporan: Total Jenis Obat</p>
                            <h3 className="text-6xl font-bold text-gray-800 mt-4">
                                {isLoading ? "..." : data?.totalJenisObat || 0}
                            </h3>
                            <p className="text-sm text-gray-400 mt-4 underline decoration-dashed underline-offset-4 group-hover:text-rose-500">Klik untuk melihat daftar obat</p>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-pink-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    </div>
                </div>
            )}

            {/* 4. STOK_MENIPIS */}
            {selectedReport === 'STOK_MENIPIS' && (
                <div className="max-w-md mx-auto mt-4">
                    <div 
                        onClick={() => router.push({ pathname: '/obat', query: { highlight: 'low-stock' } }, '/obat')}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer text-center"
                    >
                        <div className="relative z-10">
                            <p className="text-gray-500 text-lg font-medium">Laporan: Stok Menipis (&lt; 10)</p>
                            <h3 className="text-6xl font-bold text-rose-500 mt-4">
                                {isLoading ? "..." : data?.stokMenipis || 0}
                            </h3>
                            <p className="text-sm text-gray-400 mt-4 underline decoration-dashed underline-offset-4 group-hover:text-rose-500">Klik untuk melihat detail peringatan stok</p>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-rose-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    </div>
                </div>
            )}

            {/* 5. KEDALUWARSA */}
            {selectedReport === 'KEDALUWARSA' && (
                <div className="max-w-md mx-auto mt-4">
                    <div 
                        onClick={() => router.push({ pathname: '/obat', query: { highlight: 'expiring' } }, '/obat')}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer text-center"
                    >
                        <div className="relative z-10">
                            <p className="text-gray-500 text-lg font-medium">Laporan: Kedaluwarsa (&le; 30 Hari)</p>
                            <h3 className="text-6xl font-bold text-amber-500 mt-4">
                                {isLoading ? "..." : data?.kedaluwarsa || 0}
                            </h3>
                            <p className="text-sm text-gray-400 mt-4 underline decoration-dashed underline-offset-4 group-hover:text-amber-500">Klik untuk melihat detail kedaluwarsa</p>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                    </div>
                </div>
            )}

            {/* 6. TOP_SELLING */}
            {selectedReport === 'TOP_SELLING' && (
                <div className="bg-white rounded-3xl shadow-sm border border-emerald-100 overflow-hidden max-w-5xl mx-auto mt-4">
                    <div className="p-6 border-b border-emerald-50 flex justify-between items-center bg-white">
                        <h4 className="text-lg font-semibold text-gray-800">15 Obat Terlaris</h4>
                    </div>
                    <div className="p-6 h-[400px]">
                        {isChartLoading ? (
                            <div className="h-full flex items-center justify-center text-gray-400">Memuat grafik...</div>
                        ) : (
                            <ReactECharts 
                                option={{
                                    tooltip: { trigger: 'axis' },
                                    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                                    xAxis: {
                                        type: 'category',
                                        data: topSellingData.map(d => d.nama),
                                        axisLabel: { interval: 0, rotate: 15 }
                                    },
                                    yAxis: { type: 'value' },
                                    series: [
                                        {
                                            data: topSellingData.map(d => d.totalSold),
                                            type: 'bar',
                                            itemStyle: { color: '#10b981', borderRadius: [4, 4, 0, 0] },
                                            barMaxWidth: 60
                                        }
                                    ]
                                }} 
                                style={{ height: '100%', width: '100%' }}
                            />
                        )}
                    </div>
                </div>
            )}

            {/* 7. PURCHASES_SUPPLIER */}
            {selectedReport === 'PURCHASES_SUPPLIER' && (
                <div className="bg-white rounded-3xl shadow-sm border border-indigo-100 overflow-hidden max-w-5xl mx-auto mt-4">
                    <div className="p-6 border-b border-indigo-50 flex justify-between items-center bg-white">
                        <h4 className="text-lg font-semibold text-gray-800">Pembelian ke Supplier (Berdasarkan Frekuensi PO)</h4>
                    </div>
                    <div className="p-6 h-[400px]">
                        {isChartLoading ? (
                            <div className="h-full flex items-center justify-center text-gray-400">Memuat grafik...</div>
                        ) : (
                            <ReactECharts 
                                option={{
                                    tooltip: { trigger: 'axis' },
                                    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                                    xAxis: {
                                        type: 'category',
                                        data: supplierData.map(d => d.nama),
                                        axisLabel: { interval: 0, rotate: 15 }
                                    },
                                    yAxis: { type: 'value' },
                                    series: [
                                        {
                                            data: supplierData.map(d => d.totalOrders),
                                            type: 'bar',
                                            itemStyle: { color: '#6366f1', borderRadius: [4, 4, 0, 0] },
                                            barMaxWidth: 60
                                        }
                                    ]
                                }} 
                                style={{ height: '100%', width: '100%' }}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
