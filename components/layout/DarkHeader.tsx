"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const DarkHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-200 ${
        isScrolled ? "bg-[#0d2626]/95 backdrop-blur-md border-b border-white/10" : ""
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Image 
                src="/Gist G white no background.png" 
                alt="Gist Answers" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-xl text-white">Gist Answers</span>
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://prorata.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 font-medium hover:text-white transition-colors"
            >
              About Us
            </a>
            <Link href="/book-demo">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                Book a Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}