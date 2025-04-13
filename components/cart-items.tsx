"use client"

import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Trash2, MinusCircle, PlusCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function CartItems() {
  const { items, removeFromCart, updateQuantity } = useCart()

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-6">
          <div className="relative aspect-square h-24 w-24 min-w-[6rem] overflow-hidden rounded-md border bg-white">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-contain p-2"
              sizes="96px"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div className="flex justify-between">
              <div>
                <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                  {item.title}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">${item.price.toFixed(2)}</p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => removeFromCart(item.id)}>
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Remove</span>
              </Button>
            </div>

            <div className="flex items-center mt-4">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                disabled={item.quantity <= 1}
              >
                <MinusCircle className="h-4 w-4" />
                <span className="sr-only">Decrease quantity</span>
              </Button>
              <span className="w-12 text-center">{item.quantity}</span>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <PlusCircle className="h-4 w-4" />
                <span className="sr-only">Increase quantity</span>
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Separator />
    </div>
  )
}
