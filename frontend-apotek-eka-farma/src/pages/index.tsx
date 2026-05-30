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

export default function Dashboard({ setTitle }: { setTitle: (title: string) => void }) {
    const router = useRouter()
    const [data, setData] = useState<DashboardData | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const [chartData, setChartData] = useState<ChartData[]>([])
    const [chartFilter, setChartFilter] = useState<'week' | 'month' | 'year'>('week')
    const [isChartLoading, setIsChartLoading] = useState(true)

    useEffect(() => {
        setTitle("Dashboard")
        
        const fetchDashboard = async () => {
            try {
                const response = await api.get('/dashboard')
                setData(response.data.data)
            } catch (error) {
                console.error("Gagal mengambil data dashboard:", error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchDashboard()
    }, [setTitle])

    useEffect(() => {
        const fetchChart = async () => {
            setIsChartLoading(true)
            try {
                const response = await api.get(`/dashboard/chart?filter=${chartFilter}`)
                setChartData(response.data.data)
            } catch (error) {
                console.error("Gagal mengambil data grafik:", error)
            } finally {
                setIsChartLoading(false)
            }
        }

        fetchChart()
    }, [chartFilter])

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount)
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            day: 'numeric', month: 'short', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        })
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Metric Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Total Obat */}
                <div 
                    onClick={() => router.push('/obat')}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer"
                >
                    <div className="relative z-10">
                        <p className="text-gray-500 text-sm font-medium">Total Jenis Obat</p>
                        <h3 className="text-3xl font-bold text-gray-800 mt-1">
                            {isLoading ? "..." : data?.totalJenisObat || 0}
                        </h3>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-pink-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                </div>

                {/* Stok Menipis */}
                <div 
                    onClick={() => router.push({ pathname: '/obat', query: { highlight: 'low-stock' } }, '/obat')}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer"
                >
                    <div className="relative z-10">
                        <p className="text-gray-500 text-sm font-medium">Stok Menipis (&lt; 10)</p>
                        <h3 className="text-3xl font-bold text-rose-500 mt-1">
                            {isLoading ? "..." : data?.stokMenipis || 0}
                        </h3>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-rose-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                </div>

                {/* Kedaluwarsa */}
                <div 
                    onClick={() => router.push({ pathname: '/obat', query: { highlight: 'expiring' } }, '/obat')}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-pink-100 relative overflow-hidden group hover:shadow-md transition-shadow cursor-pointer"
                >
                    <div className="relative z-10">
                        <p className="text-gray-500 text-sm font-medium">Kedaluwarsa (&le; 30 Hari)</p>
                        <h3 className="text-3xl font-bold text-amber-500 mt-1">
                            {isLoading ? "..." : data?.kedaluwarsa || 0}
                        </h3>
                    </div>
                    <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-50 rounded-full opacity-50 group-hover:scale-110 transition-transform"></div>
                </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden">
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
                                                    offset: 0, color: '#f43f5e' // rose-500
                                                }, {
                                                    offset: 1, color: '#fda4af' // rose-300
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

            {/* Aktivitas Terbaru */}
            <div className="bg-white rounded-3xl shadow-sm border border-pink-100 overflow-hidden">
                <div className="p-6 border-b border-pink-50 flex justify-between items-center bg-white">
                    <h4 className="text-lg font-semibold text-gray-800">Transaksi Penjualan Terbaru</h4>
                    <button 
                        onClick={() => router.push('/penjualan')}
                        className="text-sm text-pink-600 hover:text-pink-700 font-medium transition-colors"
                    >
                        Lihat Semua &rarr;
                    </button>
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
        </div>
    )
}