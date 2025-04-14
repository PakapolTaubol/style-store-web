"use client"

import type { Product } from "@/types"
import { Star } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { t } = useTranslation()

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

        <div className="flex items-center mb-4">
          <div className="flex items-center mr-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.round(product.rating.rate) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.rating.count} {t("product.reviews")})
          </span>
        </div>

        <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>

        <p className="text-muted-foreground mb-6">{product.description}</p>

        <div className="mb-6">
          <p className="font-medium mb-2">{t("product.category")}</p>
          <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm">{product.category}</div>
        </div>
      </div>
    </>
  )
}
