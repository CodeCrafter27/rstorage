import { projectsData } from "@/data/projects"
import { notFound } from "next/navigation"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const project = projectsData.find((p) => p.slug === slug)
    if (!project) return { title: "Project Not Found" }

    return {
        title: `${project.title} | R Storage Solutions`,
        description: project.description,
    }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const project = projectsData.find((p) => p.slug === slug)

    if (!project) {
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
                    <Link href="/#projects" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="inline-block px-4 py-2 bg-blue-100 border-2 border-blue-200 rounded-full text-primary text-sm font-bold">
                                {project.category}
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <MapPin size={16} />
                                {project.location}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-foreground">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            {project.description}
                        </p>

                        {project.client && project.completionDate && (
                            <div className="flex gap-8 pt-6 border-t-2 border-blue-100">
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Client</p>
                                    <p className="font-bold text-foreground">{project.client}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Completed</p>
                                    <p className="font-bold text-foreground flex items-center gap-2">
                                        <Calendar size={16} />
                                        {project.completionDate}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <Section className="bg-background pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Case Study Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold font-display mb-4 text-foreground">The Challenge</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-red-500/50 pl-6">
                                {project.challenge}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-display mb-4 text-foreground">Our Solution</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-blue-500/50 pl-6">
                                {project.solution}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold font-display mb-4 text-foreground">The Result</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed border-l-4 border-green-500/50 pl-6">
                                {project.result}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar Info */}
                    <div className="space-y-8">
                        <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                            <h3 className="font-bold mb-4 text-foreground">Project Details</h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between py-2 border-b border-blue-200">
                                    <span className="text-muted-foreground">Client</span>
                                    <span className="font-medium text-foreground">{project.client}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-blue-200">
                                    <span className="text-muted-foreground">Location</span>
                                    <span className="font-medium text-foreground text-right">{project.location}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-blue-200">
                                    <span className="text-muted-foreground">Category</span>
                                    <span className="font-medium text-foreground">{project.category}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-blue-200">
                                    <span className="text-muted-foreground">Year</span>
                                    <span className="font-medium text-foreground">{project.completionDate}</span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h4 className="font-bold mb-2 text-foreground">Ready to optimize your space?</h4>
                                <Link href="/#contact">
                                    <Button className="w-full">Get a Quote</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
