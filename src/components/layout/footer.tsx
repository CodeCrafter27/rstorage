"use client"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { useConfig } from "@/hooks/use-config"

export function Footer() {
    const config = useConfig()
    return (
        <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="font-display text-2xl font-bold text-primary">R Storage</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Premium storage and racking solutions for modern industries. Efficient, durable, and scalable.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
                        <ul className="space-y-3">
                            {["Home", "About Us", "Services", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Services</h4>
                        <ul className="space-y-3">
                            {["Industrial Racking", "Warehouse Automation", "Mezzanine Floors", "Pallet Racking", "Cantilever Racks"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-foreground">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-muted-foreground">
                                <MapPin className="shrink-0 mt-1 text-primary" size={18} />
                                <span>Plot No. 4, Gali No. 1, Near Shiv Mandir,<br />NIT, Faridabad, Haryana</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Phone className="shrink-0 text-primary" size={18} />
                                <span>{config.companyName}</span>
                            </li>
                            <li className="flex items-center gap-3 text-muted-foreground">
                                <Mail className="shrink-0 text-primary" size={18} />
                                <span>sandeep@wellindiaracking.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center md:text-left">
                        &copy; {new Date().getFullYear()} R Storage Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
