"use client"

import { BookingHeader } from "@/components/book-demo/BookingHeader"
import { DateTimeSelector } from "@/components/book-demo/DateTimeSelector"
import { InstallationBenefits } from "@/components/book-demo/InstallationBenefits"
import { motion } from "framer-motion"
import { motionVariants, optimizedViewport, getMotionProps } from "@/lib/motion"

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d2626] to-[#1a3333]">
      <BookingHeader />
      
      <main className="container mx-auto px-4 py-8">
        {/* Top Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-8"
        >
          <div className="relative p-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl" />
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-gray-300 text-sm mb-2">Gist Answers Pilot Program</p>
                  <h1 className="text-2xl md:text-3xl font-bold text-white">Demo / Onboarding Call</h1>
                </div>
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors">
                  Join a Calendly
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  30 min
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Web conferencing details provided upon confirmation.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          <DateTimeSelector />
          <InstallationBenefits />
        </motion.div>
      </main>
    </div>
  )
}