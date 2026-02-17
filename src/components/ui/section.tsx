"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps {
    children: React.ReactNode
    className?: string
    id?: string
    delay?: number
}

export function Section({ children, className, id, delay = 0 }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay }}
            className={cn("py-20 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto", className)}
        >
            {children}
        </motion.section>
    )
}
