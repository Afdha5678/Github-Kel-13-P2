import Link from "next/link"
import { useRouter } from "next/router"
import { ReactNode } from "react"

interface NavLinkProps {
    href: string
    label: string
    icon: ReactNode
}

export default function NavLink({ href, label, icon }: NavLinkProps) {
    const router = useRouter()
    const isActive = router.pathname.startsWith(href)

    return (
        <Link href={href} className="group flex items-center gap-2 py-1 pl-1 pr-12 transition-all duration-200 select-none">
            <span className="text-neutral-400 bg-neutral-100 p-2 rounded-lg transition-all duration-200 ease-in-out group-hover:bg-rose-100 group-hover:text-rose-400 group-active:bg-rose-200 group-active:text-rose-600">
                {icon}
            </span>
            <span className="text-xs font-normal text-neutral-600 transition-all duration-200 group-hover:text-neutral-900 group-hover:font-medium">{label}</span>
        </Link>
    )
}