"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const { items } = useCart()

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Link href="/" className="mr-8 text-xl font-bold">
          useful
        </Link>
        <div className="flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="relative text-sm font-medium">
                {link.href === pathname && (
                  <motion.div layoutId="underline" className="absolute -bottom-[21px] h-[2px] w-full bg-primary" />
                )}
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  )
}

