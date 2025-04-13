"use client"

import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"

export default function CartSummary() {
  const { items, getTotalPrice, getDiscountAmount, getFinalPrice, coupon } = useCart()
  const { t } = useTranslation()

  const subtotal = getTotalPrice()
  const shipping = subtotal > 0 ? 5.0 : 0
  const discount = getDiscountAmount()
  const total = getFinalPrice()

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("cart.title")}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
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
      <CardFooter>
        <Link href="/checkout" className="w-full">
          <Button className="w-full" disabled={items.length === 0}>
            {t("cart.proceedToCheckout")}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
