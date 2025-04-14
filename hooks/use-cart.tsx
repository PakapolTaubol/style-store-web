"use client"

import type React from "react"

import type { Product } from "@/types"
import { createContext, useContext, useEffect, useState } from "react"

interface CartItem extends Product {
  quantity: number
}

interface CouponData {
  code: string
  discount: number
  maxDiscount: number
  applied: boolean
}

interface CartContextType {
  items: CartItem[]
  coupon: CouponData | null
  addToCart: (product: Product) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getDiscountAmount: () => number
  getFinalPrice: () => number
  applyCoupon: (code: string) => { success: boolean; message: string }
  removeCoupon: () => void
}

const CartContext = createContext<CartContextType>({
  items: [],
  coupon: null,
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  getTotalPrice: () => 0,
  getDiscountAmount: () => 0,
  getFinalPrice: () => 0,
  applyCoupon: () => ({ success: false, message: "" }),
  removeCoupon: () => {},
})

const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [coupon, setCoupon] = useState<CouponData | null>(null)
  const [mounted, setMounted] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    const storedCoupon = localStorage.getItem("coupon")

    if (storedCart) {
      try {
        setItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error)
      }
    }

    if (storedCoupon) {
      try {
        setCoupon(JSON.parse(storedCoupon))
      } catch (error) {
        console.error("Failed to parse coupon from localStorage", error)
      }
    }

    setMounted(true)
  }, [])

  // Save cart to localStorage when it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("cart", JSON.stringify(items))

      if (coupon) {
        localStorage.setItem("coupon", JSON.stringify(coupon))
      } else {
        localStorage.removeItem("coupon")
      }
    }
  }, [items, coupon, mounted])

  const addToCart = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)

      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }

      return [...prevItems, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => {
    setItems([])
    setCoupon(null)
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getDiscountAmount = () => {
    if (!coupon || !coupon.applied) return 0

    const subtotal = getTotalPrice()
    const discountAmount = subtotal * (coupon.discount / 100)

    // Cap the discount at the maximum amount
    return Math.min(discountAmount, coupon.maxDiscount)
  }

  const getFinalPrice = () => {
    const subtotal = getTotalPrice()
    const shipping = subtotal > 0 ? 5.0 : 0
    const discount = getDiscountAmount()

    return subtotal + shipping - discount
  }

  const applyCoupon = (code: string) => {
    // Check if the coupon code is valid
    if (code.toLowerCase() === "nameishandsome") {
      const newCoupon = {
        code,
        discount: 50, // 50% discount
        maxDiscount: 20, // Maximum $20 discount
        applied: true,
      }
      setCoupon(newCoupon)
      return {
        success: true,
        message: "Coupon applied: 50% off (max $20)",
      }
    }

    return {
      success: false,
      message: "Invalid coupon code",
    }
  }

  const removeCoupon = () => {
    setCoupon(null)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        coupon,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice,
        getDiscountAmount,
        getFinalPrice,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { useCart }
