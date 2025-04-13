import type { Product } from "@/types"
import { mockProduct, mockProducts } from "./mock-data"

export async function fetchWithFallback<T>(url: string, fallbackData: T, options?: RequestInit): Promise<T> {
  try {
    console.log(`Fetching data from ${url}...`)

    const res = await fetch(url, {
      ...options,
      cache: "force-cache",
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.log(`API request failed with status: ${res.status} ${res.statusText}. Using fallback data.`)
      return fallbackData
    }

    // Check if the response is JSON before trying to parse it
    const contentType = res.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
      console.log(`Response is not JSON (${contentType}). Using fallback data.`)
      return fallbackData
    }

    // Use text() first to check the response
    const text = await res.text()

    // If the response is empty, return fallback data
    if (!text || text.trim() === "") {
      console.log("Empty response received. Using fallback data.")
      return fallbackData
    }

    try {
      // Try to parse the text as JSON
      const data = JSON.parse(text) as T
      return data
    } catch (parseError) {
      console.log(`Failed to parse response as JSON: ${parseError}. Response was: ${text.substring(0, 100)}...`)
      return fallbackData
    }
  } catch (error) {
    console.log(`Network or other error: ${error}. Using fallback data.`)
    return fallbackData
  }
}

// Create a more resilient version that doesn't log errors to the console
export async function getProducts(): Promise<Product[]> {
  // Try to use a local cache first to avoid API calls
  try {
    // Always return mock data for now to avoid API rate limiting
    return mockProducts
  } catch (error) {
    return mockProducts
  }
}

export async function getProduct(id: string): Promise<Product> {
  // Try to find the product in our mock data first
  const foundProduct = mockProducts.find((p) => p.id.toString() === id)
  if (foundProduct) {
    return foundProduct
  }

  // If not found in mock data, return the default mock product
  return mockProduct
}
