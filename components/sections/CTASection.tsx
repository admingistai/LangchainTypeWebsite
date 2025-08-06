"use client"

import { Button } from "@/components/ui/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowRight01Icon, Calendar03Icon } from "@hugeicons/core-free-icons"
import { motion } from "framer-motion"
import { motionVariants, optimizedViewport, getMotionProps } from "@/lib/motion"

export const CTASection = () => {

  return (
    <section className="py-24 bg-gradient-to-b from-[#0d2626] via-[#1a3333] to-[#0a1a1a] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          {...getMotionProps({
            initial: "initial",
            whileInView: "animate",
            viewport: optimizedViewport,
            variants: motionVariants.staggerContainer
          })}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-light text-white mb-12"
            variants={motionVariants.fadeUpSlow}
          >
            Ready to see it on your site Live?{" "}
            <span className="font-normal bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Lets kick off your pilot.</span>
          </motion.h2>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={motionVariants.fadeUp}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 border-0"
            >
              <HugeiconsIcon icon={Calendar03Icon} size={20} className="mr-2" />
              Schedule a Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-gray-900 hover:bg-white/10 hover:text-gray-900 px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
            >
              Get Started Free
              <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="ml-2" />
            </Button>
          </motion.div>

          <motion.p 
            className="text-gray-400 text-sm mt-8"
            variants={motionVariants.fadeUp}
          >
            Enterprise-ready • Deploy in one minute
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}