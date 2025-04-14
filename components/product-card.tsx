"use client"

import type { Product } from "@/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/hooks/use-translation"
import AddToCartButton from "./add-to-cart-button"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-md">
      <div className="relative aspect-square bg-muted product-image-container">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </Link>
      </div>
      <CardContent className="flex-grow p-4">
        <Link href={`/products/${product.id}`} className="hover:underline">
          <h3 className="font-medium line-clamp-2 h-12">{product.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mt-2 line-clamp-2 h-10">{product.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <p className="font-semibold">${product.price.toFixed(2)}</p>
        <AddToCartButton product={product} size="sm" />
      </CardFooter>
    </Card>
  )
}
