import {
    Warehouse,
    Layers,
    Box,
    Factory,
    ShoppingBag,
    Truck,
    Package,
    LayoutGrid,
    ShoppingCart,
    CreditCard,
    Zap,
    Grid,
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
    // --- INDUSTRIAL STORAGE RACK ---
    {
        id: "industrial-storage-pallet-rack",
        slug: "industrial-storage-pallet-rack",
        title: "Industrial Storage Pallet Rack",
        category: "Industrial Storage Rack",
        shortDescription: "Heavy-duty pallet racks for industrial warehouses",
        fullDescription: "High-capacity pallet storage racks for efficient warehouse organization. Built with premium steel for maximum load capacity and durability.",
        icon: Warehouse,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        features: ["Adjustable beam levels", "Heavy load capacity", "Corrosion resistant", "Easy assembly"],
        specifications: {
            "Material": "High-grade steel",
            "Finish": "Powder coated",
            "Load Capacity": "2000-3000 kg per level",
            "Height": "Customizable (8ft - 30ft)",
            "Usage": "Warehouse, Industrial"
        }
    },
    {
        id: "cantilever-industrial-storage-racks",
        slug: "cantilever-industrial-storage-racks",
        title: "Cantilever Industrial Storage Racks",
        category: "Industrial Storage Rack",
        shortDescription: "Perfect for long and bulky items storage",
        fullDescription: "Ideal for storing long items like pipes, lumber, and steel bars. Features an open-front design for easy access by forklifts.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1542610114-11843b090886?auto=format&fit=crop&q=80&w=800",
        features: ["No front column obstruction", "Easy loading/unloading", "Adjustable arms", "Heavy-duty construction"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "1500-2500 kg per arm",
            "Arm Length": "600mm - 1200mm",
            "Usage": "Lumber yards, Pipe storage"
        }
    },
    {
        id: "warehouse-storage-rack",
        slug: "warehouse-storage-rack",
        title: "Warehouse Storage Rack",
        category: "Industrial Storage Rack",
        shortDescription: "Complete warehouse storage solution",
        fullDescription: "Versatile storage solution for organized warehouse management. Modular design allows for easy reconfiguration as per needs.",
        icon: Warehouse,
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
        features: ["Modular design", "Easy reconfiguration", "Durable finish", "Space optimization"],
        specifications: {
            "Material": "Cold-rolled steel",
            "Finish": "Epoxy powder coating",
            "Load Capacity": "1000-2000 kg per level",
            "Height": "6ft - 20ft",
            "Usage": "Warehouse, Distribution centers"
        }
    },
    {
        id: "industrial-fifo-flow-storage-rack",
        slug: "industrial-fifo-flow-storage-rack",
        title: "Industrial FIFO Flow Storage Rack",
        category: "Industrial Storage Rack",
        shortDescription: "FIFO system for inventory management",
        fullDescription: "First-in-first-out storage system for inventory rotation. Uses gravity flow systems to reduce picking time and improve efficiency.",
        icon: Box,
        image: "https://images.unsplash.com/photo-1565891741441-6ad96545490a?auto=format&fit=crop&q=80&w=800",
        features: ["Gravity flow system", "Inventory rotation", "Space efficient", "Reduced picking time"],
        specifications: {
            "Material": "Steel with roller tracks",
            "Finish": "Powder coated",
            "Load Capacity": "500-1000 kg per lane",
            "Lanes": "Customizable",
            "Usage": "Food industry, Pharmaceuticals"
        }
    },
    {
        id: "slotted-angle-rack",
        slug: "slotted-angle-rack",
        title: "Slotted Angle Rack",
        category: "Industrial Storage Rack",
        shortDescription: "Versatile bolt-less storage racks",
        fullDescription: "Flexible and economical storage solution with bolt-less assembly. Ideal for retail, office, and small warehouse storage.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1531834685032-c74464ae3c97?auto=format&fit=crop&q=80&w=800",
        features: ["No welding required", "Easy to assemble", "Adjustable shelves", "Cost-effective"],
        specifications: {
            "Material": "MS slotted angles",
            "Finish": "Powder coated",
            "Load Capacity": "100-300 kg per shelf",
            "Height": "4ft - 8ft",
            "Usage": "Retail, Office, Warehouse"
        }
    },

    // --- STORAGE RACK ---
    {
        id: "pigeon-hole-storage-racks",
        slug: "pigeon-hole-storage-racks",
        title: "Pigeon Hole Storage Racks",
        category: "Storage Rack",
        shortDescription: "Multi-compartment storage solution",
        fullDescription: "Organized compartment storage for small parts and documents. Features multiple slots for easy categorization and space-saving design.",
        icon: Box,
        image: "https://images.unsplash.com/photo-1590247813693-5541f1c609fd?auto=format&fit=crop&q=80&w=800",
        features: ["Multiple compartments", "Easy categorization", "Durable construction", "Space-saving design"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Compartments": "12-100 slots",
            "Dimensions": "Customizable",
            "Usage": "Office, Retail, Warehouse"
        }
    },
    {
        id: "supermarket-storage-racks",
        slug: "supermarket-storage-racks",
        title: "Supermarket Storage Racks",
        category: "Storage Rack",
        shortDescription: "Complete supermarket racking system",
        fullDescription: "Professional retail display and storage racks for supermarkets. Attractive design with easy product access and adjustable shelves.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        features: ["Attractive design", "Easy product access", "Adjustable shelves", "Sturdy construction"],
        specifications: {
            "Material": "High-grade steel",
            "Finish": "Powder coated",
            "Load Capacity": "150-250 kg per shelf",
            "Height": "5ft - 7ft",
            "Usage": "Supermarkets, Retail stores"
        }
    },
    {
        id: "wall-display-racks",
        slug: "wall-display-racks",
        title: "Wall Display Racks",
        category: "Storage Rack",
        shortDescription: "Wall-mounted retail display racks",
        fullDescription: "Space-saving wall-mounted display solution for retail shops and showrooms. Optimizes floor space with an attractive display.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1604719312563-8912e9223c6a?auto=format&fit=crop&q=80&w=800",
        features: ["Space optimization", "Easy installation", "Attractive display", "Customizable"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "50-100 kg per shelf",
            "Mounting": "Wall-mounted",
            "Usage": "Retail, Showrooms"
        }
    },
    {
        id: "slotted-angle-shelf-racks",
        slug: "slotted-angle-shelf-racks",
        title: "Slotted Angle Shelf Racks",
        category: "Storage Rack",
        shortDescription: "Flexible slotted angle shelving",
        fullDescription: "Economical shelving solution with adjustable configuration. Features tool-free assembly and durable powder-coated finish.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5f612711?auto=format&fit=crop&q=80&w=800",
        features: ["Tool-free assembly", "Adjustable heights", "Cost-effective", "Durable"],
        specifications: {
            "Material": "MS slotted angles",
            "Finish": "Powder coated",
            "Load Capacity": "100-200 kg per shelf",
            "Shelves": "3-6 levels",
            "Usage": "Warehouse, Retail, Office"
        }
    },
    {
        id: "chemical-storage-rack",
        slug: "chemical-storage-rack",
        title: "Chemical Storage Rack",
        category: "Storage Rack",
        shortDescription: "Safe chemical storage solution",
        fullDescription: "Specialized racks for safe chemical storage. Features corrosion-resistant steel and special coatings for safety compliance.",
        icon: Box,
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
        features: ["Corrosion resistant", "Safety compliant", "Spill containment", "Ventilated design"],
        specifications: {
            "Material": "Corrosion-resistant steel",
            "Finish": "Special coating",
            "Load Capacity": "200-500 kg per shelf",
            "Safety": "Spill containment",
            "Usage": "Laboratories, Chemical plants"
        }
    },

    // --- DISPLAY RACK ---
    {
        id: "double-side-supermarket-display-rack",
        slug: "double-side-supermarket-display-rack",
        title: "Double Side Supermarket Display Rack",
        category: "Display Rack",
        shortDescription: "Dual-sided supermarket display",
        fullDescription: "Double-sided display for maximum product exposure. Features adjustable shelves and high visibility for retail environments.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=800",
        features: ["Double-sided display", "Adjustable shelves", "Attractive design", "High visibility"],
        specifications: {
            "Material": "High-grade steel",
            "Finish": "Powder coated",
            "Sides": "Double-sided",
            "Height": "5ft - 6.5ft",
            "Usage": "Supermarkets, Retail"
        }
    },
    {
        id: "double-sided-supermarket-rack",
        slug: "double-sided-supermarket-rack",
        title: "Double Sided Supermarket Rack",
        category: "Display Rack",
        shortDescription: "Professional retail display system",
        fullDescription: "Heavy-duty double-sided retail racking system. Modular design allows for easy assembly and efficient use of retail space.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
        features: ["Modular design", "Easy assembly", "Durable finish", "Space efficient"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "200 kg per shelf",
            "Configuration": "Modular",
            "Usage": "Supermarkets, Malls"
        }
    },
    {
        id: "double-sided-departmental-store-rack",
        slug: "double-sided-departmental-store-rack",
        title: "Double Sided Departmental Store Rack",
        category: "Display Rack",
        shortDescription: "Full departmental store racking",
        fullDescription: "Complete departmental store display solution. Professional look with high capacity and customizable shelf levels.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&q=80&w=800",
        features: ["Professional look", "High capacity", "Customizable", "Easy maintenance"],
        specifications: {
            "Material": "Steel",
            "Finish": "Powder coated",
            "Shelves": "4-6 levels",
            "Width": "3ft - 4ft",
            "Usage": "Department stores"
        }
    },
    {
        id: "supermarket-display-rack",
        slug: "supermarket-display-rack",
        title: "Supermarket Display Rack",
        category: "Display Rack",
        shortDescription: "Essential supermarket display",
        fullDescription: "Standard supermarket display racking system. Sturdy construction with easy product access and adjustable features.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        features: ["Sturdy construction", "Easy product access", "Attractive finish", "Adjustable"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "150 kg per shelf",
            "Height": "5ft - 7ft",
            "Usage": "Supermarkets"
        }
    },
    {
        id: "pigeon-hole-rack",
        slug: "pigeon-hole-rack",
        title: "Pigeon Hole Rack",
        category: "Display Rack",
        shortDescription: "Organized compartment display",
        fullDescription: "Multi-compartment display and storage rack. Features multiple slots for organized display and durable construction.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1590247813693-5541f1c609fd?auto=format&fit=crop&q=80&w=800",
        features: ["Multiple compartments", "Organized display", "Space-saving", "Durable"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Compartments": "20-50 slots",
            "Dimensions": "Customizable",
            "Usage": "Retail, Office"
        }
    },

    // --- HEAVY DUTY RACKS ---
    {
        id: "heavy-duty-pallet-beam-rack",
        slug: "heavy-duty-pallet-beam-rack",
        title: "Heavy Duty Pallet Beam Rack",
        category: "Heavy Duty Racks",
        shortDescription: "Extra heavy pallet beam system",
        fullDescription: "Industrial-grade pallet racking with beam support. Designed for extreme load capacity and seismic resistance.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        features: ["Extreme load capacity", "Reinforced beams", "Seismic resistant", "Long-lasting"],
        specifications: {
            "Material": "Heavy-gauge steel",
            "Finish": "Industrial coating",
            "Load Capacity": "3000-5000 kg per level",
            "Height": "Up to 40ft",
            "Usage": "Heavy industry, Warehouses"
        }
    },
    {
        id: "heavy-duty-racks-standard",
        slug: "heavy-duty-racks-standard",
        title: "Heavy Duty Racks",
        category: "Heavy Duty Racks",
        shortDescription: "Industrial heavy-duty storage",
        fullDescription: "Standard heavy-duty industrial storage racks. Robust construction with customizable configuration for large warehouses.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?auto=format&fit=crop&q=80&w=800",
        features: ["High load capacity", "Robust construction", "Customizable", "Industrial-grade"],
        specifications: {
            "Material": "High-tensile steel",
            "Finish": "Powder coated",
            "Load Capacity": "2000-4000 kg per level",
            "Configuration": "Customizable",
            "Usage": "Manufacturing, Warehouses"
        }
    },
    {
        id: "heavy-duty-storage-racks",
        slug: "heavy-duty-storage-racks",
        title: "Heavy Duty Storage Racks",
        category: "Heavy Duty Racks",
        shortDescription: "Industrial storage racks",
        fullDescription: "Heavy-duty storage solution for industrial needs. Features epoxy coating for corrosion resistance and adjustable levels.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
        features: ["Heavy-duty design", "Corrosion resistant", "Adjustable", "Safe and secure"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Epoxy coating",
            "Load Capacity": "2500 kg per level",
            "Height": "8ft - 25ft",
            "Usage": "Industrial warehouses"
        }
    },
    {
        id: "heavy-duty-industrial-storage-racks",
        slug: "heavy-duty-industrial-storage-racks",
        title: "Heavy Duty Industrial Storage Racks",
        category: "Heavy Duty Racks",
        shortDescription: "Full industrial racking solution",
        fullDescription: "Complete industrial storage racking system with maximum strength and modular design for long lifespan and safety.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1516140510505-6a583e746765?auto=format&fit=crop&q=80&w=800",
        features: ["Maximum strength", "Safety features", "Modular system", "Long lifespan"],
        specifications: {
            "Material": "Industrial-grade steel",
            "Finish": "Powder coated",
            "Load Capacity": "3000 kg per level",
            "Safety": "Safety pins included",
            "Usage": "Heavy manufacturing"
        }
    },
    {
        id: "ms-heavy-duty-racks",
        slug: "ms-heavy-duty-racks",
        title: "MS Heavy Duty Racks",
        category: "Heavy Duty Racks",
        shortDescription: "MS steel heavy-duty racks",
        fullDescription: "Mild steel heavy-duty racking system. Cost-effective and durable finish for high-strength storage requirements.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1565891741441-6ad96545490a?auto=format&fit=crop&q=80&w=800",
        features: ["MS construction", "High strength", "Cost-effective", "Durable finish"],
        specifications: {
            "Material": "Mild Steel",
            "Finish": "Powder coated",
            "Load Capacity": "2000-3500 kg per level",
            "Thickness": "2mm - 3mm",
            "Usage": "Industrial, Warehouse"
        }
    },

    // --- MEZZANINE FLOOR ---
    {
        id: "industrial-mezzanine-floor",
        slug: "industrial-mezzanine-floor",
        title: "Industrial Mezzanine Floor",
        category: "Mezzanine Floor",
        shortDescription: "Industrial-grade mezzanine system",
        fullDescription: "Heavy-duty mezzanine flooring for industrial applications to maximize vertical storage space and double usable floor area.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=800",
        features: ["Space optimization", "Heavy load capacity", "Custom design", "Easy access"],
        specifications: {
            "Material": "Steel structure",
            "Flooring": "MS plates / Plywood",
            "Load Capacity": "500-1000 kg per sqm",
            "Height": "10ft - 20ft clearance",
            "Usage": "Warehouses, Factories"
        }
    },
    {
        id: "mezzanine-storage-rack",
        slug: "mezzanine-storage-rack",
        title: "Mezzanine Storage Rack",
        category: "Mezzanine Floor",
        shortDescription: "Integrated mezzanine storage",
        fullDescription: "Combined mezzanine and storage racking system for multi-level storage. Ideal for both warehouses and retail environments.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        features: ["Multi-level storage", "Space efficient", "Sturdy construction", "Customizable"],
        specifications: {
            "Material": "Steel",
            "Finish": "Powder coated",
            "Levels": "2-3 levels",
            "Load Capacity": "300-600 kg per sqm",
            "Usage": "Warehouses, Retail"
        }
    },
    {
        id: "modular-mezzanine-floors",
        slug: "modular-mezzanine-floors",
        title: "Modular Mezzanine Floors",
        category: "Mezzanine Floor",
        shortDescription: "Modular mezzanine solution",
        fullDescription: "Flexible modular mezzanine system with bolt-together framework. Relocatable and cost-effective solution for extra space.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5f612711?auto=format&fit=crop&q=80&w=800",
        features: ["Modular design", "Easy installation", "Relocatable", "Cost-effective"],
        specifications: {
            "Material": "Steel framework",
            "Flooring": "Checkered plates",
            "Assembly": "Bolt-together",
            "Load Capacity": "400-800 kg per sqm",
            "Usage": "Warehouses, Offices"
        }
    },
    {
        id: "warehouse-mezzanine-floor",
        slug: "warehouse-mezzanine-floor",
        title: "Warehouse Mezzanine Floor",
        category: "Mezzanine Floor",
        shortDescription: "Full warehouse mezzanine",
        fullDescription: "Complete warehouse mezzanine flooring system with heavy-gauge steel and safety railings. Maximum space utilization for large warehouses.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1565891741441-6ad96545490a?auto=format&fit=crop&q=80&w=800",
        features: ["Maximum space utilization", "Heavy-duty", "Safety railings", "Professional finish"],
        specifications: {
            "Material": "Heavy-gauge steel",
            "Flooring": "Industrial-grade",
            "Load Capacity": "600-1200 kg per sqm",
            "Stairs": "Included",
            "Usage": "Large warehouses"
        }
    },
    {
        id: "slotted-angle-mezzanine-floor",
        slug: "slotted-angle-mezzanine-floor",
        title: "Slotted Angle Mezzanine Floor",
        category: "Mezzanine Floor",
        shortDescription: "Budget-friendly mezzanine",
        fullDescription: "Economical slotted angle mezzanine system. Bolt-less assembly makes it lightweight and flexible for small spaces.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1531834685032-c74464ae3c97?auto=format&fit=crop&q=80&w=800",
        features: ["Economical", "Easy assembly", "Lightweight", "Flexible design"],
        specifications: {
            "Material": "Slotted angles",
            "Flooring": "Plywood / MS sheets",
            "Load Capacity": "200-400 kg per sqm",
            "Assembly": "Bolt-less",
            "Usage": "Small warehouses, Offices"
        }
    },

    // --- PALLET RACK ---
    {
        id: "heavy-duty-pallet-rack",
        slug: "heavy-duty-pallet-rack",
        title: "Heavy Duty Pallet Rack",
        category: "Pallet Rack",
        shortDescription: "Heavy-duty pallet storage",
        fullDescription: "Industrial pallet racking for heavy loads. Features adjustable beams and is fully forklift accessible for efficient distribution.",
        icon: Package,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        features: ["High load capacity", "Adjustable beams", "Forklift accessible", "Durable"],
        specifications: {
            "Material": "High-grade steel",
            "Finish": "Powder coated",
            "Load Capacity": "2500-4000 kg per level",
            "Pallet Size": "Standard / Euro pallets",
            "Usage": "Warehouses, Distribution"
        }
    },
    {
        id: "heavy-duty-steel-rack",
        slug: "heavy-duty-steel-rack",
        title: "Heavy Duty Steel Rack",
        category: "Pallet Rack",
        shortDescription: "Steel pallet racking",
        fullDescription: "All-steel heavy-duty racking system. Engineered for maximum strength and long-lasting performance in heavy industries.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?auto=format&fit=crop&q=80&w=800",
        features: ["All-steel construction", "Maximum strength", "Corrosion resistant", "Long-lasting"],
        specifications: {
            "Material": "100% steel",
            "Finish": "Industrial coating",
            "Load Capacity": "3000 kg per level",
            "Configuration": "Selective",
            "Usage": "Heavy industry"
        }
    },
    {
        id: "drive-in-racking-system",
        slug: "drive-in-racking-system",
        title: "Drive In Racking System",
        category: "Pallet Rack",
        shortDescription: "Drive-in storage system",
        fullDescription: "High-density drive-in pallet racking. Uses LIFO system for maximum space efficiency in cold storage and warehouses.",
        icon: Package,
        image: "https://images.unsplash.com/photo-1580674285054-91550f4a2422?auto=format&fit=crop&q=80&w=800",
        features: ["High-density storage", "LIFO system", "Space efficient", "Forklift accessible"],
        specifications: {
            "Material": "Heavy-gauge steel",
            "Finish": "Powder coated",
            "Load Capacity": "1500-2500 kg per pallet",
            "Depth": "Multiple pallets deep",
            "Usage": "Cold storage, Warehouses"
        }
    },
    {
        id: "light-duty-storage-rack",
        slug: "light-duty-storage-rack",
        title: "Light Duty Storage Rack",
        category: "Pallet Rack",
        shortDescription: "Light-duty storage solution",
        fullDescription: "Light-duty racking for smaller items. Features a lightweight design and easy assembly with adjustable shelves.",
        icon: Package,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        features: ["Lightweight design", "Easy assembly", "Cost-effective", "Adjustable shelves"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "100-300 kg per shelf",
            "Height": "5ft - 8ft",
            "Usage": "Retail, Office, Light warehouse"
        }
    },
    {
        id: "die-racks-ms",
        slug: "die-racks-ms",
        title: "Die Racks MS",
        category: "Pallet Rack",
        shortDescription: "Die and mold storage racks",
        fullDescription: "Specialized racks for die and mold storage. Pull-out drawer design with heavy-duty slides for organized storage.",
        icon: Package,
        image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800",
        features: ["Pull-out drawers", "Heavy-duty slides", "Organized storage", "Space-saving"],
        specifications: {
            "Material": "Mild Steel",
            "Finish": "Powder coated",
            "Load Capacity": "500-1500 kg per drawer",
            "Drawers": "Pull-out design",
            "Usage": "Manufacturing, Tool rooms"
        }
    },
    // --- LONG SPAN SHELVING RACKS ---
    {
        id: "warehouse-long-span-rack",
        slug: "warehouse-long-span-rack",
        title: "Warehouse Long Span Rack",
        category: "Long Span Shelving Racks",
        shortDescription: "Industrial long span racking for warehouses",
        fullDescription: "Long span shelving for bulky and lengthy items. Perfect for storing large boxes, cartons, and oversized products with a robust steel framework.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        features: ["Long span design", "Heavy load capacity", "Adjustable levels", "Durable construction"],
        specifications: {
            "Material": "Steel",
            "Finish": "Powder coated",
            "Load Capacity": "300-600 kg per level",
            "Span": "Up to 3 meters",
            "Usage": "Warehouses, Storage"
        }
    },
    {
        id: "heavy-duty-long-span-rack",
        slug: "heavy-duty-long-span-rack",
        title: "Heavy Duty Long Span Rack",
        category: "Long Span Shelving Racks",
        shortDescription: "Extra heavy long span racking system",
        fullDescription: "Industrial-grade long span system for extreme storage requirements. Features reinforced beams and high-quality industrial coating.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1542610114-11843b090886?auto=format&fit=crop&q=80&w=800",
        features: ["Extra heavy-duty", "Wide span", "Reinforced beams", "Long-lasting"],
        specifications: {
            "Material": "High-grade steel",
            "Finish": "Industrial coating",
            "Load Capacity": "500-800 kg per level",
            "Span": "Up to 3.5 meters",
            "Usage": "Industrial warehouses"
        }
    },
    {
        id: "light-duty-storage-rack-longspan",
        slug: "light-duty-storage-rack-longspan",
        title: "Light Duty Storage Rack",
        category: "Long Span Shelving Racks",
        shortDescription: "Light-duty long span shelving",
        fullDescription: "Economical and versatile shelving for light to medium storage. Easy to assemble and perfect for retail or light warehouse use.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5f612711?auto=format&fit=crop&q=80&w=800",
        features: ["Economical", "Easy assembly", "Adjustable", "Lightweight"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "150-300 kg per level",
            "Span": "Up to 2 meters",
            "Usage": "Retail, Light storage"
        }
    },
    // --- STORAGE BINS ---
    {
        id: "medicine-storage-bins",
        slug: "medicine-storage-bins",
        title: "Medicine Storage Bins",
        category: "Storage Bins",
        shortDescription: "Specialized bins for pharmaceutical storage",
        fullDescription: "Hygienic and organized bin system for medical parts and pharmacy stock. Features stackable design and multiple size options.",
        icon: Box,
        image: "https://images.unsplash.com/photo-1590247813693-5541f1c609fd?auto=format&fit=crop&q=80&w=800",
        features: ["Hygienic design", "Easy identification", "Stackable", "Durable material"],
        specifications: {
            "Material": "Plastic / Metal",
            "Type": "Stackable bins",
            "Sizes": "Multiple sizes",
            "Mounting": "Wall-mounted / Standalone",
            "Usage": "Pharmacies, Hospitals"
        }
    },
    {
        id: "bin-storage-racks",
        slug: "bin-storage-racks",
        title: "Bin Storage Racks",
        category: "Storage Bins",
        shortDescription: "Complete bin storage racking system",
        fullDescription: "A complete racking solution for organized small parts management. Includes modular racks and a variety of bin sizes.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800",
        features: ["Organized storage", "Multiple compartments", "Easy access", "Modular design"],
        specifications: {
            "Material": "Steel frame",
            "Bins": "Plastic bins included",
            "Capacity": "Multiple bin sizes",
            "Configuration": "Modular",
            "Usage": "Warehouses, Workshops"
        }
    },
    // --- SLOTTED ANGLE FOR RACKS ---
    {
        id: "warehouse-slotted-angles-racks",
        slug: "warehouse-slotted-angles-racks",
        title: "Warehouse Slotted Angles Racks",
        category: "Slotted Angle For Racks",
        shortDescription: "Complete slotted angle racking for warehouses",
        fullDescription: "Versatile and customizable slotted angle racking system designed for efficient warehouse storage. Easy to assemble and reconfigure as needed.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        features: ["Versatile design", "Easy assembly", "Customizable", "Cost-effective"],
        specifications: {
            "Material": "MS slotted angles",
            "Thickness": "1.6mm - 2.5mm",
            "Sizes": "38x38mm, 50x50mm",
            "Finish": "Powder coated",
            "Usage": "Warehouses, Storage"
        }
    },
    {
        id: "ms-slotted-angle",
        slug: "ms-slotted-angle",
        title: "MS Slotted Angle",
        category: "Slotted Angle For Racks",
        shortDescription: "Mild steel slotted angle components",
        fullDescription: "High-quality mild steel slotted angles for custom rack building. Provides high strength and durability for various industrial applications.",
        icon: Grid,
        image: "https://images.unsplash.com/photo-1531834685032-c74464ae3c97?auto=format&fit=crop&q=80&w=800",
        features: ["High-quality MS", "Multiple sizes", "Durable finish", "Easy to work with"],
        specifications: {
            "Material": "Mild Steel",
            "Thickness": "1.6mm - 3mm",
            "Sizes": "Various sizes",
            "Finish": "Powder coated / Galvanized",
            "Usage": "DIY racks, Custom builds"
        }
    },
    {
        id: "slotted-angle-standard",
        slug: "slotted-angle-standard",
        title: "Slotted Angle",
        category: "Slotted Angle For Racks",
        shortDescription: "Standard slotted angle for rack building",
        fullDescription: "Multi-purpose standard slotted angles for quick and easy assembly of storage racks. Economical solution for general purpose storage.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1504917595217-d4dc5f612711?auto=format&fit=crop&q=80&w=800",
        features: ["Standard perforation", "Multiple lengths", "Easy assembly", "Affordable"],
        specifications: {
            "Material": "Steel",
            "Thickness": "1.6mm - 2mm",
            "Perforation": "Standard slots",
            "Length": "6ft - 10ft",
            "Usage": "General purpose racks"
        }
    },
    // --- SHOPPING TROLLIES ---
    {
        id: "plastic-shopping-basket",
        slug: "plastic-shopping-basket",
        title: "Plastic Shopping Basket",
        category: "Shopping Trollies",
        shortDescription: "Durable plastic shopping baskets",
        fullDescription: "Lightweight and stackable plastic baskets for convenient shopping. Features ergonomic handles and high-quality durable plastic.",
        icon: ShoppingBag,
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
        features: ["Lightweight", "Durable plastic", "Comfortable handles", "Stackable"],
        specifications: {
            "Material": "High-quality plastic",
            "Capacity": "15-25 liters",
            "Handles": "Ergonomic design",
            "Colors": "Multiple colors",
            "Usage": "Supermarkets, Retail"
        }
    },
    {
        id: "ss-shopping-trolley",
        slug: "ss-shopping-trolley",
        title: "SS Shopping Trolley",
        category: "Shopping Trollies",
        shortDescription: "Stainless steel shopping trolleys",
        fullDescription: "Premium stainless steel trolleys with smooth-rolling wheels and large capacity. Built for durability in high-traffic retail environments.",
        icon: ShoppingCart,
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
        features: ["Stainless steel", "Smooth rolling", "Large capacity", "Durable construction"],
        specifications: {
            "Material": "Stainless Steel",
            "Capacity": "80-120 liters",
            "Wheels": "360° swivel casters",
            "Finish": "Polished / Chrome",
            "Usage": "Supermarkets, Malls"
        }
    },
    // --- CABLE TRAY ---
    {
        id: "gi-perforated-cable-trays",
        slug: "gi-perforated-cable-trays",
        title: "GI Perforated Cable Trays",
        category: "Cable Tray",
        shortDescription: "Galvanized iron perforated cable trays",
        fullDescription: "Industrial-grade GI cable trays for organized and safe wiring. Features corrosion resistance and perforated design for heat dissipation.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=800",
        features: ["Corrosion resistant", "Perforated design", "Easy installation", "Durable"],
        specifications: {
            "Material": "Galvanized Iron",
            "Type": "Perforated",
            "Width": "100mm - 600mm",
            "Thickness": "1.2mm - 2mm",
            "Usage": "Industrial, Commercial"
        }
    },
    {
        id: "perforated-cable-trays",
        slug: "perforated-cable-trays",
        title: "Perforated Cable Trays",
        category: "Cable Tray",
        shortDescription: "Standard perforated cable management trays",
        fullDescription: "Sturdy perforated trays for efficient cable management. Ventilated design ensures safety and easy access to cables.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=800",
        features: ["Ventilated design", "Multiple widths", "Easy cable access", "Sturdy"],
        specifications: {
            "Material": "High-Grade MS / GI",
            "Type": "Perforated / Ladder / Raceways",
            "Width": "50mm - 1200mm",
            "Thickness": "1.2mm - 2mm",
            "Load Capacity": "Supports heavy industrial wiring (up to 50kg/m)",
            "Usage": "Cable management in plants, buildings, and data centers"
        }
    },
    // --- SHELF BINS ---
    {
        id: "panda-shelving-bins",
        slug: "panda-shelving-bins",
        title: "Panda Shelving Bins",
        category: "Shelf Bins",
        shortDescription: "Premium Panda brand shelving bins",
        fullDescription: "High-grade plastic shelving bins from the premium Panda brand. Durable, stackable, and perfect for organizing small parts in workshops and warehouses.",
        icon: Box,
        image: "https://images.unsplash.com/photo-1590247813693-5541f1c609fd?auto=format&fit=crop&q=80&w=800",
        features: ["Durable plastic", "Multiple sizes", "Stackable", "Easy labeling"],
        specifications: {
            "Material": "High-grade plastic",
            "Sizes": "Multiple sizes",
            "Type": "Shelf bins",
            "Colors": "Various colors",
            "Usage": "Workshops, Warehouses"
        }
    },
    // --- WALL RACK ---
    {
        id: "mild-steel-wall-mounted-display-rack",
        slug: "mild-steel-wall-mounted-display-rack",
        title: "Mild Steel Wall Mounted Display Rack",
        category: "Wall Rack",
        shortDescription: "MS wall-mounted display and storage rack",
        fullDescription: "Space-saving mild steel wall-mounted display solution for retail shops and showrooms. Optimizes floor space with an attractive and durable display.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1604719312563-8912e9223c6a?auto=format&fit=crop&q=80&w=800",
        features: ["Space-saving", "Easy installation", "Attractive design", "Customizable"],
        specifications: {
            "Material": "Mild Steel",
            "Finish": "Powder coated",
            "Load Capacity": "50-100 kg per shelf",
            "Mounting": "Wall-mounted",
            "Usage": "Retail, Showrooms"
        }
    },
    // --- CABLE TRAY RACK ---
    {
        id: "cable-tray-racking-systems",
        slug: "cable-tray-racking-systems",
        title: "Cable Tray Racking Systems",
        category: "Cable Tray Rack",
        shortDescription: "Specialized racks for cable tray support",
        fullDescription: "Professional support racking systems for cable trays. Constructed from MS or GI steel to provide sturdy and reliable support for industrial wiring.",
        icon: Zap,
        image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=800",
        features: ["Sturdy support", "Adjustable height", "Easy installation", "Durable"],
        specifications: {
            "Material": "MS / GI Steel",
            "Type": "Support racks",
            "Load Capacity": "As per cable tray",
            "Finish": "Powder coated / Galvanized",
            "Usage": "Industrial, Commercial"
        }
    },
    // --- CASH DESK COUNTER ---
    {
        id: "cash-desk-counter-standard",
        slug: "cash-desk-counter-standard",
        title: "Cash Desk Counter",
        category: "Cash Desk Counter",
        shortDescription: "Professional billing counters for supermarkets",
        fullDescription: "Ergonomically designed checkout counters for retail efficiency. Features professional design with integrated cash drawers and durable laminate finish.",
        icon: CreditCard,
        image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800",
        features: ["Professional design", "Cash drawer", "Display space", "Durable construction"],
        specifications: {
            "Material": "MS Steel with laminate",
            "Dimensions": "Customizable",
            "Features": "Cash drawer, Display area",
            "Finish": "Powder coated",
            "Usage": "Supermarkets, Retail"
        }
    },
    // --- INDUSTRIAL STORAGE RACKS (Additional Batch) ---
    {
        id: "iron-storage-racks",
        slug: "iron-storage-racks",
        title: "Iron Storage Racks",
        category: "Industrial Storage Racks",
        shortDescription: "Heavy iron storage racking systems",
        fullDescription: "Robust iron storage racks designed for high strength and durability in heavy-duty industrial environments. High load capacity for heavy materials.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?auto=format&fit=crop&q=80&w=800",
        features: ["Heavy iron construction", "High strength", "Durable", "Customizable"],
        specifications: {
            "Material": "Iron",
            "Finish": "Powder coated",
            "Load Capacity": "1500-2500 kg per level",
            "Height": "8ft - 20ft",
            "Usage": "Industrial warehouses"
        }
    },
    {
        id: "mild-steel-pigeon-hole-rack",
        slug: "mild-steel-pigeon-hole-rack",
        title: "Mild Steel Pigeon Hole Rack",
        category: "Industrial Storage Racks",
        shortDescription: "MS pigeon hole storage system",
        fullDescription: "Organized mild steel pigeon hole racks for effective compartment storage in industrial and office settings. High-quality MS construction.",
        icon: Box,
        image: "https://images.unsplash.com/photo-1590247813693-5541f1c609fd?auto=format&fit=crop&q=80&w=800",
        features: ["Multiple compartments", "Organized storage", "MS construction", "Durable"],
        specifications: {
            "Material": "Mild Steel",
            "Finish": "Powder coated",
            "Compartments": "20-100 slots",
            "Dimensions": "Customizable",
            "Usage": "Industrial, Office"
        }
    },
    {
        id: "cold-storage-mezzanine-floor",
        slug: "cold-storage-mezzanine-floor",
        title: "Cold Storage Mezzanine Floor",
        category: "Industrial Storage Racks",
        shortDescription: "Specialized mezzanine for cold storage facilities",
        fullDescription: "High-density mezzanine storage solution specifically engineered for cold storage environments. Temperature-resistant and space-efficient.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1580674285054-91550f4a2422?auto=format&fit=crop&q=80&w=800",
        features: ["Insulated design", "Temperature resistant", "Heavy-duty", "Custom built"],
        specifications: {
            "Material": "Insulated steel",
            "Flooring": "Insulated panels",
            "Load Capacity": "400-800 kg per sqm",
            "Temperature": "Sub-zero compatible",
            "Usage": "Cold storage, Freezers"
        }
    },
    {
        id: "heavy-duty-fabric-storage-rack",
        slug: "heavy-duty-fabric-storage-rack",
        title: "Heavy Duty Fabric Storage Rack",
        category: "Industrial Storage Racks",
        shortDescription: "Specialized racks for fabric roll storage",
        fullDescription: "Heavy-duty racks designed specifically for the safe and efficient storage of fabric rolls in the textile industry. Easy roll access with high load capacity.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?auto=format&fit=crop&q=80&w=800",
        features: ["Fabric-friendly design", "Easy roll access", "Heavy-duty", "Customizable"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "500-1000 kg per level",
            "Design": "Cantilever / Beam",
            "Usage": "Textile industry"
        }
    },
    // --- INDUSTRIAL RACK (General) ---
    {
        id: "medium-duty-rack",
        slug: "medium-duty-rack",
        title: "Medium Duty Rack",
        category: "Industrial Rack",
        shortDescription: "Medium-duty industrial storage racks",
        fullDescription: "Versatile medium-duty storage solution for various industrial and warehouse applications. Offers high strength and cost-effective management.",
        icon: Factory,
        image: "https://images.unsplash.com/photo-1516140510505-6a583e746765?auto=format&fit=crop&q=80&w=800",
        features: ["Medium load capacity", "Versatile", "Cost-effective", "Adjustable"],
        specifications: {
            "Material": "MS Steel",
            "Finish": "Powder coated",
            "Load Capacity": "500-1000 kg per level",
            "Height": "6ft - 12ft",
            "Usage": "Warehouses, Factories"
        }
    },
    {
        id: "multi-tier-rack",
        slug: "multi-tier-rack",
        title: "Multi Tier Rack",
        category: "Industrial Rack",
        shortDescription: "Multi-level storage racking system",
        fullDescription: "Multi-tier storage racks designed to maximize vertical space in high-density storage environments. Modular and space-efficient solution.",
        icon: Layers,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        features: ["Multiple levels", "Space efficient", "Easy access", "Modular"],
        specifications: {
            "Material": "Steel",
            "Finish": "Powder coated",
            "Levels": "2-4 tiers",
            "Load Capacity": "300-600 kg per level",
            "Usage": "Warehouses, Retail"
        }
    },
    {
        id: "ware-house-shelf",
        slug: "ware-house-shelf",
        title: "Ware House Shelf",
        category: "Industrial Rack",
        shortDescription: "Standard warehouse shelving units",
        fullDescription: "Heavy-duty warehouse shelves designed for efficient inventory and material management. Sturdy steel construction with adjustable heights.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
        features: ["Standard shelving", "Adjustable", "Durable", "Easy assembly"],
        specifications: {
            "Material": "Steel",
            "Finish": "Powder coated",
            "Load Capacity": "200-500 kg per shelf",
            "Shelves": "3-6 levels",
            "Usage": "Warehouses"
        }
    },
    {
        id: "selective-pallet-rack",
        slug: "selective-pallet-rack",
        title: "Selective Pallet Rack",
        category: "Industrial Rack",
        shortDescription: "Selective access pallet racking system",
        fullDescription: "High-quality selective pallet racks for 100% selectivity in warehouse inventory management. Efficient and flexible for various pallet sizes.",
        icon: Package,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
        features: ["Direct access to all pallets", "FIFO/LIFO compatible", "Flexible", "Efficient"],
        specifications: {
            "Material": "Steel",
            "Finish": "Powder coated",
            "Load Capacity": "2000-3000 kg per level",
            "Access": "100% selective",
            "Usage": "Warehouses"
        }
    },
    // --- SLOTTED ANGLE RACKS (Additional Batch) ---
    {
        id: "slotted-angle-racks-product",
        slug: "slotted-angle-racks-product",
        title: "Slotted Angle Racks",
        category: "Slotted Angle Racks",
        shortDescription: "Versatile slotted angle racks",
        fullDescription: "Standard slotted angle racking systems for general storage needs. Features easy bolt-less assembly and adjustable shelf configurations.",
        icon: LayoutGrid,
        image: "https://images.unsplash.com/photo-1531834685032-c74464ae3c97?auto=format&fit=crop&q=80&w=800",
        features: ["Easy assembly", "No welding", "Adjustable", "Economical"],
        specifications: {
            "Material": "MS slotted angles",
            "Finish": "Powder coated",
            "Load Capacity": "100-300 kg per shelf",
            "Assembly": "Bolt-less",
            "Usage": "General purpose"
        }
    },
    {
        id: "material-handling-racks",
        slug: "material-handling-racks",
        title: "Material Handling Racks",
        category: "Slotted Angle Racks",
        shortDescription: "Material handling storage",
        fullDescription: "Industrial racks designed specifically for material handling and forklift integration. High load capacity for efficient floor management.",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1565891741441-6ad96545490a?auto=format&fit=crop&q=80&w=800",
        features: ["Forklift compatible", "Heavy-duty", "Efficient handling", "Durable"],
        specifications: {
            "Material": "Steel",
            "Finish": "Industrial coating",
            "Load Capacity": "500-1500 kg per level",
            "Design": "Forklift accessible",
            "Usage": "Material handling"
        }
    }
]

