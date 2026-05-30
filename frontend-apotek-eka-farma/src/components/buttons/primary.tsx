import { ButtonHTMLAttributes } from "react"

export function PrimaryButton({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button 
            className={`bg-rose-400 hover:bg-rose-500 cursor-pointer transition-all text-white px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}