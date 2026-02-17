"use client"

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { servicesData } from "@/data/services"
import { productsData } from "@/data/products"

const quoteSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    message: z.string().optional(),
    preferredMethod: z.enum(["Email", "Phone", "WhatsApp"])
})

type QuoteFormData = {
    name: string;
    email: string;
    phone: string;
    company?: string;
    service: string;
    message?: string;
    preferredMethod: "Email" | "Phone" | "WhatsApp";
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

export function QuoteForm({ onClose, initialService = "" }: { onClose?: () => void, initialService?: string }) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm<QuoteFormData>({
        resolver: zodResolver(quoteSchema),
        defaultValues: {
            service: initialService,
            preferredMethod: "Email"
        }
    })

    // Update service if prop changes
    useEffect(() => {
        if (initialService) {
            setValue("service", initialService)
        }
    }, [initialService, setValue])

    const onSubmit = async (data: QuoteFormData) => {
        setIsSubmitting(true)
        setSubmitStatus("idle")
        setErrorMessage("")

        // Map camelCase to snake_case
        const payload = {
            ...data,
            preferred_method: data.preferredMethod
        }

        try {
            const response = await fetch(`${API_URL}/api/quote`, {
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
                // Close modal after 3 seconds
                setTimeout(() => {
                    setSubmitStatus("idle")
                    if (onClose) onClose()
                }, 3000)
            } else {
                setSubmitStatus("error")
                setErrorMessage(result.error || "Failed to send quote request. Please try again.")
            }
        } catch (error) {
            setSubmitStatus("error")
            setErrorMessage("Network error. Please check your connection and try again.")
            console.error("Quote form error:", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitStatus === "success") {
        return (
            <div className="flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Quote Request Sent!</h3>
                <p className="text-muted-foreground mt-2 max-w-md">
                    We have received your details. Our sales team will send you a preliminary quote within 24 hours.
                </p>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-medium text-red-900">Failed to send quote request</p>
                        <p className="text-sm text-red-700">{errorMessage}</p>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                            {...register("company")}
                            placeholder="Company name"
                            disabled={isSubmitting}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Requirement <span className="text-red-500">*</span>
                    </label>
                    <select
                        {...register("service")}
                        disabled={isSubmitting}
                        className={`flex h-12 w-full rounded-md border ${errors.service ? "border-red-500" : "border-input"
                            } bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring`}
                    >
                        <option value="">Select a product or service</option>
                        <optgroup label="Services">
                            {servicesData.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                        </optgroup>
                        <optgroup label="Products">
                            {productsData.map(p => <option key={p.id} value={p.title}>{p.title}</option>)}
                        </optgroup>
                        <option value="Other">Other / Consultation</option>
                    </select>
                    {errors.service && (
                        <p className="text-sm text-red-500 mt-1">{errors.service.message}</p>
                    )}
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
                    <label className="block text-sm font-medium mb-2">Additional Details</label>
                    <Textarea
                        {...register("message")}
                        placeholder="Tell us about your warehouse size, requirements, timeline..."
                        rows={4}
                        disabled={isSubmitting}
                    />
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
                            Request Quote
                        </>
                    )}
                </Button>
            </form>
        </div>
    )
}
