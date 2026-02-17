"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface CardProps {
    children: React.ReactNode
    className?: string
    hoverEffect?: boolean
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={cn("bg-card text-card-foreground rounded-2xl border border-border/40 p-8 shadow-lg backdrop-blur-sm", className)}
        >
            {children}
        </motion.div>
    )
}
