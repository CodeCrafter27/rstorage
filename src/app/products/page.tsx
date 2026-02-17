"use client"

import { productsData, productCategories } from "@/data/products"
import { motion } from "framer-motion"
import { Search, Filter, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useMemo, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

export default function ProductsArchive() {
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
        <main className="min-h-screen pt-24 pb-20">
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

                {/* Filters & Search */}
                <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between sticky top-[80px] z-30 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 rounded-2xl border border-border/40 shadow-sm">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((cat) => (
                            <Button
                                key={cat}
                                variant={selectedCategory === cat ? "accent" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCategory(cat)}
                                className="rounded-full px-6"
                            >
                                {cat}
                            </Button>
                        ))}
                    </div>
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Search products..."
                            className="pl-10 h-11 bg-muted/30 border-border/50"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
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
        </main>
    )
}
