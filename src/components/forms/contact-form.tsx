"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
    preferredMethod: z.enum(["Email", "Phone", "WhatsApp"])
})

type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    company?: string;
    message: string;
    preferredMethod: "Email" | "Phone" | "WhatsApp";
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            preferredMethod: "Email"
        }
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitStatus("idle")
        setErrorMessage("")

        // Map camelCase to snake_case for backend
        const payload = {
            ...data,
            preferred_method: data.preferredMethod
        }

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            })

            const result = await response.json()

            if (response.ok && result.success) {
                setSubmitStatus("success")
                reset()
                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus("idle"), 5000)
            } else {
                setSubmitStatus("error")
                setErrorMessage(result.error || "Failed to send message. Please try again.")
            }
        } catch (error) {
            setSubmitStatus("error")
            setErrorMessage("Network error. Please check your connection and try again.")
            console.error("Contact form error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-card border border-border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold font-display mb-6">Send us a Message</h3>

            {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-lg flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-medium text-green-900">Message sent successfully!</p>
                        <p className="text-sm text-green-700">We'll get back to you within 24 hours.</p>
                    </div>
                </div>
            )}

            {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-medium text-red-900">Failed to send message</p>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                            {...register("name")}
                            placeholder="Your full name"
                            disabled={isSubmitting}
                            className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && (
                            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                            {...register("email")}
                            type="email"
                            placeholder="your@email.com"
                            disabled={isSubmitting}
                            className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <Input
                            {...register("phone")}
                            type="tel"
                            placeholder="+91 98765 43210"
                            disabled={isSubmitting}
                            className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                            {...register("company")}
                            placeholder="Your company name"
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-3">
                        Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                        {["Email", "Phone", "WhatsApp"].map((method) => (
                            <label key={method} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    value={method}
                                    {...register("preferredMethod")}
                                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                                />
                                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                                    {method}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                        {...register("message")}
                        placeholder="Tell us about your requirements..."
                        rows={5}
                        disabled={isSubmitting}
                        className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                        <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                        </>
                    )}
                </Button>
            </form>
        </div>
    )
}
