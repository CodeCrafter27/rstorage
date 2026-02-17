export interface Testimonial {
    id: string
    name: string
    role: string
    company: string
    content: string
    image?: string
}

export const testimonialsData: Testimonial[] = [
    {
        id: "1",
        name: "Rajesh Kumar",
        role: "Operations Manager",
        company: "AutoCorp India",
        content: "R Storage revolutionized our warehouse layout. The pallet racking system they installed has doubled our capacity and improved retrieval times significantly.",
    },
    {
        id: "2",
        name: "Sneha Gupta",
        role: "Logistics Head",
        company: "QuickKart",
        content: "Professional, timely, and high-quality work. Their automation solutions helped us streamline our fulfillment process during peak seasons.",
    },
    {
        id: "3",
        name: "Amit Patel",
        role: "Plant Director",
        company: "SteelWorks Ltd",
        content: "The heavy-duty racks are rock solid. We deal with tons of steel, and safety is paramount. R Storage delivered exactly what we needed.",
    }
]
