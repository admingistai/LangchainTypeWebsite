"use client"

import { Card, CardContent } from "@/components/ui/card"
// import { placeholderAssets } from "@/data/placeholderAssets"
import { HugeiconsIcon } from "@hugeicons/react"
import { QuoteDownIcon } from "@hugeicons/core-free-icons"
import { motion } from "framer-motion"
import { motionVariants, optimizedViewport, getMotionProps } from "@/lib/motion"

export const TestimonialsSection = () => {

  const testimonials = [
    {
      company: "TechStartup Co",
      quote:
        "Gist Answers transformed our documentation site. Visitors now find answers instantly instead of bouncing after 30 seconds. Our engagement metrics are through the roof!",
      author: "Sarah Chen, Head of Product",
    },
    {
      company: "EcoCommerce",
      quote:
        "Installation took literally 2 minutes. Now our customers get instant answers about shipping, returns, and product details. It's like having a 24/7 support agent that never sleeps.",
      author: "Marcus Rodriguez, CEO",
    },
    {
      company: "FinanceFlow",
      quote:
        "We were skeptical about AI search, but Gist Answers only promotes our content - never external links. It's privacy-compliant and actually drives more traffic to our key pages.",
      author: "Jennifer Kim, CTO",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          {...getMotionProps({
            initial: "initial",
            whileInView: "animate",
            viewport: optimizedViewport,
            variants: motionVariants.fadeUpSlow
          })}
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            What our <span className="font-normal bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">customers</span> say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how websites are using Gist Answers to boost engagement and help visitors find answers instantly
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          {...getMotionProps({
            initial: "initial",
            whileInView: "animate",
            viewport: optimizedViewport,
            variants: motionVariants.staggerContainer
          })}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              variants={motionVariants.fadeUp}
              {...getMotionProps({
                initial: "rest",
                whileHover: "hover",
                variants: motionVariants.hoverLiftSubtle
              })}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardContent className="p-8">
                  <HugeiconsIcon icon={QuoteDownIcon} size={32} color="rgb(168 85 247)" className="mb-6" />
                  <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md">
                      {testimonial.company.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}