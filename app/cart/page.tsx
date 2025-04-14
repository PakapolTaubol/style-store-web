import CartItems from "@/components/cart-items"
import CartSummary from "@/components/cart-summary"

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CartItems />
        </div>

        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  )
}
