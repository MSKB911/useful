import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "@/styles/globals.css"
import { Header } from "@/components/header"
import { CartProvider } from "@/components/cart-provider"
import { Toaster } from "@/components/ui/toaster"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "useful | flavored air",
  description: "Experience air like never before",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-background to-background/80 font-mono">
        <CartProvider>
          <Header />
          <main className="pb-16">{children}</main>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}