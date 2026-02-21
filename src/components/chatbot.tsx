"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Phone, Mail, MessageCircle, ChevronRight, Minimize2, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useConfig } from "@/hooks/use-config"
import { productsData } from "@/data/products"
import Link from "next/link"

type Message = {
    id: string
    text: string
    sender: 'user' | 'bot'
    type?: 'text' | 'product-list' | 'options'
    products?: typeof productsData
}

export function Chatbot() {
    const config = useConfig()
    const [isOpen, setIsOpen] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            text: "Hi! I'm your R Storage assistant. How can I help you today?",
            sender: 'bot',
            type: 'options'
        }
    ])
    const [inputValue, setInputValue] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, isOpen])

    const toggleChat = () => {
        if (isOpen) {
            // Clear messages when closing
            setMessages([
                {
                    id: '1',
                    text: "Hi! I'm your R Storage assistant. How can I help you today?",
                    sender: 'bot',
                    type: 'options'
                }
            ])
            setInputValue("")
        }
        setIsOpen(!isOpen)
    }

    const handleSendMessage = (e?: React.FormEvent) => {
        e?.preventDefault()
        if (!inputValue.trim()) return

        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user'
        }

        setMessages(prev => [...prev, userMsg])
        setInputValue("")

        // Process Bot Response
        setTimeout(() => {
            const rawUserText = userMsg.text.toLowerCase()

            // Detect Hinglish/Hindi
            const hindiKeywords = [
                'hai', 'kya', 'ka', 'ko', 'mein', 'kuch', 'aur', 'hi', 'bhi',
                'bataye', 'dikhao', 'dikhaye', 'bataiye', 'vazan', 'lambai',
                'chaudai', 'detail', 'chahiye', 'chaiye', 'number', 'batao',
                'dikhana', 'baare', 'bare', 'btao', 'bta'
            ]
            const isHindiDetect = hindiKeywords.some(word => rawUserText.includes(word))

            // Clean query for matching
            let query = rawUserText
            const filters = [
                'hai', 'kya', 'ka', 'ko', 'mein', 'kuch', 'aur', 'hi', 'bhi',
                'bataye', 'dikhao', 'dikhaye', 'bataiye', 'please', 'show', 'me',
                'i', 'need', 'batao', 'dikhana', 'baare', 'bare', 'btao', 'bta',
                'k', 'm', 're', 'liye', 'vaaste', 'ke', 'se'
            ]
            filters.forEach(word => {
                query = query.replace(new RegExp(`\\b${word}\\b`, 'g'), '').trim()
            })
            query = query.replace(/\s+/g, ' ').trim()

            const contactMsgText = isHindiDetect
                ? `\n\nZyada jaankari ke liye aap humein ${config.companyPhone} par call kar sakte hain ya WhatsApp par message kar sakte hain.`
                : `\n\nFor more information, you can contact us at ${config.companyPhone} or message us on WhatsApp.`

            // 1. Check for Contact Keywords
            const contactKeywords = ['contact', 'call', 'email', 'number', 'phone', 'whatsapp', 'milna', 'baat']
            if (contactKeywords.some(ck => rawUserText.includes(ck))) {
                const text = isHindiDetect
                    ? `Aap humein ${config.companyPhone} par call kar sakte hain ya sandeep@wellindiaracking.com par mail bhej sakte hain.`
                    : `You can reach us at ${config.companyPhone} or email us at sandeep@wellindiaracking.com.`

                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: text,
                    sender: 'bot',
                    type: 'options'
                }
                setMessages(prev => [...prev, botMsg])
                return
            }

            // 2. Scoring Based Search
            const technicalKeywords = ['capacity', 'weight', 'storage', 'height', 'spec', 'material', 'size', 'dimension', 'load', 'vazan', 'lambai', 'chaudai', 'detail', 'specification', 'vajan']
            const isTechnicalQuery = technicalKeywords.some(kw => rawUserText.includes(kw))

            const searchWords = query.split(' ').filter(w => w.length >= 2)

            const scoredProducts = productsData.map(product => {
                let score = 0
                const title = product.title.toLowerCase()
                const category = product.category.toLowerCase()
                const shortDesc = product.shortDescription.toLowerCase()
                const fullDesc = product.fullDescription.toLowerCase()

                if (title === query) score += 100
                if (title.includes(query)) score += 50
                if (shortDesc.includes(query)) score += 30

                searchWords.forEach(word => {
                    if (title.includes(word)) score += 20
                    if (category.includes(word)) score += 10
                    if (shortDesc.includes(word)) score += 15
                    if (fullDesc.includes(word)) score += 5
                })

                return { product, score }
            }).filter(item => item.score > 0).sort((a, b) => b.score - a.score)

            const bestMatch = scoredProducts[0]?.product

            if (bestMatch && (isTechnicalQuery || scoredProducts[0].score >= 35)) {
                let answer = ""

                if (isTechnicalQuery && bestMatch.specifications) {
                    const specEntry = Object.entries(bestMatch.specifications).find(([key, val]) =>
                        rawUserText.includes(key.toLowerCase()) ||
                        technicalKeywords.some(tk => key.toLowerCase().includes(tk) && rawUserText.includes(tk))
                    )
                    if (specEntry) {
                        answer = isHindiDetect
                            ? `${bestMatch.title} ke liye ${specEntry[0]} ye hai: ${specEntry[1]}.`
                            : `For ${bestMatch.title}, the ${specEntry[0]} is: ${specEntry[1]}.`
                    }
                }

                if (!answer) {
                    const specs = bestMatch.specifications ?
                        Object.entries(bestMatch.specifications).map(([k, v]) => `${k}: ${v}`).join(', ') : ""
                    answer = isHindiDetect
                        ? `${bestMatch.title} ki details ye hain: ${specs}`
                        : `Here are the specifications for ${bestMatch.title}: ${specs}`
                }

                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: answer + contactMsgText,
                    sender: 'bot',
                    type: 'product-list',
                    products: [bestMatch]
                }
                setMessages(prev => [...prev, botMsg])
                return
            }

            // 3. General Fallback with multiple results
            const topResults = scoredProducts.slice(0, 3).map(item => item.product)

            if (topResults.length > 0) {
                const text = isHindiDetect
                    ? `Mujhe aapke liye ye products mile:`
                    : `I found these products matching your interest:`

                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: text + contactMsgText,
                    sender: 'bot',
                    type: 'product-list',
                    products: topResults
                }
                setMessages(prev => [...prev, botMsg])
            } else {
                const text = isHindiDetect
                    ? "Maaf kijiye, mujhe isse milta-julta koi product nahi mila. Kya aap hamara catalog dekhna chahenge?"
                    : "I couldn't find any specific products matching that. Would you like to browse our catalog or talk to an expert?"

                const botMsg: Message = {
                    id: (Date.now() + 1).toString(),
                    text: text,
                    sender: 'bot',
                    type: 'options'
                }
                setMessages(prev => [...prev, botMsg])
            }
        }, 600)
    }

    const QuickOption = ({ label, onClick, icon: Icon }: any) => (
        <button
            onClick={onClick}
            className="flex items-center gap-2 text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary border border-border/50 rounded-full px-3 py-1.5 transition-colors"
        >
            {Icon && <Icon size={12} />}
            {label}
        </button>
    )

    return (
        <>
            {/* Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
                {/* Tooltip removed to reduce mobile clutter */}

                <button
                    onClick={toggleChat}
                    className="w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                >
                    {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
                </button>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[400px] h-[500px] max-h-[80vh] bg-background border border-border shadow-2xl rounded-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between text-primary-foreground">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">R Storage Assistant</h3>
                                    <span className="flex items-center gap-1 text-[10px] opacity-80">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <Button size="icon" variant="ghost" className="text-white hover:bg-white/20 h-8 w-8" onClick={toggleChat}>
                                <Minimize2 size={16} />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-primary/20 text-primary' : 'bg-secondary text-secondary-foreground'}`}>
                                        {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                                    </div>
                                    <div className={`flex flex-col gap-2 max-w-[80%]`}>
                                        <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                            ? 'bg-primary text-primary-foreground rounded-tr-none'
                                            : 'bg-card border border-border rounded-tl-none shadow-sm'
                                            }`}>
                                            {msg.text}
                                        </div>

                                        {/* Product List */}
                                        {msg.type === 'product-list' && msg.products && (
                                            <div className="flex flex-col gap-2">
                                                {msg.products.map(product => (
                                                    <Link
                                                        key={product.id}
                                                        href={`/products/${product.slug}`}
                                                        className="block bg-card hover:bg-muted/50 border border-border p-2 rounded-lg transition-colors group"
                                                    >
                                                        <div className="flex gap-3">
                                                            <div className="w-12 h-12 bg-muted rounded-md overflow-hidden shrink-0">
                                                                <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <div className="text-xs font-bold text-foreground group-hover:text-primary truncate">{product.title}</div>
                                                                <div className="text-[10px] text-muted-foreground truncate">{product.category}</div>
                                                            </div>
                                                            <ChevronRight size={14} className="text-muted-foreground self-center" />
                                                        </div>
                                                    </Link>
                                                ))}
                                                <Link href="/products" className="text-xs text-center text-primary hover:underline py-1">View all products</Link>
                                            </div>
                                        )}

                                        {/* Options */}
                                        {msg.type === 'options' && (
                                            <div className="flex flex-wrap gap-2 mt-1">
                                                <QuickOption
                                                    label="Chat on WhatsApp"
                                                    icon={MessageCircle}
                                                    onClick={() => window.open(`https://wa.me/${config.contactWhatsApp}?text=${encodeURIComponent(config.whatsappMessage)}`, '_blank')}
                                                />
                                                <QuickOption
                                                    label="Call Us"
                                                    icon={Phone}
                                                    onClick={() => window.location.href = `tel:${config.companyPhone}`}
                                                />
                                                <QuickOption
                                                    label="Email Inquiry"
                                                    icon={Mail}
                                                    onClick={() => window.location.href = "mailto:sandeep@wellindiaracking.com"}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-3 bg-card border-t border-border flex gap-2">
                            <Input
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask about products..."
                                className="flex-1 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary/50"
                            />
                            <Button type="submit" size="icon" disabled={!inputValue.trim()}>
                                <Send size={16} />
                            </Button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
