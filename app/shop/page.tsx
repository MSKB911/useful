"use client"

import { motion } from "framer-motion"
import { useCart } from "@/components/cart-provider"
import { useToast } from "@/components/ui/use-toast"

export default function Shop() {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="container min-h-screen px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold sm:text-4xl">Our Products</h1>
        <p className="mt-4 text-muted-foreground">Choose from our selection of premium flavored air compositions.</p>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-lg border bg-card"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const products = [
  {
    id: "1",
    name: "Mountain Fresh",
    description: "Pure mountain air with hints of pine and morning dew.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Ocean Breeze",
    description: "Refreshing sea air with notes of salt and coastal flowers.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Forest Mist",
    description: "Rich forest air with earthy undertones and wild herbs.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1587502537745-84b86da1204f?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Desert Dawn",
    description: "Crisp desert air with subtle hints of sage and minerals.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: "5",
    name: "Tropical Paradise",
    description: "Exotic air blend with notes of tropical flowers and sea spray.",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=400&h=400&auto=format&fit=crop",
  },
  {
    id: "6",
    name: "Urban Escape",
    description: "Purified city air with a touch of garden freshness.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=400&h=400&auto=format&fit=crop",
  },
]

