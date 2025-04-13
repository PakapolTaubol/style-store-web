"use client"

import { useTranslation } from "@/hooks/use-translation"
import CategoryFilter from "@/components/category-filter"

interface NoResultsProps {
  query: string
}

export function NoResults({ query }: NoResultsProps) {
  const { t } = useTranslation()

  return (
    <div className="text-center py-12">
      {query ? (
        <>
          <h2 className="text-xl font-medium mb-4">
            {t("search.noResults")} <span className="font-bold">"{query}"</span>
          </h2>
          <p className="text-muted-foreground mb-8">{t("search.tryAgain")}</p>
        </>
      ) : (
        <h2 className="text-xl font-medium mb-4">{t("search.title")}</h2>
      )}

      <div className="max-w-md mx-auto">
        <CategoryFilter />
      </div>
    </div>
  )
}
