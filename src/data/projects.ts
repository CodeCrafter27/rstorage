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
        image: "bg-slate-800",
        client: "AutoCorp India",
        completionDate: "2024",
        challenge: "The client faced severe space constraints and inefficient inventory retrieval times due to rapid production growth. Their existing block stacking method was unsafe and limited vertical storage utilization.",
        solution: "We designed and installed a high-bay Selective Pallet Racking system with 7 beam levels, optimizing the 12-meter clear height of the warehouse. We also integrated a barcode navigation system for forklifts.",
        result: "Storage capacity increased by 200%, and retrieval times were cut by 40%. The organized layout significantly improved warehouse safety and inventory accuracy."
    },
    {
        id: "2",
        slug: "ecommerce-fulfillment-hub",
        title: "E-commerce Fulfillment Hub",
        location: "Gurgaon, Haryana",
        category: "Automation",
        description: "Integrated conveyor and sorting system with multi-tier shelving for rapid order processing.",
        image: "bg-blue-900",
        client: "QuickKart",
        completionDate: "2023",
        challenge: "With daily order volumes spiking during sales, QuickKart needed a system to handle high-velocity small parts picking while maximizing the footprint of their new distribution center.",
        solution: "We implemented a Multi-Tier Shelving system integrated with automated conveyors. The 3-level structure tripled the pick-face area, allowing for simultaneous picking on all levels.",
        result: "Order processing speed increased by 300% during peak production. The vertical expansion saved the client rental costs equivalent to a new facility."
    },
    {
        id: "3",
        slug: "pharmaceutical-cold-storage",
        title: "Pharmaceutical Cold Storage",
        location: "Hyderabad, Telangana",
        category: "Racking",
        description: "Temperature-controlled mobile racking solution ensuring compliance with safety standards.",
        image: "bg-cyan-900",
        client: "MedLife Pharma",
        completionDate: "2024",
        challenge: "Storing temperature-sensitive vaccines required a solution that minimized energy costs while maximizing storage density in an expensive cold room environment.",
        solution: "We installed a Mobile Pallet Racking system that eliminates fixed aisles, compacting the storage area. The system is equipped with cold-resistant electronic controls and safety sensors.",
        result: "Storage density increased by 80% compared to static racking. The reduced volumetric footprint led to a 25% reduction in cooling energy costs."
    },
    {
        id: "4",
        slug: "heavy-machinery-warehouse",
        title: "Heavy Machinery Warehouse",
        location: "Chennai, Tamil Nadu",
        category: "Cantilever",
        description: "Heavy-duty cantilever racks for storing steel pipes and structural beams.",
        image: "bg-slate-700",
        client: "SteelWorks Ltd",
        completionDate: "2023",
        challenge: "Storing 12-meter long steel pipes and I-beams on the floor was hazardous and occupied 60% of the warehouse floor space, obstructing movement.",
        solution: "We engineered heavy-duty Double-Sided Cantilever Racks with a 5-ton load capacity per arm level. The system utilized the warehouse vertical space effectively.",
        result: "Floor space utilization improved by 50%, promoting safer forklift movement. Accessibility to different stock items became 100% immediate."
    },
    {
        id: "5",
        slug: "retail-stockroom-mezzanine",
        title: "Retail Stockroom Mezzanine",
        location: "Bangalore, Karnataka",
        category: "Mezzanine",
        description: "Double-height mezzanine floor adding 5,000 sq ft of storage space without expanding footprint.",
        image: "bg-gray-800",
        client: "RetailGiant",
        completionDate: "2024",
        challenge: "A retail store in a prime location needed more back-of-house storage for apparel but could not afford additional real estate rental in the area.",
        solution: "We constructed a structural steel Mezzanine Floor over the existing stockroom. The design included a goods lift and modular shelving on the upper deck.",
        result: "Usable storage area doubled (an additional 5,000 sq ft) without any increase in rent. The store could verify stock faster, reducing stockouts on the sales floor."
    },
    {
        id: "6",
        slug: "electronics-assembly-unit",
        title: "Electronics Assembly Unit",
        location: "Noida, UP",
        category: "Shelving",
        description: "Anti-static shelving units for sensitive electronic components.",
        image: "bg-indigo-900",
        client: "ElectroTech",
        completionDate: "2023",
        challenge: "Static electricity discharge was damaging sensitive PCBs during storage and handling in the assembly line buffer area.",
        solution: "We supplied ESD (Electrostatic Discharge) Safe Shelving units with conductive bins and grounded frames. The layout was optimized for FIFO inventory flow.",
        result: "Component damage rates dropped to near zero. The organized bin system improved assembly line feeding efficiency by 15%."
    }
]
