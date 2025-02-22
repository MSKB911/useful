import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState } from "react"

const featuredProducts = [
  {
    id: 1,
    name: "Mountain Fresh",
    description: "Pure mountain air from the Swiss Alps",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "Best Seller",
    tags: ["Premium", "Best Seller"]
  },
  {
    id: 2,
    name: "Ocean Breeze",
    description: "Refreshing sea air from the Pacific",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "New",
    tags: ["New Arrival", "Limited Edition"]
  },
  {
    id: 3,
    name: "Forest Pine",
    description: "Crisp forest air from ancient woodlands",
    price: 27.99,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "Popular",
    tags: ["Popular", "Organic"]
  },
  {
    id: 4,
    name: "Lavender Fields",
    description: "Calming air from French lavender fields",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "Premium",
    tags: ["Premium", "Relaxing"]
  },
  {
    id: 5,
    name: "Desert Night",
    description: "Cool night air from the Sahara",
    price: 26.99,
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "Limited",
    tags: ["Limited Edition", "Exotic"]
  },
  {
    id: 6,
    name: "Rainforest Mist",
    description: "Tropical air from the Amazon",
    price: 28.99,
    image: "https://images.unsplash.com/photo-1449023859676-22e61b0c0695?q=80&w=1280&h=720&auto=format&fit=crop",
    badge: "Organic",
    tags: ["Organic", "Tropical"]
  }
]

const allTags = Array.from(new Set(featuredProducts.flatMap(product => product.tags)))

export function FeaturedProducts() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const filteredProducts = selectedTag
    ? featuredProducts.filter(product => product.tags.includes(selectedTag))
    : featuredProducts

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
        Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Products</span>
      </h2>
      
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        <Button 
          variant={selectedTag === null ? "default" : "outline"}
          onClick={() => setSelectedTag(null)}
          className="whitespace-nowrap"
        >
          All Products
        </Button>
        {allTags.map(tag => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "default" : "outline"}
            onClick={() => setSelectedTag(tag)}
            className="whitespace-nowrap"
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="relative group">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
        >
          {filteredProducts.map((product) => (
            <Card key={product.id} className="flex flex-col overflow-hidden min-w-[300px] max-w-[300px]">
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                  {product.badge}
                </Badge>
              </div>
              <CardHeader className="pt-6">
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Button className="px-6">Add to Cart</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm border rounded-full p-2 hidden group-hover:block hover:bg-background transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm border rounded-full p-2 hidden group-hover:block hover:bg-background transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
} 