"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { createElement } from "react"
import { Shield, Leaf, Smile, Zap, Settings, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-grid" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-5xl px-4 pt-20 text-center sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl">
            breathe{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">better</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Experience air like never before with our scientifically crafted flavored air compositions. Elevate your
            breathing experience.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full bg-muted px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/90"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 mt-16 flex w-full justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="relative aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=1280&h=720&auto=format&fit=crop"
              alt="useful air product showcase"
              width={1280}
              height={720}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </motion.div>
      </div>
      <section className="relative py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl">
                Why choose{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">useful</span>
                ?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our revolutionary air enhancement technology brings you the future of breathing.
              </p>
            </motion.div>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-lg border bg-card p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  {createElement(feature.icon, { className: "h-6 w-6 text-primary" })}
                </div>
                <h3 className="mt-4 text-lg font-bold">{feature.title}</h3>
                <p className="mt-2 text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const features = [
  {
    title: "Scientifically Crafted",
    description:
      "Each flavor is meticulously developed by our team of scientists for the perfect breathing experience.",
    icon: Sparkles,
  },
  {
    title: "Premium Quality",
    description: "We use only the highest quality ingredients and advanced filtration technology.",
    icon: Shield,
  },
  {
    title: "Sustainable",
    description: "Our production process is 100% sustainable and environmentally friendly.",
    icon: Leaf,
  },
  {
    title: "Mood Enhancement",
    description: "Specially designed compositions to enhance your mood and productivity.",
    icon: Smile,
  },
  {
    title: "Smart Delivery",
    description: "Advanced delivery systems ensure the perfect amount of flavored air.",
    icon: Zap,
  },
  {
    title: "Customizable",
    description: "Create your own custom blends or choose from our curated collections.",
    icon: Settings,
  },
]

