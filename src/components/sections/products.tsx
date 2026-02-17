"use client"

import { productsData, productCategories } from "@/data/products"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProductsSection() {
    // Show top products from each category or first 6 products
    const featuredProducts = productsData.slice(0, 6)

    return (
        <section id="products" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Catalog</span>
                            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Innovative Storage Solutions</h2>
                            <p className="text-lg text-muted-foreground">
                                Explore our comprehensive range of industrial racking, mezzanine floors, and material handling equipment designed to optimize your warehouse efficiency.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/products">
                            <Button variant="outline" size="lg" className="group h-14">
                                View Full Catalog
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product, index) => {
                        const Icon = product.icon
                        return (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/products/${product.slug}`}
                                    className="group block bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 relative overflow-hidden h-full"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <Icon size={32} />
                                        </div>

                                        <span className="text-xs font-bold text-primary/60 uppercase tracking-wider mb-2 block">{product.category}</span>
                                        <h3 className="text-2xl font-bold font-display mb-4 group-hover:text-primary transition-colors">{product.title}</h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                                            {product.shortDescription}
                                        </p>

                                        <div className="flex items-center text-primary font-bold text-sm gap-2 mt-auto">
                                            Explore Details
                                            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Quick Category Access */}
                <div className="mt-20 pt-12 border-t border-border flex flex-wrap justify-center gap-4 md:gap-8">
                    {productCategories.map((cat) => (
                        <Link
                            key={cat.title}
                            href={`/products?category=${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-full hover:bg-primary/5"
                        >
                            {cat.title}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
