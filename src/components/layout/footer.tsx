"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react"
import { useConfig } from "@/hooks/use-config"
import { servicesData } from "@/data/services"

export function Footer() {
    const config = useConfig()
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-display text-2xl font-bold text-primary">R Storage</h3>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Premium storage and racking solutions for modern industries. Efficient, durable, and scalable systems designed to optimize your warehouse operations.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/#about" },
                                { name: "Solutions", href: "/#solutions" },
                                { name: "Projects", href: "/#projects" },
                                { name: "Contact", href: "/#contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Key Features (New Section) */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Why Choose Us</h4>
                        <ul className="space-y-4">
                            {[
                                "Custom-Engineered Designs",
                                "High-Grade Tensile Steel",
                                "Certified Safety Standards",
                                "Pan-India Installation",
                                "Lifetime Support"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm group">
                                    <CheckCircle2 className="shrink-0 mt-0.5 text-primary group-hover:text-white transition-colors" size={16} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground text-sm">
                                <MapPin className="shrink-0 mt-1 text-primary" size={18} />
                                <span>Plot No. 4, Gali No. 1, Near Shiv Mandir,<br />NIT, Faridabad, Haryana</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Phone className="shrink-0 text-primary" size={18} />
                                <a href={`tel:${config.companyPhone}`} className="hover:text-white transition-colors">{config.companyPhone}</a>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground text-sm">
                                <Mail className="shrink-0 text-primary" size={18} />
                                <a href="mailto:sandeep@wellindiaracking.com" className="hover:text-white transition-colors">sandeep@wellindiaracking.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} {config.companyName}. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                        <Link href="/sitemap.xml" className="hover:text-primary transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
