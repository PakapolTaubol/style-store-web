"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Menu, Search, Package2 } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/hooks/use-translation"
import { LanguageSwitcher } from "./language-switcher"
import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  const { items } = useCart()
  const { t } = useTranslation()
  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link href="/" className="text-lg font-medium">
                {t("nav.home")}
              </Link>
              <Link href="/about" className="text-lg font-medium">
                {t("nav.about")}
              </Link>
              <Link href="/cart" className="text-lg font-medium">
                {t("nav.cart")}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link href="/" className="flex items-center gap-2 mr-6">
          <Package2 className="h-6 w-6" />
          <span className="font-bold hidden md:inline-block">{t("site.name")}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 mx-6">
          <Link href="/" className="text-sm font-medium">
            {t("nav.home")}
          </Link>
          <Link href="/about" className="text-sm font-medium">
            {t("nav.about")}
          </Link>
        </nav>

        <div className="flex items-center ml-auto gap-4">
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={t("nav.search")}
              className="w-[200px] lg:w-[300px] pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <ThemeToggle />
          <LanguageSwitcher />

          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
                  {itemCount}
                </span>
              )}
              <span className="sr-only">{t("nav.cart")}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
