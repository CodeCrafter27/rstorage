"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { QuoteForm } from "@/components/forms/quote-form"
import { servicesData } from "@/data/services"
import { projectsData } from "@/data/projects"
import { productCategories } from "@/data/products"
import { SearchBar } from "./search-bar"

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Solutions", href: "/#solutions", hasMegaMenu: true },
    { name: "Projects", href: "/#projects", hasDropdown: true },
    { name: "Contact", href: "/#contact" },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isQuoteOpen, setIsQuoteOpen] = useState(false)
    const [isSolutionsHovered, setIsSolutionsHovered] = useState(false)
    const [isProjectsHovered, setIsProjectsHovered] = useState(false)
    const [activeMobileCategory, setActiveMobileCategory] = useState<string | null>("Expert Services")

    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
                    isScrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-2 shadow-sm" : "bg-transparent py-4"
                )}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-8 h-8 flex items-center justify-center bg-primary rounded-lg overflow-hidden">
                            <span className="text-white font-bold font-display text-lg">R</span>
                        </div>
                        <span className="font-display font-bold text-xl tracking-wide text-foreground group-hover:text-primary transition-colors">
                            R Storage
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            if (item.hasMegaMenu) {
                                return (
                                    <div
                                        key={item.name}
                                        className="relative"
                                        onMouseEnter={() => setIsSolutionsHovered(true)}
                                        onMouseLeave={() => setIsSolutionsHovered(false)}
                                    >
                                        <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2">
                                            {item.name}
                                            <ChevronDown size={14} className={cn("transition-transform duration-300", isSolutionsHovered ? "rotate-180" : "")} />
                                        </button>

                                        <AnimatePresence>
                                            {isSolutionsHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="fixed top-[64px] left-0 right-0 w-full bg-card border-b border-border shadow-2xl z-50 h-[650px] flex"
                                                >
                                                    <div className="container mx-auto flex h-full">
                                                        {/* Sidebar */}
                                                        <div className="w-1/4 border-r border-border bg-muted/10 overflow-y-auto py-6 pr-2 custom-scrollbar">
                                                            <div className="flex flex-col gap-1">
                                                                <h4 className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Categories</h4>
                                                                <button
                                                                    onMouseEnter={() => setActiveMobileCategory("Expert Services")}
                                                                    className={cn(
                                                                        "px-4 py-3 text-left text-sm font-medium rounded-lg transition-all flex items-center justify-between mx-2",
                                                                        activeMobileCategory === "Expert Services"
                                                                            ? "bg-primary text-primary-foreground shadow-md"
                                                                            : "hover:bg-muted text-foreground"
                                                                    )}
                                                                >
                                                                    Expert Services
                                                                    {activeMobileCategory === "Expert Services" && <ChevronRight size={14} />}
                                                                </button>

                                                                {productCategories.map((category) => (
                                                                    <button
                                                                        key={category.title}
                                                                        onMouseEnter={() => setActiveMobileCategory(category.title)}
                                                                        className={cn(
                                                                            "px-4 py-3 text-left text-sm font-medium rounded-lg transition-all flex items-center justify-between mx-2",
                                                                            activeMobileCategory === category.title
                                                                                ? "bg-primary text-primary-foreground shadow-md"
                                                                                : "hover:bg-muted text-foreground"
                                                                        )}
                                                                    >
                                                                        {category.title}
                                                                        {activeMobileCategory === category.title && <ChevronRight size={14} />}
                                                                    </button>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Content Area */}
                                                        <div className="flex-1 p-8 overflow-y-auto custom-scrollbar bg-card">
                                                            <div className="h-full">
                                                                <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                                                                    <h3 className="text-2xl font-bold text-foreground">
                                                                        {activeMobileCategory || "Select a Category"}
                                                                    </h3>
                                                                    <Link href="/products" className="text-sm font-medium text-primary hover:underline flex items-center gap-1">
                                                                        View All Products <ChevronRight size={14} />
                                                                    </Link>
                                                                </div>

                                                                {activeMobileCategory === "Expert Services" ? (
                                                                    <div className="grid grid-cols-3 gap-6">
                                                                        {servicesData.map((service) => (
                                                                            <Link
                                                                                key={service.id}
                                                                                href={`/services/${service.slug}`}
                                                                                className="group block p-4 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-300"
                                                                                onClick={() => setIsSolutionsHovered(false)}
                                                                            >
                                                                                <div className="flex items-start gap-4">
                                                                                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors">
                                                                                        <service.icon size={24} />
                                                                                    </div>
                                                                                    <div>
                                                                                        <h4 className="font-bold text-foreground group-hover:text-primary transition-colors mb-2">{service.title}</h4>
                                                                                        <p className="text-xs text-muted-foreground line-clamp-2">{service.shortDescription}</p>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                        ))}
                                                                    </div>
                                                                ) : (
                                                                    <div className="grid grid-cols-4 gap-6">
                                                                        {productCategories
                                                                            .find(c => c.title === activeMobileCategory)
                                                                            ?.items.map((product) => (
                                                                                <Link
                                                                                    key={product.id}
                                                                                    href={`/products/${product.slug}`}
                                                                                    className="group flex flex-col gap-3 p-3 rounded-xl hover:bg-muted/30 transition-all"
                                                                                    onClick={() => setIsSolutionsHovered(false)}
                                                                                >
                                                                                    <div className="aspect-[4/3] rounded-lg bg-muted overflow-hidden relative shadow-sm border border-border/50">
                                                                                        <img
                                                                                            src={product.image}
                                                                                            alt={product.title}
                                                                                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                                                                        />
                                                                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                                                                    </div>
                                                                                    <div>
                                                                                        <h5 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                                                                            {product.title}
                                                                                        </h5>
                                                                                        <span className="text-[10px] text-muted-foreground mt-1 block">
                                                                                            {product.category}
                                                                                        </span>
                                                                                    </div>
                                                                                </Link>
                                                                            ))}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            }

                            if (item.hasDropdown) {
                                const isProjects = item.name === "Projects"
                                const isHovered = isProjectsHovered
                                const setHovered = setIsProjectsHovered
                                const dropdownData = projectsData

                                return (
                                    <div
                                        key={item.name}
                                        className="relative group"
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                    >
                                        <button
                                            className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors py-2"
                                        >
                                            {item.name}
                                            <ChevronDown size={14} className={cn("transition-transform duration-300", isHovered ? "rotate-180" : "")} />
                                        </button>

                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-card border border-border rounded-xl shadow-xl overflow-hidden p-2 mt-1"
                                                >
                                                    <div className="flex flex-col gap-1">
                                                        {dropdownData.map((dataItem: any) => (
                                                            <Link
                                                                key={dataItem.id}
                                                                href={`/${item.name.toLowerCase()}/${dataItem.slug}`}
                                                                className="block p-3 hover:bg-muted rounded-lg transition-colors group/item"
                                                                onClick={() => setIsProjectsHovered(false)}
                                                            >
                                                                <div className="font-medium text-sm group-hover/item:text-primary transition-colors">{dataItem.title}</div>
                                                                <div className="text-xs text-muted-foreground line-clamp-1">
                                                                    {dataItem.category} • {dataItem.location}
                                                                </div>
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )
                            }
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium hover:text-primary transition-colors relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                                </Link>
                            )
                        })}
                        <div className="flex items-center gap-4">
                            <SearchBar />
                            <Button variant="accent" size="sm" onClick={() => setIsQuoteOpen(true)}>Get a Quote</Button>
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            className="p-2 text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Scroll Progress Bar */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
                    style={{ scaleX }}
                />

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/40 overflow-y-auto max-h-[85vh] custom-scrollbar shadow-2xl"
                        >
                            <nav className="flex flex-col p-6 gap-6">
                                {/* Search in Mobile Menu */}
                                <div className="px-2">
                                    <SearchBar isMobileMenu />
                                </div>
                                {navItems.map((item) => (
                                    <div key={item.name}>
                                        {item.hasMegaMenu ? (
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    onClick={() => setActiveMobileCategory(activeMobileCategory === "Solutions" ? null : "Solutions")}
                                                    className="flex items-center justify-between font-medium text-lg px-2 w-full"
                                                >
                                                    {item.name}
                                                    <ChevronDown size={18} className={cn("transition-transform", activeMobileCategory === "Solutions" ? "rotate-180" : "")} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeMobileCategory === "Solutions" && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="pl-4 flex flex-col gap-6 overflow-hidden mt-2 border-l-2 border-primary/20 ml-2"
                                                        >
                                                            {/* Services in Mobile */}
                                                            <div className="flex flex-col gap-2">
                                                                <span className="text-xs font-bold text-primary uppercase tracking-widest">Our Services</span>
                                                                {servicesData.map((service) => (
                                                                    <Link
                                                                        key={service.id}
                                                                        href={`/services/${service.slug}`}
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        className="text-sm text-foreground py-1"
                                                                    >
                                                                        {service.title}
                                                                    </Link>
                                                                ))}
                                                            </div>

                                                            {/* Products in Mobile */}
                                                            {productCategories.map((cat) => (
                                                                <div key={cat.title} className="flex flex-col gap-2">
                                                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{cat.title}</span>
                                                                    {cat.items.map(p => (
                                                                        <Link
                                                                            key={p.id}
                                                                            href={`/products/${p.slug}`}
                                                                            onClick={() => setMobileMenuOpen(false)}
                                                                            className="text-sm text-foreground py-1"
                                                                        >
                                                                            {p.title}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : item.hasDropdown ? (
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    onClick={() => setActiveMobileCategory(activeMobileCategory === item.name ? null : item.name)}
                                                    className="flex items-center justify-between font-medium text-lg px-2 w-full"
                                                >
                                                    {item.name}
                                                    <ChevronDown size={18} className={cn("transition-transform", activeMobileCategory === item.name ? "rotate-180" : "")} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeMobileCategory === item.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="pl-4 flex flex-col gap-2 border-l-2 border-border/50 ml-2 mt-1 overflow-hidden"
                                                        >
                                                            {projectsData.map((project) => (
                                                                <Link
                                                                    key={project.id}
                                                                    href={`/projects/${project.slug}`}
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    className="text-sm text-muted-foreground hover:text-primary py-1"
                                                                >
                                                                    {project.title}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="flex items-center justify-between text-lg font-medium p-2 hover:bg-muted/50 rounded-lg transition-colors"
                                            >
                                                {item.name}
                                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <Button className="w-full mt-4" variant="accent" onClick={() => { setMobileMenuOpen(false); setIsQuoteOpen(true); }}>Get a Quote</Button>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            <Modal isOpen={isQuoteOpen} onCloseAction={() => setIsQuoteOpen(false)} title="Request a Quote">
                <QuoteForm onClose={() => setIsQuoteOpen(false)} />
            </Modal>
        </>
    )
}
