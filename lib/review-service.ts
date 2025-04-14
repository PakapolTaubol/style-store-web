import { mockReviews } from "./mock-data"
import type { Review } from "@/types"

// Get reviews for a product
export function getReviews(productId: number): Review[] {
  return mockReviews[productId] || []
}

// Add a new review
export function addReview(review: Omit<Review, "id" | "date">): Review {
  const newReview: Review = {
    ...review,
    id: Date.now(), // Use timestamp as a simple ID
    date: new Date().toISOString().split("T")[0], // Format as YYYY-MM-DD
  }

  if (!mockReviews[review.productId]) {
    mockReviews[review.productId] = []
  }

  mockReviews[review.productId].unshift(newReview) // Add to the beginning of the array
  return newReview
}

// Calculate average rating
export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0
  const sum = reviews.reduce((total, review) => total + review.rating, 0)
  return Number.parseFloat((sum / reviews.length).toFixed(1))
}
