"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ChevronDown } from "lucide-react"
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { LanguageSelector } from "./LanguageSelector"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Gartner Banner */}
      <div className="bg-gartner-bg border-b border-blue-200">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">G</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-gray-900">Emerging Market Quadrants</h3>
                  <p className="text-xs text-gray-600">
                    Gist Answers recognized as an emerging leader in Gartner EMQs for Generative AI technologies
                  </p>
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" className="bg-white">
              Check here
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-sm">G</span>
                </div>
                <span className="font-bold text-xl text-gray-900">Gist Answers</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Navigation />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              <LanguageSelector />

              <div className="hidden lg:flex items-center space-x-3">
                <Button variant="ghost" className="text-gray-700">
                  Sign In
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Contact us</Button>
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <MobileMenu />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
