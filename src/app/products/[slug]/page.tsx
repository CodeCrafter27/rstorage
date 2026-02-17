"use client"

import { useParams } from "next/navigation"
import { productsData } from "@/data/products"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, ChevronRight, Phone, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { QuoteForm } from "@/components/forms/quote-form"
import { useConfig } from "@/hooks/use-config"

export default function ProductPage() {
    const params = useParams()
    const product = productsData.find(p => p.slug === params.slug)
    const [isQuoteOpen, setIsQuoteOpen] = useState(false)
    const config = useConfig()

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
                    <Link href="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        )
    }

    const Icon = product.icon

    return (
        <main className="min-h-screen pt-24 pb-20">
            <div className="container mx-auto px-6 md:px-12">
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8 overflow-x-auto whitespace-nowrap pb-2">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <ChevronRight size={14} />
                    <span className="text-primary font-medium">{product.category}</span>
                    <ChevronRight size={14} />
                    <span className="text-foreground">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Image/Icon Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative rounded-3xl overflow-hidden aspect-square bg-slate-900 border border-border/40 flex items-center justify-center p-12 group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-50" />
                        <Icon size={120} className="text-primary relative z-10 group-hover:scale-110 transition-transform duration-500" />

                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/80 backdrop-blur-md rounded-2xl border border-border/40 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Certified Quality</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary" />)}
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="flex flex-col">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                                {product.category}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">{product.title}</h1>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                {product.fullDescription}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-4">
                                <h3 className="font-bold text-xl mb-4">Key Features</h3>
                                {product.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="mt-1 bg-primary/20 p-0.5 rounded-full">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm text-foreground/80">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {product.specifications && (
                                <div className="space-y-4">
                                    <h3 className="font-bold text-xl mb-4">Specifications</h3>
                                    <div className="bg-muted/30 rounded-2xl p-6 border border-border/50">
                                        {Object.entries(product.specifications).map(([key, value]) => (
                                            <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                                                <span className="text-sm font-medium text-muted-foreground">{key}</span>
                                                <span className="text-sm font-bold">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* CTA Section */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <Button size="lg" className="h-14 px-8 rounded-full shadow-lg shadow-primary/20" onClick={() => setIsQuoteOpen(true)}>
                                Inquiry Now <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <div className="flex gap-4">
                                <a href={`tel:${config.phone}`} className="flex-1 sm:flex-none">
                                    <Button variant="outline" size="lg" className="h-14 w-full px-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white">
                                        Call Now
                                    </Button>
                                </a>
                                <a
                                    href={`https://wa.me/${config.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`I am interested in ${product.title}`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 sm:flex-none"
                                >
                                    <Button variant="outline" size="lg" className="h-14 w-full px-8 rounded-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                                        WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-24">
                    <h2 className="text-3xl font-bold font-display mb-10">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productsData
                            .filter(p => p.category === product.category && p.slug !== product.slug)
                            .slice(0, 4)
                            .map((related) => {
                                const RelatedIcon = related.icon
                                return (
                                    <Link
                                        key={related.id}
                                        href={`/products/${related.slug}`}
                                        className="group bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all hover:shadow-xl"
                                    >
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                            <RelatedIcon className="text-primary" size={24} />
                                        </div>
                                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{related.title}</h3>
                                        <p className="text-xs text-muted-foreground line-clamp-2">{related.shortDescription}</p>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </div>

            <Modal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} title="Product Inquiry">
                <QuoteForm onClose={() => setIsQuoteOpen(false)} initialService={product.title} />
            </Modal>
        </main>
    )
}
