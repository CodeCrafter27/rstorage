"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonialsData } from "@/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0)

    // Auto-play
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % testimonialsData.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const next = () => setActiveIndex((current) => (current + 1) % testimonialsData.length)
    const prev = () => setActiveIndex((current) => (current - 1 + testimonialsData.length) % testimonialsData.length)

    return (
        <Section id="testimonials" className="bg-secondary/5 border-y border-border/40">
            <div className="text-center mb-16">
                <h2 className="text-primary font-display font-medium tracking-wide uppercase mb-2">Testimonials</h2>
                <h3 className="text-3xl md:text-5xl font-bold font-display">Trusted by Industry Leaders</h3>
            </div>

            <div className="max-w-4xl mx-auto relative">
                <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10">
                    <button onClick={prev} className="p-2 rounded-full bg-background border border-border shadow-sm hover:bg-muted transition-colors">
                        <ChevronLeft />
                    </button>
                </div>
                <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10">
                    <button onClick={next} className="p-2 rounded-full bg-background border border-border shadow-sm hover:bg-muted transition-colors">
                        <ChevronRight />
                    </button>
                </div>

                <div className="overflow-hidden relative h-[400px] md:h-[300px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0"
                        >
                            <Card className="h-full flex flex-col items-center justify-center text-center p-8 md:p-12">
                                <Quote className="text-primary/20 w-12 h-12 mb-6" />
                                <p className="text-lg md:text-2xl font-medium leading-relaxed mb-8">
                                    "{testimonialsData[activeIndex].content}"
                                </p>

                                <div className="mt-auto">
                                    <h4 className="font-bold text-lg">{testimonialsData[activeIndex].name}</h4>
                                    <p className="text-muted-foreground">{testimonialsData[activeIndex].role}, {testimonialsData[activeIndex].company}</p>
                                </div>
                            </Card>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {testimonialsData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={cn(
                                "w-2.5 h-2.5 rounded-full transition-colors",
                                i === activeIndex ? "bg-primary" : "bg-muted-foreground/30"
                            )}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}
