"use client"

import { motion } from "framer-motion"
import { motionVariants, optimizedViewport, getMotionProps } from "@/lib/motion"
import { HugeiconsIcon } from "@hugeicons/react"
import { ZapIcon, Target01Icon, Shield01Icon, SparklesIcon } from "@hugeicons/core-free-icons"

export const ValueSection = () => {

  return (
    <section className="py-24 bg-gradient-to-b from-[#0d2626] to-[#1a3333]">
      <div className="container mx-auto px-4">
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
            className="text-4xl md:text-5xl font-light text-white mb-6"
            variants={motionVariants.fadeUpSlow}
          >
            Why <span className="font-normal bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Gist Answers</span>?
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
            variants={motionVariants.staggerContainer}
          >
            {[
              {
                title: "Effortless install",
                description: "One line of code. Just copy, paste, and go!",
                icon: <HugeiconsIcon icon={ZapIcon} size={48} className="text-purple-400" />
              },
              {
                title: "Accurate answers",
                description: "Designed to always promote your content first.",
                icon: <HugeiconsIcon icon={Target01Icon} size={48} className="text-purple-400" />
              },
              {
                title: "Designed for privacy",
                description: "Built to meet privacy regulations and protect your site from legal risk.",
                icon: <HugeiconsIcon icon={Shield01Icon} size={48} className="text-purple-400" />
              },
              {
                title: "Free",
                description: "Advanced AI for your site—paid for by hyper-relevant in-chat ads.",
                icon: <HugeiconsIcon icon={SparklesIcon} size={48} className="text-purple-400" />
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                variants={motionVariants.fadeUp}
                {...getMotionProps({
                  initial: "rest",
                  whileHover: "hover",
                  variants: motionVariants.hoverLiftSubtle
                })}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h3 className="text-xl font-medium text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}