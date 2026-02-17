"use client"
import { Section } from "@/components/ui/section"
import { ShieldCheck, Award, FileCheck, ThumbsUp } from "lucide-react"

export function Certifications() {
    return (
        <Section id="certifications" className="py-12 bg-muted/20 border-t border-border/40">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">Certified for Excellence & Safety</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Simple placeholders for logos/badges */}
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={40} className="text-primary" />
                        <span className="font-bold text-lg">ISO 9001:2015</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award size={40} className="text-primary" />
                        <span className="font-bold text-lg">SEMA Approved</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FileCheck size={40} className="text-primary" />
                        <span className="font-bold text-lg">ANSI Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <ThumbsUp size={40} className="text-primary" />
                        <span className="font-bold text-lg">100% Quality</span>
                    </div>
                </div>
            </div>
        </Section>
    )
}
