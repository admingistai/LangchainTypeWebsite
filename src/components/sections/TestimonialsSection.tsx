"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { placeholderAssets } from "@/data/placeholderAssets"
import { Quote } from "lucide-react"

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What our customers say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how leading organizations are transforming their operations with Gist Answers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {placeholderAssets.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-blue-500 mb-6" />
                  <blockquote className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.company.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-gray-600 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
