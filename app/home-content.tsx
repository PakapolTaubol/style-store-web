"use client"

import { useTranslation } from "@/hooks/use-translation"

export function HomeContent() {
  const { t } = useTranslation()

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">{t("site.name")}</h1>
      <p className="text-center text-muted-foreground mb-8">{t("site.tagline")}</p>
    </>
  )
}
