import ProductCard from "./product-card"
import { getProducts } from "@/lib/api"

export default async function ProductList({ category }: { category?: string }) {
  // Use the improved getProducts function
  const products = await getProducts()

  // Filter products by category if a category is specified
  const filteredProducts =
    category && category !== "all" ? products.filter((product) => product.category === category) : products

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-medium mb-4">No products found</h2>
        <p className="text-muted-foreground">
          We couldn't find any products in this category. Please try another category.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
