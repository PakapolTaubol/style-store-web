import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 text-center max-w-md">
      <div className="flex justify-center mb-6">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>
      <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
      <p className="text-muted-foreground mb-8">
        Thank you for your purchase. We've received your order and will process it right away. You'll receive a
        confirmation email shortly.
      </p>
      <div className="grid gap-4">
        <Link href="/">
          <Button className="w-full">Continue Shopping</Button>
        </Link>
        <Link href="/about">
          <Button variant="outline" className="w-full">
            About StyleStore
          </Button>
        </Link>
      </div>
    </div>
  )
}
