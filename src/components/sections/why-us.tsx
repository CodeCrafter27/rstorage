"use client"
import { Section } from "@/components/ui/section"
import { Check, ShieldCheck, Clock, PenTool, Headphones } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const features = [
    {
        title: "Unmatched Durability",
        description: "Our racking systems are built with high-grade steel to withstand heavy loads and daily wear.",
        icon: ShieldCheck,
    },
    {
        title: "Rapid Installation",
        description: "Our expert team ensures quick and safe installation to minimize downtime for your operations.",
        icon: Clock,
    },
    {
        title: "Customized Design",
        description: "We tailor every storage solution to fit your specific warehouse layout and inventory needs.",
        icon: PenTool,
    },
    {
        title: "24/7 Support",
        description: "Dedicated production support and annual maintenance services to keep your systems running.",
        icon: Headphones,
    },
]

// Counter Component
const Counter = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: "-50px" })
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (inView) {
            const duration = 2000 // 2 seconds
            const steps = 60
            const increment = value / steps
            let current = 0
            const timer = setInterval(() => {
                current += increment
                if (current >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, duration / steps)
            return () => clearInterval(timer)
        }
    }, [inView, value])

    return (
        <div ref={ref} className="space-y-2">
            <div className="text-4xl md:text-6xl font-bold text-primary flex justify-center">
                {count}{suffix}
            </div>
            <div className="text-sm text-slate-400 uppercase tracking-wider">{label}</div>
        </div>
    )
}

export function WhyUs() {
    return (
        <Section id="why-us" className="bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-primary font-display font-medium tracking-wide uppercase mb-2">Why Choose R Storage</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-display text-foreground mb-6">Built for Performance, Designed for Efficiency</h3>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        We don't just sell racks; we provide complete storage solutions that enhance your workflow. With over 15 years of industry leadership, we guarantee quality and reliability.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary mt-1">
                                    <feature.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-lg">{feature.title}</h4>
                                    <p className="text-sm text-slate-400 mt-1">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Stats / Visual */}
                <div className="bg-gradient-to-br from-primary to-accent p-1 rounded-2xl">
                    <div className="bg-secondary p-8 rounded-xl grid grid-cols-2 gap-8 text-center">
                        <Counter value={98} label="Client Retention" suffix="%" />
                        <Counter value={500} label="Projects Delivered" suffix="+" />
                        <Counter value={100} label="Safety Compliance" suffix="%" />
                        <Counter value={15} label="Years Experience" suffix="+" />
                    </div>
                </div>
            </div>
        </Section>
    )
}
