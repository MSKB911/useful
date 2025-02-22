import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredProducts = [
  {
    id: 1,
    name: "Mountain Fresh",
    description: "Pure mountain air from the Swiss Alps",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Ocean Breeze",
    description: "Refreshing sea air from the Pacific",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "New"
  },
  {
    id: 3,
    name: "Forest Pine",
    description: "Crisp forest air from ancient woodlands",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "Popular"
  }
]

export function FeaturedProducts() {
  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
        Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <div className="relative h-48 w-full mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{product.description}</p>
            </CardContent>
            <CardFooter className="mt-auto">
              <div className="flex items-center justify-between w-full">
                <span className="text-lg font-bold">${product.price}</span>
                <Button>Add to Cart</Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
} 