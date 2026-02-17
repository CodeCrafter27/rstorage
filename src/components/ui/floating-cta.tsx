"use client"
import { Phone, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useConfig } from "@/hooks/use-config"

export function FloatingCTA() {
    const config = useConfig()
    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
            {/* WhatsApp Button */}
            <motion.a
                href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(config.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={28} />
            </motion.a>

            {/* Phone Button */}
            <motion.a
                href={`tel:${config.phone}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
                aria-label="Call Us"
            >
                <Phone size={24} />
            </motion.a>
        </div>
    )
}
