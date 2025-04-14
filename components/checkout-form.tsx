"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Building } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useTranslation } from "@/hooks/use-translation"

export default function CheckoutForm() {
  const router = useRouter()
  const { clearCart, applyCoupon } = useCart()
  const { toast } = useToast()
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [couponCode, setCouponCode] = useState("")
  const [couponMessage, setCouponMessage] = useState("")
  const [couponStatus, setCouponStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      clearCart()
      router.push("/checkout/success")
    }, 1500)
  }

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast({
        variant: "destructive",
        title: t("checkout.couponInvalid"),
        description: t("checkout.couponInstructions"),
      })
      return
    }

    const result = applyCoupon(couponCode)

    if (result.success) {
      setCouponStatus("success")
      setCouponMessage(result.message)
      toast({
        title: t("checkout.couponApplied"),
        description: result.message,
      })
    } else {
      setCouponStatus("error")
      setCouponMessage(result.message)
      toast({
        variant: "destructive",
        title: t("checkout.couponInvalid"),
        description: result.message,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("checkout.contact")}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">{t("checkout.firstName")}</Label>
                <Input id="firstName" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">{t("checkout.lastName")}</Label>
                <Input id="lastName" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">{t("checkout.email")}</Label>
              <Input id="email" type="email" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">{t("checkout.phone")}</Label>
              <Input id="phone" type="tel" required />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("checkout.shipping")}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="address">{t("checkout.address")}</Label>
              <Input id="address" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="city">{t("checkout.city")}</Label>
                <Input id="city" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="state">{t("checkout.state")}</Label>
                <Input id="state" required />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="postalCode">{t("checkout.postalCode")}</Label>
                <Input id="postalCode" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="country">{t("checkout.country")}</Label>
                <Input id="country" required defaultValue="United States" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("checkout.couponCode")}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="flex gap-2">
              <Input
                id="couponCode"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="NameIsHandsome"
                className={`flex-grow ${
                  couponStatus === "success" ? "border-green-500" : couponStatus === "error" ? "border-red-500" : ""
                }`}
              />
              <Button type="button" onClick={handleApplyCoupon}>
                {t("checkout.applyCoupon")}
              </Button>
            </div>
            {couponStatus !== "idle" && (
              <p className={couponStatus === "success" ? "text-green-500 text-sm" : "text-red-500 text-sm"}>
                {couponMessage}
              </p>
            )}
            <div className="text-sm text-muted-foreground">
              <p className="font-medium">{t("checkout.couponInstructions")}</p>
              <p>
                Try <strong>NameIsHandsome</strong> for 50% off (max $20)
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("checkout.payment")}</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="card">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  {t("checkout.payment")}
                </TabsTrigger>
                <TabsTrigger value="paypal" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  PayPal
                </TabsTrigger>
              </TabsList>
              <TabsContent value="card" className="mt-4 grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="cardName">{t("checkout.cardName")}</Label>
                  <Input id="cardName" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="cardNumber">{t("checkout.cardNumber")}</Label>
                  <Input id="cardNumber" required placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="expiry">{t("checkout.expiry")}</Label>
                    <Input id="expiry" required placeholder="MM/YY" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="cvc">{t("checkout.cvc")}</Label>
                    <Input id="cvc" required placeholder="123" />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="paypal" className="mt-4">
                <p className="text-sm text-muted-foreground">{t("checkout.paypalMessage")}</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? t("checkout.processing") : t("checkout.placeOrder")}
        </Button>
      </div>
    </form>
  )
}
