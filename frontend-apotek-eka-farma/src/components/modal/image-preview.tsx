import { motion, AnimatePresence } from "motion/react"
import { X } from "@/components/icons/outline"

interface ImagePreviewProps {
    selectedImage: string | null;
    onClose: () => void;
}

export function ImagePreview({ selectedImage, onClose }: ImagePreviewProps) {
    return (
        <AnimatePresence>
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm cursor-pointer"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
                        className="relative max-w-3xl max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl bg-white"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10 backdrop-blur-md"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <img 
                            src={selectedImage} 
                            alt="Preview" 
                            className="w-full h-full object-contain max-h-[80vh]"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
