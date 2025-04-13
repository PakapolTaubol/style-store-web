"use client"

import { useState } from "react"
import type { Review } from "@/types"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

interface ReviewListProps {
  reviews: Review[]
}

export default function ReviewList({ reviews }: ReviewListProps) {
  const { t } = useTranslation()
  const [visibleReviews, setVisibleReviews] = useState(3)

  const showMoreReviews = () => {
    setVisibleReviews((prev) => prev + 5)
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-muted-foreground">{t("reviews.noReviews")}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {reviews.slice(0, visibleReviews).map((review) => (
        <div key={review.id} className="border-b pb-4 last:border-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className="font-medium">{review.username}</div>
              <span className="mx-2 text-muted-foreground">•</span>
              <div className="text-sm text-muted-foreground">{review.date}</div>
            </div>
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < review.rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-sm">{review.comment}</p>
        </div>
      ))}

      {reviews.length > visibleReviews && (
        <div className="text-center">
          <Button variant="outline" onClick={showMoreReviews}>
            {t("reviews.showMore")}
          </Button>
        </div>
      )}
    </div>
  )
}
