import ProductList from "@/components/product-list"
import CategoryFilter from "@/components/category-filter"
import { Suspense } from "react"
import { ProductSkeleton } from "@/components/product-skeleton"
import { HomeContent } from "./home-content"

export default function Home({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const category = searchParams.category || undefined

  return (
    <main className="container mx-auto px-4 py-8">
      <HomeContent />

      <CategoryFilter />

      <Suspense fallback={<ProductSkeleton />}>
        <ProductList category={category} />
      </Suspense>
    </main>
  )
}
