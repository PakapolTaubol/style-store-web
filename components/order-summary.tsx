"use client"

import { useCart } from "@/hooks/use-cart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { useTranslation } from "@/hooks/use-translation"

export default function OrderSummary() {
  const { items, getTotalPrice, getDiscountAmount, getFinalPrice, coupon } = useCart()
  const { t } = useTranslation()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 5.0 : 0
  const discount = getDiscountAmount()
  const total = getFinalPrice()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("cart.subtotal")}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="max-h-[300px] overflow-auto pr-2">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-md border bg-white">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                  sizes="64px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{item.title}</p>
                <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
              </div>
              <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <Separator />

        <div className="flex items-center justify-between">
          <span>{t("cart.subtotal")}</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {coupon && coupon.applied && (
          <div className="flex items-center justify-between text-green-600">
            <span>{t("checkout.couponDiscount")}</span>
            <span>-${discount.toFixed(2)}</span>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span>{t("cart.shipping")}</span>
          <span>${shipping.toFixed(2)}</span>
        </div>

        <Separator />

        <div className="flex items-center justify-between font-medium">
          <span>{t("cart.total")}</span>
          <span>${total.toFixed(2)}</span>
        </div>

        {coupon && coupon.applied && (
          <div className="mt-2 p-2 bg-green-50 text-green-800 text-sm rounded-md">
            <p className="font-medium">Coupon "{coupon.code}" applied!</p>
            <p>50% discount (maximum $20)</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
