import Image from "next/image"
import AddToCartButton from "@/components/add-to-cart-button"
import { getProduct } from "@/lib/api"
import { ProductDetail } from "./product-detail"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductReviews } from "./product-reviews"

export default async function ProductPage({ params }: { params: { id: string } }) {
  // Use the improved getProduct function
  const product = await getProduct(params.id)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-sm font-medium">
        <ArrowLeft className="mr-2 h-4 w-4" />
        <span>Back to products</span>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="relative aspect-square bg-white dark:bg-gray-800 rounded-lg overflow-hidden product-image-container">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-8"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div>
          <ProductDetail product={product} />
          <div className="mt-6">
            <AddToCartButton product={product} className="w-full md:w-auto" />
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mt-8">
        <TabsList>
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({product.rating.count})</TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-4">
          <div className="prose max-w-none dark:prose-invert">
            <h3 className="text-lg font-medium mb-2">Product Description</h3>
            <p>{product.description}</p>
            <h3 className="text-lg font-medium mt-4 mb-2">Features</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>High-quality materials</li>
              <li>Durable construction</li>
              <li>Versatile design</li>
              <li>Easy to maintain</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="mt-4">
          <ProductReviews productId={product.id} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
