"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export function Hero() {
    const { scrollY } = useScroll()
    const y1 = useTransform(scrollY, [0, 500], [0, 100])
    const y2 = useTransform(scrollY, [0, 500], [0, -80])

    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white pt-20">
            <div className="absolute inset-0 z-0">
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40"
                />
                <motion.div
                    style={{ y: y2 }}
                    className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-sky-100 rounded-full blur-3xl opacity-50"
                />
            </div>

            <div className="relative z-10 container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: 1,
                                y: [0, -10, 0]
                            }}
                            transition={{
                                duration: 0.8,
                                y: {
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                        >
                            <span className="inline-block py-2 px-6 rounded-full bg-blue-100 border-2 border-primary/20 text-primary text-sm font-bold uppercase tracking-widest shadow-sm">
                                Premium Industrial Storage Solutions
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-display font-bold text-foreground leading-tight"
                        >
                            Optimizing Space,{" "}
                            <span className="text-primary">Maximizing Efficiency</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl"
                        >
                            Transform your warehouse with R Storage's advanced racking and heavy-duty shelving systems. Designed for durability and scale.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link href="#services">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20">
                                    Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="#contact">
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white">
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-blue-100"
                        >
                            <div>
                                <p className="text-3xl font-bold text-primary">500+</p>
                                <p className="text-sm text-muted-foreground font-medium">Projects</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">15+</p>
                                <p className="text-sm text-muted-foreground font-medium">Years</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary">100%</p>
                                <p className="text-sm text-muted-foreground font-medium">Satisfaction</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border-2 border-blue-200 shadow-2xl shadow-blue-200/30">

                            {/* Warehouse Image */}
                            <img
                                src="/warehouse1.jpg"
                                alt="Warehouse"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl border-2 border-blue-100 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">ISO 9001 Certified</p>
                                        <p className="text-sm text-muted-foreground">Quality Assured Manufacturing</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                <div className="w-[2px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    )
}
