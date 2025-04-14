"use client"

import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/hooks/use-translation"

const categories = [
  { name: "all", label: "categories.all" },
  { name: "men's clothing", label: "categories.mens_clothing" },
  { name: "women's clothing", label: "categories.womens_clothing" },
  { name: "jewelery", label: "categories.jewelery" },
  { name: "electronics", label: "categories.electronics" },
]

export default function CategoryFilter() {
  const { t } = useTranslation()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => {
        // Create a new URL search params object for this category
        const params = new URLSearchParams(searchParams)

        if (category.name === "all") {
          params.delete("category")
        } else {
          params.set("category", category.name)
        }

        return (
          <Link
            key={category.name}
            href={`${pathname}?${params.toString()}`}
            className={cn(
              "transition-colors",
              currentCategory === category.name && pathname === "/" ? "pointer-events-none" : "",
            )}
          >
            <Button variant={currentCategory === category.name ? "default" : "outline"} className="capitalize">
              {t(category.label)}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}
