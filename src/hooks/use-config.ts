"use client"

import { useState, useEffect } from "react"

interface Config {
    companyName: string
    phone: string
    whatsapp: string
    whatsappMessage: string
}

export function useConfig() {
    const [config, setConfig] = useState<Config>({
        companyName: "R Storage",
        phone: "+919310149385",
        whatsapp: "+919310149385",
        whatsappMessage: "Hello R Storage, I am interested in your storage solutions."
    })

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/config`)
                if (response.ok) {
                    const data = await response.json()
                    setConfig(data)
                }
            } catch (error) {
                console.error("Failed to fetch backend config:", error)
            }
        }
        fetchConfig()
    }, [])

    return config
}
