"use client"

import type { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useTranslation } from "@/hooks/use-translation"
import { useState, useRef } from "react"
import { ShoppingCart } from "lucide-react"

interface AddToCartButtonProps {
  product: Product
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function AddToCartButton({
  product,
  variant = "default",
  size = "lg",
  className = "",
}: AddToCartButtonProps) {
  const { addToCart } = useCart()
  const { t } = useTranslation()
  const [isAnimating, setIsAnimating] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleAddToCart = () => {
    addToCart(product)
    setIsAnimating(true)

    // Trigger the ripple effect
    if (buttonRef.current) {
      buttonRef.current.classList.add("animate")
    }

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
      if (buttonRef.current) {
        buttonRef.current.classList.remove("animate")
      }
    }, 600)
  }

  return (
    <Button
      ref={buttonRef}
      size={size}
      variant={variant}
      className={`add-to-cart-button ${isAnimating ? "animate-cart-bounce" : ""} ${className}`}
      onClick={handleAddToCart}
    >
      <ShoppingCart className={`h-4 w-4 ${size === "lg" ? "mr-2" : "mr-1"}`} />
      {t("product.addToCart")}
    </Button>
  )
}
