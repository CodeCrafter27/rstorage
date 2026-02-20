export interface Project {
    id: string
    slug: string
    title: string
    location: string
    category: "Racking" | "Mezzanine" | "Automation" | "Shelving" | "Cantilever"
    description: string
    image: string
    client?: string
    completionDate?: string
    challenge: string
    solution: string
    result: string
}

export const projectsData: Project[] = [
    {
        id: "1",
        slug: "automotive-parts-distribution-center",
        title: "Automotive Parts Distribution Center",
        location: "Pune, Maharashtra",
        category: "Racking",
        description: "High-density pallet racking system for a leading automotive manufacturer, increasing storage capacity by 200%.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
        client: "AutoCorp India",
        completionDate: "2024",
        challenge: "Inefficient space utilization and slow retrieval times in the primary warehouse.",
        solution: "Installation of heavy-duty Selective Pallet Racking with optimized aisle widths.",
        result: "200% increase in storage density and 40% improvement in picking speed."
    },
    {
        id: "2",
        slug: "ecommerce-fulfillment-hub",
        title: "E-commerce Fulfillment Hub",
        location: "Gurgaon, Haryana",
        category: "Automation",
        description: "Integrated conveyor and sorting system with multi-tier shelving for rapid order processing.",
        image: "https://images.unsplash.com/photo-1586864387917-f5da555d9df9?auto=format&fit=crop&q=80&w=1000",
        client: "QuickKart",
        challenge: "High volume of small-item orders causing bottlenecks during peak hours.",
        solution: "Implementation of a multi-tier shelving system with automated conveyor integration.",
        result: "3x increase in order processing capacity and reduced manual handling errors."
    },
    {
        id: "3",
        slug: "pharmaceutical-cold-storage",
        title: "Pharmaceutical Cold Storage",
        location: "Hyderabad, Telangana",
        category: "Racking",
        description: "Temperature-controlled mobile racking solution ensuring compliance with safety standards.",
        image: "https://images.unsplash.com/photo-1530035415910-f4edc5c3673e?auto=format&fit=crop&q=80&w=1000",
        client: "MedLife Pharma",
        challenge: "Expensive cold-room real estate required maximum possible storage density.",
        solution: "Mobile Pallet Racking system to eliminate fixed aisles and maximize space.",
        result: "85% more pallet positions in the same footprint with energy-optimized operations."
    },
    {
        id: "4",
        slug: "heavy-machinery-warehouse",
        title: "Heavy Machinery Warehouse",
        location: "Chennai, Tamil Nadu",
        category: "Cantilever",
        description: "Heavy-duty cantilever racks for storing steel pipes and structural beams.",
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5f612711?auto=format&fit=crop&q=80&w=1000",
        client: "SteelWorks Ltd",
        challenge: "Safe storage of long, heavy profiles that were previously stored on the floor.",
        solution: "Custom-engineered heavy-duty Cantilever Racking with high load capacity per arm.",
        result: "100% immediate accessibility to all stock items and safer forklift maneuvers."
    },
    {
        id: "5",
        slug: "retail-stockroom-mezzanine",
        title: "Retail Stockroom Mezzanine",
        location: "Bangalore, Karnataka",
        category: "Mezzanine",
        description: "Double-height mezzanine floor adding 5,000 sq ft of storage space without expanding footprint.",
        image: "https://images.unsplash.com/photo-1590247813693-5541f1c609fd?auto=format&fit=crop&q=80&w=1000",
        client: "RetailGiant",
        challenge: "Need for more storage space in a high-rent city location without moving facilities.",
        solution: "Structural steel mezzanine floor to utilize vertical height for additional stock area.",
        result: "Doubled the usable floor area, saving significant relocation and rental costs."
    },
    {
        id: "6",
        slug: "electronics-assembly-unit",
        title: "Electronics Assembly Unit",
        location: "Noida, UP",
        category: "Shelving",
        description: "Anti-static shelving units for sensitive electronic components.",
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1000&auto=format&fit=crop",
        client: "ElectroTech",
        challenge: "Damage to sensitive electronic components from static discharge during storage.",
        solution: "ESD-safe Shelving systems with grounded frames and conductive storage bins.",
        result: "Reduction in component loss rates and improved inventory organization."
    }
]
