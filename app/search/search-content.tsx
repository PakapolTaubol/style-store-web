"use client"

import { useTranslation } from "@/hooks/use-translation"

interface SearchContentProps {
  query: string
}

export function SearchContent({ query }: SearchContentProps) {
  const { t } = useTranslation()

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">{t("search.title")}</h1>
      {query && (
        <p className="text-muted-foreground">
          {t("search.for")} <span className="font-medium text-foreground">"{query}"</span>
        </p>
      )}
    </div>
  )
}
