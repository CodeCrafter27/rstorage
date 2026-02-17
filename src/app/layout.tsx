import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { localBusinessSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "R Storage | Industrial Racking & Warehouse Storage Solutions",
  description: "Leading manufacturer of Heavy Duty Pallet Racks, Mezzanine Floors, and Industrial Storage Systems in India. Optimize your warehouse space today.",
  keywords: ["Pallet Racking", "Mezzanine Floor", "Industrial Shelving", "Warehouse Storage", "Heavy Duty Racks", "Storage Solutions India"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rstorage.in",
    title: "R Storage | Upgrade Your Warehouse Efficiency",
    description: "Maximize storage capacity with our custom-engineered racking systems. Trusted by top industries.",
    siteName: "R Storage Solutions",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
