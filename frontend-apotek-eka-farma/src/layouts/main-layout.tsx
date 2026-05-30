import Sidebar from "@/components/layout/sidebar"
import Topbar from "@/components/layout/topbar"

export default function MainLayout({ children, title }: { children: React.ReactNode, title: string }) {
    return (
        <main className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col p-4 overflow-hidden">
                <Topbar title={title} />
                <div className="py-4 flex-1 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </main>
    )
}