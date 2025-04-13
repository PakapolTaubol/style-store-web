"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Star } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"

interface ReviewFormProps {
  productId: number
  onReviewSubmit: (review: { productId: number; username: string; rating: number; comment: string }) => void
}

export default function ReviewForm({ productId, onReviewSubmit }: ReviewFormProps) {
  const { t } = useTranslation()
  const { toast } = useToast()
  const [username, setUsername] = useState("")
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!username.trim()) {
      toast({
        variant: "destructive",
        title: t("reviews.error"),
        description: t("reviews.nameRequired"),
      })
      return
    }

    if (rating === 0) {
      toast({
        variant: "destructive",
        title: t("reviews.error"),
        description: t("reviews.ratingRequired"),
      })
      return
    }

    if (!comment.trim()) {
      toast({
        variant: "destructive",
        title: t("reviews.error"),
        description: t("reviews.commentRequired"),
      })
      return
    }

    setIsSubmitting(true)

    // Simulate network delay
    setTimeout(() => {
      onReviewSubmit({
        productId,
        username,
        rating,
        comment,
      })

      // Reset form
      setUsername("")
      setRating(0)
      setComment("")
      setIsSubmitting(false)

      toast({
        title: t("reviews.success"),
        description: t("reviews.thankYou"),
      })
    }, 500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          {t("reviews.name")}
        </label>
        <Input
          id="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t("reviews.namePlaceholder")}
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">{t("reviews.rating")}</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="focus:outline-none"
            >
              <Star
                className={`h-6 w-6 ${
                  star <= (hoveredRating || rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium mb-1">
          {t("reviews.comment")}
        </label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={t("reviews.commentPlaceholder")}
          className="min-h-[100px]"
        />
      </div>

      <Button type="submit" disabled={isSubmitting} className="add-to-cart-button">
        {isSubmitting ? t("reviews.submitting") : t("reviews.submit")}
      </Button>
    </form>
  )
}
