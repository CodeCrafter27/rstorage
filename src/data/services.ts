import { Warehouse, Layers, Box, Cpu, HardHat, Factory, LucideIcon } from "lucide-react"

export interface Service {
    id: string
    slug: string
    title: string
    shortDescription: string
    fullDescription: string
    icon: LucideIcon
    image: string // In real app, path to image
    features: string[]
    benefits: { title: string; description: string }[]
}

export const servicesData: Service[] = [
    {
        id: "1",
        slug: "pallet-racking",
        title: "Pallet Racking",
        shortDescription: "Heavy-duty storage systems designed for efficient palletized inventory management.",
        fullDescription: "Our Pallet Racking systems are the backbone of modern warehousing. Designed for high-density storage and easy accessibility, they can be customized to fit any warehouse layout. Whether you need Selective Racking for 100% accessibility or Drive-In Racking for maximum density, we have the solution.",
        icon: Warehouse,
        image: "bg-slate-800",
        features: [
            "Selective, Drive-In, and Push-Back configurations",
            "High-grade steel construction",
            "Adjustable beam levels",
            "Powder-coated finish for durability"
        ],
        benefits: [
            { title: "Vertical Storage", description: "Maximize your vertical storage space effectively." },
            { title: "Organization", description: "Improve inventory organization and tracking." },
            { title: "Safety", description: "Enhance warehouse safety with certified systems." }
        ]
    },
    {
        id: "2",
        slug: "mezzanine-floors",
        title: "Mezzanine Floors",
        shortDescription: "Double your floor space without moving. Custom-built raised platforms for storage or office use.",
        fullDescription: "Unlock the potential of your vertical space with our custom-engineered Mezzanine Floors. Perfect for creating additional storage areas, offices, or production zones without the cost of expanding your building's footprint. Our structural steel mezzanines are built to last and meet all safety codes.",
        icon: Layers,
        image: "bg-gray-800",
        features: [
            "Custom load-bearing capacities",
            "Integration with stairs, lifts, and chutes",
            "Modular design for future expansion",
            "Variety of flooring options (steel, ply, grating)"
        ],
        benefits: [
            { title: "Space Doubling", description: "Double your usable floor area without relocation." },
            { title: "Cost Effective", description: "A budget-friendly alternative to building expansion." },
            { title: "Quick Install", description: "Fast installation with minimal business disruption." }
        ]
    },
    {
        id: "3",
        slug: "cantilever-racks",
        title: "Cantilever Racks",
        shortDescription: "Ideal for storing long and bulky items like pipes, lumber, and steel bars.",
        fullDescription: "Designed specifically for storing long, bulky, or oddly shaped items that don't fit on standard pallets. Our Cantilever Racking systems feature load-bearing arms anchored to a central column, providing open, unobstructed access for forklifts.",
        icon: Factory,
        image: "bg-slate-700",
        features: [
            "Single or double-sided configurations",
            "Adjustable arm heights",
            "Heavy-duty column construction",
            "Indoor and outdoor options"
        ],
        benefits: [
            { title: "Long Item Storage", description: "Perfect for pipes, lumber, and long metal bars." },
            { title: "Easy Access", description: "Open design allows for quick loading and unloading." },
            { title: "Durability", description: "Heavy-duty construction for industrial environments." }
        ]
    },
    {
        id: "4",
        slug: "industrial-shelving",
        title: "Industrial Shelving",
        shortDescription: "Versatile shelving solutions for small parts, tools, and automotive components.",
        fullDescription: "For non-palletized inventory, our Industrial Shelving systems offer the perfect balance of strength and versatility. Ideal for automotive parts, retail stockrooms, and archive storage. Available in various sizes and capacities to suit your specific needs.",
        icon: Box,
        image: "bg-indigo-900",
        features: [
            "Boltless or bolted assembly systems",
            "Adjustable shelf heights",
            "Wide range of accessories (bins, dividers)",
            "Multi-tier shelving options"
        ],
        benefits: [
            { title: "Parts Organization", description: "Highly efficient storage for small parts and tools." },
            { title: "Manual Picking", description: "Designed for easy manual access and picking." },
            { title: "Quick Assembly", description: "Fast and often tool-free setup for modular needs." }
        ]
    },
    {
        id: "5",
        slug: "automated-storage",
        title: "Automated Storage",
        shortDescription: "Integration with AS/RS systems for high-density, automated inventory retrieval.",
        fullDescription: "Step into the future of warehousing with our Automated Storage and Retrieval Systems (AS/RS). We integrate advanced racking with automation technology to deliver unparalleled speed, accuracy, and density. Perfect for high-volume distribution centers.",
        icon: Cpu,
        image: "bg-blue-900",
        features: [
            "Integration with shuttle systems and stacker cranes",
            "High-precision tracking",
            "Software integration (WMS)",
            "Safety sensors and barriers"
        ],
        benefits: [
            { title: "Efficiency", description: "Significantly reduce labor costs and picking errors." },
            { title: "24/7 Operation", description: "Keep your warehouse running around the clock." },
            { title: "Max Density", description: "Achieve the highest possible storage density." }
        ]
    },
    {
        id: "6",
        slug: "installation-amc",
        title: "Installation & AMC",
        shortDescription: "Professional installation services and annual maintenance contracts for safety compliance.",
        fullDescription: "Our relationship doesn't end at delivery. Our certified installation teams ensure your system is set up safely and correctly. We also offer Annual Maintenance Contracts (AMC) to inspect, repair, and certify the structural integrity of your racking systems.",
        icon: HardHat,
        image: "bg-cyan-900",
        features: [
            "Certified and experienced installation crews",
            "Safety audits and structural inspections",
            "Repair and replacement services",
            "Relocation services"
        ],
        benefits: [
            { title: "Compliance", description: "Ensure your systems meet all safety standards." },
            { title: "Longevity", description: "Prolong the operational life of your storage equipment." },
            { title: "Peace of Mind", description: "Expert support and regular safety certifications." }
        ]
    }
]
