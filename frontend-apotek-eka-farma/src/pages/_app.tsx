import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useRouter } from "next/router"
import { useState } from "react"
import { Poppins } from "next/font/google"
import Head from "next/head"
import MainLayout from "@/layouts/main-layout"

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    display: "swap",
})

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const [title, setTitle] = useState("Dashboard")
    const isAuthPage = router.pathname === "/login" || router.pathname === "/profile" || router.pathname === "/forgot-password" || router.pathname === "/reset-password"

    const judulProyek = "Apotek Eka Farma"

    return (
        <div className={`${poppins.variable} font-sans bg-pink-50 min-h-screen`}>
            <Head>
                {/* Judul dokumen otomatis berubah sesuai format yang diminta */}
                <title>{`${title} - ${judulProyek}`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>

            {isAuthPage ? (
                <Component {...pageProps} setTitle={setTitle} />
            ) : (
                <MainLayout title={title}>
                    <Component {...pageProps} setTitle={setTitle} />
                </MainLayout>
            )}
        </div>
    )
}