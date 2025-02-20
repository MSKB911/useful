"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="container min-h-screen px-4 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold sm:text-4xl">About useful</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Revolutionizing the way you breathe, one molecule at a time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 space-y-16"
        >
          <section>
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2024, useful emerged from a simple yet revolutionary idea: what if we could enhance the very
              air we breathe? Our team of scientists and engineers worked tirelessly to develop a proprietary technology
              that allows us to create perfectly balanced air compositions that not only smell amazing but also enhance
              your daily life.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="my-16"
          >
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1280&h=720&auto=format&fit=crop"
                alt="useful technology showcase"
                width={1280}
                height={720}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.section>

          <section>
            <h2 className="text-2xl font-bold">Our Technology</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative overflow-hidden rounded-lg border bg-card p-6"
                >
                  <h3 className="flex items-center text-lg font-bold">
                    <ArrowRight className="mr-2 h-5 w-5 text-primary" />
                    {tech.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              At useful, we believe that the air you breathe should be more than just... air. Our mission is to
              transform everyday breathing into an extraordinary experience that enhances your life, improves your
              wellbeing, and contributes to a more sustainable future.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  )
}

const technologies = [
  {
    title: "Molecular Engineering",
    description:
      "Our proprietary molecular engineering process allows us to create perfect air compositions at the molecular level.",
  },
  {
    title: "Smart Filtration",
    description: "Advanced filtration systems ensure the highest level of purity in every product.",
  },
  {
    title: "Quantum Aromatics",
    description: "Revolutionary quantum technology for creating stable, long-lasting aromatic compounds.",
  },
  {
    title: "Eco Synthesis",
    description: "Sustainable production methods that minimize environmental impact while maximizing quality.",
  },
]

