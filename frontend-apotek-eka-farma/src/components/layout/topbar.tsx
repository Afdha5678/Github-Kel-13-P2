import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/router"
import { ChevronDown, Search, Logout, User as UserIcon } from "@/components/icons/outline"
import Cookies from "js-cookie"
import { motion, AnimatePresence } from "motion/react"

export default function Topbar({ title }: { title: string }) {
    const router = useRouter()
    const [user, setUser] = useState<any>(null)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const userData = Cookies.get('user')
        if (userData) {
            setUser(JSON.parse(userData))
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user')
        router.push('/login')
    }

    return (
        <div className="flex items-center justify-between bg-white rounded-xl px-6 py-3 shadow-sm border border-pink-50 relative">
            <div className="font-bold text-xl text-gray-800 tracking-tight">
                {title}
            </div>

            <div className="relative min-w-[300px] hidden lg:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                    type="text"
                    className="bg-neutral-50 w-full rounded-lg pl-10 pr-4 py-2 text-xs border border-transparent focus:bg-white focus:border-rose-300 focus:outline-none transition-all"
                    placeholder="Cari obat atau transaksi..."
                />
            </div>

            <div className="flex items-center gap-3" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-3 pl-4 border-l border-neutral-100 hover:opacity-80 transition-opacity"
                >
                    <div className="hidden sm:block text-right">
                        <div className="text-sm font-bold text-gray-800 leading-none">{user?.nama || 'User'}</div>
                        <div className="text-[10px] font-medium text-rose-400 uppercase tracking-tighter mt-1">{user?.role || 'Staff'}</div>
                    </div>
                    <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-pink-100 shadow-sm">
                        <img
                            src={`https://ui-avatars.com/api/?name=${user?.nama || 'User'}&background=FDA4AF&color=fff`}
                            alt="Profile"
                        />
                    </div>
                    <motion.div
                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown className="w-4 h-4 text-neutral-400" />
                    </motion.div>
                </button>

                <AnimatePresence>
                    {isDropdownOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute right-4 top-16 w-52 bg-white rounded-2xl shadow-xl border border-pink-50 py-2 z-50"
                        >
                            <button 
                                onClick={() => {
                                    setIsDropdownOpen(false)
                                    router.push('/profile')
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-600 hover:bg-pink-50 hover:text-rose-500 transition-colors"
                            >
                                <UserIcon className="w-4 h-4" />
                                Profil Saya
                            </button>

                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 transition-colors font-medium border-t border-pink-50 mt-1"
                            >
                                <Logout className="w-4 h-4" />
                                Keluar
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}