"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Trash2 } from "lucide-react"
import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function Cart() {
  const { items, removeItem, clearCart } = useCart()
  const { toast } = useToast()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    setIsCheckingOut(false)
    clearCart()
    toast({
      title: "Order placed!",
      description: "Thank you for your purchase.",
    })
  }

  return (
    <div className="container min-h-screen px-4 pt-24 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Your Cart</h1>
        {items.length === 0 ? (
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">Your cart is empty</p>
            <Link
              href="/shop"
              className="mt-4 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8">
            <div className="space-y-4">
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex items-center justify-between rounded-lg border bg-card p-4"
                >
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    <p className="mt-1 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between border-t pt-4 text-lg font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              {!isCheckingOut ? (
                <Button onClick={() => setIsCheckingOut(true)} className="w-full rounded-full">
                  Proceed to Checkout
                </Button>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Checkout</CardTitle>
                  </CardHeader>
                  <form onSubmit={handleCheckout}>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="card">Card Number</Label>
                        <Input id="card" required />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setIsCheckingOut(false)}>
                        Cancel
                      </Button>
                      <Button type="submit">Place Order</Button>
                    </CardFooter>
                  </form>
                </Card>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  )
}

