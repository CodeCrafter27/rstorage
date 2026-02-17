"use client"
import Image from "next/image"
import { Section } from "@/components/ui/section"
import { CheckCircle2 } from "lucide-react"

export function About() {
    return (
        <Section id="about" className="bg-background">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-6">
                    <h2 className="text-primary font-display font-medium tracking-wide uppercase">Who We Are</h2>
                    <h3 className="text-3xl md:text-5xl font-bold font-display leading-tight">
                        Leading Manufacturer of <span className="text-primary">Industrial Racking</span> Systems
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        At R Storage, we specialize in designing, manufacturing, and installing high-quality storage solutions. From heavy-duty pallet racking to automated warehouse systems, we help businesses optimize their space and improve operational efficiency.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                        {["Premium Quality Steel", "Custom Engineering", "Expert Installation", "Lifetime Support"].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 className="text-accent shrink-0" />
                                <span className="font-medium text-foreground">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-12 pt-8 border-t border-border mt-8">
                        <div>
                            <h4 className="text-4xl font-bold text-primary font-display">15+</h4>
                            <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-4xl font-bold text-primary font-display">500+</h4>
                            <p className="text-sm text-muted-foreground mt-1">Projects Completed</p>
                        </div>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <div className="h-48 rounded-2xl bg-slate-800 w-full overflow-hidden relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-2 left-3 text-xs text-white/80 font-medium">State-of-the-art Factory</div>
                            </div>
                            <div className="h-64 rounded-2xl bg-blue-900 w-full overflow-hidden relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-2 left-3 text-xs text-white/80 font-medium">Installation Team</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-64 rounded-2xl bg-indigo-900 w-full overflow-hidden relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-2 left-3 text-xs text-white/80 font-medium">Completed Projects</div>
                            </div>
                            <div className="h-48 rounded-2xl bg-slate-700 w-full overflow-hidden relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                <div className="absolute bottom-2 left-3 text-xs text-white/80 font-medium">Head Office</div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background/90 backdrop-blur-md p-6 rounded-xl border border-border shadow-xl max-w-xs text-center">
                        <p className="font-bold text-foreground text-2xl mb-1">ISO 9001</p>
                        <p className="text-sm text-muted-foreground">Certified Excellence</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}
