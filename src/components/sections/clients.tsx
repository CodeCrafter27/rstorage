"use client"
import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
    {
        name: "Flipkart",
        logo: "https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-inventory-management-system-zapier-1.png",
        width: 140,
        height: 40
    },
    {
        name: "Miniso",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Miniso_logo.png/1024px-Miniso_logo.png",
        width: 100,
        height: 50
    },
    {
        name: "Blinkit",
        logo: "https://www.vectorseek.com/wp-content/uploads/2023/07/Blinkit-Logo-Vector.png", // Alternative found
        width: 120,
        height: 40
    },
    {
        name: "Zepto",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Logo_of_Zepto.png/1068px-Logo_of_Zepto.png",
        width: 110,
        height: 40
    },
    {
        name: "Tata1mg",
        logo: "https://marketing-compaigns.s3.ap-south-1.amazonaws.com/emailer/Landing-Pages-2021/Tata-1mg-Announcement/TATA%201mg%20logo.svg",
        width: 130,
        height: 45
    },
]

// Duplicate for loop
const scrollClients = [...clients, ...clients, ...clients, ...clients]

export function Clients() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 mb-16 text-center">
                <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="h-[1px] w-8 bg-primary/20" />
                    <h2 className="text-sm font-bold text-primary/60 uppercase tracking-[0.3em]">Market Leaders Trust Us</h2>
                    <div className="h-[1px] w-8 bg-primary/20" />
                </div>
            </div>

            <div className="relative flex whitespace-nowrap">
                <motion.div
                    className="flex shrink-0 items-center justify-around gap-20 px-10"
                    animate={{
                        x: [0, -100 + "%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 35,
                            ease: "linear",
                        },
                    }}
                >
                    {scrollClients.map((client, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-center w-[200px] h-20 px-8 hover:scale-110 transition-transform duration-500"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                                    loading="lazy"
                                    referrerPolicy="no-referrer"
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
