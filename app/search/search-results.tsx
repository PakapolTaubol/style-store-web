import ProductCard from "@/components/product-card"
import { getProducts } from "@/lib/api"
import { NoResults } from "./no-results"

interface SearchResultsProps {
  query: string
}

export default async function SearchResults({ query }: SearchResultsProps) {
  if (!query) {
    return <NoResults query={query} />
  }

  const products = await getProducts()

  // Search in title, description, and category
  const searchResults = products.filter((product) => {
    const searchableText = `${product.title} ${product.description} ${product.category}`.toLowerCase()
    return searchableText.includes(query.toLowerCase())
  })

  if (searchResults.length === 0) {
    return <NoResults query={query} />
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {searchResults.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
