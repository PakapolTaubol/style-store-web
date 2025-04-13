"use client"

import { useState, useEffect } from "react"
import type { Review } from "@/types"
import ReviewList from "@/components/review-list"
import ReviewForm from "@/components/review-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getReviews, addReview, getAverageRating } from "@/lib/review-service"
import { useTranslation } from "@/hooks/use-translation"

interface ProductReviewsProps {
  productId: number
}

export function ProductReviews({ productId }: ProductReviewsProps) {
  const { t } = useTranslation()
  const [reviews, setReviews] = useState<Review[]>([])
  const [averageRating, setAverageRating] = useState(0)

  useEffect(() => {
    const productReviews = getReviews(productId)
    setReviews(productReviews)
    setAverageRating(getAverageRating(productReviews))
  }, [productId])

  const handleReviewSubmit = (reviewData: { productId: number; username: string; rating: number; comment: string }) => {
    const newReview = addReview(reviewData)
    setReviews((prev) => [newReview, ...prev])
    setAverageRating(getAverageRating([newReview, ...reviews]))
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("reviews.customerReviews")}</CardTitle>
            <CardDescription>
              {reviews.length > 0 ? t("reviews.basedOn", { count: reviews.length }) : t("reviews.noReviewsYet")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {reviews.length > 0 && (
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <span className="text-3xl font-bold mr-2">{averageRating}</span>
                  <span className="text-muted-foreground">/ 5</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(averageRating / 5) * 100}%` }} />
                </div>
              </div>
            )}
            <ReviewList reviews={reviews} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t("reviews.writeReview")}</CardTitle>
            <CardDescription>{t("reviews.shareExperience")}</CardDescription>
          </CardHeader>
          <CardContent>
            <ReviewForm productId={productId} onReviewSubmit={handleReviewSubmit} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
