"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, ChevronRight, ChevronDown, Warehouse, Box, ShoppingBag, Factory, Layers, LayoutGrid, Grid, Package, Zap, ShoppingCart, CreditCard, ShoppingBasket, Columns } from "lucide-react"
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
    const [activeSubCategory, setActiveSubCategory] = useState<string | null>("Expert Services")

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
                                                    className="fixed top-[64px] left-0 right-0 w-full bg-card border-b border-border shadow-2xl z-50 h-[680px] flex overflow-hidden"
                                                >
                                                    <div className="container mx-auto flex h-full">
                                                        {/* Sidebar - Widened for 18 categories */}
                                                        <div className="w-[320px] border-r border-border bg-muted/5 overflow-y-auto py-8 pr-3 custom-scrollbar">
                                                            <div className="flex flex-col gap-1.5 px-2">
                                                                <div className="px-4 mb-4">
                                                                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1">Our Solutions</h4>
                                                                    <div className="h-0.5 w-10 bg-primary/30 rounded-full" />
                                                                </div>

                                                                <button
                                                                    onMouseEnter={() => setActiveMobileCategory("Expert Services")}
                                                                    className={cn(
                                                                        "px-4 py-3.5 text-left text-sm font-semibold rounded-2xl transition-all flex items-center justify-between group/btn mx-1",
                                                                        activeMobileCategory === "Expert Services"
                                                                            ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                                                                            : "hover:bg-muted/50 text-foreground/70"
                                                                    )}
                                                                >
                                                                    <div className="flex items-center gap-3">
                                                                        <Layers size={18} className={cn("transition-colors", activeMobileCategory === "Expert Services" ? "text-white" : "text-primary")} />
                                                                        <span>Expert Services</span>
                                                                    </div>
                                                                    <ChevronRight size={14} className={cn("transition-transform group-hover/btn:translate-x-1", activeMobileCategory === "Expert Services" ? "opacity-100" : "opacity-0")} />
                                                                </button>

                                                                {productCategories.map((category) => {
                                                                    const Icon = (category as any).icon || Package
                                                                    return (
                                                                        <button
                                                                            key={category.title}
                                                                            onMouseEnter={() => setActiveMobileCategory(category.title)}
                                                                            className={cn(
                                                                                "px-4 py-3.5 text-left text-sm font-semibold rounded-2xl transition-all flex items-center justify-between group/btn mx-1",
                                                                                activeMobileCategory === category.title
                                                                                    ? "bg-primary text-white shadow-lg shadow-primary/20 scale-[1.02]"
                                                                                    : "hover:bg-muted/50 text-foreground/70"
                                                                            )}
                                                                        >
                                                                            <div className="flex items-center gap-3">
                                                                                <Icon size={18} className={cn("transition-colors", activeMobileCategory === category.title ? "text-white" : "text-primary")} />
                                                                                <span className="truncate">{category.title}</span>
                                                                            </div>
                                                                            <ChevronRight size={14} className={cn("transition-transform group-hover/btn:translate-x-1", activeMobileCategory === category.title ? "opacity-100" : "opacity-0")} />
                                                                        </button>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>

                                                        {/* Content Area */}
                                                        <div className="flex-1 p-10 overflow-y-auto custom-scrollbar bg-background/40 backdrop-blur-md">
                                                            <div className="h-full">
                                                                <div className="flex flex-col gap-3 mb-10 border-b border-border/40 pb-8">
                                                                    <div className="flex items-center justify-between">
                                                                        <h3 className="text-3xl font-bold text-foreground">
                                                                            {activeMobileCategory || "Select a Category"}
                                                                        </h3>
                                                                        <Link href="/products" className="text-sm font-bold text-primary py-2.5 px-6 bg-primary/10 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm">
                                                                            View All Products
                                                                        </Link>
                                                                    </div>
                                                                    <p className="text-muted-foreground/80 max-w-2xl text-[14px] leading-relaxed">
                                                                        {activeMobileCategory === "Expert Services"
                                                                            ? "Comprehensive support including professional installation, regular maintenance (AMC), and custom layouts tailored to your space."
                                                                            : productCategories.find(c => c.title === activeMobileCategory)?.description}
                                                                    </p>
                                                                </div>

                                                                <AnimatePresence mode="wait">
                                                                    <motion.div
                                                                        key={activeMobileCategory}
                                                                        initial={{ opacity: 0, y: 15 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        exit={{ opacity: 0, y: -15 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        className="grid grid-cols-2 xl:grid-cols-3 gap-6"
                                                                    >
                                                                        {activeMobileCategory === "Expert Services" ? (
                                                                            servicesData.map((service) => (
                                                                                <Link
                                                                                    key={service.id}
                                                                                    href={`/services/${service.slug}`}
                                                                                    className="group/item flex items-center gap-5 p-6 rounded-[2rem] border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-primary/[0.03] transition-all shadow-sm hover:shadow-2xl hover:-translate-y-1.5"
                                                                                    onClick={() => setIsSolutionsHovered(false)}
                                                                                >
                                                                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all transform group-hover/item:scale-105 shadow-inner">
                                                                                        <service.icon size={30} />
                                                                                    </div>
                                                                                    <div className="flex-1">
                                                                                        <h5 className="font-bold text-base mb-1 group-hover/item:text-primary transition-colors">{service.title}</h5>
                                                                                        <p className="text-[12px] text-muted-foreground line-clamp-2 leading-relaxed opacity-80">{service.shortDescription}</p>
                                                                                    </div>
                                                                                </Link>
                                                                            ))
                                                                        ) : (
                                                                            productCategories
                                                                                .find(c => c.title === activeMobileCategory)
                                                                                ?.items.map((product) => {
                                                                                    const Icon = (product as any).icon || Package
                                                                                    return (
                                                                                        <Link
                                                                                            key={product.id}
                                                                                            href={`/products/${product.slug}`}
                                                                                            className="group/item flex items-center gap-5 p-6 rounded-[2rem] border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-primary/[0.03] transition-all shadow-sm hover:shadow-2xl hover:-translate-y-1.5"
                                                                                            onClick={() => setIsSolutionsHovered(false)}
                                                                                        >
                                                                                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all transform group-hover/item:scale-105 shadow-inner">
                                                                                                <Icon size={30} />
                                                                                            </div>
                                                                                            <div className="flex-1">
                                                                                                <h5 className="font-bold text-base mb-1 group-hover/item:text-primary transition-colors">{product.title}</h5>
                                                                                                <p className="text-[12px] text-muted-foreground line-clamp-2 leading-relaxed opacity-80">{product.category}</p>
                                                                                            </div>
                                                                                        </Link>
                                                                                    )
                                                                                })
                                                                        )}
                                                                    </motion.div>
                                                                </AnimatePresence>
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
                                                            className="flex h-[75vh] mt-4 border border-border/40 rounded-3xl overflow-hidden bg-card/30 backdrop-blur-sm shadow-inner"
                                                        >
                                                            {/* Mobile Solutions Sidebar */}
                                                            <div className="w-[140px] border-r border-border/40 bg-muted/20 overflow-y-auto py-4 custom-scrollbar">
                                                                <div className="flex flex-col gap-1 px-1.5">
                                                                    <button
                                                                        onClick={() => setActiveSubCategory("Expert Services")}
                                                                        className={cn(
                                                                            "p-3 text-[11px] font-bold rounded-xl transition-all flex flex-col items-center gap-2 text-center",
                                                                            activeSubCategory === "Expert Services"
                                                                                ? "bg-primary text-white shadow-md shadow-primary/20 scale-95"
                                                                                : "text-muted-foreground/70 active:bg-muted/40"
                                                                        )}
                                                                    >
                                                                        <Layers size={18} />
                                                                        <span>Expert Services</span>
                                                                    </button>

                                                                    {productCategories.map((cat) => {
                                                                        const Icon = (cat as any).icon || Package
                                                                        return (
                                                                            <button
                                                                                key={cat.title}
                                                                                onClick={() => setActiveSubCategory(cat.title)}
                                                                                className={cn(
                                                                                    "p-3 text-[11px] font-bold rounded-xl transition-all flex flex-col items-center gap-2 text-center",
                                                                                    activeSubCategory === cat.title
                                                                                        ? "bg-primary text-white shadow-md shadow-primary/20 scale-95"
                                                                                        : "text-muted-foreground/70 active:bg-muted/40"
                                                                                )}
                                                                            >
                                                                                <Icon size={18} />
                                                                                <span className="line-clamp-2">{cat.title}</span>
                                                                            </button>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>

                                                            {/* Mobile Solutions Content Area */}
                                                            <div className="flex-1 overflow-y-auto custom-scrollbar bg-background/20 p-4">
                                                                <div className="mb-4">
                                                                    <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest pl-1">{activeSubCategory || "Select Category"}</h4>
                                                                    <div className="h-[1px] w-full bg-gradient-to-r from-primary/30 to-transparent mt-1" />
                                                                </div>

                                                                <AnimatePresence mode="wait">
                                                                    <motion.div
                                                                        key={activeSubCategory}
                                                                        initial={{ opacity: 0, x: 10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        exit={{ opacity: 0, x: -10 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        className="flex flex-col gap-2"
                                                                    >
                                                                        {activeSubCategory === "Expert Services" ? (
                                                                            servicesData.map((service) => (
                                                                                <Link
                                                                                    key={service.id}
                                                                                    href={`/services/${service.slug}`}
                                                                                    className="p-4 rounded-2xl bg-card/60 border border-border/30 text-[13px] font-semibold text-foreground flex items-center justify-between active:scale-[0.98] transition-all shadow-sm"
                                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                                >
                                                                                    {service.title}
                                                                                    <ChevronRight size={14} className="text-primary" />
                                                                                </Link>
                                                                            ))
                                                                        ) : (
                                                                            productCategories.find(c => c.title === activeSubCategory)?.items.map(p => (
                                                                                <Link
                                                                                    key={p.id}
                                                                                    href={`/products/${p.slug}`}
                                                                                    className="p-4 rounded-2xl bg-card/60 border border-border/30 text-[13px] font-semibold text-foreground flex items-center justify-between active:scale-[0.98] transition-all shadow-sm"
                                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                                >
                                                                                    <span className="line-clamp-1">{p.title}</span>
                                                                                    <ChevronRight size={14} className="text-primary" />
                                                                                </Link>
                                                                            ))
                                                                        )}
                                                                    </motion.div>
                                                                </AnimatePresence>
                                                            </div>
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
