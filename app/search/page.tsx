import { Suspense } from "react"
import { ProductSkeleton } from "@/components/product-skeleton"
import SearchResults from "./search-results"
import { SearchContent } from "./search-content"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ""

  return (
    <main className="container mx-auto px-4 py-8">
      <SearchContent query={query} />

      <Suspense fallback={<ProductSkeleton />}>
        <SearchResults query={query} />
      </Suspense>
    </main>
  )
}
