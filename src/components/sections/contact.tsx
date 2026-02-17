"use client"
import { Section } from "@/components/ui/section"
import { MapPin, Phone, Mail } from "lucide-react"
import { ContactForm } from "@/components/forms/contact-form"
import { useConfig } from "@/hooks/use-config"

export function Contact() {
    const config = useConfig()

    return (
        <Section id="contact" className="bg-background">
            <div className="text-center mb-16">
                <h2 className="text-primary font-display font-medium tracking-wide uppercase mb-2">Get in Touch</h2>
                <h3 className="text-3xl md:text-5xl font-bold font-display">Ready to Optimize Your Space?</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold font-display mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-bold">Head Office</h4>
                                    <p className="text-muted-foreground">
                                        Plot No. 4, Gali No. 1, Near Shiv Mandir,<br />
                                        Sanjay Gandhi Memorial Nagar, New Industrial Township,<br />
                                        Faridabad, Haryana - 121001
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p className="text-muted-foreground">{config.companyName}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                    <Mail />
                                </div>
                                <div>
                                    <h4 className="font-bold">Email</h4>
                                    <p className="text-muted-foreground">sandeep@wellindiaracking.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Map Embed */}
                    <div className="w-full h-64 rounded-xl overflow-hidden border border-border shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360432652!2d73.79292694155272!3d18.52456485984635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707921234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="R Storage Office Location"
                        />
                    </div>
                </div>
                {/* Form */}
                <ContactForm />
            </div>
        </Section>
    )
}
