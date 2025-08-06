"use client"

import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import Image from "next/image"

export const BookingHeader = () => {
  return (
    <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Back to Home */}
          <Link 
            href="/"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
            <span className="text-sm">Back to Home</span>
          </Link>

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/Gist G white no background.png"
              alt="Gist Answers Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl text-white">Gist Answers</span>
          </div>

          {/* Empty div for layout balance */}
          <div className="w-24"></div>
        </div>
      </div>
    </header>
  )
}