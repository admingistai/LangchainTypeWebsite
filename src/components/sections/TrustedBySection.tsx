"use client"

import { motion } from "framer-motion"
import { PlaceholderLogo } from "@/components/common/PlaceholderLogo"
import { placeholderAssets } from "@/data/placeholderAssets"

export const TrustedBySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by leading enterprises</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of organizations that rely on Gist Answers to transform their operations with AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center"
        >
          {placeholderAssets.logos.companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <PlaceholderLogo
                name={company.name}
                initials={company.placeholder}
                className="w-24 h-12 bg-gray-100 hover:bg-gradient-to-br hover:from-gradient-start hover:to-gradient-end transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
