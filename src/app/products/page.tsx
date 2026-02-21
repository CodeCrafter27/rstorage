"use client"

import { productsData, productCategories } from "@/data/products"
import { motion } from "framer-motion"
import { Search, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useState, useMemo, useEffect, Suspense } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

function ProductsContent() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get("q") || ""
    const [searchQuery, setSearchQuery] = useState(initialQuery)
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    useEffect(() => {
        if (initialQuery) {
            setSearchQuery(initialQuery)
        }
    }, [initialQuery])

    const filteredProducts = useMemo(() => {
        return productsData.filter(product => {
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
            return matchesSearch && matchesCategory
        })
    }, [searchQuery, selectedCategory])

    const categories = ["All", ...productCategories.map(c => c.title)]

    return (
        <div className="container mx-auto px-6 md:px-12">
            {/* Header */}
            <div className="max-w-3xl mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Our Product Catalog</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Discover our wide range of high-quality industrial storage solutions, racking systems, and material handling equipment.
                    </p>
                </motion.div>
            </div>

            {/* Filters & Search - Premium Scrollable Layout */}
            <div className="flex flex-col gap-8 mb-16 sticky top-[80px] z-30 bg-background/80 backdrop-blur-xl py-6 -mx-4 px-4 rounded-3xl border border-border/40 shadow-sm transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="w-full overflow-hidden relative">
                        {/* Horizontal Scrollable Categories */}
                        <div className="flex gap-2 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory custom-scrollbar-hide h-14 items-center">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={cn(
                                        "whitespace-nowrap px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 snap-start border",
                                        selectedCategory === cat
                                            ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                                            : "bg-muted/30 text-muted-foreground/80 border-border/50 hover:bg-muted/50 hover:text-foreground"
                                    )}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        {/* Gradient Fade for scroll indicators */}
                        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-background/80 to-transparent pointer-events-none" />
                        <div className="absolute left-0 top-0 bottom-4 w-12 bg-gradient-to-r from-background/80 to-transparent pointer-events-none" />
                    </div>

                    <div className="relative w-full md:w-80 shrink-0">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground/60 w-4 h-4" />
                        <Input
                            placeholder="Search products..."
                            className="pl-10 h-11 bg-muted/30 border-border/50 rounded-2xl focus:ring-primary/20 transition-all font-medium"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => {
                        const Icon = product.icon
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="group block bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-xl h-full flex flex-col"
                                >
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-1 block">
                                        {product.category}
                                    </span>
                                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{product.title}</h3>
                                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                                        {product.shortDescription}
                                    </p>
                                    <div className="mt-auto flex items-center text-primary font-bold text-xs gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        View Details
                                        <ChevronRight size={14} />
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            ) : (
                <div className="py-24 text-center">
                    <p className="text-xl text-muted-foreground">No products found matching your search.</p>
                    <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }} className="mt-4">
                        Clear all filters
                    </Button>
                </div>
            )}
        </div>
    )
}

export default function ProductsArchive() {
    return (
        <main className="min-h-screen pt-24 pb-20">
            <Suspense fallback={
                <div className="container mx-auto px-6 md:px-12 py-24 text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading products...</p>
                </div>
            }>
                <ProductsContent />
            </Suspense>
        </main>
    )
}
