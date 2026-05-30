import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import NavLink from "@/components/layout/nav-link"
import { SmartHome, Pill, Package, Receipt, ArchiveArrowDown, User, FileReport } from "@/components/icons/solid"
import Logo from "@/components/logo"

export default function Sidebar() {
    const [userRole, setUserRole] = useState<string | null>(null)

    useEffect(() => {
        const userData = Cookies.get('user')
        if (userData) {
            setUserRole(JSON.parse(userData).role)
        }
    }, [])

    const routes = [
        { href: "/", label: "Dashboard", icon: <SmartHome className="h-5 w-5" /> },
        { href: "/obat", label: "Obat", icon: <Pill className="h-5 w-5" /> },
        { href: "/supplier", label: "Supplier", icon: <Package className="h-5 w-5" /> },
        { href: "/penjualan", label: "Penjualan", icon: <Receipt className="h-5 w-5" /> },
        { href: "/pembelian", label: "Pembelian", icon: <ArchiveArrowDown className="h-5 w-5" /> },
        { href: "/laporan", label: "Laporan", icon: <FileReport className="h-5 w-5" /> }
    ]

    if (userRole === 'OWNER') {
        routes.push({ href: "/users", label: "Pengguna", icon: <User className="h-5 w-5" /> })
    }

    return (
        <div className="flex flex-col p-2 m-4 bg-white rounded-2xl">
            <div className="m-1 font-medium flex space-x-2 items-center justify-center">
                <div className="rounded-lg bg-rose-400">
                    <Logo className="w-8 h-8 scale-110 text-white" />
                </div>
                <div className="flex flex-col leading-none select-none">
                    <div className="uppercase text-[0.5rem] tracking-wider">Apotek</div>
                    <div className="uppercase text-base leading-none tracking-widest">Farma</div>
                </div>
            </div>
            <div className="flex flex-col mt-4">
                {routes.map((route) => (
                    <NavLink key={route.href} href={route.href} label={route.label} icon={route.icon} />
                ))}
            </div>
        </div>
    )
}