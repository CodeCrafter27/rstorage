"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

const contactFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    company: z.string().optional(),
    email: z.string().email({ message: "Invalid email address." }),
    phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
    requirement: z.string().min(1, { message: "Please select a requirement type." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export type ContactFormState = {
    success: boolean
    message: string
    errors?: {
        [K in keyof z.infer<typeof contactFormSchema>]?: string[]
    }
}

export async function sendEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
    const rawData = {
        name: formData.get("name"),
        company: formData.get("company"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        requirement: formData.get("requirement"),
        message: formData.get("message"),
    }

    const validatedFields = contactFormSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Validation failed. Please check the form fields.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, company, email, phone, requirement, message } = validatedFields.data

    // Simulate email sending (or use real transport if env vars are present)
    try {
        // Check if we have transporter config, otherwise log to console (Dev mode)
        if (!process.env.SMTP_HOST) {
            console.log("------------------------------------------")
            console.log("📧 NEW LEAD RECEIVED (DEV MODE)")
            console.log("------------------------------------------")
            console.log(`From: ${name} (${email})`)
            console.log(`Company: ${company || "N/A"}`)
            console.log(`Phone: ${phone}`)
            console.log(`Requirement: ${requirement}`)
            console.log(`Message: ${message}`)
            console.log("------------------------------------------")

            // Simulate network delay
            await new Promise((resolve) => setTimeout(resolve, 1000))

            return { success: true, message: "Thank you! Your message has been received." }
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        })

        await transporter.sendMail({
            from: `"R Storage Website" <${process.env.SMTP_USER || "noreply@rstorage.com"}>`,
            to: process.env.CONTACT_EMAIL || "info@rstorage.com",
            subject: `New Inquiry: ${requirement} - ${company || name}`,
            text: `
        Name: ${name}
        Company: ${company || "N/A"}
        Email: ${email}
        Phone: ${phone}
        Requirement: ${requirement}
        
        Message:
        ${message}
      `,
            html: `
        <h3>New Website Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Requirement:</strong> ${requirement}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        })

        return { success: true, message: "Thank you! Your message has been sent successfully." }
    } catch (error) {
        console.error("Email Error:", error)
        return { success: false, message: "Something went wrong. Please try again later." }
    }
}
