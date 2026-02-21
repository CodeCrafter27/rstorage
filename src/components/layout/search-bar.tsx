"use client"

import { useState, useEffect, useRef } from "react"
import { Search, X, Package, LayoutGrid, ArrowRight, ChevronRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { productsData } from "@/data/products"
import { servicesData } from "@/data/services"
import { cn } from "@/lib/utils"

interface SearchResult {
    id: string
    title: string
    slug: string
    type: "product" | "service"
    category: string
}

export function SearchBar({ isMobileMenu = false }: { isMobileMenu?: boolean }) {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState("")
    const [results, setResults] = useState<SearchResult[]>([])
    const router = useRouter()
    const containerRef = useRef<HTMLDivElement>(null)

    // Auto-open if in mobile menu to show the input
    useEffect(() => {
        if (isMobileMenu) setIsOpen(true)
    }, [isMobileMenu])

    const allItems: SearchResult[] = [
        ...productsData.map(p => ({ id: p.id, title: p.title, slug: p.slug, type: "product" as const, category: p.category })),
        ...servicesData.map(s => ({ id: s.id, title: s.title, slug: s.slug, type: "service" as const, category: "Service" }))
    ]

    useEffect(() => {
        if (query.length > 1) {
            const filtered = allItems.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            ).slice(0, 8)
            setResults(filtered)
        } else {
            setResults([])
        }
    }, [query])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                if (!isMobileMenu) setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isMobileMenu])

    const handleSelect = (item: SearchResult) => {
        const path = item.type === "product" ? `/products/${item.slug}` : `/services/${item.slug}`
        router.push(path)
        if (!isMobileMenu) setIsOpen(false)
        setQuery("")
    }

    return (
        <div className={cn("relative", isMobileMenu ? "w-full" : "")} ref={containerRef}>
            <div className={cn(
                "flex items-center transition-all duration-300",
                isMobileMenu
                    ? "w-full bg-muted shadow-inner rounded-xl px-4 py-3 border border-border"
                    : (isOpen ? "w-64 md:w-64 border-primary/50 bg-background shadow-lg shadow-primary/5 rounded-full px-4 py-2 border" : "w-10 h-10 md:w-40 p-0 md:px-4 cursor-pointer bg-muted/40 border border-border/40 rounded-full")
            )}
                onClick={() => setIsOpen(true)}
            >
                <Search size={18} className={cn("text-muted-foreground min-w-[18px]", isOpen ? "text-primary" : "")} />
                <input
                    type="text"
                    placeholder="Search products..."
                    className={cn(
                        "bg-transparent border-none focus:outline-none focus:ring-0 text-sm ml-3 w-full transition-all",
                        (!isOpen && !isMobileMenu) && "md:block hidden opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto"
                    )}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && query.length > 1) {
                            router.push(`/products?q=${query}`)
                            setIsOpen(false)
                        }
                    }}
                />
                {isOpen && query && (
                    <button onClick={() => setQuery("")} className="ml-2 text-muted-foreground hover:text-foreground">
                        <X size={14} />
                    </button>
                )}
            </div>

            <AnimatePresence>
                {isOpen && results.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 left-0 right-0 md:left-auto md:w-[400px] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
                    >
                        <div className="p-2">
                            {results.map((item) => (
                                <button
                                    key={`${item.type}-${item.id}`}
                                    onClick={() => handleSelect(item)}
                                    className="w-full flex items-center justify-between p-3 hover:bg-muted rounded-xl transition-colors group text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                            {item.type === "product" ? <Package size={16} /> : <LayoutGrid size={16} />}
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm group-hover:text-primary transition-colors">{item.title}</div>
                                            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{item.category}</div>
                                        </div>
                                    </div>
                                    <ChevronRight size={14} className="text-muted-foreground group-hover:translate-x-1 transition-transform" />
                                </button>
                            ))}
                        </div>
                        <div className="p-3 bg-muted/30 border-t border-border flex justify-center">
                            <button
                                onClick={() => { router.push(`/products?q=${query}`); setIsOpen(false); }}
                                className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                            >
                                View all results for "{query}"
                                <ArrowRight size={12} />
                            </button>
                        </div>
                    </motion.div>
                )}

                {isOpen && query.length > 1 && results.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 left-0 right-0 md:left-auto md:w-[300px] bg-card border border-border rounded-xl shadow-xl p-6 text-center z-50"
                    >
                        <p className="text-sm text-muted-foreground">No results found for "{query}"</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
