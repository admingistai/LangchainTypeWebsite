"use client"

import { DarkHeader } from "@/components/layout/DarkHeader"
import { HeroSection } from "@/components/sections/HeroSection"
import { ValueSection } from "@/components/sections/ValueSection"
import { SolutionsSection } from "@/components/sections/SolutionsSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { FAQsSection } from "@/components/sections/FAQsSection"
import { CTASection } from "@/components/sections/CTASection"
import { Footer } from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <DarkHeader />
      <main>
        <HeroSection />
        <ValueSection />
        <SolutionsSection />
        <TestimonialsSection />
        <FAQsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
