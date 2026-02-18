"use client"
import { motion } from "framer-motion"

const clients = [
    {
        name: "Flipkart",
        gradient: "from-[#2874f0] to-[#047BD5]",
        secondary: "Selectively Blue"
    },
    {
        name: "Miniso",
        gradient: "from-[#ec1c24] to-[#ff4d4d]",
        secondary: "Life is for fun"
    },
    {
        name: "Blinkit",
        gradient: "from-[#f7cb05] to-[#fbc02d]",
        secondary: "10 min delivery"
    },
    {
        name: "Zepto",
        gradient: "from-[#3e0097] to-[#ec008c]",
        secondary: "Seconds away"
    },
    {
        name: "Tata 1mg",
        gradient: "from-[#ff6f61] to-[#ff8a80]",
        secondary: "Digital Health"
    },
]

// Increased duplicate count for even smoother scroll
const scrollClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients]

export function Clients() {
    return (
        <section className="py-24 bg-white overflow-hidden border-y border-gray-50">
            <div className="container mx-auto px-6 mb-16 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-[1px] w-12 bg-primary/10" />
                    <h2 className="text-xs font-bold text-primary/40 uppercase tracking-[0.4em]">Corporate Partners & Clients</h2>
                    <div className="h-[1px] w-12 bg-primary/10" />
                </div>
            </div>

            <div className="relative flex whitespace-nowrap">
                {/* Visual Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex shrink-0 items-center justify-around gap-24 px-12"
                    animate={{
                        x: [0, -100 + "%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {scrollClients.map((client, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col items-center justify-center px-12 transition-all duration-500 hover:scale-110"
                        >
                            <span className={`text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${client.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                                {client.name}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                {client.secondary}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
