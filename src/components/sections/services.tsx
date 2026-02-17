"use client"
import { Section } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { servicesData } from "@/data/services"
import { productsData } from "@/data/products"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Package, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Solutions() {
    // Show top solutions (mix of services and top product categories)
    const featuredProducts = productsData.slice(0, 3)
    const featuredServices = servicesData.slice(0, 3)

    return (
        <Section id="solutions" className="bg-muted/30">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div className="max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Solutions</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">Products & Professional Services</h2>
                        <p className="text-lg text-muted-foreground">
                            Discover our comprehensive range of industrial racking and mezzanine products, coupled with expert installation and maintenance services.
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
                {/* Product Highlights */}
                {featuredProducts.map((product, index) => {
                    const Icon = product.icon
                    return (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/products/${product.slug}`} className="block h-full">
                                <Card className="h-full border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group p-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-3 opacity-10">
                                        <Package size={60} />
                                    </div>
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-2 block">Premium Product</span>
                                    <h4 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{product.title}</h4>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                        {product.shortDescription}
                                    </p>
                                    <div className="flex items-center text-primary font-bold text-xs gap-1 mt-auto">
                                        View Details <ChevronRight size={14} />
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    )
                })}

                {/* Service Highlights */}
                {featuredServices.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                        >
                            <Link href={`/services/${service.slug}`} className="block h-full">
                                <Card className="h-full border-border/50 hover:border-primary/30 transition-all hover:shadow-lg group p-8 relative overflow-hidden bg-primary/5">
                                    <div className="absolute top-0 right-0 p-3 opacity-10">
                                        <Settings size={60} />
                                    </div>
                                    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                        <Icon size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-primary/60 uppercase tracking-widest mb-2 block">Expert Service</span>
                                    <h4 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors">{service.title}</h4>
                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6">
                                        {service.shortDescription}
                                    </p>
                                    <div className="flex items-center text-primary font-bold text-xs gap-1 mt-auto">
                                        Service Plan <ChevronRight size={14} />
                                    </div>
                                </Card>
                            </Link>
                        </motion.div>
                    )
                })}
            </div>
        </Section>
    )
}
