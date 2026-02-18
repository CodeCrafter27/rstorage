"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projectsData, Project } from "@/data/projects"
import { MapPin, X, ChevronRight } from "lucide-react"

import Link from "next/link"

const categories = ["All", "Racking", "Mezzanine", "Automation", "Shelving"]

export function Projects() {
    const [filter, setFilter] = useState("All")

    const filteredProjects = projectsData.filter(p => filter === "All" || p.category === filter)

    return (
        <Section id="projects" className="bg-background py-24">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4"
                        >
                            Our Portfolio
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold font-display leading-tight"
                        >
                            Engineering Excellence <br />
                            <span className="text-muted-foreground">In Every Square Foot</span>
                        </motion.h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border-2",
                                    filter === cat
                                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                        : "bg-transparent border-border hover:border-primary/50 text-muted-foreground hover:text-primary"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                key={project.id}
                                className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/10"
                            >
                                <Link href={`/projects/${project.slug}`} className="block w-full h-full relative">
                                    {/* Project Numbering - Big and subtle */}
                                    <div className="absolute top-8 left-8 z-20 text-white/10 font-black text-6xl font-display pointer-events-none group-hover:text-white/20 transition-colors">
                                        0{index + 1}
                                    </div>

                                    {/* Image Placeholder with improved coloring */}
                                    <div
                                        className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110 bg-cover bg-center after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/20 after:via-transparent after:to-black/80"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />

                                    {/* Hover "Light" Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(2,132,199,0.3)_0%,transparent_70%)]" />

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-8 h-[2px] bg-accent" />
                                                <span className="text-accent text-[10px] font-black uppercase tracking-[0.2em]">{project.category}</span>
                                            </div>

                                            <h4 className="text-white font-display font-bold text-2xl mb-2 group-hover:text-accent transition-colors">
                                                {project.title}
                                            </h4>

                                            <div className="flex items-center text-white/60 text-xs gap-1.5 mb-4 font-medium">
                                                <MapPin size={12} className="text-accent" /> {project.location}
                                            </div>

                                            <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500 opacity-0 group-hover:opacity-100">
                                                <p className="text-white/50 text-xs mb-6 leading-relaxed line-clamp-3">
                                                    {project.description}
                                                </p>
                                                <div className="flex items-center text-white text-[10px] font-black uppercase tracking-widest gap-2">
                                                    View Case Study
                                                    <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                                                        <ChevronRight size={12} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Section>
    )
}