export const productCategories = [
    {
        title: "Industrial Storage Rack",
        items: productsData.filter(p => p.category === "Industrial Storage Rack"),
        description: "Heavy-duty industrial storage racks designed for warehouses and manufacturing facilities."
    },
    {
        title: "Storage Rack",
        items: productsData.filter(p => p.category === "Storage Rack"),
        description: "Versatile storage racks for retail, supermarkets, and commercial spaces."
    },
    {
        title: "Display Rack",
        items: productsData.filter(p => p.category === "Display Rack"),
        description: "Professional display racks for supermarkets and retail stores to maximize visibility."
    },
    {
        title: "Heavy Duty Racks",
        items: productsData.filter(p => p.category === "Heavy Duty Racks"),
        description: "Extra heavy-duty racks for industrial applications built to handle extreme loads."
    },
    {
        title: "Mezzanine Floor",
        items: productsData.filter(p => p.category === "Mezzanine Floor"),
        description: "Space-efficient mezzanine flooring systems to double your usable vertical storage."
    },
    {
        title: "Pallet Rack",
        items: productsData.filter(p => p.category === "Pallet Rack"),
        description: "Professional pallet racking systems for efficient warehouse and inventory management."
    },
    {
        title: "Long Span Shelving Racks",
        items: productsData.filter(p => p.category === "Long Span Shelving Racks"),
        description: "Long span shelving for bulky and lengthy items. Perfect for storing large boxes and oversized products."
    },
    {
        title: "Storage Bins",
        items: productsData.filter(p => p.category === "Storage Bins"),
        description: "Organized storage bins for small parts, medicines, and components. Keep your inventory sorted."
    },
    {
        title: "Slotted Angle For Racks",
        items: productsData.filter(p => p.category === "Slotted Angle For Racks"),
        description: "Versatile slotted angle components for custom rack building."
    },
    {
        title: "Shopping Trollies",
        items: productsData.filter(p => p.category === "Shopping Trollies"),
        description: "Shopping trolleys and baskets for supermarkets and retail stores."
    },
    {
        title: "Cable Tray",
        items: productsData.filter(p => p.category === "Cable Tray"),
        description: "Cable management trays for organized wiring and safe installations."
    },
    {
        title: "Shelf Bins",
        items: productsData.filter(p => p.category === "Shelf Bins"),
        description: "Shelf bins for organized small parts storage in workshops and warehouses."
    },
    {
        title: "Wall Rack",
        items: productsData.filter(p => p.category === "Wall Rack"),
        description: "Space-saving wall-mounted racks for retail and storage."
    },
    {
        title: "Cable Tray Rack",
        items: productsData.filter(p => p.category === "Cable Tray Rack"),
        description: "Specialized racks for cable tray support and professional management."
    },
    {
        title: "Cash Desk Counter",
        items: productsData.filter(p => p.category === "Cash Desk Counter"),
        description: "Professional billing counters for supermarkets and retail stores."
    },
    {
        title: "Industrial Storage Racks",
        items: productsData.filter(p => p.category === "Industrial Storage Racks"),
        description: "Comprehensive industrial storage solutions for manufacturing and warehousing needs."
    },
    {
        title: "Industrial Rack",
        items: productsData.filter(p => p.category === "Industrial Rack"),
        description: "General purpose industrial racking for various applications."
    },
    {
        title: "Slotted Angle Racks",
        items: productsData.filter(p => p.category === "Slotted Angle Racks"),
        description: "Economical and versatile slotted angle racking systems."
    }
]
