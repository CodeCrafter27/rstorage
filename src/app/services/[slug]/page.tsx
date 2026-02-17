import { servicesData } from "@/data/services"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = servicesData.find((s) => s.slug === slug)
    if (!service) return { title: "Service Not Found" }

    return {
        title: `${service.title} | R Storage Solutions`,
        description: service.shortDescription,
    }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = servicesData.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
                    <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-40" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center justify-center p-3 bg-blue-100 border-2 border-blue-200 rounded-xl mb-6 text-primary">
                            <service.icon size={48} />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-display text-foreground mb-4">{service.title}</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl">{service.shortDescription}</p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <Section className="bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-3xl font-bold font-display mb-6">Overview</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            {service.fullDescription}
                        </p>

                        <h3 className="text-2xl font-bold font-display mb-4">Key Features</h3>
                        <ul className="space-y-3">
                            {service.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <div className={`h-80 rounded-2xl ${service.image} bg-cover bg-center border-2 border-blue-200 shadow-lg`} />

                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
                            <h3 className="text-2xl font-bold font-display mb-4 text-foreground">Ready to get started?</h3>
                            <p className="text-muted-foreground mb-6">
                                Contact us today for a free consultation and quote for your {service.title.toLowerCase()} needs.
                            </p>
                            <Link href="/#contact">
                                <Button size="lg" className="w-full">
                                    Request a Quote
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Benefits Section */}
            <Section className="bg-secondary">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">Why Choose This Solution?</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Our {service.title.toLowerCase()} systems are designed to maximize efficiency and safety in your warehouse.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {service.benefits.map((benefit, i) => (
                        <div key={i} className="bg-card border-2 border-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                                <CheckCircle2 className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
                            <p className="text-muted-foreground text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    )
}
