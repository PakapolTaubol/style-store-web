"use client"

import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export function AboutContent() {
  const { t } = useTranslation()

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">{t("about.title")}</h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">{t("about.story")}</h2>
          <p className="text-muted-foreground mb-4">{t("about.storyText1")}</p>
          <p className="text-muted-foreground mb-4">{t("about.storyText2")}</p>
          <p className="text-muted-foreground">{t("about.storyText3")}</p>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden">{/* Image */}</div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-muted rounded-lg p-6 text-center">
          <h3 className="font-bold mb-2">{t("about.quality")}</h3>
          <p className="text-sm text-muted-foreground">{t("about.qualityText")}</p>
        </div>
        <div className="bg-muted rounded-lg p-6 text-center">
          <h3 className="font-bold mb-2">{t("about.shipping")}</h3>
          <p className="text-sm text-muted-foreground">{t("about.shippingText")}</p>
        </div>
        <div className="bg-muted rounded-lg p-6 text-center">
          <h3 className="font-bold mb-2">{t("about.satisfaction")}</h3>
          <p className="text-sm text-muted-foreground">{t("about.satisfactionText")}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-6">{t("about.contact")}</h2>
          <div className="grid gap-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">{t("about.address")}</p>
                <p className="text-muted-foreground">
                  123 Fashion Street
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">{t("about.email")}</p>
                <p className="text-muted-foreground">support@stylestore.example</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">{t("about.phone")}</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-medium">{t("about.hours")}</p>
                <p className="text-muted-foreground">
                  Monday - Friday: 9am - 6pm EST
                  <br />
                  Saturday: 10am - 4pm EST
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-6">{t("about.location")}</h2>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">{/* Map location image */}</div>
        </div>
      </div>
    </>
  )
}
