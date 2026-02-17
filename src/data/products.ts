import {
    Warehouse,
    Layers,
    Box,
    Factory,
    ShoppingBag,
    Truck,
    Package,
    LayoutGrid,
    LucideIcon
} from "lucide-react"

export interface Product {
    id: string
    slug: string
    title: string
    category: string
    shortDescription: string
    fullDescription: string
    features: string[]
    specifications?: Record<string, string>
    image: string
    icon: LucideIcon
}

export const productsData: Product[] = [
    // --- INDUSTRIAL RACKING ---
    {
        id: "p1",
        slug: "heavy-duty-pallet-rack",
        title: "Heavy Duty Pallet Rack",
        category: "Industrial Racking",
        shortDescription: "Robust storage solution for heavy palletized loads.",
        fullDescription: "Our Heavy Duty Pallet Racking systems are designed for high-density storage and easy accessibility. Engineered for stability and durability, these racks can support massive loads while allowing fork trucks to access every pallet directly.",
        icon: Warehouse,
        image: "/images/products/heavy-duty-rack.jpg",
        features: ["High load-bearing capacity", "Adjustable beam levels", "Durable powder-coated finish", "Safety locking pins"],
        specifications: { "Material": "High-Grade Steel", "Loading": "Up to 3000kg per level", "Finish": "Powder Coated" }
    },
    {
        id: "p2",
        slug: "cantilever-storage-rack",
        title: "Cantilever Storage Rack",
        category: "Industrial Racking",
        shortDescription: "Perfect for long, bulky items like pipes and timber.",
        fullDescription: "Designed for storing long, heavy, or oddly shaped items. With no front columns to obstruct access, it's the ideal solution for lumber, steel bars, and pipes.",
        icon: Factory,
        image: "/images/products/cantilever.jpg",
        features: ["Open access design", "Single or double sided", "Adjustable arm heights", "Easy installation"],
    },
    {
        id: "p3",
        slug: "ms-slotted-angle-rack",
        title: "MS Slotted Angle Rack",
        category: "Industrial Racking",
        shortDescription: "Versatile and cost-effective shelving for light to medium loads.",
        fullDescription: "The most flexible storage system. Easy to assemble and adjust, these racks are perfect for small parts, archives, and retail stockrooms.",
        icon: LayoutGrid,
        image: "/images/products/slotted-angle.jpg",
        features: ["Economical", "Adjustable shelf heights", "Wide range of sizes", "Quick setup"],
    },
    {
        id: "p4",
        slug: "fifo-flow-storage-rack",
        title: "FIFO Flow Storage Rack",
        category: "Industrial Racking",
        shortDescription: "First-In-First-Out gravity-fed storage for inventory rotation.",
        fullDescription: "Automate your stock rotation with gravity-fed flow racks. Products are loaded from one side and slide to the picking side, ensuring perfect FIFO management.",
        icon: Box,
        image: "/images/products/fifo-rack.jpg",
        features: ["Automatic stock rotation", "High density storage", "Reduced picking time", "Ideal for perishables"],
    },

    // --- MEZZANINE FLOORS ---
    {
        id: "p5",
        slug: "industrial-mezzanine-floor",
        title: "Industrial Mezzanine Floor",
        category: "Mezzanine Floor",
        shortDescription: "Double your usable floor space without structural expansion.",
        fullDescription: "Custom-engineered mezzanines create new floor levels within your existing facility. Ideal for extra storage, offices, or production areas.",
        icon: Layers,
        image: "/images/products/mezzanine.jpg",
        features: ["Professional engineering", "Modular design", "Integration with stairs/lifts", "Heavy-duty flooring"],
    },
    {
        id: "p6",
        slug: "slotted-angle-mezzanine",
        title: "Slotted Angle Mezzanine",
        category: "Mezzanine Floor",
        shortDescription: "Cost-effective elevated platforms built using slotted angles.",
        fullDescription: "A versatile way to add vertical space for lighter loads, typically for archived files or light packaging materials.",
        icon: Layers,
        image: "/images/products/slotted-mezzanine.jpg",
        features: ["Lower cost", "Flexible configuration", "Easy to relocate", "Fast assembly"],
    },

    // --- CABLE TRAYS ---
    {
        id: "p7",
        slug: "gi-perforated-cable-tray",
        title: "GI Perforated Cable Tray",
        category: "Cable Tray",
        shortDescription: "Durable GI trays for safe and organized cable management.",
        fullDescription: "High-quality galvanized iron trays designed to protect and organize power and data cables in industrial environments.",
        icon: Package,
        image: "/images/products/cable-tray.jpg",
        features: ["Corrosion resistant", "Excellent ventilation", "Smooth edges for safety", "Easy to install"],
    },
    {
        id: "p8",
        slug: "ladder-type-cable-tray",
        title: "Ladder Type Cable Tray",
        category: "Cable Tray",
        shortDescription: "Ideal for supporting large volumes of high-voltage cabling.",
        fullDescription: "Strong ladder-like design provides maximum support for heavy cables while allowing for ease of maintenance and ventilation.",
        icon: Package,
        image: "/images/products/ladder-tray.jpg",
        features: ["High weight capacity", "Easy cable routing", "Open design for heat dissipation"],
    },

    // --- MATERIAL HANDLING ---
    {
        id: "p9",
        slug: "hydraulic-manual-stacker",
        title: "Hydraulic Manual Stacker",
        category: "Material Handling",
        shortDescription: "Compact and easy-to-use manual lifting equipment.",
        fullDescription: "Perfect for loading/unloading vehicles and moving pallets in small warehouses. reliable hydraulic lift mechanism.",
        icon: Truck,
        image: "/images/products/stacker.jpg",
        features: ["Manual operation", "Heavy-duty wheels", "Safety guards", "Smooth lifting"],
    },
    {
        id: "p10",
        slug: "electric-pallet-truck",
        title: "Electric Pallet Truck",
        category: "Material Handling",
        shortDescription: "Powered pallet movement for high-volume warehouses.",
        fullDescription: "Reduce operator fatigue and increase speed with our fully powered electric pallet trucks. Features ergonomic controls and long battery life.",
        icon: Truck,
        image: "/images/products/electric-truck.jpg",
        features: ["Fully powered drive/lift", "Safety stop button", "Fast charging", "Compact design"],
    },

    // --- SUPERMARKET & DISPLAY ---
    {
        id: "p11",
        slug: "grocery-store-rack",
        title: "Grocery Store Rack",
        category: "Display Racks",
        shortDescription: "Professional display shelving for retail environments.",
        fullDescription: "Sleek and attractive shelving designed to showcase products effectively in grocery stores and departmental shops.",
        icon: ShoppingBag,
        image: "/images/products/grocery-rack.jpg",
        features: ["Attractive finish", "Adjustable shelves", "Sturdy construction", "Easy browsing"],
    },
    {
        id: "p12",
        slug: "double-sided-display-rack",
        title: "Double Sided Display Rack",
        category: "Display Racks",
        shortDescription: "Maximize retail space with two-sided aisle shelving.",
        fullDescription: "Create efficient store aisles with double-sided shelving units. Features adjustable levels and professional powder coating.",
        icon: ShoppingBag,
        image: "/images/products/double-display.jpg",
        features: ["Space optimized", "Modular design", "High visibility", "Durable"],
    },

    // --- PLASTIC PRODUCTS ---
    {
        id: "p13",
        slug: "industrial-plastic-crate",
        title: "Industrial Plastic Crate",
        category: "Plastic Products",
        shortDescription: "Heavy-duty stackable crates for parts and food storage.",
        fullDescription: "FSSAI approved food-grade plastic crates. Designed for rough handling, stacking, and easy cleaning.",
        icon: Box,
        image: "/images/products/plastic-crate.jpg",
        features: ["Impact resistant", "Stackable", "Food grade", "UV stabilized"],
    },
    {
        id: "p14",
        slug: "plastic-pallet",
        title: "Quality Plastic Pallet",
        category: "Plastic Products",
        shortDescription: "Hygienic and lightweight alternative to wooden pallets.",
        fullDescription: "Multi-use plastic pallets that are easy to sterilize. Perfect for pharmaceutical, chemical, and food industries.",
        icon: Box,
        image: "/images/products/plastic-pallet.jpg",
        features: ["Lightweight", "Moisture proof", "No splinters", "Recyclable"],
    }
]

export const productCategories = [
    {
        title: "Industrial Racking",
        items: productsData.filter(p => p.category === "Industrial Racking"),
        description: "Heavy-duty storage systems for every warehouse need."
    },
    {
        title: "Mezzanine Floors",
        items: productsData.filter(p => p.category === "Mezzanine Floor"),
        description: "Expand your vertical space efficiently."
    },
    {
        title: "Cable Tray Rack",
        items: productsData.filter(p => p.category === "Cable Tray"),
        description: "Professional industrial cable management solutions."
    },
    {
        title: "Material Handling",
        items: productsData.filter(p => p.category === "Material Handling"),
        description: "Equipment to move and lift with ease."
    },
    {
        title: "Retail & Display",
        items: productsData.filter(p => p.category === "Display Racks"),
        description: "Showcase your products in style."
    },
    {
        title: "Plastic Storage",
        items: productsData.filter(p => p.category === "Plastic Products"),
        description: "Durable crates and pallets for industry."
    }
]
