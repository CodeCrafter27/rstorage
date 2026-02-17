"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { projectsData, Project } from "@/data/projects"
import { MapPin, X } from "lucide-react"

import Link from "next/link"

const categories = ["All", "Racking", "Mezzanine", "Automation", "Shelving"]

export function Projects() {
    const [filter, setFilter] = useState("All")

    const filteredProjects = projectsData.filter(p => filter === "All" || p.category === filter)

    return (
        <Section id="projects" className="bg-background">
            <div className="text-center mb-12">
                <h2 className="text-primary font-display font-medium tracking-wide uppercase mb-2">Our Portfolio</h2>
                <h3 className="text-3xl md:text-5xl font-bold font-display">Recent Projects</h3>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={filter === cat ? "default" : "outline"}
                        onClick={() => setFilter(cat)}
                        className="rounded-full"
                    >
                        {cat}
                    </Button>
                ))}
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="group relative h-80 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                        >
                            <Link href={`/projects/${project.slug}`} className="block w-full h-full">
                                {/* Image Placeholder */}
                                <div className={cn("absolute inset-0 transition-transform duration-700 group-hover:scale-110", project.image)} />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                {/* Content Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                                    <h4 className="text-white font-display font-bold text-xl mb-1 leading-tight">
                                        {project.title}
                                    </h4>
                                    <div className="flex items-center text-white/70 text-sm gap-1 mb-2">
                                        <MapPin size={14} /> {project.location}
                                    </div>
                                    <p className="text-white/60 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        {project.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </Section>
    )
}
